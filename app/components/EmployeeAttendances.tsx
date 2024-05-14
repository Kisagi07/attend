"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { Select } from "@/app/components";
import { useEffect, useState } from "react";
import { LogModel } from "@/models/Log";
import { TableSkeleton } from "../skeletons";
import MonthAttendances from "./MonthAttendances";
import { notFound } from "next/navigation";
import { FaCircleXmark } from "react-icons/fa6";

const EmployeeAttendances = ({ params }: { params: { work_id: string } }) => {
  const { data: monthLogs, isLoading } = useSWR<any>(
    `/api/users/${params.work_id}/attendances`,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) {
          notFound();
          return;
        }
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option>();
  const [tableData, setTableData] = useState<LogModel[]>([]);

  const getTotalWorkDay = (): number => {
    return tableData.filter(
      (log) => log.type === "work-from-office" || log.type === "work-from-home"
    ).length;
  };

  const handleXmarkClick = () => {
    setSelectedOption(undefined);
    const logs = Object.values(monthLogs).flat() as LogModel[];
    setTableData(logs);
  };

  useEffect(() => {
    if (monthLogs) {
      const months: Option[] = [];
      for (const [month, logs] of Object.entries(monthLogs)) {
        months.push({ label: month, value: month });
      }
      setOptions(months);
    }
  }, [monthLogs]);

  useEffect(() => {
    if (monthLogs) {
      if (selectedOption) {
        const logs = monthLogs[selectedOption.value];
        setTableData(logs);
      } else {
        const logs = Object.values(monthLogs).flat() as LogModel[];
        setTableData(logs);
      }
    }
  }, [selectedOption, monthLogs]);

  return (
    <section className="space-y-4">
      <section className="flex w-full" id="filterer">
        <div className="w-full md:w-1/2 lg:1/3  flex gap-4 items-center">
          <Select
            placeholder="Select Month"
            options={options}
            onChange={setSelectedOption}
            value={selectedOption}
            label="Attendance Month & Year :"
          />
          <button onClick={handleXmarkClick} className="text-red-500 mt-4">
            <FaCircleXmark />
          </button>
        </div>
      </section>
      {tableData.length > 0 && (
        <section id="total">
          <p>
            Total Work Day : <span className="text-semibold">{getTotalWorkDay()}</span>
          </p>
        </section>
      )}
      <section id="table">
        {isLoading ? <TableSkeleton /> : <MonthAttendances data={tableData} />}
      </section>
    </section>
  );
};
export default EmployeeAttendances;
