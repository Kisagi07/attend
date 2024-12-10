"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { holidays } from "@prisma/client";
import { IoIosRemoveCircle } from "react-icons/io";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";

const CompanyHoliday: React.FC = () => {
  const { data, isLoading, mutate } = useSWR<holidays[]>("/api/holidays", fetcher);

  const [date, setDate] = React.useState<CalendarDate | null>(today(getLocalTimeZone()));
  const [holidayName, setHolidayName] = React.useState<string>("");
  const [sending, setSending] = React.useState<boolean>(false);
  const [deleting, setDeleting] = React.useState<boolean>(false);

  const handleAddHoliday = async () => {
    if (!isNameValid()) return;
    setSending(true);
    try {
      const response = await fetch("/api/holidays", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          name: holidayName,
        }),
      });

      if (response.ok) {
        setHolidayName("");
        setDate(today(getLocalTimeZone()));
        mutate();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async (id: number) => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/company-holiday/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  // validate name is not empty
  const isNameValid = () => holidayName.trim().length > 0;

  return (
    <section className="space-y-2">
      <h1>Holidays</h1>
      <hr />
      <div className="space-y-2 md:grid md:grid-cols-2 md:items-center md:gap-2 md:space-y-0">
        <DatePicker
          label="Pick New Holiday Date"
          // onSelectedDateChanged={setDate}
          // defaultDate={date}
          value={date}
          onChange={setDate}
        />
        <Input
          variant="faded"
          label="Holiday Name"
          value={holidayName}
          onChange={(e) => setHolidayName(e.currentTarget.value)}
        />
      </div>
      <Button onClick={handleAddHoliday} color="secondary" isLoading={sending}>
        Add Holdiay
      </Button>
      {isLoading ? (
        <div className="h-8 w-full animate-pulse bg-gray-200"></div>
      ) : (
        <ul className="divide-y-slate-400 divide-y">
          {data?.map((holiday) => (
            <li key={holiday.id} className="flex items-stretch justify-between bg-slate-100">
              <div className="px-2 py-1">
                <small className="block">{holiday.date.toString().split("T")[0]}</small>
                <p>{holiday.name}</p>
              </div>
              <button
                disabled={deleting}
                onClick={() => handleDelete(holiday.id)}
                className="flex aspect-square items-center justify-center bg-red-500 px-4 text-sm text-white hover:bg-red-600 disabled:bg-red-300"
              >
                <IoIosRemoveCircle />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CompanyHoliday;
