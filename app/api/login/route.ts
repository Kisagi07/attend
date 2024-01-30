import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/models";

export async function POST(req: NextRequest) {
  const { work_id, password } = await req.json();

  const user = await User.findOne({
    where: {
      work_id,
    },
  });

  if (!user) return NextResponse.json(null);

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json(null);
  }
}
