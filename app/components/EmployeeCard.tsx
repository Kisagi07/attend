"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { company, holidays, job_positions, logs, users } from "@prisma/client";
import useSWR from "swr";
import { fetcher, monthNumberToWord } from "../helper";
import { Spinner } from "@nextui-org/spinner";
import { UserWithJob } from "../prisma";
import { Chip } from "@nextui-org/chip";

interface Props {
  user: UserWithJob;
  attendances: logs[];
  holidays: holidays[];
  displayDate?: boolean;
  date: Date;
}

const EmployeeCard: React.FC<Props> = ({
  user,
  attendances,
  holidays,
  displayDate = false,
  date,
}: Props) => {
  const { data: company, isLoading } = useSWR<company>(`/api/company`, fetcher);

  const calculated = React.useMemo(() => {
    // Initialize status
    let todayStatus = "absent";
    const today = new Date();
    const passedDate = new Date(date);
    const passedDateString = passedDate.toLocaleDateString();

    if (today.toLocaleDateString() !== passedDateString) {
      todayStatus = "complete";
    }

    // Check if today's attendance is logged
    if (todayStatus === "absent") {
      const todayAttendance = attendances.find(
        (log) => new Date(log.date!).toLocaleDateString() === passedDateString
      );
      if (todayAttendance) {
        todayStatus = todayAttendance.type;
      }
    }

    // Check if today is a weekend
    if (todayStatus === "absent" && (passedDate.getDay() === 0 || passedDate.getDay() === 6)) {
      todayStatus = "weekend";
    }

    // Check if today is a holiday
    if (
      todayStatus === "absent" &&
      holidays.some((holiday) => new Date(holiday.date).toLocaleDateString() === passedDateString)
    ) {
      todayStatus = "holiday";
    }

    // Calculate total work from office and home
    const workFromOffices = attendances.filter(
      (attendance) => attendance.type === "work_from_office" || attendance.type === "work_with_duty"
    );
    const workFromHomes = attendances.filter((attendance) => attendance.type === "work_from_home");
    const totalWorkFromHome = workFromHomes.length;
    const totalWorkFromOffice = workFromOffices.length;

    // Calculate total late
    let totalLate = 0;
    if (company) {
      totalLate = workFromOffices.filter((work) => {
        const clockInDate = new Date(work.clock_in_time!);
        const clockInHours = clockInDate.getHours();
        const clockInMinutes = clockInDate.getMinutes();
        const clockInSeconds = clockInDate.getSeconds();
        const [jobStartHours, jobStartMinutes] = (
          user.job_position?.shift_start.split(":") ?? ["08", "00"]
        ).map(Number);

        const clockInTime = clockInHours * 36000 + clockInMinutes * 60 + clockInSeconds;
        const jobStartTime = jobStartHours * 36000 + jobStartMinutes * 60 + company.tolerance_time;

        return clockInTime > jobStartTime;
      }).length;
    }

    // Calculate total absent
    const totalDaysToToday = passedDate.getDate();
    let totalWeekendDays = 0;
    for (let i = totalDaysToToday; i > 0; i--) {
      const date = new Date(passedDate.getFullYear(), passedDate.getMonth(), i);
      if (date.getDay() === 6 || date.getDay() === 0) {
        totalWeekendDays++;
      }
    }
    const totalHolidays = holidays.filter((holiday) => {
      const holidayDate = new Date(holiday.date);
      return holidayDate < passedDate && holidayDate.getDay() !== 6 && holidayDate.getDay() !== 0;
    });
    const totalAbsent =
      totalDaysToToday -
      (totalWeekendDays + totalHolidays.length + workFromOffices.length + workFromHomes.length);

    return { todayStatus, totalWorkFromOffice, totalWorkFromHome, totalLate, totalAbsent };
  }, [attendances, holidays, company, user, date]);

  return isLoading ? (
    <div className="w-full justify-center">
      <Spinner label="Loading..." />
    </div>
  ) : (
    <article className="rounded border border-slate-200 bg-white">
      <div className="flex justify-between gap-4 p-2">
        <h4 className="font-bold text-gray-600">{user.name}</h4>
        {displayDate && (
          <Chip>{`${monthNumberToWord(date.getMonth())}-${date.getFullYear()}`}</Chip>
        )}
      </div>

      <div className="flex gap-4 justify-between">
        <div className="space-y-2 p-2">
          {calculated.todayStatus !== "complete" && (
            <h4
              className={clsx(" rounded-md px-1 text-sm font-semibold capitalize", {
                "bg-violet-100 text-violet-500": calculated.todayStatus === "work_from_office",
                "bg-red-100 text-red-500": calculated.todayStatus === "absent",
                "bg-green-100 text-green-500": calculated.todayStatus === "work_from_home",
                "bg-blue-100 text-blue-500": calculated.todayStatus === "sick",
                "bg-rose-100 text-rose-500": calculated.todayStatus === "work_with_duty",
                "bg-lime-100 text-lime-500": calculated.todayStatus === "holiday",
                "bg-fuchsia-100 text-fuchsia-500": calculated.todayStatus === "weekend",
              })}
            >
              {calculated.todayStatus.replaceAll("_", " ") || "Hadir"}
            </h4>
          )}
          <div className="text-sm">
            <h6 className="text-red-500">{calculated.totalAbsent || 0} hari tidak hadir</h6>
            <h6 className="text-fuchsia-500">{calculated.totalLate || 0} hari terlambat</h6>
            <h6 className="text-amber-500">
              {calculated.totalWorkFromHome || 0} hari kerja dari rumah
            </h6>
            <h6 className="text-violet-500">
              {calculated.totalWorkFromOffice || 0} hari kerja dari kantor
            </h6>
          </div>
          <Link
            href={`/dashboard/employees/${user.work_id}/attendances`}
            className="block text-sm hover:underline "
          >
            Detail
          </Link>
        </div>
        {user.profile_picture ? (
          <Image
            src={user.profile_picture}
            alt=""
            draggable={false}
            priority
            width={200}
            height={200}
            className="object-cover object-center w-16 md:w-24"
          />
        ) : user.gender === "male" ? (
          <Image
            src={"/img/male.png"}
            width={200}
            height={200}
            className="h-auto w-16 md:w-24"
            alt=""
            draggable={false}
          />
        ) : (
          <Image
            src={"/img/female.png"}
            width={200}
            height={200}
            className="h-auto w-16 md:w-24"
            alt=""
            draggable={false}
          />
        )}
      </div>
    </article>
  );
};
export default EmployeeCard;
