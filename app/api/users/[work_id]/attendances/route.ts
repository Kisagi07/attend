import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { monthNumberToWord } from "@/app/helper";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";
import { logs } from "@prisma/client";

const GET = async (
  req: NextRequest,
  { params }: { params: { work_id: string } }
): Promise<NextResponse> => {
  const session = auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) return NextResponse.json("User Not Found", { status: 404 });

  const logs = await prisma.logs.findMany({
    orderBy: {
      created_at: "desc",
    },
    where: {
      user_id: user.id,
    },
  });

  const groupedByMonth: { [key: string]: logs[] } = {};
  logs.forEach((log) => {
    const date = new Date(log.date!);
    const month = monthNumberToWord(date.getMonth());
    const year = date.getFullYear();
    if (Object.hasOwn(groupedByMonth, `${month} ${year}`)) {
      groupedByMonth[`${month} ${year}`].push(log);
    } else {
      groupedByMonth[`${month} ${year}`] = [log];
    }
  });
  return NextResponse.json(groupedByMonth);
};

export { GET };
