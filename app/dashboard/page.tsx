"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { CardSkeleton } from "@/app/skeletons";
import { UserModel } from "@/models/User";
import { EmployeeCard } from "@/app/components";

const Dashboard = () => {
  const { data: users, isLoading: usersLoading } = useSWR<UserModel[]>(
    "/api/users?monthly-status",
    fetcher
  );
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl uppercase font-semibold">Team BGroup</h1>
        <hr />
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {usersLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            users
              ?.filter((user) => user.role === "employee")
              .map((user) => <EmployeeCard key={user.id} user={user} />)
          )}
        </div>
      </section>
      <section className="space-y-2">
        <h1 className="text-xl uppercase font-semibold">Magang</h1>
        <hr />
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {usersLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            users
              ?.filter((user) => user.role === "intern")
              .map((intern) => <EmployeeCard key={intern.id} user={intern} />)
          )}
        </div>
      </section>
    </>
  );
};
export default Dashboard;
