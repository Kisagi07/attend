import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";
import prisma from "@/app/prisma";

const DELETE = async (req: NextRequest, props: { params: Promise<{ id: number }> }) => {
  const params = await props.params;
  const session = await auth();
  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  // const holiday = await Holiday.findOne({ where: { id: params.id } });
  const holiday = await prisma.holidays.findFirst({ where: { id: Number(params.id) } });
  if (!holiday) {
    return NextResponse.json("Not Found", { status: 404 });
  }

  const deleted = await prisma.holidays.delete({
    where: { id: Number(params.id) },
  });

  await prisma.timelines.create({
    data: {
      title: "Holiday Deleted",
      description: `Holiday ${holiday.name} deleted on ${holiday.date}`,
      type: "removed",
    },
  });

  return NextResponse.json({ message: "Deleted", data: deleted }, { status: 200 });
};
export { DELETE };
