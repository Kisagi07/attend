import { NextRequest, NextResponse } from "next/server";
import { User, JobPosition } from "@/models";
import sequelize from "@/db";

export async function GET(req: NextRequest, { params }: { params: { work_id: string } }) {
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
    ],
  });

  if (!user) return NextResponse.json(null);

  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: { work_id: string } }) {
  const user = await User.destroy({
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

  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const { name, job_position_id } = await req.json();
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
  const updateUser = await user.update({
    name,
    job_position_id,
  });

  return NextResponse.json(updateUser);
}
