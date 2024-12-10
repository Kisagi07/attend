"use client";
import InputText from "@/app/components/InputText";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import WorkDayInput from "@/app/components/WorkDayInput";
import JobFormSkeleton from "@/app/skeletons/JobFormSkeleton";
import { useRouter } from "next/navigation";
import { dayNumberToWord, extractNumber, formatRupiah } from "@/app/helper";
import { Input } from "@nextui-org/input";
import { TimeInput } from "@nextui-org/date-input";
import { parseTime, Time } from "@internationalized/date";
import { Button } from "@nextui-org/button";
const JobEditPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [shiftStart, setShiftStart] = useState<Time | null>(null);
  const [shiftEnd, setShiftEnd] = useState<Time | null>(null);
  const [salary, setSalary] = useState<string>("Rp.0");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [workDay, setWorkDay] = useState<string>("");
  const [defaultWorkDay, setDefaultWorkDay] = useState<string[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const updateJobPosition = async (): Promise<any> => {
    try {
      const res = await fetch(`/api/job-positions/${params.id}`, {
        method: "PUT",
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
        toast.error("Something went wrong when updating job position");
        throw Error(`${res.status}: ${res.statusText}`);
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

  useEffect(() => {
    fetch(`/api/job-positions/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setShiftStart(parseTime(data.shift_start));
        setShiftEnd(parseTime(data.shift_end));
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
          <Input
            value={name}
            onValueChange={setName}
            label="Position Name"
            isInvalid={Object.hasOwn(formErrors, "name")}
            errorMessage={formErrors["name"]}
          />
          <div>
            <h6>Shift :</h6>
            <div className="grid grid-cols-3 items-center">
              <TimeInput
                value={shiftStart}
                onChange={setShiftStart}
                isInvalid={Object.hasOwn(formErrors, "shiftStart")}
                errorMessage={formErrors["shiftStart"]}
                label="Shift Start"
              />
              <span className="text-center">-</span>
              <TimeInput
                value={shiftEnd}
                onChange={setShiftEnd}
                isInvalid={Object.hasOwn(formErrors, "shiftEnd")}
                errorMessage={formErrors["shiftEnd"]}
                label="Shift End"
              />
            </div>
          </div>
          <WorkDayInput defaultValue={defaultWorkDay} onChange={setWorkDay} />
          <Input
            label="Salary (Per Hour)"
            value={salary}
            onChange={(change) => handleSalaryChange(change.target.value)}
          />
          <Button type="submit" color="success" isLoading={submitting} fullWidth>
            Save
          </Button>
        </form>
      )}
    </section>
  );
};
export default JobEditPage;
