"use client";
import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import EmployeeTable from "@/app/components/EmployeeTable";
import { Button } from "@heroui/button";
import { BsPersonFillExclamation } from "react-icons/bs";
import useSWR from "swr";
import { Spinner } from "@heroui/spinner";
import { fetcher } from "@/app/helper";

const EmployeePage = () => {
  const { data: users, isLoading, mutate } = useSWR("/api/users", fetcher);
  return (
    <section className="space-y-4 bg-white p-4">
      <h1 className="text-xl uppercase font-semibold">Employee</h1>
      <hr />
      <div className="flex md:justify-end flex-col gap-2 md:flex-row">
        <Button
          as={Link}
          href="/dashboard/employees/ex"
          startContent={<BsPersonFillExclamation className="size-6" />}
          variant="flat"
          color="warning"
        >
          Ex Employee/Intern
        </Button>
        <Button
          as={Link}
          href="/dashboard/employees/create"
          startContent={<FaUserPlus className="size-6" />}
          variant="flat"
        >
          Add Employee
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <EmployeeTable users={users ?? []} mutate={mutate} />
      )}
    </section>
  );
};
export default EmployeePage;
