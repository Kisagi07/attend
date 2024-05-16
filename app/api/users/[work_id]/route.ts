import { NextRequest, NextResponse } from "next/server";
import { User, JobPosition, Timeline, Log } from "@/models";
import Holidays from "date-holidays";
import { Op } from "sequelize";
import { calculateMonthlyStatus } from "@/app/serverhelper";

export async function GET(req: NextRequest, { params }: { params: { work_id: string } }) {
  const searchParams = req.nextUrl.searchParams;
  const monthlyStatus = searchParams.has("monthly-status");

  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
    include: [
      {
        model: JobPosition,
      },
    ],
    attributes: [
      "name",
      "work_id",
      "home_latitude",
      "home_longitude",
      "id",
      "role",
      "job_position_id",
      "createdAt",
      "updatedAt",
      "gender",
    ],
  });

  if (!user) return NextResponse.json(null);

  if (monthlyStatus) {
    await calculateMonthlyStatus(user);

    return NextResponse.json(user);
  }

  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: { work_id: string } }) {
  const user = await User.findOne({
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

  await user.destroy();

  await Timeline.create({
    title: "User Deleted",
    description: `User ${user.name} has been deleted`,
    type: "removed",
  });

  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const { name, job_position_id, gender, role } = await req.json();
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const updateUser = await user.update({
    name,
    job_position_id,
    gender,
    role,
  });

  await Timeline.create({
    title: "User Update",
    description: `User ${user.name} data has been updated`,
    type: "updated",
  });

  return NextResponse.json(updateUser);
}
