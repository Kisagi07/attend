import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const session = await auth();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { latitude, longitude }: { latitude: number; longitude: number } = await req.json();
  if (!latitude || !longitude) return NextResponse.json("Invalid", { status: 422 });

  let user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user) return NextResponse.json("Not Found", { status: 404 });

  user = await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      home_latitude: latitude,
      home_longitude: longitude,
    },
  });

  return NextResponse.json({
    message: "User home coordinate updated",
    data: prisma.users.excludePassword(user),
  });
}
