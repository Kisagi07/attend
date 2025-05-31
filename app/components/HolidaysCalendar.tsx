"use client";
import { FC, useState, useEffect, useCallback } from "react";
import Calendar from "@components/Calendar";
import { parseDate, CalendarDate } from "@internationalized/date";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { holidays } from "generated/prisma";

const HolidaysCalendar: FC = () => {
  const { data: holidays, isLoading } = useSWR<holidays[]>("/api/holidays", fetcher);
  const [highlightDate, setHightlightDate] = useState<{
    color: "primary";
    dates: CalendarDate[];
  }>({
    color: "primary",
    dates: [],
  });

  const [screenSize, setScreenSize] = useState("sm");
  const handleScreenChange = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setScreenSize("lg");
    } else if (window.innerWidth >= 768) {
      setScreenSize("md");
    } else {
      setScreenSize("sm");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
  }, [handleScreenChange]);

  return (
    <section className="flex justify-center">
      <Calendar
        setDates={highlightDate}
        visibleMonth={screenSize === "sm" ? 1 : screenSize === "md" ? 2 : 3}
      />
    </section>
  );
};
export default HolidaysCalendar;
