import prisma from "@/app/prisma";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// TODO: generate work id in server side intead
export async function POST(req: NextRequest) {
  const { password, name, job_position_id, role = "employee", gender } = await req.json();
  const work_id = await getLatestWorkId()

  // get all users for unique checking
  const users = await prisma.users.findMany({
    select: {
      password: true,
    },
  });
  let unique = true;
  for (const user of users) {
    if (await bcryptjs.compare(password, user.password!)) {
      unique = false;
      break;
    }
  }
  // if its not unique return error
  if (!unique) return NextResponse.json({ error: "PIN already in use" }, { status: 409 });

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

const getLatestWorkId = async () => {
  const work_id = await prisma.users.aggregate({
    _max: {
      work_id: true,
    },
  });
  if (!work_id) return "ID001";
  // const newNumber = +work_id.substring(2, 5) + 1;
  const newNumber = work_id._max.work_id ? +work_id._max.work_id.substring(2, 5) + 1 : 1;
  const newWorkId = `ID${newNumber.toString().padStart(3, "0")}`;
  return newWorkId
}

export async function GET(req: NextRequest) {
  const newWorkId = await getLatestWorkId();
  return NextResponse.json(newWorkId);
}
