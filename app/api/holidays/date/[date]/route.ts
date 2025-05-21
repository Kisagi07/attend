import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest, { params }: { params: Promise<{ date: string }> }) => {
  const { date } = await params;
  const dateObject = new Date(date);

  const holiday = await prisma.holidays.findFirst({
    where: {
      date: dateObject,
    },
  });

  return NextResponse.json(holiday);
};

const DELETE = async (req: NextRequest, { params }: { params: Promise<{ date: string }> }) => {
  const { date } = await params;

  const dateObject = new Date(date);
  const holiday = await prisma.holidays.findFirst({
    where: {
      date: dateObject,
    },
  });
  if (!holiday) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  await prisma.holidays.delete({
    where: {
      id: holiday.id,
    },
  });
  return NextResponse.json({ message: "Deleted" }, { status: 200 });
};

export { GET, DELETE };
