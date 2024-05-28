import prisma from "@/app/prisma";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { PIN } = await req.json();

  const user = await prisma.users.findFirst({});
  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );

  const matched = await bcryptjs.compare(password, user.password!);

  if (!matched) return NextResponse.json(null);

  return NextResponse.json(user);
}
