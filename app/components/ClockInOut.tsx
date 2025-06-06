"use client";
import React, { ChangeEvent, useRef } from "react";
import { ListInput } from "@/app/components";
import { calculateDistance, getDateOnly, getTimeOnly } from "@/app/helper";
import { useState, useEffect, useMemo, useCallback } from "react";
import { toast } from "sonner";
import useSWR, { Fetcher } from "swr";
import { logs, company, logs_type } from "@prisma/client";
import { IoCameraOutline } from "react-icons/io5";
import { Input } from "@heroui/input";
import { UserWithJob } from "../prisma";
import { Button, ButtonGroup } from "@heroui/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { BiChevronDown } from "react-icons/bi";
import { Skeleton } from "@heroui/skeleton";
import { getLocalTimeZone, today } from "@internationalized/date";
import Image from "next/image";
import LocationFetchPopup from "@/app/components/UI/LocationFetchPopup";
import getTargetType from "@/utils/getTargetType";

declare global {
  interface Window {
    AndroidBridge?: {
      triggerHourlyCoordinate: (id:number) => void;
      stopHourlyCoordinate: () => void;
    }
  }
}

declare global {
  interface Window {
    AndroidBridge?: {
      triggerHourlyCoordinate: (id:number) => void;
      stopHourlyCoordinate: () => void;
    }
  }
}

const fetcher: Fetcher<any, string> = (...args) => fetch(...args).then((res) => res.json());

type ButtonOption = Record<
  string,
  | {
      label: string;
      color: "secondary" | "primary" | "danger" | "success" | "default";
    }
  | undefined
>;

const ClockInOut = () => {
  // #region data fetching
  const {
    data: todayAttendance,
    isLoading,
    mutate: mutateAttendance,
  } = useSWR<logs>(`/api/user/attendance?date=${today(getLocalTimeZone()).toDate(getLocalTimeZone())}`, fetcher);
  const { data: company, isLoading: companyLoading } = useSWR<company>(`/api/company`, fetcher);
  const { data: user, isLoading: userLoading } = useSWR<UserWithJob>(`/api/user`, fetcher);
  const { data: isHoliday, isLoading: holidayLoading } = useSWR(`/api/holidays/date/${today(getLocalTimeZone()).toString()}`, fetcher);
  // #endregion

  // #region states
  const [syncTimeLeft, setSyncTimeLeft] = useState(2 * 60);
  const [openSynchronizeLoading, setOpenSynchronizeLoading] = useState(false);
  const [watingForSynchronizingToComplete, setWaitingForSyncroizingToComplete] = useState(false);

  const inputImageRef = useRef<HTMLInputElement>(null);

  // hook variable
  const [selectedButton, setSelectedButton] = useState<Set<string> | "all">(new Set(["work_from_office"]));
  const selectedButtonValue = Array.from(selectedButton)[0];
  const showSpecialReason = (selectedButtonValue as logs_type) === "special_attendance";
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
  const [capturedProof, setCapturedProof] = useState<File | null>(null);
  const [capturedProofUrl, setCapturedProofUrl] = useState<string | null>(null);
  const clickedTimeRef = useRef<string | null>(null);
  const isWorkDay = useMemo(() => {
  const todayDay = new Date().getDay();
  const workDays = user?.job_position?.work_day;

  if (!workDays) return false;

  return workDays
    .split(",")
    .map(Number)
    .includes(todayDay) && !isHoliday;
}, [user, isHoliday]);  

  const buttonOptions = useMemo<ButtonOption>(() => {
    if (status.clockIn) {
      setSelectedButton(new Set(["clock-out"]));
      return {
        "clock-out": {
          label: "Pulang",
          color: "danger",
        },
      };
    } else {
      setSelectedButton(new Set(["work_from_office"]));
      return {
        work_from_home: {
          label: "Kerja dari Rumah",
          color: "success",
        },
        work_from_office: {
          label: "Kerja dari Kantor",
          color: "secondary",
        },
        special_attendance: {
          label: "Absen Special",
          color: "primary",
        },
        sick: {
          label: "Sakit",
          color: "danger",
        },
        on_site_work: {
          label: "Kerja Lapangan",
          color: "secondary",
        },
      };
    }
  }, [status.clockIn]);

  const closestDistanceLocation = useRef<{
    distance: number;
    latitude: number;
    longitude: number;
    useTarget: "office" | "home";
  } | null>(null);
  const deniedGeolocation = useRef<boolean>(false);
  // #endregion

  // #region functions

  const handleButtonClick = async () => {
    if (!clickedTimeRef.current) {
      const clickedTime = getTimeOnly();
      clickedTimeRef.current = clickedTime;
    }
    if (syncTimeLeft > 0) {
      setOpenSynchronizeLoading(true);
      setWaitingForSyncroizingToComplete(true);
      setSending(true);
    } else {
      try {
        setSending(true);

        // validate the proof picture are taken
        if (!capturedProof) {
          toast.error("Bukti foto dibutuhkan");
          return;
        }

        // #region //? rejection check
        // if distance is more than 50m and not sick or work with duty then warned user then return
        if (!closestDistanceLocation.current) {
          toast.error("Gagal mengambil lokasi dalam waktu yang ditentukan, pastikan gps aktif dan coba lagi");
          return;
        }


        let { distance, latitude, longitude, useTarget } = closestDistanceLocation.current;
        // check if calculated distance match with selected button value
        if (useTarget !== getTargetType(selectedButtonValue, todayAttendance)) {
          distance = getDistanceFromLocation({ latitude, longitude });
        }

        // check if user allowed to check in within distance        
        if (
          distance > 50 &&
          selectedButtonValue !== "sick" &&
          selectedButtonValue !== "special_attendance" &&
          selectedButtonValue !== "on_site_work" &&
          todayAttendance?.type !== "on_site_work"
        ) {
          toast.error(`${distance - 50} meter terlalu jauh dari lokasi!`);
          return;
        }
        // if clock out but no work filled then warned user then return
        if (selectedButtonValue === "clock-out" && todaysWork.length === 0) {
          toast.error("Pekerjaan hari ini harus di isi untuk absen pulang");
          return;
        }
        // if work with duty but duty is not filled then warned user then return
        if (selectedButtonValue === "special_attendance" && !specialReason) {
          toast.error("Harus mengisi alasan absen special");
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
          toast.error("Harus mengisi alasan telat");
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
    }
  };

  const getTargetLocation = useCallback(
    (
      fromHome: boolean
    ): {
      targetLatitude: number;
      targetLongitude: number;
    } => {
      let targetLatitude = Number(0.0);
      let targetLongitude = Number(0.0);
      if (fromHome) {
        targetLatitude = Number(user?.home_latitude || 0);
        targetLongitude = Number(user?.home_longitude || 0);
      } else {
        targetLatitude = Number(company?.latitude || 0);
        targetLongitude = Number(company?.longitude || 0);
      }
      return {
        targetLatitude,
        targetLongitude,
      };
    },
    [company?.latitude, company?.longitude, user?.home_latitude, user?.home_longitude]
  );

  const getDistanceFromLocation = useCallback(
    (location: { latitude: number; longitude: number }) => {
      const { latitude, longitude } = location;
      // get user and terget compare location
      const { targetLatitude, targetLongitude } = getTargetLocation(getTargetType(selectedButtonValue, todayAttendance) === "home");
      // calculate distance between location
      const distance = Math.floor(calculateDistance(latitude, longitude, Number(targetLatitude), Number(targetLongitude)) * 1000);
      return distance;
    },
    [getTargetLocation, selectedButtonValue, todayAttendance]
  );

  const sendSickDay = async ({ type, latitude, longitude }: { type: string; latitude: number; longitude: number }) => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("clock_in_time", clickedTimeRef.current!);
    formData.append("clock_in_latitude", latitude.toString());
    formData.append("clock_in_longitude", longitude.toString());
    if (capturedProof) {
      formData.append("proof", capturedProof);
    }
    todaysWork.forEach((work) => {
      formData.append("todaysWork[]", work);
    });
    try {
      const response = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      mutateAttendance();
      setCapturedProof(null);
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
      proof: capturedProof,
    };
    // assign clock in or clock out attribute depending on type
    if (type === "clock-out") {
      sendData["clock_out_time"] = clickedTimeRef.current!;
      sendData["clock_out_latitude"] = latitude;
      sendData["clock_out_longitude"] = longitude;
    } else {
      sendData["clock_in_time"] = clickedTimeRef.current!;
      sendData["clock_in_latitude"] = latitude;
      sendData["clock_in_longitude"] = longitude;
    }

    // if type is special attendance then add pre text in the todays work
    if (type === "special_attendance") {
      sendData["todaysWork"] = ["Reason: " + specialReason, ...sendData["todaysWork"]];
    }
    // assign pre text of late reason when user is late
    if (status.isLate && type !== "clock-out" && type !== "special_attendance" && type !== "on_site_work") {
      sendData["todaysWork"] = ["Late Reason: " + lateReason, ...sendData["todaysWork"]];
    }
    try {
      const formData = new FormData();
      Object.entries(sendData).forEach(([key, value]) => {
        if (key === "todaysWork" && Array.isArray(value)) {
          value.forEach((work) => {
            formData.append("todaysWork[]", work);
          });
        } else {
          formData.append(key, value);
        }
      });
      const res = await fetch(`/api/user/attendance`, {
        method: "POST",
        body: formData,
      });
      mutateAttendance();
      if (type === "clock-out") {
        setStatus((prev) => ({ ...prev, done: true }));
      } else {
        setStatus((prev) => ({ ...prev, clockin: true }));
      }
      setCapturedProof(null);

      // #region  if type is on site work trigger WebViewInterface
      if (type === "on_site_work") {        
        try {
          if (window.AndroidBridge) {
            if (user) {                            
              window.AndroidBridge.triggerHourlyCoordinate(user.id);
            } else {
              throw Error("User not found");
            }
          } else {
            throw Error("Anroid bridge not found");
          }
          console.log("Called android bridge successfully")
        } catch (error) {
          console.warn("Android Bridge not available", error);
        }
      }
      // #endregion

      // #region if type is clock out then call stop worker from WebViewInterface
      if (type === "clock-out" && todayAttendance?.type === "on_site_work") {
        try {
          if (window.AndroidBridge) {
            if (user) {
              window.AndroidBridge.stopHourlyCoordinate();
            } else {
              throw Error("User not found");
            }
          } else {
            throw Error("Android bridge not found")
          }
        } catch (error)  {
          console.warn("Failed stoping hourly coordinate", error);
        }
      }
      // #endregion

    } catch (error) {
      console.error(error);
    }
  };
  const handleGeolocationError = useCallback((error: PositionErrorCallback | any, onlyNotPermittedReject: boolean) => {
    if (error.code === error.PERMISSION_DENIED) {
      if (onlyNotPermittedReject && !deniedGeolocation.current) {
        toast.error("Izin lokasi ditolak, silahkan aktifkan izin lokasi di pengaturan");
        deniedGeolocation.current = true;
      } else if (!onlyNotPermittedReject) {
        toast.error("Izin lokasi ditolak, silahkan aktifkan izin lokasi di pengaturan.");
      }
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      if (!onlyNotPermittedReject) {
        toast.error("Lokasi tidak tersedia.");
      }
    } else if (error.code === error.TIMEOUT) {
      if (!onlyNotPermittedReject) {
        toast.error("Permintaan untuk mengambil lokasi pengguna telah habis waktunya, coba lagi.");
      }
    } else {
      if (!onlyNotPermittedReject) {
        toast.error("Terjadi kesalahan yang tidak diketahui.");
      }
    }
  }, []);

  const getUserLocation = useCallback(
    (onlyNotPermittedReject: boolean = false) => {
      return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            handleGeolocationError(error, onlyNotPermittedReject);
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 300000,
            maximumAge: 0,
          }
        );
      });
    },
    [handleGeolocationError]
  );

  const handleAddItem = (value: string) => {
    setTodaysWork((prev) => [...prev, value]);
  };

  const handleRemoveItem = (value: string) => {
    setTodaysWork((prev) => prev.filter((pre) => pre !== value));
  };

  const handleTakePictureButton = () => {
    inputImageRef.current?.click();
  };

  const handleProofChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      setCapturedProof(files[0]);
    }
  };

  const handleLocationFetchPopupCancel = useCallback(() => {
    setWaitingForSyncroizingToComplete(false);
    setOpenSynchronizeLoading(false);
    setSending(false);
  }, []);

  const handleLocationFetchPopupDone = () => {
    setOpenSynchronizeLoading(false);
    if (watingForSynchronizingToComplete) {
      handleButtonClick();
    }
  };

  const handleRetrySyncLocation = () => {
    setSyncTimeLeft(2 * 60);
  };

  // #endregion

  // #region useEffects

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

  useEffect(() => {
    if (capturedProof) {
      setCapturedProofUrl(URL.createObjectURL(capturedProof));
    } else {
      setCapturedProofUrl(null);
    }
  }, [capturedProof]);

  useEffect(() => {
    if (user) {
      const workStart = new Date();
      const shiftStart = user.job_position?.shift_start ?? "09:00";
      workStart.setHours(parseInt(shiftStart.split(":")[0]));
      workStart.setMinutes(parseInt(shiftStart.split(":")[1]));
      workStart.setSeconds(0);
      if (company?.tolerance_active) {
        workStart.setMinutes(workStart.getMinutes() + company.tolerance_time);
      }

      const shiftStartTime = workStart.getTime();

      if (clickedTimeRef.current) {
        const clickedTime = new Date();
        const [hours, minutes, seconds] = clickedTimeRef.current.split(":").map(Number);
        clickedTime.setHours(hours);
        clickedTime.setMinutes(minutes);
        clickedTime.setSeconds(seconds);

        if (clickedTime.getTime() > shiftStartTime) {
          setStatus((prev) => ({ ...prev, isLate: true }));
        }
      } else if (time > shiftStartTime) {
        setStatus((prev) => ({ ...prev, isLate: true }));
      }
    }
  }, [time, user, company]);

  // Timer countdown for location fetch
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (syncTimeLeft > 0) {
      const endTime = Date.now() + syncTimeLeft * 1000;
      timer = setInterval(() => {
        const newTimeLeft = Math.round((endTime - Date.now()) / 1000);

        if (newTimeLeft <= 0) {
          clearInterval(timer);
          setSyncTimeLeft(0);
        } else {
          setSyncTimeLeft(newTimeLeft);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [syncTimeLeft]);

  // Keep fetching location as long as sync time are not 0
  useEffect(() => {
    let isCancelled = false;
    const keepFetching = async () => {
      while (syncTimeLeft > 0 && !isCancelled) {
        try {
          const location = await getUserLocation(true);
          const distance = getDistanceFromLocation(location);
          const { latitude, longitude } = location;
          const target = getTargetType(selectedButtonValue, todayAttendance);
          if (!closestDistanceLocation.current) {
            closestDistanceLocation.current = {
              latitude,
              longitude,
              distance,
              useTarget: target,
            };
          } else {
            if (closestDistanceLocation.current.distance > distance) {
              closestDistanceLocation.current = {
                latitude,
                longitude,
                distance,
                useTarget: target,
              };
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    keepFetching();
    return () => {
      isCancelled = true;
    };
  }, [syncTimeLeft, getUserLocation, getDistanceFromLocation, selectedButtonValue, todayAttendance]);

  // #endregion

  return (
    <>
      {openSynchronizeLoading && (
        <LocationFetchPopup timeLeft={syncTimeLeft} onCancel={handleLocationFetchPopupCancel} onDone={handleLocationFetchPopupDone} />
      )}
      {isLoading && userLoading && companyLoading && holidayLoading ? (
        <Skeleton className="h-10 w-full rounded" />
      ) : status.isSick ? (
        <Button color="primary" variant="flat" fullWidth>
          Semoga Segera Sembuh
        </Button>
      ) : status.done ? (
        <Button color="default" variant="flat" fullWidth>
          Kerja Bagus
        </Button>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <div
            onClick={handleTakePictureButton}
            className="bg-neutral-200 cursor-pointer relative rounded-lg shadow-lg  size-40 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-[inherit] after:bg-purple-950 after:opacity-0 after:transition-opacity hover:after:opacity-[0.08] focus:after:opacity-[0.1] active:after:opacity-[0.16]"
          >
            {capturedProofUrl ? (
              <Image src={capturedProofUrl} className="size-40 object-cover object-center rounded-lg" height={160} width={160} alt="captured proof" />
            ) : (
              <div className="p-4 flex justify-center flex-col items-center space-y-4">
                <IoCameraOutline className="size-20" />
                <p className="text-center">Bukti Foto Dibutuhkan</p>
              </div>
            )}
            <input
              onChange={handleProofChange}
              accept="image/*"
              capture="user"
              ref={inputImageRef}
              type="file"
              name="picture-proof"
              className="absolute z-[-1] opacity-0 wi-0 h-0 "
            />
          </div>
          <div className="space-y-4 w-full">
            {status.isLate &&
              !status.clockIn &&
              isWorkDay &&
              selectedButtonValue !== "sick" &&
              selectedButtonValue !== "special_attendance" &&
              selectedButtonValue !== "on_site_work" && (
                <>
                  <div className="bg-red-500 px-2 py-1 rounded shadow text-center text-sm text-white">
                    Terlambat
                  </div>
                  <Input
                    label="Tulis alasan telat"
                    color="danger"
                    variant="underlined"
                    name="late-reason"
                    value={lateReason}
                    onValueChange={setLateReason}
                  />
                </>
              )}
            {status.clockIn && !status.done && <ListInput items={todaysWork} addItem={handleAddItem} removeItem={handleRemoveItem} />}
            {showSpecialReason && (
              <Input variant="underlined" label="Tulis Alasan" value={specialReason} onChange={(e) => setSpecialReason(e.currentTarget.value)} />
            )}
            <ButtonGroup variant="flat" fullWidth>
              <Button
                isLoading={sending}
                onClick={handleButtonClick}
                color={buttonOptions[selectedButtonValue as keyof ButtonOption]?.color ?? "default"}
              >
                {buttonOptions[selectedButtonValue as keyof ButtonOption]?.label ?? "Loading"}
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
                  onSelectionChange={(selected) => setSelectedButton(selected as Set<string>)}
                >
                  {Object.values(buttonOptions).map((option, index) => (
                    <DropdownItem key={Object.keys(buttonOptions)[index]}>{option!.label}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </div>
      )}
      {syncTimeLeft === 0 && (
        <Button size="sm" color="primary" variant="flat" onPress={handleRetrySyncLocation}>
          Sinkronasi Lokasi Lagi
        </Button>
      )}
    </>
  );
};

export default ClockInOut;
