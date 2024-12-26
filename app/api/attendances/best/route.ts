import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";

const GET = async (req: NextRequest) => {
  // fetch users with `logs` and `job_position`
  const users = await prisma.users.findMany({
    include: {
      logs: {
        where: {
            
        }
      },
      job_position: true,
    },
  });

  // return
  return NextResponse.json(users);
};

export { GET };
