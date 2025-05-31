"use client";
import useSWR from "swr";
import { fetcher, monthNumberToWord, monthWordToNumber } from "@/app/helper";
import { UserWithJob } from "../prisma";
import { EmployeeCard } from "@/app/components";
import { CardSkeleton } from "@/app/skeletons";
import { holidays, logs } from "generated/prisma";
import React from "react";

interface Grouped {
  [key: string]: {
    holidays: holidays[];
    attendances: logs[];
  };
}

const getGroupName = (date: Date) => `${monthNumberToWord(date.getMonth())}-${date.getFullYear()}`;

const groupByMonth = <T,>(
  items: T[],
  getDate: (item: T) => Date,
  type: "holidays" | "attendances"
): Grouped => {
  return items.reduce<Grouped>((acc, item) => {
    const date = getDate(item);
    const groupName = getGroupName(date);
    if (!acc[groupName]) acc[groupName] = { holidays: [], attendances: [] };
    (acc[groupName][type] as T[]).push(item);
    return acc;
  }, {});
};

const AttendancesEmployeeCard = ({ params }: { params: { work_id: string } }) => {
  const { data: user, isLoading: userLoading } = useSWR<UserWithJob>(
    `/api/users/${params.work_id}`,
    fetcher
  );
  const { data: attendances, isLoading: attendancesLoading } = useSWR<logs[]>(
    `/api/users/${params.work_id}/attendances`,
    fetcher
  );
  const { data: holidays, isLoading: holidaysLoading } = useSWR<holidays[]>(
    `/api/holidays`,
    fetcher
  );

  const [today] = React.useState(new Date());
  const [card1Date] = React.useState(new Date(today.getFullYear(), today.getMonth(), 0));
  const [card2Date] = React.useState(new Date(today.getFullYear(), today.getMonth() - 1, 0));

  const grouped = React.useMemo(() => {
    if (!user || !attendances || !holidays) return {};

    const groupedAttendances = groupByMonth(
      attendances,
      (log) => new Date(log.date!),
      "attendances"
    );
    const groupedHolidays = groupByMonth(holidays, (holiday) => new Date(holiday.date), "holidays");

    const mergedGroups = Object.keys({ ...groupedAttendances, ...groupedHolidays }).reduce<Grouped>(
      (acc, groupName) => {
        acc[groupName] = {
          holidays: groupedHolidays[groupName]?.holidays || [],
          attendances: groupedAttendances[groupName]?.attendances || [],
        };
        return acc;
      },
      {}
    );

    if (["ex_intern", "ex_employee"].includes(user.role)) {
      return Object.fromEntries(Object.entries(mergedGroups).slice(0, 3));
    }

    return mergedGroups;
  }, [attendances, holidays, user]);

  const generateEmployeeCard = React.useCallback(() => {
    if (!user) return null;

    const dates = ["ex_intern", "ex_employee"].includes(user.role)
      ? Object.keys(grouped).map((groupName) => new Date(groupName.split("-").reverse().join("-")))
      : [today, card1Date, card2Date];

    return (
      <>
        {dates.map((date) => (
          <EmployeeCard
            displayDate
            key={date.toISOString()}
            date={date}
            user={user}
            attendances={grouped[getGroupName(date)]?.attendances ?? []}
            holidays={grouped[getGroupName(date)]?.holidays ?? []}
          />
        ))}
      </>
    );
  }, [user, grouped, today, card1Date, card2Date]);

  return userLoading || attendancesLoading || holidaysLoading ? (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  ) : (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{generateEmployeeCard()}</div>
  );
};

export default AttendancesEmployeeCard;
