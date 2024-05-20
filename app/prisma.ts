import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const LogWithUser = Prisma.validator<Prisma.logsDefaultArgs>()({
  include: {
    user: true,
  },
});

export type LogWithUser = Prisma.logsGetPayload<typeof LogWithUser>;

async () => {
  const logs = await prisma.logs.findMany({
    include: {
      user: true,
    },
  });
};

export default prisma;
