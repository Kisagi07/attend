
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  latitude: 'latitude',
  longitude: 'longitude',
  created_at: 'created_at',
  updated_at: 'updated_at',
  tolerance_active: 'tolerance_active',
  tolerance_time: 'tolerance_time'
};

exports.Prisma.DayOffRequestScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  requestDate: 'requestDate',
  leaveType: 'leaveType',
  status: 'status',
  comment: 'comment',
  leaveStartDate: 'leaveStartDate',
  leaveEndDate: 'leaveEndDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DrinkAndFoodCostScalarFieldEnum = {
  id: 'id',
  category: 'category',
  amount: 'amount',
  cost: 'cost',
  description: 'description',
  date: 'date',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HolidaysScalarFieldEnum = {
  id: 'id',
  date: 'date',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Job_positionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  shift_start: 'shift_start',
  shift_end: 'shift_end',
  created_at: 'created_at',
  updated_at: 'updated_at',
  work_day: 'work_day',
  salary: 'salary'
};

exports.Prisma.LogsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  user_id: 'user_id',
  date: 'date',
  clock_in_time: 'clock_in_time',
  clock_in_latitude: 'clock_in_latitude',
  clock_in_longitude: 'clock_in_longitude',
  created_at: 'created_at',
  updated_at: 'updated_at',
  work: 'work',
  clock_out_time: 'clock_out_time',
  clock_out_latitude: 'clock_out_latitude',
  clock_out_longitude: 'clock_out_longitude',
  isOverTime: 'isOverTime',
  afterHourOvertime: 'afterHourOvertime',
  clock_in_picture: 'clock_in_picture',
  clock_out_picture: 'clock_out_picture'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  fund: 'fund',
  title: 'title',
  status: 'status',
  priority: 'priority',
  projectLeadId: 'projectLeadId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectActivityScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  userId: 'userId',
  dateTime: 'dateTime',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectHistoryScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  userId: 'userId',
  dateTime: 'dateTime',
  description: 'description',
  file: 'file',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectSpendingScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  userId: 'userId',
  type: 'type',
  amount: 'amount',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TimelinesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password',
  work_id: 'work_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  role: 'role',
  job_position_id: 'job_position_id',
  home_latitude: 'home_latitude',
  home_longitude: 'home_longitude',
  gender: 'gender',
  profile_picture: 'profile_picture'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.DayOffRequestOrderByRelevanceFieldEnum = {
  leaveType: 'leaveType',
  comment: 'comment'
};

exports.Prisma.DrinkAndFoodCostOrderByRelevanceFieldEnum = {
  description: 'description'
};

exports.Prisma.holidaysOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.job_positionsOrderByRelevanceFieldEnum = {
  name: 'name',
  shift_start: 'shift_start',
  shift_end: 'shift_end',
  work_day: 'work_day'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.logsOrderByRelevanceFieldEnum = {
  clock_in_picture: 'clock_in_picture',
  clock_out_picture: 'clock_out_picture'
};

exports.Prisma.ProjectOrderByRelevanceFieldEnum = {
  title: 'title'
};

exports.Prisma.ProjectActivityOrderByRelevanceFieldEnum = {
  description: 'description'
};

exports.Prisma.ProjectHistoryOrderByRelevanceFieldEnum = {
  description: 'description',
  file: 'file'
};

exports.Prisma.ProjectSpendingOrderByRelevanceFieldEnum = {
  description: 'description'
};

exports.Prisma.timelinesOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  name: 'name',
  password: 'password',
  work_id: 'work_id',
  profile_picture: 'profile_picture'
};
exports.DayOffStatus = exports.$Enums.DayOffStatus = {
  approved: 'approved',
  pending: 'pending',
  rejected: 'rejected'
};

exports.DrinkAndFoodCostCategory = exports.$Enums.DrinkAndFoodCostCategory = {
  drink: 'drink',
  food: 'food'
};

exports.logs_type = exports.$Enums.logs_type = {
  work_from_home: 'work_from_home',
  sick: 'sick',
  work_from_office: 'work_from_office',
  special_attendance: 'special_attendance',
  on_site_work: 'on_site_work',
  non_schedule_overtime: 'non_schedule_overtime'
};

exports.ProjectStatus = exports.$Enums.ProjectStatus = {
  in_progress: 'in_progress',
  pending: 'pending',
  completed: 'completed'
};

exports.Priority = exports.$Enums.Priority = {
  low: 'low',
  normal: 'normal',
  high: 'high',
  urgent: 'urgent'
};

exports.SpendingType = exports.$Enums.SpendingType = {
  food: 'food',
  transportation: 'transportation',
  lodging: 'lodging',
  entertainment: 'entertainment'
};

exports.timelines_type = exports.$Enums.timelines_type = {
  changed: 'changed',
  removed: 'removed',
  new: 'new',
  updated: 'updated'
};

exports.users_role = exports.$Enums.users_role = {
  admin: 'admin',
  employee: 'employee',
  intern: 'intern',
  ex_employee: 'ex_employee',
  ex_intern: 'ex_intern'
};

exports.users_gender = exports.$Enums.users_gender = {
  male: 'male',
  female: 'female'
};

exports.Prisma.ModelName = {
  company: 'company',
  DayOffRequest: 'DayOffRequest',
  DrinkAndFoodCost: 'DrinkAndFoodCost',
  holidays: 'holidays',
  job_positions: 'job_positions',
  logs: 'logs',
  Project: 'Project',
  ProjectActivity: 'ProjectActivity',
  ProjectHistory: 'ProjectHistory',
  ProjectSpending: 'ProjectSpending',
  timelines: 'timelines',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
