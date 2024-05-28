"use client";
import Select from "@/app/components/Select";
import { EmployeeFormSkeleton } from "@/app/skeletons";
import { job_positions, users } from "@prisma/client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
interface Option {
  label: string;
  value: string | number;
}
const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];
const UpdateEmployee = ({ params }: { params: { work_id: string } }) => {
  const router = useRouter();
  const [showPIN, setShowPIN] = useState<boolean>(false);
  const [PIN, setPIN] = useState<string>("");

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
  const [workId, setWorkId] = useState<string>("Loading...");
  const [user, setUser] = useState<users>();
  const [validation, setValidation] = useState<{
    [key: string]: boolean;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);
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
  const handleUpdate = async () => {
    const sendUpdate = async () => {
      const res = await fetch(`/api/users/${params.work_id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          work_id: workId,
          job_position_id: jobPosition!.value,
          gender: gender.value,
          role: isIntern ? "intern" : "employee",
          password: PIN,
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
    if (!validated.validated) {
      setValidation(validated.failed);
      return;
    } else {
      setSubmitting(true);

      await handleUpdate();

      setSubmitting(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isNaN(+e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };
  useEffect(() => {
    Promise.all([
      fetch("/api/job-positions").then((res) => res.json() as Promise<job_positions[]>),
      fetch(`/api/users/${params.work_id}`).then((res) => res.json() as Promise<users>),
    ])
      .then((data) => {
        const options: Option[] = data[0].map((position) => ({
          label: `${position.name} | ${position.shift_start} - ${position.shift_end}`,
          value: position.id,
        }));
        setJobOptions(options);
        setUser(data[1]);
        setWorkId(data[1].work_id!);
        setName(data[1].name!);
        const defaultPosition = options.find((option) => option.value === data[1].job_position_id);
        if (defaultPosition) {
          setJobPosition(defaultPosition);
        }
        data[1].gender === "male"
          ? setGender({ label: "Male", value: "male" })
          : setGender({ label: "Female", value: "female" });
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setFetching(false));
  }, [params.work_id]);

  return (
    <section className="space-y-4">
      <h1 className="text-lg uppercase font-semibold">Edit Employee</h1>
      <hr />
      {fetching ? (
        <EmployeeFormSkeleton />
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 md:grid md:grid-cols-2 md:items-center md:space-y-0 md:gap-4"
        >
          <div>
            <label htmlFor="name">
              Name<span className="text-red-500">*</span> :{" "}
            </label>
            <input
              defaultValue={user?.name!}
              type="text"
              onChange={({ currentTarget }) => setName(currentTarget.value)}
              className={clsx("w-full rounded outline-none border border-slate-200 p-2", {
                "!border-red-500": validation["name"],
              })}
            />
          </div>

          <div>
            <label htmlFor="PIN">PIN</label>
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
            {submitting ? "Updating" : "Update Employee"}
          </button>
        </form>
      )}
    </section>
  );
};
export default UpdateEmployee;
