import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Timeline from "@/models/Timeline";

export async function POST(req: NextRequest) {
  const {
    work_id,
    password,
    name,
    job_position_id,
    role = "employee",
    gender,
  } = await req.json();
  const user = await User.create({
    work_id,
    password: await bcryptjs.hash(password, 10),
    name,
    job_position_id,
    role,
    gender,
  });

  await Timeline.create({
    title: "User",
    description: `User ${user.name} has been registered`,
    type: "new",
  });

  return NextResponse.json(user);
}

export async function GET(req: NextRequest) {
  const work_id: string = await User.max("work_id");
  if (!work_id) return NextResponse.json("ID001");
  const newNumber = +work_id.substring(2, 5) + 1;
  const newWorkId = `ID${newNumber.toString().padStart(3, "0")}`;
  return NextResponse.json(newWorkId);
}
