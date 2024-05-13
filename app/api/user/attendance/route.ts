import { NextRequest, NextResponse } from "next/server";
import { User, Log, Timeline } from "@/models";
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

  const user = await User.findOne({
    where: {
      work_id: session.user.work_id,
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
    log = await user.createLog({
      type,
      clock_in_time,
      date,
      clock_in_latitude,
      clock_in_longitude,
      work: todaysWork,
    });
    await Timeline.create({
      title: "Attendance",
      description: `${user.name} is sick today`,
      type: "new",
    });
  } else if (type === "clock-out") {
    const existingLog = await Log.findOne({
      where: {
        user_id: user.id,
        date,
      },
    });

    if (!existingLog) {
      return NextResponse.json("Not Found", { status: 404 });
    }

    await existingLog.update({
      clock_out_time,
      clock_out_latitude,
      clock_out_longitude,
      work: todaysWork,
    });

    await Timeline.create({
      title: "Clock out",
      description: `${user.name} has clocked out at ${clock_out_time}`,
      type: "updated",
    });

    await Timeline.create({
      title: "Work",
      description: `${user.name} is working on ${JSON.stringify(todaysWork)}`,
      type: "updated",
    });

    log = existingLog;
  } else {
    log = await user.createLog({
      type,
      clock_in_time,
      date,
      clock_in_latitude,
      clock_in_longitude,
      work: todaysWork,
    });

    await Timeline.create({
      title: "Attendance",
      description: `${user.name} has clocked in at ${clock_in_time}`,
      type: "updated",
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

  const user = await User.findOne({
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
  const timeZone = "Asia/Jakarta";
  const jakartaDate = new Date().toLocaleString("en-ES", { timeZone });
  const formattedDate = new Date(jakartaDate).toISOString().split("T")[0];

  const logs = await user.getLogs({
    where: {
      date: formattedDate,
    },
  });

  if (logs.length > 0) {
    return NextResponse.json(logs[0]);
  } else {
    return NextResponse.json(null);
  }
}
