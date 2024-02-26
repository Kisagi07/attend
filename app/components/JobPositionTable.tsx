"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { JobPositionModel } from "@/models/JobPosition";
import Table from "@/app/components/Table";
import TableSkeleton from "@/app/skeletons/TableSkeleton";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import Link from "next/link";
import { Confirmation } from "@/app/components";

const columnHelper = createColumnHelper<JobPositionModel>();

const JobPositionTable = () => {
  const [data, setData] = useState<JobPositionModel[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [workIdDelete, setWorkIdDelete] = useState<number>(-1);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const columns = [
    columnHelper.accessor("name", {
      header: "Position Name",
      cell: (info) => info.getValue(),
      minSize: 200,
    }),
    columnHelper.accessor("shift_start", {
      header: "Shift Start",
      cell: (info) => info.getValue(),
      minSize: 150,
    }),
    columnHelper.accessor("shift_end", {
      header: "Shift End",
      cell: (info) => info.getValue(),
      minSize: 150,
    }),
    columnHelper.accessor("work_day", {
      header: "Work Day",
      cell: (info) => {
        const days = info.getValue() as unknown as string[];
        const weekDay = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        return (
          <div className="flex gap-x-2 uppercase text-xs">
            {weekDay.map((day) => (
              <div
                key={day}
                className={clsx(
                  "border border-gray-200 p-2 hover-bg-gray-200 cursor-pointer",
                  {
                    "bg-gray-200": days.includes(day),
                  }
                )}
              >
                {day[0]}
              </div>
            ))}
          </div>
        );
      },
    }),
    columnHelper.accessor("id", {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => {
              setShowConfirmation(true);
              setWorkIdDelete(row.original.id);
            }}
            className="bg-red-400 hover:bg-red-500 inline-block align-middle rounded p-2"
          >
            <IoBagRemoveSharp />
          </button>
          <Link
            href={`/dashboard/job-positions/${row.original.id}/edit`}
            className="bg-amber-400 inline-block align-middle rounded p-2 ms-2 hover:bg-amber-500"
          >
            <BiSolidMessageSquareEdit />
          </Link>
        </>
      ),
      minSize: 150,
    }),
  ];

  useEffect(() => {
    fetch("/api/job-positions")
      .then((res) => res.json())
      .then((positions) => setData(positions))
      .finally(() => setFetching(false));
  }, []);

  return fetching ? (
    <TableSkeleton />
  ) : (
    <>
      <Confirmation
        text="You wont"
        show={showConfirmation}
        onClose={setShowConfirmation}
      />
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};
export default JobPositionTable;
