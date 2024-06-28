import { Prisma, PrismaClient, users } from "@prisma/client";

const prisma = new PrismaClient({
  omit: {
    users: {
      password: true,
    },
  },
})
  .$extends({
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
        totalLate: {
          compute(): number {
            return 0;
          },
        },
      },
    },
    model: {
      users: {
        excludePassword(user: users) {
          return Object.fromEntries(Object.entries(user).filter(([key]) => key !== "password"));
        },
      },
    },
  })
  .$extends({
    name: "api-profile-picture",
    result: {
      users: {
        api_profile_picture: {
          need: { profile_picture: true },
          compute(user) {
            return user.profile_picture
              ? `${process.env.APP_URL}/api/images${user.profile_picture}`
              : null;
          },
        },
      },
    },
  });
// validators
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

const LogWithUserWithJob = Prisma.validator<Prisma.logsDefaultArgs>()({
  include: {
    user: {
      include: {
        job_position: true,
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

const DayOffRequestWithUser = Prisma.validator<Prisma.DayOffRequestDefaultArgs>()({
  include: {
    user: true,
  },
});

const ProjectWithLeadWithJobAndMembers = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    projectLead: {
      include: {
        job_position: true,
      },
    },
    projectMembers: true,
  },
});

const ProjectWithMembers = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    projectMembers: true,
  },
});

const ProjectWithLeadAndMembers = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    projectLead: true,
    projectMembers: true,
  },
});

// activities
const ActivityWithUser = Prisma.validator<Prisma.ProjectActivityDefaultArgs>()({
  include: {
    user: true,
  },
});

// types from validator
export type LogWithUserWithJob = Prisma.logsGetPayload<typeof LogWithUserWithJob>;

export type DayOffRequestWithUser = Prisma.DayOffRequestGetPayload<typeof DayOffRequestWithUser>;
export type LogWithUser = Prisma.logsGetPayload<typeof LogWithUser>;
export type UserJobExPassword = Prisma.usersGetPayload<typeof UserJobExPassword>;
export type UserWithJob = Prisma.usersGetPayload<typeof UserWithJob>;

export type withStatus = UserJobExPassword & {
  totalAbsent: number;
  totalWorkFromHome: number;
  totalWorkFromOffice: number;
  todayStatus: "work_from_home" | "work_from_office" | "sick" | "absent" | "work_with_duty";
};

export type ProjectWithLeadWithJobAndMembers = Prisma.ProjectGetPayload<
  typeof ProjectWithLeadWithJobAndMembers
>;

export type ProjectWithMembers = Prisma.ProjectGetPayload<typeof ProjectWithMembers>;
export type ProjectWithLeadAndMembers = Prisma.ProjectGetPayload<typeof ProjectWithLeadAndMembers>;

// activities
export type ActivityWithUser = Prisma.ProjectActivityGetPayload<typeof ActivityWithUser>;
// type results

export type UserApiProfile = Prisma.Result<
  typeof prisma.users,
  {
    select: {
      name: true;
      work_id: true;
      home_latitude: true;
      home_longitude: true;
      id: true;
      role: true;
      job_position_id: true;
      api_profile_picture: true;
      profile_picture: true;
      created_at: true;
      updated_at: true;
      job_position: true;
    };
  },
  "findFirst"
>;
export type UserResultMany = Prisma.Result<
  typeof prisma.users,
  {
    include: {
      job_position: true;
    };
  },
  "findMany"
>;

export type UserResultFirst = Prisma.Result<
  typeof prisma.users,
  {
    include: {
      job_position: true;
    };
  },
  "findFirstOrThrow"
>;

export type UserResult = Prisma.Result<typeof prisma.users, {}, "findFirst">;

export type ProjectResult = Prisma.Result<
  typeof prisma.project,
  { include: { projectLead: true; projectMembers: true; activity: { include: { user: true } } } },
  "findFirst"
>;

async () => {
  const user = await prisma.users.findFirst({
    include: { job_position: true },
  });
};

export default prisma;
