import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import prisma from "@/app/prisma";

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  // get day off request based on params id
  const dayOffRequests = await prisma.dayOffRequest.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  // if dayoffRequest is not found then return 404
  if (!dayOffRequests) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(dayOffRequests);
};

const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  // get day off based on id passed in params
  const dayOffRequest = await prisma.dayOffRequest.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  // if dayoffRequest is not found then return 404
  if (!dayOffRequest) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }

  // get data from body
  const {
    request_date: requestDate,
    leave_type: leaveType,
    comment,
    leave_start_date: leaveStartDate,
    leave_end_date: leaveEndDate,
    status,
  }: {
    request_date: string;
    leave_type: string;
    comment?: string;
    leave_start_date: string;
    leave_end_date: string;
    status: "pending" | "approved" | "rejected";
  } = await req.json();

  // validate everthing is not empty except comment
  if (
    !requestDate ||
    !leaveType ||
    !leaveStartDate ||
    !leaveEndDate ||
    !status ||
    !["pending", "approved", "rejected"].includes(status)
  ) {
    return NextResponse.json("Bad Request", { status: 400 });
  }

  // update day off request
  const updatedDayOffRequest = await prisma.dayOffRequest.update({
    where: {
      id: Number(params.id),
    },
    data: {
      requestDate: new Date(requestDate),
      leaveType,
      comment,
      leaveStartDate: new Date(leaveStartDate),
      leaveEndDate: new Date(leaveEndDate),
      status,
    },
  });

  return NextResponse.json(updatedDayOffRequest);
};

const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  // get day off based on id passed in params
  const dayOffRequest = await prisma.dayOffRequest.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  // if dayoffRequest is not found then return 404
  if (!dayOffRequest) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  // delete day off request
  await prisma.dayOffRequest.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json({ message: "Deleted" });
};

export { GET, PUT, DELETE };
