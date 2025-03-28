import { NextRequest, NextResponse } from "next/server";
import prisma, { UserOmitPassword } from "@/app/prisma";
import bcryptjs from "bcryptjs";

const changeExRole = async (
  user: UserOmitPassword,
  to: "ex_intern" | "ex_employee" | "intern" | "employee"
) => {
  const updatedUser = await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      role: to,
    },
  });
  return updatedUser;
};

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ work_id: string }> }
) {
  const params = await props.params;
  const searchParams = req.nextUrl.searchParams;
  const monthlyStatus = searchParams.has("monthly-status");

  const user = await prisma.users.findFirst({
    where: params.work_id.includes("ID")
      ? {
          work_id: params.work_id,
        }
      : {
          id: Number(params.work_id),
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
      gender: true,
      job_position: true,
      profile_picture: true,
    },
  });

  if (!user) return NextResponse.json(null);

  user.profile_picture = user.profile_picture
    ? `${process.env.APP_URL}/api/images/${user.profile_picture}`
    : null;
  return NextResponse.json(user);
}

export async function DELETE(
  req: NextRequest,
  props: { params: Promise<{ work_id: string }> }
) {
  const params = await props.params;
  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );

  const deleted = await prisma.users.delete({
    where: {
      id: user.id,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "User Deleted",
      description: `User ${user.name} has been deleted`,
      type: "removed",
    },
  });

  return NextResponse.json({ message: "Deleted", data: { deleted } });
}

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ work_id: string }> }
) {
  const params = await props.params;
  const { name, job_position_id, gender, role, password, toEx, unEx } =
    await req.json();

  let user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // ? turn employee to ex_employee / ex_intern feature
  if (toEx) {
    const role = `ex_${user.role}` as "ex_intern" | "ex_employee";
    const updatedUser = await changeExRole(user, role);
    return NextResponse.json(updatedUser);
  }
  // ? turn ex employee / intern no normal feature
  if (unEx) {
    const role = user.role.slice(3) as "intern" | "employee";
    const updatedUser = await changeExRole(user, role);
    return NextResponse.json(updatedUser);
  }
  // ? basic user update feature
  if (password) {
    // get all users for unique checking
    const users = await prisma.users.findMany({
      omit: {
        password: false,
      },
    });
    let unique = true;
    for (const user of users) {
      if (await bcryptjs.compare(password, user.password!)) {
        unique = false;
        break;
      }
    }
    // if its not unique return error
    if (!unique)
      return NextResponse.json(
        { error: "PIN already in use" },
        { status: 409 }
      );
    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        password: bcryptjs.hashSync(password, 10),
      },
    });
  }

  await prisma.users.update({
    where: {
      id: user.id,
    },
    data: {
      name,
      job_position_id,
      gender,
      role,
    },
  });

  const updateUser = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
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
    },
  });

  await prisma.timelines.create({
    data: {
      title: "User Update",
      description: `User ${user.name} data has been updated`,
      type: "updated",
    },
  });

  return NextResponse.json(updateUser);
}
