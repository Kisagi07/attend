"use client";
import Table from "@/app/components/Table";
import { LogModel } from "@/models/Log";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";

const attendanceColumnHelper = createColumnHelper<LogModel>();
const attendanceColumns = [
  attendanceColumnHelper.accessor("user.name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  attendanceColumnHelper.accessor("user.today_shift", {
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
];
const Dashboard = () => {
  const [logs, setLogs] = useState<LogModel[]>([]);
  const fetchAttendance = async () => {
    const res = await fetch("/api/attendances?limit=3&latest=true", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed on fetching employee data");
    }
    const data = await res.json();
    console.log(data);
    setLogs(data);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Dashboard</h1>
      <hr />
      <article className="border border-slate-200 p-4 shadow">
        <h2 className="text-lg mb-4">Latest Attendance</h2>
        <Table data={logs} columns={attendanceColumns} />
      </article>
    </section>
  );
};
export default Dashboard;
