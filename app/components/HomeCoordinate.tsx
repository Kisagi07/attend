"use client";
import { FaHome } from "react-icons/fa";
import { InputText } from "./";
import { FaLocationCrosshairs } from "react-icons/fa6";
import clsx from "clsx";
import { useState } from "react";

const HomeCoordinate = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.error(error)
    );
  };

  return (
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
    </>
  );
};
export default HomeCoordinate;
