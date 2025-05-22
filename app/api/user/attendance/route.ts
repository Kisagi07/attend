import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import { Prisma } from "@prisma/client";
import { logs as Log, logs_type } from "@prisma/client";
import { parseTime } from "@internationalized/date";
import { storeFile } from "@/app/file";
import { getDateOnly } from "@/app/helper";

interface PostJson {
  type: logs_type | "clock-out";
  clock_in_time: string;
  date: string;
  clock_in_latitude: string;
  clock_in_longitude: string;
  todaysWork: string[];
  clock_out_time: string;
  clock_out_latitude: string;
  clock_out_longitude: string;
  isOverTime: boolean;
}

const userAlreadyCheckIn = async (type: string, date: string, id: number) => {

  if (type !== "clock-out") {
    const lastLog = await prisma.logs.findFirst({
      where: {
        user_id: id,
      },    
      orderBy: {
        created_at: "desc"
      }
    })

    console.log(getDateOnly(lastLog!.date!), date);

    if (lastLog && getDateOnly(lastLog.date!) === date) {
      return true
    } else {
      return false
    }
  } else {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const type = formData.get("type") as string;
  const clock_in_time = formData.get("clock_in_time") as string | null;
  const date = formData.get("date") as string | null;
  const clock_in_latitude = formData.get("clock_in_latitude") as string | null;
  const clock_in_longitude = formData.get("clock_in_longitude") as
    | string
    | null;
  const todaysWork = formData.getAll("todaysWork[]") as string[];
  const clock_out_time = formData.get("clock_out_time") as string | null;
  const clock_out_latitude = formData.get("clock_out_latitude") as
    | string
    | null;
  const clock_out_longitude = formData.get("clock_out_longitude") as
    | string
    | null;
  const isOverTime = formData.get("isOverTime") as string | null;
  const proof = formData.get("proof") as File | null;
  if (!proof) {
    return NextResponse.json(
      { error: "Bukti absen tidak ditemukan, tolong ambil gambar" },
      { status: 422 }
    );
  }

  if (!date) {
    return NextResponse.json(
      { error: "Tanggal tidak ditemukan" },
      { status: 422 }
    );
  }



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

  const alreadyCheckIn = await userAlreadyCheckIn(type, date, user.id );
  if (alreadyCheckIn) {
    return NextResponse.json(null, {status: 422});
  }

  // #endregion

  const proofPath = await storeFile(proof, { storePath: "/upload/log-proof" });

  let log: Log;

  // #region //? basic store data functionality
  if (type === "sick") {
    if (!clock_in_time) {
      return NextResponse.json(
        { error: "Clock in time required when sending sick log" },
        { status: 422 }
      );
    }
    if (!clock_in_latitude || !clock_out_latitude) {
      return NextResponse.json(
        { error: "Latitude dan Longitude tidak ditemukan" },
        { status: 422 }
      );
    }
    const [hours, minutes, seconds] = clock_in_time.split(":");
    const clock_in_time_object = new Date(
      `2024-04-21T${hours}:${minutes}:${seconds}Z`
    );

    log = await prisma.logs.create({
      data: {
        type,
        clock_in_time: clock_in_time_object,
        date: new Date(date),
        clock_in_latitude,
        clock_in_longitude,
        work: todaysWork,
        user_id: user.id,
        clock_in_picture: proofPath,
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

    if (!clock_out_time) {
      return NextResponse.json(
        { error: "Waktu pulang tidak ditemukan" },
        { status: 422 }
      );
    }
    const [hours, minutes, seconds] = clock_out_time.split(":");
    const clock_out_time_object = new Date(
      `2024-04-21T${hours}:${minutes}:${seconds}Z`
    );

    log = await prisma.logs.update({
      where: {
        id: existingLog.id,
      },
      data: {
        clock_out_time: clock_out_time_object,
        clock_out_latitude,
        clock_out_longitude,
        work: [...todaysWork, ...(existingLog.work as Prisma.JsonArray)],
        clock_out_picture: proofPath,
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
    if (!clock_in_time) {
      return NextResponse.json(
        { error: "Clock in time required when sending sick log" },
        { status: 422 }
      );
    }
    if (!isOverTime) {
      return NextResponse.json(
        {
          error:
            "Ada kesalahan dalam menentukan absensi termasuk lembur apa tidak.",
        },
        { status: 422 }
      );
    }
    const [hours, minutes, seconds] = clock_in_time.split(":");
    const clock_in_time_object = new Date(
      `2024-04-21T${hours}:${minutes}:${seconds}Z`
    );
    log = await prisma.logs.create({
      data: {
        type: type.replaceAll("-", "_") as logs_type,
        clock_in_time: clock_in_time_object,
        date: new Date(date),
        clock_in_latitude,
        clock_in_longitude,
        work: todaysWork,
        user_id: user.id,
        isOverTime: JSON.parse(isOverTime),
        clock_in_picture: proofPath,
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
      let description = `${user.name} has clocked in at ${clock_in_time}`;
      if (type === "special_attendance") {
        description += `, with special ${todaysWork[0].replace("Reason", "reason")}`;
      }
      await prisma.timelines.create({
        data: {
          title: `${user.name} Attendance: ${log.type.replaceAll("_", " ")}`,
          description,
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
        if (!clock_out_time) {
          return NextResponse.json(
            {
              error:
                "Gagal menemukan jam pulang untuk menentukan absensi lembur atau tidak.",
            },
            { status: 422 }
          );
        }
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
