"use client";

import MonthAttendances from "@/app/components/MonthAttendances";
import Select from "@/app/components/Select";
import { fetcher } from "@/app/helper";
import { company, logs, users } from "@prisma/client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { FaXmark } from "react-icons/fa6";
import TableSkeleton from "@/app/_loader/TableSkeleton";
import { LogWithUserWithJob } from "@/app/prisma";

const Page = () => {
  const { data: logs, isLoading: logsLoading } = useSWR<any>(
    `/api/attendances?grouped-name-date&latest`,
    fetcher
  );
  const { data: users, isLoading: usersLoading } = useSWR<users[]>(`/api/users`, fetcher);

  const { data: company } = useSWR<company>(`/api/company`, fetcher);

  const [userOptions, setUserOptions] = useState<Option[]>([]);
  const [selectedUser, setSelectedUser] = useState<Option>();

  const [dateOptions, setDateOptions] = useState<Option[]>([]);
  const [selectedDate, setSelectedDate] = useState<Option>();

  const [tableData, setTableData] = useState<LogWithUserWithJob[]>([]);

  const handleUserChange = (option: Option) => {
    setSelectedUser(option);
    setSelectedDate(undefined);
  };

  const sortByDateAndTime = (a: logs, b: logs) => {
    const dateA = new Date(
      `${a.date?.toString().split("T")[0]}T${a.clock_in_time?.toString().split("T")[1]}`
    ).getTime();
    const dateB = new Date(
      `${b.date?.toString().split("T")[0]}T${b.clock_in_time?.toString().split("T")[1]}`
    ).getTime();
    return dateB - dateA;
  };

  const handleRemoveUser = () => {
    setSelectedUser(undefined);
    setSelectedDate(undefined);
  };

  const handleRemoveDate = () => {
    setSelectedDate(undefined);
  };

  useEffect(() => {
    if (users) {
      setUserOptions(users.map((user) => ({ label: user.name!, value: user.name! })));
    }
  }, [users]);

  useEffect(() => {
    if (logs) {
      if (selectedUser && selectedDate) {
        if (Object.hasOwn(logs, selectedUser.value)) {
          setTableData(logs[selectedUser.value][selectedDate.value]);
        } else {
          setTableData([]);
        }
      } else if (selectedUser) {
        if (Object.hasOwn(logs, selectedUser.value)) {
          setTableData(Object.values(logs[selectedUser.value]).flat() as LogWithUserWithJob[]);
        } else {
          setTableData([]);
        }
      } else {
        setTableData(
          (
            Object.values(logs)
              .flatMap((inner: any) => Object.values(inner))
              .flat() as logs[]
          ).sort(sortByDateAndTime) as LogWithUserWithJob[]
        );
      }
    }
  }, [logs, selectedUser, selectedDate]);

  useEffect(() => {
    if (selectedUser) {
      if (Object.hasOwn(logs, selectedUser.value)) {
        setDateOptions(
          Object.keys(logs[selectedUser.value]).map((date) => ({
            label: date,
            value: date,
          }))
        );
      } else {
        setDateOptions([]);
      }
    }
  }, [selectedUser, logs]);
  return (
    <div className="space-y-4 p-4">
      <section className="md:grid md:grid-cols-2 md:gap-4">
        {usersLoading ? (
          <>
            <div className="h-8 animate-pulse bg-gray-200"></div>
            <div className="h-8 animate-pulse bg-gray-200"></div>
          </>
        ) : (
          <>
            <div className="items-centern flex gap-4">
              <Select
                options={userOptions}
                value={selectedUser}
                onChange={handleUserChange}
                label="Employee :"
                placeholder="Select Employees"
              />
              <button onClick={() => handleRemoveUser()} className="mt-5">
                <FaXmark className="text-red-500" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Select
                options={dateOptions}
                value={selectedDate}
                onChange={setSelectedDate}
                label="Month & Year :"
                placeholder="Select Date Attendances"
              />
              <button onClick={() => handleRemoveDate()} className="mt-5">
                <FaXmark className="text-red-500" />
              </button>
            </div>
          </>
        )}
      </section>
      {logsLoading ? (
        <TableSkeleton />
      ) : (
        <MonthAttendances
          tolerance={company?.tolerance_active ? company.tolerance_time : 0}
          withName
          data={tableData}
        />
      )}
    </div>
  );
};
export default Page;
