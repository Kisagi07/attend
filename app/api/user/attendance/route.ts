import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";

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
  } = await req.json();

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

  let log;

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
        work: JSON.stringify(todaysWork),
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
        work: JSON.stringify(todaysWork),
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
      },
    });

    await prisma.timelines.create({
      data: {
        title: `${user.name} Attendance: ${
          log.type === "work_from_home" ? "Work From Home" : "Work From Office"
        }`,
        description: `${user.name} has clocked in at ${clock_in_time}`,
        type: "new",
      },
    });
  }

  return NextResponse.json(log);
}

export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session)
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );

  if (!session)
    return NextResponse.json(
      {
        status: 401,
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
        status: 404,
      },
      {
        status: 404,
      }
    );
  const jakartaDate = new Date(new Date().setUTCHours(0, 0, 0, 0));
  const logs = await prisma.logs.findMany({
    where: {
      date: jakartaDate,
      user_id: user.id,
    },
  });

  if (logs.length > 0) {
    return NextResponse.json(logs[0]);
  } else {
    return NextResponse.json(null);
  }
}
