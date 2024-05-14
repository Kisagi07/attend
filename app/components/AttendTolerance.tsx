"use client";
import { CiCircleQuestion } from "react-icons/ci";
import InputCheckbox from "./InputCheckbox";
import { useState, useEffect } from "react";
import clsx from "clsx";
import InputText from "./InputText";
import AttendToleranceSkeleton from "../skeletons/AttendToleranceSkeleton";
import { CompanyModel } from "@/models/Company";
import { toast } from "react-toastify";
const AttendTolerance = () => {
  const [toleranceActive, setToleranceActive] = useState<boolean>(false);
  const [toleranceValue, setToleranceValue] = useState<string>("30");
  const [fetching, setFetching] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const saveTolerance = async () => {
    setSubmitting(true);
    const res = await fetch("/api/company", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tolerance_active: toleranceActive,
        tolerance_time: toleranceValue,
      }),
    });
    if (!res.ok) {
      toast.error("Something went wrong with the server when updating attend tolerance");
    }
    const data = await res.json();
    toast.success("Attend Tolerance Updated");
    setSubmitting(false);
    return data;
  };
  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((data: CompanyModel) => {
        setToleranceActive(data.tolerance_active);
        setToleranceValue(data.tolerance_time.toString());
      })
      .catch((error) => toast.error("Something went wrong in server"))
      .finally(() => setFetching(false));
  }, []);

  return fetching ? (
    <AttendToleranceSkeleton />
  ) : (
    <section className="spacep-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl uppercase font-semibold">Attend Tolerance</h1>
        <InputCheckbox checked={toleranceActive} onChange={setToleranceActive} />
      </div>
      <article
        className={clsx("space-y-4", {
          "opacity-50 select-none": !toleranceActive,
        })}
      >
        <small className="text-slate-400 font-semibold">
          <CiCircleQuestion className="inline text-xl" /> The time tolerance of when you can and
          can&apos;t clock-in before respective start of each shift (in minute)
        </small>
        <InputText
          value={toleranceValue}
          onChange={setToleranceValue}
          disabled={!toleranceActive}
        />
      </article>
      <button
        type="button"
        onClick={saveTolerance}
        disabled={submitting}
        className="p-4 px-8 disabled:bg-emerald-300 mt-4 rounded bg-emerald-400 hover:bg-emerald-500 text-white"
      >
        {submitting ? "Saving" : "Save"}
      </button>
    </section>
  );
};
export default AttendTolerance;
