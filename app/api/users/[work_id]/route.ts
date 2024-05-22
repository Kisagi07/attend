import { NextRequest, NextResponse } from "next/server";
import { calculateMonthlyStatus } from "@/app/serverhelper";
import prisma, { withStatus } from "@/app/prisma";

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
    },
  });

  if (!user) return NextResponse.json(null);

  if (monthlyStatus) {
    const withStatus = await calculateMonthlyStatus(user as unknown as withStatus);

    return NextResponse.json(withStatus[0]);
  }

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
  const { name, job_position_id, gender, role } = await req.json();

  let user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
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
