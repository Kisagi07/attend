import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import { Prisma, logs as Log } from "@prisma/client";
import { parseTime } from "@internationalized/date";

export async function POST(req: NextRequest) {
  const {
    type,
    clock_in_time,
    date,
    clock_in_latitude,
    clock_in_longitude,
    todaysWork,
    clock_out_time,
    clock_out_latitude,
    clock_out_longitude,
    isOverTime,
  } = await req.json();

  // #region //? session authentication
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
    include: {
      logs: true,
      job_position: true,
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      {
        status: 404,
      }
    );
  }
  // #endregion

  let log: Log;

  // #region //? basic store data functionality
  if (type === "sick") {
    const [hours, minutes, seconds] = clock_in_time.split(":");
    const clock_in_time_object = new Date(`2024-04-21T${hours}:${minutes}:${seconds}Z`);

    log = await prisma.logs.create({
      data: {
        type,
        clock_in_time: clock_in_time_object,
        date: new Date(date),
        clock_in_latitude,
        clock_in_longitude,
        work: todaysWork,
        user_id: user.id,
      },
    });
    await prisma.timelines.create({
      data: {
        title: `${user.name} is Sick`,
        description: `${user.name} is sick today`,
        type: "new",
      },
    });
  } else if (type === "clock-out") {
    const existingLog = await prisma.logs.findFirst({
      where: {
        user_id: user.id,
        date: new Date(date),
      },
    });

    if (!existingLog) {
      return NextResponse.json("Not Found", { status: 404 });
    }

    const [hours, minutes, seconds] = clock_out_time.split(":");
    const clock_out_time_object = new Date(`2024-04-21T${hours}:${minutes}:${seconds}Z`);

    log = await prisma.logs.update({
      where: {
        id: existingLog.id,
      },
      data: {
        clock_out_time: clock_out_time_object,
        clock_out_latitude,
        clock_out_longitude,
        work: [...todaysWork, ...(existingLog.work as Prisma.JsonArray)],
      },
    });

    await prisma.timelines.create({
      data: {
        title: `${user.name} Has Clock Out`,
        description: `${user.name} has clocked out at ${clock_out_time}`,
        type: "updated",
      },
    });
    await prisma.timelines.create({
      data: {
        title: `${user.name} is Working on :`,
        description: `${JSON.stringify(todaysWork)}`,
        type: "updated",
      },
    });
  } else {
    const [hours, minutes, seconds] = clock_in_time.split(":");
    const clock_in_time_object = new Date(`2024-04-21T${hours}:${minutes}:${seconds}Z`);
    log = await prisma.logs.create({
      data: {
        type: type.replaceAll("-", "_"),
        clock_in_time: clock_in_time_object,
        date: new Date(date),
        clock_in_latitude,
        clock_in_longitude,
        work: todaysWork,
        user_id: user.id,
        isOverTime,
      },
    });

    if (isOverTime) {
      await prisma.timelines.create({
        data: {
          title: `${user.name} are doing overtime today`,
          description: `${user.name} has clocked in for overtime at ${clock_in_time}`,
          type: "new",
        },
      });
    } else {
      await prisma.timelines.create({
        data: {
          title: `${user.name} Attendance: ${log.type.replaceAll("_", " ")}`,
          description: `${user.name} has clocked in at ${clock_in_time}`,
          type: "new",
        },
      });
    }
  }

  //#endregion

  // #region //? after hour overtime functionality
  // check if today is not overtime day
  if (!isOverTime) {
    // check if its clock out
    if (type === "clock-out") {
      // check if user have job position
      if (user.job_position) {
        // parse job end shift & clock out time
        const jobShiftEnd = parseTime(user.job_position.shift_end);
        const clockOutTime = parseTime(clock_out_time);
        // check if clock out time are 15 minutes after job shift end
        const comparedResult = clockOutTime.compare(jobShiftEnd);
        // convert result number miliseconds into minutes
        const resultInMinutes = comparedResult / 1000 / 60;
        // check if result in minutes are more than 15 minutes for after hout overtime qualification
        if (resultInMinutes > 15) {
          // update log afterHourOvertime to `true`
          log = await prisma.logs.update({
            where: {
              id: log.id,
            },
            data: {
              afterHourOvertime: true,
            },
          });
        }
      }
    }
  }
  // #endregion

  return NextResponse.json(log);
}

export async function GET(req: NextRequest) {
  const session = await auth();
  const searchParams = req.nextUrl.searchParams;
  const date = searchParams.get("date") as string;

  if (!session)
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );

  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
  });

  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );
  const todayDate = new Date(date);
  console.log(todayDate);
  const logs = await prisma.logs.findMany({
    where: {
      date: todayDate,
      user_id: user.id,
    },
  });

  if (logs.length > 0) {
    return NextResponse.json(logs[0]);
  } else {
    return NextResponse.json(null);
  }
}
