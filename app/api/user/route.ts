import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/auth";
import { JobPosition, User } from "@/models";

const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const user = await User.findOne({
    where: {
      work_id: session.user.work_id,
    },
    include: [
      {
        model: JobPosition,
      },
    ],
    attributes: [
      "name",
      "work_id",
      "home_latitude",
      "home_longitude",
      "id",
      "role",
      "job_position_id",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!user) return NextResponse.json(null);

  return NextResponse.json(user);
};

export { GET };
