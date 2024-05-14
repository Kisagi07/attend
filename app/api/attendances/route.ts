import { monthNumberToWord } from "@/app/helper";
import { Log, User, JobPosition } from "@/models";
import { LogModel } from "@/models/Log";
import { NextRequest, NextResponse } from "next/server";
import { FindOptions, Op } from "sequelize";
import Holidays from "date-holidays";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  // get all allowed search params
  const limit = searchParams.get("limit");
  const latest = searchParams.has("latest");
  const groupedNamedDate = searchParams.has("grouped-name-date");
  const lastSevenDays = searchParams.has("last-seven-days");
  // set base options
  const queryOption: FindOptions<LogModel> = {
    include: [
      {
        model: User,
        as: "user",
        attributes: ["name"],
        include: [
          {
            model: JobPosition,
            attributes: ["name", "shift_start", "shift_end", "shift_duration"],
          },
        ],
      },
    ],
  };

  // if search params contain last-seven days
  if (lastSevenDays) {
    const lastSevenDays = [];

    // get today date
    const today = new Date(
      Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    );

    // check if today is work day
    while (today.getDay() === 0 || today.getDay() === 6) {
      today.setDate(today.getDate() - 1);
    }

    // push the first date
    lastSevenDays.push(today);

    // get holidays
    const hd = new Holidays("ID");
    const holidays = hd.getHolidays(today.getFullYear());

    // push the previous 4 days
    while (lastSevenDays.length < 5) {
      const date: Date = new Date(lastSevenDays[lastSevenDays.length - 1]);
      date.setDate(date.getDate() - 1);
      while (
        date.getDay() === 0 ||
        date.getDay() === 6 ||
        holidays.find((holiday) => new Date(holiday.date.split(" ")[0]) === date)
      ) {
        date.setDate(date.getDate() - 1);
      }
      lastSevenDays.push(date);
    }

    // get all logs between the last 5 days
    const logs = await Log.findAll({
      where: {
        date: {
          [Op.between]: [lastSevenDays[4], lastSevenDays[0]],
        },
      },
    });

    // grouped by date attribute
    const grouped = logs.reduce((x, y) => {
      //@ts-ignore
      (x[y.date] = x[y.date] || []).push(y);
      return x;
    }, {});

    // return grouped and last 5 days work
    return NextResponse.json({
      data: grouped,
      dates: lastSevenDays.map((day) => day.toISOString().split("T")[0]),
    });
  }

  if (limit) {
    queryOption.limit = parseInt(limit);
  }

  if (latest) {
    queryOption.order = [["created_at", "DESC"]];
  }

  let logs: any = await Log.findAll(queryOption);
  if (groupedNamedDate) {
    const grouped: { [key: string]: { [key: string]: LogModel[] } } = {};
    logs.forEach((log: LogModel) => {
      const date = new Date(log.date);
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
    logs = grouped;
  }

  return NextResponse.json(logs);
}
