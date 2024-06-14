import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";
import prisma from "@/app/prisma";

const PUT = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { latitude, longitude }: { latitude: number; longitude: number } = await req.json();
  if (!latitude || !longitude) return NextResponse.json("Invalid", { status: 422 });

  let user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
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

  await prisma.timelines.create({
    data: {
      title: "User Home Coordinate",
      description: `${user.name} has changed home coordinate`,
      type: "updated",
    },
  });

  return NextResponse.json("Success");
};

export { PUT };
