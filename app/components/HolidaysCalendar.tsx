"use client";
import { FC, useState } from "react";
import Calendar from "@components/Calendar";
import { parseDate, CalendarDate } from "@internationalized/date";

const HolidaysCalendar: FC = () => {
  const [highlightDate, setHightlightDate] = useState<{
    color: "primary";
    dates: CalendarDate[];
  }>({
    color: "primary",
    dates: [parseDate("2024-09-02")],
  });
  return (
    <section>
      <Calendar setDates={highlightDate} />
      <div className="mt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] p-4"></div>
    </section>
  );
};
export default HolidaysCalendar;
