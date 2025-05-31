"use client";
import { useState, useEffect, useRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Select from "@/app/components/Select";
import { toast } from "sonner";
import { EmployeeFormSkeleton } from "@/app/skeletons";
import clsx from "clsx";
import { job_positions } from "generated/prisma";
interface Option {
  label: string;
  value: string | number;
}

const genderOptions: Option[] = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const CreateEmployee = () => {
  const [showPIN, setShowPIN] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [jobOptions, setJobOptions] = useState<Option[]>([]);
  const [jobPosition, setJobPosition] = useState<Option>();
  const [isIntern, setIsIntern] = useState<boolean>(false);
  const [gender, setGender] = useState<Option>({
    label: "Male",
    value: "male",
  });
  const [name, setName] = useState<string>("");
  const [PIN, setPIN] = useState<string>("");
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
    if (PIN?.length > 0) {
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

    if (gender) {
      success.gender = true;
    } else {
      failed.gender = true;
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
    setPIN("");
    setWorkId("");
    setJobPosition(undefined);
    formRef.current!.reset();
  };
  const sendRegister = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          password: PIN,
          work_id: workId,
          job_position_id: jobPosition!.value,
          gender: gender.value,
          role: isIntern ? "intern" : "employee",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Employee Registered");
        resetForm();
        fetchRegisterData();
      } else {
        const data = await res.json();
        if (data.error) {
          toast.error(data.error);
          throw new Error(data.error);
        } else {
          toast.error("Failed Registering Employee");
          throw new Error("Something Went Wrong");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
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

      sendRegister();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isNaN(+e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };
  useEffect(() => {
    Promise.all([
      fetch(`/api/register`).then((res) => res.json() as Promise<string>),
      fetch(`/api/job-positions`).then((res) => res.json() as Promise<job_positions[]>),
    ])
      .then((data) => {
        setWorkId(data[0]);
        const options: Option[] = data[1].map((position) => ({
          label: `${position.name} | ${position.shift_start} - ${position.shift_end}`,
          value: position.id,
        }));
        setJobOptions(options);
      })
      .finally(() => setFetching(false));
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-lg uppercase font-semibold">Add Employee</h1>
      <hr />
      {fetching ? (
        <EmployeeFormSkeleton create />
      ) : (
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
              className={clsx("w-full rounded outline-none border border-slate-200 p-2", {
                "!border-red-500": validation["name"],
              })}
            />
          </div>

          <div>
            <label htmlFor="PIN">
              PIN<span className="text-red-500">*</span> :{" "}
            </label>
            <div className="relative">
              <input
                id="PIN"
                onChange={({ currentTarget }) => setPIN(currentTarget.value)}
                type={showPIN ? "text" : "password"}
                inputMode="tel"
                className={clsx("w-full rounded outline-none border border-slate-200 p-2", {
                  "!border-red-500": validation["password"],
                })}
                maxLength={6}
                onKeyDown={handleKeyDown}
              />
              <span className="absolute text-base top-1/2 cursor-pointer -translate-y-1/2 right-2">
                {showPIN ? (
                  <FaRegEyeSlash onClick={() => setShowPIN(false)} />
                ) : (
                  <FaRegEye onClick={() => setShowPIN(true)} />
                )}
              </span>
            </div>
          </div>
          <div>
            <Select
              value={gender}
              label="Gender"
              options={genderOptions}
              onChange={setGender}
              error={validation["gender"]}
              required
            />
          </div>
          <div>
            <label htmlFor="name">
              Work ID<span className="text-red-500">*</span> :{" "}
            </label>
            <input
              readOnly
              type="text"
              className={clsx("w-full rounded outline-none border border-slate-200 p-2", {
                "!border-red-500": validation["work_id"],
              })}
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
          <div className="flex items-center gap-4 pt-4">
            <input
              type="checkbox"
              checked={isIntern}
              onChange={() => setIsIntern(!isIntern)}
              className="cursor-pointer"
            />
            <label htmlFor="" className="block">
              Intern
            </label>
          </div>
          <button
            disabled={submitting}
            className={clsx(
              "bg-black md:col-span-2 hover:bg-slate-950 w-full text-white p-4 rounded",
              {
                "!bg-slate-700": submitting,
              }
            )}
            type="submit"
          >
            {submitting ? "Registering" : "Register Employee"}
          </button>
        </form>
      )}
    </section>
  );
};
export default CreateEmployee;
