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
import { toast } from "react-toastify";
import { formatRupiah } from "@/app/helper";

const columnHelper = createColumnHelper<JobPositionModel>();

const JobPositionTable = () => {
  const [data, setData] = useState<JobPositionModel[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [idDelete, setIdDelete] = useState<number>(-1);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const deleteJobPosition = async () => {
    const res = await fetch(`/api/job-positions/${idDelete}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed on deleting job position");
    }
    const data = await res.json();
    return data;
  };

  const handleDelete = () => {
    toast.promise(deleteJobPosition(), {
      pending: "Deleting",
      success: {
        render() {
          setData((prev) => prev.filter((pr) => pr.id !== idDelete));
          return "Job position deleted";
        },
      },
      error: "Failed on deleting job position",
    });
  };

  const columns = [
    columnHelper.accessor("name", {
      header: "Position Name",
      cell: (info) => info.getValue(),
      minSize: 200,
    }),
    columnHelper.accessor("shift_duration", {
      header: "Shift Duration",
      cell: (info) => info.getValue(),
      minSize: 150,
    }),
    columnHelper.accessor("work_day", {
      header: "Work Day",
      cell: (info) => {
        const days = info.getValue() as unknown as string[];
        const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
          <div className="flex gap-2 uppercase text-xs flex-wrap">
            {weekDay.map((day) => (
              <div
                key={day}
                className={clsx("border border-gray-200 p-2 hover-bg-gray-200 cursor-pointer", {
                  "bg-gray-200": days.includes(day),
                })}
              >
                {day[0]}
              </div>
            ))}
          </div>
        );
      },
      minSize: 150,
    }),
    columnHelper.accessor("salary", {
      header: "Hourly Salary",
      cell: (info) => formatRupiah(info.getValue()),
      minSize: 200,
    }),
    columnHelper.accessor("id", {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => {
              setShowConfirmation(true);
              setIdDelete(row.original.id);
            }}
            className="bg-red-400 hover:bg-red-500 inline-block align-middle rounded p-2"
          >
            <IoBagRemoveSharp />
          </button>
          <Link href={`/dashboard/job-positions/${row.original.id}/edit`} className="bg-amber-400 inline-block align-middle rounded p-2 ms-2 hover:bg-amber-500">
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
      <Confirmation text="Are you sure you want to delete this job position?" title="Delete Job Position" show={showConfirmation} onClose={setShowConfirmation} onConfirm={handleDelete} />
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};
export default JobPositionTable;
