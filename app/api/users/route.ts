import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const users = await User.findAll({
    where: {
      role: "employee",
    },
    attributes: ["name", "work_id", "job_position", "today_shift"],
  });

  return NextResponse.json(users);
}
