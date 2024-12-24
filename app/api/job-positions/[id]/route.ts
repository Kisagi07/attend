import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

export async function PUT(req: NextRequest, props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const session = await auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  const toUpdate: {
    name: string;
    shift_start: string;
    shift_end: string;
    salary: number;
    work_day: string;
  } = await req.json();

  let jobPosition = await prisma.job_positions.findFirst({
    where: { id: Number(params.id) },
  });
  if (!jobPosition) return NextResponse.json("Position not found", { status: 404 });

  // await jobPosition.update(toUpdate);
  jobPosition = await prisma.job_positions.update({
    where: {
      id: jobPosition.id,
    },
    data: toUpdate,
  });

  await prisma.timelines.create({
    data: {
      title: "Job Position Update",
      description: `Job Position ${jobPosition.name} has been updated`,
      type: "updated",
    },
  });

  return NextResponse.json(jobPosition);
}

export async function DELETE(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const jobPosition = await prisma.job_positions.findFirst({
    where: { id: Number(params.id) },
  });

  if (!jobPosition) return NextResponse.json("Position not found", { status: 404 });
  const deleted = await prisma.job_positions.delete({
    where: { id: Number(params.id) },
  });

  await prisma.timelines.create({
    data: {
      title: "Job Position Deleted",
      description: `Job Position ${jobPosition.name} has been deleted`,
      type: "removed",
    },
  });

  return NextResponse.json({ message: "Job position deleted" });
}

export async function GET(req: NextRequest, props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const position = await prisma.job_positions.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  if (position) {
    return NextResponse.json(position);
  } else {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
}
