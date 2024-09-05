import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/prisma";
import { CalendarDate } from "@internationalized/date";

const GET = async (req: NextRequest) => {
  const holidays = await prisma.holidays.findMany({
    orderBy: {
      date: "desc",
    },
  });
  return NextResponse.json(holidays);
};

const POST = async (req: NextRequest) => {
  const {
    name,
    date,
  }: {
    name: string;
    date: CalendarDate;
  } = await req.json();

  try {
    let message: string = "";
    if (!name) {
      message = "Name required";
    }
    if (!date) {
      message = "Date required";
    }

    if (message) {
      return NextResponse.json({ message }, { status: 422 });
    }
    const dateObject = new Date(Date.UTC(date.year, date.month - 1, date.day, 0, 0, 0, 0));
    const holiday = await prisma.holidays.create({
      data: {
        name,
        date: dateObject,
      },
    });
    await prisma.timelines.create({
      data: {
        title: "Holiday Created",
        description: `Holiday ${name} created on ${new Date()}`,
        type: "new",
      },
    });
    return NextResponse.json(holiday, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
const PUT = async (req: NextRequest) => {
  const {
    name,
    id,
  }: {
    name: string;
    id: string;
  } = await req.json();

  try {
    let message: string = "";
    if (!name) {
      message = "Name required";
    }

    if (!id) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    if (message) {
      return NextResponse.json({ message }, { status: 422 });
    }

    const holiday = await prisma.holidays.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });
    return NextResponse.json(holiday, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

const DELETE = async (req: NextRequest) => {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  const holiday = await prisma.holidays.findFirst({
    where: {
      id,
    },
  });

  if (!holiday) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  await prisma.holidays.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ message: "Deleted" });
};

export { GET, POST, DELETE, PUT };
