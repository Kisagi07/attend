"use client";
import { useEffect, useState } from "react";
import InputText from "./InputText";
import { toast } from "react-toastify";
import { company } from "@prisma/client";
import SettingOfficeSkeleton from "../skeletons/SettingOfficeSkeleton";
import Confirmation from "./Confirmation";
import { FaLocationDot } from "react-icons/fa6";

const SettingOffice = () => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [company, setCompany] = useState<company>();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const fetchCompany = async () => {
    const res = await fetch(`/api/company`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      toast.error("Something went wrong when getting company office");
      throw new Error("Error on getting company office");
    }
    const data = await res.json();
    setFetching(false);
    if (data) {
      setCompany(data);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
    }
  };
  const handleNewOffice = () => {
    setSubmitting(true);
    const sendNewOffice = async () => {
      const res = await fetch("/api/company", {
        method: "PUT",
        body: JSON.stringify({
          latitude: +latitude,
          longitude: +longitude,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed on updating company office");
      }
      const data: company = await res.json();
      setLatitude(`${data.latitude}`);
      setLongitude(`${data.longitude}`);
      return data;
    };
    toast.promise(sendNewOffice, {
      pending: "Updating Office",
      success: "Office Location Updated!",
      error: "Something went wrong when updating office location",
    });
    // return data;
    setSubmitting(false);
  };
  const handleUseCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      });
    }
  };
  useEffect(() => {
    fetchCompany();
  }, []);
  return fetching ? (
    <SettingOfficeSkeleton />
  ) : (
    <>
      <Confirmation
        show={showConfirm}
        onClose={setShowConfirm}
        onConfirm={handleNewOffice}
        title="Relocate Office"
        text="Are you sure you want to change office location that is used for attendance?"
      />
      <article className="space-y-4 grid grid-cols-3 items-center">
        <h2 className="text-lg font-semibold col-span-3">Office Location</h2>
        <label htmlFor="latitude">Latitude :</label>
        <div className="col-span-2">
          <InputText id="latitude" value={latitude} onChange={setLatitude} />
        </div>
        <label htmlFor="longitude">Longitude :</label>
        <div className="col-span-2">
          <InputText id="longitude" value={longitude} onChange={setLongitude} />
        </div>
        <div className="flex md:justify-end md:col-span-3">
          <button
            disabled={submitting}
            onClick={() => setShowConfirm(true)}
            className="p-4 w-28 disabled:bg-emerald-300 rounded bg-emerald-400 hover:bg-emerald-500 text-white"
          >
            {submitting ? "Saving" : "Save"}
          </button>
          <button
            onClick={handleUseCurrentLocation}
            type="button"
            title="Use Current Location"
            className="p-4 bg-slate-400 hover:bg-slate-500 w-max ms-2 rounded"
          >
            <FaLocationDot className="text-white text-lg" />
          </button>
        </div>
      </article>
    </>
  );
};
export default SettingOffice;
