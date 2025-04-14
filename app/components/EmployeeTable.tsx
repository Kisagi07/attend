"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { useState, FC } from "react";
import Table from "./Table";
import { FaUserAltSlash, FaUserEdit, FaClock } from "react-icons/fa";
import Confirmation from "@/app/components/Confirmation";
import { toast } from "sonner";
import Link from "next/link";
import EmployeeTableSkeleton from "../skeletons/EmployeeTableSkeleton";
import { UserWithJob } from "../prisma";
import { users } from "@/prisma/client";
import { Tooltip } from "@heroui/tooltip";
import { BsPersonFillExclamation } from "react-icons/bs";
import { Button } from "@heroui/button";
import { KeyedMutator } from "swr";
import sendRequest from "@helper/sendRequest";

interface UserModelEx extends UserWithJob {
  action: string;
}
const employeeColumn = createColumnHelper<UserModelEx>();

type EmployeeTable = {
  users: users[];
  mutate: KeyedMutator<any>;
  ex?: boolean;
};

const EmployeeTable: FC<EmployeeTable> = ({ users, mutate, ex = false }) => {
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
          <Tooltip content="Delete User">
            <Button
              onClick={() => {
                setShowConfirmation(true);
                setWorkIdDelete(row.original.work_id!);
              }}
              variant="flat"
              color="danger"
              isIconOnly
            >
              <FaUserAltSlash className="size-6" />
            </Button>
          </Tooltip>
          <Tooltip content="Edit User">
            <Button
              as={Link}
              href={`/dashboard/employees/${row.original.work_id}/edit`}
              variant="flat"
              color="secondary"
              isIconOnly
            >
              <FaUserEdit className="size-6" />
            </Button>
          </Tooltip>
          <Tooltip content="Check Attendances">
            <Button
              as={Link}
              href={`/dashboard/employees/${row.original.work_id}/attendances`}
              variant="flat"
              color="success"
              isIconOnly
            >
              <FaClock className="size-6" />
            </Button>
          </Tooltip>
          <Tooltip
            content={`${ex ? "Unmark " : "Mark Ex-"}${row.original.role.replaceToSpaceAndCapitalize("_")}`}
          >
            <Button
              onClick={() => {
                setExConfirmation(true);
                setWorkIdEx(row.original.work_id!);
              }}
              variant="flat"
              isIconOnly
            >
              <BsPersonFillExclamation className="size-6" />
            </Button>
          </Tooltip>
        </div>
      ),
      minSize: 100,
    }),
  ];
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [exConfirmation, setExConfirmation] = useState(false);
  const [workIdDelete, setWorkIdDelete] = useState<string>("");
  const [workIdEx, setWorkIdEx] = useState("");

  const handleDelete = () => {
    toast.promise(
      sendRequest(`/api/users/${workIdDelete}`, {
        method: "DELETE",
      }),
      {
        loading: "Deleting user...",
        success: (data) => {
          setWorkIdDelete("");
          mutate();
          return "User deleted!";
        },
        error: "Failed on deleting user!",
      }
    );
  };
  // ? send request to turn user to ex-role
  const handleExRole = () => {
    toast.promise(
      sendRequest(`/api/users/${workIdEx}`, {
        method: "PUT",
        body: JSON.stringify(ex ? { unEx: true } : { toEx: true }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      {
        loading: "Loading...",
        success: async (data) => {
          mutate();
          return `${data.name} has been turn into ${data.role.replaceToSpaceAndCapitalize("_")}`;
        },
        error: (error: CustomError) => {
          return "Something went wrong";
        },
      }
    );
  };
  return (
    <>
      <Confirmation
        show={showConfirmation}
        onConfirm={handleDelete}
        onClose={setShowConfirmation}
      />
      <Confirmation
        show={exConfirmation}
        onClose={setExConfirmation}
        onConfirm={handleExRole}
        text={ex ? "Un Ex this Intern / Employee?" : "Turn this user into an Ex Employee / Intern?"}
      />
      <Table data={users ?? []} columns={columns} />
    </>
  );
};
export default EmployeeTable;
