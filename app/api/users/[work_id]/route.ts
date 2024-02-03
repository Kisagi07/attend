import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import sequelize from "@/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user) return NextResponse.json(null);

  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { work_id: string } }
) {
  const { name, job_position, today_shift } = await req.json();
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user)
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  const updateUser = await user.update({
    name,
    job_position,
    today_shift,
  });

  return NextResponse.json(updateUser);
}
