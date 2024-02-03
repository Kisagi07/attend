"use client";
import { useState, useEffect, useRef } from "react";
import Select from "@/app/components/Select";
import { toast } from "react-toastify";
import clsx from "clsx";
import { UserModel } from "@/models/User";
import { useRouter } from "next/navigation";
interface Option {
  label: string;
  value: string;
}
const CreateEmployee = ({ params }: { params: { work_id: string } }) => {
  const router = useRouter();
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
  const [workId, setWorkId] = useState<string>("Loading...");
  const [user, setUser] = useState<UserModel>();
  const [validation, setValidation] = useState<{
    [key: string]: boolean;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const fetchUserData = async () => {
    const res = await fetch(`/api/users/${params.work_id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      toast.error("Something went wrong!");
      throw new Error("Failed on fetching employee data");
    }

    const data: UserModel = await res.json();
    setUser(data);
    setWorkId(data.work_id);
    setName(data.name);
    const defaultPosition = jobOptions.find(
      (option) => option.value === data.job_position
    );
    if (defaultPosition) {
      setJobPosition(defaultPosition);
    }
    const defaultShift = shiftOptions.find(
      (option) => option.value === data.today_shift
    );
    if (defaultShift) {
      setTodayShift(defaultShift);
    }
  };
  const validateForm = () => {
    const success: { [key: string]: boolean } = {};
    const failed: { [key: string]: boolean } = {};
    if (name?.length > 0) {
      success.name = true;
    } else {
      failed.name = true;
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
  const handleUpdate = async () => {
    const sendUpdate = async () => {
      const res = await fetch(`/api/users/${params.work_id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          work_id: workId,
          job_position: jobPosition!.value,
          today_shift: todayShift!.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    toast.promise(sendUpdate, {
      pending: "Updating",
      success: {
        render() {
          router.push("/dashboard/employees");
          return "User Updated";
        },
      },
      error: "Failed on updating user",
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateForm();
    setValidation({});
    console.log(validated);
    if (!validated.validated) {
      setValidation(validated.failed);
      return;
    } else {
      setSubmitting(true);

      await handleUpdate();

      setSubmitting(false);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section className="space-y-2">
      <h1 className="text-lg uppercase font-semibold">Edit Employee</h1>
      <hr />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-4"
      >
        <div className="md:col-span-2">
          <label htmlFor="name">
            Name<span className="text-red-500">*</span> :{" "}
          </label>
          <input
            defaultValue={user?.name}
            type="text"
            onChange={({ currentTarget }) => setName(currentTarget.value)}
            className={clsx(
              "w-full rounded outline-none border border-slate-200 p-2",
              {
                "!border-red-500": validation["name"],
              }
            )}
          />
        </div>

        {/* <div>
          <label htmlFor="password">
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
        </div> */}
        <div className="md:col-span-2">
          <label htmlFor="work_id">
            Work ID<span className="text-red-500">*</span> :{" "}
          </label>
          <input
            readOnly
            type="text"
            className={clsx(
              "w-full rounded outline-none border bg-slate-100 border-slate-200 p-2",
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
              "!bg-slate-700": submitting,
            }
          )}
          type="submit"
        >
          {submitting ? "Updating" : "Update Employee"}
        </button>
      </form>
    </section>
  );
};
export default CreateEmployee;
