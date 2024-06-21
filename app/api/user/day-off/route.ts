import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

const GET = async (req: NextRequest) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
  // if new data id in session are not found then return and inform user to relogin
  if (!session.user.id) {
    return NextResponse.json({ message: "Please Re-login again to continue" }, { status: 400 });
  }
  // get all day off request from the user
  const dayOffRequests = await prisma.dayOffRequest.findMany({
    where: {
      userId: +session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(dayOffRequests);
};

export { GET };
