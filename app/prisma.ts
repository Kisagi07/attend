import { Prisma, PrismaClient, ProjectHistory, users, logs as Log } from "@prisma/client";
import { parseTime } from "@internationalized/date";

const prisma = new PrismaClient({
  omit: {
    users: {
      password: true,
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
  })
  .$extends({
    model: {
      projectHistory: {
        routeToAPI(history: ProjectHistory) {
          return {
            ...history,
            file: history.file ? `${process.env.APP_URL}/api/public${history.file}` : null,
          } as any;
        },
      },
    },
  })
  .$extends({
    name: "After hour overtime",
    client: {
      $totalOvertime: (
        logs: Log[],
        { unit }: { unit: "hour" | "minutes" } = { unit: "minutes" }
      ) => {
        // initialize total minutes
        let totalMinutes = 0;
        // loop through logs
        logs.forEach((log) => {
          // check if log are overtime day also clock out time are not null
          if (log.isOverTime && log.clock_out_time) {
            // parse clock in and out time
            const clockInTime = parseTime(
              (log.clock_in_time as unknown as string).split("T")[1].split(".")[0]
            );
            const clockOutTime = parseTime(
              (log.clock_out_time as unknown as string).split("T")[1].split(".")[0]
            );
            // calculate compare result
            const compareResult = clockOutTime.compare(clockInTime);
            // turn into minute
            const resultInMinute = compareResult / 1000 / 60;
            // add to total minutes
            totalMinutes += resultInMinute;
            return;
          }
          // check if log are after hour overtime
          if (log.afterHourOvertime) {
            // parse clock in and out time
            const clockInTime = parseTime(
              (log.clock_in_time as unknown as string).split("T")[1].split(".")[0]
            );
            const clockOutTime = parseTime(
              (log.clock_out_time as unknown as string).split("T")[1].split(".")[0]
            );
            // calculate compare result
            const compareResult = clockOutTime.compare(clockInTime);
            // turn into minute
            const resultInMinute = compareResult / 1000 / 60;
            // add to total minutes
            totalMinutes += resultInMinute;
            return;
          }
        });

        // determine return in hour or minute
        if (unit === "hour") {
          return totalMinutes / 60;
        } else {
          return totalMinutes;
        }
      },
    },
  });

// validators
// Logs
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

// Users
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

const UserOmitPassword = Prisma.validator<Prisma.usersDefaultArgs>()({
  omit: {
    password: true,
  },
});

// Day Off Requests
const DayOffRequestWithUser = Prisma.validator<Prisma.DayOffRequestDefaultArgs>()({
  include: {
    user: true,
  },
});

// Projects
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

// Activities
const ActivityWithUser = Prisma.validator<Prisma.ProjectActivityDefaultArgs>()({
  include: {
    user: true,
  },
});

// Histories
const HistoryWithUser = Prisma.validator<Prisma.ProjectHistoryDefaultArgs>()({
  include: {
    user: true,
  },
});

// Types from validator
export type LogWithUser = Prisma.logsGetPayload<typeof LogWithUser>;
export type LogWithUserWithJob = Prisma.logsGetPayload<typeof LogWithUserWithJob>;

export type UserJobExPassword = Prisma.usersGetPayload<typeof UserJobExPassword>;
export type UserWithJob = Prisma.usersGetPayload<typeof UserWithJob>;
export type UserOmitPassword = Prisma.usersGetPayload<typeof UserOmitPassword>;

export type DayOffRequestWithUser = Prisma.DayOffRequestGetPayload<typeof DayOffRequestWithUser>;

export type ProjectWithLeadWithJobAndMembers = Prisma.ProjectGetPayload<
  typeof ProjectWithLeadWithJobAndMembers
>;
export type ProjectWithMembers = Prisma.ProjectGetPayload<typeof ProjectWithMembers>;
export type ProjectWithLeadAndMembers = Prisma.ProjectGetPayload<typeof ProjectWithLeadAndMembers>;

export type ActivityWithUser = Prisma.ProjectActivityGetPayload<typeof ActivityWithUser>;
export type HistoryWithUser = Prisma.ProjectHistoryGetPayload<typeof HistoryWithUser>;

// Type results
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
  {
    include: {
      projectLead: true;
      projectMembers: true;
      activity: { include: { user: true } };
      histories: {
        include: {
          user: true;
        };
      };
      spendings: true;
    };
  },
  "findFirst"
>;

// Custom type with additional properties
export type withStatus = UserJobExPassword & {
  totalAbsent: number;
  totalWorkFromHome: number;
  totalWorkFromOffice: number;
  todayStatus: "work_from_home" | "work_from_office" | "sick" | "absent" | "work_with_duty";
};

async () => {
  const user = await prisma.users.findFirst({
    include: { job_position: true },
  });
};

export default prisma;
