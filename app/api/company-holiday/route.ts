import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";

const GET = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const holidays = await prisma.holidays.findMany(); // Replace with the appropriate method to retrieve all holidays from your model

    return NextResponse.json(holidays);
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

const POST = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const {
    name,
    date,
  }: {
    name: string;
    date: string;
  } = await req.json();

  try {
    const dateObject = new Date(date);
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
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

export { GET, POST };
