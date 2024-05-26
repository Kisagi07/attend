import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    name,
    shift_start,
    shift_end,
    work_day,
    salary,
  }: {
    name: string;
    shift_start: string;
    shift_end: string;
    work_day: string;
    salary: number;
  } = await req.json();
  if ((name.trim().length === 0 || shift_start.trim().length === 0, shift_end.trim().length === 0))
    return NextResponse.json({ message: "Need all field" }, { status: 422 });

  const jobPosition = await prisma.job_positions.create({
    data: {
      name,
      shift_start,
      shift_end,
      work_day,
      salary,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "New Job Position",
      description: `Job Position ${jobPosition.name} has been created`,
      type: "new",
    },
  });

  return NextResponse.json(jobPosition);
}

export async function GET(req: NextRequest) {
  const jobPositions = await prisma.job_positions.findMany();
  return NextResponse.json(jobPositions);
}
