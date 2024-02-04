import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";
import { User, Log } from "@/models";

export async function POST(req: NextRequest) {
  const { type, time, date, latitude, longitude } = await req.json();
  const session = await auth();

  if (!session)
    return NextResponse.json(
      {
        error: "Unauthorized",
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
        error: "User not found",
      },
      {
        status: 404,
      }
    );

  const log = await user!.createLog({
    type,
    time,
    date,
    latitude,
    longitude,
  });

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

  return NextResponse.json(logs);
}
