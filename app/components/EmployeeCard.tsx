"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { company, holidays, logs, DayOffRequest } from "@prisma/client";
import useSWR from "swr";
import { fetcher, monthNumberToWord } from "../helper";
import { Spinner } from "@nextui-org/spinner";
import { UserWithJob } from "../prisma";
import { Chip } from "@nextui-org/chip";
import { parseTime, parseDate, startOfMonth } from "@internationalized/date";

// Dates will always be the last day of the month or current day of current month
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
  const { data: leaveRequest, isLoading: leaveLoading } = useSWR<DayOffRequest[]>(
    `/api/day-off-request?status=approved&date=${date.getFullYear()}/${date.getMonth() + 1}/01-${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}&user-id=${user.id}`,
    fetcher
  );

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
      const todayAttendance = attendances.find((log, index) => {
        if (index == 0) {
        }
        return new Date(log.date!).toLocaleDateString() === passedDateString;
      });
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

    // calculate totalWofkFromOffice (include work_with_duty)
    const workFromOffice = attendances.filter(
      (log) => log.type === "work_with_duty" || log.type === "work_from_office"
    );
    const workFromHome = attendances.filter((log) => log.type === "work_from_home");

    // calculate totalLate
    let late = 0;
    // parse job shift start time
    let jobStartTime = parseTime(user.job_position?.shift_start ?? "08:00");
    // add company tolerance time
    jobStartTime = jobStartTime.add({ minutes: company?.tolerance_time ?? 0 });
    jobStartTime.add({ hours: 5 });
    // filter late work
    late = attendances.filter((work) => {
      if (work.type === "sick") {
        return false;
      }
      // parse the time
      const clockInTime = parseTime(String(work.clock_in_time).split("T")[1].split("Z")[0]);

      // compare if more than 0 mean greater
      return clockInTime.compare(jobStartTime) > 0;
    }).length;

    // initialize late as total days first
    let totalAbsent = passedDate.getDate();
    // get the date of passed date
    const finalPassedDate = passedDate.getDate();
    // initialize totalWeekend as 0 first
    let totalWeekend = 0;
    // check every date start from finalPassedDate to 0 for weekend
    for (let i = finalPassedDate; i > 0; i--) {
      const date = new Date(passedDate.getFullYear(), passedDate.getMonth(), i);
      if ([0, 6].includes(date.getDay())) {
        totalWeekend++;
      }
    }
    // substract totalAbsent with totalWeekend
    totalAbsent -= totalWeekend;
    // filter holiday that is not weekend
    let totalHolidays = holidays.filter((holiday) => {
      const date = new Date(holiday.date);
      return date.getDay() !== 0 || date.getDay() !== 6;
    }).length;
    // substract total absent with total holidays that is not weekend
    totalAbsent -= totalHolidays;
    // filter attendance that's on weekdays
    const weekdaysAttendances = attendances.filter((work) => {
      const date = new Date(work.date!);
      return date.getDay() !== 0 || date.getDay() !== 6;
    });
    // substract total absent with total work on weekdays
    totalAbsent -= weekdaysAttendances.length;

    // start month date
    if (leaveRequest) {
      // ? get the start of month of passed date
      const startMonthDate = startOfMonth(
        parseDate(
          `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getDate()}`
        )
      );

      // ? turn passed date into @internationalized/date CalendarDate
      const passedMonthDate = parseDate(
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getDate()}`
      );

      leaveRequest.forEach((leave) => {
        // initiate max loop count
        const MAX_LOOP_COUNT = 1000;
        let loop = 0;

        // ? use @internationalized/date CalendarDate as base date object
        let startDate = parseDate(new Date(leave.leaveStartDate).toISOString().split("T")[0]);
        const endDate = parseDate(new Date(leave.leaveEndDate).toISOString().split("T")[0]);

        // ? as long as start loop date still less than passed date and less than leave end date keep running while loop
        while (startDate.compare(passedMonthDate) <= 0 && startDate.compare(endDate) <= 0) {
          // ! Don't delete in case of infinite loop
          loop++;
          if (loop === MAX_LOOP_COUNT) {
            console.log("Infinite Loop Found");
            break;
          }

          // ? check if current start loop date does not exists the end leave date and this month passed/last date
          if (startDate.compare(startMonthDate) >= 0 && startDate.compare(passedMonthDate) <= 0) {
            totalAbsent--;
          }

          // ? reasign start loop date adding 1 days each loop
          startDate = startDate.add({ days: 1 });
        }
      });
    }
    // use Math.max incase total absent are less than 0, if so asign it 0
    totalAbsent = Math.max(totalAbsent, 0);
    return {
      todayStatus,
      totalWorkFromOffice: workFromOffice.length,
      totalWorkFromHome: workFromHome.length,
      totalLate: late,
      totalAbsent,
    };
  }, [attendances, holidays, company, user, date, leaveRequest]);

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
