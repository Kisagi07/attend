import { monthNumberToWord } from "@/app/helper";
import { NextRequest, NextResponse } from "next/server";
import prisma, { LogWithUser } from "@/app/prisma";

function getTodayDate() {
  const today = new Date();
  return new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
}

function isWorkDay(date: Date, holidays: any[]) {
  return (
    date.getDay() !== 0 &&
    date.getDay() !== 6 &&
    !holidays.some((holiday) => new Date(holiday.date.split(" ")[0]).getTime() === date.getTime())
  );
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  // get all allowed search params
  const limit = searchParams.get("limit");
  const groupedNamedDate = searchParams.has("grouped-name-date");
  // set base options

  // if search params contain last-seven day

  if (limit) {
    const logs = await prisma.logs.findMany({
      take: parseInt(limit),
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return NextResponse.json(logs);
  }

  let logs = (await prisma.logs.findMany({
    select: {
      date: true,
      work: true,
      clock_in_latitude: true,
      clock_in_longitude: true,
      clock_out_latitude: true,
      clock_out_longitude: true,
      clock_in_time: true,
      clock_out_time: true,
      type: true,
      created_at: true,
      updated_at: true,
      user_id: true,
      user: {
        select: {
          name: true,
          work_id: true,
          role: true,
          tolerance_active: true,
          tolerance_time: true,
          updated_at: true,
          created_at: true,
        },
      },
      works: true,
    },
    orderBy: {
      created_at: "desc",
    },
  })) as LogWithUser[];

  if (groupedNamedDate) {
    const grouped: { [key: string]: { [key: string]: LogWithUser[] } } = {};
    logs.forEach((log) => {
      const date = log.date ? new Date(log.date) : new Date();
      const month = monthNumberToWord(date.getMonth());
      const year = date.getFullYear();
      const monthYear = `${month} ${year}`;
      const user = log.user?.name;
      if (user) {
        if (Object.hasOwn(grouped, user)) {
          if (Object.hasOwn(grouped[user], monthYear)) {
            grouped[user][monthYear].push(log);
          } else {
            grouped[user][monthYear] = [log];
          }
        } else {
          grouped[user] = {
            [monthYear]: [log],
          };
        }
      }
    });
    return NextResponse.json(grouped);
  }

  return NextResponse.json(logs);
}
