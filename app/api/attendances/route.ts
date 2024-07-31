import { monthNumberToWord } from "@/app/helper";
import { NextRequest, NextResponse } from "next/server";
import prisma, { LogWithUser, LogWithUserWithJob } from "@/app/prisma";

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
  let limit = Number(searchParams.get("limit")) || undefined;
  const groupedNamedDate = searchParams.has("grouped-name-date");
  const of = searchParams.get("of")?.split(",").map(Number);
  const month = searchParams.get("month") ?? undefined;
  let year = searchParams.get("year") ?? undefined;
  let startDate: Date | undefined = undefined;
  let endDate: Date | undefined = undefined;

  if (!month && year) {
    year = new Date().getFullYear().toString();
  }

  if (year && isNaN(Number(year))) {
    return NextResponse.json({ message: "Invalid year" });
  }
  if (month && isNaN(Number(month))) {
    return NextResponse.json({ message: "Invalid month" });
  }

  if (month && (Number(month) < 0 || Number(month) > 12)) {
    return NextResponse.json({ message: "Month must be between 1 and 12" });
  }

  if (month) {
    startDate = new Date(Date.UTC(Number(year), Number(month) - 1));
    endDate = new Date(Date.UTC(Number(year), Number(month), 0));
  }

  let logs = (await prisma.logs.findMany({
    take: limit,
    include: {
      user: {
        include: {
          job_position: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
    where: {
      user_id: {
        in: of,
      },
      date: {
        lte: endDate,
        gte: startDate,
      },
    },
  })) as LogWithUserWithJob[];
  // set base options

  // if search params contain last-seven day

  // if (limit) {
  //   const logs = await prisma.logs.findMany({
  //     take: parseInt(limit),
  //     include: {
  //       user: true,
  //     },
  //     orderBy: {
  //       created_at: "desc",
  //     },
  //   });
  //   return NextResponse.json(logs);
  // }

  // let logs = (await prisma.logs.findMany({
  //   include: {
  //     user: {
  //       include: {
  //         job_position: true,
  //       },
  //     },
  //   },
  //   orderBy: {
  //     created_at: "desc",
  //   },
  //   where: {
  //     user_id: {
  //       in: of,
  //     },
  //     date: {
  //       lte: endDate,
  //       gte: startDate,
  //     },
  //   },
  // })) as LogWithUserWithJob[];

  if (groupedNamedDate) {
    const grouped: { [key: string]: { [key: string]: LogWithUserWithJob[] } } = {};
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
