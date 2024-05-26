import { Prisma, PrismaClient, users } from "@prisma/client";

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
  },
  model: {
    users: {
      excludePassword(user: users) {
        return Object.fromEntries(
          Object.entries(user).filter(([key]) => key !== "password")
        );
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
    gender: true,
  },
});

const UserWithJob = Prisma.validator<Prisma.usersDefaultArgs>()({
  include: {
    job_position: true,
  },
});

export type LogWithUser = Prisma.logsGetPayload<typeof LogWithUser>;
export type UserJobExPassword = Prisma.usersGetPayload<
  typeof UserJobExPassword
>;
export type UserWithJob = Prisma.usersGetPayload<typeof UserWithJob>;

export type withStatus = UserJobExPassword & {
  totalAbsent: number;
  totalWorkFromHome: number;
  totalWorkFromOffice: number;
  todayStatus: "work_from_home" | "work_from_office" | "sick" | "absent";
};

async () => {
  const user = await prisma.users.findFirst({
    include: { job_position: true },
  });
};

export default prisma;
