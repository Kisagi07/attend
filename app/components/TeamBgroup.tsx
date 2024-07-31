"use client";
import useSWR from "swr";
import { fetcher } from "../helper";
import { CardSkeleton } from "../skeletons";
import EmployeeCard from "./EmployeeCard";
import { UserResultMany } from "../prisma";
import { holidays, logs } from "@prisma/client";

const TeamBgroup = () => {
  const date = new Date();
  const { data: users, isLoading: usersLoading } = useSWR<UserResultMany>(
    "/api/users?role=employee",
    fetcher
  );
  const { data: attendances, isLoading: attendancesLoading } = useSWR<logs[]>(() => {
    if (!users) {
      return false;
    }
    return (
      "/api/attendances?of=" +
      users?.map((user) => user.id).toString() +
      "&year=" +
      date.getFullYear() +
      "&month=" +
      (date.getMonth() + 1)
    );
  }, fetcher);
  const { data: holidays, isLoading: holidaysLoading } = useSWR<holidays[]>(
    `/api/holidays/${date.getMonth() + 1}-${date.getFullYear()}`,
    fetcher,
    { fallbackData: [] }
  );
  return (
    <section className="space-y-2">
      <h1 className="text-xl font-semibold uppercase">Team BGroup</h1>
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
          // <EmployeeCard
          //   attendances={attendances?.filter((log) => log.user_id === 5) ?? []}
          //   key={5}
          //   user={users?.find((user) => user.id === 5)!}
          //   holidays={holidays!}
          //   date={date}
          // />
          users
            ?.filter((user) => user.role === "employee")
            .map((user) => (
              <EmployeeCard
                attendances={attendances?.filter((log) => log.user_id === user.id) ?? []}
                key={user.id}
                user={user}
                holidays={holidays!}
                date={date}
              />
            ))
        )}
      </div>
    </section>
  );
};

export default TeamBgroup;
