import { NextRequest, NextResponse } from "next/server";
import { JobPosition } from "@/models";
import Timeline from "@/models/Timeline";

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
  if (
    (name.trim().length === 0 || shift_start.trim().length === 0,
    shift_end.trim().length === 0)
  )
    return NextResponse.json({ message: "Need all field" }, { status: 422 });

  const jobPosition = await JobPosition.create({
    name,
    shift_start,
    shift_end,
    work_day,
    salary,
  });

  await Timeline.create({
    title: "Job Position",
    description: `Job Position ${jobPosition.name} has been created`,
    type: "new",
  });

  return NextResponse.json(jobPosition);
}

export async function GET(req: NextRequest) {
  const jobPositions = await JobPosition.findAll();
  return NextResponse.json(jobPositions);
}
