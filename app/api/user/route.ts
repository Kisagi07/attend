import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";
import prisma from "@/app/prisma";
import bcryptjs from "bcryptjs";
import { deleteFile, storeFile } from "@/app/file";

const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const user = await prisma.users.findFirstOrThrow({
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
      api_profile_picture: true,
      profile_picture: true,
      created_at: true,
      updated_at: true,
      job_position: true,
    },
  });

  if (!user) return NextResponse.json(null);

  return NextResponse.json(user);
};

const PUT = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
  });

  if (!user)
    return NextResponse.json({ message: "User not found" }, { status: 404 });

  const formData = await req.formData();
  const name = formData.get("name") as string;
  const pin = formData.get("pin") as string;
  const profile_picture = formData.get("profile_picture") as File;

  if (pin && isNaN(+pin)) {
    return NextResponse.json(
      { message: "PIN must be a number" },
      { status: 400 },
    );
  }

  if (pin && pin.length > 6) {
    return NextResponse.json(
      { message: "PIN must be less than 6 characters" },
      { status: 400 },
    );
  }

  if (!name)
    return NextResponse.json({ message: "Name is required" }, { status: 400 });

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      name,
    },
  });

  if (pin) {
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        password: bcryptjs.hashSync(pin, 10),
      },
    });
  }

  // check if profile_picture is uploaded by checking it's size
  if (profile_picture.size > 0) {
    // store uploaded file into public folder and get the name
    const pathname = await storeFile(profile_picture, {
      storePath: "/upload/profile_picture",
      uniqueName: true,
    });
    // check if user already have profile_picture if yes then delete it
    if (user.profile_picture) {
      await deleteFile(user.profile_picture);
    }
    // update user profile_picture
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        profile_picture: pathname,
      },
    });
  }

  // return success
  return NextResponse.json({ message: "Profile updated" });
};

export { GET, PUT };
