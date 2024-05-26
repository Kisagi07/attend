"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import Table from "./Table";
import { FaUserAltSlash, FaUserEdit, FaClock } from "react-icons/fa";
import Confirmation from "@/app/components/Confirmation";
import { toast } from "react-toastify";
import Link from "next/link";
import EmployeeTableSkeleton from "../skeletons/EmployeeTableSkeleton";
import { UserWithJob } from "../prisma";
import { users } from "@prisma/client";
interface UserModelEx extends UserWithJob {
  action: string;
}
const employeeColumn = createColumnHelper<UserModelEx>();

const EmployeeTable = () => {
  const [users, setUsers] = useState<users[]>([]);
  const columns = [
    employeeColumn.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    employeeColumn.accessor("work_id", {
      header: "Work ID",
      cell: (info) => info.getValue(),
    }),
    employeeColumn.accessor("job_position.name", {
      header: "Job Position",
      cell: (info) => info.getValue() || "No Position",
      minSize: 125,
    }),
    employeeColumn.accessor("job_position.shift_start", {
      header: "Today Shift",
      cell: ({ row }) =>
        row.original.job_position
          ? `${row.original.job_position.shift_start} - ${row.original.job_position.shift_end}`
          : "No Shift",
      minSize: 125,
    }),
    employeeColumn.accessor("action", {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => {
              setShowConfirmation(true);
              setWorkIdDelete(row.original.work_id!);
            }}
            className="bg-red-400 hover:bg-red-500 inline-block align-middle text-white rounded p-2"
          >
            <FaUserAltSlash />
          </button>
          <Link
            href={`/dashboard/employees/${row.original.work_id}/edit`}
            className="bg-amber-400 inline-block align-middle rounded p-2 text-white hover:bg-amber-500"
          >
            <FaUserEdit />
          </Link>
          <Link
            className="bg-violet-400 text-white p-2 align-middle inline-block rounded hover:bg-violet-500"
            href={`/dashboard/employees/${row.original.work_id}/attendances`}
          >
            <FaClock />
          </Link>
        </div>
      ),
      minSize: 100,
    }),
  ];
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [workIdDelete, setWorkIdDelete] = useState<string>("");
  const [fetching, setFetching] = useState<boolean>(true);
  const handleDelete = async () => {
    const deleteIt = async () => {
      const res = await fetch(`/api/users/${workIdDelete}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed on deleting user");
      }

      const data = await res.json();
      return data;
    };
    toast.promise(
      deleteIt().then(() => {
        setWorkIdDelete("");
      }),
      {
        pending: "Deleting user...",
        success: {
          render() {
            handleFilterAfterDelete();
            return "User deleted!";
          },
        },
        error: "Failed on deleting user!",
      }
    );
  };
  const handleFilterAfterDelete = () => {
    const filtered = users.filter((user) => user.work_id !== workIdDelete);
    setUsers(filtered);
  };
  const fetchUsers = () => {
    fetch(`/api/users`, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setFetching(false));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return fetching ? (
    <EmployeeTableSkeleton />
  ) : (
    <>
      <Confirmation
        show={showConfirmation}
        onConfirm={handleDelete}
        onClose={setShowConfirmation}
      />
      <Table data={users} columns={columns} />
    </>
  );
};
export default EmployeeTable;
