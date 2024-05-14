"use client";
import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";

interface CProps {
  name?: string;
  onChange?: (value: string) => void;
  defaultValue?: string[];
}
interface WorkDay {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  [key: string]: boolean;
}
const WorkDayInput = ({ name, onChange, defaultValue }: CProps) => {
  const [workDay, setWorkDay] = useState<WorkDay>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const encodedWorkDays = useCallback(() => {
    let encodedValue: number[] = [];
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    days.forEach((day, index) => {
      if (workDay[day as keyof WorkDay]) {
        encodedValue.push(index);
      }
    });
    return encodedValue.join(",");
  }, [workDay]);
  const handleWorkDayChange = (key: string) => {
    setWorkDay({
      ...workDay,
      [key]: !workDay[key],
    });
  };

  const callOnChange = useCallback(
    () => onChange && onChange(encodedWorkDays()),
    [encodedWorkDays, onChange]
  );

  useEffect(() => {
    callOnChange();
  }, [callOnChange]);

  useEffect(() => {
    if (defaultValue) {
      const defaultWorkDay: { [key: string]: boolean } = {};
      defaultValue.forEach((value) => {
        const lowerCase = value.toLowerCase();
        defaultWorkDay[lowerCase] = true;
      });
      setWorkDay((prev) => ({ ...prev, ...defaultWorkDay }));
    }
  }, [defaultValue]);

  return (
    <div className="flex gap-x-2 uppercase text-sm">
      <div
        onClick={() => handleWorkDayChange("sunday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.sunday,
        })}
      >
        S
      </div>
      <div
        onClick={() => handleWorkDayChange("monday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.monday,
        })}
      >
        M
      </div>
      <div
        onClick={() => handleWorkDayChange("tuesday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.tuesday,
        })}
      >
        T
      </div>
      <div
        onClick={() => handleWorkDayChange("wednesday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.wednesday,
        })}
      >
        W
      </div>
      <div
        onClick={() => handleWorkDayChange("thursday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.thursday,
        })}
      >
        T
      </div>
      <div
        onClick={() => handleWorkDayChange("friday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.friday,
        })}
      >
        F
      </div>
      <div
        onClick={() => handleWorkDayChange("saturday")}
        className={clsx("border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer", {
          "bg-gray-200": workDay.saturday,
        })}
      >
        S
      </div>
      <input name={name} type="hidden" value={encodedWorkDays()} />
    </div>
  );
};
export default WorkDayInput;
