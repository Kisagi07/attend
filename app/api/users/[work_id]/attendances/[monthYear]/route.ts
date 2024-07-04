import prisma from "@/app/prisma";
import { NextResponse, NextRequest } from "next/server";

const GET = async (
  req: NextRequest,
  { params }: { params: { monthYear: string; work_id: string } }
): Promise<NextResponse> => {
  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) return NextResponse.json("User not found", { status: 404 });

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
  const attendances = await prisma.logs.findMany({
    where: {
      user_id: user.id,
      date: {
        gte: startMonth,
        lte: endMonth,
      },
    },
  });

  return NextResponse.json(attendances);
};

export { GET };
