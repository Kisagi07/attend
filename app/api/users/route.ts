import { User, JobPosition } from "@/models";
import { NextRequest, NextResponse } from "next/server";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const users = await User.findAll({
    where: {
      role: "employee",
    },
    include: {
      model: JobPosition,
    },
  });

  return NextResponse.json(users);
}
