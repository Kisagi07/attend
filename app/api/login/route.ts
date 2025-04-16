import prisma from "@/app/prisma";
import { users } from "@/prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { PIN } = await req.json();

  const users = await prisma.users.findMany({
    select: {
      password: true,
      name: true,
      work_id: true,
      id: true,
      role: true,
    },
  });

  let userFound: users | null = null;

  for (const user of users) {
    if (await bcryptjs.compare(PIN, user.password!)) {
      return NextResponse.json(user);
    }
  }

  if (!userFound) {
    return NextResponse.json(null, { status: 404 });
  }
}
