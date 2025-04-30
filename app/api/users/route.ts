import { NextRequest, NextResponse } from "next/server";
import prisma, { UserResultMany } from "@/app/prisma";
import { $Enums } from "@prisma/client";
import {
  endOfMonth,
  getLocalTimeZone,
  startOfMonth,
  today,
} from "@internationalized/date";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  let role: string | $Enums.users_role[] | undefined =
    params.get("role") ?? undefined;
  let startMonth;
  let endMonth;

  const withMonthLogs = params.has("withMonthLogs");
  const withMonthDayoffRequest = params.has("withMonthDayOffRequest");
  if (withMonthLogs) {
    const td = today(getLocalTimeZone());
    startMonth = startOfMonth(td);
    endMonth = endOfMonth(td);
  }

  if (role) {
    role = role.split(",") as $Enums.users_role[];
  }
  

  let users = await prisma.users.findMany({
    include: {
      job_position: true,
      logs: withMonthLogs
        ? {
            where: {
              date: {
                gte: startMonth?.toDate('UTC'),
                lte: endMonth?.toDate('UTC'),
              },
            },
            orderBy: {
              date: "desc",
            },
          }
        : undefined,
      dayOffRequests: withMonthDayoffRequest
        ? {
            where: {
              OR: [
                {
                  leaveStartDate: {
                    gte: startMonth?.toDate('UTC'),
                    lte: endMonth?.toDate('UTC')
                  },
                },
                {
                  leaveEndDate: {
                    gte: startMonth?.toDate('UTC'),
                    lte: endMonth?.toDate('UTC')
                  },
                },
              ],
            },
          }
        : undefined,
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
