import prisma from "@/app/prisma";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { work_id, password, name, job_position_id, role = "employee", gender } = await req.json();
  const user = await prisma.users.create({
    data: {
      work_id,
      password: await bcryptjs.hash(password, 10),
      name,
      job_position_id,
      role,
      gender,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "New User",
      description: `User ${user.name} has been registered`,
      type: "new",
    },
  });

  return NextResponse.json(user);
}

export async function GET(req: NextRequest) {
  // const work_id: string = await User.max("work_id");
  const work_id = await prisma.users.aggregate({
    _max: {
      work_id: true,
    },
  });
  if (!work_id) return NextResponse.json("ID001");
  // const newNumber = +work_id.substring(2, 5) + 1;
  const newNumber = work_id._max.work_id ? +work_id._max.work_id.substring(2, 5) + 1 : 1;
  const newWorkId = `ID${newNumber.toString().padStart(3, "0")}`;
  return NextResponse.json(newWorkId);
}
