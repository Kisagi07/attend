"use client";
import { useState, useEffect, useRef } from "react";
import Select from "@/app/components/Select";
import { toast } from "react-toastify";
import clsx from "clsx";
import { UserModel } from "@/models/User";
import { useRouter } from "next/navigation";
import { JobPositionModel } from "@/models/JobPosition";
import { EmployeeFormSkeleton } from "@/app/skeletons";
interface Option {
  label: string;
  value: string | number;
}
const CreateEmployee = ({ params }: { params: { work_id: string } }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [jobOptions, setJobOptions] = useState<Option[]>([]);
  const [jobPosition, setJobPosition] = useState<Option>();
  const [todayShift, setTodayShift] = useState<Option>();
  const [name, setName] = useState<string>("");
  const [workId, setWorkId] = useState<string>("Loading...");
  const [user, setUser] = useState<UserModel>();
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
  useEffect(() => {
    Promise.all([
      fetch("/api/job-positions").then((res) => res.json() as Promise<JobPositionModel[]>),
      fetch(`/api/users/${params.work_id}`).then((res) => res.json() as Promise<UserModel>),
    ])
      .then((data) => {
        const options: Option[] = data[0].map((position) => ({
          label: `${position.name} | ${position.shift_duration}`,
          value: position.id,
        }));
        setJobOptions(options);

        setUser(data[1]);
        setWorkId(data[1].work_id);
        setName(data[1].name);
        const defaultPosition = options.find((option) => option.value === data[1].job_position_id);
        if (defaultPosition) {
          setJobPosition(defaultPosition);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setFetching(false));
  }, [params.work_id]);

  return (
    <section className="space-y-2">
      <h1 className="text-lg uppercase font-semibold">Edit Employee</h1>
      <hr />
      {fetching ? (
        <EmployeeFormSkeleton />
      ) : (
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
              className={clsx("w-full rounded outline-none border border-slate-200 p-2", {
                "!border-red-500": validation["name"],
              })}
            />
          </div>

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
      )}
    </section>
  );
};
export default CreateEmployee;
