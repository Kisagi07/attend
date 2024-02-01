import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import getUsers from "@/app/libs/getUsers";
import EmployeeList from "@/app/components/EmployeeList";
import EmployeeTableSkeleton from "@/app/skeletons/EmployeeTableSkeleton";
import { Suspense } from "react";
const EmployeePage = () => {
  const promise = getUsers();
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
      <Suspense fallback={<EmployeeTableSkeleton />}>
        <EmployeeList promise={promise} />
      </Suspense>
    </section>
  );
};
export default EmployeePage;
