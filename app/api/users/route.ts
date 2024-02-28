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
    attributes: ["id", "name", "work_id", "role", "job_position_id", "createdAt", "updatedAt"],
  });

  return NextResponse.json(users);
}
