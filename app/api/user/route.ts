import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";
import prisma from "@/app/prisma";

const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
    select: {
      name: true,
      work_id: true,
      home_latitude: true,
      home_longitude: true,
      id: true,
      role: true,
      job_position_id: true,
      created_at: true,
      updated_at: true,
      job_position: true,
    },
  });

  if (!user) return NextResponse.json(null);

  return NextResponse.json(user);
};

export { GET };
