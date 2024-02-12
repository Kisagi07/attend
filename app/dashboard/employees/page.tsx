import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import EmployeeTable from "@/app/components/EmployeeTable";
const EmployeePage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Employee</h1>
      <hr />
      <div className="flex justify-end">
        <Link
          href="/dashboard/employees/create"
          className="bg-slate-950 text-white p-2 rounded flex gap-x-2 items-center hover:bg-slate-900"
        >
          <FaUserPlus /> Add Employee
        </Link>
      </div>
      <EmployeeTable />
    </section>
  );
};
export default EmployeePage;
