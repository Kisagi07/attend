import Holidays from "date-holidays";
import { UserResultMany, UserResultFirst } from "./prisma";
import prisma from "@/app/prisma";

const calculateMonthlyStatus = async (
  data: UserResultFirst | UserResultMany,
) => {
  // get year, month, beggining of the month in string
  const currentDate = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const startofMonthDate = new Date(
    new Date(year, month - 1, 1).setHours(0, 0, 0, 0),
  );

  // get all holidays in this month
  const companyHolidays = await prisma.holidays.findMany({
    where: {
      date: {
        gte: startofMonthDate,
        lte: new Date(currentDate.setUTCHours(23, 59, 59, 999)),
      },
    },
  });

  // set back current date to 0000
  currentDate.setUTCHours(0, 0, 0, 0);

  // create holidays instance and initiate with Indonesia holidays
  const hd = new Holidays();
  hd.init("ID");
  const yearlyHolidays = hd.getHolidays(year);

  // get this month total days
  const currentTotalDays = currentDate.getDate();
  // get up to today total weekend
  const totalWeekend = new Array(currentTotalDays)
    .fill(0)
    .map((_, index) => {
      const date = new Date(year, month - 1, index + 1);
      return date.getDay();
    })
    .filter((day) => day === 0 || day === 6).length;
  // get this month total holidays
  const currentMonthHolidaysCount = yearlyHolidays.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getFullYear() === year &&
      itemDate.getMonth() + 1 === month &&
      itemDate.getDate() <= currentTotalDays
    );
  }).length;

  // check if data is an array or not
  const users = Array.isArray(data) ? data : [data];
  for (const user of users) {
    const logs = await prisma.logs.findMany({
      where: {
        user_id: user.id,
        created_at: {
          gte: startofMonthDate,
        },
      },
    });

    // get total logs, work from home, and absent
    const totalLogs = logs.length;
    // get total work from home
    const totalWorkFromHome = logs.filter(
      (log) => log.type === "work_from_home",
    ).length;
    // get total work from office
    const totalWorkFromOffice = logs.filter(
      (log) => log.type === "work_from_office" || log.type === "work_with_duty",
    ).length;
    // get total absent
    const totalAbsent = Math.max(
      currentTotalDays -
        currentMonthHolidaysCount -
        totalWeekend -
        companyHolidays.length -
        totalLogs,
      0,
    );

    // set virtual fields
    user.totalAbsent = totalAbsent;
    user.totalWorkFromHome = totalWorkFromHome;
    user.totalWorkFromOffice = totalWorkFromOffice;

    // get today log
    const todayLog = logs.find((log) => {
      const logDate = new Date(log.created_at);
      return logDate.getDate() === currentDate.getDate();
    });
    // set today status
    user.todayStatus = todayLog?.type || "absent";

    if (user.todayStatus === "absent") {
      // check if today is holiday
      const isTodayHoliday = companyHolidays.find((holiday) => {
        const holidayDate = new Date(holiday.date);
        // make sure currentDate.getDate() is in Asia/Jakarta timezone

        return holidayDate.getDate() === currentDate.getDate();
      });

      // also check in National Holiday
      if (!isTodayHoliday) {
        const isTodayNationalHoliday = yearlyHolidays.find((holiday) => {
          const holidayDate = new Date(holiday.date);
          return (
            holidayDate.getFullYear() === year &&
            holidayDate.getMonth() + 1 === month &&
            holidayDate.getDate() === currentDate.getDate()
          );
        });

        if (isTodayNationalHoliday) {
          user.todayStatus = "holiday";
        }
      }
      // if today is holiday change todayStatus to holiday
      else if (isTodayHoliday) {
        user.todayStatus = "holiday";
      } else {
        // if its not holiday check if today is sunday or saturday
        const today = currentDate.getDay();
        // if today is sunday or saturday change todayStatus to weekend
        if (today === 0 || today === 6) {
          user.todayStatus = "weekend";
        }
      }
    }

    // check if user have position or not
    if (user.job_position) {
      // initial late number
      let late = 0;
      // calculate how many times users clock in late
      const clockedInLog = logs.filter((log) => log.type !== "sick");
      const lateLogs = clockedInLog.filter((log) => {
        const time = log.clock_in_time!;
        const hour = time.getHours();
        const minute = time.getMinutes();
        const clockInTime = hour * 60 + minute;

        const positionClockInTime = user.job_position?.shift_start!;
        // split by : and turn it into number
        const [positionHour, positionMinute] = positionClockInTime
          .split(":")
          .map(Number);
        const positionClockIn = positionHour * 60 + positionMinute;

        // if clockInTime is more than positionClockIn add 1 to late
        if (clockInTime > positionClockIn) {
          late++;
        }
      });
      // set late to user
      user.totalLate = late;
    }
  }

  return users;
};

// function for returning Date that has beed set to UTC 0000
const getUTCMidnightDate = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return new Date(date.setUTCHours(0, 0, 0, 0));
};

export { calculateMonthlyStatus, getUTCMidnightDate };
