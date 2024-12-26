import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";
import { fromDate, parseDate, parseTime } from "@internationalized/date";

const GET = async (req: NextRequest) => {
  // get today's date
  const now = fromDate(new Date(), "asia/jakarta");
  const nextYear = now.add({ years: 1 });
  const prevYear = now.add({ years: -1 });
  // fetch users with `logs` and `job_position` between last year and next year
  const users = await prisma.users.findMany({
    include: {
      logs: {
        where: {
          date: {
            lte: nextYear.toDate(),
            gte: prevYear.toDate(),
          },
        },
      },
      job_position: true,
    },
    where: {
      role: {
        not: "admin",
      },
    },
  });
  // get company tolerance time
  const company = await prisma.company.findFirst();
  const tolerance = company?.tolerance_time ?? 0;
  // score to determine the best employee
  let score: Record<string, Record<string, number>> = {};
  let devi = null;
  // iterate over users
  users.forEach((user) => {
    if (user.job_position) {
      // calculate all logs tha have type of `work_from_home`, `work_from_office`, and `special_attendance`
      const logs = user.logs.filter(
        (log) =>
          log.type === "work_from_home" ||
          log.type === "work_from_office" ||
          log.type === "special_attendance"
      );
      // initial scrone
      let initialScore = logs.length;
      // get user job position shift_start time
      const shiftStart = parseTime(user.job_position.shift_start);
      // add company tolerance time to shiftStart
      const shiftStartTolerance = shiftStart.add({ minutes: tolerance });
      // total late
      let totalLate = 0;
      // iterate logs
      logs.forEach((log) => {
        // get log clock_in_time as string with format `HH:mm:ss` from date string
        const utcClockInTime = log.clock_in_time;
        const clockInTime = parseTime(
          `${utcClockInTime?.getUTCHours().toString().padStart(2, "0")}:${utcClockInTime?.getUTCMinutes().toString().padStart(2, "0")}:${utcClockInTime?.getUTCSeconds().toString().padStart(2, "0")}`
        );
        // check if clockInTime is late
        const isLate = clockInTime.compare(shiftStartTolerance) > 0;
        // if isLate is true then decrease initialScore
        if (isLate) {
          initialScore -= 1;
          totalLate++;
        }
      });
      // only work from home logs
      const workFromHome = logs.filter((log) => log.type === "work_from_home");
      // set user score and its needed properties
      if (score[user.name!]) {
        score[user.name!]["score"] = initialScore;
        score[user.name!]["totalLate"] = totalLate;
        score[user.name!]["workFromHome"] = workFromHome.length;
        score[user.name!]["attendances"] = logs.length;
      } else {
        score[user.name!] = {
          score: initialScore,
          totalLate: totalLate,
          workFromHome: workFromHome.length,
            attendances: logs.length,
        };
      }
    }
  });
  // get the user with the highest score along with its properties
  const bestEmployee = Object.entries(score).reduce((acc, curr) => {
    if (acc[1].score < curr[1].score) {
      return curr;
    }
    return acc;
  });

  // return
  return NextResponse.json(bestEmployee);
};

export { GET };
