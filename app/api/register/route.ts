import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { work_id, password, name, job_position, today_shift } =
    await req.json();

  const user = await User.create({
    work_id,
    password: await bcrypt.hash(password, 10),
    name,
    job_position,
    today_shift,
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
