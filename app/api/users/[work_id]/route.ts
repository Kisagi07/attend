import { NextRequest, NextResponse } from "next/server";
import { calculateMonthlyStatus } from "@/app/serverhelper";
import prisma, { withStatus, UserResultFirst } from "@/app/prisma";
import bcryptjs from "bcryptjs";

export async function GET(req: NextRequest, { params }: { params: { work_id: string } }) {
  const searchParams = req.nextUrl.searchParams;
  const monthlyStatus = searchParams.has("monthly-status");

  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
    select: {
      name: true,
      work_id: true,
      home_latitude: true,
      home_longitude: true,
      id: true,
      role: true,
      job_position_id: true,
      created_at: true,
      updated_at: true,
      gender: true,
      job_position: true,
      profile_picture: true,
    },
  });

  if (!user) return NextResponse.json(null);

  user.profile_picture = user.profile_picture
    ? `${process.env.APP_URL}/api/public${user.profile_picture}`
    : null;
  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: { work_id: string } }) {
  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );

  const deleted = await prisma.users.delete({
    where: {
      id: user.id,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "User Deleted",
      description: `User ${user.name} has been deleted`,
      type: "removed",
    },
  });

  return NextResponse.json({ message: "Deleted", data: { deleted } });
}

export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const { name, job_position_id, gender, role, password } = await req.json();

  let user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  if (password) {
    // get all users for unique checking
    const users = await prisma.users.findMany({
      omit: {
        password: false,
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
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        password: bcryptjs.hashSync(password, 10),
      },
    });
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      name,
      job_position_id,
      gender,
      role,
    },
  });

  const updateUser = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
    select: {
      name: true,
      work_id: true,
      home_latitude: true,
      home_longitude: true,
      id: true,
      role: true,
      job_position_id: true,
      created_at: true,
      updated_at: true,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "User Update",
      description: `User ${user.name} data has been updated`,
      type: "updated",
    },
  });

  return NextResponse.json(updateUser);
}
