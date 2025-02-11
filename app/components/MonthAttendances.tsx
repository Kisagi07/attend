"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Table } from "@/app/components";
import { LogWithUserWithJob } from "@/app/prisma";
import clsx from "clsx";
import { parseTime } from "@internationalized/date";
import { FcOvertime } from "react-icons/fc";
import { Chip } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";

const columnHelper = createColumnHelper<LogWithUserWithJob>();
const MonthAttendances = ({
  data,
  withName = false,
  tolerance = 0,
}: {
  data: LogWithUserWithJob[];
  withName?: boolean;
  tolerance?: number;
}) => {
  const isLate = (log: LogWithUserWithJob): boolean => {
    if (log.type === "sick" || log.type === "special_attendance" || log.type === "on_site_work") return false;
    const clockInTime = parseTime(log.clock_in_time!.toString().split("T")[1].split(".")[0]);
    const workTime = parseTime(log.user?.job_position?.shift_start ?? "00:00").add({
      minutes: tolerance,
    });
    return clockInTime.compare(workTime) > 0;
  };

  const columns: any[] = [
    columnHelper.accessor("type", {
      header: "Status",
      cell: (info) => (
        <div className="flex gap-2">
          <p
            className={clsx("capitalize", {
              "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
            })}
          >
            {info.getValue().replaceAll("_", " ")}
          </p>
          {(info.row.original.isOverTime || info.row.original.afterHourOvertime) && (
            <Tooltip content="Overtime">
              <Chip color="secondary" radius="full" variant="faded">
                <FcOvertime size={20} />
              </Chip>
            </Tooltip>
          )}
        </div>
      ),
      size: 175,
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => (
        <span
          className={clsx({
            "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
          })}
        >
          {(info.getValue() as unknown as string).split("T")[0]}
        </span>
      ),
      size: 125,
    }),
    columnHelper.accessor("clock_in_time", {
      header: "Clock In Time",
      cell: (info) => (
        <span
          className={clsx({
            "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
          })}
        >
          {info.row.original.type === "sick"
            ? "-"
            : (info.getValue() as unknown as string).split("T")[1].slice(0, 7)}
        </span>
      ),
      size: 150,
    }),
    columnHelper.accessor("clock_out_time", {
      header: "Clock Out Time",
      cell: (info) => (
        <span
          className={clsx({
            "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
          })}
        >
          {info.getValue() ? (info.getValue() as unknown as string).split("T")[1].slice(0, 7) : "-"}
        </span>
      ),
      size: 150,
    }),
    columnHelper.accessor("work", {
      header: "Work",
      cell: (info) => (
        <ul
          className={clsx("list-disc text-sm", {
            "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
          })}
        >
          {(info.getValue() as string[])?.map((work) => <li key={work}>{work}</li>)}
        </ul>
      ),
      size: 200,
    }),
  ];

  if (withName) {
    columns.unshift(
      columnHelper.accessor("user.name", {
        header: "Name",
        cell: (info) => (
          <span
            className={clsx({
              "text-red-500": isLate(info.row.original) && !info.row.original.isOverTime,
            })}
          >
            {info.getValue()}
          </span>
        ),
      })
    );
  }
  return <Table data={data} columns={columns} />;
};
export default MonthAttendances;
