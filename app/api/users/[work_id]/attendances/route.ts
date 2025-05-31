import { auth } from "@/app/api/auth/[...nextauth]/authConfig";
import { monthNumberToWord } from "@/app/helper";
import { NextRequest, NextResponse } from "next/server";
import prisma, { LogWithUserWithJob } from "@/app/prisma";
import { logs } from "generated/prisma";

const GET = async (req: NextRequest, props: { params: Promise<{ work_id: string }> }): Promise<NextResponse> => {
  const params = await props.params;
  const session = auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  const user = await prisma.users.findFirst({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) return NextResponse.json("User Not Found", { status: 404 });

  const logs = (await prisma.logs.findMany({
    orderBy: {
      created_at: "desc",
    },
    where: {
      user_id: user.id,
    },
    include: {
      user: {
        include: {
          job_position: true,
        },
      },
    },
  })) as LogWithUserWithJob[];

  const searchParams = req.nextUrl.searchParams;
  const grouped = searchParams.has("grouped");

  if(grouped) {
    const groupedByMonth: { [key: string]: LogWithUserWithJob[] } = {};
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
  }
  return NextResponse.json(logs);
};

export { GET };
