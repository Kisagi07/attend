"use client";
import ButtonDropdown from "./ButtonDropdown";
import { useEffect, useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { toast } from "react-toastify";
import { LogModel } from "@/models/Log";
import clsx from "clsx";
import { CompanyModel } from "@/models/Company";
import { useSession } from "next-auth/react";
import { UserModel } from "@/models/User";
import { getWordDay } from "@/app/helper";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const ClockInOut = () => {
  const { data: session, status } = useSession();
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
  const [toleranceClockIn, setToleranceClockIn] = useState<string>("");
  const [allowToleranceClockIn, setAllowToleranceClockIn] =
    useState<boolean>(true);

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

  const pastTolerance = (
    currentTime: string,
    toleranceTime: String
  ): boolean => {
    const [hours1, minutes1] = currentTime.split(":").map(Number);
    const [hours2, minutes2] = toleranceTime.split(":").map(Number);

    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    if (totalMinutes1 > totalMinutes2) {
      return true;
    } else {
      return false;
    }
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
      const res = await fetch(`/api/attendance`, {
        method: "POST",
        body: JSON.stringify({
          type: typeLower,
          time,
          date,
          latitude,
          longitude,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      if (!res.ok) {
        throw new Error("Failed on sending attendance log");
      }

      const data = await res.json();
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
  const calculateToleratedTime = (
    shiftStart: string,
    tolerance: number
  ): string => {
    // Parse the shift start time
    const [hours, minutes] = shiftStart.split(":").map(Number);

    let toleratedHours = hours;
    let toleratedMinutes = minutes - tolerance;

    if (toleratedMinutes < 0) {
      toleratedHours--;
      toleratedMinutes += 60;
    }

    const toleratedTime = `${String(toleratedHours).padStart(2, "0")}:${String(
      toleratedMinutes
    ).padStart(2, "0")}`;
    return toleratedTime;
  };

  useEffect(() => {
    Promise.all([
      fetch(`/api/users/${session?.user.work_id}`).then(
        (res) => res.json() as Promise<UserModel>
      ),
      fetch(`/api/company`).then((res) => res.json() as Promise<CompanyModel>),
      fetch(`/api/attendance`).then((res) => res.json() as Promise<LogModel[]>),
    ]).then((data) => {
      // save the company coordinate to state
      setCompanyPosition({
        latitude: +data[1].latitude,
        longitude: +data[1].longitude,
      });

      // if company tolerance time is active then calculate it
      if (data[1].tolerance_active) {
        const shiftStart = data[0].job_position?.shift_start;
        if (shiftStart) {
          const toleratedTime = calculateToleratedTime(
            shiftStart,
            data[1].tolerance_time
          );
          setToleranceClockIn(toleratedTime);
        }
      }

      // check for day off, sick, and other clock-in states
      const havePosition = data[0].job_position;
      const today = getWordDay();
      const dayOff = !data[0].job_position?.work_day.includes(today);
      if (!havePosition) {
        setNavigationError("No job position asigned to you");
        setDoneForToday(true);
      } else if (dayOff) {
        setNavigationError("Enjoy your day off");
        setDoneForToday(true);
      } else if (data[2].length > 0) {
        const sick = data[2].find((log) => log.type === "sick");
        const clockIn = data[2].find((log) => log.type === "clock-in");
        const clockOut = data[2].find((log) => log.type === "clock-out");
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
    });

    // watch the user coordinate
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
  useEffect(() => {
    const compareTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const time = `${hours}:${minutes}`;
      setAllowToleranceClockIn(pastTolerance(time, toleranceClockIn));
    };
    if (toleranceClockIn) {
      const intervalId = setInterval(compareTime, 1000);

      return () => clearInterval(intervalId);
    }
  }, [toleranceClockIn]);
  return navigationError || !allowToleranceClockIn ? (
    <button
      disabled
      className={clsx(
        "bg-slate-400 w-full text-white flex gap-x-2 items-center justify-center rounded px-3 py-2 relative",
        {
          "!bg-green-400": doneForToday,
        }
      )}
    >
      {navigationError || `You can clock in past ${toleranceClockIn}`}
      {!doneForToday && (
        <>
          <FaRegCircleQuestion className="cursor-pointer peer" />
          <div className="border border-slate-200 bottom-0 text-left peer-hover:block text-sm hidden translate-y-full text-slate-600 p-2 absolute bg-white">
            <p>
              If you&apos;re already in office area but still the button show
              &quot;Too far...&quot;
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
