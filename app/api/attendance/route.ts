import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/route";
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
