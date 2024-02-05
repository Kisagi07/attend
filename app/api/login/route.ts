import { User } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  const { work_id, password } = await req.json();
  const user = await User.findOne({
    where: {
      work_id,
    },
  });
  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    );

  const matched = await bcryptjs.compare(password, user.password);

  if (!matched)
    return NextResponse.json(
      {
        message: "Wrong Password",
      },
      {
        status: 401,
      }
    );

  return NextResponse.json(user);
}
