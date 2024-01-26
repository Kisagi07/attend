"use client";
import ButtonDropdown from "./ButtonDropdown";
import { useEffect, useState } from "react";
import getCompany from "@/app/libs/getCompany";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const ClockInOut = () => {
  const [navigationError, setNavigationError] = useState<string>("Loading");
  const [position, setPosition] = useState<Coordinate>();
  const [companyPosition, setCompanyPosition] = useState<Coordinate>();

  const fetchCompany = async () => {
    const res = await getCompany();
    setCompanyPosition({
      latitude: +res.latitude,
      longitude: +res.longitude,
    });
  };

  const haversineDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const earthRadius = 6371000;

    const degToRad = (degrees: number) => degrees * (Math.PI / 180);

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

    return distance;
  };

  const compareDistance = () => {
    if (companyPosition && position) {
      const distance = haversineDistance(
        position.latitude,
        position.longitude,
        companyPosition.latitude,
        companyPosition.longitude
      );
      if (distance > 50) {
        setNavigationError("You are too far from the company");
      } else {
        setNavigationError("");
      }
    }
  };

  useEffect(() => {
    fetchCompany();
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          if (error.code === 1) {
            setNavigationError("Location Access Denied");
          }
          if (error.code === 2) {
            setNavigationError("Position Is Unavailable");
          }
        }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setNavigationError("Location is not supported in this browser");
    }
  }, []);
  useEffect(() => {
    compareDistance();
  }, [position, companyPosition]);
  return navigationError ? (
    <button
      disabled
      className="bg-slate-400 w-full text-white rounded px-3 py-2"
    >
      {navigationError}
    </button>
  ) : (
    <ButtonDropdown
      label="Clock-In"
      className="bg-slate-900 hover:bg-black text-white"
    />
  );
};
export default ClockInOut;
