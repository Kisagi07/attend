"use client";
import { FaHome } from "react-icons/fa";
import { InputText } from "./";
import { FaLocationCrosshairs } from "react-icons/fa6";
import clsx from "clsx";
import { useState, useEffect, useCallback, useMemo } from "react";
import useSWR, { Fetcher } from "swr";
import { debounce } from "../helper";
import { users } from "@prisma/client";

const fetcher: Fetcher<users, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const HomeCoordinate = () => {
  const { data, error, isLoading } = useSWR(`/api/user`, fetcher);
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      },
      (error) => console.error(error),
    );
  };

  const updateHomeCoordinate = useCallback(async () => {
    if (!latitude || !longitude) return;
    if (
      latitude === data?.home_latitude?.toString() &&
      longitude === data?.home_longitude?.toString()
    )
      return;
    const res = await fetch(`/api/user/home`, {
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
      const error = await res.json();
      console.log(error);
      console.error("Failed on updating home coordinate");
    } else {
      const resData = await res.json();
      console.log(resData);
    }
  }, [latitude, longitude, data?.home_latitude, data?.home_longitude]);

  //eslint-disable-next-line
  const debouncedUpdateHomeCoordinate = useCallback(
    debounce(updateHomeCoordinate, 500),
    [updateHomeCoordinate],
  );

  const latitudeChanged = (value: string) => {
    const cleanValue = filterCoordinate(value);
    setLatitude(cleanValue);
  };

  const longitudeChanged = (value: string) => {
    const cleanValue = filterCoordinate(value);
    setLongitude(cleanValue);
  };

  const filterCoordinate = (input: string): string => {
    let filteredInput = "";

    // Count occurrences of hyphen and dot
    let hyphenCount = 0;
    let dotCount = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === "-") {
        // Allow hyphen only if it's the first character
        if (i === 0 && hyphenCount === 0) {
          filteredInput += char;
          hyphenCount++;
        }
      } else if (char === ".") {
        // Allow dot only if it hasn't occurred before
        if (dotCount === 0) {
          filteredInput += char;
          dotCount++;
        }
      } else if (!isNaN(Number(char))) {
        // Allow only numbers
        filteredInput += char;
      }
    }

    return filteredInput;
  };

  useEffect(() => {
    if (!isLoading) {
      if (data?.home_latitude && data.home_longitude) {
        setLatitude(data?.home_latitude.toString());
        setLongitude(data?.home_longitude.toString());
      } else {
        setLatitude("");
        setLongitude("");
      }
    }
  }, [isLoading, data?.home_latitude, data?.home_longitude]);

  useEffect(() => {
    debouncedUpdateHomeCoordinate();
  }, [debouncedUpdateHomeCoordinate]);

  return isLoading ? (
    <div className="h-8 w-8 animate-pulse bg-gray-200"></div>
  ) : (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "rounded border border-sky-400 p-2 hover:bg-sky-400 hover:text-white",
          {
            "bg-sky-400 text-white": open,
            ": bg-transparent text-sky-400": !open,
          },
        )}
      >
        <FaHome />
      </button>
      <div
        className={clsx(
          `h-full space-y-4 overflow-hidden rounded border-gray-300 transition-all`,
          {
            "max-h-0": !open,
            "max-h-max border p-4": open,
          },
        )}
      >
        <div className="flex items-start justify-between">
          <h3>Home Coordinate</h3>
          <button className="p-4 text-black" onClick={getPosition}>
            <FaLocationCrosshairs />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <InputText
            onChange={(value) => latitudeChanged(value)}
            label="Latitude"
            value={`${latitude}`}
          />
          <InputText
            onChange={(value) => longitudeChanged(value)}
            label="Longitude"
            value={`${longitude}`}
          />
        </div>
      </div>
    </>
  );
};
export default HomeCoordinate;
