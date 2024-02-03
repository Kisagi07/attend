"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { FC, useState } from "react";
import Table from "./Table";
import { FaUserAltSlash, FaUserEdit } from "react-icons/fa";
import { UserModel } from "@/models/User";
import Confirmation from "@/app/components/Confirmation";
import { toast } from "react-toastify";
import Link from "next/link";
interface UserModelEx extends UserModel {
  action: string;
}
const employeeColumn = createColumnHelper<UserModelEx>();

interface CProps {
  data: any[];
}
const EmployeeTable: FC<CProps> = ({ data }) => {
  const [retData, setRetData] = useState<UserModel[]>(data);
  const columns = [
    employeeColumn.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    employeeColumn.accessor("work_id", {
      header: "Work ID",
      cell: (info) => info.getValue(),
    }),
    employeeColumn.accessor("job_position", {
      header: "Job Position",
      cell: (info) => info.getValue(),
      minSize: 125,
    }),
    employeeColumn.accessor("today_shift", {
      header: "Today Shift",
      cell: (info) => info.getValue(),
      minSize: 125,
    }),
    employeeColumn.accessor("action", {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => {
              setShowConfirmation(true);
              setWorkIdDelete(row.original.work_id);
            }}
            className="bg-red-400 hover:bg-red-500 inline-block align-middle rounded p-2"
          >
            <FaUserAltSlash />
          </button>
          <Link
            href={`/dashboard/employees/${row.original.work_id}/edit`}
            className="bg-amber-400 inline-block align-middle rounded p-2 ms-4 hover:bg-amber-500"
          >
            <FaUserEdit />
          </Link>
        </>
      ),
      minSize: 100,
    }),
  ];
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [workIdDelete, setWorkIdDelete] = useState<string>("");
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
    const filtered = retData.filter((ret) => ret.work_id !== workIdDelete);
    setRetData(filtered);
  };
  return (
    <>
      <Confirmation
        show={showConfirmation}
        onConfirm={handleDelete}
        onClose={setShowConfirmation}
      />
      <Table data={retData} columns={columns} />
    </>
  );
};
export default EmployeeTable;
