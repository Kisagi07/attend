import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/auth";
import { Holiday } from "@/models";

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
  return NextResponse.json("Deleted", { status: 200 });
};
export { DELETE };
