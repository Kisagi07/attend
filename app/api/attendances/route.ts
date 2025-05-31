import { monthNumberToWord } from "@/app/helper";
import { NextRequest, NextResponse } from "next/server";
import prisma, { LogWithUser, LogWithUserWithJob } from "@/app/prisma";
import { logs_type } from "generated/prisma";

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
  const withoutUser = searchParams.has("withoutUser");
  const groupedNamedDate = searchParams.has("grouped-name-date");
  const of = searchParams.get("of")?.split(",").map(Number);
  const month = searchParams.get("month") ?? undefined;
  const type = searchParams.get("type") as logs_type ?? undefined;
  let year = searchParams.get("year") ?? undefined;
  let startDate: Date | undefined = undefined;
  let endDate: Date | undefined = undefined;    

  // check if type are not logs_type
  if (type && !Object.values(logs_type).includes(type)) {
    return NextResponse.json({ message: `Allowed type: ${Object.values(logs_type).join(", ")}` });
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

  if (year && !month) {
    startDate = new Date(`${year}-01-01`);
    endDate =  new Date(`${(Number(year) + 1)}-01-01`);    
  }

  if (month && !year) {
     year = new Date().getFullYear().toString();
    startDate = new Date(`${year}-01-01`);
    endDate =  new Date(`${(Number(year) + 1)}-01-01`);    
  }

  if (year && month) {
    startDate = new Date(`${year}-${month}-01`);
    endDate = new Date(`${year}-${(Number(month) + 1)}-01`);
  }          
  

  let logs = (await prisma.logs.findMany({
    take: limit,
    include: {
      user: withoutUser
        ? undefined
        : {
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
      type,
    },
  })) as LogWithUserWithJob[];

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
