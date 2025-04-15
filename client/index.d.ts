
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model DayOffRequest
 * 
 */
export type DayOffRequest = $Result.DefaultSelection<Prisma.$DayOffRequestPayload>
/**
 * Model DrinkAndFoodCost
 * 
 */
export type DrinkAndFoodCost = $Result.DefaultSelection<Prisma.$DrinkAndFoodCostPayload>
/**
 * Model holidays
 * 
 */
export type holidays = $Result.DefaultSelection<Prisma.$holidaysPayload>
/**
 * Model job_positions
 * 
 */
export type job_positions = $Result.DefaultSelection<Prisma.$job_positionsPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectActivity
 * 
 */
export type ProjectActivity = $Result.DefaultSelection<Prisma.$ProjectActivityPayload>
/**
 * Model ProjectHistory
 * 
 */
export type ProjectHistory = $Result.DefaultSelection<Prisma.$ProjectHistoryPayload>
/**
 * Model ProjectSpending
 * 
 */
export type ProjectSpending = $Result.DefaultSelection<Prisma.$ProjectSpendingPayload>
/**
 * Model timelines
 * 
 */
export type timelines = $Result.DefaultSelection<Prisma.$timelinesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DayOffStatus: {
  approved: 'approved',
  pending: 'pending',
  rejected: 'rejected'
};

export type DayOffStatus = (typeof DayOffStatus)[keyof typeof DayOffStatus]


export const DrinkAndFoodCostCategory: {
  drink: 'drink',
  food: 'food'
};

export type DrinkAndFoodCostCategory = (typeof DrinkAndFoodCostCategory)[keyof typeof DrinkAndFoodCostCategory]


export const logs_type: {
  work_from_home: 'work_from_home',
  sick: 'sick',
  work_from_office: 'work_from_office',
  special_attendance: 'special_attendance',
  on_site_work: 'on_site_work',
  non_schedule_overtime: 'non_schedule_overtime'
};

export type logs_type = (typeof logs_type)[keyof typeof logs_type]


export const SpendingType: {
  food: 'food',
  transportation: 'transportation',
  lodging: 'lodging',
  entertainment: 'entertainment'
};

export type SpendingType = (typeof SpendingType)[keyof typeof SpendingType]


export const ProjectStatus: {
  in_progress: 'in_progress',
  pending: 'pending',
  completed: 'completed'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const Priority: {
  low: 'low',
  normal: 'normal',
  high: 'high',
  urgent: 'urgent'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const timelines_type: {
  changed: 'changed',
  removed: 'removed',
  new: 'new',
  updated: 'updated'
};

export type timelines_type = (typeof timelines_type)[keyof typeof timelines_type]


export const users_role: {
  admin: 'admin',
  employee: 'employee',
  intern: 'intern',
  ex_employee: 'ex_employee',
  ex_intern: 'ex_intern'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const users_gender: {
  male: 'male',
  female: 'female'
};

export type users_gender = (typeof users_gender)[keyof typeof users_gender]

}

export type DayOffStatus = $Enums.DayOffStatus

export const DayOffStatus: typeof $Enums.DayOffStatus

export type DrinkAndFoodCostCategory = $Enums.DrinkAndFoodCostCategory

export const DrinkAndFoodCostCategory: typeof $Enums.DrinkAndFoodCostCategory

export type logs_type = $Enums.logs_type

export const logs_type: typeof $Enums.logs_type

export type SpendingType = $Enums.SpendingType

export const SpendingType: typeof $Enums.SpendingType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type timelines_type = $Enums.timelines_type

export const timelines_type: typeof $Enums.timelines_type

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type users_gender = $Enums.users_gender

export const users_gender: typeof $Enums.users_gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dayOffRequest`: Exposes CRUD operations for the **DayOffRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayOffRequests
    * const dayOffRequests = await prisma.dayOffRequest.findMany()
    * ```
    */
  get dayOffRequest(): Prisma.DayOffRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drinkAndFoodCost`: Exposes CRUD operations for the **DrinkAndFoodCost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrinkAndFoodCosts
    * const drinkAndFoodCosts = await prisma.drinkAndFoodCost.findMany()
    * ```
    */
  get drinkAndFoodCost(): Prisma.DrinkAndFoodCostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holidays`: Exposes CRUD operations for the **holidays** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holidays.findMany()
    * ```
    */
  get holidays(): Prisma.holidaysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_positions`: Exposes CRUD operations for the **job_positions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_positions
    * const job_positions = await prisma.job_positions.findMany()
    * ```
    */
  get job_positions(): Prisma.job_positionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectActivity`: Exposes CRUD operations for the **ProjectActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectActivities
    * const projectActivities = await prisma.projectActivity.findMany()
    * ```
    */
  get projectActivity(): Prisma.ProjectActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectHistory`: Exposes CRUD operations for the **ProjectHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectHistories
    * const projectHistories = await prisma.projectHistory.findMany()
    * ```
    */
  get projectHistory(): Prisma.ProjectHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSpending`: Exposes CRUD operations for the **ProjectSpending** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSpendings
    * const projectSpendings = await prisma.projectSpending.findMany()
    * ```
    */
  get projectSpending(): Prisma.ProjectSpendingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timelines`: Exposes CRUD operations for the **timelines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timelines.findMany()
    * ```
    */
  get timelines(): Prisma.timelinesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "dayOffRequest" | "drinkAndFoodCost" | "holidays" | "job_positions" | "logs" | "project" | "projectActivity" | "projectHistory" | "projectSpending" | "timelines" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      DayOffRequest: {
        payload: Prisma.$DayOffRequestPayload<ExtArgs>
        fields: Prisma.DayOffRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayOffRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayOffRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          findFirst: {
            args: Prisma.DayOffRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayOffRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          findMany: {
            args: Prisma.DayOffRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>[]
          }
          create: {
            args: Prisma.DayOffRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          createMany: {
            args: Prisma.DayOffRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DayOffRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          update: {
            args: Prisma.DayOffRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          deleteMany: {
            args: Prisma.DayOffRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayOffRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DayOffRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayOffRequestPayload>
          }
          aggregate: {
            args: Prisma.DayOffRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayOffRequest>
          }
          groupBy: {
            args: Prisma.DayOffRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayOffRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayOffRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DayOffRequestCountAggregateOutputType> | number
          }
        }
      }
      DrinkAndFoodCost: {
        payload: Prisma.$DrinkAndFoodCostPayload<ExtArgs>
        fields: Prisma.DrinkAndFoodCostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrinkAndFoodCostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrinkAndFoodCostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          findFirst: {
            args: Prisma.DrinkAndFoodCostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrinkAndFoodCostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          findMany: {
            args: Prisma.DrinkAndFoodCostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>[]
          }
          create: {
            args: Prisma.DrinkAndFoodCostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          createMany: {
            args: Prisma.DrinkAndFoodCostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DrinkAndFoodCostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          update: {
            args: Prisma.DrinkAndFoodCostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          deleteMany: {
            args: Prisma.DrinkAndFoodCostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrinkAndFoodCostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DrinkAndFoodCostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkAndFoodCostPayload>
          }
          aggregate: {
            args: Prisma.DrinkAndFoodCostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrinkAndFoodCost>
          }
          groupBy: {
            args: Prisma.DrinkAndFoodCostGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinkAndFoodCostGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrinkAndFoodCostCountArgs<ExtArgs>
            result: $Utils.Optional<DrinkAndFoodCostCountAggregateOutputType> | number
          }
        }
      }
      holidays: {
        payload: Prisma.$holidaysPayload<ExtArgs>
        fields: Prisma.holidaysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.holidaysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.holidaysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          findFirst: {
            args: Prisma.holidaysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.holidaysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          findMany: {
            args: Prisma.holidaysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>[]
          }
          create: {
            args: Prisma.holidaysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          createMany: {
            args: Prisma.holidaysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.holidaysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          update: {
            args: Prisma.holidaysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          deleteMany: {
            args: Prisma.holidaysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.holidaysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.holidaysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidaysPayload>
          }
          aggregate: {
            args: Prisma.HolidaysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHolidays>
          }
          groupBy: {
            args: Prisma.holidaysGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidaysGroupByOutputType>[]
          }
          count: {
            args: Prisma.holidaysCountArgs<ExtArgs>
            result: $Utils.Optional<HolidaysCountAggregateOutputType> | number
          }
        }
      }
      job_positions: {
        payload: Prisma.$job_positionsPayload<ExtArgs>
        fields: Prisma.job_positionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_positionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_positionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          findFirst: {
            args: Prisma.job_positionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_positionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          findMany: {
            args: Prisma.job_positionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>[]
          }
          create: {
            args: Prisma.job_positionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          createMany: {
            args: Prisma.job_positionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.job_positionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          update: {
            args: Prisma.job_positionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          deleteMany: {
            args: Prisma.job_positionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_positionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.job_positionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_positionsPayload>
          }
          aggregate: {
            args: Prisma.Job_positionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_positions>
          }
          groupBy: {
            args: Prisma.job_positionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_positionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_positionsCountArgs<ExtArgs>
            result: $Utils.Optional<Job_positionsCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectActivity: {
        payload: Prisma.$ProjectActivityPayload<ExtArgs>
        fields: Prisma.ProjectActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findFirst: {
            args: Prisma.ProjectActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findMany: {
            args: Prisma.ProjectActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>[]
          }
          create: {
            args: Prisma.ProjectActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          createMany: {
            args: Prisma.ProjectActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          update: {
            args: Prisma.ProjectActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          deleteMany: {
            args: Prisma.ProjectActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          aggregate: {
            args: Prisma.ProjectActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectActivity>
          }
          groupBy: {
            args: Prisma.ProjectActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectActivityCountAggregateOutputType> | number
          }
        }
      }
      ProjectHistory: {
        payload: Prisma.$ProjectHistoryPayload<ExtArgs>
        fields: Prisma.ProjectHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProjectHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          findMany: {
            args: Prisma.ProjectHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>[]
          }
          create: {
            args: Prisma.ProjectHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          createMany: {
            args: Prisma.ProjectHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          update: {
            args: Prisma.ProjectHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProjectHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectHistory>
          }
          groupBy: {
            args: Prisma.ProjectHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectHistoryCountAggregateOutputType> | number
          }
        }
      }
      ProjectSpending: {
        payload: Prisma.$ProjectSpendingPayload<ExtArgs>
        fields: Prisma.ProjectSpendingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSpendingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSpendingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          findFirst: {
            args: Prisma.ProjectSpendingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSpendingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          findMany: {
            args: Prisma.ProjectSpendingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>[]
          }
          create: {
            args: Prisma.ProjectSpendingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          createMany: {
            args: Prisma.ProjectSpendingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectSpendingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          update: {
            args: Prisma.ProjectSpendingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSpendingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSpendingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectSpendingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSpendingPayload>
          }
          aggregate: {
            args: Prisma.ProjectSpendingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSpending>
          }
          groupBy: {
            args: Prisma.ProjectSpendingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSpendingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSpendingCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSpendingCountAggregateOutputType> | number
          }
        }
      }
      timelines: {
        payload: Prisma.$timelinesPayload<ExtArgs>
        fields: Prisma.timelinesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.timelinesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.timelinesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          findFirst: {
            args: Prisma.timelinesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.timelinesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          findMany: {
            args: Prisma.timelinesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>[]
          }
          create: {
            args: Prisma.timelinesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          createMany: {
            args: Prisma.timelinesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.timelinesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          update: {
            args: Prisma.timelinesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          deleteMany: {
            args: Prisma.timelinesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.timelinesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.timelinesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$timelinesPayload>
          }
          aggregate: {
            args: Prisma.TimelinesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelines>
          }
          groupBy: {
            args: Prisma.timelinesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelinesGroupByOutputType>[]
          }
          count: {
            args: Prisma.timelinesCountArgs<ExtArgs>
            result: $Utils.Optional<TimelinesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: companyOmit
    dayOffRequest?: DayOffRequestOmit
    drinkAndFoodCost?: DrinkAndFoodCostOmit
    holidays?: holidaysOmit
    job_positions?: job_positionsOmit
    logs?: logsOmit
    project?: ProjectOmit
    projectActivity?: ProjectActivityOmit
    projectHistory?: ProjectHistoryOmit
    projectSpending?: ProjectSpendingOmit
    timelines?: timelinesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Job_positionsCountOutputType
   */

  export type Job_positionsCountOutputType = {
    users: number
  }

  export type Job_positionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Job_positionsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Job_positionsCountOutputType without action
   */
  export type Job_positionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_positionsCountOutputType
     */
    select?: Job_positionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Job_positionsCountOutputType without action
   */
  export type Job_positionsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectMembers: number
    activity: number
    histories: number
    spendings: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectMembers?: boolean | ProjectCountOutputTypeCountProjectMembersArgs
    activity?: boolean | ProjectCountOutputTypeCountActivityArgs
    histories?: boolean | ProjectCountOutputTypeCountHistoriesArgs
    spendings?: boolean | ProjectCountOutputTypeCountSpendingsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectHistoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSpendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSpendingWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    logs: number
    dayOffRequests: number
    projectsLed: number
    projectsMembered: number
    projectActivity: number
    projectHistories: number
    projectSpendings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UsersCountOutputTypeCountLogsArgs
    dayOffRequests?: boolean | UsersCountOutputTypeCountDayOffRequestsArgs
    projectsLed?: boolean | UsersCountOutputTypeCountProjectsLedArgs
    projectsMembered?: boolean | UsersCountOutputTypeCountProjectsMemberedArgs
    projectActivity?: boolean | UsersCountOutputTypeCountProjectActivityArgs
    projectHistories?: boolean | UsersCountOutputTypeCountProjectHistoriesArgs
    projectSpendings?: boolean | UsersCountOutputTypeCountProjectSpendingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDayOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayOffRequestWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsMemberedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectHistoryWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectSpendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSpendingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    tolerance_time: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    tolerance_time: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    tolerance_active: boolean | null
    tolerance_time: number | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    tolerance_active: boolean | null
    tolerance_time: number | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    tolerance_active: number
    tolerance_time: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    tolerance_time?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    tolerance_time?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    tolerance_active?: true
    tolerance_time?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    tolerance_active?: true
    tolerance_time?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    tolerance_active?: true
    tolerance_time?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    latitude: Decimal
    longitude: Decimal
    created_at: Date
    updated_at: Date
    tolerance_active: boolean | null
    tolerance_time: number
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    tolerance_active?: boolean
    tolerance_time?: boolean
  }, ExtArgs["result"]["company"]>



  export type companySelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    tolerance_active?: boolean
    tolerance_time?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "created_at" | "updated_at" | "tolerance_active" | "tolerance_time", ExtArgs["result"]["company"]>

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      created_at: Date
      updated_at: Date
      tolerance_active: boolean | null
      tolerance_time: number
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'Int'>
    readonly latitude: FieldRef<"company", 'Decimal'>
    readonly longitude: FieldRef<"company", 'Decimal'>
    readonly created_at: FieldRef<"company", 'DateTime'>
    readonly updated_at: FieldRef<"company", 'DateTime'>
    readonly tolerance_active: FieldRef<"company", 'Boolean'>
    readonly tolerance_time: FieldRef<"company", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
  }


  /**
   * Model DayOffRequest
   */

  export type AggregateDayOffRequest = {
    _count: DayOffRequestCountAggregateOutputType | null
    _avg: DayOffRequestAvgAggregateOutputType | null
    _sum: DayOffRequestSumAggregateOutputType | null
    _min: DayOffRequestMinAggregateOutputType | null
    _max: DayOffRequestMaxAggregateOutputType | null
  }

  export type DayOffRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DayOffRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DayOffRequestMinAggregateOutputType = {
    id: number | null
    userId: number | null
    requestDate: Date | null
    leaveType: string | null
    status: $Enums.DayOffStatus | null
    comment: string | null
    leaveStartDate: Date | null
    leaveEndDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayOffRequestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    requestDate: Date | null
    leaveType: string | null
    status: $Enums.DayOffStatus | null
    comment: string | null
    leaveStartDate: Date | null
    leaveEndDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayOffRequestCountAggregateOutputType = {
    id: number
    userId: number
    requestDate: number
    leaveType: number
    status: number
    comment: number
    leaveStartDate: number
    leaveEndDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DayOffRequestAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DayOffRequestSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DayOffRequestMinAggregateInputType = {
    id?: true
    userId?: true
    requestDate?: true
    leaveType?: true
    status?: true
    comment?: true
    leaveStartDate?: true
    leaveEndDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayOffRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    requestDate?: true
    leaveType?: true
    status?: true
    comment?: true
    leaveStartDate?: true
    leaveEndDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayOffRequestCountAggregateInputType = {
    id?: true
    userId?: true
    requestDate?: true
    leaveType?: true
    status?: true
    comment?: true
    leaveStartDate?: true
    leaveEndDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DayOffRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayOffRequest to aggregate.
     */
    where?: DayOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOffRequests to fetch.
     */
    orderBy?: DayOffRequestOrderByWithRelationInput | DayOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayOffRequests
    **/
    _count?: true | DayOffRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayOffRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayOffRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayOffRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayOffRequestMaxAggregateInputType
  }

  export type GetDayOffRequestAggregateType<T extends DayOffRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDayOffRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayOffRequest[P]>
      : GetScalarType<T[P], AggregateDayOffRequest[P]>
  }




  export type DayOffRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayOffRequestWhereInput
    orderBy?: DayOffRequestOrderByWithAggregationInput | DayOffRequestOrderByWithAggregationInput[]
    by: DayOffRequestScalarFieldEnum[] | DayOffRequestScalarFieldEnum
    having?: DayOffRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayOffRequestCountAggregateInputType | true
    _avg?: DayOffRequestAvgAggregateInputType
    _sum?: DayOffRequestSumAggregateInputType
    _min?: DayOffRequestMinAggregateInputType
    _max?: DayOffRequestMaxAggregateInputType
  }

  export type DayOffRequestGroupByOutputType = {
    id: number
    userId: number
    requestDate: Date
    leaveType: string
    status: $Enums.DayOffStatus
    comment: string | null
    leaveStartDate: Date
    leaveEndDate: Date
    createdAt: Date
    updatedAt: Date
    _count: DayOffRequestCountAggregateOutputType | null
    _avg: DayOffRequestAvgAggregateOutputType | null
    _sum: DayOffRequestSumAggregateOutputType | null
    _min: DayOffRequestMinAggregateOutputType | null
    _max: DayOffRequestMaxAggregateOutputType | null
  }

  type GetDayOffRequestGroupByPayload<T extends DayOffRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayOffRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayOffRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayOffRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DayOffRequestGroupByOutputType[P]>
        }
      >
    >


  export type DayOffRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestDate?: boolean
    leaveType?: boolean
    status?: boolean
    comment?: boolean
    leaveStartDate?: boolean
    leaveEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dayOffRequest"]>



  export type DayOffRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    requestDate?: boolean
    leaveType?: boolean
    status?: boolean
    comment?: boolean
    leaveStartDate?: boolean
    leaveEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DayOffRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "requestDate" | "leaveType" | "status" | "comment" | "leaveStartDate" | "leaveEndDate" | "createdAt" | "updatedAt", ExtArgs["result"]["dayOffRequest"]>
  export type DayOffRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $DayOffRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayOffRequest"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      requestDate: Date
      leaveType: string
      status: $Enums.DayOffStatus
      comment: string | null
      leaveStartDate: Date
      leaveEndDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dayOffRequest"]>
    composites: {}
  }

  type DayOffRequestGetPayload<S extends boolean | null | undefined | DayOffRequestDefaultArgs> = $Result.GetResult<Prisma.$DayOffRequestPayload, S>

  type DayOffRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayOffRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayOffRequestCountAggregateInputType | true
    }

  export interface DayOffRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayOffRequest'], meta: { name: 'DayOffRequest' } }
    /**
     * Find zero or one DayOffRequest that matches the filter.
     * @param {DayOffRequestFindUniqueArgs} args - Arguments to find a DayOffRequest
     * @example
     * // Get one DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayOffRequestFindUniqueArgs>(args: SelectSubset<T, DayOffRequestFindUniqueArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DayOffRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayOffRequestFindUniqueOrThrowArgs} args - Arguments to find a DayOffRequest
     * @example
     * // Get one DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayOffRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DayOffRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayOffRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestFindFirstArgs} args - Arguments to find a DayOffRequest
     * @example
     * // Get one DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayOffRequestFindFirstArgs>(args?: SelectSubset<T, DayOffRequestFindFirstArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DayOffRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestFindFirstOrThrowArgs} args - Arguments to find a DayOffRequest
     * @example
     * // Get one DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayOffRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DayOffRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DayOffRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayOffRequests
     * const dayOffRequests = await prisma.dayOffRequest.findMany()
     * 
     * // Get first 10 DayOffRequests
     * const dayOffRequests = await prisma.dayOffRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayOffRequestWithIdOnly = await prisma.dayOffRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayOffRequestFindManyArgs>(args?: SelectSubset<T, DayOffRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DayOffRequest.
     * @param {DayOffRequestCreateArgs} args - Arguments to create a DayOffRequest.
     * @example
     * // Create one DayOffRequest
     * const DayOffRequest = await prisma.dayOffRequest.create({
     *   data: {
     *     // ... data to create a DayOffRequest
     *   }
     * })
     * 
     */
    create<T extends DayOffRequestCreateArgs>(args: SelectSubset<T, DayOffRequestCreateArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DayOffRequests.
     * @param {DayOffRequestCreateManyArgs} args - Arguments to create many DayOffRequests.
     * @example
     * // Create many DayOffRequests
     * const dayOffRequest = await prisma.dayOffRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayOffRequestCreateManyArgs>(args?: SelectSubset<T, DayOffRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DayOffRequest.
     * @param {DayOffRequestDeleteArgs} args - Arguments to delete one DayOffRequest.
     * @example
     * // Delete one DayOffRequest
     * const DayOffRequest = await prisma.dayOffRequest.delete({
     *   where: {
     *     // ... filter to delete one DayOffRequest
     *   }
     * })
     * 
     */
    delete<T extends DayOffRequestDeleteArgs>(args: SelectSubset<T, DayOffRequestDeleteArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DayOffRequest.
     * @param {DayOffRequestUpdateArgs} args - Arguments to update one DayOffRequest.
     * @example
     * // Update one DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayOffRequestUpdateArgs>(args: SelectSubset<T, DayOffRequestUpdateArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DayOffRequests.
     * @param {DayOffRequestDeleteManyArgs} args - Arguments to filter DayOffRequests to delete.
     * @example
     * // Delete a few DayOffRequests
     * const { count } = await prisma.dayOffRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayOffRequestDeleteManyArgs>(args?: SelectSubset<T, DayOffRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayOffRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayOffRequests
     * const dayOffRequest = await prisma.dayOffRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayOffRequestUpdateManyArgs>(args: SelectSubset<T, DayOffRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DayOffRequest.
     * @param {DayOffRequestUpsertArgs} args - Arguments to update or create a DayOffRequest.
     * @example
     * // Update or create a DayOffRequest
     * const dayOffRequest = await prisma.dayOffRequest.upsert({
     *   create: {
     *     // ... data to create a DayOffRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayOffRequest we want to update
     *   }
     * })
     */
    upsert<T extends DayOffRequestUpsertArgs>(args: SelectSubset<T, DayOffRequestUpsertArgs<ExtArgs>>): Prisma__DayOffRequestClient<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DayOffRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestCountArgs} args - Arguments to filter DayOffRequests to count.
     * @example
     * // Count the number of DayOffRequests
     * const count = await prisma.dayOffRequest.count({
     *   where: {
     *     // ... the filter for the DayOffRequests we want to count
     *   }
     * })
    **/
    count<T extends DayOffRequestCountArgs>(
      args?: Subset<T, DayOffRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayOffRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayOffRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayOffRequestAggregateArgs>(args: Subset<T, DayOffRequestAggregateArgs>): Prisma.PrismaPromise<GetDayOffRequestAggregateType<T>>

    /**
     * Group by DayOffRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayOffRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayOffRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayOffRequestGroupByArgs['orderBy'] }
        : { orderBy?: DayOffRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayOffRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayOffRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayOffRequest model
   */
  readonly fields: DayOffRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayOffRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayOffRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DayOffRequest model
   */
  interface DayOffRequestFieldRefs {
    readonly id: FieldRef<"DayOffRequest", 'Int'>
    readonly userId: FieldRef<"DayOffRequest", 'Int'>
    readonly requestDate: FieldRef<"DayOffRequest", 'DateTime'>
    readonly leaveType: FieldRef<"DayOffRequest", 'String'>
    readonly status: FieldRef<"DayOffRequest", 'DayOffStatus'>
    readonly comment: FieldRef<"DayOffRequest", 'String'>
    readonly leaveStartDate: FieldRef<"DayOffRequest", 'DateTime'>
    readonly leaveEndDate: FieldRef<"DayOffRequest", 'DateTime'>
    readonly createdAt: FieldRef<"DayOffRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"DayOffRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DayOffRequest findUnique
   */
  export type DayOffRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which DayOffRequest to fetch.
     */
    where: DayOffRequestWhereUniqueInput
  }

  /**
   * DayOffRequest findUniqueOrThrow
   */
  export type DayOffRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which DayOffRequest to fetch.
     */
    where: DayOffRequestWhereUniqueInput
  }

  /**
   * DayOffRequest findFirst
   */
  export type DayOffRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which DayOffRequest to fetch.
     */
    where?: DayOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOffRequests to fetch.
     */
    orderBy?: DayOffRequestOrderByWithRelationInput | DayOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayOffRequests.
     */
    cursor?: DayOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayOffRequests.
     */
    distinct?: DayOffRequestScalarFieldEnum | DayOffRequestScalarFieldEnum[]
  }

  /**
   * DayOffRequest findFirstOrThrow
   */
  export type DayOffRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which DayOffRequest to fetch.
     */
    where?: DayOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOffRequests to fetch.
     */
    orderBy?: DayOffRequestOrderByWithRelationInput | DayOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayOffRequests.
     */
    cursor?: DayOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOffRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayOffRequests.
     */
    distinct?: DayOffRequestScalarFieldEnum | DayOffRequestScalarFieldEnum[]
  }

  /**
   * DayOffRequest findMany
   */
  export type DayOffRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter, which DayOffRequests to fetch.
     */
    where?: DayOffRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayOffRequests to fetch.
     */
    orderBy?: DayOffRequestOrderByWithRelationInput | DayOffRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayOffRequests.
     */
    cursor?: DayOffRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayOffRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayOffRequests.
     */
    skip?: number
    distinct?: DayOffRequestScalarFieldEnum | DayOffRequestScalarFieldEnum[]
  }

  /**
   * DayOffRequest create
   */
  export type DayOffRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DayOffRequest.
     */
    data: XOR<DayOffRequestCreateInput, DayOffRequestUncheckedCreateInput>
  }

  /**
   * DayOffRequest createMany
   */
  export type DayOffRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayOffRequests.
     */
    data: DayOffRequestCreateManyInput | DayOffRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayOffRequest update
   */
  export type DayOffRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DayOffRequest.
     */
    data: XOR<DayOffRequestUpdateInput, DayOffRequestUncheckedUpdateInput>
    /**
     * Choose, which DayOffRequest to update.
     */
    where: DayOffRequestWhereUniqueInput
  }

  /**
   * DayOffRequest updateMany
   */
  export type DayOffRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayOffRequests.
     */
    data: XOR<DayOffRequestUpdateManyMutationInput, DayOffRequestUncheckedUpdateManyInput>
    /**
     * Filter which DayOffRequests to update
     */
    where?: DayOffRequestWhereInput
    /**
     * Limit how many DayOffRequests to update.
     */
    limit?: number
  }

  /**
   * DayOffRequest upsert
   */
  export type DayOffRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DayOffRequest to update in case it exists.
     */
    where: DayOffRequestWhereUniqueInput
    /**
     * In case the DayOffRequest found by the `where` argument doesn't exist, create a new DayOffRequest with this data.
     */
    create: XOR<DayOffRequestCreateInput, DayOffRequestUncheckedCreateInput>
    /**
     * In case the DayOffRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayOffRequestUpdateInput, DayOffRequestUncheckedUpdateInput>
  }

  /**
   * DayOffRequest delete
   */
  export type DayOffRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    /**
     * Filter which DayOffRequest to delete.
     */
    where: DayOffRequestWhereUniqueInput
  }

  /**
   * DayOffRequest deleteMany
   */
  export type DayOffRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayOffRequests to delete
     */
    where?: DayOffRequestWhereInput
    /**
     * Limit how many DayOffRequests to delete.
     */
    limit?: number
  }

  /**
   * DayOffRequest without action
   */
  export type DayOffRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
  }


  /**
   * Model DrinkAndFoodCost
   */

  export type AggregateDrinkAndFoodCost = {
    _count: DrinkAndFoodCostCountAggregateOutputType | null
    _avg: DrinkAndFoodCostAvgAggregateOutputType | null
    _sum: DrinkAndFoodCostSumAggregateOutputType | null
    _min: DrinkAndFoodCostMinAggregateOutputType | null
    _max: DrinkAndFoodCostMaxAggregateOutputType | null
  }

  export type DrinkAndFoodCostAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    cost: number | null
  }

  export type DrinkAndFoodCostSumAggregateOutputType = {
    id: number | null
    amount: number | null
    cost: number | null
  }

  export type DrinkAndFoodCostMinAggregateOutputType = {
    id: number | null
    category: $Enums.DrinkAndFoodCostCategory | null
    amount: number | null
    cost: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkAndFoodCostMaxAggregateOutputType = {
    id: number | null
    category: $Enums.DrinkAndFoodCostCategory | null
    amount: number | null
    cost: number | null
    description: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkAndFoodCostCountAggregateOutputType = {
    id: number
    category: number
    amount: number
    cost: number
    description: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrinkAndFoodCostAvgAggregateInputType = {
    id?: true
    amount?: true
    cost?: true
  }

  export type DrinkAndFoodCostSumAggregateInputType = {
    id?: true
    amount?: true
    cost?: true
  }

  export type DrinkAndFoodCostMinAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    cost?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrinkAndFoodCostMaxAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    cost?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrinkAndFoodCostCountAggregateInputType = {
    id?: true
    category?: true
    amount?: true
    cost?: true
    description?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrinkAndFoodCostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkAndFoodCost to aggregate.
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkAndFoodCosts to fetch.
     */
    orderBy?: DrinkAndFoodCostOrderByWithRelationInput | DrinkAndFoodCostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrinkAndFoodCostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkAndFoodCosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkAndFoodCosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrinkAndFoodCosts
    **/
    _count?: true | DrinkAndFoodCostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinkAndFoodCostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinkAndFoodCostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinkAndFoodCostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinkAndFoodCostMaxAggregateInputType
  }

  export type GetDrinkAndFoodCostAggregateType<T extends DrinkAndFoodCostAggregateArgs> = {
        [P in keyof T & keyof AggregateDrinkAndFoodCost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrinkAndFoodCost[P]>
      : GetScalarType<T[P], AggregateDrinkAndFoodCost[P]>
  }




  export type DrinkAndFoodCostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkAndFoodCostWhereInput
    orderBy?: DrinkAndFoodCostOrderByWithAggregationInput | DrinkAndFoodCostOrderByWithAggregationInput[]
    by: DrinkAndFoodCostScalarFieldEnum[] | DrinkAndFoodCostScalarFieldEnum
    having?: DrinkAndFoodCostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinkAndFoodCostCountAggregateInputType | true
    _avg?: DrinkAndFoodCostAvgAggregateInputType
    _sum?: DrinkAndFoodCostSumAggregateInputType
    _min?: DrinkAndFoodCostMinAggregateInputType
    _max?: DrinkAndFoodCostMaxAggregateInputType
  }

  export type DrinkAndFoodCostGroupByOutputType = {
    id: number
    category: $Enums.DrinkAndFoodCostCategory
    amount: number
    cost: number
    description: string | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: DrinkAndFoodCostCountAggregateOutputType | null
    _avg: DrinkAndFoodCostAvgAggregateOutputType | null
    _sum: DrinkAndFoodCostSumAggregateOutputType | null
    _min: DrinkAndFoodCostMinAggregateOutputType | null
    _max: DrinkAndFoodCostMaxAggregateOutputType | null
  }

  type GetDrinkAndFoodCostGroupByPayload<T extends DrinkAndFoodCostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinkAndFoodCostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinkAndFoodCostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinkAndFoodCostGroupByOutputType[P]>
            : GetScalarType<T[P], DrinkAndFoodCostGroupByOutputType[P]>
        }
      >
    >


  export type DrinkAndFoodCostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    amount?: boolean
    cost?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drinkAndFoodCost"]>



  export type DrinkAndFoodCostSelectScalar = {
    id?: boolean
    category?: boolean
    amount?: boolean
    cost?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrinkAndFoodCostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "amount" | "cost" | "description" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["drinkAndFoodCost"]>

  export type $DrinkAndFoodCostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrinkAndFoodCost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.DrinkAndFoodCostCategory
      amount: number
      cost: number
      description: string | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drinkAndFoodCost"]>
    composites: {}
  }

  type DrinkAndFoodCostGetPayload<S extends boolean | null | undefined | DrinkAndFoodCostDefaultArgs> = $Result.GetResult<Prisma.$DrinkAndFoodCostPayload, S>

  type DrinkAndFoodCostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrinkAndFoodCostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinkAndFoodCostCountAggregateInputType | true
    }

  export interface DrinkAndFoodCostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrinkAndFoodCost'], meta: { name: 'DrinkAndFoodCost' } }
    /**
     * Find zero or one DrinkAndFoodCost that matches the filter.
     * @param {DrinkAndFoodCostFindUniqueArgs} args - Arguments to find a DrinkAndFoodCost
     * @example
     * // Get one DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrinkAndFoodCostFindUniqueArgs>(args: SelectSubset<T, DrinkAndFoodCostFindUniqueArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrinkAndFoodCost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrinkAndFoodCostFindUniqueOrThrowArgs} args - Arguments to find a DrinkAndFoodCost
     * @example
     * // Get one DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrinkAndFoodCostFindUniqueOrThrowArgs>(args: SelectSubset<T, DrinkAndFoodCostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkAndFoodCost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostFindFirstArgs} args - Arguments to find a DrinkAndFoodCost
     * @example
     * // Get one DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrinkAndFoodCostFindFirstArgs>(args?: SelectSubset<T, DrinkAndFoodCostFindFirstArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkAndFoodCost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostFindFirstOrThrowArgs} args - Arguments to find a DrinkAndFoodCost
     * @example
     * // Get one DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrinkAndFoodCostFindFirstOrThrowArgs>(args?: SelectSubset<T, DrinkAndFoodCostFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrinkAndFoodCosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrinkAndFoodCosts
     * const drinkAndFoodCosts = await prisma.drinkAndFoodCost.findMany()
     * 
     * // Get first 10 DrinkAndFoodCosts
     * const drinkAndFoodCosts = await prisma.drinkAndFoodCost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinkAndFoodCostWithIdOnly = await prisma.drinkAndFoodCost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrinkAndFoodCostFindManyArgs>(args?: SelectSubset<T, DrinkAndFoodCostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrinkAndFoodCost.
     * @param {DrinkAndFoodCostCreateArgs} args - Arguments to create a DrinkAndFoodCost.
     * @example
     * // Create one DrinkAndFoodCost
     * const DrinkAndFoodCost = await prisma.drinkAndFoodCost.create({
     *   data: {
     *     // ... data to create a DrinkAndFoodCost
     *   }
     * })
     * 
     */
    create<T extends DrinkAndFoodCostCreateArgs>(args: SelectSubset<T, DrinkAndFoodCostCreateArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrinkAndFoodCosts.
     * @param {DrinkAndFoodCostCreateManyArgs} args - Arguments to create many DrinkAndFoodCosts.
     * @example
     * // Create many DrinkAndFoodCosts
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrinkAndFoodCostCreateManyArgs>(args?: SelectSubset<T, DrinkAndFoodCostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DrinkAndFoodCost.
     * @param {DrinkAndFoodCostDeleteArgs} args - Arguments to delete one DrinkAndFoodCost.
     * @example
     * // Delete one DrinkAndFoodCost
     * const DrinkAndFoodCost = await prisma.drinkAndFoodCost.delete({
     *   where: {
     *     // ... filter to delete one DrinkAndFoodCost
     *   }
     * })
     * 
     */
    delete<T extends DrinkAndFoodCostDeleteArgs>(args: SelectSubset<T, DrinkAndFoodCostDeleteArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrinkAndFoodCost.
     * @param {DrinkAndFoodCostUpdateArgs} args - Arguments to update one DrinkAndFoodCost.
     * @example
     * // Update one DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrinkAndFoodCostUpdateArgs>(args: SelectSubset<T, DrinkAndFoodCostUpdateArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrinkAndFoodCosts.
     * @param {DrinkAndFoodCostDeleteManyArgs} args - Arguments to filter DrinkAndFoodCosts to delete.
     * @example
     * // Delete a few DrinkAndFoodCosts
     * const { count } = await prisma.drinkAndFoodCost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrinkAndFoodCostDeleteManyArgs>(args?: SelectSubset<T, DrinkAndFoodCostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrinkAndFoodCosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrinkAndFoodCosts
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrinkAndFoodCostUpdateManyArgs>(args: SelectSubset<T, DrinkAndFoodCostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DrinkAndFoodCost.
     * @param {DrinkAndFoodCostUpsertArgs} args - Arguments to update or create a DrinkAndFoodCost.
     * @example
     * // Update or create a DrinkAndFoodCost
     * const drinkAndFoodCost = await prisma.drinkAndFoodCost.upsert({
     *   create: {
     *     // ... data to create a DrinkAndFoodCost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrinkAndFoodCost we want to update
     *   }
     * })
     */
    upsert<T extends DrinkAndFoodCostUpsertArgs>(args: SelectSubset<T, DrinkAndFoodCostUpsertArgs<ExtArgs>>): Prisma__DrinkAndFoodCostClient<$Result.GetResult<Prisma.$DrinkAndFoodCostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrinkAndFoodCosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostCountArgs} args - Arguments to filter DrinkAndFoodCosts to count.
     * @example
     * // Count the number of DrinkAndFoodCosts
     * const count = await prisma.drinkAndFoodCost.count({
     *   where: {
     *     // ... the filter for the DrinkAndFoodCosts we want to count
     *   }
     * })
    **/
    count<T extends DrinkAndFoodCostCountArgs>(
      args?: Subset<T, DrinkAndFoodCostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinkAndFoodCostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrinkAndFoodCost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrinkAndFoodCostAggregateArgs>(args: Subset<T, DrinkAndFoodCostAggregateArgs>): Prisma.PrismaPromise<GetDrinkAndFoodCostAggregateType<T>>

    /**
     * Group by DrinkAndFoodCost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAndFoodCostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrinkAndFoodCostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinkAndFoodCostGroupByArgs['orderBy'] }
        : { orderBy?: DrinkAndFoodCostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrinkAndFoodCostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinkAndFoodCostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrinkAndFoodCost model
   */
  readonly fields: DrinkAndFoodCostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrinkAndFoodCost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrinkAndFoodCostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DrinkAndFoodCost model
   */
  interface DrinkAndFoodCostFieldRefs {
    readonly id: FieldRef<"DrinkAndFoodCost", 'Int'>
    readonly category: FieldRef<"DrinkAndFoodCost", 'DrinkAndFoodCostCategory'>
    readonly amount: FieldRef<"DrinkAndFoodCost", 'Int'>
    readonly cost: FieldRef<"DrinkAndFoodCost", 'Int'>
    readonly description: FieldRef<"DrinkAndFoodCost", 'String'>
    readonly date: FieldRef<"DrinkAndFoodCost", 'DateTime'>
    readonly createdAt: FieldRef<"DrinkAndFoodCost", 'DateTime'>
    readonly updatedAt: FieldRef<"DrinkAndFoodCost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrinkAndFoodCost findUnique
   */
  export type DrinkAndFoodCostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter, which DrinkAndFoodCost to fetch.
     */
    where: DrinkAndFoodCostWhereUniqueInput
  }

  /**
   * DrinkAndFoodCost findUniqueOrThrow
   */
  export type DrinkAndFoodCostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter, which DrinkAndFoodCost to fetch.
     */
    where: DrinkAndFoodCostWhereUniqueInput
  }

  /**
   * DrinkAndFoodCost findFirst
   */
  export type DrinkAndFoodCostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter, which DrinkAndFoodCost to fetch.
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkAndFoodCosts to fetch.
     */
    orderBy?: DrinkAndFoodCostOrderByWithRelationInput | DrinkAndFoodCostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkAndFoodCosts.
     */
    cursor?: DrinkAndFoodCostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkAndFoodCosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkAndFoodCosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkAndFoodCosts.
     */
    distinct?: DrinkAndFoodCostScalarFieldEnum | DrinkAndFoodCostScalarFieldEnum[]
  }

  /**
   * DrinkAndFoodCost findFirstOrThrow
   */
  export type DrinkAndFoodCostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter, which DrinkAndFoodCost to fetch.
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkAndFoodCosts to fetch.
     */
    orderBy?: DrinkAndFoodCostOrderByWithRelationInput | DrinkAndFoodCostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkAndFoodCosts.
     */
    cursor?: DrinkAndFoodCostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkAndFoodCosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkAndFoodCosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkAndFoodCosts.
     */
    distinct?: DrinkAndFoodCostScalarFieldEnum | DrinkAndFoodCostScalarFieldEnum[]
  }

  /**
   * DrinkAndFoodCost findMany
   */
  export type DrinkAndFoodCostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter, which DrinkAndFoodCosts to fetch.
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkAndFoodCosts to fetch.
     */
    orderBy?: DrinkAndFoodCostOrderByWithRelationInput | DrinkAndFoodCostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrinkAndFoodCosts.
     */
    cursor?: DrinkAndFoodCostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkAndFoodCosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkAndFoodCosts.
     */
    skip?: number
    distinct?: DrinkAndFoodCostScalarFieldEnum | DrinkAndFoodCostScalarFieldEnum[]
  }

  /**
   * DrinkAndFoodCost create
   */
  export type DrinkAndFoodCostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * The data needed to create a DrinkAndFoodCost.
     */
    data: XOR<DrinkAndFoodCostCreateInput, DrinkAndFoodCostUncheckedCreateInput>
  }

  /**
   * DrinkAndFoodCost createMany
   */
  export type DrinkAndFoodCostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrinkAndFoodCosts.
     */
    data: DrinkAndFoodCostCreateManyInput | DrinkAndFoodCostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrinkAndFoodCost update
   */
  export type DrinkAndFoodCostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * The data needed to update a DrinkAndFoodCost.
     */
    data: XOR<DrinkAndFoodCostUpdateInput, DrinkAndFoodCostUncheckedUpdateInput>
    /**
     * Choose, which DrinkAndFoodCost to update.
     */
    where: DrinkAndFoodCostWhereUniqueInput
  }

  /**
   * DrinkAndFoodCost updateMany
   */
  export type DrinkAndFoodCostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrinkAndFoodCosts.
     */
    data: XOR<DrinkAndFoodCostUpdateManyMutationInput, DrinkAndFoodCostUncheckedUpdateManyInput>
    /**
     * Filter which DrinkAndFoodCosts to update
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * Limit how many DrinkAndFoodCosts to update.
     */
    limit?: number
  }

  /**
   * DrinkAndFoodCost upsert
   */
  export type DrinkAndFoodCostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * The filter to search for the DrinkAndFoodCost to update in case it exists.
     */
    where: DrinkAndFoodCostWhereUniqueInput
    /**
     * In case the DrinkAndFoodCost found by the `where` argument doesn't exist, create a new DrinkAndFoodCost with this data.
     */
    create: XOR<DrinkAndFoodCostCreateInput, DrinkAndFoodCostUncheckedCreateInput>
    /**
     * In case the DrinkAndFoodCost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrinkAndFoodCostUpdateInput, DrinkAndFoodCostUncheckedUpdateInput>
  }

  /**
   * DrinkAndFoodCost delete
   */
  export type DrinkAndFoodCostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
    /**
     * Filter which DrinkAndFoodCost to delete.
     */
    where: DrinkAndFoodCostWhereUniqueInput
  }

  /**
   * DrinkAndFoodCost deleteMany
   */
  export type DrinkAndFoodCostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkAndFoodCosts to delete
     */
    where?: DrinkAndFoodCostWhereInput
    /**
     * Limit how many DrinkAndFoodCosts to delete.
     */
    limit?: number
  }

  /**
   * DrinkAndFoodCost without action
   */
  export type DrinkAndFoodCostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkAndFoodCost
     */
    select?: DrinkAndFoodCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkAndFoodCost
     */
    omit?: DrinkAndFoodCostOmit<ExtArgs> | null
  }


  /**
   * Model holidays
   */

  export type AggregateHolidays = {
    _count: HolidaysCountAggregateOutputType | null
    _avg: HolidaysAvgAggregateOutputType | null
    _sum: HolidaysSumAggregateOutputType | null
    _min: HolidaysMinAggregateOutputType | null
    _max: HolidaysMaxAggregateOutputType | null
  }

  export type HolidaysAvgAggregateOutputType = {
    id: number | null
  }

  export type HolidaysSumAggregateOutputType = {
    id: number | null
  }

  export type HolidaysMinAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HolidaysMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HolidaysCountAggregateOutputType = {
    id: number
    date: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HolidaysAvgAggregateInputType = {
    id?: true
  }

  export type HolidaysSumAggregateInputType = {
    id?: true
  }

  export type HolidaysMinAggregateInputType = {
    id?: true
    date?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type HolidaysMaxAggregateInputType = {
    id?: true
    date?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type HolidaysCountAggregateInputType = {
    id?: true
    date?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HolidaysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which holidays to aggregate.
     */
    where?: holidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidaysOrderByWithRelationInput | holidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: holidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned holidays
    **/
    _count?: true | HolidaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HolidaysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HolidaysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidaysMaxAggregateInputType
  }

  export type GetHolidaysAggregateType<T extends HolidaysAggregateArgs> = {
        [P in keyof T & keyof AggregateHolidays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHolidays[P]>
      : GetScalarType<T[P], AggregateHolidays[P]>
  }




  export type holidaysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: holidaysWhereInput
    orderBy?: holidaysOrderByWithAggregationInput | holidaysOrderByWithAggregationInput[]
    by: HolidaysScalarFieldEnum[] | HolidaysScalarFieldEnum
    having?: holidaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidaysCountAggregateInputType | true
    _avg?: HolidaysAvgAggregateInputType
    _sum?: HolidaysSumAggregateInputType
    _min?: HolidaysMinAggregateInputType
    _max?: HolidaysMaxAggregateInputType
  }

  export type HolidaysGroupByOutputType = {
    id: number
    date: Date
    name: string
    created_at: Date
    updated_at: Date
    _count: HolidaysCountAggregateOutputType | null
    _avg: HolidaysAvgAggregateOutputType | null
    _sum: HolidaysSumAggregateOutputType | null
    _min: HolidaysMinAggregateOutputType | null
    _max: HolidaysMaxAggregateOutputType | null
  }

  type GetHolidaysGroupByPayload<T extends holidaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidaysGroupByOutputType[P]>
            : GetScalarType<T[P], HolidaysGroupByOutputType[P]>
        }
      >
    >


  export type holidaysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["holidays"]>



  export type holidaysSelectScalar = {
    id?: boolean
    date?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type holidaysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "name" | "created_at" | "updated_at", ExtArgs["result"]["holidays"]>

  export type $holidaysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "holidays"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["holidays"]>
    composites: {}
  }

  type holidaysGetPayload<S extends boolean | null | undefined | holidaysDefaultArgs> = $Result.GetResult<Prisma.$holidaysPayload, S>

  type holidaysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<holidaysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidaysCountAggregateInputType | true
    }

  export interface holidaysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['holidays'], meta: { name: 'holidays' } }
    /**
     * Find zero or one Holidays that matches the filter.
     * @param {holidaysFindUniqueArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends holidaysFindUniqueArgs>(args: SelectSubset<T, holidaysFindUniqueArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holidays that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {holidaysFindUniqueOrThrowArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends holidaysFindUniqueOrThrowArgs>(args: SelectSubset<T, holidaysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysFindFirstArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends holidaysFindFirstArgs>(args?: SelectSubset<T, holidaysFindFirstArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holidays that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysFindFirstOrThrowArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends holidaysFindFirstOrThrowArgs>(args?: SelectSubset<T, holidaysFindFirstOrThrowArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holidays.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holidays.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidaysWithIdOnly = await prisma.holidays.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends holidaysFindManyArgs>(args?: SelectSubset<T, holidaysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holidays.
     * @param {holidaysCreateArgs} args - Arguments to create a Holidays.
     * @example
     * // Create one Holidays
     * const Holidays = await prisma.holidays.create({
     *   data: {
     *     // ... data to create a Holidays
     *   }
     * })
     * 
     */
    create<T extends holidaysCreateArgs>(args: SelectSubset<T, holidaysCreateArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {holidaysCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holidays = await prisma.holidays.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends holidaysCreateManyArgs>(args?: SelectSubset<T, holidaysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Holidays.
     * @param {holidaysDeleteArgs} args - Arguments to delete one Holidays.
     * @example
     * // Delete one Holidays
     * const Holidays = await prisma.holidays.delete({
     *   where: {
     *     // ... filter to delete one Holidays
     *   }
     * })
     * 
     */
    delete<T extends holidaysDeleteArgs>(args: SelectSubset<T, holidaysDeleteArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holidays.
     * @param {holidaysUpdateArgs} args - Arguments to update one Holidays.
     * @example
     * // Update one Holidays
     * const holidays = await prisma.holidays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends holidaysUpdateArgs>(args: SelectSubset<T, holidaysUpdateArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {holidaysDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holidays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends holidaysDeleteManyArgs>(args?: SelectSubset<T, holidaysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holidays = await prisma.holidays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends holidaysUpdateManyArgs>(args: SelectSubset<T, holidaysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holidays.
     * @param {holidaysUpsertArgs} args - Arguments to update or create a Holidays.
     * @example
     * // Update or create a Holidays
     * const holidays = await prisma.holidays.upsert({
     *   create: {
     *     // ... data to create a Holidays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holidays we want to update
     *   }
     * })
     */
    upsert<T extends holidaysUpsertArgs>(args: SelectSubset<T, holidaysUpsertArgs<ExtArgs>>): Prisma__holidaysClient<$Result.GetResult<Prisma.$holidaysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holidays.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends holidaysCountArgs>(
      args?: Subset<T, holidaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HolidaysAggregateArgs>(args: Subset<T, HolidaysAggregateArgs>): Prisma.PrismaPromise<GetHolidaysAggregateType<T>>

    /**
     * Group by Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends holidaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: holidaysGroupByArgs['orderBy'] }
        : { orderBy?: holidaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, holidaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the holidays model
   */
  readonly fields: holidaysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for holidays.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__holidaysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the holidays model
   */
  interface holidaysFieldRefs {
    readonly id: FieldRef<"holidays", 'Int'>
    readonly date: FieldRef<"holidays", 'DateTime'>
    readonly name: FieldRef<"holidays", 'String'>
    readonly created_at: FieldRef<"holidays", 'DateTime'>
    readonly updated_at: FieldRef<"holidays", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * holidays findUnique
   */
  export type holidaysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where: holidaysWhereUniqueInput
  }

  /**
   * holidays findUniqueOrThrow
   */
  export type holidaysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where: holidaysWhereUniqueInput
  }

  /**
   * holidays findFirst
   */
  export type holidaysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where?: holidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidaysOrderByWithRelationInput | holidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holidays.
     */
    cursor?: holidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holidays.
     */
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * holidays findFirstOrThrow
   */
  export type holidaysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where?: holidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidaysOrderByWithRelationInput | holidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holidays.
     */
    cursor?: holidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holidays.
     */
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * holidays findMany
   */
  export type holidaysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where?: holidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidaysOrderByWithRelationInput | holidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing holidays.
     */
    cursor?: holidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * holidays create
   */
  export type holidaysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * The data needed to create a holidays.
     */
    data: XOR<holidaysCreateInput, holidaysUncheckedCreateInput>
  }

  /**
   * holidays createMany
   */
  export type holidaysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many holidays.
     */
    data: holidaysCreateManyInput | holidaysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * holidays update
   */
  export type holidaysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * The data needed to update a holidays.
     */
    data: XOR<holidaysUpdateInput, holidaysUncheckedUpdateInput>
    /**
     * Choose, which holidays to update.
     */
    where: holidaysWhereUniqueInput
  }

  /**
   * holidays updateMany
   */
  export type holidaysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update holidays.
     */
    data: XOR<holidaysUpdateManyMutationInput, holidaysUncheckedUpdateManyInput>
    /**
     * Filter which holidays to update
     */
    where?: holidaysWhereInput
    /**
     * Limit how many holidays to update.
     */
    limit?: number
  }

  /**
   * holidays upsert
   */
  export type holidaysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * The filter to search for the holidays to update in case it exists.
     */
    where: holidaysWhereUniqueInput
    /**
     * In case the holidays found by the `where` argument doesn't exist, create a new holidays with this data.
     */
    create: XOR<holidaysCreateInput, holidaysUncheckedCreateInput>
    /**
     * In case the holidays was found with the provided `where` argument, update it with this data.
     */
    update: XOR<holidaysUpdateInput, holidaysUncheckedUpdateInput>
  }

  /**
   * holidays delete
   */
  export type holidaysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
    /**
     * Filter which holidays to delete.
     */
    where: holidaysWhereUniqueInput
  }

  /**
   * holidays deleteMany
   */
  export type holidaysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which holidays to delete
     */
    where?: holidaysWhereInput
    /**
     * Limit how many holidays to delete.
     */
    limit?: number
  }

  /**
   * holidays without action
   */
  export type holidaysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holidays
     */
    select?: holidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the holidays
     */
    omit?: holidaysOmit<ExtArgs> | null
  }


  /**
   * Model job_positions
   */

  export type AggregateJob_positions = {
    _count: Job_positionsCountAggregateOutputType | null
    _avg: Job_positionsAvgAggregateOutputType | null
    _sum: Job_positionsSumAggregateOutputType | null
    _min: Job_positionsMinAggregateOutputType | null
    _max: Job_positionsMaxAggregateOutputType | null
  }

  export type Job_positionsAvgAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type Job_positionsSumAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type Job_positionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    shift_start: string | null
    shift_end: string | null
    created_at: Date | null
    updated_at: Date | null
    work_day: string | null
    salary: number | null
  }

  export type Job_positionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    shift_start: string | null
    shift_end: string | null
    created_at: Date | null
    updated_at: Date | null
    work_day: string | null
    salary: number | null
  }

  export type Job_positionsCountAggregateOutputType = {
    id: number
    name: number
    shift_start: number
    shift_end: number
    created_at: number
    updated_at: number
    work_day: number
    salary: number
    _all: number
  }


  export type Job_positionsAvgAggregateInputType = {
    id?: true
    salary?: true
  }

  export type Job_positionsSumAggregateInputType = {
    id?: true
    salary?: true
  }

  export type Job_positionsMinAggregateInputType = {
    id?: true
    name?: true
    shift_start?: true
    shift_end?: true
    created_at?: true
    updated_at?: true
    work_day?: true
    salary?: true
  }

  export type Job_positionsMaxAggregateInputType = {
    id?: true
    name?: true
    shift_start?: true
    shift_end?: true
    created_at?: true
    updated_at?: true
    work_day?: true
    salary?: true
  }

  export type Job_positionsCountAggregateInputType = {
    id?: true
    name?: true
    shift_start?: true
    shift_end?: true
    created_at?: true
    updated_at?: true
    work_day?: true
    salary?: true
    _all?: true
  }

  export type Job_positionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_positions to aggregate.
     */
    where?: job_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionsOrderByWithRelationInput | job_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_positions
    **/
    _count?: true | Job_positionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_positionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_positionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_positionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_positionsMaxAggregateInputType
  }

  export type GetJob_positionsAggregateType<T extends Job_positionsAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_positions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_positions[P]>
      : GetScalarType<T[P], AggregateJob_positions[P]>
  }




  export type job_positionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_positionsWhereInput
    orderBy?: job_positionsOrderByWithAggregationInput | job_positionsOrderByWithAggregationInput[]
    by: Job_positionsScalarFieldEnum[] | Job_positionsScalarFieldEnum
    having?: job_positionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_positionsCountAggregateInputType | true
    _avg?: Job_positionsAvgAggregateInputType
    _sum?: Job_positionsSumAggregateInputType
    _min?: Job_positionsMinAggregateInputType
    _max?: Job_positionsMaxAggregateInputType
  }

  export type Job_positionsGroupByOutputType = {
    id: number
    name: string
    shift_start: string
    shift_end: string
    created_at: Date
    updated_at: Date
    work_day: string | null
    salary: number
    _count: Job_positionsCountAggregateOutputType | null
    _avg: Job_positionsAvgAggregateOutputType | null
    _sum: Job_positionsSumAggregateOutputType | null
    _min: Job_positionsMinAggregateOutputType | null
    _max: Job_positionsMaxAggregateOutputType | null
  }

  type GetJob_positionsGroupByPayload<T extends job_positionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_positionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_positionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_positionsGroupByOutputType[P]>
            : GetScalarType<T[P], Job_positionsGroupByOutputType[P]>
        }
      >
    >


  export type job_positionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shift_start?: boolean
    shift_end?: boolean
    created_at?: boolean
    updated_at?: boolean
    work_day?: boolean
    salary?: boolean
    users?: boolean | job_positions$usersArgs<ExtArgs>
    _count?: boolean | Job_positionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_positions"]>



  export type job_positionsSelectScalar = {
    id?: boolean
    name?: boolean
    shift_start?: boolean
    shift_end?: boolean
    created_at?: boolean
    updated_at?: boolean
    work_day?: boolean
    salary?: boolean
  }

  export type job_positionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shift_start" | "shift_end" | "created_at" | "updated_at" | "work_day" | "salary", ExtArgs["result"]["job_positions"]>
  export type job_positionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | job_positions$usersArgs<ExtArgs>
    _count?: boolean | Job_positionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $job_positionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_positions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      shift_start: string
      shift_end: string
      created_at: Date
      updated_at: Date
      work_day: string | null
      salary: number
    }, ExtArgs["result"]["job_positions"]>
    composites: {}
  }

  type job_positionsGetPayload<S extends boolean | null | undefined | job_positionsDefaultArgs> = $Result.GetResult<Prisma.$job_positionsPayload, S>

  type job_positionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_positionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_positionsCountAggregateInputType | true
    }

  export interface job_positionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_positions'], meta: { name: 'job_positions' } }
    /**
     * Find zero or one Job_positions that matches the filter.
     * @param {job_positionsFindUniqueArgs} args - Arguments to find a Job_positions
     * @example
     * // Get one Job_positions
     * const job_positions = await prisma.job_positions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_positionsFindUniqueArgs>(args: SelectSubset<T, job_positionsFindUniqueArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_positions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_positionsFindUniqueOrThrowArgs} args - Arguments to find a Job_positions
     * @example
     * // Get one Job_positions
     * const job_positions = await prisma.job_positions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_positionsFindUniqueOrThrowArgs>(args: SelectSubset<T, job_positionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsFindFirstArgs} args - Arguments to find a Job_positions
     * @example
     * // Get one Job_positions
     * const job_positions = await prisma.job_positions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_positionsFindFirstArgs>(args?: SelectSubset<T, job_positionsFindFirstArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_positions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsFindFirstOrThrowArgs} args - Arguments to find a Job_positions
     * @example
     * // Get one Job_positions
     * const job_positions = await prisma.job_positions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_positionsFindFirstOrThrowArgs>(args?: SelectSubset<T, job_positionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_positions
     * const job_positions = await prisma.job_positions.findMany()
     * 
     * // Get first 10 Job_positions
     * const job_positions = await prisma.job_positions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_positionsWithIdOnly = await prisma.job_positions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_positionsFindManyArgs>(args?: SelectSubset<T, job_positionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_positions.
     * @param {job_positionsCreateArgs} args - Arguments to create a Job_positions.
     * @example
     * // Create one Job_positions
     * const Job_positions = await prisma.job_positions.create({
     *   data: {
     *     // ... data to create a Job_positions
     *   }
     * })
     * 
     */
    create<T extends job_positionsCreateArgs>(args: SelectSubset<T, job_positionsCreateArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_positions.
     * @param {job_positionsCreateManyArgs} args - Arguments to create many Job_positions.
     * @example
     * // Create many Job_positions
     * const job_positions = await prisma.job_positions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_positionsCreateManyArgs>(args?: SelectSubset<T, job_positionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job_positions.
     * @param {job_positionsDeleteArgs} args - Arguments to delete one Job_positions.
     * @example
     * // Delete one Job_positions
     * const Job_positions = await prisma.job_positions.delete({
     *   where: {
     *     // ... filter to delete one Job_positions
     *   }
     * })
     * 
     */
    delete<T extends job_positionsDeleteArgs>(args: SelectSubset<T, job_positionsDeleteArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_positions.
     * @param {job_positionsUpdateArgs} args - Arguments to update one Job_positions.
     * @example
     * // Update one Job_positions
     * const job_positions = await prisma.job_positions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_positionsUpdateArgs>(args: SelectSubset<T, job_positionsUpdateArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_positions.
     * @param {job_positionsDeleteManyArgs} args - Arguments to filter Job_positions to delete.
     * @example
     * // Delete a few Job_positions
     * const { count } = await prisma.job_positions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_positionsDeleteManyArgs>(args?: SelectSubset<T, job_positionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_positions
     * const job_positions = await prisma.job_positions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_positionsUpdateManyArgs>(args: SelectSubset<T, job_positionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job_positions.
     * @param {job_positionsUpsertArgs} args - Arguments to update or create a Job_positions.
     * @example
     * // Update or create a Job_positions
     * const job_positions = await prisma.job_positions.upsert({
     *   create: {
     *     // ... data to create a Job_positions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_positions we want to update
     *   }
     * })
     */
    upsert<T extends job_positionsUpsertArgs>(args: SelectSubset<T, job_positionsUpsertArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsCountArgs} args - Arguments to filter Job_positions to count.
     * @example
     * // Count the number of Job_positions
     * const count = await prisma.job_positions.count({
     *   where: {
     *     // ... the filter for the Job_positions we want to count
     *   }
     * })
    **/
    count<T extends job_positionsCountArgs>(
      args?: Subset<T, job_positionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_positionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_positionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_positionsAggregateArgs>(args: Subset<T, Job_positionsAggregateArgs>): Prisma.PrismaPromise<GetJob_positionsAggregateType<T>>

    /**
     * Group by Job_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_positionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends job_positionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_positionsGroupByArgs['orderBy'] }
        : { orderBy?: job_positionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, job_positionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_positionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_positions model
   */
  readonly fields: job_positionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_positions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_positionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends job_positions$usersArgs<ExtArgs> = {}>(args?: Subset<T, job_positions$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the job_positions model
   */
  interface job_positionsFieldRefs {
    readonly id: FieldRef<"job_positions", 'Int'>
    readonly name: FieldRef<"job_positions", 'String'>
    readonly shift_start: FieldRef<"job_positions", 'String'>
    readonly shift_end: FieldRef<"job_positions", 'String'>
    readonly created_at: FieldRef<"job_positions", 'DateTime'>
    readonly updated_at: FieldRef<"job_positions", 'DateTime'>
    readonly work_day: FieldRef<"job_positions", 'String'>
    readonly salary: FieldRef<"job_positions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * job_positions findUnique
   */
  export type job_positionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter, which job_positions to fetch.
     */
    where: job_positionsWhereUniqueInput
  }

  /**
   * job_positions findUniqueOrThrow
   */
  export type job_positionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter, which job_positions to fetch.
     */
    where: job_positionsWhereUniqueInput
  }

  /**
   * job_positions findFirst
   */
  export type job_positionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter, which job_positions to fetch.
     */
    where?: job_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionsOrderByWithRelationInput | job_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionsScalarFieldEnum | Job_positionsScalarFieldEnum[]
  }

  /**
   * job_positions findFirstOrThrow
   */
  export type job_positionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter, which job_positions to fetch.
     */
    where?: job_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionsOrderByWithRelationInput | job_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_positions.
     */
    cursor?: job_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_positions.
     */
    distinct?: Job_positionsScalarFieldEnum | Job_positionsScalarFieldEnum[]
  }

  /**
   * job_positions findMany
   */
  export type job_positionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter, which job_positions to fetch.
     */
    where?: job_positionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_positions to fetch.
     */
    orderBy?: job_positionsOrderByWithRelationInput | job_positionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_positions.
     */
    cursor?: job_positionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_positions.
     */
    skip?: number
    distinct?: Job_positionsScalarFieldEnum | Job_positionsScalarFieldEnum[]
  }

  /**
   * job_positions create
   */
  export type job_positionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * The data needed to create a job_positions.
     */
    data: XOR<job_positionsCreateInput, job_positionsUncheckedCreateInput>
  }

  /**
   * job_positions createMany
   */
  export type job_positionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_positions.
     */
    data: job_positionsCreateManyInput | job_positionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_positions update
   */
  export type job_positionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * The data needed to update a job_positions.
     */
    data: XOR<job_positionsUpdateInput, job_positionsUncheckedUpdateInput>
    /**
     * Choose, which job_positions to update.
     */
    where: job_positionsWhereUniqueInput
  }

  /**
   * job_positions updateMany
   */
  export type job_positionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_positions.
     */
    data: XOR<job_positionsUpdateManyMutationInput, job_positionsUncheckedUpdateManyInput>
    /**
     * Filter which job_positions to update
     */
    where?: job_positionsWhereInput
    /**
     * Limit how many job_positions to update.
     */
    limit?: number
  }

  /**
   * job_positions upsert
   */
  export type job_positionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * The filter to search for the job_positions to update in case it exists.
     */
    where: job_positionsWhereUniqueInput
    /**
     * In case the job_positions found by the `where` argument doesn't exist, create a new job_positions with this data.
     */
    create: XOR<job_positionsCreateInput, job_positionsUncheckedCreateInput>
    /**
     * In case the job_positions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_positionsUpdateInput, job_positionsUncheckedUpdateInput>
  }

  /**
   * job_positions delete
   */
  export type job_positionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    /**
     * Filter which job_positions to delete.
     */
    where: job_positionsWhereUniqueInput
  }

  /**
   * job_positions deleteMany
   */
  export type job_positionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_positions to delete
     */
    where?: job_positionsWhereInput
    /**
     * Limit how many job_positions to delete.
     */
    limit?: number
  }

  /**
   * job_positions.users
   */
  export type job_positions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * job_positions without action
   */
  export type job_positionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    clock_in_latitude: Decimal | null
    clock_in_longitude: Decimal | null
    clock_out_latitude: Decimal | null
    clock_out_longitude: Decimal | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    clock_in_latitude: Decimal | null
    clock_in_longitude: Decimal | null
    clock_out_latitude: Decimal | null
    clock_out_longitude: Decimal | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    type: $Enums.logs_type | null
    user_id: number | null
    date: Date | null
    clock_in_time: Date | null
    clock_in_latitude: Decimal | null
    clock_in_longitude: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    clock_out_time: Date | null
    clock_out_latitude: Decimal | null
    clock_out_longitude: Decimal | null
    isOverTime: boolean | null
    afterHourOvertime: boolean | null
    clock_in_picture: string | null
    clock_out_picture: string | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    type: $Enums.logs_type | null
    user_id: number | null
    date: Date | null
    clock_in_time: Date | null
    clock_in_latitude: Decimal | null
    clock_in_longitude: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    clock_out_time: Date | null
    clock_out_latitude: Decimal | null
    clock_out_longitude: Decimal | null
    isOverTime: boolean | null
    afterHourOvertime: boolean | null
    clock_in_picture: string | null
    clock_out_picture: string | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    type: number
    user_id: number
    date: number
    clock_in_time: number
    clock_in_latitude: number
    clock_in_longitude: number
    created_at: number
    updated_at: number
    work: number
    clock_out_time: number
    clock_out_latitude: number
    clock_out_longitude: number
    isOverTime: number
    afterHourOvertime: number
    clock_in_picture: number
    clock_out_picture: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    user_id?: true
    clock_in_latitude?: true
    clock_in_longitude?: true
    clock_out_latitude?: true
    clock_out_longitude?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    user_id?: true
    clock_in_latitude?: true
    clock_in_longitude?: true
    clock_out_latitude?: true
    clock_out_longitude?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    type?: true
    user_id?: true
    date?: true
    clock_in_time?: true
    clock_in_latitude?: true
    clock_in_longitude?: true
    created_at?: true
    updated_at?: true
    clock_out_time?: true
    clock_out_latitude?: true
    clock_out_longitude?: true
    isOverTime?: true
    afterHourOvertime?: true
    clock_in_picture?: true
    clock_out_picture?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    type?: true
    user_id?: true
    date?: true
    clock_in_time?: true
    clock_in_latitude?: true
    clock_in_longitude?: true
    created_at?: true
    updated_at?: true
    clock_out_time?: true
    clock_out_latitude?: true
    clock_out_longitude?: true
    isOverTime?: true
    afterHourOvertime?: true
    clock_in_picture?: true
    clock_out_picture?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    type?: true
    user_id?: true
    date?: true
    clock_in_time?: true
    clock_in_latitude?: true
    clock_in_longitude?: true
    created_at?: true
    updated_at?: true
    work?: true
    clock_out_time?: true
    clock_out_latitude?: true
    clock_out_longitude?: true
    isOverTime?: true
    afterHourOvertime?: true
    clock_in_picture?: true
    clock_out_picture?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    type: $Enums.logs_type
    user_id: number | null
    date: Date | null
    clock_in_time: Date | null
    clock_in_latitude: Decimal | null
    clock_in_longitude: Decimal | null
    created_at: Date
    updated_at: Date
    work: JsonValue | null
    clock_out_time: Date | null
    clock_out_latitude: Decimal | null
    clock_out_longitude: Decimal | null
    isOverTime: boolean
    afterHourOvertime: boolean
    clock_in_picture: string | null
    clock_out_picture: string | null
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    user_id?: boolean
    date?: boolean
    clock_in_time?: boolean
    clock_in_latitude?: boolean
    clock_in_longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    work?: boolean
    clock_out_time?: boolean
    clock_out_latitude?: boolean
    clock_out_longitude?: boolean
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: boolean
    clock_out_picture?: boolean
    user?: boolean | logs$userArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>



  export type logsSelectScalar = {
    id?: boolean
    type?: boolean
    user_id?: boolean
    date?: boolean
    clock_in_time?: boolean
    clock_in_latitude?: boolean
    clock_in_longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    work?: boolean
    clock_out_time?: boolean
    clock_out_latitude?: boolean
    clock_out_longitude?: boolean
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: boolean
    clock_out_picture?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "user_id" | "date" | "clock_in_time" | "clock_in_latitude" | "clock_in_longitude" | "created_at" | "updated_at" | "work" | "clock_out_time" | "clock_out_latitude" | "clock_out_longitude" | "isOverTime" | "afterHourOvertime" | "clock_in_picture" | "clock_out_picture", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | logs$userArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.logs_type
      user_id: number | null
      date: Date | null
      clock_in_time: Date | null
      clock_in_latitude: Prisma.Decimal | null
      clock_in_longitude: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
      work: Prisma.JsonValue | null
      clock_out_time: Date | null
      clock_out_latitude: Prisma.Decimal | null
      clock_out_longitude: Prisma.Decimal | null
      isOverTime: boolean
      afterHourOvertime: boolean
      clock_in_picture: string | null
      clock_out_picture: string | null
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends logs$userArgs<ExtArgs> = {}>(args?: Subset<T, logs$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'Int'>
    readonly type: FieldRef<"logs", 'logs_type'>
    readonly user_id: FieldRef<"logs", 'Int'>
    readonly date: FieldRef<"logs", 'DateTime'>
    readonly clock_in_time: FieldRef<"logs", 'DateTime'>
    readonly clock_in_latitude: FieldRef<"logs", 'Decimal'>
    readonly clock_in_longitude: FieldRef<"logs", 'Decimal'>
    readonly created_at: FieldRef<"logs", 'DateTime'>
    readonly updated_at: FieldRef<"logs", 'DateTime'>
    readonly work: FieldRef<"logs", 'Json'>
    readonly clock_out_time: FieldRef<"logs", 'DateTime'>
    readonly clock_out_latitude: FieldRef<"logs", 'Decimal'>
    readonly clock_out_longitude: FieldRef<"logs", 'Decimal'>
    readonly isOverTime: FieldRef<"logs", 'Boolean'>
    readonly afterHourOvertime: FieldRef<"logs", 'Boolean'>
    readonly clock_in_picture: FieldRef<"logs", 'String'>
    readonly clock_out_picture: FieldRef<"logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs.user
   */
  export type logs$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    fund: number | null
    projectLeadId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    fund: number | null
    projectLeadId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    fund: number | null
    title: string | null
    status: $Enums.ProjectStatus | null
    priority: $Enums.Priority | null
    projectLeadId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    fund: number | null
    title: string | null
    status: $Enums.ProjectStatus | null
    priority: $Enums.Priority | null
    projectLeadId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    fund: number
    title: number
    status: number
    priority: number
    projectLeadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    fund?: true
    projectLeadId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    fund?: true
    projectLeadId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    fund?: true
    title?: true
    status?: true
    priority?: true
    projectLeadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    fund?: true
    title?: true
    status?: true
    priority?: true
    projectLeadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    fund?: true
    title?: true
    status?: true
    priority?: true
    projectLeadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    fund: number
    title: string
    status: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fund?: boolean
    title?: boolean
    status?: boolean
    priority?: boolean
    projectLeadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectLead?: boolean | usersDefaultArgs<ExtArgs>
    projectMembers?: boolean | Project$projectMembersArgs<ExtArgs>
    activity?: boolean | Project$activityArgs<ExtArgs>
    histories?: boolean | Project$historiesArgs<ExtArgs>
    spendings?: boolean | Project$spendingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    fund?: boolean
    title?: boolean
    status?: boolean
    priority?: boolean
    projectLeadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fund" | "title" | "status" | "priority" | "projectLeadId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectLead?: boolean | usersDefaultArgs<ExtArgs>
    projectMembers?: boolean | Project$projectMembersArgs<ExtArgs>
    activity?: boolean | Project$activityArgs<ExtArgs>
    histories?: boolean | Project$historiesArgs<ExtArgs>
    spendings?: boolean | Project$spendingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      projectLead: Prisma.$usersPayload<ExtArgs>
      projectMembers: Prisma.$usersPayload<ExtArgs>[]
      activity: Prisma.$ProjectActivityPayload<ExtArgs>[]
      histories: Prisma.$ProjectHistoryPayload<ExtArgs>[]
      spendings: Prisma.$ProjectSpendingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fund: number
      title: string
      status: $Enums.ProjectStatus
      priority: $Enums.Priority
      projectLeadId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectLead<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectMembers<T extends Project$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity<T extends Project$activityArgs<ExtArgs> = {}>(args?: Subset<T, Project$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    histories<T extends Project$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spendings<T extends Project$spendingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$spendingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly fund: FieldRef<"Project", 'Int'>
    readonly title: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly priority: FieldRef<"Project", 'Priority'>
    readonly projectLeadId: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.projectMembers
   */
  export type Project$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Project.activity
   */
  export type Project$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    cursor?: ProjectActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * Project.histories
   */
  export type Project$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    where?: ProjectHistoryWhereInput
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    cursor?: ProjectHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectHistoryScalarFieldEnum | ProjectHistoryScalarFieldEnum[]
  }

  /**
   * Project.spendings
   */
  export type Project$spendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    where?: ProjectSpendingWhereInput
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    cursor?: ProjectSpendingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSpendingScalarFieldEnum | ProjectSpendingScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectActivity
   */

  export type AggregateProjectActivity = {
    _count: ProjectActivityCountAggregateOutputType | null
    _avg: ProjectActivityAvgAggregateOutputType | null
    _sum: ProjectActivitySumAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  export type ProjectActivityAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectActivitySumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectActivityMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    dateTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectActivityMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    dateTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectActivityCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    dateTime: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectActivityAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectActivitySumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectActivityMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectActivityMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectActivityCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivity to aggregate.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectActivities
    **/
    _count?: true | ProjectActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type GetProjectActivityAggregateType<T extends ProjectActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectActivity[P]>
      : GetScalarType<T[P], AggregateProjectActivity[P]>
  }




  export type ProjectActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithAggregationInput | ProjectActivityOrderByWithAggregationInput[]
    by: ProjectActivityScalarFieldEnum[] | ProjectActivityScalarFieldEnum
    having?: ProjectActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectActivityCountAggregateInputType | true
    _avg?: ProjectActivityAvgAggregateInputType
    _sum?: ProjectActivitySumAggregateInputType
    _min?: ProjectActivityMinAggregateInputType
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type ProjectActivityGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    dateTime: Date
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectActivityCountAggregateOutputType | null
    _avg: ProjectActivityAvgAggregateOutputType | null
    _sum: ProjectActivitySumAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  type GetProjectActivityGroupByPayload<T extends ProjectActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
        }
      >
    >


  export type ProjectActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    dateTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectActivity"]>



  export type ProjectActivitySelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    dateTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "dateTime" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["projectActivity"]>
  export type ProjectActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ProjectActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectActivity"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      dateTime: Date
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectActivity"]>
    composites: {}
  }

  type ProjectActivityGetPayload<S extends boolean | null | undefined | ProjectActivityDefaultArgs> = $Result.GetResult<Prisma.$ProjectActivityPayload, S>

  type ProjectActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectActivityCountAggregateInputType | true
    }

  export interface ProjectActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectActivity'], meta: { name: 'ProjectActivity' } }
    /**
     * Find zero or one ProjectActivity that matches the filter.
     * @param {ProjectActivityFindUniqueArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectActivityFindUniqueArgs>(args: SelectSubset<T, ProjectActivityFindUniqueArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectActivityFindUniqueOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectActivityFindFirstArgs>(args?: SelectSubset<T, ProjectActivityFindFirstArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany()
     * 
     * // Get first 10 ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectActivityWithIdOnly = await prisma.projectActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectActivityFindManyArgs>(args?: SelectSubset<T, ProjectActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectActivity.
     * @param {ProjectActivityCreateArgs} args - Arguments to create a ProjectActivity.
     * @example
     * // Create one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.create({
     *   data: {
     *     // ... data to create a ProjectActivity
     *   }
     * })
     * 
     */
    create<T extends ProjectActivityCreateArgs>(args: SelectSubset<T, ProjectActivityCreateArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectActivities.
     * @param {ProjectActivityCreateManyArgs} args - Arguments to create many ProjectActivities.
     * @example
     * // Create many ProjectActivities
     * const projectActivity = await prisma.projectActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectActivityCreateManyArgs>(args?: SelectSubset<T, ProjectActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectActivity.
     * @param {ProjectActivityDeleteArgs} args - Arguments to delete one ProjectActivity.
     * @example
     * // Delete one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.delete({
     *   where: {
     *     // ... filter to delete one ProjectActivity
     *   }
     * })
     * 
     */
    delete<T extends ProjectActivityDeleteArgs>(args: SelectSubset<T, ProjectActivityDeleteArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectActivity.
     * @param {ProjectActivityUpdateArgs} args - Arguments to update one ProjectActivity.
     * @example
     * // Update one ProjectActivity
     * const projectActivity = await prisma.projectActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectActivityUpdateArgs>(args: SelectSubset<T, ProjectActivityUpdateArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectActivities.
     * @param {ProjectActivityDeleteManyArgs} args - Arguments to filter ProjectActivities to delete.
     * @example
     * // Delete a few ProjectActivities
     * const { count } = await prisma.projectActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectActivityDeleteManyArgs>(args?: SelectSubset<T, ProjectActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectActivities
     * const projectActivity = await prisma.projectActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectActivityUpdateManyArgs>(args: SelectSubset<T, ProjectActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectActivity.
     * @param {ProjectActivityUpsertArgs} args - Arguments to update or create a ProjectActivity.
     * @example
     * // Update or create a ProjectActivity
     * const projectActivity = await prisma.projectActivity.upsert({
     *   create: {
     *     // ... data to create a ProjectActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectActivity we want to update
     *   }
     * })
     */
    upsert<T extends ProjectActivityUpsertArgs>(args: SelectSubset<T, ProjectActivityUpsertArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityCountArgs} args - Arguments to filter ProjectActivities to count.
     * @example
     * // Count the number of ProjectActivities
     * const count = await prisma.projectActivity.count({
     *   where: {
     *     // ... the filter for the ProjectActivities we want to count
     *   }
     * })
    **/
    count<T extends ProjectActivityCountArgs>(
      args?: Subset<T, ProjectActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectActivityAggregateArgs>(args: Subset<T, ProjectActivityAggregateArgs>): Prisma.PrismaPromise<GetProjectActivityAggregateType<T>>

    /**
     * Group by ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectActivityGroupByArgs['orderBy'] }
        : { orderBy?: ProjectActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectActivity model
   */
  readonly fields: ProjectActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectActivity model
   */
  interface ProjectActivityFieldRefs {
    readonly id: FieldRef<"ProjectActivity", 'Int'>
    readonly projectId: FieldRef<"ProjectActivity", 'Int'>
    readonly userId: FieldRef<"ProjectActivity", 'Int'>
    readonly dateTime: FieldRef<"ProjectActivity", 'DateTime'>
    readonly description: FieldRef<"ProjectActivity", 'String'>
    readonly createdAt: FieldRef<"ProjectActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectActivity findUnique
   */
  export type ProjectActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity findUniqueOrThrow
   */
  export type ProjectActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity findFirst
   */
  export type ProjectActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity findFirstOrThrow
   */
  export type ProjectActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity findMany
   */
  export type ProjectActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivities to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity create
   */
  export type ProjectActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectActivity.
     */
    data: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
  }

  /**
   * ProjectActivity createMany
   */
  export type ProjectActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectActivities.
     */
    data: ProjectActivityCreateManyInput | ProjectActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectActivity update
   */
  export type ProjectActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectActivity.
     */
    data: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
    /**
     * Choose, which ProjectActivity to update.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity updateMany
   */
  export type ProjectActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectActivities.
     */
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyInput>
    /**
     * Filter which ProjectActivities to update
     */
    where?: ProjectActivityWhereInput
    /**
     * Limit how many ProjectActivities to update.
     */
    limit?: number
  }

  /**
   * ProjectActivity upsert
   */
  export type ProjectActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectActivity to update in case it exists.
     */
    where: ProjectActivityWhereUniqueInput
    /**
     * In case the ProjectActivity found by the `where` argument doesn't exist, create a new ProjectActivity with this data.
     */
    create: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
    /**
     * In case the ProjectActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
  }

  /**
   * ProjectActivity delete
   */
  export type ProjectActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter which ProjectActivity to delete.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity deleteMany
   */
  export type ProjectActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivities to delete
     */
    where?: ProjectActivityWhereInput
    /**
     * Limit how many ProjectActivities to delete.
     */
    limit?: number
  }

  /**
   * ProjectActivity without action
   */
  export type ProjectActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
  }


  /**
   * Model ProjectHistory
   */

  export type AggregateProjectHistory = {
    _count: ProjectHistoryCountAggregateOutputType | null
    _avg: ProjectHistoryAvgAggregateOutputType | null
    _sum: ProjectHistorySumAggregateOutputType | null
    _min: ProjectHistoryMinAggregateOutputType | null
    _max: ProjectHistoryMaxAggregateOutputType | null
  }

  export type ProjectHistoryAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectHistorySumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
  }

  export type ProjectHistoryMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    dateTime: Date | null
    description: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectHistoryMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    dateTime: Date | null
    description: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectHistoryCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    dateTime: number
    description: number
    file: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectHistoryAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectHistorySumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
  }

  export type ProjectHistoryMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    file?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectHistoryMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    file?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectHistoryCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    dateTime?: true
    description?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectHistory to aggregate.
     */
    where?: ProjectHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectHistories to fetch.
     */
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectHistories
    **/
    _count?: true | ProjectHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectHistoryMaxAggregateInputType
  }

  export type GetProjectHistoryAggregateType<T extends ProjectHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectHistory[P]>
      : GetScalarType<T[P], AggregateProjectHistory[P]>
  }




  export type ProjectHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectHistoryWhereInput
    orderBy?: ProjectHistoryOrderByWithAggregationInput | ProjectHistoryOrderByWithAggregationInput[]
    by: ProjectHistoryScalarFieldEnum[] | ProjectHistoryScalarFieldEnum
    having?: ProjectHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectHistoryCountAggregateInputType | true
    _avg?: ProjectHistoryAvgAggregateInputType
    _sum?: ProjectHistorySumAggregateInputType
    _min?: ProjectHistoryMinAggregateInputType
    _max?: ProjectHistoryMaxAggregateInputType
  }

  export type ProjectHistoryGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    dateTime: Date
    description: string
    file: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectHistoryCountAggregateOutputType | null
    _avg: ProjectHistoryAvgAggregateOutputType | null
    _sum: ProjectHistorySumAggregateOutputType | null
    _min: ProjectHistoryMinAggregateOutputType | null
    _max: ProjectHistoryMaxAggregateOutputType | null
  }

  type GetProjectHistoryGroupByPayload<T extends ProjectHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    dateTime?: boolean
    description?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectHistory"]>



  export type ProjectHistorySelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    dateTime?: boolean
    description?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "dateTime" | "description" | "file" | "createdAt" | "updatedAt", ExtArgs["result"]["projectHistory"]>
  export type ProjectHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ProjectHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectHistory"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      dateTime: Date
      description: string
      file: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectHistory"]>
    composites: {}
  }

  type ProjectHistoryGetPayload<S extends boolean | null | undefined | ProjectHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProjectHistoryPayload, S>

  type ProjectHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectHistoryCountAggregateInputType | true
    }

  export interface ProjectHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectHistory'], meta: { name: 'ProjectHistory' } }
    /**
     * Find zero or one ProjectHistory that matches the filter.
     * @param {ProjectHistoryFindUniqueArgs} args - Arguments to find a ProjectHistory
     * @example
     * // Get one ProjectHistory
     * const projectHistory = await prisma.projectHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectHistoryFindUniqueArgs>(args: SelectSubset<T, ProjectHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProjectHistory
     * @example
     * // Get one ProjectHistory
     * const projectHistory = await prisma.projectHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryFindFirstArgs} args - Arguments to find a ProjectHistory
     * @example
     * // Get one ProjectHistory
     * const projectHistory = await prisma.projectHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectHistoryFindFirstArgs>(args?: SelectSubset<T, ProjectHistoryFindFirstArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryFindFirstOrThrowArgs} args - Arguments to find a ProjectHistory
     * @example
     * // Get one ProjectHistory
     * const projectHistory = await prisma.projectHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectHistories
     * const projectHistories = await prisma.projectHistory.findMany()
     * 
     * // Get first 10 ProjectHistories
     * const projectHistories = await prisma.projectHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectHistoryWithIdOnly = await prisma.projectHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectHistoryFindManyArgs>(args?: SelectSubset<T, ProjectHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectHistory.
     * @param {ProjectHistoryCreateArgs} args - Arguments to create a ProjectHistory.
     * @example
     * // Create one ProjectHistory
     * const ProjectHistory = await prisma.projectHistory.create({
     *   data: {
     *     // ... data to create a ProjectHistory
     *   }
     * })
     * 
     */
    create<T extends ProjectHistoryCreateArgs>(args: SelectSubset<T, ProjectHistoryCreateArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectHistories.
     * @param {ProjectHistoryCreateManyArgs} args - Arguments to create many ProjectHistories.
     * @example
     * // Create many ProjectHistories
     * const projectHistory = await prisma.projectHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectHistoryCreateManyArgs>(args?: SelectSubset<T, ProjectHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectHistory.
     * @param {ProjectHistoryDeleteArgs} args - Arguments to delete one ProjectHistory.
     * @example
     * // Delete one ProjectHistory
     * const ProjectHistory = await prisma.projectHistory.delete({
     *   where: {
     *     // ... filter to delete one ProjectHistory
     *   }
     * })
     * 
     */
    delete<T extends ProjectHistoryDeleteArgs>(args: SelectSubset<T, ProjectHistoryDeleteArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectHistory.
     * @param {ProjectHistoryUpdateArgs} args - Arguments to update one ProjectHistory.
     * @example
     * // Update one ProjectHistory
     * const projectHistory = await prisma.projectHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectHistoryUpdateArgs>(args: SelectSubset<T, ProjectHistoryUpdateArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectHistories.
     * @param {ProjectHistoryDeleteManyArgs} args - Arguments to filter ProjectHistories to delete.
     * @example
     * // Delete a few ProjectHistories
     * const { count } = await prisma.projectHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectHistoryDeleteManyArgs>(args?: SelectSubset<T, ProjectHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectHistories
     * const projectHistory = await prisma.projectHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectHistoryUpdateManyArgs>(args: SelectSubset<T, ProjectHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectHistory.
     * @param {ProjectHistoryUpsertArgs} args - Arguments to update or create a ProjectHistory.
     * @example
     * // Update or create a ProjectHistory
     * const projectHistory = await prisma.projectHistory.upsert({
     *   create: {
     *     // ... data to create a ProjectHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProjectHistoryUpsertArgs>(args: SelectSubset<T, ProjectHistoryUpsertArgs<ExtArgs>>): Prisma__ProjectHistoryClient<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryCountArgs} args - Arguments to filter ProjectHistories to count.
     * @example
     * // Count the number of ProjectHistories
     * const count = await prisma.projectHistory.count({
     *   where: {
     *     // ... the filter for the ProjectHistories we want to count
     *   }
     * })
    **/
    count<T extends ProjectHistoryCountArgs>(
      args?: Subset<T, ProjectHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectHistoryAggregateArgs>(args: Subset<T, ProjectHistoryAggregateArgs>): Prisma.PrismaPromise<GetProjectHistoryAggregateType<T>>

    /**
     * Group by ProjectHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectHistory model
   */
  readonly fields: ProjectHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectHistory model
   */
  interface ProjectHistoryFieldRefs {
    readonly id: FieldRef<"ProjectHistory", 'Int'>
    readonly projectId: FieldRef<"ProjectHistory", 'Int'>
    readonly userId: FieldRef<"ProjectHistory", 'Int'>
    readonly dateTime: FieldRef<"ProjectHistory", 'DateTime'>
    readonly description: FieldRef<"ProjectHistory", 'String'>
    readonly file: FieldRef<"ProjectHistory", 'String'>
    readonly createdAt: FieldRef<"ProjectHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectHistory findUnique
   */
  export type ProjectHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectHistory to fetch.
     */
    where: ProjectHistoryWhereUniqueInput
  }

  /**
   * ProjectHistory findUniqueOrThrow
   */
  export type ProjectHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectHistory to fetch.
     */
    where: ProjectHistoryWhereUniqueInput
  }

  /**
   * ProjectHistory findFirst
   */
  export type ProjectHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectHistory to fetch.
     */
    where?: ProjectHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectHistories to fetch.
     */
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectHistories.
     */
    cursor?: ProjectHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectHistories.
     */
    distinct?: ProjectHistoryScalarFieldEnum | ProjectHistoryScalarFieldEnum[]
  }

  /**
   * ProjectHistory findFirstOrThrow
   */
  export type ProjectHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectHistory to fetch.
     */
    where?: ProjectHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectHistories to fetch.
     */
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectHistories.
     */
    cursor?: ProjectHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectHistories.
     */
    distinct?: ProjectHistoryScalarFieldEnum | ProjectHistoryScalarFieldEnum[]
  }

  /**
   * ProjectHistory findMany
   */
  export type ProjectHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectHistories to fetch.
     */
    where?: ProjectHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectHistories to fetch.
     */
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectHistories.
     */
    cursor?: ProjectHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectHistories.
     */
    skip?: number
    distinct?: ProjectHistoryScalarFieldEnum | ProjectHistoryScalarFieldEnum[]
  }

  /**
   * ProjectHistory create
   */
  export type ProjectHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectHistory.
     */
    data: XOR<ProjectHistoryCreateInput, ProjectHistoryUncheckedCreateInput>
  }

  /**
   * ProjectHistory createMany
   */
  export type ProjectHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectHistories.
     */
    data: ProjectHistoryCreateManyInput | ProjectHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectHistory update
   */
  export type ProjectHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectHistory.
     */
    data: XOR<ProjectHistoryUpdateInput, ProjectHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProjectHistory to update.
     */
    where: ProjectHistoryWhereUniqueInput
  }

  /**
   * ProjectHistory updateMany
   */
  export type ProjectHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectHistories.
     */
    data: XOR<ProjectHistoryUpdateManyMutationInput, ProjectHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectHistories to update
     */
    where?: ProjectHistoryWhereInput
    /**
     * Limit how many ProjectHistories to update.
     */
    limit?: number
  }

  /**
   * ProjectHistory upsert
   */
  export type ProjectHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectHistory to update in case it exists.
     */
    where: ProjectHistoryWhereUniqueInput
    /**
     * In case the ProjectHistory found by the `where` argument doesn't exist, create a new ProjectHistory with this data.
     */
    create: XOR<ProjectHistoryCreateInput, ProjectHistoryUncheckedCreateInput>
    /**
     * In case the ProjectHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectHistoryUpdateInput, ProjectHistoryUncheckedUpdateInput>
  }

  /**
   * ProjectHistory delete
   */
  export type ProjectHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProjectHistory to delete.
     */
    where: ProjectHistoryWhereUniqueInput
  }

  /**
   * ProjectHistory deleteMany
   */
  export type ProjectHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectHistories to delete
     */
    where?: ProjectHistoryWhereInput
    /**
     * Limit how many ProjectHistories to delete.
     */
    limit?: number
  }

  /**
   * ProjectHistory without action
   */
  export type ProjectHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSpending
   */

  export type AggregateProjectSpending = {
    _count: ProjectSpendingCountAggregateOutputType | null
    _avg: ProjectSpendingAvgAggregateOutputType | null
    _sum: ProjectSpendingSumAggregateOutputType | null
    _min: ProjectSpendingMinAggregateOutputType | null
    _max: ProjectSpendingMaxAggregateOutputType | null
  }

  export type ProjectSpendingAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    amount: number | null
  }

  export type ProjectSpendingSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    amount: number | null
  }

  export type ProjectSpendingMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    type: $Enums.SpendingType | null
    amount: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectSpendingMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    type: $Enums.SpendingType | null
    amount: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectSpendingCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    type: number
    amount: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectSpendingAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    amount?: true
  }

  export type ProjectSpendingSumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    amount?: true
  }

  export type ProjectSpendingMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectSpendingMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectSpendingCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectSpendingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSpending to aggregate.
     */
    where?: ProjectSpendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSpendings to fetch.
     */
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSpendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSpendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSpendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSpendings
    **/
    _count?: true | ProjectSpendingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectSpendingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSpendingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSpendingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSpendingMaxAggregateInputType
  }

  export type GetProjectSpendingAggregateType<T extends ProjectSpendingAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSpending]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSpending[P]>
      : GetScalarType<T[P], AggregateProjectSpending[P]>
  }




  export type ProjectSpendingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSpendingWhereInput
    orderBy?: ProjectSpendingOrderByWithAggregationInput | ProjectSpendingOrderByWithAggregationInput[]
    by: ProjectSpendingScalarFieldEnum[] | ProjectSpendingScalarFieldEnum
    having?: ProjectSpendingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSpendingCountAggregateInputType | true
    _avg?: ProjectSpendingAvgAggregateInputType
    _sum?: ProjectSpendingSumAggregateInputType
    _min?: ProjectSpendingMinAggregateInputType
    _max?: ProjectSpendingMaxAggregateInputType
  }

  export type ProjectSpendingGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    type: $Enums.SpendingType
    amount: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectSpendingCountAggregateOutputType | null
    _avg: ProjectSpendingAvgAggregateOutputType | null
    _sum: ProjectSpendingSumAggregateOutputType | null
    _min: ProjectSpendingMinAggregateOutputType | null
    _max: ProjectSpendingMaxAggregateOutputType | null
  }

  type GetProjectSpendingGroupByPayload<T extends ProjectSpendingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSpendingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSpendingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSpendingGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSpendingGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSpendingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSpending"]>



  export type ProjectSpendingSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectSpendingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "type" | "amount" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["projectSpending"]>
  export type ProjectSpendingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ProjectSpendingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSpending"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      type: $Enums.SpendingType
      amount: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectSpending"]>
    composites: {}
  }

  type ProjectSpendingGetPayload<S extends boolean | null | undefined | ProjectSpendingDefaultArgs> = $Result.GetResult<Prisma.$ProjectSpendingPayload, S>

  type ProjectSpendingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSpendingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSpendingCountAggregateInputType | true
    }

  export interface ProjectSpendingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSpending'], meta: { name: 'ProjectSpending' } }
    /**
     * Find zero or one ProjectSpending that matches the filter.
     * @param {ProjectSpendingFindUniqueArgs} args - Arguments to find a ProjectSpending
     * @example
     * // Get one ProjectSpending
     * const projectSpending = await prisma.projectSpending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSpendingFindUniqueArgs>(args: SelectSubset<T, ProjectSpendingFindUniqueArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectSpending that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSpendingFindUniqueOrThrowArgs} args - Arguments to find a ProjectSpending
     * @example
     * // Get one ProjectSpending
     * const projectSpending = await prisma.projectSpending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSpendingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSpendingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSpending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingFindFirstArgs} args - Arguments to find a ProjectSpending
     * @example
     * // Get one ProjectSpending
     * const projectSpending = await prisma.projectSpending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSpendingFindFirstArgs>(args?: SelectSubset<T, ProjectSpendingFindFirstArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSpending that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingFindFirstOrThrowArgs} args - Arguments to find a ProjectSpending
     * @example
     * // Get one ProjectSpending
     * const projectSpending = await prisma.projectSpending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSpendingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSpendingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectSpendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSpendings
     * const projectSpendings = await prisma.projectSpending.findMany()
     * 
     * // Get first 10 ProjectSpendings
     * const projectSpendings = await prisma.projectSpending.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectSpendingWithIdOnly = await prisma.projectSpending.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectSpendingFindManyArgs>(args?: SelectSubset<T, ProjectSpendingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectSpending.
     * @param {ProjectSpendingCreateArgs} args - Arguments to create a ProjectSpending.
     * @example
     * // Create one ProjectSpending
     * const ProjectSpending = await prisma.projectSpending.create({
     *   data: {
     *     // ... data to create a ProjectSpending
     *   }
     * })
     * 
     */
    create<T extends ProjectSpendingCreateArgs>(args: SelectSubset<T, ProjectSpendingCreateArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectSpendings.
     * @param {ProjectSpendingCreateManyArgs} args - Arguments to create many ProjectSpendings.
     * @example
     * // Create many ProjectSpendings
     * const projectSpending = await prisma.projectSpending.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSpendingCreateManyArgs>(args?: SelectSubset<T, ProjectSpendingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectSpending.
     * @param {ProjectSpendingDeleteArgs} args - Arguments to delete one ProjectSpending.
     * @example
     * // Delete one ProjectSpending
     * const ProjectSpending = await prisma.projectSpending.delete({
     *   where: {
     *     // ... filter to delete one ProjectSpending
     *   }
     * })
     * 
     */
    delete<T extends ProjectSpendingDeleteArgs>(args: SelectSubset<T, ProjectSpendingDeleteArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectSpending.
     * @param {ProjectSpendingUpdateArgs} args - Arguments to update one ProjectSpending.
     * @example
     * // Update one ProjectSpending
     * const projectSpending = await prisma.projectSpending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSpendingUpdateArgs>(args: SelectSubset<T, ProjectSpendingUpdateArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectSpendings.
     * @param {ProjectSpendingDeleteManyArgs} args - Arguments to filter ProjectSpendings to delete.
     * @example
     * // Delete a few ProjectSpendings
     * const { count } = await prisma.projectSpending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSpendingDeleteManyArgs>(args?: SelectSubset<T, ProjectSpendingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSpendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSpendings
     * const projectSpending = await prisma.projectSpending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSpendingUpdateManyArgs>(args: SelectSubset<T, ProjectSpendingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectSpending.
     * @param {ProjectSpendingUpsertArgs} args - Arguments to update or create a ProjectSpending.
     * @example
     * // Update or create a ProjectSpending
     * const projectSpending = await prisma.projectSpending.upsert({
     *   create: {
     *     // ... data to create a ProjectSpending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSpending we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSpendingUpsertArgs>(args: SelectSubset<T, ProjectSpendingUpsertArgs<ExtArgs>>): Prisma__ProjectSpendingClient<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectSpendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingCountArgs} args - Arguments to filter ProjectSpendings to count.
     * @example
     * // Count the number of ProjectSpendings
     * const count = await prisma.projectSpending.count({
     *   where: {
     *     // ... the filter for the ProjectSpendings we want to count
     *   }
     * })
    **/
    count<T extends ProjectSpendingCountArgs>(
      args?: Subset<T, ProjectSpendingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSpendingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSpending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectSpendingAggregateArgs>(args: Subset<T, ProjectSpendingAggregateArgs>): Prisma.PrismaPromise<GetProjectSpendingAggregateType<T>>

    /**
     * Group by ProjectSpending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSpendingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectSpendingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSpendingGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSpendingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectSpendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSpendingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSpending model
   */
  readonly fields: ProjectSpendingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSpending.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSpendingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectSpending model
   */
  interface ProjectSpendingFieldRefs {
    readonly id: FieldRef<"ProjectSpending", 'Int'>
    readonly projectId: FieldRef<"ProjectSpending", 'Int'>
    readonly userId: FieldRef<"ProjectSpending", 'Int'>
    readonly type: FieldRef<"ProjectSpending", 'SpendingType'>
    readonly amount: FieldRef<"ProjectSpending", 'Int'>
    readonly description: FieldRef<"ProjectSpending", 'String'>
    readonly createdAt: FieldRef<"ProjectSpending", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectSpending", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSpending findUnique
   */
  export type ProjectSpendingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSpending to fetch.
     */
    where: ProjectSpendingWhereUniqueInput
  }

  /**
   * ProjectSpending findUniqueOrThrow
   */
  export type ProjectSpendingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSpending to fetch.
     */
    where: ProjectSpendingWhereUniqueInput
  }

  /**
   * ProjectSpending findFirst
   */
  export type ProjectSpendingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSpending to fetch.
     */
    where?: ProjectSpendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSpendings to fetch.
     */
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSpendings.
     */
    cursor?: ProjectSpendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSpendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSpendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSpendings.
     */
    distinct?: ProjectSpendingScalarFieldEnum | ProjectSpendingScalarFieldEnum[]
  }

  /**
   * ProjectSpending findFirstOrThrow
   */
  export type ProjectSpendingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSpending to fetch.
     */
    where?: ProjectSpendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSpendings to fetch.
     */
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSpendings.
     */
    cursor?: ProjectSpendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSpendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSpendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSpendings.
     */
    distinct?: ProjectSpendingScalarFieldEnum | ProjectSpendingScalarFieldEnum[]
  }

  /**
   * ProjectSpending findMany
   */
  export type ProjectSpendingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSpendings to fetch.
     */
    where?: ProjectSpendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSpendings to fetch.
     */
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSpendings.
     */
    cursor?: ProjectSpendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSpendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSpendings.
     */
    skip?: number
    distinct?: ProjectSpendingScalarFieldEnum | ProjectSpendingScalarFieldEnum[]
  }

  /**
   * ProjectSpending create
   */
  export type ProjectSpendingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSpending.
     */
    data: XOR<ProjectSpendingCreateInput, ProjectSpendingUncheckedCreateInput>
  }

  /**
   * ProjectSpending createMany
   */
  export type ProjectSpendingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSpendings.
     */
    data: ProjectSpendingCreateManyInput | ProjectSpendingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSpending update
   */
  export type ProjectSpendingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSpending.
     */
    data: XOR<ProjectSpendingUpdateInput, ProjectSpendingUncheckedUpdateInput>
    /**
     * Choose, which ProjectSpending to update.
     */
    where: ProjectSpendingWhereUniqueInput
  }

  /**
   * ProjectSpending updateMany
   */
  export type ProjectSpendingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSpendings.
     */
    data: XOR<ProjectSpendingUpdateManyMutationInput, ProjectSpendingUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSpendings to update
     */
    where?: ProjectSpendingWhereInput
    /**
     * Limit how many ProjectSpendings to update.
     */
    limit?: number
  }

  /**
   * ProjectSpending upsert
   */
  export type ProjectSpendingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSpending to update in case it exists.
     */
    where: ProjectSpendingWhereUniqueInput
    /**
     * In case the ProjectSpending found by the `where` argument doesn't exist, create a new ProjectSpending with this data.
     */
    create: XOR<ProjectSpendingCreateInput, ProjectSpendingUncheckedCreateInput>
    /**
     * In case the ProjectSpending was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSpendingUpdateInput, ProjectSpendingUncheckedUpdateInput>
  }

  /**
   * ProjectSpending delete
   */
  export type ProjectSpendingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    /**
     * Filter which ProjectSpending to delete.
     */
    where: ProjectSpendingWhereUniqueInput
  }

  /**
   * ProjectSpending deleteMany
   */
  export type ProjectSpendingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSpendings to delete
     */
    where?: ProjectSpendingWhereInput
    /**
     * Limit how many ProjectSpendings to delete.
     */
    limit?: number
  }

  /**
   * ProjectSpending without action
   */
  export type ProjectSpendingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
  }


  /**
   * Model timelines
   */

  export type AggregateTimelines = {
    _count: TimelinesCountAggregateOutputType | null
    _avg: TimelinesAvgAggregateOutputType | null
    _sum: TimelinesSumAggregateOutputType | null
    _min: TimelinesMinAggregateOutputType | null
    _max: TimelinesMaxAggregateOutputType | null
  }

  export type TimelinesAvgAggregateOutputType = {
    id: number | null
  }

  export type TimelinesSumAggregateOutputType = {
    id: number | null
  }

  export type TimelinesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.timelines_type | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TimelinesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.timelines_type | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TimelinesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TimelinesAvgAggregateInputType = {
    id?: true
  }

  export type TimelinesSumAggregateInputType = {
    id?: true
  }

  export type TimelinesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type TimelinesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type TimelinesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TimelinesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timelines to aggregate.
     */
    where?: timelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     */
    orderBy?: timelinesOrderByWithRelationInput | timelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: timelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned timelines
    **/
    _count?: true | TimelinesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelinesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelinesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelinesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelinesMaxAggregateInputType
  }

  export type GetTimelinesAggregateType<T extends TimelinesAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelines[P]>
      : GetScalarType<T[P], AggregateTimelines[P]>
  }




  export type timelinesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: timelinesWhereInput
    orderBy?: timelinesOrderByWithAggregationInput | timelinesOrderByWithAggregationInput[]
    by: TimelinesScalarFieldEnum[] | TimelinesScalarFieldEnum
    having?: timelinesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelinesCountAggregateInputType | true
    _avg?: TimelinesAvgAggregateInputType
    _sum?: TimelinesSumAggregateInputType
    _min?: TimelinesMinAggregateInputType
    _max?: TimelinesMaxAggregateInputType
  }

  export type TimelinesGroupByOutputType = {
    id: number
    title: string
    description: string
    type: $Enums.timelines_type
    created_at: Date
    updated_at: Date
    _count: TimelinesCountAggregateOutputType | null
    _avg: TimelinesAvgAggregateOutputType | null
    _sum: TimelinesSumAggregateOutputType | null
    _min: TimelinesMinAggregateOutputType | null
    _max: TimelinesMaxAggregateOutputType | null
  }

  type GetTimelinesGroupByPayload<T extends timelinesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelinesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelinesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelinesGroupByOutputType[P]>
            : GetScalarType<T[P], TimelinesGroupByOutputType[P]>
        }
      >
    >


  export type timelinesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["timelines"]>



  export type timelinesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type timelinesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "created_at" | "updated_at", ExtArgs["result"]["timelines"]>

  export type $timelinesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "timelines"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      type: $Enums.timelines_type
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["timelines"]>
    composites: {}
  }

  type timelinesGetPayload<S extends boolean | null | undefined | timelinesDefaultArgs> = $Result.GetResult<Prisma.$timelinesPayload, S>

  type timelinesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<timelinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelinesCountAggregateInputType | true
    }

  export interface timelinesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['timelines'], meta: { name: 'timelines' } }
    /**
     * Find zero or one Timelines that matches the filter.
     * @param {timelinesFindUniqueArgs} args - Arguments to find a Timelines
     * @example
     * // Get one Timelines
     * const timelines = await prisma.timelines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends timelinesFindUniqueArgs>(args: SelectSubset<T, timelinesFindUniqueArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timelines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {timelinesFindUniqueOrThrowArgs} args - Arguments to find a Timelines
     * @example
     * // Get one Timelines
     * const timelines = await prisma.timelines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends timelinesFindUniqueOrThrowArgs>(args: SelectSubset<T, timelinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesFindFirstArgs} args - Arguments to find a Timelines
     * @example
     * // Get one Timelines
     * const timelines = await prisma.timelines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends timelinesFindFirstArgs>(args?: SelectSubset<T, timelinesFindFirstArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timelines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesFindFirstOrThrowArgs} args - Arguments to find a Timelines
     * @example
     * // Get one Timelines
     * const timelines = await prisma.timelines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends timelinesFindFirstOrThrowArgs>(args?: SelectSubset<T, timelinesFindFirstOrThrowArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timelines.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timelines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelinesWithIdOnly = await prisma.timelines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends timelinesFindManyArgs>(args?: SelectSubset<T, timelinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timelines.
     * @param {timelinesCreateArgs} args - Arguments to create a Timelines.
     * @example
     * // Create one Timelines
     * const Timelines = await prisma.timelines.create({
     *   data: {
     *     // ... data to create a Timelines
     *   }
     * })
     * 
     */
    create<T extends timelinesCreateArgs>(args: SelectSubset<T, timelinesCreateArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timelines.
     * @param {timelinesCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timelines = await prisma.timelines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends timelinesCreateManyArgs>(args?: SelectSubset<T, timelinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Timelines.
     * @param {timelinesDeleteArgs} args - Arguments to delete one Timelines.
     * @example
     * // Delete one Timelines
     * const Timelines = await prisma.timelines.delete({
     *   where: {
     *     // ... filter to delete one Timelines
     *   }
     * })
     * 
     */
    delete<T extends timelinesDeleteArgs>(args: SelectSubset<T, timelinesDeleteArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timelines.
     * @param {timelinesUpdateArgs} args - Arguments to update one Timelines.
     * @example
     * // Update one Timelines
     * const timelines = await prisma.timelines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends timelinesUpdateArgs>(args: SelectSubset<T, timelinesUpdateArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timelines.
     * @param {timelinesDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timelines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends timelinesDeleteManyArgs>(args?: SelectSubset<T, timelinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timelines = await prisma.timelines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends timelinesUpdateManyArgs>(args: SelectSubset<T, timelinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timelines.
     * @param {timelinesUpsertArgs} args - Arguments to update or create a Timelines.
     * @example
     * // Update or create a Timelines
     * const timelines = await prisma.timelines.upsert({
     *   create: {
     *     // ... data to create a Timelines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timelines we want to update
     *   }
     * })
     */
    upsert<T extends timelinesUpsertArgs>(args: SelectSubset<T, timelinesUpsertArgs<ExtArgs>>): Prisma__timelinesClient<$Result.GetResult<Prisma.$timelinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timelines.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends timelinesCountArgs>(
      args?: Subset<T, timelinesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelinesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimelinesAggregateArgs>(args: Subset<T, TimelinesAggregateArgs>): Prisma.PrismaPromise<GetTimelinesAggregateType<T>>

    /**
     * Group by Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {timelinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends timelinesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: timelinesGroupByArgs['orderBy'] }
        : { orderBy?: timelinesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, timelinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the timelines model
   */
  readonly fields: timelinesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for timelines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__timelinesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the timelines model
   */
  interface timelinesFieldRefs {
    readonly id: FieldRef<"timelines", 'Int'>
    readonly title: FieldRef<"timelines", 'String'>
    readonly description: FieldRef<"timelines", 'String'>
    readonly type: FieldRef<"timelines", 'timelines_type'>
    readonly created_at: FieldRef<"timelines", 'DateTime'>
    readonly updated_at: FieldRef<"timelines", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * timelines findUnique
   */
  export type timelinesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter, which timelines to fetch.
     */
    where: timelinesWhereUniqueInput
  }

  /**
   * timelines findUniqueOrThrow
   */
  export type timelinesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter, which timelines to fetch.
     */
    where: timelinesWhereUniqueInput
  }

  /**
   * timelines findFirst
   */
  export type timelinesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter, which timelines to fetch.
     */
    where?: timelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     */
    orderBy?: timelinesOrderByWithRelationInput | timelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelines.
     */
    cursor?: timelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelines.
     */
    distinct?: TimelinesScalarFieldEnum | TimelinesScalarFieldEnum[]
  }

  /**
   * timelines findFirstOrThrow
   */
  export type timelinesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter, which timelines to fetch.
     */
    where?: timelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     */
    orderBy?: timelinesOrderByWithRelationInput | timelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for timelines.
     */
    cursor?: timelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of timelines.
     */
    distinct?: TimelinesScalarFieldEnum | TimelinesScalarFieldEnum[]
  }

  /**
   * timelines findMany
   */
  export type timelinesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter, which timelines to fetch.
     */
    where?: timelinesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of timelines to fetch.
     */
    orderBy?: timelinesOrderByWithRelationInput | timelinesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing timelines.
     */
    cursor?: timelinesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` timelines.
     */
    skip?: number
    distinct?: TimelinesScalarFieldEnum | TimelinesScalarFieldEnum[]
  }

  /**
   * timelines create
   */
  export type timelinesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * The data needed to create a timelines.
     */
    data: XOR<timelinesCreateInput, timelinesUncheckedCreateInput>
  }

  /**
   * timelines createMany
   */
  export type timelinesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many timelines.
     */
    data: timelinesCreateManyInput | timelinesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * timelines update
   */
  export type timelinesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * The data needed to update a timelines.
     */
    data: XOR<timelinesUpdateInput, timelinesUncheckedUpdateInput>
    /**
     * Choose, which timelines to update.
     */
    where: timelinesWhereUniqueInput
  }

  /**
   * timelines updateMany
   */
  export type timelinesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update timelines.
     */
    data: XOR<timelinesUpdateManyMutationInput, timelinesUncheckedUpdateManyInput>
    /**
     * Filter which timelines to update
     */
    where?: timelinesWhereInput
    /**
     * Limit how many timelines to update.
     */
    limit?: number
  }

  /**
   * timelines upsert
   */
  export type timelinesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * The filter to search for the timelines to update in case it exists.
     */
    where: timelinesWhereUniqueInput
    /**
     * In case the timelines found by the `where` argument doesn't exist, create a new timelines with this data.
     */
    create: XOR<timelinesCreateInput, timelinesUncheckedCreateInput>
    /**
     * In case the timelines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<timelinesUpdateInput, timelinesUncheckedUpdateInput>
  }

  /**
   * timelines delete
   */
  export type timelinesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
    /**
     * Filter which timelines to delete.
     */
    where: timelinesWhereUniqueInput
  }

  /**
   * timelines deleteMany
   */
  export type timelinesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which timelines to delete
     */
    where?: timelinesWhereInput
    /**
     * Limit how many timelines to delete.
     */
    limit?: number
  }

  /**
   * timelines without action
   */
  export type timelinesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the timelines
     */
    select?: timelinesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the timelines
     */
    omit?: timelinesOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    job_position_id: number | null
    home_latitude: Decimal | null
    home_longitude: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    job_position_id: number | null
    home_latitude: Decimal | null
    home_longitude: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    work_id: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.users_role | null
    job_position_id: number | null
    home_latitude: Decimal | null
    home_longitude: Decimal | null
    gender: $Enums.users_gender | null
    profile_picture: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    work_id: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.users_role | null
    job_position_id: number | null
    home_latitude: Decimal | null
    home_longitude: Decimal | null
    gender: $Enums.users_gender | null
    profile_picture: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    password: number
    work_id: number
    created_at: number
    updated_at: number
    role: number
    job_position_id: number
    home_latitude: number
    home_longitude: number
    gender: number
    profile_picture: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    job_position_id?: true
    home_latitude?: true
    home_longitude?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    job_position_id?: true
    home_latitude?: true
    home_longitude?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    work_id?: true
    created_at?: true
    updated_at?: true
    role?: true
    job_position_id?: true
    home_latitude?: true
    home_longitude?: true
    gender?: true
    profile_picture?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    work_id?: true
    created_at?: true
    updated_at?: true
    role?: true
    job_position_id?: true
    home_latitude?: true
    home_longitude?: true
    gender?: true
    profile_picture?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    work_id?: true
    created_at?: true
    updated_at?: true
    role?: true
    job_position_id?: true
    home_latitude?: true
    home_longitude?: true
    gender?: true
    profile_picture?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    password: string | null
    work_id: string | null
    created_at: Date
    updated_at: Date
    role: $Enums.users_role
    job_position_id: number | null
    home_latitude: Decimal | null
    home_longitude: Decimal | null
    gender: $Enums.users_gender | null
    profile_picture: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    work_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    job_position_id?: boolean
    home_latitude?: boolean
    home_longitude?: boolean
    gender?: boolean
    profile_picture?: boolean
    logs?: boolean | users$logsArgs<ExtArgs>
    job_position?: boolean | users$job_positionArgs<ExtArgs>
    dayOffRequests?: boolean | users$dayOffRequestsArgs<ExtArgs>
    projectsLed?: boolean | users$projectsLedArgs<ExtArgs>
    projectsMembered?: boolean | users$projectsMemberedArgs<ExtArgs>
    projectActivity?: boolean | users$projectActivityArgs<ExtArgs>
    projectHistories?: boolean | users$projectHistoriesArgs<ExtArgs>
    projectSpendings?: boolean | users$projectSpendingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    work_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    job_position_id?: boolean
    home_latitude?: boolean
    home_longitude?: boolean
    gender?: boolean
    profile_picture?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "work_id" | "created_at" | "updated_at" | "role" | "job_position_id" | "home_latitude" | "home_longitude" | "gender" | "profile_picture", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | users$logsArgs<ExtArgs>
    job_position?: boolean | users$job_positionArgs<ExtArgs>
    dayOffRequests?: boolean | users$dayOffRequestsArgs<ExtArgs>
    projectsLed?: boolean | users$projectsLedArgs<ExtArgs>
    projectsMembered?: boolean | users$projectsMemberedArgs<ExtArgs>
    projectActivity?: boolean | users$projectActivityArgs<ExtArgs>
    projectHistories?: boolean | users$projectHistoriesArgs<ExtArgs>
    projectSpendings?: boolean | users$projectSpendingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      logs: Prisma.$logsPayload<ExtArgs>[]
      job_position: Prisma.$job_positionsPayload<ExtArgs> | null
      dayOffRequests: Prisma.$DayOffRequestPayload<ExtArgs>[]
      projectsLed: Prisma.$ProjectPayload<ExtArgs>[]
      projectsMembered: Prisma.$ProjectPayload<ExtArgs>[]
      projectActivity: Prisma.$ProjectActivityPayload<ExtArgs>[]
      projectHistories: Prisma.$ProjectHistoryPayload<ExtArgs>[]
      projectSpendings: Prisma.$ProjectSpendingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      password: string | null
      work_id: string | null
      created_at: Date
      updated_at: Date
      role: $Enums.users_role
      job_position_id: number | null
      home_latitude: Prisma.Decimal | null
      home_longitude: Prisma.Decimal | null
      gender: $Enums.users_gender | null
      profile_picture: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends users$logsArgs<ExtArgs> = {}>(args?: Subset<T, users$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_position<T extends users$job_positionArgs<ExtArgs> = {}>(args?: Subset<T, users$job_positionArgs<ExtArgs>>): Prisma__job_positionsClient<$Result.GetResult<Prisma.$job_positionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dayOffRequests<T extends users$dayOffRequestsArgs<ExtArgs> = {}>(args?: Subset<T, users$dayOffRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayOffRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsLed<T extends users$projectsLedArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsLedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsMembered<T extends users$projectsMemberedArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsMemberedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectActivity<T extends users$projectActivityArgs<ExtArgs> = {}>(args?: Subset<T, users$projectActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectHistories<T extends users$projectHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, users$projectHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectSpendings<T extends users$projectSpendingsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectSpendingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSpendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly work_id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly job_position_id: FieldRef<"users", 'Int'>
    readonly home_latitude: FieldRef<"users", 'Decimal'>
    readonly home_longitude: FieldRef<"users", 'Decimal'>
    readonly gender: FieldRef<"users", 'users_gender'>
    readonly profile_picture: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.logs
   */
  export type users$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * users.job_position
   */
  export type users$job_positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_positions
     */
    select?: job_positionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_positions
     */
    omit?: job_positionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: job_positionsInclude<ExtArgs> | null
    where?: job_positionsWhereInput
  }

  /**
   * users.dayOffRequests
   */
  export type users$dayOffRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayOffRequest
     */
    select?: DayOffRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DayOffRequest
     */
    omit?: DayOffRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayOffRequestInclude<ExtArgs> | null
    where?: DayOffRequestWhereInput
    orderBy?: DayOffRequestOrderByWithRelationInput | DayOffRequestOrderByWithRelationInput[]
    cursor?: DayOffRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayOffRequestScalarFieldEnum | DayOffRequestScalarFieldEnum[]
  }

  /**
   * users.projectsLed
   */
  export type users$projectsLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * users.projectsMembered
   */
  export type users$projectsMemberedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * users.projectActivity
   */
  export type users$projectActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    cursor?: ProjectActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * users.projectHistories
   */
  export type users$projectHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectHistory
     */
    select?: ProjectHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectHistory
     */
    omit?: ProjectHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectHistoryInclude<ExtArgs> | null
    where?: ProjectHistoryWhereInput
    orderBy?: ProjectHistoryOrderByWithRelationInput | ProjectHistoryOrderByWithRelationInput[]
    cursor?: ProjectHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectHistoryScalarFieldEnum | ProjectHistoryScalarFieldEnum[]
  }

  /**
   * users.projectSpendings
   */
  export type users$projectSpendingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSpending
     */
    select?: ProjectSpendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSpending
     */
    omit?: ProjectSpendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSpendingInclude<ExtArgs> | null
    where?: ProjectSpendingWhereInput
    orderBy?: ProjectSpendingOrderByWithRelationInput | ProjectSpendingOrderByWithRelationInput[]
    cursor?: ProjectSpendingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSpendingScalarFieldEnum | ProjectSpendingScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    updated_at: 'updated_at',
    tolerance_active: 'tolerance_active',
    tolerance_time: 'tolerance_time'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const DayOffRequestScalarFieldEnum: {
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

  export type DayOffRequestScalarFieldEnum = (typeof DayOffRequestScalarFieldEnum)[keyof typeof DayOffRequestScalarFieldEnum]


  export const DrinkAndFoodCostScalarFieldEnum: {
    id: 'id',
    category: 'category',
    amount: 'amount',
    cost: 'cost',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrinkAndFoodCostScalarFieldEnum = (typeof DrinkAndFoodCostScalarFieldEnum)[keyof typeof DrinkAndFoodCostScalarFieldEnum]


  export const HolidaysScalarFieldEnum: {
    id: 'id',
    date: 'date',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HolidaysScalarFieldEnum = (typeof HolidaysScalarFieldEnum)[keyof typeof HolidaysScalarFieldEnum]


  export const Job_positionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shift_start: 'shift_start',
    shift_end: 'shift_end',
    created_at: 'created_at',
    updated_at: 'updated_at',
    work_day: 'work_day',
    salary: 'salary'
  };

  export type Job_positionsScalarFieldEnum = (typeof Job_positionsScalarFieldEnum)[keyof typeof Job_positionsScalarFieldEnum]


  export const LogsScalarFieldEnum: {
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

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    fund: 'fund',
    title: 'title',
    status: 'status',
    priority: 'priority',
    projectLeadId: 'projectLeadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectActivityScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    dateTime: 'dateTime',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectActivityScalarFieldEnum = (typeof ProjectActivityScalarFieldEnum)[keyof typeof ProjectActivityScalarFieldEnum]


  export const ProjectHistoryScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    dateTime: 'dateTime',
    description: 'description',
    file: 'file',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectHistoryScalarFieldEnum = (typeof ProjectHistoryScalarFieldEnum)[keyof typeof ProjectHistoryScalarFieldEnum]


  export const ProjectSpendingScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectSpendingScalarFieldEnum = (typeof ProjectSpendingScalarFieldEnum)[keyof typeof ProjectSpendingScalarFieldEnum]


  export const TimelinesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TimelinesScalarFieldEnum = (typeof TimelinesScalarFieldEnum)[keyof typeof TimelinesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DayOffRequestOrderByRelevanceFieldEnum: {
    leaveType: 'leaveType',
    comment: 'comment'
  };

  export type DayOffRequestOrderByRelevanceFieldEnum = (typeof DayOffRequestOrderByRelevanceFieldEnum)[keyof typeof DayOffRequestOrderByRelevanceFieldEnum]


  export const DrinkAndFoodCostOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type DrinkAndFoodCostOrderByRelevanceFieldEnum = (typeof DrinkAndFoodCostOrderByRelevanceFieldEnum)[keyof typeof DrinkAndFoodCostOrderByRelevanceFieldEnum]


  export const holidaysOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type holidaysOrderByRelevanceFieldEnum = (typeof holidaysOrderByRelevanceFieldEnum)[keyof typeof holidaysOrderByRelevanceFieldEnum]


  export const job_positionsOrderByRelevanceFieldEnum: {
    name: 'name',
    shift_start: 'shift_start',
    shift_end: 'shift_end',
    work_day: 'work_day'
  };

  export type job_positionsOrderByRelevanceFieldEnum = (typeof job_positionsOrderByRelevanceFieldEnum)[keyof typeof job_positionsOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const logsOrderByRelevanceFieldEnum: {
    clock_in_picture: 'clock_in_picture',
    clock_out_picture: 'clock_out_picture'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const ProjectActivityOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type ProjectActivityOrderByRelevanceFieldEnum = (typeof ProjectActivityOrderByRelevanceFieldEnum)[keyof typeof ProjectActivityOrderByRelevanceFieldEnum]


  export const ProjectHistoryOrderByRelevanceFieldEnum: {
    description: 'description',
    file: 'file'
  };

  export type ProjectHistoryOrderByRelevanceFieldEnum = (typeof ProjectHistoryOrderByRelevanceFieldEnum)[keyof typeof ProjectHistoryOrderByRelevanceFieldEnum]


  export const ProjectSpendingOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type ProjectSpendingOrderByRelevanceFieldEnum = (typeof ProjectSpendingOrderByRelevanceFieldEnum)[keyof typeof ProjectSpendingOrderByRelevanceFieldEnum]


  export const timelinesOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type timelinesOrderByRelevanceFieldEnum = (typeof timelinesOrderByRelevanceFieldEnum)[keyof typeof timelinesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    password: 'password',
    work_id: 'work_id',
    profile_picture: 'profile_picture'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DayOffStatus'
   */
  export type EnumDayOffStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOffStatus'>
    


  /**
   * Reference to a field of type 'DrinkAndFoodCostCategory'
   */
  export type EnumDrinkAndFoodCostCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrinkAndFoodCostCategory'>
    


  /**
   * Reference to a field of type 'logs_type'
   */
  export type Enumlogs_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'logs_type'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'SpendingType'
   */
  export type EnumSpendingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpendingType'>
    


  /**
   * Reference to a field of type 'timelines_type'
   */
  export type Enumtimelines_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'timelines_type'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'users_gender'
   */
  export type Enumusers_genderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: IntFilter<"company"> | number
    latitude?: DecimalFilter<"company"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"company"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"company"> | Date | string
    updated_at?: DateTimeFilter<"company"> | Date | string
    tolerance_active?: BoolNullableFilter<"company"> | boolean | null
    tolerance_time?: IntFilter<"company"> | number
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tolerance_active?: SortOrderInput | SortOrder
    tolerance_time?: SortOrder
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    latitude?: DecimalFilter<"company"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"company"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"company"> | Date | string
    updated_at?: DateTimeFilter<"company"> | Date | string
    tolerance_active?: BoolNullableFilter<"company"> | boolean | null
    tolerance_time?: IntFilter<"company"> | number
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tolerance_active?: SortOrderInput | SortOrder
    tolerance_time?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"company"> | number
    latitude?: DecimalWithAggregatesFilter<"company"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"company"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
    tolerance_active?: BoolNullableWithAggregatesFilter<"company"> | boolean | null
    tolerance_time?: IntWithAggregatesFilter<"company"> | number
  }

  export type DayOffRequestWhereInput = {
    AND?: DayOffRequestWhereInput | DayOffRequestWhereInput[]
    OR?: DayOffRequestWhereInput[]
    NOT?: DayOffRequestWhereInput | DayOffRequestWhereInput[]
    id?: IntFilter<"DayOffRequest"> | number
    userId?: IntFilter<"DayOffRequest"> | number
    requestDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveType?: StringFilter<"DayOffRequest"> | string
    status?: EnumDayOffStatusFilter<"DayOffRequest"> | $Enums.DayOffStatus
    comment?: StringNullableFilter<"DayOffRequest"> | string | null
    leaveStartDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveEndDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    createdAt?: DateTimeFilter<"DayOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DayOffRequest"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type DayOffRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestDate?: SortOrder
    leaveType?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    leaveStartDate?: SortOrder
    leaveEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: DayOffRequestOrderByRelevanceInput
  }

  export type DayOffRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DayOffRequestWhereInput | DayOffRequestWhereInput[]
    OR?: DayOffRequestWhereInput[]
    NOT?: DayOffRequestWhereInput | DayOffRequestWhereInput[]
    userId?: IntFilter<"DayOffRequest"> | number
    requestDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveType?: StringFilter<"DayOffRequest"> | string
    status?: EnumDayOffStatusFilter<"DayOffRequest"> | $Enums.DayOffStatus
    comment?: StringNullableFilter<"DayOffRequest"> | string | null
    leaveStartDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveEndDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    createdAt?: DateTimeFilter<"DayOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DayOffRequest"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type DayOffRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestDate?: SortOrder
    leaveType?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    leaveStartDate?: SortOrder
    leaveEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DayOffRequestCountOrderByAggregateInput
    _avg?: DayOffRequestAvgOrderByAggregateInput
    _max?: DayOffRequestMaxOrderByAggregateInput
    _min?: DayOffRequestMinOrderByAggregateInput
    _sum?: DayOffRequestSumOrderByAggregateInput
  }

  export type DayOffRequestScalarWhereWithAggregatesInput = {
    AND?: DayOffRequestScalarWhereWithAggregatesInput | DayOffRequestScalarWhereWithAggregatesInput[]
    OR?: DayOffRequestScalarWhereWithAggregatesInput[]
    NOT?: DayOffRequestScalarWhereWithAggregatesInput | DayOffRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DayOffRequest"> | number
    userId?: IntWithAggregatesFilter<"DayOffRequest"> | number
    requestDate?: DateTimeWithAggregatesFilter<"DayOffRequest"> | Date | string
    leaveType?: StringWithAggregatesFilter<"DayOffRequest"> | string
    status?: EnumDayOffStatusWithAggregatesFilter<"DayOffRequest"> | $Enums.DayOffStatus
    comment?: StringNullableWithAggregatesFilter<"DayOffRequest"> | string | null
    leaveStartDate?: DateTimeWithAggregatesFilter<"DayOffRequest"> | Date | string
    leaveEndDate?: DateTimeWithAggregatesFilter<"DayOffRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DayOffRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DayOffRequest"> | Date | string
  }

  export type DrinkAndFoodCostWhereInput = {
    AND?: DrinkAndFoodCostWhereInput | DrinkAndFoodCostWhereInput[]
    OR?: DrinkAndFoodCostWhereInput[]
    NOT?: DrinkAndFoodCostWhereInput | DrinkAndFoodCostWhereInput[]
    id?: IntFilter<"DrinkAndFoodCost"> | number
    category?: EnumDrinkAndFoodCostCategoryFilter<"DrinkAndFoodCost"> | $Enums.DrinkAndFoodCostCategory
    amount?: IntFilter<"DrinkAndFoodCost"> | number
    cost?: IntFilter<"DrinkAndFoodCost"> | number
    description?: StringNullableFilter<"DrinkAndFoodCost"> | string | null
    date?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
    createdAt?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
    updatedAt?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
  }

  export type DrinkAndFoodCostOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DrinkAndFoodCostOrderByRelevanceInput
  }

  export type DrinkAndFoodCostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DrinkAndFoodCostWhereInput | DrinkAndFoodCostWhereInput[]
    OR?: DrinkAndFoodCostWhereInput[]
    NOT?: DrinkAndFoodCostWhereInput | DrinkAndFoodCostWhereInput[]
    category?: EnumDrinkAndFoodCostCategoryFilter<"DrinkAndFoodCost"> | $Enums.DrinkAndFoodCostCategory
    amount?: IntFilter<"DrinkAndFoodCost"> | number
    cost?: IntFilter<"DrinkAndFoodCost"> | number
    description?: StringNullableFilter<"DrinkAndFoodCost"> | string | null
    date?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
    createdAt?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
    updatedAt?: DateTimeFilter<"DrinkAndFoodCost"> | Date | string
  }, "id">

  export type DrinkAndFoodCostOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrinkAndFoodCostCountOrderByAggregateInput
    _avg?: DrinkAndFoodCostAvgOrderByAggregateInput
    _max?: DrinkAndFoodCostMaxOrderByAggregateInput
    _min?: DrinkAndFoodCostMinOrderByAggregateInput
    _sum?: DrinkAndFoodCostSumOrderByAggregateInput
  }

  export type DrinkAndFoodCostScalarWhereWithAggregatesInput = {
    AND?: DrinkAndFoodCostScalarWhereWithAggregatesInput | DrinkAndFoodCostScalarWhereWithAggregatesInput[]
    OR?: DrinkAndFoodCostScalarWhereWithAggregatesInput[]
    NOT?: DrinkAndFoodCostScalarWhereWithAggregatesInput | DrinkAndFoodCostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DrinkAndFoodCost"> | number
    category?: EnumDrinkAndFoodCostCategoryWithAggregatesFilter<"DrinkAndFoodCost"> | $Enums.DrinkAndFoodCostCategory
    amount?: IntWithAggregatesFilter<"DrinkAndFoodCost"> | number
    cost?: IntWithAggregatesFilter<"DrinkAndFoodCost"> | number
    description?: StringNullableWithAggregatesFilter<"DrinkAndFoodCost"> | string | null
    date?: DateTimeWithAggregatesFilter<"DrinkAndFoodCost"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DrinkAndFoodCost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DrinkAndFoodCost"> | Date | string
  }

  export type holidaysWhereInput = {
    AND?: holidaysWhereInput | holidaysWhereInput[]
    OR?: holidaysWhereInput[]
    NOT?: holidaysWhereInput | holidaysWhereInput[]
    id?: IntFilter<"holidays"> | number
    date?: DateTimeFilter<"holidays"> | Date | string
    name?: StringFilter<"holidays"> | string
    created_at?: DateTimeFilter<"holidays"> | Date | string
    updated_at?: DateTimeFilter<"holidays"> | Date | string
  }

  export type holidaysOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: holidaysOrderByRelevanceInput
  }

  export type holidaysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: holidaysWhereInput | holidaysWhereInput[]
    OR?: holidaysWhereInput[]
    NOT?: holidaysWhereInput | holidaysWhereInput[]
    date?: DateTimeFilter<"holidays"> | Date | string
    name?: StringFilter<"holidays"> | string
    created_at?: DateTimeFilter<"holidays"> | Date | string
    updated_at?: DateTimeFilter<"holidays"> | Date | string
  }, "id">

  export type holidaysOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: holidaysCountOrderByAggregateInput
    _avg?: holidaysAvgOrderByAggregateInput
    _max?: holidaysMaxOrderByAggregateInput
    _min?: holidaysMinOrderByAggregateInput
    _sum?: holidaysSumOrderByAggregateInput
  }

  export type holidaysScalarWhereWithAggregatesInput = {
    AND?: holidaysScalarWhereWithAggregatesInput | holidaysScalarWhereWithAggregatesInput[]
    OR?: holidaysScalarWhereWithAggregatesInput[]
    NOT?: holidaysScalarWhereWithAggregatesInput | holidaysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"holidays"> | number
    date?: DateTimeWithAggregatesFilter<"holidays"> | Date | string
    name?: StringWithAggregatesFilter<"holidays"> | string
    created_at?: DateTimeWithAggregatesFilter<"holidays"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"holidays"> | Date | string
  }

  export type job_positionsWhereInput = {
    AND?: job_positionsWhereInput | job_positionsWhereInput[]
    OR?: job_positionsWhereInput[]
    NOT?: job_positionsWhereInput | job_positionsWhereInput[]
    id?: IntFilter<"job_positions"> | number
    name?: StringFilter<"job_positions"> | string
    shift_start?: StringFilter<"job_positions"> | string
    shift_end?: StringFilter<"job_positions"> | string
    created_at?: DateTimeFilter<"job_positions"> | Date | string
    updated_at?: DateTimeFilter<"job_positions"> | Date | string
    work_day?: StringNullableFilter<"job_positions"> | string | null
    salary?: IntFilter<"job_positions"> | number
    users?: UsersListRelationFilter
  }

  export type job_positionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_day?: SortOrderInput | SortOrder
    salary?: SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: job_positionsOrderByRelevanceInput
  }

  export type job_positionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: job_positionsWhereInput | job_positionsWhereInput[]
    OR?: job_positionsWhereInput[]
    NOT?: job_positionsWhereInput | job_positionsWhereInput[]
    name?: StringFilter<"job_positions"> | string
    shift_start?: StringFilter<"job_positions"> | string
    shift_end?: StringFilter<"job_positions"> | string
    created_at?: DateTimeFilter<"job_positions"> | Date | string
    updated_at?: DateTimeFilter<"job_positions"> | Date | string
    work_day?: StringNullableFilter<"job_positions"> | string | null
    salary?: IntFilter<"job_positions"> | number
    users?: UsersListRelationFilter
  }, "id">

  export type job_positionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_day?: SortOrderInput | SortOrder
    salary?: SortOrder
    _count?: job_positionsCountOrderByAggregateInput
    _avg?: job_positionsAvgOrderByAggregateInput
    _max?: job_positionsMaxOrderByAggregateInput
    _min?: job_positionsMinOrderByAggregateInput
    _sum?: job_positionsSumOrderByAggregateInput
  }

  export type job_positionsScalarWhereWithAggregatesInput = {
    AND?: job_positionsScalarWhereWithAggregatesInput | job_positionsScalarWhereWithAggregatesInput[]
    OR?: job_positionsScalarWhereWithAggregatesInput[]
    NOT?: job_positionsScalarWhereWithAggregatesInput | job_positionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"job_positions"> | number
    name?: StringWithAggregatesFilter<"job_positions"> | string
    shift_start?: StringWithAggregatesFilter<"job_positions"> | string
    shift_end?: StringWithAggregatesFilter<"job_positions"> | string
    created_at?: DateTimeWithAggregatesFilter<"job_positions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"job_positions"> | Date | string
    work_day?: StringNullableWithAggregatesFilter<"job_positions"> | string | null
    salary?: IntWithAggregatesFilter<"job_positions"> | number
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: IntFilter<"logs"> | number
    type?: Enumlogs_typeFilter<"logs"> | $Enums.logs_type
    user_id?: IntNullableFilter<"logs"> | number | null
    date?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"logs"> | Date | string
    updated_at?: DateTimeFilter<"logs"> | Date | string
    work?: JsonNullableFilter<"logs">
    clock_out_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_out_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFilter<"logs"> | boolean
    afterHourOvertime?: BoolFilter<"logs"> | boolean
    clock_in_picture?: StringNullableFilter<"logs"> | string | null
    clock_out_picture?: StringNullableFilter<"logs"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    user_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    clock_in_time?: SortOrderInput | SortOrder
    clock_in_latitude?: SortOrderInput | SortOrder
    clock_in_longitude?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work?: SortOrderInput | SortOrder
    clock_out_time?: SortOrderInput | SortOrder
    clock_out_latitude?: SortOrderInput | SortOrder
    clock_out_longitude?: SortOrderInput | SortOrder
    isOverTime?: SortOrder
    afterHourOvertime?: SortOrder
    clock_in_picture?: SortOrderInput | SortOrder
    clock_out_picture?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: logsOrderByRelevanceInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    type?: Enumlogs_typeFilter<"logs"> | $Enums.logs_type
    user_id?: IntNullableFilter<"logs"> | number | null
    date?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"logs"> | Date | string
    updated_at?: DateTimeFilter<"logs"> | Date | string
    work?: JsonNullableFilter<"logs">
    clock_out_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_out_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFilter<"logs"> | boolean
    afterHourOvertime?: BoolFilter<"logs"> | boolean
    clock_in_picture?: StringNullableFilter<"logs"> | string | null
    clock_out_picture?: StringNullableFilter<"logs"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    user_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    clock_in_time?: SortOrderInput | SortOrder
    clock_in_latitude?: SortOrderInput | SortOrder
    clock_in_longitude?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work?: SortOrderInput | SortOrder
    clock_out_time?: SortOrderInput | SortOrder
    clock_out_latitude?: SortOrderInput | SortOrder
    clock_out_longitude?: SortOrderInput | SortOrder
    isOverTime?: SortOrder
    afterHourOvertime?: SortOrder
    clock_in_picture?: SortOrderInput | SortOrder
    clock_out_picture?: SortOrderInput | SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logs"> | number
    type?: Enumlogs_typeWithAggregatesFilter<"logs"> | $Enums.logs_type
    user_id?: IntNullableWithAggregatesFilter<"logs"> | number | null
    date?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
    clock_in_time?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
    clock_in_latitude?: DecimalNullableWithAggregatesFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: DecimalNullableWithAggregatesFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"logs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"logs"> | Date | string
    work?: JsonNullableWithAggregatesFilter<"logs">
    clock_out_time?: DateTimeNullableWithAggregatesFilter<"logs"> | Date | string | null
    clock_out_latitude?: DecimalNullableWithAggregatesFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: DecimalNullableWithAggregatesFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolWithAggregatesFilter<"logs"> | boolean
    afterHourOvertime?: BoolWithAggregatesFilter<"logs"> | boolean
    clock_in_picture?: StringNullableWithAggregatesFilter<"logs"> | string | null
    clock_out_picture?: StringNullableWithAggregatesFilter<"logs"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    fund?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    priority?: EnumPriorityFilter<"Project"> | $Enums.Priority
    projectLeadId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectLead?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projectMembers?: UsersListRelationFilter
    activity?: ProjectActivityListRelationFilter
    histories?: ProjectHistoryListRelationFilter
    spendings?: ProjectSpendingListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    fund?: SortOrder
    title?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    projectLeadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectLead?: usersOrderByWithRelationInput
    projectMembers?: usersOrderByRelationAggregateInput
    activity?: ProjectActivityOrderByRelationAggregateInput
    histories?: ProjectHistoryOrderByRelationAggregateInput
    spendings?: ProjectSpendingOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    fund?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    priority?: EnumPriorityFilter<"Project"> | $Enums.Priority
    projectLeadId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    projectLead?: XOR<UsersScalarRelationFilter, usersWhereInput>
    projectMembers?: UsersListRelationFilter
    activity?: ProjectActivityListRelationFilter
    histories?: ProjectHistoryListRelationFilter
    spendings?: ProjectSpendingListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    fund?: SortOrder
    title?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    projectLeadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    fund?: IntWithAggregatesFilter<"Project"> | number
    title?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    priority?: EnumPriorityWithAggregatesFilter<"Project"> | $Enums.Priority
    projectLeadId?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectActivityWhereInput = {
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    id?: IntFilter<"ProjectActivity"> | number
    projectId?: IntFilter<"ProjectActivity"> | number
    userId?: IntFilter<"ProjectActivity"> | number
    dateTime?: DateTimeFilter<"ProjectActivity"> | Date | string
    description?: StringFilter<"ProjectActivity"> | string
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ProjectActivityOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    _relevance?: ProjectActivityOrderByRelevanceInput
  }

  export type ProjectActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    projectId?: IntFilter<"ProjectActivity"> | number
    userId?: IntFilter<"ProjectActivity"> | number
    dateTime?: DateTimeFilter<"ProjectActivity"> | Date | string
    description?: StringFilter<"ProjectActivity"> | string
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type ProjectActivityOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectActivityCountOrderByAggregateInput
    _avg?: ProjectActivityAvgOrderByAggregateInput
    _max?: ProjectActivityMaxOrderByAggregateInput
    _min?: ProjectActivityMinOrderByAggregateInput
    _sum?: ProjectActivitySumOrderByAggregateInput
  }

  export type ProjectActivityScalarWhereWithAggregatesInput = {
    AND?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    OR?: ProjectActivityScalarWhereWithAggregatesInput[]
    NOT?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectActivity"> | number
    projectId?: IntWithAggregatesFilter<"ProjectActivity"> | number
    userId?: IntWithAggregatesFilter<"ProjectActivity"> | number
    dateTime?: DateTimeWithAggregatesFilter<"ProjectActivity"> | Date | string
    description?: StringWithAggregatesFilter<"ProjectActivity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectActivity"> | Date | string
  }

  export type ProjectHistoryWhereInput = {
    AND?: ProjectHistoryWhereInput | ProjectHistoryWhereInput[]
    OR?: ProjectHistoryWhereInput[]
    NOT?: ProjectHistoryWhereInput | ProjectHistoryWhereInput[]
    id?: IntFilter<"ProjectHistory"> | number
    projectId?: IntFilter<"ProjectHistory"> | number
    userId?: IntFilter<"ProjectHistory"> | number
    dateTime?: DateTimeFilter<"ProjectHistory"> | Date | string
    description?: StringFilter<"ProjectHistory"> | string
    file?: StringNullableFilter<"ProjectHistory"> | string | null
    createdAt?: DateTimeFilter<"ProjectHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectHistory"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ProjectHistoryOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    file?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    _relevance?: ProjectHistoryOrderByRelevanceInput
  }

  export type ProjectHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectHistoryWhereInput | ProjectHistoryWhereInput[]
    OR?: ProjectHistoryWhereInput[]
    NOT?: ProjectHistoryWhereInput | ProjectHistoryWhereInput[]
    projectId?: IntFilter<"ProjectHistory"> | number
    userId?: IntFilter<"ProjectHistory"> | number
    dateTime?: DateTimeFilter<"ProjectHistory"> | Date | string
    description?: StringFilter<"ProjectHistory"> | string
    file?: StringNullableFilter<"ProjectHistory"> | string | null
    createdAt?: DateTimeFilter<"ProjectHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectHistory"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type ProjectHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    file?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectHistoryCountOrderByAggregateInput
    _avg?: ProjectHistoryAvgOrderByAggregateInput
    _max?: ProjectHistoryMaxOrderByAggregateInput
    _min?: ProjectHistoryMinOrderByAggregateInput
    _sum?: ProjectHistorySumOrderByAggregateInput
  }

  export type ProjectHistoryScalarWhereWithAggregatesInput = {
    AND?: ProjectHistoryScalarWhereWithAggregatesInput | ProjectHistoryScalarWhereWithAggregatesInput[]
    OR?: ProjectHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProjectHistoryScalarWhereWithAggregatesInput | ProjectHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectHistory"> | number
    projectId?: IntWithAggregatesFilter<"ProjectHistory"> | number
    userId?: IntWithAggregatesFilter<"ProjectHistory"> | number
    dateTime?: DateTimeWithAggregatesFilter<"ProjectHistory"> | Date | string
    description?: StringWithAggregatesFilter<"ProjectHistory"> | string
    file?: StringNullableWithAggregatesFilter<"ProjectHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectHistory"> | Date | string
  }

  export type ProjectSpendingWhereInput = {
    AND?: ProjectSpendingWhereInput | ProjectSpendingWhereInput[]
    OR?: ProjectSpendingWhereInput[]
    NOT?: ProjectSpendingWhereInput | ProjectSpendingWhereInput[]
    id?: IntFilter<"ProjectSpending"> | number
    projectId?: IntFilter<"ProjectSpending"> | number
    userId?: IntFilter<"ProjectSpending"> | number
    type?: EnumSpendingTypeFilter<"ProjectSpending"> | $Enums.SpendingType
    amount?: IntFilter<"ProjectSpending"> | number
    description?: StringNullableFilter<"ProjectSpending"> | string | null
    createdAt?: DateTimeFilter<"ProjectSpending"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSpending"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ProjectSpendingOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    _relevance?: ProjectSpendingOrderByRelevanceInput
  }

  export type ProjectSpendingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectSpendingWhereInput | ProjectSpendingWhereInput[]
    OR?: ProjectSpendingWhereInput[]
    NOT?: ProjectSpendingWhereInput | ProjectSpendingWhereInput[]
    projectId?: IntFilter<"ProjectSpending"> | number
    userId?: IntFilter<"ProjectSpending"> | number
    type?: EnumSpendingTypeFilter<"ProjectSpending"> | $Enums.SpendingType
    amount?: IntFilter<"ProjectSpending"> | number
    description?: StringNullableFilter<"ProjectSpending"> | string | null
    createdAt?: DateTimeFilter<"ProjectSpending"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSpending"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type ProjectSpendingOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectSpendingCountOrderByAggregateInput
    _avg?: ProjectSpendingAvgOrderByAggregateInput
    _max?: ProjectSpendingMaxOrderByAggregateInput
    _min?: ProjectSpendingMinOrderByAggregateInput
    _sum?: ProjectSpendingSumOrderByAggregateInput
  }

  export type ProjectSpendingScalarWhereWithAggregatesInput = {
    AND?: ProjectSpendingScalarWhereWithAggregatesInput | ProjectSpendingScalarWhereWithAggregatesInput[]
    OR?: ProjectSpendingScalarWhereWithAggregatesInput[]
    NOT?: ProjectSpendingScalarWhereWithAggregatesInput | ProjectSpendingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectSpending"> | number
    projectId?: IntWithAggregatesFilter<"ProjectSpending"> | number
    userId?: IntWithAggregatesFilter<"ProjectSpending"> | number
    type?: EnumSpendingTypeWithAggregatesFilter<"ProjectSpending"> | $Enums.SpendingType
    amount?: IntWithAggregatesFilter<"ProjectSpending"> | number
    description?: StringNullableWithAggregatesFilter<"ProjectSpending"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectSpending"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectSpending"> | Date | string
  }

  export type timelinesWhereInput = {
    AND?: timelinesWhereInput | timelinesWhereInput[]
    OR?: timelinesWhereInput[]
    NOT?: timelinesWhereInput | timelinesWhereInput[]
    id?: IntFilter<"timelines"> | number
    title?: StringFilter<"timelines"> | string
    description?: StringFilter<"timelines"> | string
    type?: Enumtimelines_typeFilter<"timelines"> | $Enums.timelines_type
    created_at?: DateTimeFilter<"timelines"> | Date | string
    updated_at?: DateTimeFilter<"timelines"> | Date | string
  }

  export type timelinesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: timelinesOrderByRelevanceInput
  }

  export type timelinesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: timelinesWhereInput | timelinesWhereInput[]
    OR?: timelinesWhereInput[]
    NOT?: timelinesWhereInput | timelinesWhereInput[]
    title?: StringFilter<"timelines"> | string
    description?: StringFilter<"timelines"> | string
    type?: Enumtimelines_typeFilter<"timelines"> | $Enums.timelines_type
    created_at?: DateTimeFilter<"timelines"> | Date | string
    updated_at?: DateTimeFilter<"timelines"> | Date | string
  }, "id">

  export type timelinesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: timelinesCountOrderByAggregateInput
    _avg?: timelinesAvgOrderByAggregateInput
    _max?: timelinesMaxOrderByAggregateInput
    _min?: timelinesMinOrderByAggregateInput
    _sum?: timelinesSumOrderByAggregateInput
  }

  export type timelinesScalarWhereWithAggregatesInput = {
    AND?: timelinesScalarWhereWithAggregatesInput | timelinesScalarWhereWithAggregatesInput[]
    OR?: timelinesScalarWhereWithAggregatesInput[]
    NOT?: timelinesScalarWhereWithAggregatesInput | timelinesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"timelines"> | number
    title?: StringWithAggregatesFilter<"timelines"> | string
    description?: StringWithAggregatesFilter<"timelines"> | string
    type?: Enumtimelines_typeWithAggregatesFilter<"timelines"> | $Enums.timelines_type
    created_at?: DateTimeWithAggregatesFilter<"timelines"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"timelines"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    work_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    job_position_id?: IntNullableFilter<"users"> | number | null
    home_latitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    home_longitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    gender?: Enumusers_genderNullableFilter<"users"> | $Enums.users_gender | null
    profile_picture?: StringNullableFilter<"users"> | string | null
    logs?: LogsListRelationFilter
    job_position?: XOR<Job_positionsNullableScalarRelationFilter, job_positionsWhereInput> | null
    dayOffRequests?: DayOffRequestListRelationFilter
    projectsLed?: ProjectListRelationFilter
    projectsMembered?: ProjectListRelationFilter
    projectActivity?: ProjectActivityListRelationFilter
    projectHistories?: ProjectHistoryListRelationFilter
    projectSpendings?: ProjectSpendingListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    work_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    job_position_id?: SortOrderInput | SortOrder
    home_latitude?: SortOrderInput | SortOrder
    home_longitude?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    logs?: logsOrderByRelationAggregateInput
    job_position?: job_positionsOrderByWithRelationInput
    dayOffRequests?: DayOffRequestOrderByRelationAggregateInput
    projectsLed?: ProjectOrderByRelationAggregateInput
    projectsMembered?: ProjectOrderByRelationAggregateInput
    projectActivity?: ProjectActivityOrderByRelationAggregateInput
    projectHistories?: ProjectHistoryOrderByRelationAggregateInput
    projectSpendings?: ProjectSpendingOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    work_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    job_position_id?: IntNullableFilter<"users"> | number | null
    home_latitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    home_longitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    gender?: Enumusers_genderNullableFilter<"users"> | $Enums.users_gender | null
    profile_picture?: StringNullableFilter<"users"> | string | null
    logs?: LogsListRelationFilter
    job_position?: XOR<Job_positionsNullableScalarRelationFilter, job_positionsWhereInput> | null
    dayOffRequests?: DayOffRequestListRelationFilter
    projectsLed?: ProjectListRelationFilter
    projectsMembered?: ProjectListRelationFilter
    projectActivity?: ProjectActivityListRelationFilter
    projectHistories?: ProjectHistoryListRelationFilter
    projectSpendings?: ProjectSpendingListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    work_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    job_position_id?: SortOrderInput | SortOrder
    home_latitude?: SortOrderInput | SortOrder
    home_longitude?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    work_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    job_position_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    home_latitude?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    home_longitude?: DecimalNullableWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    gender?: Enumusers_genderNullableWithAggregatesFilter<"users"> | $Enums.users_gender | null
    profile_picture?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type companyCreateInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    tolerance_active?: boolean | null
    tolerance_time?: number
  }

  export type companyUncheckedCreateInput = {
    id?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    tolerance_active?: boolean | null
    tolerance_time?: number
  }

  export type companyUpdateInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tolerance_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tolerance_time?: IntFieldUpdateOperationsInput | number
  }

  export type companyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tolerance_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tolerance_time?: IntFieldUpdateOperationsInput | number
  }

  export type companyCreateManyInput = {
    id?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    tolerance_active?: boolean | null
    tolerance_time?: number
  }

  export type companyUpdateManyMutationInput = {
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tolerance_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tolerance_time?: IntFieldUpdateOperationsInput | number
  }

  export type companyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tolerance_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tolerance_time?: IntFieldUpdateOperationsInput | number
  }

  export type DayOffRequestCreateInput = {
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutDayOffRequestsInput
  }

  export type DayOffRequestUncheckedCreateInput = {
    id?: number
    userId: number
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOffRequestUpdateInput = {
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutDayOffRequestsNestedInput
  }

  export type DayOffRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOffRequestCreateManyInput = {
    id?: number
    userId: number
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOffRequestUpdateManyMutationInput = {
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOffRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkAndFoodCostCreateInput = {
    category: $Enums.DrinkAndFoodCostCategory
    amount: number
    cost: number
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkAndFoodCostUncheckedCreateInput = {
    id?: number
    category: $Enums.DrinkAndFoodCostCategory
    amount: number
    cost: number
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkAndFoodCostUpdateInput = {
    category?: EnumDrinkAndFoodCostCategoryFieldUpdateOperationsInput | $Enums.DrinkAndFoodCostCategory
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkAndFoodCostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumDrinkAndFoodCostCategoryFieldUpdateOperationsInput | $Enums.DrinkAndFoodCostCategory
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkAndFoodCostCreateManyInput = {
    id?: number
    category: $Enums.DrinkAndFoodCostCategory
    amount: number
    cost: number
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkAndFoodCostUpdateManyMutationInput = {
    category?: EnumDrinkAndFoodCostCategoryFieldUpdateOperationsInput | $Enums.DrinkAndFoodCostCategory
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkAndFoodCostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumDrinkAndFoodCostCategoryFieldUpdateOperationsInput | $Enums.DrinkAndFoodCostCategory
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidaysCreateInput = {
    date: Date | string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type holidaysUncheckedCreateInput = {
    id?: number
    date: Date | string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type holidaysUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidaysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidaysCreateManyInput = {
    id?: number
    date: Date | string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type holidaysUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidaysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type job_positionsCreateInput = {
    name: string
    shift_start: string
    shift_end: string
    created_at?: Date | string
    updated_at?: Date | string
    work_day?: string | null
    salary: number
    users?: usersCreateNestedManyWithoutJob_positionInput
  }

  export type job_positionsUncheckedCreateInput = {
    id?: number
    name: string
    shift_start: string
    shift_end: string
    created_at?: Date | string
    updated_at?: Date | string
    work_day?: string | null
    salary: number
    users?: usersUncheckedCreateNestedManyWithoutJob_positionInput
  }

  export type job_positionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateManyWithoutJob_positionNestedInput
  }

  export type job_positionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
    users?: usersUncheckedUpdateManyWithoutJob_positionNestedInput
  }

  export type job_positionsCreateManyInput = {
    id?: number
    name: string
    shift_start: string
    shift_end: string
    created_at?: Date | string
    updated_at?: Date | string
    work_day?: string | null
    salary: number
  }

  export type job_positionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
  }

  export type job_positionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
  }

  export type logsCreateInput = {
    type?: $Enums.logs_type
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
    user?: usersCreateNestedOneWithoutLogsInput
  }

  export type logsUncheckedCreateInput = {
    id?: number
    type?: $Enums.logs_type
    user_id?: number | null
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
  }

  export type logsUpdateInput = {
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneWithoutLogsNestedInput
  }

  export type logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logsCreateManyInput = {
    id?: number
    type?: $Enums.logs_type
    user_id?: number | null
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
  }

  export type logsUpdateManyMutationInput = {
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectLead: usersCreateNestedOneWithoutProjectsLedInput
    projectMembers?: usersCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersUncheckedCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectLead?: usersUpdateOneRequiredWithoutProjectsLedNestedInput
    projectMembers?: usersUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateInput = {
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivityInput
    user: usersCreateNestedOneWithoutProjectActivityInput
  }

  export type ProjectActivityUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectActivityUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivityNestedInput
    user?: usersUpdateOneRequiredWithoutProjectActivityNestedInput
  }

  export type ProjectActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectActivityUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryCreateInput = {
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutHistoriesInput
    user: usersCreateNestedOneWithoutProjectHistoriesInput
  }

  export type ProjectHistoryUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutHistoriesNestedInput
    user?: usersUpdateOneRequiredWithoutProjectHistoriesNestedInput
  }

  export type ProjectHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingCreateInput = {
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSpendingsInput
    user: usersCreateNestedOneWithoutProjectSpendingsInput
  }

  export type ProjectSpendingUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingUpdateInput = {
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSpendingsNestedInput
    user?: usersUpdateOneRequiredWithoutProjectSpendingsNestedInput
  }

  export type ProjectSpendingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingUpdateManyMutationInput = {
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelinesCreateInput = {
    title: string
    description: string
    type: $Enums.timelines_type
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type timelinesUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    type: $Enums.timelines_type
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type timelinesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: Enumtimelines_typeFieldUpdateOperationsInput | $Enums.timelines_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelinesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: Enumtimelines_typeFieldUpdateOperationsInput | $Enums.timelines_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelinesCreateManyInput = {
    id?: number
    title: string
    description: string
    type: $Enums.timelines_type
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type timelinesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: Enumtimelines_typeFieldUpdateOperationsInput | $Enums.timelines_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type timelinesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: Enumtimelines_typeFieldUpdateOperationsInput | $Enums.timelines_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tolerance_active?: SortOrder
    tolerance_time?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tolerance_time?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tolerance_active?: SortOrder
    tolerance_time?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tolerance_active?: SortOrder
    tolerance_time?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    tolerance_time?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumDayOffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOffStatus | EnumDayOffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DayOffStatus[]
    notIn?: $Enums.DayOffStatus[]
    not?: NestedEnumDayOffStatusFilter<$PrismaModel> | $Enums.DayOffStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type DayOffRequestOrderByRelevanceInput = {
    fields: DayOffRequestOrderByRelevanceFieldEnum | DayOffRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DayOffRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestDate?: SortOrder
    leaveType?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    leaveStartDate?: SortOrder
    leaveEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayOffRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DayOffRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestDate?: SortOrder
    leaveType?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    leaveStartDate?: SortOrder
    leaveEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayOffRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestDate?: SortOrder
    leaveType?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    leaveStartDate?: SortOrder
    leaveEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayOffRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumDayOffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOffStatus | EnumDayOffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DayOffStatus[]
    notIn?: $Enums.DayOffStatus[]
    not?: NestedEnumDayOffStatusWithAggregatesFilter<$PrismaModel> | $Enums.DayOffStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOffStatusFilter<$PrismaModel>
    _max?: NestedEnumDayOffStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDrinkAndFoodCostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DrinkAndFoodCostCategory | EnumDrinkAndFoodCostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DrinkAndFoodCostCategory[]
    notIn?: $Enums.DrinkAndFoodCostCategory[]
    not?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel> | $Enums.DrinkAndFoodCostCategory
  }

  export type DrinkAndFoodCostOrderByRelevanceInput = {
    fields: DrinkAndFoodCostOrderByRelevanceFieldEnum | DrinkAndFoodCostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DrinkAndFoodCostCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkAndFoodCostAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
  }

  export type DrinkAndFoodCostMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkAndFoodCostMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkAndFoodCostSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
  }

  export type EnumDrinkAndFoodCostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrinkAndFoodCostCategory | EnumDrinkAndFoodCostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DrinkAndFoodCostCategory[]
    notIn?: $Enums.DrinkAndFoodCostCategory[]
    not?: NestedEnumDrinkAndFoodCostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DrinkAndFoodCostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel>
    _max?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel>
  }

  export type holidaysOrderByRelevanceInput = {
    fields: holidaysOrderByRelevanceFieldEnum | holidaysOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type holidaysCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type holidaysAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type holidaysMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type holidaysMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type holidaysSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type job_positionsOrderByRelevanceInput = {
    fields: job_positionsOrderByRelevanceFieldEnum | job_positionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type job_positionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_day?: SortOrder
    salary?: SortOrder
  }

  export type job_positionsAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type job_positionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_day?: SortOrder
    salary?: SortOrder
  }

  export type job_positionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_day?: SortOrder
    salary?: SortOrder
  }

  export type job_positionsSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type Enumlogs_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.logs_type | Enumlogs_typeFieldRefInput<$PrismaModel>
    in?: $Enums.logs_type[]
    notIn?: $Enums.logs_type[]
    not?: NestedEnumlogs_typeFilter<$PrismaModel> | $Enums.logs_type
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type logsOrderByRelevanceInput = {
    fields: logsOrderByRelevanceFieldEnum | logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    clock_in_time?: SortOrder
    clock_in_latitude?: SortOrder
    clock_in_longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work?: SortOrder
    clock_out_time?: SortOrder
    clock_out_latitude?: SortOrder
    clock_out_longitude?: SortOrder
    isOverTime?: SortOrder
    afterHourOvertime?: SortOrder
    clock_in_picture?: SortOrder
    clock_out_picture?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    clock_in_latitude?: SortOrder
    clock_in_longitude?: SortOrder
    clock_out_latitude?: SortOrder
    clock_out_longitude?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    clock_in_time?: SortOrder
    clock_in_latitude?: SortOrder
    clock_in_longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clock_out_time?: SortOrder
    clock_out_latitude?: SortOrder
    clock_out_longitude?: SortOrder
    isOverTime?: SortOrder
    afterHourOvertime?: SortOrder
    clock_in_picture?: SortOrder
    clock_out_picture?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    clock_in_time?: SortOrder
    clock_in_latitude?: SortOrder
    clock_in_longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clock_out_time?: SortOrder
    clock_out_latitude?: SortOrder
    clock_out_longitude?: SortOrder
    isOverTime?: SortOrder
    afterHourOvertime?: SortOrder
    clock_in_picture?: SortOrder
    clock_out_picture?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    clock_in_latitude?: SortOrder
    clock_in_longitude?: SortOrder
    clock_out_latitude?: SortOrder
    clock_out_longitude?: SortOrder
  }

  export type Enumlogs_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.logs_type | Enumlogs_typeFieldRefInput<$PrismaModel>
    in?: $Enums.logs_type[]
    notIn?: $Enums.logs_type[]
    not?: NestedEnumlogs_typeWithAggregatesFilter<$PrismaModel> | $Enums.logs_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlogs_typeFilter<$PrismaModel>
    _max?: NestedEnumlogs_typeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type ProjectActivityListRelationFilter = {
    every?: ProjectActivityWhereInput
    some?: ProjectActivityWhereInput
    none?: ProjectActivityWhereInput
  }

  export type ProjectHistoryListRelationFilter = {
    every?: ProjectHistoryWhereInput
    some?: ProjectHistoryWhereInput
    none?: ProjectHistoryWhereInput
  }

  export type ProjectSpendingListRelationFilter = {
    every?: ProjectSpendingWhereInput
    some?: ProjectSpendingWhereInput
    none?: ProjectSpendingWhereInput
  }

  export type ProjectActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectSpendingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    fund?: SortOrder
    title?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    projectLeadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    fund?: SortOrder
    projectLeadId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    fund?: SortOrder
    title?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    projectLeadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    fund?: SortOrder
    title?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    projectLeadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    fund?: SortOrder
    projectLeadId?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectActivityOrderByRelevanceInput = {
    fields: ProjectActivityOrderByRelevanceFieldEnum | ProjectActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectActivityCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectActivityMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectActivitySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectHistoryOrderByRelevanceInput = {
    fields: ProjectHistoryOrderByRelevanceFieldEnum | ProjectHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type ProjectHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    dateTime?: SortOrder
    description?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectHistorySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type EnumSpendingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendingType | EnumSpendingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpendingType[]
    notIn?: $Enums.SpendingType[]
    not?: NestedEnumSpendingTypeFilter<$PrismaModel> | $Enums.SpendingType
  }

  export type ProjectSpendingOrderByRelevanceInput = {
    fields: ProjectSpendingOrderByRelevanceFieldEnum | ProjectSpendingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectSpendingCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSpendingAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type ProjectSpendingMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSpendingMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSpendingSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type EnumSpendingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendingType | EnumSpendingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpendingType[]
    notIn?: $Enums.SpendingType[]
    not?: NestedEnumSpendingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpendingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpendingTypeFilter<$PrismaModel>
    _max?: NestedEnumSpendingTypeFilter<$PrismaModel>
  }

  export type Enumtimelines_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.timelines_type | Enumtimelines_typeFieldRefInput<$PrismaModel>
    in?: $Enums.timelines_type[]
    notIn?: $Enums.timelines_type[]
    not?: NestedEnumtimelines_typeFilter<$PrismaModel> | $Enums.timelines_type
  }

  export type timelinesOrderByRelevanceInput = {
    fields: timelinesOrderByRelevanceFieldEnum | timelinesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type timelinesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type timelinesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type timelinesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type timelinesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type timelinesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumtimelines_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.timelines_type | Enumtimelines_typeFieldRefInput<$PrismaModel>
    in?: $Enums.timelines_type[]
    notIn?: $Enums.timelines_type[]
    not?: NestedEnumtimelines_typeWithAggregatesFilter<$PrismaModel> | $Enums.timelines_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtimelines_typeFilter<$PrismaModel>
    _max?: NestedEnumtimelines_typeFilter<$PrismaModel>
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type Enumusers_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_gender[] | null
    notIn?: $Enums.users_gender[] | null
    not?: NestedEnumusers_genderNullableFilter<$PrismaModel> | $Enums.users_gender | null
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type Job_positionsNullableScalarRelationFilter = {
    is?: job_positionsWhereInput | null
    isNot?: job_positionsWhereInput | null
  }

  export type DayOffRequestListRelationFilter = {
    every?: DayOffRequestWhereInput
    some?: DayOffRequestWhereInput
    none?: DayOffRequestWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayOffRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    work_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    job_position_id?: SortOrder
    home_latitude?: SortOrder
    home_longitude?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    job_position_id?: SortOrder
    home_latitude?: SortOrder
    home_longitude?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    work_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    job_position_id?: SortOrder
    home_latitude?: SortOrder
    home_longitude?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    work_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    job_position_id?: SortOrder
    home_latitude?: SortOrder
    home_longitude?: SortOrder
    gender?: SortOrder
    profile_picture?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    job_position_id?: SortOrder
    home_latitude?: SortOrder
    home_longitude?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type Enumusers_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_gender[] | null
    notIn?: $Enums.users_gender[] | null
    not?: NestedEnumusers_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_genderNullableFilter<$PrismaModel>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutDayOffRequestsInput = {
    create?: XOR<usersCreateWithoutDayOffRequestsInput, usersUncheckedCreateWithoutDayOffRequestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDayOffRequestsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDayOffStatusFieldUpdateOperationsInput = {
    set?: $Enums.DayOffStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutDayOffRequestsNestedInput = {
    create?: XOR<usersCreateWithoutDayOffRequestsInput, usersUncheckedCreateWithoutDayOffRequestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDayOffRequestsInput
    upsert?: usersUpsertWithoutDayOffRequestsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDayOffRequestsInput, usersUpdateWithoutDayOffRequestsInput>, usersUncheckedUpdateWithoutDayOffRequestsInput>
  }

  export type EnumDrinkAndFoodCostCategoryFieldUpdateOperationsInput = {
    set?: $Enums.DrinkAndFoodCostCategory
  }

  export type usersCreateNestedManyWithoutJob_positionInput = {
    create?: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput> | usersCreateWithoutJob_positionInput[] | usersUncheckedCreateWithoutJob_positionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJob_positionInput | usersCreateOrConnectWithoutJob_positionInput[]
    createMany?: usersCreateManyJob_positionInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutJob_positionInput = {
    create?: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput> | usersCreateWithoutJob_positionInput[] | usersUncheckedCreateWithoutJob_positionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJob_positionInput | usersCreateOrConnectWithoutJob_positionInput[]
    createMany?: usersCreateManyJob_positionInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutJob_positionNestedInput = {
    create?: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput> | usersCreateWithoutJob_positionInput[] | usersUncheckedCreateWithoutJob_positionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJob_positionInput | usersCreateOrConnectWithoutJob_positionInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJob_positionInput | usersUpsertWithWhereUniqueWithoutJob_positionInput[]
    createMany?: usersCreateManyJob_positionInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJob_positionInput | usersUpdateWithWhereUniqueWithoutJob_positionInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJob_positionInput | usersUpdateManyWithWhereWithoutJob_positionInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutJob_positionNestedInput = {
    create?: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput> | usersCreateWithoutJob_positionInput[] | usersUncheckedCreateWithoutJob_positionInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJob_positionInput | usersCreateOrConnectWithoutJob_positionInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJob_positionInput | usersUpsertWithWhereUniqueWithoutJob_positionInput[]
    createMany?: usersCreateManyJob_positionInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJob_positionInput | usersUpdateWithWhereUniqueWithoutJob_positionInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJob_positionInput | usersUpdateManyWithWhereWithoutJob_positionInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLogsInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    connect?: usersWhereUniqueInput
  }

  export type Enumlogs_typeFieldUpdateOperationsInput = {
    set?: $Enums.logs_type
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneWithoutLogsNestedInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    upsert?: usersUpsertWithoutLogsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogsInput, usersUpdateWithoutLogsInput>, usersUncheckedUpdateWithoutLogsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutProjectsLedInput = {
    create?: XOR<usersCreateWithoutProjectsLedInput, usersUncheckedCreateWithoutProjectsLedInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsLedInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutProjectsMemberedInput = {
    create?: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput> | usersCreateWithoutProjectsMemberedInput[] | usersUncheckedCreateWithoutProjectsMemberedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsMemberedInput | usersCreateOrConnectWithoutProjectsMemberedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ProjectActivityCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectHistoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput> | ProjectHistoryCreateWithoutProjectInput[] | ProjectHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutProjectInput | ProjectHistoryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
  }

  export type ProjectSpendingCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput> | ProjectSpendingCreateWithoutProjectInput[] | ProjectSpendingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutProjectInput | ProjectSpendingCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSpendingCreateManyProjectInputEnvelope
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutProjectsMemberedInput = {
    create?: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput> | usersCreateWithoutProjectsMemberedInput[] | usersUncheckedCreateWithoutProjectsMemberedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsMemberedInput | usersCreateOrConnectWithoutProjectsMemberedInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type ProjectActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput> | ProjectHistoryCreateWithoutProjectInput[] | ProjectHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutProjectInput | ProjectHistoryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
  }

  export type ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput> | ProjectSpendingCreateWithoutProjectInput[] | ProjectSpendingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutProjectInput | ProjectSpendingCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSpendingCreateManyProjectInputEnvelope
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type usersUpdateOneRequiredWithoutProjectsLedNestedInput = {
    create?: XOR<usersCreateWithoutProjectsLedInput, usersUncheckedCreateWithoutProjectsLedInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsLedInput
    upsert?: usersUpsertWithoutProjectsLedInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsLedInput, usersUpdateWithoutProjectsLedInput>, usersUncheckedUpdateWithoutProjectsLedInput>
  }

  export type usersUpdateManyWithoutProjectsMemberedNestedInput = {
    create?: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput> | usersCreateWithoutProjectsMemberedInput[] | usersUncheckedCreateWithoutProjectsMemberedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsMemberedInput | usersCreateOrConnectWithoutProjectsMemberedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProjectsMemberedInput | usersUpsertWithWhereUniqueWithoutProjectsMemberedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProjectsMemberedInput | usersUpdateWithWhereUniqueWithoutProjectsMemberedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProjectsMemberedInput | usersUpdateManyWithWhereWithoutProjectsMemberedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ProjectActivityUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectHistoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput> | ProjectHistoryCreateWithoutProjectInput[] | ProjectHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutProjectInput | ProjectHistoryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput | ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope
    set?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    disconnect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    delete?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    update?: ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput | ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectHistoryUpdateManyWithWhereWithoutProjectInput | ProjectHistoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
  }

  export type ProjectSpendingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput> | ProjectSpendingCreateWithoutProjectInput[] | ProjectSpendingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutProjectInput | ProjectSpendingCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSpendingUpsertWithWhereUniqueWithoutProjectInput | ProjectSpendingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSpendingCreateManyProjectInputEnvelope
    set?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    disconnect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    delete?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    update?: ProjectSpendingUpdateWithWhereUniqueWithoutProjectInput | ProjectSpendingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSpendingUpdateManyWithWhereWithoutProjectInput | ProjectSpendingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput = {
    create?: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput> | usersCreateWithoutProjectsMemberedInput[] | usersUncheckedCreateWithoutProjectsMemberedInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProjectsMemberedInput | usersCreateOrConnectWithoutProjectsMemberedInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProjectsMemberedInput | usersUpsertWithWhereUniqueWithoutProjectsMemberedInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProjectsMemberedInput | usersUpdateWithWhereUniqueWithoutProjectsMemberedInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProjectsMemberedInput | usersUpdateManyWithWhereWithoutProjectsMemberedInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput> | ProjectHistoryCreateWithoutProjectInput[] | ProjectHistoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutProjectInput | ProjectHistoryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput | ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectHistoryCreateManyProjectInputEnvelope
    set?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    disconnect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    delete?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    update?: ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput | ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectHistoryUpdateManyWithWhereWithoutProjectInput | ProjectHistoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
  }

  export type ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput> | ProjectSpendingCreateWithoutProjectInput[] | ProjectSpendingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutProjectInput | ProjectSpendingCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSpendingUpsertWithWhereUniqueWithoutProjectInput | ProjectSpendingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSpendingCreateManyProjectInputEnvelope
    set?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    disconnect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    delete?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    update?: ProjectSpendingUpdateWithWhereUniqueWithoutProjectInput | ProjectSpendingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSpendingUpdateManyWithWhereWithoutProjectInput | ProjectSpendingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutActivityInput = {
    create?: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityInput
    connect?: ProjectWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProjectActivityInput = {
    create?: XOR<usersCreateWithoutProjectActivityInput, usersUncheckedCreateWithoutProjectActivityInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectActivityInput
    connect?: usersWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityInput
    upsert?: ProjectUpsertWithoutActivityInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutActivityInput, ProjectUpdateWithoutActivityInput>, ProjectUncheckedUpdateWithoutActivityInput>
  }

  export type usersUpdateOneRequiredWithoutProjectActivityNestedInput = {
    create?: XOR<usersCreateWithoutProjectActivityInput, usersUncheckedCreateWithoutProjectActivityInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectActivityInput
    upsert?: usersUpsertWithoutProjectActivityInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectActivityInput, usersUpdateWithoutProjectActivityInput>, usersUncheckedUpdateWithoutProjectActivityInput>
  }

  export type ProjectCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<ProjectCreateWithoutHistoriesInput, ProjectUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutHistoriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProjectHistoriesInput = {
    create?: XOR<usersCreateWithoutProjectHistoriesInput, usersUncheckedCreateWithoutProjectHistoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectHistoriesInput
    connect?: usersWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<ProjectCreateWithoutHistoriesInput, ProjectUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutHistoriesInput
    upsert?: ProjectUpsertWithoutHistoriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutHistoriesInput, ProjectUpdateWithoutHistoriesInput>, ProjectUncheckedUpdateWithoutHistoriesInput>
  }

  export type usersUpdateOneRequiredWithoutProjectHistoriesNestedInput = {
    create?: XOR<usersCreateWithoutProjectHistoriesInput, usersUncheckedCreateWithoutProjectHistoriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectHistoriesInput
    upsert?: usersUpsertWithoutProjectHistoriesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectHistoriesInput, usersUpdateWithoutProjectHistoriesInput>, usersUncheckedUpdateWithoutProjectHistoriesInput>
  }

  export type ProjectCreateNestedOneWithoutSpendingsInput = {
    create?: XOR<ProjectCreateWithoutSpendingsInput, ProjectUncheckedCreateWithoutSpendingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpendingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProjectSpendingsInput = {
    create?: XOR<usersCreateWithoutProjectSpendingsInput, usersUncheckedCreateWithoutProjectSpendingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectSpendingsInput
    connect?: usersWhereUniqueInput
  }

  export type EnumSpendingTypeFieldUpdateOperationsInput = {
    set?: $Enums.SpendingType
  }

  export type ProjectUpdateOneRequiredWithoutSpendingsNestedInput = {
    create?: XOR<ProjectCreateWithoutSpendingsInput, ProjectUncheckedCreateWithoutSpendingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSpendingsInput
    upsert?: ProjectUpsertWithoutSpendingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSpendingsInput, ProjectUpdateWithoutSpendingsInput>, ProjectUncheckedUpdateWithoutSpendingsInput>
  }

  export type usersUpdateOneRequiredWithoutProjectSpendingsNestedInput = {
    create?: XOR<usersCreateWithoutProjectSpendingsInput, usersUncheckedCreateWithoutProjectSpendingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectSpendingsInput
    upsert?: usersUpsertWithoutProjectSpendingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectSpendingsInput, usersUpdateWithoutProjectSpendingsInput>, usersUncheckedUpdateWithoutProjectSpendingsInput>
  }

  export type Enumtimelines_typeFieldUpdateOperationsInput = {
    set?: $Enums.timelines_type
  }

  export type logsCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type job_positionsCreateNestedOneWithoutUsersInput = {
    create?: XOR<job_positionsCreateWithoutUsersInput, job_positionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: job_positionsCreateOrConnectWithoutUsersInput
    connect?: job_positionsWhereUniqueInput
  }

  export type DayOffRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput> | DayOffRequestCreateWithoutUserInput[] | DayOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayOffRequestCreateOrConnectWithoutUserInput | DayOffRequestCreateOrConnectWithoutUserInput[]
    createMany?: DayOffRequestCreateManyUserInputEnvelope
    connect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutProjectLeadInput = {
    create?: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput> | ProjectCreateWithoutProjectLeadInput[] | ProjectUncheckedCreateWithoutProjectLeadInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectLeadInput | ProjectCreateOrConnectWithoutProjectLeadInput[]
    createMany?: ProjectCreateManyProjectLeadInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutProjectMembersInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput> | ProjectCreateWithoutProjectMembersInput[] | ProjectUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput | ProjectCreateOrConnectWithoutProjectMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput> | ProjectHistoryCreateWithoutUserInput[] | ProjectHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutUserInput | ProjectHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProjectHistoryCreateManyUserInputEnvelope
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
  }

  export type ProjectSpendingCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput> | ProjectSpendingCreateWithoutUserInput[] | ProjectSpendingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutUserInput | ProjectSpendingCreateOrConnectWithoutUserInput[]
    createMany?: ProjectSpendingCreateManyUserInputEnvelope
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type DayOffRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput> | DayOffRequestCreateWithoutUserInput[] | DayOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayOffRequestCreateOrConnectWithoutUserInput | DayOffRequestCreateOrConnectWithoutUserInput[]
    createMany?: DayOffRequestCreateManyUserInputEnvelope
    connect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProjectLeadInput = {
    create?: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput> | ProjectCreateWithoutProjectLeadInput[] | ProjectUncheckedCreateWithoutProjectLeadInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectLeadInput | ProjectCreateOrConnectWithoutProjectLeadInput[]
    createMany?: ProjectCreateManyProjectLeadInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProjectMembersInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput> | ProjectCreateWithoutProjectMembersInput[] | ProjectUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput | ProjectCreateOrConnectWithoutProjectMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput> | ProjectHistoryCreateWithoutUserInput[] | ProjectHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutUserInput | ProjectHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProjectHistoryCreateManyUserInputEnvelope
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
  }

  export type ProjectSpendingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput> | ProjectSpendingCreateWithoutUserInput[] | ProjectSpendingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutUserInput | ProjectSpendingCreateOrConnectWithoutUserInput[]
    createMany?: ProjectSpendingCreateManyUserInputEnvelope
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type NullableEnumusers_genderFieldUpdateOperationsInput = {
    set?: $Enums.users_gender | null
  }

  export type logsUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type job_positionsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<job_positionsCreateWithoutUsersInput, job_positionsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: job_positionsCreateOrConnectWithoutUsersInput
    upsert?: job_positionsUpsertWithoutUsersInput
    disconnect?: job_positionsWhereInput | boolean
    delete?: job_positionsWhereInput | boolean
    connect?: job_positionsWhereUniqueInput
    update?: XOR<XOR<job_positionsUpdateToOneWithWhereWithoutUsersInput, job_positionsUpdateWithoutUsersInput>, job_positionsUncheckedUpdateWithoutUsersInput>
  }

  export type DayOffRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput> | DayOffRequestCreateWithoutUserInput[] | DayOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayOffRequestCreateOrConnectWithoutUserInput | DayOffRequestCreateOrConnectWithoutUserInput[]
    upsert?: DayOffRequestUpsertWithWhereUniqueWithoutUserInput | DayOffRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DayOffRequestCreateManyUserInputEnvelope
    set?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    disconnect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    delete?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    connect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    update?: DayOffRequestUpdateWithWhereUniqueWithoutUserInput | DayOffRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DayOffRequestUpdateManyWithWhereWithoutUserInput | DayOffRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DayOffRequestScalarWhereInput | DayOffRequestScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutProjectLeadNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput> | ProjectCreateWithoutProjectLeadInput[] | ProjectUncheckedCreateWithoutProjectLeadInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectLeadInput | ProjectCreateOrConnectWithoutProjectLeadInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectLeadInput | ProjectUpsertWithWhereUniqueWithoutProjectLeadInput[]
    createMany?: ProjectCreateManyProjectLeadInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectLeadInput | ProjectUpdateWithWhereUniqueWithoutProjectLeadInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectLeadInput | ProjectUpdateManyWithWhereWithoutProjectLeadInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutProjectMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput> | ProjectCreateWithoutProjectMembersInput[] | ProjectUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput | ProjectCreateOrConnectWithoutProjectMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectMembersInput | ProjectUpsertWithWhereUniqueWithoutProjectMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectMembersInput | ProjectUpdateWithWhereUniqueWithoutProjectMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectMembersInput | ProjectUpdateManyWithWhereWithoutProjectMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutUserInput | ProjectActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutUserInput | ProjectActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutUserInput | ProjectActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput> | ProjectHistoryCreateWithoutUserInput[] | ProjectHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutUserInput | ProjectHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProjectHistoryUpsertWithWhereUniqueWithoutUserInput | ProjectHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectHistoryCreateManyUserInputEnvelope
    set?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    disconnect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    delete?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    update?: ProjectHistoryUpdateWithWhereUniqueWithoutUserInput | ProjectHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectHistoryUpdateManyWithWhereWithoutUserInput | ProjectHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
  }

  export type ProjectSpendingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput> | ProjectSpendingCreateWithoutUserInput[] | ProjectSpendingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutUserInput | ProjectSpendingCreateOrConnectWithoutUserInput[]
    upsert?: ProjectSpendingUpsertWithWhereUniqueWithoutUserInput | ProjectSpendingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectSpendingCreateManyUserInputEnvelope
    set?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    disconnect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    delete?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    update?: ProjectSpendingUpdateWithWhereUniqueWithoutUserInput | ProjectSpendingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectSpendingUpdateManyWithWhereWithoutUserInput | ProjectSpendingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type DayOffRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput> | DayOffRequestCreateWithoutUserInput[] | DayOffRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DayOffRequestCreateOrConnectWithoutUserInput | DayOffRequestCreateOrConnectWithoutUserInput[]
    upsert?: DayOffRequestUpsertWithWhereUniqueWithoutUserInput | DayOffRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DayOffRequestCreateManyUserInputEnvelope
    set?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    disconnect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    delete?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    connect?: DayOffRequestWhereUniqueInput | DayOffRequestWhereUniqueInput[]
    update?: DayOffRequestUpdateWithWhereUniqueWithoutUserInput | DayOffRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DayOffRequestUpdateManyWithWhereWithoutUserInput | DayOffRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DayOffRequestScalarWhereInput | DayOffRequestScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput> | ProjectCreateWithoutProjectLeadInput[] | ProjectUncheckedCreateWithoutProjectLeadInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectLeadInput | ProjectCreateOrConnectWithoutProjectLeadInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectLeadInput | ProjectUpsertWithWhereUniqueWithoutProjectLeadInput[]
    createMany?: ProjectCreateManyProjectLeadInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectLeadInput | ProjectUpdateWithWhereUniqueWithoutProjectLeadInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectLeadInput | ProjectUpdateManyWithWhereWithoutProjectLeadInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput> | ProjectCreateWithoutProjectMembersInput[] | ProjectUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectMembersInput | ProjectCreateOrConnectWithoutProjectMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProjectMembersInput | ProjectUpsertWithWhereUniqueWithoutProjectMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProjectMembersInput | ProjectUpdateWithWhereUniqueWithoutProjectMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProjectMembersInput | ProjectUpdateManyWithWhereWithoutProjectMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutUserInput | ProjectActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutUserInput | ProjectActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutUserInput | ProjectActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput> | ProjectHistoryCreateWithoutUserInput[] | ProjectHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutUserInput | ProjectHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProjectHistoryUpsertWithWhereUniqueWithoutUserInput | ProjectHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectHistoryCreateManyUserInputEnvelope
    set?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    disconnect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    delete?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    connect?: ProjectHistoryWhereUniqueInput | ProjectHistoryWhereUniqueInput[]
    update?: ProjectHistoryUpdateWithWhereUniqueWithoutUserInput | ProjectHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectHistoryUpdateManyWithWhereWithoutUserInput | ProjectHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
  }

  export type ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput> | ProjectSpendingCreateWithoutUserInput[] | ProjectSpendingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSpendingCreateOrConnectWithoutUserInput | ProjectSpendingCreateOrConnectWithoutUserInput[]
    upsert?: ProjectSpendingUpsertWithWhereUniqueWithoutUserInput | ProjectSpendingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectSpendingCreateManyUserInputEnvelope
    set?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    disconnect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    delete?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    connect?: ProjectSpendingWhereUniqueInput | ProjectSpendingWhereUniqueInput[]
    update?: ProjectSpendingUpdateWithWhereUniqueWithoutUserInput | ProjectSpendingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectSpendingUpdateManyWithWhereWithoutUserInput | ProjectSpendingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumDayOffStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOffStatus | EnumDayOffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DayOffStatus[]
    notIn?: $Enums.DayOffStatus[]
    not?: NestedEnumDayOffStatusFilter<$PrismaModel> | $Enums.DayOffStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumDayOffStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOffStatus | EnumDayOffStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DayOffStatus[]
    notIn?: $Enums.DayOffStatus[]
    not?: NestedEnumDayOffStatusWithAggregatesFilter<$PrismaModel> | $Enums.DayOffStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOffStatusFilter<$PrismaModel>
    _max?: NestedEnumDayOffStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DrinkAndFoodCostCategory | EnumDrinkAndFoodCostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DrinkAndFoodCostCategory[]
    notIn?: $Enums.DrinkAndFoodCostCategory[]
    not?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel> | $Enums.DrinkAndFoodCostCategory
  }

  export type NestedEnumDrinkAndFoodCostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrinkAndFoodCostCategory | EnumDrinkAndFoodCostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DrinkAndFoodCostCategory[]
    notIn?: $Enums.DrinkAndFoodCostCategory[]
    not?: NestedEnumDrinkAndFoodCostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DrinkAndFoodCostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel>
    _max?: NestedEnumDrinkAndFoodCostCategoryFilter<$PrismaModel>
  }

  export type NestedEnumlogs_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.logs_type | Enumlogs_typeFieldRefInput<$PrismaModel>
    in?: $Enums.logs_type[]
    notIn?: $Enums.logs_type[]
    not?: NestedEnumlogs_typeFilter<$PrismaModel> | $Enums.logs_type
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumlogs_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.logs_type | Enumlogs_typeFieldRefInput<$PrismaModel>
    in?: $Enums.logs_type[]
    notIn?: $Enums.logs_type[]
    not?: NestedEnumlogs_typeWithAggregatesFilter<$PrismaModel> | $Enums.logs_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlogs_typeFilter<$PrismaModel>
    _max?: NestedEnumlogs_typeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumSpendingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendingType | EnumSpendingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpendingType[]
    notIn?: $Enums.SpendingType[]
    not?: NestedEnumSpendingTypeFilter<$PrismaModel> | $Enums.SpendingType
  }

  export type NestedEnumSpendingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendingType | EnumSpendingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpendingType[]
    notIn?: $Enums.SpendingType[]
    not?: NestedEnumSpendingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpendingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpendingTypeFilter<$PrismaModel>
    _max?: NestedEnumSpendingTypeFilter<$PrismaModel>
  }

  export type NestedEnumtimelines_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.timelines_type | Enumtimelines_typeFieldRefInput<$PrismaModel>
    in?: $Enums.timelines_type[]
    notIn?: $Enums.timelines_type[]
    not?: NestedEnumtimelines_typeFilter<$PrismaModel> | $Enums.timelines_type
  }

  export type NestedEnumtimelines_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.timelines_type | Enumtimelines_typeFieldRefInput<$PrismaModel>
    in?: $Enums.timelines_type[]
    notIn?: $Enums.timelines_type[]
    not?: NestedEnumtimelines_typeWithAggregatesFilter<$PrismaModel> | $Enums.timelines_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtimelines_typeFilter<$PrismaModel>
    _max?: NestedEnumtimelines_typeFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_genderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_gender[] | null
    notIn?: $Enums.users_gender[] | null
    not?: NestedEnumusers_genderNullableFilter<$PrismaModel> | $Enums.users_gender | null
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type NestedEnumusers_genderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_gender | Enumusers_genderFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_gender[] | null
    notIn?: $Enums.users_gender[] | null
    not?: NestedEnumusers_genderNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_genderNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_genderNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutDayOffRequestsInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutDayOffRequestsInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutDayOffRequestsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDayOffRequestsInput, usersUncheckedCreateWithoutDayOffRequestsInput>
  }

  export type usersUpsertWithoutDayOffRequestsInput = {
    update: XOR<usersUpdateWithoutDayOffRequestsInput, usersUncheckedUpdateWithoutDayOffRequestsInput>
    create: XOR<usersCreateWithoutDayOffRequestsInput, usersUncheckedCreateWithoutDayOffRequestsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDayOffRequestsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDayOffRequestsInput, usersUncheckedUpdateWithoutDayOffRequestsInput>
  }

  export type usersUpdateWithoutDayOffRequestsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutDayOffRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutJob_positionInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutJob_positionInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutJob_positionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput>
  }

  export type usersCreateManyJob_positionInputEnvelope = {
    data: usersCreateManyJob_positionInput | usersCreateManyJob_positionInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutJob_positionInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutJob_positionInput, usersUncheckedUpdateWithoutJob_positionInput>
    create: XOR<usersCreateWithoutJob_positionInput, usersUncheckedCreateWithoutJob_positionInput>
  }

  export type usersUpdateWithWhereUniqueWithoutJob_positionInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutJob_positionInput, usersUncheckedUpdateWithoutJob_positionInput>
  }

  export type usersUpdateManyWithWhereWithoutJob_positionInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutJob_positionInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    work_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    job_position_id?: IntNullableFilter<"users"> | number | null
    home_latitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    home_longitude?: DecimalNullableFilter<"users"> | Decimal | DecimalJsLike | number | string | null
    gender?: Enumusers_genderNullableFilter<"users"> | $Enums.users_gender | null
    profile_picture?: StringNullableFilter<"users"> | string | null
  }

  export type usersCreateWithoutLogsInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutLogsInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutLogsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
  }

  export type usersUpsertWithoutLogsInput = {
    update: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
  }

  export type usersUpdateWithoutLogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutProjectsLedInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectsLedInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectsLedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsLedInput, usersUncheckedCreateWithoutProjectsLedInput>
  }

  export type usersCreateWithoutProjectsMemberedInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectsMemberedInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectsMemberedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput>
  }

  export type ProjectActivityCreateWithoutProjectInput = {
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutProjectActivityInput
  }

  export type ProjectActivityUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectActivityCreateOrConnectWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityCreateManyProjectInputEnvelope = {
    data: ProjectActivityCreateManyProjectInput | ProjectActivityCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectHistoryCreateWithoutProjectInput = {
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutProjectHistoriesInput
  }

  export type ProjectHistoryUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryCreateOrConnectWithoutProjectInput = {
    where: ProjectHistoryWhereUniqueInput
    create: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectHistoryCreateManyProjectInputEnvelope = {
    data: ProjectHistoryCreateManyProjectInput | ProjectHistoryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSpendingCreateWithoutProjectInput = {
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutProjectSpendingsInput
  }

  export type ProjectSpendingUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingCreateOrConnectWithoutProjectInput = {
    where: ProjectSpendingWhereUniqueInput
    create: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSpendingCreateManyProjectInputEnvelope = {
    data: ProjectSpendingCreateManyProjectInput | ProjectSpendingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutProjectsLedInput = {
    update: XOR<usersUpdateWithoutProjectsLedInput, usersUncheckedUpdateWithoutProjectsLedInput>
    create: XOR<usersCreateWithoutProjectsLedInput, usersUncheckedCreateWithoutProjectsLedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsLedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsLedInput, usersUncheckedUpdateWithoutProjectsLedInput>
  }

  export type usersUpdateWithoutProjectsLedInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsLedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutProjectsMemberedInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutProjectsMemberedInput, usersUncheckedUpdateWithoutProjectsMemberedInput>
    create: XOR<usersCreateWithoutProjectsMemberedInput, usersUncheckedCreateWithoutProjectsMemberedInput>
  }

  export type usersUpdateWithWhereUniqueWithoutProjectsMemberedInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutProjectsMemberedInput, usersUncheckedUpdateWithoutProjectsMemberedInput>
  }

  export type usersUpdateManyWithWhereWithoutProjectsMemberedInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutProjectsMemberedInput>
  }

  export type ProjectActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    update: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    data: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectActivityUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectActivityScalarWhereInput
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectActivityScalarWhereInput = {
    AND?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    OR?: ProjectActivityScalarWhereInput[]
    NOT?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    id?: IntFilter<"ProjectActivity"> | number
    projectId?: IntFilter<"ProjectActivity"> | number
    userId?: IntFilter<"ProjectActivity"> | number
    dateTime?: DateTimeFilter<"ProjectActivity"> | Date | string
    description?: StringFilter<"ProjectActivity"> | string
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectActivity"> | Date | string
  }

  export type ProjectHistoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectHistoryWhereUniqueInput
    update: XOR<ProjectHistoryUpdateWithoutProjectInput, ProjectHistoryUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectHistoryCreateWithoutProjectInput, ProjectHistoryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectHistoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectHistoryWhereUniqueInput
    data: XOR<ProjectHistoryUpdateWithoutProjectInput, ProjectHistoryUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectHistoryUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectHistoryScalarWhereInput
    data: XOR<ProjectHistoryUpdateManyMutationInput, ProjectHistoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectHistoryScalarWhereInput = {
    AND?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
    OR?: ProjectHistoryScalarWhereInput[]
    NOT?: ProjectHistoryScalarWhereInput | ProjectHistoryScalarWhereInput[]
    id?: IntFilter<"ProjectHistory"> | number
    projectId?: IntFilter<"ProjectHistory"> | number
    userId?: IntFilter<"ProjectHistory"> | number
    dateTime?: DateTimeFilter<"ProjectHistory"> | Date | string
    description?: StringFilter<"ProjectHistory"> | string
    file?: StringNullableFilter<"ProjectHistory"> | string | null
    createdAt?: DateTimeFilter<"ProjectHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectHistory"> | Date | string
  }

  export type ProjectSpendingUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectSpendingWhereUniqueInput
    update: XOR<ProjectSpendingUpdateWithoutProjectInput, ProjectSpendingUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectSpendingCreateWithoutProjectInput, ProjectSpendingUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSpendingUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectSpendingWhereUniqueInput
    data: XOR<ProjectSpendingUpdateWithoutProjectInput, ProjectSpendingUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectSpendingUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectSpendingScalarWhereInput
    data: XOR<ProjectSpendingUpdateManyMutationInput, ProjectSpendingUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectSpendingScalarWhereInput = {
    AND?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
    OR?: ProjectSpendingScalarWhereInput[]
    NOT?: ProjectSpendingScalarWhereInput | ProjectSpendingScalarWhereInput[]
    id?: IntFilter<"ProjectSpending"> | number
    projectId?: IntFilter<"ProjectSpending"> | number
    userId?: IntFilter<"ProjectSpending"> | number
    type?: EnumSpendingTypeFilter<"ProjectSpending"> | $Enums.SpendingType
    amount?: IntFilter<"ProjectSpending"> | number
    description?: StringNullableFilter<"ProjectSpending"> | string | null
    createdAt?: DateTimeFilter<"ProjectSpending"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSpending"> | Date | string
  }

  export type ProjectCreateWithoutActivityInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectLead: usersCreateNestedOneWithoutProjectsLedInput
    projectMembers?: usersCreateNestedManyWithoutProjectsMemberedInput
    histories?: ProjectHistoryCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutActivityInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersUncheckedCreateNestedManyWithoutProjectsMemberedInput
    histories?: ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutActivityInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
  }

  export type usersCreateWithoutProjectActivityInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectActivityInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectActivityInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectActivityInput, usersUncheckedCreateWithoutProjectActivityInput>
  }

  export type ProjectUpsertWithoutActivityInput = {
    update: XOR<ProjectUpdateWithoutActivityInput, ProjectUncheckedUpdateWithoutActivityInput>
    create: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutActivityInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutActivityInput, ProjectUncheckedUpdateWithoutActivityInput>
  }

  export type ProjectUpdateWithoutActivityInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectLead?: usersUpdateOneRequiredWithoutProjectsLedNestedInput
    projectMembers?: usersUpdateManyWithoutProjectsMemberedNestedInput
    histories?: ProjectHistoryUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput
    histories?: ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutProjectActivityInput = {
    update: XOR<usersUpdateWithoutProjectActivityInput, usersUncheckedUpdateWithoutProjectActivityInput>
    create: XOR<usersCreateWithoutProjectActivityInput, usersUncheckedCreateWithoutProjectActivityInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectActivityInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectActivityInput, usersUncheckedUpdateWithoutProjectActivityInput>
  }

  export type usersUpdateWithoutProjectActivityInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutHistoriesInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectLead: usersCreateNestedOneWithoutProjectsLedInput
    projectMembers?: usersCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutHistoriesInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersUncheckedCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutHistoriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutHistoriesInput, ProjectUncheckedCreateWithoutHistoriesInput>
  }

  export type usersCreateWithoutProjectHistoriesInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectHistoriesInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectSpendings?: ProjectSpendingUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectHistoriesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectHistoriesInput, usersUncheckedCreateWithoutProjectHistoriesInput>
  }

  export type ProjectUpsertWithoutHistoriesInput = {
    update: XOR<ProjectUpdateWithoutHistoriesInput, ProjectUncheckedUpdateWithoutHistoriesInput>
    create: XOR<ProjectCreateWithoutHistoriesInput, ProjectUncheckedCreateWithoutHistoriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutHistoriesInput, ProjectUncheckedUpdateWithoutHistoriesInput>
  }

  export type ProjectUpdateWithoutHistoriesInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectLead?: usersUpdateOneRequiredWithoutProjectsLedNestedInput
    projectMembers?: usersUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutProjectHistoriesInput = {
    update: XOR<usersUpdateWithoutProjectHistoriesInput, usersUncheckedUpdateWithoutProjectHistoriesInput>
    create: XOR<usersCreateWithoutProjectHistoriesInput, usersUncheckedCreateWithoutProjectHistoriesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectHistoriesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectHistoriesInput, usersUncheckedUpdateWithoutProjectHistoriesInput>
  }

  export type usersUpdateWithoutProjectHistoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutSpendingsInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectLead: usersCreateNestedOneWithoutProjectsLedInput
    projectMembers?: usersCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSpendingsInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersUncheckedCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSpendingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSpendingsInput, ProjectUncheckedCreateWithoutSpendingsInput>
  }

  export type usersCreateWithoutProjectSpendingsInput = {
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsCreateNestedManyWithoutUserInput
    job_position?: job_positionsCreateNestedOneWithoutUsersInput
    dayOffRequests?: DayOffRequestCreateNestedManyWithoutUserInput
    projectsLed?: ProjectCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectSpendingsInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    job_position_id?: number | null
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    dayOffRequests?: DayOffRequestUncheckedCreateNestedManyWithoutUserInput
    projectsLed?: ProjectUncheckedCreateNestedManyWithoutProjectLeadInput
    projectsMembered?: ProjectUncheckedCreateNestedManyWithoutProjectMembersInput
    projectActivity?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
    projectHistories?: ProjectHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectSpendingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectSpendingsInput, usersUncheckedCreateWithoutProjectSpendingsInput>
  }

  export type ProjectUpsertWithoutSpendingsInput = {
    update: XOR<ProjectUpdateWithoutSpendingsInput, ProjectUncheckedUpdateWithoutSpendingsInput>
    create: XOR<ProjectCreateWithoutSpendingsInput, ProjectUncheckedCreateWithoutSpendingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSpendingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSpendingsInput, ProjectUncheckedUpdateWithoutSpendingsInput>
  }

  export type ProjectUpdateWithoutSpendingsInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectLead?: usersUpdateOneRequiredWithoutProjectsLedNestedInput
    projectMembers?: usersUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSpendingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutProjectSpendingsInput = {
    update: XOR<usersUpdateWithoutProjectSpendingsInput, usersUncheckedUpdateWithoutProjectSpendingsInput>
    create: XOR<usersCreateWithoutProjectSpendingsInput, usersUncheckedCreateWithoutProjectSpendingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectSpendingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectSpendingsInput, usersUncheckedUpdateWithoutProjectSpendingsInput>
  }

  export type usersUpdateWithoutProjectSpendingsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectSpendingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type logsCreateWithoutUserInput = {
    type?: $Enums.logs_type
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
  }

  export type logsUncheckedCreateWithoutUserInput = {
    id?: number
    type?: $Enums.logs_type
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
  }

  export type logsCreateOrConnectWithoutUserInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsCreateManyUserInputEnvelope = {
    data: logsCreateManyUserInput | logsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type job_positionsCreateWithoutUsersInput = {
    name: string
    shift_start: string
    shift_end: string
    created_at?: Date | string
    updated_at?: Date | string
    work_day?: string | null
    salary: number
  }

  export type job_positionsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    shift_start: string
    shift_end: string
    created_at?: Date | string
    updated_at?: Date | string
    work_day?: string | null
    salary: number
  }

  export type job_positionsCreateOrConnectWithoutUsersInput = {
    where: job_positionsWhereUniqueInput
    create: XOR<job_positionsCreateWithoutUsersInput, job_positionsUncheckedCreateWithoutUsersInput>
  }

  export type DayOffRequestCreateWithoutUserInput = {
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOffRequestUncheckedCreateWithoutUserInput = {
    id?: number
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayOffRequestCreateOrConnectWithoutUserInput = {
    where: DayOffRequestWhereUniqueInput
    create: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput>
  }

  export type DayOffRequestCreateManyUserInputEnvelope = {
    data: DayOffRequestCreateManyUserInput | DayOffRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProjectLeadInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectLeadInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: usersUncheckedCreateNestedManyWithoutProjectsMemberedInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectLeadInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput>
  }

  export type ProjectCreateManyProjectLeadInputEnvelope = {
    data: ProjectCreateManyProjectLeadInput | ProjectCreateManyProjectLeadInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProjectMembersInput = {
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    projectLead: usersCreateNestedOneWithoutProjectsLedInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectMembersInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    projectLeadId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    histories?: ProjectHistoryUncheckedCreateNestedManyWithoutProjectInput
    spendings?: ProjectSpendingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectActivityCreateWithoutUserInput = {
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivityInput
  }

  export type ProjectActivityUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectActivityCreateOrConnectWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    create: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput>
  }

  export type ProjectActivityCreateManyUserInputEnvelope = {
    data: ProjectActivityCreateManyUserInput | ProjectActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectHistoryCreateWithoutUserInput = {
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutHistoriesInput
  }

  export type ProjectHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryCreateOrConnectWithoutUserInput = {
    where: ProjectHistoryWhereUniqueInput
    create: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProjectHistoryCreateManyUserInputEnvelope = {
    data: ProjectHistoryCreateManyUserInput | ProjectHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSpendingCreateWithoutUserInput = {
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSpendingsInput
  }

  export type ProjectSpendingUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingCreateOrConnectWithoutUserInput = {
    where: ProjectSpendingWhereUniqueInput
    create: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput>
  }

  export type ProjectSpendingCreateManyUserInputEnvelope = {
    data: ProjectSpendingCreateManyUserInput | ProjectSpendingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type logsUpsertWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsUpdateWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
  }

  export type logsUpdateManyWithWhereWithoutUserInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutUserInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    id?: IntFilter<"logs"> | number
    type?: Enumlogs_typeFilter<"logs"> | $Enums.logs_type
    user_id?: IntNullableFilter<"logs"> | number | null
    date?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_in_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"logs"> | Date | string
    updated_at?: DateTimeFilter<"logs"> | Date | string
    work?: JsonNullableFilter<"logs">
    clock_out_time?: DateTimeNullableFilter<"logs"> | Date | string | null
    clock_out_latitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: DecimalNullableFilter<"logs"> | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFilter<"logs"> | boolean
    afterHourOvertime?: BoolFilter<"logs"> | boolean
    clock_in_picture?: StringNullableFilter<"logs"> | string | null
    clock_out_picture?: StringNullableFilter<"logs"> | string | null
  }

  export type job_positionsUpsertWithoutUsersInput = {
    update: XOR<job_positionsUpdateWithoutUsersInput, job_positionsUncheckedUpdateWithoutUsersInput>
    create: XOR<job_positionsCreateWithoutUsersInput, job_positionsUncheckedCreateWithoutUsersInput>
    where?: job_positionsWhereInput
  }

  export type job_positionsUpdateToOneWithWhereWithoutUsersInput = {
    where?: job_positionsWhereInput
    data: XOR<job_positionsUpdateWithoutUsersInput, job_positionsUncheckedUpdateWithoutUsersInput>
  }

  export type job_positionsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
  }

  export type job_positionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    shift_start?: StringFieldUpdateOperationsInput | string
    shift_end?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_day?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: IntFieldUpdateOperationsInput | number
  }

  export type DayOffRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: DayOffRequestWhereUniqueInput
    update: XOR<DayOffRequestUpdateWithoutUserInput, DayOffRequestUncheckedUpdateWithoutUserInput>
    create: XOR<DayOffRequestCreateWithoutUserInput, DayOffRequestUncheckedCreateWithoutUserInput>
  }

  export type DayOffRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: DayOffRequestWhereUniqueInput
    data: XOR<DayOffRequestUpdateWithoutUserInput, DayOffRequestUncheckedUpdateWithoutUserInput>
  }

  export type DayOffRequestUpdateManyWithWhereWithoutUserInput = {
    where: DayOffRequestScalarWhereInput
    data: XOR<DayOffRequestUpdateManyMutationInput, DayOffRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type DayOffRequestScalarWhereInput = {
    AND?: DayOffRequestScalarWhereInput | DayOffRequestScalarWhereInput[]
    OR?: DayOffRequestScalarWhereInput[]
    NOT?: DayOffRequestScalarWhereInput | DayOffRequestScalarWhereInput[]
    id?: IntFilter<"DayOffRequest"> | number
    userId?: IntFilter<"DayOffRequest"> | number
    requestDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveType?: StringFilter<"DayOffRequest"> | string
    status?: EnumDayOffStatusFilter<"DayOffRequest"> | $Enums.DayOffStatus
    comment?: StringNullableFilter<"DayOffRequest"> | string | null
    leaveStartDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    leaveEndDate?: DateTimeFilter<"DayOffRequest"> | Date | string
    createdAt?: DateTimeFilter<"DayOffRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DayOffRequest"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutProjectLeadInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProjectLeadInput, ProjectUncheckedUpdateWithoutProjectLeadInput>
    create: XOR<ProjectCreateWithoutProjectLeadInput, ProjectUncheckedCreateWithoutProjectLeadInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProjectLeadInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProjectLeadInput, ProjectUncheckedUpdateWithoutProjectLeadInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProjectLeadInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectLeadInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    fund?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    priority?: EnumPriorityFilter<"Project"> | $Enums.Priority
    projectLeadId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutProjectMembersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProjectMembersInput, ProjectUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<ProjectCreateWithoutProjectMembersInput, ProjectUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProjectMembersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProjectMembersInput, ProjectUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProjectMembersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectMembersInput>
  }

  export type ProjectActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    update: XOR<ProjectActivityUpdateWithoutUserInput, ProjectActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput>
  }

  export type ProjectActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    data: XOR<ProjectActivityUpdateWithoutUserInput, ProjectActivityUncheckedUpdateWithoutUserInput>
  }

  export type ProjectActivityUpdateManyWithWhereWithoutUserInput = {
    where: ProjectActivityScalarWhereInput
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectHistoryWhereUniqueInput
    update: XOR<ProjectHistoryUpdateWithoutUserInput, ProjectHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectHistoryCreateWithoutUserInput, ProjectHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProjectHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectHistoryWhereUniqueInput
    data: XOR<ProjectHistoryUpdateWithoutUserInput, ProjectHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ProjectHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ProjectHistoryScalarWhereInput
    data: XOR<ProjectHistoryUpdateManyMutationInput, ProjectHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectSpendingUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectSpendingWhereUniqueInput
    update: XOR<ProjectSpendingUpdateWithoutUserInput, ProjectSpendingUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectSpendingCreateWithoutUserInput, ProjectSpendingUncheckedCreateWithoutUserInput>
  }

  export type ProjectSpendingUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectSpendingWhereUniqueInput
    data: XOR<ProjectSpendingUpdateWithoutUserInput, ProjectSpendingUncheckedUpdateWithoutUserInput>
  }

  export type ProjectSpendingUpdateManyWithWhereWithoutUserInput = {
    where: ProjectSpendingScalarWhereInput
    data: XOR<ProjectSpendingUpdateManyMutationInput, ProjectSpendingUncheckedUpdateManyWithoutUserInput>
  }

  export type usersCreateManyJob_positionInput = {
    id?: number
    name?: string | null
    password?: string | null
    work_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.users_role
    home_latitude?: Decimal | DecimalJsLike | number | string | null
    home_longitude?: Decimal | DecimalJsLike | number | string | null
    gender?: $Enums.users_gender | null
    profile_picture?: string | null
  }

  export type usersUpdateWithoutJob_positionInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutJob_positionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectsMembered?: ProjectUncheckedUpdateManyWithoutProjectMembersNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutJob_positionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectActivityCreateManyProjectInput = {
    id?: number
    userId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryCreateManyProjectInput = {
    id?: number
    userId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingCreateManyProjectInput = {
    id?: number
    userId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateWithoutProjectsMemberedInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUpdateManyWithoutUserNestedInput
    job_position?: job_positionsUpdateOneWithoutUsersNestedInput
    dayOffRequests?: DayOffRequestUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUpdateManyWithoutProjectLeadNestedInput
    projectActivity?: ProjectActivityUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsMemberedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    dayOffRequests?: DayOffRequestUncheckedUpdateManyWithoutUserNestedInput
    projectsLed?: ProjectUncheckedUpdateManyWithoutProjectLeadNestedInput
    projectActivity?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
    projectHistories?: ProjectHistoryUncheckedUpdateManyWithoutUserNestedInput
    projectSpendings?: ProjectSpendingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutProjectsMemberedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    work_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_position_id?: NullableIntFieldUpdateOperationsInput | number | null
    home_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    home_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: NullableEnumusers_genderFieldUpdateOperationsInput | $Enums.users_gender | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectActivityUpdateWithoutProjectInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutProjectActivityNestedInput
  }

  export type ProjectActivityUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryUpdateWithoutProjectInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutProjectHistoriesNestedInput
  }

  export type ProjectHistoryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingUpdateWithoutProjectInput = {
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutProjectSpendingsNestedInput
  }

  export type ProjectSpendingUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateManyUserInput = {
    id?: number
    type?: $Enums.logs_type
    date?: Date | string | null
    clock_in_time?: Date | string | null
    clock_in_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: Date | string | null
    clock_out_latitude?: Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: Decimal | DecimalJsLike | number | string | null
    isOverTime?: boolean
    afterHourOvertime?: boolean
    clock_in_picture?: string | null
    clock_out_picture?: string | null
  }

  export type DayOffRequestCreateManyUserInput = {
    id?: number
    requestDate: Date | string
    leaveType: string
    status?: $Enums.DayOffStatus
    comment?: string | null
    leaveStartDate: Date | string
    leaveEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyProjectLeadInput = {
    id?: number
    fund: number
    title: string
    status?: $Enums.ProjectStatus
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectActivityCreateManyUserInput = {
    id?: number
    projectId: number
    dateTime: Date | string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectHistoryCreateManyUserInput = {
    id?: number
    projectId: number
    dateTime: Date | string
    description: string
    file?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSpendingCreateManyUserInput = {
    id?: number
    projectId: number
    type: $Enums.SpendingType
    amount: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type logsUpdateWithoutUserInput = {
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumlogs_typeFieldUpdateOperationsInput | $Enums.logs_type
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_in_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_in_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: NullableJsonNullValueInput | InputJsonValue
    clock_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clock_out_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clock_out_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isOverTime?: BoolFieldUpdateOperationsInput | boolean
    afterHourOvertime?: BoolFieldUpdateOperationsInput | boolean
    clock_in_picture?: NullableStringFieldUpdateOperationsInput | string | null
    clock_out_picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DayOffRequestUpdateWithoutUserInput = {
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOffRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayOffRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    status?: EnumDayOffStatusFieldUpdateOperationsInput | $Enums.DayOffStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    leaveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutProjectLeadInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: usersUncheckedUpdateManyWithoutProjectsMemberedNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutProjectMembersInput = {
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectLead?: usersUpdateOneRequiredWithoutProjectsLedNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    histories?: ProjectHistoryUncheckedUpdateManyWithoutProjectNestedInput
    spendings?: ProjectSpendingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutProjectMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fund?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectLeadId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUpdateWithoutUserInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ProjectActivityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryUpdateWithoutUserInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type ProjectHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    file?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingUpdateWithoutUserInput = {
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSpendingsNestedInput
  }

  export type ProjectSpendingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSpendingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    type?: EnumSpendingTypeFieldUpdateOperationsInput | $Enums.SpendingType
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}