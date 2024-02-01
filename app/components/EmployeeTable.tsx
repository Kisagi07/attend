"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { FC } from "react";
import Table from "./Table";
import { FaUserAltSlash } from "react-icons/fa";
import { UserModel } from "@/models/User";
interface UserModelEx extends UserModel {
  action: string;
}
const employeeColumn = createColumnHelper<UserModelEx>();

interface CProps {
  data: any[];
}
const EmployeeTable: FC<CProps> = ({ data }) => {
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
    }),
    employeeColumn.accessor("today_shift", {
      header: "Today Shift",
      cell: (info) => info.getValue(),
    }),
    employeeColumn.accessor("action", {
      header: "Action",
      cell: (info) => (
        <button className="bg-red-400 hover:bg-red-500 rounded p-2">
          <FaUserAltSlash />
        </button>
      ),
    }),
  ];
  return <Table data={data} columns={columns} />;
};
export default EmployeeTable;
