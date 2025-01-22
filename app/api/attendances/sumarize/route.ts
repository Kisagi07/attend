import prisma from "@/app/prisma";
import { getLocalTimeZone, isWeekend, parseTime, Time, today } from "@internationalized/date";
import { NextResponse } from "next/server";

const GET = async () => {
  // get company tolerance
  const company = await prisma.company.findFirst();
  const tolerance = company?.tolerance_time ?? 0;

  let result = [];
  // get today date
  let now = today(getLocalTimeZone());
  // if result are less than 5 the continue loop
  while (result.length < 5) {
    // check if now are weekend
    while (isWeekend(now, "id-ID")) {
      // subtract 1 day
      now = now.subtract({ days: 1 });
    }
    // fetch the attendance
    const attendances = await prisma.logs.findMany({
      where: {
        date: now.toDate("etc/utc"),
      },
      include: {
        user: {
          include: {
            job_position: true,
          },
        },
      },
    });

    // declare variable to store the later clock in time
    let latestClockInTime: null | Time = null;

    // calculate the total late
    let totalLate = 0;
    // iterate logs
    attendances.forEach((log) => {
      // get each user job position shift start
      const shiftStart = log.user!.job_position?.shift_start;
      if (shiftStart) {
        // parse shiftStart to object than add tolerance time
        const shiftStartTolerance = parseTime(shiftStart).add({
          minutes: tolerance,
        });
        // get log clock_in_time as string with format `HH:mm:ss` from date string
        const utcClockInTime = log.clock_in_time;
        const clockInTime = parseTime(
          `${utcClockInTime?.getUTCHours().toString().padStart(2, "0")}:${utcClockInTime?.getUTCMinutes().toString().padStart(2, "0")}:${utcClockInTime?.getUTCSeconds().toString().padStart(2, "0")}`
        );
        // check if clockInTime is late
        const isLate = clockInTime.compare(shiftStartTolerance) > 0;
        // if isLate is true then add to totalLate
        if (isLate) {
          totalLate++;
        }

        // check if latestClockInTime is null or clockInTime is later than latestClockInTime
        if (latestClockInTime === null || clockInTime.compare(latestClockInTime) > 0) {
          latestClockInTime = clockInTime;
        }
      }
    });

    // declare the sumarize
    let sumarize = {
      total: attendances.length,
      attendances: attendances,
      totalLate: totalLate,
      date: now.toString(),
      latestClockInTime: latestClockInTime ? (latestClockInTime as Time).toString() : null,
    };
    // push the sumarize to result
    result.push(sumarize);
    // reduce 1 day
    now = now.subtract({ days: 1 });
  }

  return NextResponse.json(result);
};

export const dynamic = "force-dynamic";

export { GET };
