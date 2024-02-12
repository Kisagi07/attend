"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface CProps {
  name?: string;
  onChange?: (value: string) => void;
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
const WorkDayInput = ({ name, onChange }: CProps) => {
  const [workDay, setWorkDay] = useState<WorkDay>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const encodedWorkDays = () => {
    let encodedValue: number[] = [];
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    days.forEach((day, index) => {
      if (workDay[day as keyof WorkDay]) {
        encodedValue.push(index + 1);
      }
    });
    return encodedValue.join(",");
  };
  const handleWorkDayChange = (key: string) => {
    setWorkDay({
      ...workDay,
      [key]: !workDay[key],
    });
  };
  useEffect(() => {
    onChange && onChange(encodedWorkDays());
  }, [workDay]);

  return (
    <div className="flex gap-x-2 uppercase text-sm">
      <div
        onClick={() => handleWorkDayChange("sunday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.sunday,
          }
        )}
      >
        S
      </div>
      <div
        onClick={() => handleWorkDayChange("monday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.monday,
          }
        )}
      >
        M
      </div>
      <div
        onClick={() => handleWorkDayChange("tuesday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.tuesday,
          }
        )}
      >
        T
      </div>
      <div
        onClick={() => handleWorkDayChange("wednesday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.wednesday,
          }
        )}
      >
        W
      </div>
      <div
        onClick={() => handleWorkDayChange("thursday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.thursday,
          }
        )}
      >
        T
      </div>
      <div
        onClick={() => handleWorkDayChange("friday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.friday,
          }
        )}
      >
        F
      </div>
      <div
        onClick={() => handleWorkDayChange("saturday")}
        className={clsx(
          "border border-gray-200 p-2 hover:bg-gray-200 cursor-pointer",
          {
            "bg-gray-200": workDay.saturday,
          }
        )}
      >
        S
      </div>
      <input name={name} type="hidden" value={encodedWorkDays()} />
    </div>
  );
};
export default WorkDayInput;
