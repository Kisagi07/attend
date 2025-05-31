"use client";
import { FC, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  company,
  holidays,
  logs,
  DayOffRequest,
  logs_type,
} from "generated/prisma";
import useSWR from "swr";
import { fetcher, monthNumberToWord } from "../helper";
import totalOvertime from "@helper/totalOvertime";
import { Spinner } from "@heroui/spinner";
import { UserWithJob } from "../prisma";
import { Chip } from "@heroui/chip";
import {
  parseTime,
  parseDate,
  startOfMonth,
  Time,
} from "@internationalized/date";

// Dates will always be the last day of the month or current day of current month
interface Props {
  user: UserWithJob;
  attendances: logs[];
  holidays: holidays[];
  displayDate?: boolean;
  date: Date;
}

interface Calculated {
  todayStatus: logs_type | "weekend" | "holiday" | "complete" | "absent";
  totalWorkFromOffice: number;
  totalWorkFromHome: number;
  totalLate: number;
  totalAbsent: number;
}

const EmployeeCard: FC<Props> = ({
  user,
  attendances,
  holidays,
  displayDate = false,
  date,
}: Props) => {
  const { data: company, isLoading } = useSWR<company>(`/api/company`, fetcher);
  const { data: leaveRequest, isLoading: leaveLoading } = useSWR<
    DayOffRequest[]
  >(
    `/api/day-off-request?status=approved&date=${date.getFullYear()}/${date.getMonth() + 1}/01-${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}&user-id=${user.id}`,
    fetcher
  );

  const calculated: Calculated = useMemo<Calculated>(() => {
    // Initialize status
    let todayStatus: Calculated["todayStatus"] = "absent";
    const today = new Date();
    const passedDate = new Date(date);
    const passedDateString = passedDate.toLocaleDateString();

    // filter NS Overtime
    const nsOvertime = attendances.filter(
      (log) => log.type === "non_schedule_overtime"
    );

    if (today.toLocaleDateString() !== passedDateString) {
      todayStatus = "complete";
    }

    if (todayStatus === "absent") {
      let todayAttendance = null;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      for (const log of attendances) {
        const logDate = new Date(log.date!);
        logDate.setHours(0, 0, 0, 0);

        if (logDate.getTime() === today.getTime()) {
          if (log.type !== "non_schedule_overtime") {
            todayAttendance = log;
            break;
          }
        } else if (logDate.getTime() < today.getTime()) {
          break;
        }
      }

      if (todayAttendance) {
        todayStatus = todayAttendance.type
      }
    }

    // Check if today is a weekend
    if (
      todayStatus === "absent" &&
      (passedDate.getDay() === 0 || passedDate.getDay() === 6)
    ) {
      todayStatus = "weekend";
    }

    // Check if today is a holiday
    if (
      todayStatus === "absent" &&
      holidays.some(
        (holiday) =>
          new Date(holiday.date).toLocaleDateString() === passedDateString
      )
    ) {
      todayStatus = "holiday";
    }

    // calculate totalWofkFromOffice (include special_attendance)
    const workFromOffice = attendances.filter(
      (log) =>
        log.type === "special_attendance" ||
        log.type === "work_from_office" ||
        log.type == "on_site_work"
    );
    const workFromHome = attendances.filter(
      (log) => log.type === "work_from_home"
    );

    //! calculate totalLate
    let late = 0;
    // parse job shift start time
    let jobStartTime = parseTime(user.job_position?.shift_start ?? "08:00");
    // add company tolerance time
    jobStartTime = jobStartTime.add({ minutes: company?.tolerance_time ?? 0 });
    // filter late work
    late = attendances.filter((work) => {
      if (
        work.type === "sick" ||
        work.isOverTime ||
        work.type === "special_attendance"
      ) {
        return false;
      }
      // false if its NS Overtime
      if (work.type === "non_schedule_overtime") {
        return false;
      }
      // parse the time
      const clockInTime = parseTime(
        String(work.clock_in_time).split("T")[1].split("Z")[0]
      );

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

    //? calculating leave / day off request
    // start month date
    if (leaveRequest) {
      // ? get the start of month of passed date
      const startMonthDate = startOfMonth(
        parseDate(
          `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
        )
      );

      // ? turn passed date into @internationalized/date CalendarDate
      const passedMonthDate = parseDate(
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
      );

      leaveRequest.forEach((leave) => {
        // initiate max loop count
        const MAX_LOOP_COUNT = 1000;
        let loop = 0;

        // ? use @internationalized/date CalendarDate as base date object
        let startDate = parseDate(
          new Date(leave.leaveStartDate).toISOString().split("T")[0]
        );
        const endDate = parseDate(
          new Date(leave.leaveEndDate).toISOString().split("T")[0]
        );

        // ? as long as start loop date still less than passed date and less than leave end date keep running while loop
        while (
          startDate.compare(passedMonthDate) <= 0 &&
          startDate.compare(endDate) <= 0
        ) {
          // ! Don't delete in case of infinite loop
          loop++;
          if (loop === MAX_LOOP_COUNT) {
            console.log("Infinite Loop Found");
            break;
          }

          // ? check if current start loop date does not exists the end leave date and this month passed/last date
          if (
            startDate.compare(startMonthDate) >= 0 &&
            startDate.compare(passedMonthDate) <= 0
          ) {
            totalAbsent--;
          }

          // ? reasign start loop date adding 1 days each loop
          startDate = startDate.add({ days: 1 });
        }
      });
    }
    // use Math.max incase total absent are less than 0, if so asign it 0
    totalAbsent = Math.max(totalAbsent, 0);
    // filter out NS Overtime from totalAbsent
    totalAbsent += nsOvertime.length;
    return {
      todayStatus,
      totalWorkFromOffice: workFromOffice.length,
      totalWorkFromHome: workFromHome.length,
      totalLate: late,
      totalAbsent,
    };
  }, [attendances, holidays, company, user, date, leaveRequest]);

  const overtimeAmount = useMemo<{ hour: number; minute: number }>(() => {
    const overtime = attendances.filter(
      (work) => work.isOverTime || work.afterHourOvertime
    );
    const totalHourOvertime = totalOvertime(overtime, user.job_position);
    return totalHourOvertime;
  }, [attendances, user.job_position]);

  const nsOvertimeTotal = useMemo(() => {
    const nsOvertime = attendances.filter(
      (log) => log.type === "non_schedule_overtime"
    );
    const total = nsOvertime.reduce((acc, overtime) => {
      if (overtime.clock_out_time) {
        const parsedClockIn = parseTime(
          (overtime.clock_in_time as unknown as string)
            .split("T")[1]
            .split(".")[0]
        );
        const parsedClockOut = parseTime(
          (overtime.clock_out_time as unknown as string)
            .split("T")[1]
            .split(".")[0]
        );
        const subtracted = parsedClockOut.subtract({
          hours: parsedClockIn.hour,
          minutes: parsedClockIn.minute,
        });
        const totalMinutes = subtracted.minute + subtracted.hour * 60;
        return acc + totalMinutes;
      }
      return acc;
    }, 0);
    return total;
  }, [attendances]);

  const getColor = (todayStatus: Calculated["todayStatus"]) => {
    switch (todayStatus) {
      case "special_attendance":
      case "work_from_office":
        return "secondary";
      case "absent":
        return "danger";
      case "holiday":
      case "work_from_home":
        return "success";
      case "sick":
        return "primary";
      case "weekend":
        return "secondary";
      default:
        return "primary";
    }
  };

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

      <div className="flex gap-4 justify-between items-end">
        <div className="space-y-2 p-2">
          {calculated.todayStatus !== "complete" && (
            <Chip
              color={getColor(calculated.todayStatus)}
              className="capitalize"
              variant="flat"
            >
              {calculated.todayStatus.replaceAll("_", " ") || "Hadir"}
            </Chip>
          )}
          <div className="text-sm grid gap-1">
            <Chip size="sm" variant="dot" color="danger">
              {calculated.totalAbsent} hari tidak hadir
            </Chip>
            <Chip size="sm" variant="dot" color="secondary">
              {calculated.totalLate} hari terlambat
            </Chip>
            <Chip size="sm" variant="dot" color="warning">
              {calculated.totalWorkFromHome} hari kerja dari rumah
            </Chip>
            <Chip size="sm" variant="dot" color="primary">
              {calculated.totalWorkFromOffice} hari kerja dari kantor
            </Chip>
            <Chip size="sm" variant="dot" color="success">
              {/* {overtimeAmount.amount} {overtimeAmount.type === "minutes" ? "menit" : "jam"} overtime */}
              {overtimeAmount.hour} jam {overtimeAmount.minute} menit overtime
            </Chip>
            <Chip size="sm" variant="dot" color="success">
              {nsOvertimeTotal} menit NS overtime
            </Chip>
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
            className="w-20 md:w-32 h-auto"
            alt=""
            draggable={false}
          />
        ) : (
          <Image
            src={"/img/female.png"}
            width={200}
            height={200}
            className="w-20 md:w-32 h-auto"
            alt=""
            draggable={false}
          />
        )}
      </div>
    </article>
  );
};
export default EmployeeCard;
