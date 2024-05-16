import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import { Holiday, Timeline } from "@/models";

const DELETE = async (req: NextRequest, { params }: { params: { id: number } }) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const holiday = await Holiday.findOne({ where: { id: params.id } });
  if (!holiday) {
    return NextResponse.json("Not Found", { status: 404 });
  }

  await holiday.destroy();

  await Timeline.create({
    title: "Holiday Deleted",
    description: `Holiday ${holiday.name} deleted on ${holiday.date}`,
  });

  return NextResponse.json("Deleted", { status: 200 });
};
export { DELETE };
