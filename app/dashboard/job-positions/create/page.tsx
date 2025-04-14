"use client";
import { useState } from "react";
import { toast } from "sonner";
import WorkDayInput from "@/app/components/WorkDayInput";
import { extractNumber } from "@/app/helper";
import { Input } from "@heroui/input";
import { TimeInput } from "@heroui/date-input";
import { Time } from "@react-types/datepicker/node_modules/@internationalized/date"
import { Button } from "@heroui/button";
const JobCreatePage = () => {
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<string>("Rp.0");
  const [shiftStart, setShiftStart] = useState<null | Time>(null);
  const [shiftEnd, setShiftEnd] = useState<null | Time>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [workDay, setWorkDay] = useState<string>("");
  const storeJobPosition = async (): Promise<any> => {
    try {
      const res = await fetch("/api/job-positions", {
        method: "POST",
        body: JSON.stringify({
          name,
          shift_start: shiftStart!.toString(),
          shift_end: shiftEnd!.toString(),
          work_day: workDay,
          salary: extractNumber(salary),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw error;
      }

      const data = await res.json();
      resetForm();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validated = validateForm();
    if (validated) {
      setSubmitting(true);

      toast.promise(storeJobPosition(), {
        loading: "Creating job position...",
        success: "Job position created!",
        error: "Something went wrong when creating job position",
      });
    }
  };
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (name.trim().length === 0) {
      errors.name = "Name is required";
    }
    if (!shiftStart || shiftStart.toString().length === 0) {
      errors.shiftStart = "Shift start is required";
    }
    if (!shiftEnd || shiftEnd.toString().length === 0) {
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
    setShiftStart(null);
    setShiftEnd(null);
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
        <Input
          label="Position Name"
          name="name"
          value={name}
          isInvalid={Object.hasOwn(formErrors, "name")}
          errorMessage={formErrors["name"]}
          onValueChange={setName}
        />
        <div>
          <h6>Shift :</h6>
          <div className="grid grid-cols-3 items-center">
            <TimeInput
            // @ts-ignore
              value={shiftStart}              
              onChange={setShiftStart}
              isInvalid={Object.hasOwn(formErrors, "shiftStart")}
              errorMessage={formErrors["shiftStart"]}
              label="Shift Start"
            />
            <span className="text-center">-</span>
            <TimeInput
              // @ts-ignore
              value={shiftEnd}
              // @ts-ignore
              onChange={setShiftEnd}
              isInvalid={Object.hasOwn(formErrors, "shiftEnd")}
              errorMessage={formErrors["shiftEnd"]}
              label="Shift End"
            />
          </div>
        </div>
        <WorkDayInput onChange={setWorkDay} />
        <Input
          label="Salary (Per Hour)"
          value={salary}
          onValueChange={handleSalaryChange}
          isInvalid={Object.hasOwn(formErrors, "salary")}
          errorMessage={formErrors["salary"]}
        />
        <Button type="submit" isLoading={submitting} color="success" fullWidth>
          Save
        </Button>
      </form>
    </section>
  );
};
export default JobCreatePage;
