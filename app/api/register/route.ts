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
