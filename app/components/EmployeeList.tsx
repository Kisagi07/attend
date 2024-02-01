"use server";
import { UserModel } from "@/models/User";
import { FC } from "react";
import EmployeeTable from "./EmployeeTable";

interface EmployeeListProps {
  promise: Promise<UserModel[]>;
}
const EmployeeList: FC<EmployeeListProps> = async ({ promise }) => {
  const users = await promise;

  return <EmployeeTable data={users} />;
};
export default EmployeeList;
