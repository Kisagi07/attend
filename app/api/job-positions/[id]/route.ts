import JobPosition, { JobPositionModel } from "@/models/JobPosition";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import Timeline from "@/models/Timeline";

export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
  const session = await auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  const toUpdate: JobPositionModel = await req.json();

  const jobPosition = await JobPosition.findOne({
    where: {
      id: params.id,
    },
  });
  if (!jobPosition) return NextResponse.json("Position not found", { status: 404 });

  await jobPosition.update(toUpdate);

  await Timeline.create({
    title: "Job Position Update",
    description: `Job Position ${jobPosition.name} has been updated`,
    type: "updated",
  });

  return NextResponse.json(jobPosition);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
  const jobPosition = await JobPosition.findOne({
    where: {
      id: params.id,
    },
  });
  if (!jobPosition) return NextResponse.json("Position not found", { status: 404 });
  await jobPosition.destroy();

  await Timeline.create({
    title: "Job Position Deleted",
    description: `Job Position ${jobPosition.name} has been deleted`,
    type: "removed",
  });

  return NextResponse.json({ message: "Job position deleted" });
}

export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const position = await JobPosition.findOne({
    where: {
      id: params.id,
    },
  });
  if (position) {
    return NextResponse.json(position);
  } else {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
}
