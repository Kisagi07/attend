"use client";
import ButtonDropdown from "./ButtonDropdown";
import { useEffect, useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import postAttendance from "../libs/postAttendance";
import { toast } from "react-toastify";
import getAttendance from "../libs/getAttendance";
import { LogModel } from "@/models/Log";
import clsx from "clsx";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const ClockInOut = () => {
  const [attendanceOptions, setAttendanceOptions] = useState([
    {
      label: "Clock-in",
      className:
        "bg-green-400 hover:bg-green-500 text-white disabled:bg-green-300",
    },
    {
      label: "Sick",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
  ]);
  const [navigationError, setNavigationError] = useState<string>("Loading");
  const [position, setPosition] = useState<Coordinate>();
  const [companyPosition, setCompanyPosition] = useState<Coordinate>();
  const [sendingLog, setSendingLog] = useState<boolean>(false);
  const [doneForToday, setDoneForToday] = useState<boolean>(false);

  const fetchCompany = async () => {
    const res = await fetch("/api/company");
    if (!res.ok) {
      throw new Error("Failedn on getting company data");
    }
    const data = await res.json();
    if (data) {
      setCompanyPosition({
        latitude: +data.latitude,
        longitude: +data.longitude,
      });
    } else {
      setNavigationError("Company Office has not been set");
    }
  };

  const fetchTodayLog = async () => {
    const logs: LogModel[] = await getAttendance();
    if (logs.length > 0) {
      const sick = logs.find((log) => log.type === "sick");
      const clockIn = logs.find((log) => log.type === "clock-in");
      const clockOut = logs.find((log) => log.type === "clock-out");
      if (sick) {
        changeToRestwell();
        return;
      } else if (clockIn && clockOut) {
        changeToGoodWork();
        handleDoneToday();
        return;
      } else if (clockIn) {
        changeToOut();
        return;
      }
    }
  };

  const changeToOut = () => {
    setAttendanceOptions([
      {
        label: "Clock-out",
        className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
      },
    ]);
  };

  const changeToRestwell = () => {
    setNavigationError("Rest Well");
  };

  const changeToGoodWork = () => [
    setNavigationError("Thanks for your work today"),
  ];

  const handleDoneToday = () => {
    setDoneForToday(true);
  };

  const haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const earthRadius = 6371000;

    const degToRad = (degrees: number) => degrees * (Math.PI / 180);

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

    return distance;
  };

  const compareDistance = () => {
    if (companyPosition && position) {
      const distance = haversineDistance(
        position.latitude,
        position.longitude,
        companyPosition.latitude,
        companyPosition.longitude
      );
      if (distance > 50) {
        setNavigationError("You are too far from the company");
      } else if (!doneForToday) {
        setNavigationError("");
      }
    }
  };

  const handleClockIn = async (type: string) => {
    setSendingLog(true);

    const dateObj = new Date();
    const typeLower = type.toLowerCase();

    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const seconds = dateObj.getSeconds().toString().padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;
    const date = dateObj.toLocaleDateString();
    const latitude = +position!.latitude.toFixed(8);
    const longitude = +position!.longitude.toFixed(8);
    try {
      const res = await postAttendance({
        type: typeLower,
        time,
        date,
        latitude,
        longitude,
      });
      toast.success("Attendance Log Saved.");
      if (typeLower === "sick") {
        changeToRestwell();
      } else if (typeLower === "clock-in") {
        changeToOut();
      } else if (typeLower === "clock-out") {
        changeToGoodWork();
        handleDoneToday();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setSendingLog(false);
  };

  useEffect(() => {
    fetchCompany();
    fetchTodayLog();
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          if (error.code === 1) {
            setNavigationError("Location Access Denied");
          }
          if (error.code === 2) {
            setNavigationError("Position Is Unavailable");
          }
        }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setNavigationError("Location is not supported in this browser");
    }
  }, []);
  useEffect(() => {
    compareDistance();
  }, [position, companyPosition]);
  return navigationError ? (
    <button
      disabled
      className={clsx(
        "bg-slate-400 w-full text-white flex gap-x-2 items-center justify-center rounded px-3 py-2 relative",
        {
          "!bg-green-400": doneForToday,
        }
      )}
    >
      {navigationError}
      {!doneForToday && (
        <>
          <FaRegCircleQuestion className="cursor-pointer peer" />
          <div className="border border-slate-200 bottom-0 text-left peer-hover:block text-sm hidden translate-y-full text-slate-600 p-2 absolute bg-white">
            <p>
              If you're already in office area but still the button show "Too
              far..."
            </p>
            <ul className="list-disc list-inside">
              <li>Make sure your GPS active</li>
              <li>Turn off then turn your GPS on again</li>
              <li>Change your connection</li>
            </ul>
          </div>
        </>
      )}
    </button>
  ) : (
    <>
      <ButtonDropdown
        onClick={(value) => handleClockIn(value)}
        disabled={sendingLog}
        className="bg-slate-900 hover:bg-black text-white"
        options={attendanceOptions}
      />
    </>
  );
};
export default ClockInOut;
