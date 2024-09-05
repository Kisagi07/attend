"use client";
import { FC, useState, useRef, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Button } from "@nextui-org/button";
import {
  today,
  getLocalTimeZone,
  endOfMonth,
  CalendarDate,
  startOfMonth,
  getDayOfWeek,
} from "@internationalized/date";
import { monthNumberToWord } from "@/app/helper";
import clsx from "clsx";

type Calendar = {
  value?: CalendarDate | null;
  onChange?: (value: CalendarDate | null) => void;
  visibleMonth?: 1 | 2 | 3;
  setDates?: { color: "danger" | "default" | "success" | "primary"; dates: CalendarDate[] };
};

const Calendar: FC<Calendar> = ({ visibleMonth = 2, value, onChange, setDates }) => {
  const [baseDate, setBaseDate] = useState(today(getLocalTimeZone()));
  const [internalValue, setInternalValue] = useState<CalendarDate | null>(null);
  const monthRefSpan = useRef<HTMLSpanElement[]>([]);
  const calendarsRef = useRef<HTMLDivElement[]>([]);

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleDateChange = (newValue: CalendarDate | null) => {
    const theSame = () => {
      return (
        newValue?.day === selectedValue?.day &&
        newValue?.month === selectedValue?.month &&
        newValue?.year === selectedValue?.year
      );
    };

    if (isControlled) {
      onChange?.(theSame() ? null : newValue);
    } else {
      setInternalValue(theSame() ? null : newValue);
    }
  };

  const handleChangeMonth = async (dir: "next" | "prev") => {
    animate("diss");
    await new Promise((resolve) => setTimeout(resolve, 200));
    switch (dir) {
      case "next":
        setBaseDate(baseDate.add({ months: 1 }));
        break;
      case "prev":
        setBaseDate(baseDate.subtract({ months: 1 }));
        break;
      default:
        console.error("Invalid direction");
    }
    animate("switch");
    await new Promise((resolve) => setTimeout(resolve, 200));
    animate("appear");
  };

  const loopNumber = Array.from({ length: visibleMonth }, (_, i) => ({ id: i }));

  useEffect(() => {
    monthRefSpan.current = [];
    calendarsRef.current = [];
  }, [visibleMonth]);

  const animate = (step: "diss" | "switch" | "appear") => {
    switch (step) {
      case "diss":
        monthRefSpan.current.forEach((el, i) => {
          el.classList.add("-translate-x-full");
          el.classList.add("opacity-0");
        });
        calendarsRef.current.forEach((el, i) => {
          el.classList.add("opacity-0");
          el.classList.add("-translate-x-full");
        });
        break;
      case "switch":
        monthRefSpan.current.forEach((el, i) => {
          el.classList.remove("-translate-x-full");
          el.classList.add("translate-x-full");
        });
        calendarsRef.current.forEach((el, i) => {
          el.classList.remove("-translate-x-full");
          el.classList.add("translate-x-full");
        });
        break;
      case "appear":
        monthRefSpan.current.forEach((el, i) => {
          el.classList.remove("translate-x-full");
          el.classList.remove("opacity-0");
        });
        calendarsRef.current.forEach((el, i) => {
          el.classList.remove("translate-x-full");
          el.classList.remove("opacity-0");
        });
        break;
    }
  };
  return (
    <div
      slot="wrapper"
      className={clsx("rounded-md shrink-0 shadow-around max-w-full overflow-x-auto w-max")}
    >
      <div
        slot="navigation"
        className={clsx("flex *:shrink-0 py-1 px-4 items-center gap-2", {
          "w-[15rem]": visibleMonth === 1,
          "w-[30rem]": visibleMonth === 2,
          "w-[45rem]": visibleMonth === 3,
        })}
      >
        <Button
          variant="light"
          isIconOnly
          radius="full"
          size="sm"
          className="text-slate-400"
          onClick={() => handleChangeMonth("prev")}
        >
          <BiChevronLeft className="size-6" />
        </Button>
        <div className="overflow-x-clip flex grow *:shrink-0 justify-between">
          {loopNumber.map((m) => (
            <span
              key={m.id}
              ref={(el) => {
                monthRefSpan.current[m.id] = el!;
              }}
              className={`text-slate-500 font-medium transition-all duration-200 overflow-x-hidden ${
                visibleMonth === m.id + 1 ? "text-slate-500" : ""
              }`}
            >
              {monthNumberToWord(baseDate.add({ months: m.id }).month - 1)}{" "}
              {baseDate.add({ months: m.id }).year}
            </span>
          ))}
        </div>
        <Button
          variant="light"
          isIconOnly
          radius="full"
          size="sm"
          className="text-slate-400"
          onClick={() => handleChangeMonth("next")}
        >
          <BiChevronRight className="size-6" />
        </Button>
      </div>
      <div slot="calendar" className="flex *:shrink-0 w-max overflow-y-hidden">
        {loopNumber.map((m) => {
          const loopDate = baseDate.add({ months: m.id });
          return (
            <div key={m.id} className="text-center w-60">
              <div className="grid grid-cols-7 gap-1 px-4 text-slate-400 font-medium">
                <span>S</span>
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
              </div>
              <div className="bg-slate-50 overflow-x-hidden h-full">
                <div
                  className="grid grid-cols-7 gap-1 px-4 py-2 *:aspect-square transition-all duration-200"
                  ref={(el) => {
                    calendarsRef.current[m.id] = el!;
                  }}
                >
                  {Array.from(
                    { length: getDayOfWeek(startOfMonth(loopDate), "id-ID") },
                    (_, id) => ({ id })
                  )
                    .map((sd) => (
                      <span
                        key={sd.id + "-start-empty"}
                        className="flex items-center justify-center text-slate-300"
                      >
                        {endOfMonth(loopDate.subtract({ months: 1 })).day - sd.id}
                      </span>
                    ))
                    .reverse()}
                  {Array.from({ length: endOfMonth(loopDate).day }, (_, i) => ({
                    i,
                  })).map((d) => (
                    <span
                      onClick={() => handleDateChange(loopDate.set({ day: d.i + 1 }))}
                      key={d.i}
                      className={clsx(
                        "flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-500",
                        {
                          "bg-blue-500 text-white hover:bg-blue-500 hover:text-white ":
                            selectedValue?.day === d.i + 1 &&
                            selectedValue?.month === loopDate.month &&
                            selectedValue?.year === loopDate.year,
                          "text-blue-500": setDates?.dates.some(
                            (date) =>
                              date.day === d.i + 1 &&
                              date.month === loopDate.month &&
                              date.year === loopDate.year &&
                              setDates.color === "primary"
                          ),
                          "text-red-500": setDates?.dates.some(
                            (date) =>
                              date.day === d.i + 1 &&
                              date.month === loopDate.month &&
                              date.year === loopDate.year &&
                              setDates.color === "danger"
                          ),
                          "text-emerald-500": setDates?.dates.some(
                            (date) =>
                              date.day === d.i + 1 &&
                              date.month === loopDate.month &&
                              date.year === loopDate.year &&
                              setDates.color === "success"
                          ),
                          "text-slate-500": setDates?.dates.some(
                            (date) =>
                              date.day === d.i + 1 &&
                              date.month === loopDate.month &&
                              date.year === loopDate.year &&
                              setDates.color === "default"
                          ),
                        }
                      )}
                    >
                      {d.i + 1}
                    </span>
                  ))}
                  {Array.from(
                    { length: 6 - getDayOfWeek(endOfMonth(loopDate), "id-ID") },
                    (_, id) => ({ id })
                  ).map((ed) => (
                    <span
                      key={ed.id + "-end-empty"}
                      className="flex items-center justify-center text-slate-300"
                    >
                      {ed.id + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Calendar;
