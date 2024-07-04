import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prisma";

const GET = async (req: NextRequest, { params }: { params: { monthYear: string } }) => {
  const [month, year] = params.monthYear.split("-").map(Number);
  if (!year) {
    return NextResponse.json("Year are needed", { status: 422 });
  }
  if (isNaN(month) || isNaN(year)) {
    return NextResponse.json("Invalid Month or Year", { status: 422 });
  }
  if (month < 1 || month > 12) {
    return NextResponse.json("Month are number an only between 1 - 12", { status: 422 });
  }
  const startMonth = new Date(year, month - 1, 1);
  const endMonth = new Date(year, month, 0);
  const holidays = await prisma.holidays.findMany({
    where: {
      date: {
        gte: startMonth,
        lte: endMonth,
      },
    },
  });
  return NextResponse.json(holidays);
};

export { GET };
