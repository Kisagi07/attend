"use client";
import { FC, useState } from "react";
import Calendar from "@components/Calendar";

const HolidaysCalendar: FC = () => {
  return (
    <section>
      <Calendar />
      <div className="mt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] p-4"></div>
    </section>
  );
};
export default HolidaysCalendar;
