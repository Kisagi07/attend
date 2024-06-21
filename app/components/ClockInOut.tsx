"use client";
import { ButtonDropdown, ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useSWR, { Fetcher } from "swr";
import { logs, company } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Input } from "@nextui-org/input";
import { UserWithJob } from "../prisma";

const fetcher: Fetcher<any, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const ClockInOut = () => {
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
  const { data: user } = useSWR<UserWithJob>(`/api/user`, fetcher, {
    refreshInterval: 1000,
  });

  // hook variable
  const [sending, setSending] = useState<boolean>(false);
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [isSick, setIsSick] = useState<boolean>(false);
  const [fromHome, setFromHome] = useState<boolean>(false);
  const [todaysWork, setTodaysWork] = useState<string[]>([]);
  const [duty, setDuty] = useState<string>("");
  const [showDuty, setShowDuty] = useState<boolean>(false);
  const [isLate, setIsLate] = useState<boolean>(false);
  const [lateReason, setLateReason] = useState<string>("");
  const [time, setTime] = useState(0);
  const [options1, setOptions1] = useState([
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
    {
      label: "Clock With Duty",
      className:
        "bg-blue-400 hover:bg-blue-500 text-white disabled:bg-blue-300",
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
      className:
        "bg-gray-400 hover:bg-gray-500 text-white disabled:bg-gray-300",
    },
  ]);

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
        calculateDistance(
          latitude,
          longitude,
          Number(targetLatitude),
          Number(targetLongitude)
        ) * 1000
      );
      // if distance is more than 50m and not sick or work with duty then warned user then return
      if (distance > 50 && type !== "sick" && type !== "work_with_duty") {
        toast.error("You are not in the right location to clockin");
        return;
      }
      // if clock out but no work filled then warned user then return
      if (type === "clock-out" && todaysWork.length === 0) {
        toast.error("You need to fill today's work in order to clockout");
        return;
      }
      // if work with duty but duty is not filled then warned user then return
      if (type === "work_with_duty" && !duty) {
        toast.error("You need to fill duty in order to clockin");
        return;
      }
      // if user is late but reason for late is not filled then warned user then return
      if (
        isLate &&
        !lateReason &&
        (type === "work-from-home" ||
          type === "work-from-office" ||
          type === "work_with_duty")
      ) {
        toast.error("You need to fill reason for being late");
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
        todaysWork: lateReason
          ? [...todaysWork, `Reason for being late: ${lateReason}`]
          : todaysWork,
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

  const requestLocationPermission = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Permission granted");
    }, handleGeolocationError);
  };

  const handleGeolocationError = (error: PositionErrorCallback | any) => {
    if (error.code === error.PERMISSION_DENIED) {
      toast.error("Location permission denied by user.");
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      toast.error("Location information is unavailable.");
    } else if (error.code === error.TIMEOUT) {
      toast.error("The request to get user location timed out.");
    } else {
      toast.error("An unknown error occurred.");
    }
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

  useEffect(() => {
    // get time and store it to state
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // check if gps is supported or activated
    if (!navigator.geolocation) {
      toast.info("GPS is not supported by your device or browser!");
    } else {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          // handles the permission state
          if (result.state === "denied") {
            toast.error("GPS/Location permission is denied");
          } else if (result.state === "prompt") {
            toast.info(
              "Please allow us to access your gps location for attendances"
            );
            requestLocationPermission();
          }
        })
        .catch((error) => {
          console.error("Error checking location permission: ", error);
        });
    }
  }, []);

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
        setIsLate(true);
      }
    }
  }, [time, user, company]);

  return isSick ? (
    <button className="w-full cursor-default  rounded bg-sky-400 p-4 text-white">
      Rest Well!
    </button>
  ) : (
    <>
      {isLate && !clockedIn && (
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
      {clockedIn && !done && (
        <ListInput
          items={todaysWork}
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
        />
      )}
      {showDuty && (
        <Input
          variant="underlined"
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
        className="bg-slate-900 text-white hover:bg-black"
        options={done ? options3 : clockedIn ? options2 : options1}
      />
    </>
  );
};
export default ClockInOut;
