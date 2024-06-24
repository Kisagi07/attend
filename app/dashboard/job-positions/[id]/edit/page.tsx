"use client";
import InputText from "@/app/components/InputText";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import WorkDayInput from "@/app/components/WorkDayInput";
import JobFormSkeleton from "@/app/skeletons/JobFormSkeleton";
import { useRouter } from "next/navigation";
import { dayNumberToWord, extractNumber, formatRupiah } from "@/app/helper";
const JobEditPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [shiftStart, setShiftStart] = useState<string>("");
  const [shiftEnd, setShiftEnd] = useState<string>("");
  const [salary, setSalary] = useState<string>("Rp.0");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [workDay, setWorkDay] = useState<string>("");
  const [defaultWorkDay, setDefaultWorkDay] = useState<string[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const updateJobPosition = async (): Promise<any> => {
    const res = await fetch(`/api/job-positions/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        shift_start: shiftStart,
        shift_end: shiftEnd,
        work_day: workDay,
        salary: extractNumber(salary),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      toast.error("Something went wrong when updating job position");
    }

    const data = await res.json();
    resetForm();
    return data;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateForm();
    if (validated) {
      setSubmitting(true);

      toast.promise(
        updateJobPosition().then((res) => {
          setSubmitting(false);
          return res;
        }),
        {
          loading: "Updating job position...",
          success: (data) => {
            router.push("/dashboard/job-positions");
            return "Job position updated!";
          },
          error: "Something went wrong when updating job position",
        }
      );
    }
  };
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (name.trim().length === 0) {
      errors.name = "Name is required";
    }
    if (shiftStart.trim().length === 0) {
      errors.shiftStart = "Shift start is required";
    }
    if (shiftEnd.trim().length === 0) {
      errors.shiftEnd = "Shift end is required";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return false;
    } else {
      return true;
    }
  };
  const resetForm = () => {
    setName("");
    setShiftStart("");
    setShiftEnd("");
  };
  const handleSalaryChange = (value: string) => {
    const clean: number = parseInt(value.match(/\d+/g)?.join("") || "0");
    const format = clean.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&.");
    setSalary(`Rp. ${format}`);
  };

  useEffect(() => {
    fetch(`/api/job-positions/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setShiftStart(data.shift_start);
        setShiftEnd(data.shift_end);
        setDefaultWorkDay(
          data.work_day.split(",").map((day: string) => dayNumberToWord(Number(day)))
        );
        setSalary(formatRupiah(data.salary));
      })
      .finally(() => setFetching(false));
  }, [params.id]);

  return (
    <section className="space-y-4 p-4">
      <h1 className="text-xl uppercase font-semibold">Edit Job Position</h1>
      <hr />
      {fetching ? (
        <JobFormSkeleton />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputText
            error={formErrors["name"]}
            value={name}
            onChange={setName}
            label="Position Name"
          />
          <div>
            <h6>Shift :</h6>
            <small className="text-red-400 block">{formErrors["shiftStart"]}</small>
            <small className="text-red-400 block">{formErrors["shiftEnd"]}</small>
            <div className="grid grid-cols-3 items-center">
              <input
                value={shiftStart}
                onChange={({ currentTarget }) => setShiftStart(currentTarget.value)}
                type="time"
                className="outline-none border-2 border-gray-200 p-2 focus:border-sky-500"
              />
              <span className="text-center">-</span>
              <input
                value={shiftEnd}
                onChange={({ currentTarget }) => setShiftEnd(currentTarget.value)}
                type="time"
                className="outline-none border-2 border-gray-200 p-2 focus:border-sky-500"
              />
            </div>
          </div>
          <WorkDayInput defaultValue={defaultWorkDay} onChange={setWorkDay} />
          <InputText
            label="Salary (Per Hour)"
            value={`${salary}`}
            onChange={handleSalaryChange}
            error={formErrors["salary"]}
          />
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 w-full text-white rounded p-4"
          >
            Save
          </button>
        </form>
      )}
    </section>
  );
};
export default JobEditPage;
