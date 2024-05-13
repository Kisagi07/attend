import { NextRequest, NextResponse } from "next/server";
import { Timeline } from "@/models";
import { auth } from "../auth/[...nextauth]/auth";
const GET = async (req: NextRequest) => {
  const session = auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  // get searchparams
  const searchParams = req.nextUrl.searchParams;
  // get limit
  const limit = searchParams.get("limit");

  if (limit) {
    const timelines = await Timeline.findAll({
      order: [["createdAt", "DESC"]],
      limit: +limit,
    });

    return NextResponse.json(timelines);
  } else {
    const timelines = await Timeline.findAll();
    return NextResponse.json(timelines);
  }
};

export { GET };
