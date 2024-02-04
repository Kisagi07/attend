import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const users = await User.findAll({
    where: {
      role: "employee",
    },
  });

  return NextResponse.json(users);
}
