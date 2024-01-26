import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import AttendanceLog from "@/models/AttendanceLog";
import { auth } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const { type, time, date } = await req.json();

  const log = await AttendanceLog.create({
    date: date,
    time: time,
    type: type,
  });

  return NextResponse.json(log);
}
