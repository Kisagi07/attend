import { Prisma, PrismaClient, logs } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  name: "status",
  result: {
    users: {
      totalAbsent: {
        compute(): number {
          return 0;
        },
      },
      totalWorkFromHome: {
        compute(): number {
          return 0;
        },
      },
      totalWorkFromOffice: {
        compute(): number {
          return 0;
        },
      },
      todayStatus: {
        compute(): string {
          return "absent";
        },
      },
    },
    logs: {
      works: {
        needs: { work: true },
        compute(log) {
          return log.work ? JSON.parse(log.work) : [];
        },
      },
    },
  },
});

const LogWithUser = Prisma.validator<Prisma.logsDefaultArgs>()({
  select: {
    date: true,
    work: true,
    clock_in_latitude: true,
    clock_in_longitude: true,
    clock_out_latitude: true,
    clock_out_longitude: true,
    clock_in_time: true,
    clock_out_time: true,
    type: true,
    created_at: true,
    updated_at: true,
    user_id: true,
    user: {
      select: {
        name: true,
        work_id: true,
        role: true,
        tolerance_active: true,
        tolerance_time: true,
        updated_at: true,
        created_at: true,
      },
    },
  },
});

const UserJobExPassword = Prisma.validator<Prisma.usersDefaultArgs>()({
  select: {
    job_position: true,
    name: true,
    work_id: true,
    role: true,
    job_position_id: true,
    created_at: true,
    updated_at: true,
    id: true,
  },
});

export type LogWithUser = Prisma.logsGetPayload<typeof LogWithUser>;
export type UserJobExPassword = Prisma.usersGetPayload<typeof UserJobExPassword>;

async () => {
  const logs = await prisma.users.findMany({
    select: {},
  });
};

export default prisma;
