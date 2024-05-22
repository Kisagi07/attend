"use client";
import useSWR from "swr";
import { fetcher } from "../helper";
import { CardSkeleton } from "../skeletons";
import EmployeeCard from "./EmployeeCard";
import { withStatus } from "../prisma";

const TeamBgroup = () => {
  const { data: users, isLoading: usersLoading } = useSWR<withStatus[]>(
    "/api/users?monthly-status&role=employee",
    fetcher
  );
  return (
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
  );
};

export default TeamBgroup;
