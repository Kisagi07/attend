"use client";
import { FaHome } from "react-icons/fa";
import { InputText } from "./";
import { FaLocationCrosshairs } from "react-icons/fa6";
import clsx from "clsx";
import { useState, useEffect } from "react";
import useSWR, { Fetcher } from "swr";
import { UserModel } from "@/models/User";
import { useSession } from "next-auth/react";

const fetcher: Fetcher<UserModel, string> = (...args) => fetch(...args).then((res) => res.json());

const HomeCoordinate = () => {
  const { data: session, status } = useSession();
  const { data, error, isLoading } = useSWR(`/api/users/${session?.user.work_id}`, fetcher);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      if (data?.home_latitude && data.home_longitude) {
        setLatitude(data?.home_latitude);
        setLongitude(data?.home_longitude);
      } else {
        setLatitude(0);
        setLongitude(0);
      }
    }
  }, [isLoading]);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        updateHomeCoordinate(position.coords.latitude, position.coords.longitude);
      },
      (error) => console.error(error)
    );
  };

  const updateHomeCoordinate = async (latitude: number, longitude: number) => {
    const res = await fetch(`/api/users/${session?.user.work_id}/home`, {
      method: "PUT",
      body: JSON.stringify({
        latitude,
        longitude,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.error("Failed on updating home coordinate");
    }
  };

  return isLoading ? (
    <div className="h-8 w-8 bg-gray-200 animate-pulse"></div>
  ) : (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={clsx("p-2 border border-sky-400 rounded hover:bg-sky-400 hover:text-white", {
          "bg-sky-400 text-white": open,
          "bg-transparent : text-sky-400": !open,
        })}
      >
        <FaHome />
      </button>
      <div
        className={clsx(`space-y-4 transition-all border-gray-200 overflow-hidden h-full`, {
          "max-h-0": !open,
          "max-h-max p-2 border": open,
        })}
      >
        <div className="flex justify-between items-start">
          <h3>Home Coordinate</h3>
          <button className="p-2 text-black" onClick={getPosition}>
            <FaLocationCrosshairs />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <InputText
            onChange={(value) => setLatitude(+value)}
            label="Latitude"
            value={`${latitude}`}
          />
          <InputText
            onChange={(value) => setLongitude(+value)}
            label="Longitude"
            value={`${longitude}`}
          />
        </div>
      </div>
    </>
  );
};
export default HomeCoordinate;
