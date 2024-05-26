"use client";

import useSWR from "swr";
import { CardSkeleton } from "../skeletons";
import { fetcher } from "../helper";
import EmployeeCard from "./EmployeeCard";
import { withStatus } from "../prisma";

const TeamIntern = () => {
  const { data: users, isLoading: usersLoading } = useSWR<withStatus[]>(
    "/api/users?monthly-status&role=intern",
    fetcher
  );
  return (
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
  );
};
export default TeamIntern;
