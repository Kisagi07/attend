import { NextRequest, NextResponse } from "next/server";
import { User, JobPosition, Timeline } from "@/models";
import sequelize from "@/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
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

  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
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
    title: "User",
    description: `User ${user.name} has been deleted`,
    type: "removed",
  });

  return NextResponse.json(user);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
  const { name, job_position_id, gender } = await req.json();
  console.log(gender);
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
  });

  await Timeline.create({
    title: "User",
    description: `User ${user.name} data has been updated`,
    type: "updated",
  });

  return NextResponse.json(updateUser);
}
