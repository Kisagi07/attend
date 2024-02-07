import JobPosition, { JobPositionModel } from "@/models/JobPosition";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const toUpdated: JobPositionModel = await req.json();
  const jobPosition = await JobPosition.findOne({
    where: {
      id: params.id,
    },
  });
  if (!jobPosition)
    return NextResponse.json("Position not found", { status: 404 });
  await jobPosition.update(toUpdated);
  return NextResponse.json(jobPosition);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const jobPosition = await JobPosition.findOne({
    where: {
      id: params.id,
    },
  });
  if (!jobPosition)
    return NextResponse.json("Position not found", { status: 404 });
  await jobPosition.destroy();
  return NextResponse.json({ message: "Job position deleted" });
}
