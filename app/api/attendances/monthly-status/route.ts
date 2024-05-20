export const dynamic = "force-dynamic";
import { Log } from "@/models";
import { LogModel } from "@/models/Log";
import { NextRequest, NextResponse } from "next/server";
import { Op } from "sequelize";

const GET = async (req: NextRequest) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const endDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth + 1, 0));
  const startDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth, 1));

  const logs = await Log.findAll({
    where: {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
  });

  const data: { [key: string]: LogModel[] } = {};

  for (let date = 1; date < endDate.getDate(); date++) {
    const loopingDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth, date));
    const matchingLogs: LogModel[] = [];
    logs.forEach((log) => {
      const logDate = new Date(log.date.toString().split("T")[0]);
      if (logDate.getTime() === loopingDate.getTime()) {
        matchingLogs.push(log);
      }
    });
    data[`${date}`] = matchingLogs;
  }

  return NextResponse.json(data);
};

export { GET };
