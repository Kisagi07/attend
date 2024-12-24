import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import prisma from "@/app/prisma";

const GET = async (req: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
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

const PUT = async (req: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  // authorize user
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
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

  // extract data from the request body
  const formData = await req.formData();
  const comment = formData.get("comment") as string;
  const status = formData.get("status") as "pending" | "approved" | "rejected";

  // validate everthing is not empty except comment
  if (!status || !["pending", "approved", "rejected"].includes(status)) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  // update day off request
  const updatedDayOffRequest = await prisma.dayOffRequest.update({
    where: {
      id: Number(params.id),
    },
    data: {
      comment,
      status,
    },
  });

  return NextResponse.json({ message: "Updated", data: updatedDayOffRequest });
};

const DELETE = async (req: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
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
