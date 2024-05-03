"use client";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { notFound } from "next/navigation";
import TableSkeleton from "@/app/_loader/TableSkeleton";
import Select from "@/app/components/Select";
import { useEffect, useState } from "react";
import { UserModel } from "@/models/User";
import MonthAttendances from "@/app/components/MonthAttendances";
import { LogModel } from "@/models/Log";

const Page = ({ params }: { params: { work_id: string } }) => {
  const { data: user, isLoading: userLoading } = useSWR<UserModel>(
    `/api/users/${params.work_id}`,
    fetcher
  );
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

  /**
   *  function to get the total work day in a log by filtering the from-office and from-home
   * @returns number - total work day
   */
  const getTotalWorkDay = (): number => {
    return tableData.filter((log) => log.type === "from-office" || log.type === "from-home").length;
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
    if (selectedOption) {
      const logs = monthLogs[selectedOption.value];
      setTableData(logs);
    }
  }, [selectedOption]);

  return (
    <div className="space-y-4">
      {userLoading ? (
        <div className="py-4 bg-gray-200 animate-pulse"></div>
      ) : (
        <section id="heading">
          <h2 className="text-lg font-semibold">{user?.name} Attendances</h2>
        </section>
      )}
      <section className="flex w-full" id="filterer">
        <div className="w-full md:w-1/2 lg:1/3 ">
          <Select
            placeholder="Select Month"
            options={options}
            onChange={setSelectedOption}
            value={selectedOption}
            label="Attendance Month & Year :"
          />
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
    </div>
  );
};
export default Page;
