import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

import prisma from "@/app/prisma";

export default async function getUser() {
  const session = await auth();

  const user = await prisma.users.findFirst({
    where: {
      work_id: session?.user.work_id,
    },
    include: {
      job_position: true,
    },
  });

  return user;
}
