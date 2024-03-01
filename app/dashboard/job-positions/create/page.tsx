"use client";
import InputText from "@/app/components/InputText";
import { useState } from "react";
import { toast } from "react-toastify";
import WorkDayInput from "@/app/components/WorkDayInput";
import { extractNumber } from "@/app/helper";
const JobCreatePage = () => {
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<string>("Rp.0");
  const [shiftStart, setShiftStart] = useState<string>("");
  const [shiftEnd, setShiftEnd] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [workDay, setWorkDay] = useState<string>("");
  const storeJobPosition = async (): Promise<any> => {
    const res = await fetch("/api/job-positions", {
      method: "POST",
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
      toast.error("Something went wrong when creating job position");
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
        storeJobPosition().then((res) => {
          setSubmitting(false);
          if(!res.ok) throw new Error('Something went wrong')
          return res;
        }),
        {
          pending: "Creating job position...",
          success: "Job position created!",
          error: "Something went wrong when creating job position",
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
  return (
    <section className="space-y-4 p-4">
      <h1 className="text-xl uppercase font-semibold">Create Job Position</h1>
      <hr />
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
        <WorkDayInput onChange={setWorkDay} />
        <InputText
          label="Salary (Per Hour)"
          value={`${salary}`}
          onChange={handleSalaryChange}
          error={formErrors["salary"]}
        />
        <button
          type="submit"
          className="bg-emerald-400 hover:bg-emerald-500 w-full text-white rounded p-2"
        >
          Save
        </button>
      </form>
    </section>
  );
};
export default JobCreatePage;
