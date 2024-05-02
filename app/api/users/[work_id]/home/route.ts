import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models";
export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const session = await auth();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { latitude, longitude }: { latitude: number; longitude: number } = await req.json();
  if (!latitude || !longitude) return NextResponse.json("Invalid", { status: 422 });

  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user) return NextResponse.json("Not Found", { status: 404 });

  await user.update({
    home_latitude: latitude,
    home_longitude: longitude,
  });

  return NextResponse.json("Success");
}
