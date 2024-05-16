import { NextResponse, NextRequest } from "next/server";
import { Holiday, Timeline } from "@/models"; // Replace with the actual path to your Holiday model
import { auth } from "../auth/[...nextauth]/auth";

const GET = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const holidays = await Holiday.findAll(); // Replace with the appropriate method to retrieve all holidays from your model

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
    const holiday = await Holiday.create({ name, date: dateObject }); // Replace with the appropriate method to create a holiday in your model
    await Timeline.create({
      title: "Holiday Created",
      description: `Holiday ${name} created on ${date}`,
      type: "new",
    });
    return NextResponse.json(holiday, { status: 201 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

export { GET, POST };
