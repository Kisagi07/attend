"use client";
import useSWR from "swr";
import { fetcher, monthNumberToWord } from "@/app/helper";
import { UserResultFirst, UserWithJob } from "../prisma";
import { EmployeeCard } from "@/app/components";
import { CardSkeleton } from "@/app/skeletons";
import { holidays, logs, users } from "@prisma/client";
import React from "react";

interface GroupedAttendances {
  [key: string]: logs[];
}
interface GroupedHolidays {
  [key: string]: holidays[];
}
interface Grouped {
  [key: string]: {
    holidays: holidays[];
    attendances: logs[];
  };
}
const AttendancesEmployeeCard = ({ params }: { params: { work_id: string } }) => {
  const { data: user, isLoading } = useSWR<UserWithJob>(`/api/users/${params.work_id}`, fetcher);
  const { data: attendances, isLoading: attendancesLoading } = useSWR<logs[]>(
    `/api/users/${params.work_id}/attendances`,
    fetcher
  );
  const { data: holidays, isLoading: holidaysLoading } = useSWR<holidays[]>(
    `/api/holidays`,
    fetcher
  );

  const [today, setToday] = React.useState(new Date());
  const [card1Date, setCard1Date] = React.useState(
    new Date(today.getFullYear(), today.getMonth(), 0)
  );
  const [card2Date, setCard2Date] = React.useState(
    new Date(today.getFullYear(), today.getMonth() - 1, 0)
  );

  const grouped = React.useMemo(() => {
    const groupedAttendances = attendances?.reduce<GroupedAttendances>((acc, log) => {
      const date = new Date(log.date!);
      const groupName = `${monthNumberToWord(date.getMonth())}-${date.getFullYear()}`;
      acc[groupName] = [...(acc[groupName] || []), log];
      return acc;
    }, {});

    const groupedHolidays = holidays?.reduce<GroupedHolidays>((acc, holiday) => {
      const date = new Date(holiday.date);
      const groupName = `${monthNumberToWord(date.getMonth())}-${date.getFullYear()}`;
      acc[groupName] = [...(acc[groupName] || []), holiday];
      return acc;
    }, {});

    if (groupedAttendances && groupedHolidays) {
      const uniqueNames = Array.from(
        new Set([...Object.keys(groupedAttendances), ...Object.keys(groupedHolidays)])
      );
      const sortedNames = uniqueNames.sort((a, b) => (a > b ? -1 : 1));

      const finalGroup = sortedNames.reduce<Grouped>((acc, name) => {
        acc[name] = {
          holidays: groupedHolidays[name] || [],
          attendances: groupedAttendances[name] || [],
        };
        return acc;
      }, {});

      return finalGroup;
    }

    return {};
  }, [attendances, holidays]);

  const getGroupName = (date: Date) => {
    return `${monthNumberToWord(date.getMonth())}-${date.getFullYear()}`;
  };

  return isLoading || attendancesLoading || holidaysLoading ? (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  ) : (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <EmployeeCard
        displayDate
        date={today}
        user={user!}
        attendances={grouped[getGroupName(today)]?.attendances ?? []}
        holidays={grouped[getGroupName(today)]?.holidays ?? []}
      />
      <EmployeeCard
        displayDate
        date={card1Date}
        user={user!}
        attendances={grouped[getGroupName(card1Date)]?.attendances ?? []}
        holidays={grouped[getGroupName(card1Date)]?.holidays ?? []}
      />
      <EmployeeCard
        displayDate
        date={card2Date}
        user={user!}
        attendances={grouped[getGroupName(card2Date)]?.attendances ?? []}
        holidays={grouped[getGroupName(card2Date)]?.holidays ?? []}
      />
    </div>
  );
};
export default AttendancesEmployeeCard;
