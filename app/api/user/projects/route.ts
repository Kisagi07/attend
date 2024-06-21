import { NextResponse, NextRequest } from "next/server";
import { auth } from "../../auth/[...nextauth]/authConfig";
import prisma from "@/app/prisma";

const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const user = await prisma.users.findFirst({
    where: {
      work_id: session.user.work_id,
    },
    include: {
      projectsLed: {
        select: {
          title: true,
          fund: true,
          priority: true,
          status: true,
          projectMembers: {
            select: {
              name: true,
              id: true,
            },
          },
        },
        orderBy: {
          status: "asc",
        },
      },
      projectsMembered: {
        select: {
          title: true,
          fund: true,
          priority: true,
          status: true,
          projectLead: {
            select: {
              id: true,
              name: true,
            },
          },
          projectMembers: {
            select: {
              name: true,
              id: true,
            },
          },
        },
        orderBy: {
          status: "asc",
        },
      },
    },
  });

  if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

  return NextResponse.json({
    projectLeading: user.projectsLed,
    projectMembersOf: user.projectsMembered,
  });
};

export { GET };
