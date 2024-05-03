"use client";
import { ButtonDropdown, InputText, ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { CompanyModel } from "@/models/Company";
import { LogModel } from "@/models/Log";
import { UserModel } from "@/models/User";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then((res) => res.json());
const ClockInOut = () => {
  // hook variable
  const [sending, setSending] = useState<boolean>(false);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [isSick, setIsSick] = useState<boolean>(false);
  const [fromHome, setFromHome] = useState<boolean>(false);
  const [todaysWork, setTodaysWork] = useState<string[]>([]);
  //fetched data
  const { data, error, isLoading } = useSWR<LogModel[]>("/api/user/attendance", fetcher);
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
      className: "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-300",
    },
  ];

  const handleClockBtn = async (value: string) => {
    let targetLatitude = 0;
    let targetLongitude = 0;
    let type = "";

    switch (value) {
      case "Clock From Home":
        targetLatitude = user?.home_latitude || 0;
        targetLongitude = user?.home_longitude || 0;
        type = "from-home";
        break;
      case "Clock From Office":
        targetLatitude = company?.latitude || 0;
        targetLongitude = company?.longitude || 0;
        type = "from-office";
        break;
      case "Sick Day":
        type = "sick-day";
        break;
      case "Clock-Out":
        type = "clock-out";
        if (fromHome) {
          targetLatitude = user?.home_latitude || 0;
          targetLongitude = user?.home_longitude || 0;
        } else {
          targetLatitude = company?.latitude || 0;
          targetLongitude = company?.longitude || 0;
        }
        break;
      default:
        break;
    }

    if (value === "Clock-Out" && !todaysWork) {
      toast.error("You need to fill today's work in order to clockout");
      return;
    }

    try {
      if (type === "sick-day") {
        setSending(true);
        const response = await fetch(`/api/user/attendance`, {
          method: "POST",
          body: JSON.stringify({
            type,
            time: getTimeOnly(),
            date: getDateOnly(),
            latitude: 0,
            longitude: 0,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setSending(false);
        if (value === "Clock-Out") {
          setDone(true);
        } else if (value === "Clock From Home" || value === "Clock From Office") {
          setClockedIn(true);
        } else if (value === "Sick Day") {
          setIsSick(true);
        }
      } else {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const distance =
            Math.floor(
              calculateDistance(
                position.coords.latitude,
                position.coords.longitude,
                targetLatitude,
                targetLongitude
              )
            ) * 1000;
          if (distance > 50) {
            toast.info(
              `You're too far from location, you need to get closer by ${distance - 50} meters`
            );
          } else {
            setSending(true);
            const response = await fetch(`/api/user/attendance`, {
              method: "POST",
              body: JSON.stringify({
                type,
                time: getTimeOnly(),
                date: getDateOnly(),
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                todaysWork,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const data = await response.json();
            setSending(false);
            if (value === "Clock-Out") {
              setDone(true);
            } else if (value === "Clock From Home" || value === "Clock From Office") {
              setClockedIn(true);
            } else if (value === "Sick Day") {
              setIsSick(true);
            }
          }
        });
      }
    } catch (error) {
      console.error(error);
      setSending(false);
    }
  };

  const handleAddItem = (value: string) => {
    setTodaysWork((prev) => [...prev, value]);
  };

  const handleRemoveItem = (value: string) => {
    setTodaysWork((prev) => prev.filter((pre) => pre !== value));
  };

  useEffect(() => {
    if (!isLoading) {
      const fromHome = data?.find((log) => log.type === "from-home");
      const fromOffice = data?.find((log) => log.type === "from-office");
      const clockOut = data?.find((log) => log.type === "clock-out");
      const sick = data?.find((log) => log.type === "sick-day");

      setIsSick(false);
      setDone(false);
      setClockedIn(false);
      setFromHome(false);
      if (sick) {
        setIsSick(true);
      } else if ((fromHome || fromOffice) && clockOut) {
        setDone(true);
      } else if (fromHome) {
        setClockedIn(true);
        setFromHome(true);
      } else if (fromOffice) {
        setClockedIn(true);
      }
    }
  }, [data, isLoading]);

  return isSick ? (
    <button className="w-full bg-sky-400 hover:bg-sky-500 text-white disabled:bg-sky-300 rounded p-2">
      Rest Well!
    </button>
  ) : (
    <>
      {clockedIn && !done && (
        <ListInput items={todaysWork} addItem={handleAddItem} removeItem={handleRemoveItem} />
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
