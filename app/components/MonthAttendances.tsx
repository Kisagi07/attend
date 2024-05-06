"use client";

import { LogModel } from "@/models/Log";
import { createColumnHelper } from "@tanstack/react-table";
import { Table } from "@/app/components";

const columnHelper = createColumnHelper<LogModel>();
const MonthAttendances = ({ data }: { data: any[] }) => {
  const columns = [
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
      size: 125,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("type", {
      header: "Status",
      cell: (info) => <p className="capitalize">{info.getValue().replace("-", " ")}</p>,
      size: 125,
    }),
    columnHelper.accessor("work", {
      header: "Work",
      cell: (info) => (
        <ul className="text-sm list-disc">
          {info.getValue()?.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
      ),
      size: 200,
    }),
  ];
  return <Table data={data} columns={columns} />;
};
export default MonthAttendances;
