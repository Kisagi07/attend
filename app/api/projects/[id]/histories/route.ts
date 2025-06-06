import { auth } from "@/app/api/auth/[...nextauth]/authConfig";
import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";
import "@/initExtension";
import { storeFile } from "@/app/file";

const POST = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
  // authorizew
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // authorize project exists
  const project = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  // if project does not exists then return 404
  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  // authorize user exists
  const user = await prisma.users.findFirst({
    where: {
      id: Number(session.user.id),
    },
  });
  // return 404 if users not found
  if (!user) {
    return NextResponse.json({ message: "Users not found" }, { status: 404 });
  }
  // get FormData and its values
  const formData = await req.formData();
  const description = formData.get("description") as string;
  const file = formData.get("file") as File;
  let storePath: undefined | string;
  // validate
  if (!description) {
    return NextResponse.json({ message: "Description is required" }, { status: 422 });
  }
  if (file && file.size > 0) {
    const path = await storeFile(file, { storePath: "/history" });
    storePath = path;
  }
  // create history data
  const history = await prisma.projectHistory.create({
    data: {
      description,
      file: storePath,
      dateTime: new Date(),
      project: {
        connect: {
          id: project.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  // create activity
  await prisma.projectActivity.create({
    data: {
      dateTime: new Date(),
      description: `Added new history ${history.description}`,
      project: {
        connect: {
          id: project.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  return NextResponse.json({ message: "History created", history });
};
const GET = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
  // authorized
  const session = await auth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // authorize project
  const project = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      histories: true,
    },
  });
  if (!project) return NextResponse.json({ message: "Project not found" }, { status: 404 });
  // return histories only
  return NextResponse.json(project.histories);
};

export { POST, GET };
