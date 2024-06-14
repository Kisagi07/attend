import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import prisma from "@/app/prisma";
const GET = async (req: NextRequest) => {
  const session = auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  // get searchparams
  const searchParams = req.nextUrl.searchParams;
  // get limit
  const limit = searchParams.get("limit");

  if (limit) {
    const timelines = await prisma.timelines.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: Number(limit),
    });

    return NextResponse.json(timelines);
  } else {
    const timelines = await prisma.timelines.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    return NextResponse.json(timelines);
  }
};

export { GET };
