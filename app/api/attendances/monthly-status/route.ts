export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";
import { logs } from "@/prisma/client";

const GET = async (req: NextRequest) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const endDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth + 1, 0));
  const startDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth, 1));

  const logs: logs[] = await prisma.logs.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  const data: { [key: string]: logs[] } = {};

  for (let date = 1; date < endDate.getDate(); date++) {
    const loopingDate = new Date(Date.UTC(currentDate.getFullYear(), currentMonth, date));
    const matchingLogs: logs[] = [];

    logs.forEach((log: logs) => {
      if (log.date) {
        if (log.date?.getTime() === loopingDate.getTime()) {
          matchingLogs.push(log);
        }
      }
    });
    data[`${date}`] = matchingLogs;
  }

  return NextResponse.json(data);
};

export { GET };
