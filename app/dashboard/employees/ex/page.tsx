"use client";
import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { Spinner } from "@heroui/spinner";
import { EmployeeTable } from "@components";

const Page: FC = () => {
  const {
    data: users,
    isLoading,
    mutate,
  } = useSWR("/api/users?role=ex_intern,ex_employee", fetcher);
  return (
    <section className="bg-white space-y-4 p-4">
      <h1 className="text-xl uppercase font-semibold">Ex Employee / Intern</h1>
      <hr />
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <EmployeeTable users={users} mutate={mutate} ex />
      )}
    </section>
  );
};
export default Page;
