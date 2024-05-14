"use client";

import { LogModel } from "@/models/Log";
import { createColumnHelper } from "@tanstack/react-table";
import { Table } from "@/app/components";

const columnHelper = createColumnHelper<LogModel>();
const MonthAttendances = ({ data, withName = false }: { data: any[]; withName?: boolean }) => {
  const columns: any[] = [
    columnHelper.accessor("type", {
      header: "Status",
      cell: (info) => <p className="capitalize">{info.getValue().replace("-", " ")}</p>,
      size: 175,
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
      size: 125,
    }),
    columnHelper.accessor("clock_in_time", {
      header: "Clock In Time",
      cell: (info) => info.getValue(),
      size: 150,
    }),
    columnHelper.accessor("clock_out_time", {
      header: "Clock Out Time",
      cell: (info) => info.getValue(),
      size: 150,
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

  if (withName) {
    columns.unshift(
      columnHelper.accessor("user.name", {
        header: "Name",
        cell: (info) => info.getValue(),
      })
    );
  }
  return <Table data={data} columns={columns} />;
};
export default MonthAttendances;
