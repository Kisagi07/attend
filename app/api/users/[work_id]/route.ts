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
