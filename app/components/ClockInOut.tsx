"use client";
import React from "react";
import { ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { useState, useEffect, useMemo, useCallback } from "react";
import { toast } from "sonner";
import useSWR, { Fetcher } from "swr";
import { logs, company, logs_type } from "@/prisma/client";
import { Prisma } from "@/prisma/client";
import { Input } from "@heroui/input";
import { UserWithJob } from "../prisma";
import { Button, ButtonGroup } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { BiChevronDown } from "react-icons/bi";
import { Skeleton } from "@heroui/skeleton";
import { getLocalTimeZone, today } from "@internationalized/date";

const fetcher: Fetcher<any, string> = (...args) =>
  fetch(...args).then((res) => res.json());

type ButtonOption = Record<
  string,
  | {
      label: string;
      color: "secondary" | "primary" | "danger" | "success" | "default";
    }
  | undefined
>;

const ClockInOut = () => {
  //fetched data
  const {
    data: todayAttendance,
    isLoading,
    mutate: mutateAttendance,
  } = useSWR<logs>(
    `/api/user/attendance?date=${today(getLocalTimeZone()).toDate(getLocalTimeZone())}`,
    fetcher
  );
  const { data: company, isLoading: companyLoading } = useSWR<company>(
    `/api/company`,
    fetcher
  );
  const { data: user, isLoading: userLoading } = useSWR<UserWithJob>(
    `/api/user`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  // hook variable

  const [selectedButton, setSelectedButton] = useState<Set<string> | "all">(
    new Set(["work_from_office"])
  );
  const selectedButtonValue = Array.from(selectedButton)[0];
  const showSpecialReason =
    (selectedButtonValue as logs_type) === "special_attendance";
  const [status, setStatus] = useState({
    clockIn: false,
    done: false,
    isSick: false,
    fromHome: false,
    isLate: false,
  });
  const [sending, setSending] = useState<boolean>(false);
  const [todaysWork, setTodaysWork] = useState<string[]>([]);
  const [specialReason, setSpecialReason] = useState<string>("");
  const [lateReason, setLateReason] = useState<string>("");
  const [time, setTime] = useState(0);
  const isWorkDay = useMemo(() => {
    const todayDay = new Date().getDay();
    return (
      user?.job_position?.work_day?.split(",").map(Number).includes(todayDay) ??
      false
    );
  }, [user]);

  const buttonOptions = useMemo<ButtonOption>(() => {
    if (status.clockIn) {
      setSelectedButton(new Set(["clock-out"]));
      return {
        "clock-out": {
          label: "Clock Out",
          color: "danger",
        },
      };
    } else if (!isWorkDay) {
      setSelectedButton(new Set(["work_overtime"]));
      return {
        work_overtime: {
          label: "Work Overtime",
          color: "primary",
        },
      };
    } else {
      setSelectedButton(new Set(["work_from_office"]));
      return {
        work_from_home: {
          label: "Work From Home",
          color: "success",
        },
        work_from_office: {
          label: "Work From Office",
          color: "secondary",
        },
        special_attendance: {
          label: "Special Attendance",
          color: "primary",
        },
        sick: {
          label: "Sick Leave",
          color: "danger",
        },
        on_site_work: {
          label: "On Site Work",
          color: "secondary",
        },
      };
    }
  }, [status.clockIn, isWorkDay]);

  const handleButtonClick = async () => {
    try {
      setSending(true);
      // get user and terget compare location
      const { latitude, longitude } = await getUserLocation();
      const { targetLatitude, targetLongitude } = getTargetLocation(
        selectedButtonValue === "work_from_home" || status.fromHome
      );
      // calculate distance between location
      const distance = Math.floor(
        calculateDistance(
          latitude,
          longitude,
          Number(targetLatitude),
          Number(targetLongitude)
        ) * 1000
      );
      // #region //? rejection check
      // if distance is more than 50m and not sick or work with duty then warned user then return
      if (
        distance > 100 &&
        selectedButtonValue !== "sick" &&
        selectedButtonValue !== "special_attendance" &&
        selectedButtonValue !== "on_site_work" &&
        todayAttendance?.type !== "on_site_work"
      ) {
        toast.error(` You are ${distance - 50} meter too far from location!`);
        return;
      }
      // if clock out but no work filled then warned user then return
      if (selectedButtonValue === "clock-out" && todaysWork.length === 0) {
        toast.error("You need to fill today's work in order to clockout");
        return;
      }
      // if work with duty but duty is not filled then warned user then return
      if (selectedButtonValue === "special_attendance" && !specialReason) {
        toast.error("You need to fill reason in order to clockin");
        return;
      }
      // if user is late but reason for late is not filled then warned user then return
      if (
        status.isLate &&
        !lateReason &&
        (selectedButtonValue === "work_from_home" ||
          selectedButtonValue === "work_from_office") &&
        isWorkDay
      ) {
        toast.error("You need to fill reason for being late");
        return;
      }
      // #endregion //? rejection check
      // ? next operation
      if (selectedButtonValue === "sick") {
        await sendSickDay({ type: selectedButtonValue, latitude, longitude });
      } else {
        await sendWork({
          type: selectedButtonValue,
          latitude,
          longitude,
          todaysWork,
          isOverTime: !isWorkDay,
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
          todaysWork,
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
    isOverTime = false,
  }: {
    type: string;
    latitude: number;
    longitude: number;
    todaysWork: string[];
    isOverTime?: boolean;
  }) => {
    let sendData: { [key: string]: any } = {
      type,
      date: getDateOnly(),
      isOverTime,
      todaysWork: todaysWork,
    };
    if (type === "clock-out") {
      sendData["clock_out_time"] = getTimeOnly();
      sendData["clock_out_latitude"] = latitude;
      sendData["clock_out_longitude"] = longitude;
    } else {
      sendData["clock_in_time"] = getTimeOnly();
      sendData["clock_in_latitude"] = latitude;
      sendData["clock_in_longitude"] = longitude;
    }
    if (type === "special_attendance") {
      sendData["todaysWork"] = [
        "Reason: " + specialReason,
        ...sendData["todaysWork"],
      ];
    }
    if (
      status.isLate &&
      type !== "clock-out" &&
      type !== "special_attendance" && type !== "on_site_work"
    ) {
      sendData["todaysWork"] = [
        "Late Reason: " + lateReason,
        ...sendData["todaysWork"],
      ];
    }
    try {
      const res = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutateAttendance();
      setStatus((prev) => ({ ...prev, clockin: true }));
    } catch (error) {
      console.error(error);
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
            handleGeolocationError(error);
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
      const { type, clock_out_time } = todayAttendance;
      setStatus((prev) => ({
        ...prev,
        isSick: type === "sick",
        clockIn: type !== "sick",
        fromHome: type === "work_from_home",
        done: !!clock_out_time,
      }));
    } else {
      setStatus({
        clockIn: false,
        done: false,
        isSick: false,
        fromHome: false,
        isLate: false,
      });
    }
  }, [todayAttendance, isLoading]);

  useEffect(() => {
    // get time and store it to state
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleGeolocationError = useCallback(
    (error: PositionErrorCallback | any) => {
      if (error.code === error.PERMISSION_DENIED) {
        toast.error("Location permission denied by user.");
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        toast.error("Location information is unavailable.");
      } else if (error.code === error.TIMEOUT) {
        toast.error("The request to get user location timed out.");
      } else {
        toast.error("An unknown error occurred.");
      }
    },
    []
  );
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {},
      handleGeolocationError
    );
  }, [handleGeolocationError]);

  useEffect(() => {
    if (user) {
      const workStart = new Date();
      const shiftStart = user.job_position?.shift_start ?? "09:00";
      workStart.setHours(parseInt(shiftStart.split(":")[0]));
      workStart.setMinutes(parseInt(shiftStart.split(":")[1]));
      if (company?.tolerance_active) {
        workStart.setMinutes(workStart.getMinutes() + company.tolerance_time);
      }
      const shiftStartTime = workStart.getTime();
      if (time > shiftStartTime) {
        setStatus((prev) => ({ ...prev, isLate: true }));
      }
    }
  }, [time, user, company]);

  return isLoading && userLoading && companyLoading ? (
    <Skeleton className="h-10 w-full rounded" />
  ) : status.isSick ? (
    <Button color="primary" variant="flat" fullWidth>
      Rest Well!
    </Button>
  ) : status.done ? (
    <Button color="default" variant="flat" fullWidth>
      Good Work Today!
    </Button>
  ) : (
    <>
      {status.isLate &&
        !status.clockIn &&
        isWorkDay &&
        selectedButtonValue !== "sick" &&
        selectedButtonValue !== "special_attendance" && selectedButtonValue !== "on_site_work" && (
          <>
            <div className="bg-red-500 px-2 py-1 text-center text-sm text-white">
              You are late! hurry up!
            </div>
            <Input
              label="State your reason for coming in late"
              color="danger"
              variant="underlined"
              name="late-reason"
              value={lateReason}
              onValueChange={setLateReason}
            />
          </>
        )}
      {status.clockIn && !status.done && (
        <ListInput
          items={todaysWork}
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
        />
      )}
      {showSpecialReason && (
        <Input
          variant="underlined"
          label="Reason"
          value={specialReason}
          onChange={(e) => setSpecialReason(e.currentTarget.value)}
        />
      )}
      <ButtonGroup variant="flat" fullWidth>
        <Button
          isLoading={sending}
          onClick={handleButtonClick}
          color={
            buttonOptions[selectedButtonValue as keyof ButtonOption]?.color ??
            "default"
          }
        >
          {buttonOptions[selectedButtonValue as keyof ButtonOption]?.label ??
            "Loading"}
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly>
              <BiChevronDown className="size-6" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedButton}
            onSelectionChange={(selected) =>
              setSelectedButton(selected as Set<string>)
            }
          >
            {Object.values(buttonOptions).map((option, index) => (
              <DropdownItem key={Object.keys(buttonOptions)[index]}>
                {option!.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
};
export default ClockInOut;
