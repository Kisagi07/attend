import { NextRequest, NextResponse } from "next/server";
import { calculateMonthlyStatus } from "@/app/serverhelper";
import prisma, { UserJobExPassword, withStatus } from "@/app/prisma";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const role = params.get("role") as "intern" | "employee";
  const monthlyStatus = params.has("monthly-status");

  if (role) {
    const users = await prisma.users.findMany({
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
      },
      where: {
        role: role,
      },
    });

    if (monthlyStatus) {
      // get year, month, beggining of the month in string
      const usersWithStatus = await calculateMonthlyStatus(users as withStatus[]);
      return NextResponse.json(usersWithStatus);
    }
    return NextResponse.json(users);
  }

  let users = (await prisma.users.findMany({
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
    },
    orderBy: {
      created_at: "desc",
    },
    where: {
      role: {
        in: ["employee", "intern"],
      },
    },
  })) as UserJobExPassword[];

  if (monthlyStatus) {
    // get year, month, beggining of the month in string
    const usersWithStatus = await calculateMonthlyStatus(users as withStatus[]);
    return NextResponse.json(usersWithStatus);
  }

  return NextResponse.json(users);
}
