"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { Datepicker, FloatingLabel, Button, Alert } from "flowbite-react";
import { holidays } from "@prisma/client";
import { IoIosRemoveCircle } from "react-icons/io";

const CompanyHoliday: React.FC = () => {
  const { data, isLoading, mutate } = useSWR<holidays[]>("/api/company-holiday", fetcher);

  const [companyHoliday, setCompanyHoliday] = React.useState([]);
  const [date, setDate] = React.useState<Date>(new Date());
  const [holidayName, setHolidayName] = React.useState<string>("");
  const [sending, setSending] = React.useState<boolean>(false);
  const [deleting, setDeleting] = React.useState<boolean>(false);

  const handleAddHoliday = async () => {
    if (!isNameValid()) return;
    setSending(true);
    try {
      const response = await fetch("/api/company-holiday", {
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
        setDate(new Date());
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
      <Alert color="info">
        <span className="font-medium">
          National Holiday are automatically counted in work attendances, this function is for
          company vacation for example: Day off, Company Holiday etc.
        </span>
      </Alert>
      <div className="space-y-2 md:grid md:gap-2 md:space-y-0 md:grid-cols-2 md:items-center">
        <Datepicker
          language="in-ID"
          weekStart={1}
          title="Pick New Holiday Date"
          onSelectedDateChanged={setDate}
          defaultDate={date}
        />
        <FloatingLabel
          variant="filled"
          label="Holiday Name"
          value={holidayName}
          onChange={(e) => setHolidayName(e.currentTarget.value)}
        />
      </div>
      <Button onClick={handleAddHoliday} gradientMonochrome="cyan" isProcessing={sending}>
        Add Holdiay
      </Button>
      {isLoading ? (
        <div className="h-8 w-full bg-gray-200 animate-pulse"></div>
      ) : (
        <ul className="divide-y divide-y-slate-400">
          {data?.map((holiday) => (
            <li key={holiday.id} className="bg-slate-100 flex items-stretch justify-between">
              <div className="py-1 px-2">
                <small className="block">{holiday.date.toString().split("T")[0]}</small>
                <p>{holiday.name}</p>
              </div>
              <button
                disabled={deleting}
                onClick={() => handleDelete(holiday.id)}
                className="text-sm disabled:bg-red-300 aspect-square px-4 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
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
