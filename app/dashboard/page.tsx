"use client";
import Table from "@/app/components/Table";
import { LogModel } from "@/models/Log";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { TableSkeleton } from "@/app/skeletons";

const attendanceColumnHelper = createColumnHelper<LogModel>();
const attendanceColumns = [
  attendanceColumnHelper.accessor("user.name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  attendanceColumnHelper.accessor("user.job_position.shift_duration", {
    header: "Shift",
    cell: (info) => info.getValue(),
  }),
  attendanceColumnHelper.accessor("time", {
    header: "Time",
    cell: (info) => info.getValue(),
  }),
  attendanceColumnHelper.accessor("type", {
    header: "Type",
    cell: (info) => <span className="capitalize">{info.getValue()}</span>,
  }),
  attendanceColumnHelper.accessor("work", {
    header: "Work",
    cell: (info) => <small className="text-sm">{info.getValue()}</small>,
  }),
];
const Dashboard = () => {
  const [logs, setLogs] = useState<LogModel[]>([]);
  const [fetchingAttendance, setFetchingAttendance] = useState<boolean>(true);
  const fetchAttendance = async () => {
    const res = await fetch("/api/attendances", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed on fetching employee data");
    }
    const data = await res.json();
    setLogs(data);
    setFetchingAttendance(false);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <section className="space-y-4 p-4">
      <h1 className="text-xl uppercase font-semibold">Dashboard</h1>
      <hr />
      <article className="">
        <h2 className="text-lg mb-4">Latest Attendance</h2>
        {fetchingAttendance ? <TableSkeleton /> : <Table data={logs} columns={attendanceColumns} />}
      </article>
    </section>
  );
};
export default Dashboard;
