"use client";
import { ButtonDropdown } from "@/app/components";
import { getDateOnly, getTimeOnly, calculateDistance } from "@/app/helper";
import { CompanyModel } from "@/models/Company";
import { LogModel } from "@/models/Log";
import { useState, useEffect, useRef } from "react";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then((res) => res.json());
const ClockInOut = () => {
  // hook variable
  const [sending, setSending] = useState<boolean>(false);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [tooFar, setTooFar] = useState<boolean>(false);
  const [isSick, setIsSick] = useState<boolean>(false);
  const watchId = useRef<number>(0);
  //fetched data
  const { data, error, isLoading } = useSWR<LogModel[]>("/api/attendance", fetcher);
  const {
    data: company,
    error: companyError,
    isLoading: companyLoading,
  } = useSWR<CompanyModel>(`/api/company`, fetcher);
  // non state variable
  const options = [
    {
      label: "Clock-in",
      className: "bg-green-400 hover:bg-green-500 text-white disabled:bg-green-300",
    },
    {
      label: "Sick",
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

  // handler
  const handleClockBtn = (value: string) => {
    const wId = navigator.geolocation.watchPosition((position) => {
      setSending(true);
      fetch(`/api/attendance`, {
        method: "POST",
        body: JSON.stringify({
          type: value.toLowerCase(),
          time: getTimeOnly(),
          date: getDateOnly(),
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error(error))
        .finally(() => {
          setSending(false);
          if (value === "Clock-Out") {
            setDone(true);
          } else if (value === "Clock-In") {
            setClockedIn(true);
          } else if (value === "Sick") {
            setIsSick(true);
          }

          navigator.geolocation.clearWatch(wId);
        });
    });
  };
  const recalculateDistance = () => {
    watchId.current = navigator.geolocation.watchPosition((position) => {
      const distance = calculateDistance(
        position.coords.latitude,
        position.coords.longitude,
        company!.latitude,
        company!.longitude
      );
      if (distance > 50) {
        setTooFar(true);
      } else {
        setTooFar(false);
      }

      navigator.geolocation.clearWatch(watchId.current);
    });
  };

  useEffect(() => {
    if (!companyLoading && company) {
      recalculateDistance();
    }
  }, [companyLoading]);
  useEffect(() => {
    if (!isLoading) {
      const clockIn = data?.find((log) => log.type === "clock-in");
      const clockOut = data?.find((log) => log.type === "clock-out");
      const sick = data?.find((log) => log.type === "sick");
      if (sick) {
        setIsSick(true);
      } else if (clockIn && clockOut) {
        setDone(true);
      } else if (clockIn && !clockOut) {
        setClockedIn(true);
      }
    }
  }, [isLoading]);

  return isSick ? (
    <button className="w-full bg-sky-400 hover:bg-sky-500 text-white disabled:bg-sky-300 rounded p-2">
      Rest Well!
    </button>
  ) : tooFar ? (
    <button
      onClick={recalculateDistance}
      className="w-full bg-red-400 hover:bg-red-500 text-white disabled:bg-red-300 rounded p-2"
    >
      Your location are too far from office! Recalculate?
    </button>
  ) : (
    <>
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
