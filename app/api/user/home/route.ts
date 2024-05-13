import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import { User } from "@/models";
import Timeline from "@/models/Timeline";

const PUT = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { latitude, longitude }: { latitude: number; longitude: number } =
    await req.json();
  if (!latitude || !longitude)
    return NextResponse.json("Invalid", { status: 422 });

  const user = await User.findOne({
    where: {
      work_id: session.user.work_id,
    },
  });

  if (!user) return NextResponse.json("Not Found", { status: 404 });

  await user.update({
    home_latitude: latitude,
    home_longitude: longitude,
  });

  await Timeline.create({
    title: "User Home Coordinate",
    description: `${user.name} has changed home coordinate`,
    type: "updated",
  });

  return NextResponse.json("Success");
};

export { PUT };
