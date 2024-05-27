"use client";
import { ButtonDropdown, ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useSWR, { Fetcher } from "swr";
import { logs, company, users } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { FloatingLabel } from "flowbite-react";

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then((res) => res.json());
const ClockInOut = () => {
  // hook variable
  const [sending, setSending] = useState<boolean>(false);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [isSick, setIsSick] = useState<boolean>(false);
  const [fromHome, setFromHome] = useState<boolean>(false);
  const [todaysWork, setTodaysWork] = useState<string[]>([]);
  const [duty, setDuty] = useState<string>("");
  const [showDuty, setShowDuty] = useState<boolean>(false);
  const [options1, setOptions1] = useState([
    {
      label: "Clock From Home",
      className: "bg-green-400 hover:bg-green-500 text-white disabled:bg-green-300",
    },
    {
      label: "Clock From Office",
      className: "bg-violet-400 hover:bg-violet-500 text-white disabled:bg-violet-300",
    },
    {
      label: "Sick Day",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
    {
      label: "Clock With Duty",
      className: "bg-blue-400 hover:bg-blue-500 text-white disabled:bg-blue-300",
    },
  ]);
  const [options2, setOptions2] = useState([
    {
      label: "Clock-Out",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
  ]);
  const [options3, setOptions3] = useState([
    {
      label: "Good Job",
      className: "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-300",
    },
  ]);
  //fetched data
  const {
    data: todayAttendance,
    error,
    isLoading,
    mutate: mutateAttendance,
  } = useSWR<logs>("/api/user/attendance", fetcher);
  const {
    data: company,
    error: companyError,
    isLoading: companyLoading,
  } = useSWR<company>(`/api/company`, fetcher);
  const { data: user } = useSWR<users>(`/api/user`, fetcher, { refreshInterval: 1000 });

  const buttonChanges = (value: string | null) => {
    if (value == "Clock With Duty") {
      setShowDuty(true);
    } else {
      setShowDuty(false);
    }
  };

  const handleClockBtn = async (value: string) => {
    try {
      setSending(true);
      const type = getType(value);
      const { latitude, longitude } = await getUserLocation();
      const { targetLatitude, targetLongitude } = getTargetLocation(
        type === "work-from-home" || fromHome
      );
      const distance = Math.floor(
        calculateDistance(latitude, longitude, Number(targetLatitude), Number(targetLongitude)) *
          1000
      );
      if (distance > 50 && type !== "sick" && type !== "work_with_duty") {
        toast.error("You are not in the right location to clockin");
        return;
      }

      if (type === "clock-out" && todaysWork.length === 0) {
        toast.error("You need to fill today's work in order to clockout");
        return;
      }

      if (type === "work_with_duty" && !duty) {
        toast.error("You need to fill duty in order to clockin");
        return;
      }

      if (type === "sick") {
        await sendSickDay({ type, latitude, longitude });
      } else {
        await sendWork({
          type,
          latitude,
          longitude,
          todaysWork,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const sendSickDay = async ({
    type,
    latitude,
    longitude,
  }: {
    type: string;
    latitude: number;
    longitude: number;
  }) => {
    try {
      const response = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: JSON.stringify({
          type,
          clock_in_time: getTimeOnly(),
          date: getDateOnly(),
          clock_in_latitude: latitude,
          clock_in_longitude: longitude,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      mutateAttendance();
    } catch (error) {
      console.error(error);
    }
  };

  const sendWork = async ({
    type,
    latitude,
    longitude,
    todaysWork,
  }: {
    type: string;
    latitude: number;
    longitude: number;
    todaysWork: string[];
  }) => {
    let sendData = {};
    if (type === "clock-out") {
      sendData = {
        type,
        clock_out_time: getTimeOnly(),
        date: getDateOnly(),
        clock_out_latitude: latitude,
        clock_out_longitude: longitude,
        todaysWork,
      };
    } else if (type === "work_with_duty") {
      sendData = {
        type,
        clock_in_time: getTimeOnly(),
        date: getDateOnly(),
        clock_in_latitude: latitude,
        clock_in_longitude: longitude,
        todaysWork: [`Duty: ${duty}`],
      };
    } else {
      sendData = {
        type,
        clock_in_time: getTimeOnly(),
        date: getDateOnly(),
        clock_in_latitude: latitude,
        clock_in_longitude: longitude,
        todaysWork,
      };
    }
    try {
      const res = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      mutateAttendance();
      setShowDuty(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getType = (value: string) => {
    switch (value) {
      case "Sick Day":
        return "sick";
        break;
      case "Clock From Home":
        return "work-from-home";
        break;
      case "Clock From Office":
        return "work-from-office";
        break;
      case "Clock-Out":
        return "clock-out";
        break;
      case "Clock With Duty":
        return "work_with_duty";
        break;
      default:
        return "work-from-office";
    }
  };

  const getUserLocation = () => {
    return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    });
  };

  const getTargetLocation = (
    fromHome: boolean
  ): {
    targetLatitude: Prisma.Decimal;
    targetLongitude: Prisma.Decimal;
  } => {
    let targetLatitude = new Prisma.Decimal(0.0);
    let targetLongitude = new Prisma.Decimal(0.0);
    if (fromHome) {
      targetLatitude = new Prisma.Decimal(user?.home_latitude || 0);
      targetLongitude = new Prisma.Decimal(user?.home_longitude || 0);
    } else {
      targetLatitude = new Prisma.Decimal(company?.latitude || 0);
      targetLongitude = new Prisma.Decimal(company?.longitude || 0);
    }
    return {
      targetLatitude,
      targetLongitude,
    };
  };

  const handleAddItem = (value: string) => {
    setTodaysWork((prev) => [...prev, value]);
  };

  const handleRemoveItem = (value: string) => {
    setTodaysWork((prev) => prev.filter((pre) => pre !== value));
  };

  useEffect(() => {
    if (!isLoading && todayAttendance) {
      const type = todayAttendance?.type;
      if (type === "sick") {
        setIsSick(true);
      } else {
        setClockedIn(true);
        if (type === "work_from_home") {
          setFromHome(true);
        }
        if (todayAttendance.clock_out_time) {
          setDone(true);
        }
      }
    }
  }, [todayAttendance, isLoading]);

  return isSick ? (
    <button className="w-full bg-sky-400  text-white cursor-default rounded p-4">Rest Well!</button>
  ) : (
    <>
      {clockedIn && !done && (
        <ListInput items={todaysWork} addItem={handleAddItem} removeItem={handleRemoveItem} />
      )}
      {showDuty && (
        <FloatingLabel
          variant="outlined"
          label="Duty"
          value={duty}
          onChange={(e) => setDuty(e.currentTarget.value)}
        />
      )}
      <ButtonDropdown
        buttonChanged={buttonChanges}
        onClick={(value) => handleClockBtn(value)}
        loading={isLoading || sending}
        disabled={done || isLoading || sending}
        className="bg-slate-900 hover:bg-black text-white"
        options={done ? options3 : clockedIn ? options2 : options1}
      />
    </>
  );
};
export default ClockInOut;
