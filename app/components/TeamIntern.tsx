"use client";

import useSWR from "swr";
import { CardSkeleton } from "../skeletons";
import { fetcher } from "../helper";
import EmployeeCard from "./EmployeeCard";
import { UserResultFirst } from "../prisma";
import { holidays, logs } from "@prisma/client";

const TeamIntern = () => {
  const date = new Date();
  const { data: users, isLoading: usersLoading } = useSWR<UserResultFirst[]>(
    "/api/users?role=intern",
    fetcher
  );
  const { data: attendances, isLoading: attendancesLoading } = useSWR<logs[]>(
    () =>
      "/api/attendances?of=" +
      users?.map((user) => user.id).toString() +
      "&year=" +
      date.getFullYear() +
      "&month=" +
      (date.getMonth() + 1),

    fetcher
  );
  const { data: holidays, isLoading: holidaysLoading } = useSWR<holidays[]>(
    `/api/holidays/${date.getMonth() + 1}-${date.getFullYear()}`,
    fetcher,
    { fallbackData: [] }
  );
  return (
    <section className="space-y-2">
      <h1 className="text-xl font-semibold uppercase">Magang</h1>
      <hr />
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {usersLoading || !attendances || holidaysLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          users
            ?.filter((user) => user.role === "intern")
            .map((intern) => (
              <EmployeeCard
                key={intern.id}
                user={intern}
                holidays={holidays ?? []}
                attendances={attendances?.filter((log) => log.user_id === intern.id) ?? []}
                date={date}
              />
            ))
        )}
      </div>
    </section>
  );
};
export default TeamIntern;
