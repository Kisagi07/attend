"use client";
import { CiCircleQuestion } from "react-icons/ci";
import InputCheckbox from "./InputCheckbox";
import { useState, useEffect } from "react";
import clsx from "clsx";
import InputText from "./InputText";
import AttendToleranceSkeleton from "../skeletons/AttendToleranceSkeleton";
import { toast } from "react-toastify";
import { company } from "@prisma/client";
const AttendTolerance = () => {
  const [toleranceActive, setToleranceActive] = useState<boolean>(false);
  const [toleranceValue, setToleranceValue] = useState<string>("30");
  const [fetching, setFetching] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const saveTolerance = async () => {
    setSubmitting(true);
    const res = await fetch("/api/company/tolerance", {
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
      toast.error(
        "Something went wrong with the server when updating attend tolerance",
      );
    }
    const data = await res.json();
    toast.success("Attend Tolerance Updated");
    setSubmitting(false);
    return data;
  };
  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((data: company) => {
        setToleranceActive(data.tolerance_active || false);
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
        <h1 className="text-xl font-semibold uppercase">Attend Tolerance</h1>
        <InputCheckbox
          checked={toleranceActive}
          onChange={setToleranceActive}
        />
      </div>
      <article
        className={clsx("space-y-4", {
          "select-none opacity-50": !toleranceActive,
        })}
      >
        <small className="font-semibold text-slate-400">
          <CiCircleQuestion className="inline text-xl" /> The time tolerance of
          when you can and can&apos;t clock-in before respective start of each
          shift (in minute)
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
        className="mt-4 rounded bg-emerald-400 p-4 px-8 text-white hover:bg-emerald-500 disabled:bg-emerald-300"
      >
        {submitting ? "Saving" : "Save"}
      </button>
    </section>
  );
};
export default AttendTolerance;
