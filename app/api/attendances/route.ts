import { monthNumberToWord } from "@/app/helper";
import { Log, User, JobPosition } from "@/models";
import { LogModel } from "@/models/Log";
import { NextRequest, NextResponse } from "next/server";
import { FindOptions } from "sequelize";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const latest = searchParams.has("latest");
  const groupedNamedDate = searchParams.has("grouped-name-date");
  const queryOption: FindOptions<LogModel> = {
    attributes: ["user_id", "time", "type", "id", "work", "date"],
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
      const user = log.user.name;
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
    });
    logs = grouped;
  }

  return NextResponse.json(logs);
}
