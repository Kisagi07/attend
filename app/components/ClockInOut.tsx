"use client";
import ButtonDropdown from "./ButtonDropdown";
import { useEffect, useState } from "react";
import getCompany from "@/app/libs/getCompany";
import { FaRegCircleQuestion } from "react-icons/fa6";
import postAttendance from "../libs/postAttendance";
import { toast } from "react-toastify";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const ClockInOut = () => {
  const clockInOption = [
    {
      label: "Clock-in",
      className: "bg-green-400 hover:bg-green-500 text-white",
    },
    {
      label: "Sick",
      className: "bg-red-400 hover:bg-red-500 text-white",
    },
  ];

  const [navigationError, setNavigationError] = useState<string>("Loading");
  const [position, setPosition] = useState<Coordinate>();
  const [companyPosition, setCompanyPosition] = useState<Coordinate>();
  const [sendingLog, setSendingLog] = useState<boolean>(false);

  const fetchCompany = async () => {
    const res = await getCompany();
    if (res) {
      setCompanyPosition({
        latitude: +res.latitude,
        longitude: +res.longitude,
      });
    } else {
      setNavigationError("Company Office has not been set");
    }
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
      } else {
        setNavigationError("");
      }
    }
  };

  const handleClockIn = async (type: string) => {
    setSendingLog(true);

    const dateObj = new Date();

    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    const seconds = dateObj.getSeconds().toString().padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;
    const date = dateObj.toLocaleDateString();
    const latitude = +position!.latitude.toFixed(8);
    const longitude = +position!.longitude.toFixed(8);
    try {
      const res = await postAttendance({
        type: type.toLowerCase(),
        time,
        date,
        latitude,
        longitude,
      });
      toast.success("Attendance Log Saved.");
    } catch (error: any) {
      toast.error(error.message);
    }
    setSendingLog(false);
  };

  useEffect(() => {
    fetchCompany();
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
      className="bg-slate-400 w-full text-white flex gap-x-2 items-center justify-center rounded px-3 py-2 relative"
    >
      {navigationError}
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
    </button>
  ) : (
    <>
      <ButtonDropdown
        onClick={(value) => handleClockIn(value)}
        className="bg-slate-900 hover:bg-black text-white"
        options={clockInOption}
      />
    </>
  );
};
export default ClockInOut;
