import { NextRequest, NextResponse } from "next/server";
import prisma, { UserResultMany } from "@/app/prisma";
import { $Enums } from "@prisma/client";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  let role: string | $Enums.users_role[] | undefined = params.get("role") ?? undefined;
  const monthlyStatus = params.has("monthly-status");
  if (role) {
    role = role.split(",") as $Enums.users_role[];
  }

  let users = await prisma.users.findMany({
    select: {
      job_position: true,
      name: true,
      work_id: true,
      role: true,
      job_position_id: true,
      created_at: true,
      updated_at: true,
      gender: true,
      id: true,
      profile_picture: true,
      api_profile_picture: true,
    },
    orderBy: {
      created_at: "desc",
    },
    where: {
      role: {
        in: (role as $Enums.users_role[] | undefined) ?? ["employee", "intern"],
      },
    },
  });

  return NextResponse.json(users);
}
