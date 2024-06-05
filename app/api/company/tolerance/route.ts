import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import prisma from "@/app/prisma";
const PUT = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const {
    tolerance_time,
    tolerance_active,
  }: { tolerance_time: string; tolerance_active: boolean } = await req.json();

  await prisma.company.update({
    where: {
      id: 1,
    },
    data: {
      tolerance_active,
      tolerance_time: Number(tolerance_time),
    },
  });

  const data = await prisma.company.findFirst();

  return NextResponse.json({ message: "Updated", data });
};

export { PUT };
