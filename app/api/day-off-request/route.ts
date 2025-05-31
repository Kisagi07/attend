import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import prisma from "@/app/prisma";
import { getUTCMidnightDate } from "@/app/serverhelper";
import { $Enums, users } from "generated/prisma";
const POST = async (req: NextRequest) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
  // extract data from the request body
  const formData = await req.formData();
  const requestDate = formData.get("request_date") as string;
  const leaveType = formData.get("leave_type") as string;
  const comment = formData.get("comment") as string;
  const leaveStartDate = formData.get("leave_start_date") as string;
  const leaveEndDate = formData.get("leave_end_date") as string;

  if (!requestDate || !leaveType || !leaveStartDate || !leaveEndDate) {
    return NextResponse.json("Bad Request", { status: 400 });
  }

  // if id is not in session user then find user based on work_id
  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
  });
  if (!user) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }
  if (!session.user.id) {
    session.user.id = user.id.toString();
  }

  // validate everthing is not empty except comment
  if (!requestDate || !leaveType || !leaveStartDate || !leaveEndDate) {
    return NextResponse.json("Bad Request", { status: 400 });
  }
  // create the day off request
  const dayOffRequest = await prisma.dayOffRequest.create({
    data: {
      requestDate: getUTCMidnightDate(requestDate),
      leaveType,
      comment,
      leaveStartDate: getUTCMidnightDate(leaveStartDate),
      leaveEndDate: getUTCMidnightDate(leaveEndDate),
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  return NextResponse.json(dayOffRequest);
};

const GET = async (req: NextRequest) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.has("user-id") ? Number(searchParams.get("user-id")) : undefined;
  const status = (searchParams.get("status") as $Enums.DayOffStatus | null) ?? undefined;
  const date = searchParams.get("date") ?? undefined;
  let startDate: undefined | Date = undefined;
  let endDate: undefined | Date = undefined;
  if (date) {
    [startDate, endDate] = date.split("-").map((date) => new Date(date.split("/").join("-")));
  }

  // get all day off requests
  const dayOffRequests = await prisma.dayOffRequest.findMany({
    orderBy: {
      leaveStartDate: "desc",
    },
    include: {
      user: true,
    },
    where: {
      userId,
      status,
      OR: date
        ? [
            {
              leaveStartDate: {
                gte: startDate,
              },
            },
            {
              leaveEndDate: {
                lte: endDate,
              },
            },
          ]
        : undefined,
    },
  });
  return NextResponse.json(dayOffRequests);
};

export { POST, GET };
