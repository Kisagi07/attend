import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";
import { fromDate, parseDate, parseTime } from "@internationalized/date";
import calculateLateInLogs from "@/app/helper/calculateLate";

const GET = async (req: NextRequest) => {
  // get today's date
  const now = fromDate(new Date(), "etc/utc");
  const nextYear = now.add({ years: 1 });
  const prevYear = now.add({ years: -1 });  
  const beginningOfYear = now.set({month: 1, day:1, hour: 0, minute:0, second: 0,millisecond: 0}).toDate()
  const endOfYear = now.set({month: 12, day:31, hour: 23, minute:59, second: 59,millisecond: 999}).toDate()
  // fetch users with `logs` and `job_position` between last year and next year
  const users = await prisma.users.findMany({
    include: {
      logs: {
        where: {
          date: {
            lt: endOfYear,
            gt: beginningOfYear,
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
  
  // check if all log of all users are empty
  if (users.every((user) => user.logs.length === 0)) {
    return NextResponse.json({message: "No Data to Check"});
  }

  // get company tolerance time
  const company = await prisma.company.findFirst();
  const tolerance = company?.tolerance_time ?? 0;
  // score to determine the best employee
  let score: Record<string, Record<string, number>> = {};
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
      // get total late
      const totalLate = calculateLateInLogs(logs, tolerance, user.job_position.shift_start);
      // only work from home logs
      const workFromHome = logs.filter((log) => log.type === "work_from_home");
      // set user score and its needed properties
      if (score[user.name!]) {
        score[user.name!]["score"] = initialScore - totalLate;
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

export const dynamic = "force-dynamic";

export { GET };
