"use client";
import { useState, useEffect, useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Select from "@/app/components/Select";
import { toast } from "react-toastify";
import clsx from "clsx";
interface Option {
  label: string;
  value: string;
}
const CreateEmployee = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [jobOptions, setJobOptions] = useState<Option[]>([
    {
      label: "Developer",
      value: "Developer",
    },
    {
      label: "Designer",
      value: "Designer",
    },
    {
      label: "Manager",
      value: "Manager",
    },
  ]);
  const [shiftOptions, setShiftOptions] = useState<Option[]>([
    {
      label: "09:00 - 16:00",
      value: "09:00 - 16:00",
    },
    {
      label: "16:00 - 23:00",
      value: "16:00 - 23:00",
    },
    {
      label: "23:00 - 09:00",
      value: "23:00 - 09:00",
    },
  ]);
  const [jobPosition, setJobPosition] = useState<Option>();
  const [todayShift, setTodayShift] = useState<Option>();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [workId, setWorkId] = useState<string>("Loading...");
  const [validation, setValidation] = useState<{
    [key: string]: boolean;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const fetchRegisterData = async () => {
    const res = await fetch(`/api/register`);
    if (!res.ok) {
      throw new Error("Failed on getting register additional data");
    }

    const data = await res.json();
    setWorkId(data);
  };
  const validateForm = () => {
    const success: { [key: string]: boolean } = {};
    const failed: { [key: string]: boolean } = {};
    if (name?.length > 0) {
      success.name = true;
    } else {
      failed.name = true;
    }
    if (password?.length > 0) {
      success.password = true;
    } else {
      failed.password = true;
    }
    if (workId?.length > 0 && workId !== "Loading...") {
      success.work_id = true;
    } else {
      failed.work_id = true;
    }
    if (jobPosition) {
      success.job_position = true;
    } else {
      failed.job_position = true;
    }
    if (todayShift) {
      success.today_shift = true;
    } else {
      failed.today_shift = true;
    }

    let validated = false;
    if (Object.keys(failed).length === 0) {
      validated = true;
    }

    return {
      validated,
      success,
      failed,
    };
  };
  const resetForm = () => {
    setName("");
    setPassword("");
    setWorkId("");
    setJobPosition(undefined);
    setTodayShift(undefined);
    formRef.current!.reset();
  };
  const sendRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        work_id: workId,
        job_position: jobPosition!.value,
        today_shift: todayShift!.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      toast.error("Failed Registering Employee");
    } else {
      toast.success("Employee Registered");
    }
    const data = await res.json();
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateForm();
    setValidation({});
    if (!validated.validated) {
      setValidation(validated.failed);
      return;
    } else {
      setSubmitting(true);

      await sendRegister();

      resetForm();
      fetchRegisterData();
      setSubmitting(false);
    }
  };
  useEffect(() => {
    fetchRegisterData();
  }, []);

  return (
    <section className="space-y-2">
      <h1 className="text-lg uppercase font-semibold">Add Employee</h1>
      <hr />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-4"
      >
        <div>
          <label htmlFor="name">
            Name<span className="text-red-500">*</span> :{" "}
          </label>
          <input
            type="text"
            onChange={({ currentTarget }) => setName(currentTarget.value)}
            className={clsx(
              "w-full rounded outline-none border border-slate-200 p-2",
              {
                "border-red-500": validation["name"],
              }
            )}
          />
        </div>

        <div>
          <label htmlFor="name">
            Password<span className="text-red-500">*</span> :{" "}
          </label>
          <div className="relative">
            <input
              onChange={({ currentTarget }) => setPassword(currentTarget.value)}
              type={showPassword ? "text" : "password"}
              className={clsx(
                "w-full rounded outline-none border border-slate-200 p-2",
                {
                  "border-red-500": validation["password"],
                }
              )}
            />
            <span className="absolute text-base top-1/2 cursor-pointer -translate-y-1/2 right-2">
              {showPassword ? (
                <FaRegEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaRegEye onClick={() => setShowPassword(true)} />
              )}
            </span>
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="name">
            Work ID<span className="text-red-500">*</span> :{" "}
          </label>
          <input
            readOnly
            type="text"
            className={clsx(
              "w-full rounded outline-none border border-slate-200 p-2",
              {
                "border-red-500": validation["work_id"],
              }
            )}
            value={workId}
          />
        </div>
        <Select
          value={jobPosition}
          label="Job Position"
          options={jobOptions}
          onChange={setJobPosition}
          error={validation["job_position"]}
          required
        />
        <Select
          value={todayShift}
          label="Shift"
          error={validation["today_shift"]}
          options={shiftOptions}
          onChange={setTodayShift}
          required
        />
        <button
          disabled={submitting}
          className={clsx(
            "bg-black md:col-span-2 hover:bg-slate-950 w-full text-white p-2 rounded",
            {
              "bg-slate-700": submitting,
            }
          )}
          type="submit"
        >
          {submitting ? "Registering" : "Register Employee"}
        </button>
      </form>
    </section>
  );
};
export default CreateEmployee;
