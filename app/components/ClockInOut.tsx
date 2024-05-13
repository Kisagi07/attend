"use client";
import { ButtonDropdown, InputText, ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { CompanyModel } from "@/models/Company";
import { LogModel } from "@/models/Log";
import { UserModel } from "@/models/User";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = (...args) =>
  fetch(...args).then((res) => res.json());
const ClockInOut = () => {
  // hook variable
  const [sending, setSending] = useState<boolean>(false);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [isSick, setIsSick] = useState<boolean>(false);
  const [fromHome, setFromHome] = useState<boolean>(false);
  const [todaysWork, setTodaysWork] = useState<string[]>([]);
  //fetched data
  const {
    data: todayAttendance,
    error,
    isLoading,
    mutate: mutateAttendance,
  } = useSWR<LogModel>("/api/user/attendance", fetcher);
  const {
    data: company,
    error: companyError,
    isLoading: companyLoading,
  } = useSWR<CompanyModel>(`/api/company`, fetcher);
  const { data: user } = useSWR<UserModel>(`/api/user`, fetcher);
  // non state variable
  const options = [
    {
      label: "Clock From Home",
      className:
        "bg-green-400 hover:bg-green-500 text-white disabled:bg-green-300",
    },
    {
      label: "Clock From Office",
      className:
        "bg-violet-400 hover:bg-violet-500 text-white disabled:bg-violet-300",
    },
    {
      label: "Sick Day",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
  ];
  const options2 = [
    {
      label: "Clock-Out",
      className: "bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300",
    },
  ];
  const options3 = [
    {
      label: "Good Job",
      className:
        "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-300",
    },
  ];

  const handleClockBtn = async (value: string) => {
    const type = getType(value);
    const { latitude, longitude } = await getUserLocation();
    const { targetLatitude, targetLongitude } = getTargetLocation(
      type === "work-from-home" || fromHome
    );
    const distance = Math.floor(
      calculateDistance(latitude, longitude, targetLatitude, targetLongitude) *
        1000
    );

    if (type === "clock-out" && !todaysWork) {
      toast.error("You need to fill today's work in order to clockout");
      return;
    }

    if (type === "sick") {
      sendSickDay({ type, latitude, longitude });
    } else {
      sendWork({
        type,
        latitude,
        longitude,
        todaysWork,
      });
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
      setSending(true);
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
      setSending(false);
    } catch (error) {
      console.error(error);
      setSending(false);
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
      setSending(true);
      const res = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      mutateAttendance();
      setSending(false);
    } catch (error) {
      setSending(false);
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
      default:
        return "work-from-office";
    }
  };

  const getUserLocation = () => {
    return new Promise<{ latitude: number; longitude: number }>(
      (resolve, reject) => {
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
      }
    );
  };

  const getTargetLocation = (
    fromHome: boolean
  ): {
    targetLatitude: number;
    targetLongitude: number;
  } => {
    let targetLatitude = 0;
    let targetLongitude = 0;
    if (fromHome) {
      targetLatitude = user?.home_latitude || 0;
      targetLongitude = user?.home_longitude || 0;
    } else {
      targetLatitude = company?.latitude || 0;
      targetLongitude = company?.longitude || 0;
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
        if (type === "work-from-home") {
          setFromHome(true);
        }
        if (todayAttendance.clock_out_time) {
          setDone(true);
        }
      }
    }
  }, [todayAttendance, isLoading]);

  return isSick ? (
    <button className="w-full bg-sky-400  text-white cursor-default rounded p-2">
      Rest Well!
    </button>
  ) : (
    <>
      {clockedIn && !done && (
        <ListInput
          items={todaysWork}
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
        />
      )}
      <ButtonDropdown
        onClick={(value) => handleClockBtn(value)}
        loading={isLoading || sending}
        disabled={done || isLoading || sending}
        className="bg-slate-900 hover:bg-black text-white"
        options={done ? options3 : clockedIn ? options2 : options}
      />
    </>
  );
};
export default ClockInOut;
