
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submissions
 * 
 */
export type Submissions = $Result.DefaultSelection<Prisma.$SubmissionsPayload>
/**
 * Model TestCases
 * 
 */
export type TestCases = $Result.DefaultSelection<Prisma.$TestCasesPayload>
/**
 * Model ProblemsSolved
 * 
 */
export type ProblemsSolved = $Result.DefaultSelection<Prisma.$ProblemsSolvedPayload>
/**
 * Model ProblemList
 * 
 */
export type ProblemList = $Result.DefaultSelection<Prisma.$ProblemListPayload>
/**
 * Model ProblemInProblemList
 * 
 */
export type ProblemInProblemList = $Result.DefaultSelection<Prisma.$ProblemInProblemListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ProblemDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type ProblemDifficulty = (typeof ProblemDifficulty)[keyof typeof ProblemDifficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ProblemDifficulty = $Enums.ProblemDifficulty

export const ProblemDifficulty: typeof $Enums.ProblemDifficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submissions`: Exposes CRUD operations for the **Submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.SubmissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCases`: Exposes CRUD operations for the **TestCases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCases.findMany()
    * ```
    */
  get testCases(): Prisma.TestCasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemsSolved`: Exposes CRUD operations for the **ProblemsSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemsSolveds
    * const problemsSolveds = await prisma.problemsSolved.findMany()
    * ```
    */
  get problemsSolved(): Prisma.ProblemsSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemList`: Exposes CRUD operations for the **ProblemList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemLists
    * const problemLists = await prisma.problemList.findMany()
    * ```
    */
  get problemList(): Prisma.ProblemListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInProblemList`: Exposes CRUD operations for the **ProblemInProblemList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInProblemLists
    * const problemInProblemLists = await prisma.problemInProblemList.findMany()
    * ```
    */
  get problemInProblemList(): Prisma.ProblemInProblemListDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Problem: 'Problem',
    Submissions: 'Submissions',
    TestCases: 'TestCases',
    ProblemsSolved: 'ProblemsSolved',
    ProblemList: 'ProblemList',
    ProblemInProblemList: 'ProblemInProblemList'
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
      modelProps: "user" | "problem" | "submissions" | "testCases" | "problemsSolved" | "problemList" | "problemInProblemList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submissions: {
        payload: Prisma.$SubmissionsPayload<ExtArgs>
        fields: Prisma.SubmissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          findFirst: {
            args: Prisma.SubmissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          findMany: {
            args: Prisma.SubmissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>[]
          }
          create: {
            args: Prisma.SubmissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          createMany: {
            args: Prisma.SubmissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>[]
          }
          delete: {
            args: Prisma.SubmissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          update: {
            args: Prisma.SubmissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.SubmissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
          }
        }
      }
      TestCases: {
        payload: Prisma.$TestCasesPayload<ExtArgs>
        fields: Prisma.TestCasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          findFirst: {
            args: Prisma.TestCasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          findMany: {
            args: Prisma.TestCasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>[]
          }
          create: {
            args: Prisma.TestCasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          createMany: {
            args: Prisma.TestCasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>[]
          }
          delete: {
            args: Prisma.TestCasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          update: {
            args: Prisma.TestCasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          deleteMany: {
            args: Prisma.TestCasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>[]
          }
          upsert: {
            args: Prisma.TestCasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesPayload>
          }
          aggregate: {
            args: Prisma.TestCasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCases>
          }
          groupBy: {
            args: Prisma.TestCasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCasesCountArgs<ExtArgs>
            result: $Utils.Optional<TestCasesCountAggregateOutputType> | number
          }
        }
      }
      ProblemsSolved: {
        payload: Prisma.$ProblemsSolvedPayload<ExtArgs>
        fields: Prisma.ProblemsSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemsSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemsSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          findFirst: {
            args: Prisma.ProblemsSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemsSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          findMany: {
            args: Prisma.ProblemsSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>[]
          }
          create: {
            args: Prisma.ProblemsSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          createMany: {
            args: Prisma.ProblemsSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemsSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>[]
          }
          delete: {
            args: Prisma.ProblemsSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          update: {
            args: Prisma.ProblemsSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          deleteMany: {
            args: Prisma.ProblemsSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemsSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemsSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>[]
          }
          upsert: {
            args: Prisma.ProblemsSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemsSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemsSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemsSolved>
          }
          groupBy: {
            args: Prisma.ProblemsSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemsSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemsSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemsSolvedCountAggregateOutputType> | number
          }
        }
      }
      ProblemList: {
        payload: Prisma.$ProblemListPayload<ExtArgs>
        fields: Prisma.ProblemListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          findFirst: {
            args: Prisma.ProblemListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          findMany: {
            args: Prisma.ProblemListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>[]
          }
          create: {
            args: Prisma.ProblemListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          createMany: {
            args: Prisma.ProblemListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>[]
          }
          delete: {
            args: Prisma.ProblemListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          update: {
            args: Prisma.ProblemListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          deleteMany: {
            args: Prisma.ProblemListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>[]
          }
          upsert: {
            args: Prisma.ProblemListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemListPayload>
          }
          aggregate: {
            args: Prisma.ProblemListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemList>
          }
          groupBy: {
            args: Prisma.ProblemListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemListCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemListCountAggregateOutputType> | number
          }
        }
      }
      ProblemInProblemList: {
        payload: Prisma.$ProblemInProblemListPayload<ExtArgs>
        fields: Prisma.ProblemInProblemListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInProblemListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInProblemListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          findFirst: {
            args: Prisma.ProblemInProblemListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInProblemListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          findMany: {
            args: Prisma.ProblemInProblemListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>[]
          }
          create: {
            args: Prisma.ProblemInProblemListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          createMany: {
            args: Prisma.ProblemInProblemListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInProblemListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>[]
          }
          delete: {
            args: Prisma.ProblemInProblemListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          update: {
            args: Prisma.ProblemInProblemListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInProblemListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInProblemListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInProblemListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInProblemListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInProblemListPayload>
          }
          aggregate: {
            args: Prisma.ProblemInProblemListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInProblemList>
          }
          groupBy: {
            args: Prisma.ProblemInProblemListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInProblemListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInProblemListCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInProblemListCountAggregateOutputType> | number
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
    user?: UserOmit
    problem?: ProblemOmit
    submissions?: SubmissionsOmit
    testCases?: TestCasesOmit
    problemsSolved?: ProblemsSolvedOmit
    problemList?: ProblemListOmit
    problemInProblemList?: ProblemInProblemListOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    submission: number
    testCases: number
    problemSolved: number
    problemLists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    testCases?: boolean | UserCountOutputTypeCountTestCasesArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
    problemLists?: boolean | UserCountOutputTypeCountProblemListsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCasesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemListWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number
    hiddenTestCases: number
    problemSolved: number
    problemLists: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    hiddenTestCases?: boolean | ProblemCountOutputTypeCountHiddenTestCasesArgs
    problemSolved?: boolean | ProblemCountOutputTypeCountProblemSolvedArgs
    problemLists?: boolean | ProblemCountOutputTypeCountProblemListsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionsWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountHiddenTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCasesWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInProblemListWhereInput
  }


  /**
   * Count Type ProblemListCountOutputType
   */

  export type ProblemListCountOutputType = {
    problems: number
  }

  export type ProblemListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | ProblemListCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * ProblemListCountOutputType without action
   */
  export type ProblemListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemListCountOutputType
     */
    select?: ProblemListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemListCountOutputType without action
   */
  export type ProblemListCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInProblemListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    isEmailVerified: number
    emailVerificationToken: number
    emailVerificationTokenExpiry: number
    forgotPasswordToken: number
    forgotPasswordTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordTokenExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    avatar: string | null
    role: $Enums.UserRole
    password: string
    createdAt: Date
    updatedAt: Date
    isEmailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    testCases?: boolean | User$testCasesArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    problemLists?: boolean | User$problemListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordTokenExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "avatar" | "role" | "password" | "createdAt" | "updatedAt" | "isEmailVerified" | "emailVerificationToken" | "emailVerificationTokenExpiry" | "forgotPasswordToken" | "forgotPasswordTokenExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submission?: boolean | User$submissionArgs<ExtArgs>
    testCases?: boolean | User$testCasesArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    problemLists?: boolean | User$problemListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submission: Prisma.$SubmissionsPayload<ExtArgs>[]
      testCases: Prisma.$TestCasesPayload<ExtArgs>[]
      problemSolved: Prisma.$ProblemsSolvedPayload<ExtArgs>[]
      problemLists: Prisma.$ProblemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      avatar: string | null
      role: $Enums.UserRole
      password: string
      createdAt: Date
      updatedAt: Date
      isEmailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationTokenExpiry: Date | null
      forgotPasswordToken: string | null
      forgotPasswordTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends User$submissionArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testCases<T extends User$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemLists<T extends User$problemListsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly forgotPasswordTokenExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submission
   */
  export type User$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    where?: SubmissionsWhereInput
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    cursor?: SubmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * User.testCases
   */
  export type User$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    where?: TestCasesWhereInput
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    cursor?: TestCasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCasesScalarFieldEnum | TestCasesScalarFieldEnum[]
  }

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    where?: ProblemsSolvedWhereInput
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    cursor?: ProblemsSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemsSolvedScalarFieldEnum | ProblemsSolvedScalarFieldEnum[]
  }

  /**
   * User.problemLists
   */
  export type User$problemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    where?: ProblemListWhereInput
    orderBy?: ProblemListOrderByWithRelationInput | ProblemListOrderByWithRelationInput[]
    cursor?: ProblemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemListScalarFieldEnum | ProblemListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.ProblemDifficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.ProblemDifficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testCases: number
    codeSnippets: number
    referenceSolution: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testCases?: true
    codeSnippets?: true
    referenceSolution?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testCases: JsonValue
    codeSnippets: JsonValue
    referenceSolution: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    hiddenTestCases?: boolean | Problem$hiddenTestCasesArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    problemLists?: boolean | Problem$problemListsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codeSnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testCases" | "codeSnippets" | "referenceSolution" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    hiddenTestCases?: boolean | Problem$hiddenTestCasesArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    problemLists?: boolean | Problem$problemListsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submission: Prisma.$SubmissionsPayload<ExtArgs>[]
      hiddenTestCases: Prisma.$TestCasesPayload<ExtArgs>[]
      problemSolved: Prisma.$ProblemsSolvedPayload<ExtArgs>[]
      problemLists: Prisma.$ProblemInProblemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.ProblemDifficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testCases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolution: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends Problem$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hiddenTestCases<T extends Problem$hiddenTestCasesArgs<ExtArgs> = {}>(args?: Subset<T, Problem$hiddenTestCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends Problem$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemLists<T extends Problem$problemListsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'ProblemDifficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testCases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolution: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submission
   */
  export type Problem$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    where?: SubmissionsWhereInput
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    cursor?: SubmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * Problem.hiddenTestCases
   */
  export type Problem$hiddenTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    where?: TestCasesWhereInput
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    cursor?: TestCasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCasesScalarFieldEnum | TestCasesScalarFieldEnum[]
  }

  /**
   * Problem.problemSolved
   */
  export type Problem$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    where?: ProblemsSolvedWhereInput
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    cursor?: ProblemsSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemsSolvedScalarFieldEnum | ProblemsSolvedScalarFieldEnum[]
  }

  /**
   * Problem.problemLists
   */
  export type Problem$problemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    where?: ProblemInProblemListWhereInput
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    cursor?: ProblemInProblemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInProblemListScalarFieldEnum | ProblemInProblemListScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stdError: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stdError: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionsCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stdError: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionsMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stdError?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stdError?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionsCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stdError?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to aggregate.
     */
    where?: SubmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type SubmissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionsWhereInput
    orderBy?: SubmissionsOrderByWithAggregationInput | SubmissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: SubmissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stdError: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends SubmissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stdError?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type SubmissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stdError?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type SubmissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stdError?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type SubmissionsSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stdError?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "language" | "stdin" | "stdout" | "stdError" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submissions"]>
  export type SubmissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubmissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submissions"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stdError: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type SubmissionsGetPayload<S extends boolean | null | undefined | SubmissionsDefaultArgs> = $Result.GetResult<Prisma.$SubmissionsPayload, S>

  type SubmissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface SubmissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submissions'], meta: { name: 'Submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {SubmissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionsFindUniqueArgs>(args: SelectSubset<T, SubmissionsFindUniqueArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionsFindFirstArgs>(args?: SelectSubset<T, SubmissionsFindFirstArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionsWithIdOnly = await prisma.submissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionsFindManyArgs>(args?: SelectSubset<T, SubmissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissions.
     * @param {SubmissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends SubmissionsCreateArgs>(args: SelectSubset<T, SubmissionsCreateArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionsCreateManyArgs>(args?: SelectSubset<T, SubmissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionsCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submissions.
     * @param {SubmissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends SubmissionsDeleteArgs>(args: SelectSubset<T, SubmissionsDeleteArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissions.
     * @param {SubmissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionsUpdateArgs>(args: SelectSubset<T, SubmissionsUpdateArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionsDeleteManyArgs>(args?: SelectSubset<T, SubmissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionsUpdateManyArgs>(args: SelectSubset<T, SubmissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionsUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submissions.
     * @param {SubmissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionsUpsertArgs>(args: SelectSubset<T, SubmissionsUpsertArgs<ExtArgs>>): Prisma__SubmissionsClient<$Result.GetResult<Prisma.$SubmissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionsCountArgs>(
      args?: Subset<T, SubmissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsGroupByArgs} args - Group by arguments.
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
      T extends SubmissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionsGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submissions model
   */
  readonly fields: SubmissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submissions model
   */
  interface SubmissionsFieldRefs {
    readonly id: FieldRef<"Submissions", 'String'>
    readonly userId: FieldRef<"Submissions", 'String'>
    readonly problemId: FieldRef<"Submissions", 'String'>
    readonly sourceCode: FieldRef<"Submissions", 'Json'>
    readonly language: FieldRef<"Submissions", 'String'>
    readonly stdin: FieldRef<"Submissions", 'String'>
    readonly stdout: FieldRef<"Submissions", 'String'>
    readonly stdError: FieldRef<"Submissions", 'String'>
    readonly compileOutput: FieldRef<"Submissions", 'String'>
    readonly status: FieldRef<"Submissions", 'String'>
    readonly memory: FieldRef<"Submissions", 'String'>
    readonly time: FieldRef<"Submissions", 'String'>
    readonly createdAt: FieldRef<"Submissions", 'DateTime'>
    readonly updatedAt: FieldRef<"Submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submissions findUnique
   */
  export type SubmissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where: SubmissionsWhereUniqueInput
  }

  /**
   * Submissions findUniqueOrThrow
   */
  export type SubmissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where: SubmissionsWhereUniqueInput
  }

  /**
   * Submissions findFirst
   */
  export type SubmissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * Submissions findFirstOrThrow
   */
  export type SubmissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * Submissions findMany
   */
  export type SubmissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionsOrderByWithRelationInput | SubmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * Submissions create
   */
  export type SubmissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Submissions.
     */
    data: XOR<SubmissionsCreateInput, SubmissionsUncheckedCreateInput>
  }

  /**
   * Submissions createMany
   */
  export type SubmissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionsCreateManyInput | SubmissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submissions createManyAndReturn
   */
  export type SubmissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionsCreateManyInput | SubmissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submissions update
   */
  export type SubmissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Submissions.
     */
    data: XOR<SubmissionsUpdateInput, SubmissionsUncheckedUpdateInput>
    /**
     * Choose, which Submissions to update.
     */
    where: SubmissionsWhereUniqueInput
  }

  /**
   * Submissions updateMany
   */
  export type SubmissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionsUpdateManyMutationInput, SubmissionsUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionsWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submissions updateManyAndReturn
   */
  export type SubmissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionsUpdateManyMutationInput, SubmissionsUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionsWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submissions upsert
   */
  export type SubmissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Submissions to update in case it exists.
     */
    where: SubmissionsWhereUniqueInput
    /**
     * In case the Submissions found by the `where` argument doesn't exist, create a new Submissions with this data.
     */
    create: XOR<SubmissionsCreateInput, SubmissionsUncheckedCreateInput>
    /**
     * In case the Submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionsUpdateInput, SubmissionsUncheckedUpdateInput>
  }

  /**
   * Submissions delete
   */
  export type SubmissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
    /**
     * Filter which Submissions to delete.
     */
    where: SubmissionsWhereUniqueInput
  }

  /**
   * Submissions deleteMany
   */
  export type SubmissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionsWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submissions without action
   */
  export type SubmissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submissions
     */
    select?: SubmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submissions
     */
    omit?: SubmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionsInclude<ExtArgs> | null
  }


  /**
   * Model TestCases
   */

  export type AggregateTestCases = {
    _count: TestCasesCountAggregateOutputType | null
    _min: TestCasesMinAggregateOutputType | null
    _max: TestCasesMaxAggregateOutputType | null
  }

  export type TestCasesMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    stdin: string | null
    stdout: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCasesMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    stdin: string | null
    stdout: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCasesCountAggregateOutputType = {
    id: number
    problemId: number
    stdin: number
    stdout: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestCasesMinAggregateInputType = {
    id?: true
    problemId?: true
    stdin?: true
    stdout?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCasesMaxAggregateInputType = {
    id?: true
    problemId?: true
    stdin?: true
    stdout?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCasesCountAggregateInputType = {
    id?: true
    problemId?: true
    stdin?: true
    stdout?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestCasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to aggregate.
     */
    where?: TestCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCasesMaxAggregateInputType
  }

  export type GetTestCasesAggregateType<T extends TestCasesAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCases[P]>
      : GetScalarType<T[P], AggregateTestCases[P]>
  }




  export type TestCasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCasesWhereInput
    orderBy?: TestCasesOrderByWithAggregationInput | TestCasesOrderByWithAggregationInput[]
    by: TestCasesScalarFieldEnum[] | TestCasesScalarFieldEnum
    having?: TestCasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCasesCountAggregateInputType | true
    _min?: TestCasesMinAggregateInputType
    _max?: TestCasesMaxAggregateInputType
  }

  export type TestCasesGroupByOutputType = {
    id: string
    problemId: string
    stdin: string
    stdout: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: TestCasesCountAggregateOutputType | null
    _min: TestCasesMinAggregateOutputType | null
    _max: TestCasesMaxAggregateOutputType | null
  }

  type GetTestCasesGroupByPayload<T extends TestCasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCasesGroupByOutputType[P]>
            : GetScalarType<T[P], TestCasesGroupByOutputType[P]>
        }
      >
    >


  export type TestCasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    stdin?: boolean
    stdout?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCases"]>

  export type TestCasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    stdin?: boolean
    stdout?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCases"]>

  export type TestCasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    stdin?: boolean
    stdout?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCases"]>

  export type TestCasesSelectScalar = {
    id?: boolean
    problemId?: boolean
    stdin?: boolean
    stdout?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestCasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "stdin" | "stdout" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["testCases"]>
  export type TestCasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestCasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestCasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestCasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCases"
    objects: {
      problem: Prisma.$ProblemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      stdin: string
      stdout: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testCases"]>
    composites: {}
  }

  type TestCasesGetPayload<S extends boolean | null | undefined | TestCasesDefaultArgs> = $Result.GetResult<Prisma.$TestCasesPayload, S>

  type TestCasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCasesCountAggregateInputType | true
    }

  export interface TestCasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCases'], meta: { name: 'TestCases' } }
    /**
     * Find zero or one TestCases that matches the filter.
     * @param {TestCasesFindUniqueArgs} args - Arguments to find a TestCases
     * @example
     * // Get one TestCases
     * const testCases = await prisma.testCases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCasesFindUniqueArgs>(args: SelectSubset<T, TestCasesFindUniqueArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCasesFindUniqueOrThrowArgs} args - Arguments to find a TestCases
     * @example
     * // Get one TestCases
     * const testCases = await prisma.testCases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCasesFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesFindFirstArgs} args - Arguments to find a TestCases
     * @example
     * // Get one TestCases
     * const testCases = await prisma.testCases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCasesFindFirstArgs>(args?: SelectSubset<T, TestCasesFindFirstArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesFindFirstOrThrowArgs} args - Arguments to find a TestCases
     * @example
     * // Get one TestCases
     * const testCases = await prisma.testCases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCasesFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCases.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCasesWithIdOnly = await prisma.testCases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCasesFindManyArgs>(args?: SelectSubset<T, TestCasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCases.
     * @param {TestCasesCreateArgs} args - Arguments to create a TestCases.
     * @example
     * // Create one TestCases
     * const TestCases = await prisma.testCases.create({
     *   data: {
     *     // ... data to create a TestCases
     *   }
     * })
     * 
     */
    create<T extends TestCasesCreateArgs>(args: SelectSubset<T, TestCasesCreateArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCases.
     * @param {TestCasesCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCases = await prisma.testCases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCasesCreateManyArgs>(args?: SelectSubset<T, TestCasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCasesCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCases = await prisma.testCases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCases and only return the `id`
     * const testCasesWithIdOnly = await prisma.testCases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCasesCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCases.
     * @param {TestCasesDeleteArgs} args - Arguments to delete one TestCases.
     * @example
     * // Delete one TestCases
     * const TestCases = await prisma.testCases.delete({
     *   where: {
     *     // ... filter to delete one TestCases
     *   }
     * })
     * 
     */
    delete<T extends TestCasesDeleteArgs>(args: SelectSubset<T, TestCasesDeleteArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCases.
     * @param {TestCasesUpdateArgs} args - Arguments to update one TestCases.
     * @example
     * // Update one TestCases
     * const testCases = await prisma.testCases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCasesUpdateArgs>(args: SelectSubset<T, TestCasesUpdateArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCases.
     * @param {TestCasesDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCasesDeleteManyArgs>(args?: SelectSubset<T, TestCasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCases = await prisma.testCases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCasesUpdateManyArgs>(args: SelectSubset<T, TestCasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases and returns the data updated in the database.
     * @param {TestCasesUpdateManyAndReturnArgs} args - Arguments to update many TestCases.
     * @example
     * // Update many TestCases
     * const testCases = await prisma.testCases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCases and only return the `id`
     * const testCasesWithIdOnly = await prisma.testCases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCasesUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCases.
     * @param {TestCasesUpsertArgs} args - Arguments to update or create a TestCases.
     * @example
     * // Update or create a TestCases
     * const testCases = await prisma.testCases.upsert({
     *   create: {
     *     // ... data to create a TestCases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCases we want to update
     *   }
     * })
     */
    upsert<T extends TestCasesUpsertArgs>(args: SelectSubset<T, TestCasesUpsertArgs<ExtArgs>>): Prisma__TestCasesClient<$Result.GetResult<Prisma.$TestCasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCases.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCasesCountArgs>(
      args?: Subset<T, TestCasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCasesAggregateArgs>(args: Subset<T, TestCasesAggregateArgs>): Prisma.PrismaPromise<GetTestCasesAggregateType<T>>

    /**
     * Group by TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesGroupByArgs} args - Group by arguments.
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
      T extends TestCasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCasesGroupByArgs['orderBy'] }
        : { orderBy?: TestCasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCases model
   */
  readonly fields: TestCasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestCases model
   */
  interface TestCasesFieldRefs {
    readonly id: FieldRef<"TestCases", 'String'>
    readonly problemId: FieldRef<"TestCases", 'String'>
    readonly stdin: FieldRef<"TestCases", 'String'>
    readonly stdout: FieldRef<"TestCases", 'String'>
    readonly userId: FieldRef<"TestCases", 'String'>
    readonly createdAt: FieldRef<"TestCases", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCases findUnique
   */
  export type TestCasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where: TestCasesWhereUniqueInput
  }

  /**
   * TestCases findUniqueOrThrow
   */
  export type TestCasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where: TestCasesWhereUniqueInput
  }

  /**
   * TestCases findFirst
   */
  export type TestCasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCasesScalarFieldEnum | TestCasesScalarFieldEnum[]
  }

  /**
   * TestCases findFirstOrThrow
   */
  export type TestCasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCasesScalarFieldEnum | TestCasesScalarFieldEnum[]
  }

  /**
   * TestCases findMany
   */
  export type TestCasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCasesOrderByWithRelationInput | TestCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCasesScalarFieldEnum | TestCasesScalarFieldEnum[]
  }

  /**
   * TestCases create
   */
  export type TestCasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCases.
     */
    data: XOR<TestCasesCreateInput, TestCasesUncheckedCreateInput>
  }

  /**
   * TestCases createMany
   */
  export type TestCasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCasesCreateManyInput | TestCasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCases createManyAndReturn
   */
  export type TestCasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * The data used to create many TestCases.
     */
    data: TestCasesCreateManyInput | TestCasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCases update
   */
  export type TestCasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCases.
     */
    data: XOR<TestCasesUpdateInput, TestCasesUncheckedUpdateInput>
    /**
     * Choose, which TestCases to update.
     */
    where: TestCasesWhereUniqueInput
  }

  /**
   * TestCases updateMany
   */
  export type TestCasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCasesUpdateManyMutationInput, TestCasesUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCasesWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
  }

  /**
   * TestCases updateManyAndReturn
   */
  export type TestCasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCasesUpdateManyMutationInput, TestCasesUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCasesWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCases upsert
   */
  export type TestCasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCases to update in case it exists.
     */
    where: TestCasesWhereUniqueInput
    /**
     * In case the TestCases found by the `where` argument doesn't exist, create a new TestCases with this data.
     */
    create: XOR<TestCasesCreateInput, TestCasesUncheckedCreateInput>
    /**
     * In case the TestCases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCasesUpdateInput, TestCasesUncheckedUpdateInput>
  }

  /**
   * TestCases delete
   */
  export type TestCasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
    /**
     * Filter which TestCases to delete.
     */
    where: TestCasesWhereUniqueInput
  }

  /**
   * TestCases deleteMany
   */
  export type TestCasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCasesWhereInput
    /**
     * Limit how many TestCases to delete.
     */
    limit?: number
  }

  /**
   * TestCases without action
   */
  export type TestCasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCases
     */
    select?: TestCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCases
     */
    omit?: TestCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesInclude<ExtArgs> | null
  }


  /**
   * Model ProblemsSolved
   */

  export type AggregateProblemsSolved = {
    _count: ProblemsSolvedCountAggregateOutputType | null
    _min: ProblemsSolvedMinAggregateOutputType | null
    _max: ProblemsSolvedMaxAggregateOutputType | null
  }

  export type ProblemsSolvedMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemsSolvedMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemsSolvedCountAggregateOutputType = {
    id: number
    problemId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemsSolvedMinAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemsSolvedMaxAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemsSolvedCountAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemsSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemsSolved to aggregate.
     */
    where?: ProblemsSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsSolveds to fetch.
     */
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemsSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemsSolveds
    **/
    _count?: true | ProblemsSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemsSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemsSolvedMaxAggregateInputType
  }

  export type GetProblemsSolvedAggregateType<T extends ProblemsSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemsSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemsSolved[P]>
      : GetScalarType<T[P], AggregateProblemsSolved[P]>
  }




  export type ProblemsSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemsSolvedWhereInput
    orderBy?: ProblemsSolvedOrderByWithAggregationInput | ProblemsSolvedOrderByWithAggregationInput[]
    by: ProblemsSolvedScalarFieldEnum[] | ProblemsSolvedScalarFieldEnum
    having?: ProblemsSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemsSolvedCountAggregateInputType | true
    _min?: ProblemsSolvedMinAggregateInputType
    _max?: ProblemsSolvedMaxAggregateInputType
  }

  export type ProblemsSolvedGroupByOutputType = {
    id: string
    problemId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemsSolvedCountAggregateOutputType | null
    _min: ProblemsSolvedMinAggregateOutputType | null
    _max: ProblemsSolvedMaxAggregateOutputType | null
  }

  type GetProblemsSolvedGroupByPayload<T extends ProblemsSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemsSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemsSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemsSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemsSolvedGroupByOutputType[P]>
        }
      >
    >


  export type ProblemsSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsSolved"]>

  export type ProblemsSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsSolved"]>

  export type ProblemsSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemsSolved"]>

  export type ProblemsSolvedSelectScalar = {
    id?: boolean
    problemId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemsSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemsSolved"]>
  export type ProblemsSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemsSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemsSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemsSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemsSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemsSolved"]>
    composites: {}
  }

  type ProblemsSolvedGetPayload<S extends boolean | null | undefined | ProblemsSolvedDefaultArgs> = $Result.GetResult<Prisma.$ProblemsSolvedPayload, S>

  type ProblemsSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemsSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemsSolvedCountAggregateInputType | true
    }

  export interface ProblemsSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemsSolved'], meta: { name: 'ProblemsSolved' } }
    /**
     * Find zero or one ProblemsSolved that matches the filter.
     * @param {ProblemsSolvedFindUniqueArgs} args - Arguments to find a ProblemsSolved
     * @example
     * // Get one ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemsSolvedFindUniqueArgs>(args: SelectSubset<T, ProblemsSolvedFindUniqueArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemsSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemsSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemsSolved
     * @example
     * // Get one ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemsSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemsSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemsSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedFindFirstArgs} args - Arguments to find a ProblemsSolved
     * @example
     * // Get one ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemsSolvedFindFirstArgs>(args?: SelectSubset<T, ProblemsSolvedFindFirstArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemsSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemsSolved
     * @example
     * // Get one ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemsSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemsSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemsSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemsSolveds
     * const problemsSolveds = await prisma.problemsSolved.findMany()
     * 
     * // Get first 10 ProblemsSolveds
     * const problemsSolveds = await prisma.problemsSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemsSolvedWithIdOnly = await prisma.problemsSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemsSolvedFindManyArgs>(args?: SelectSubset<T, ProblemsSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemsSolved.
     * @param {ProblemsSolvedCreateArgs} args - Arguments to create a ProblemsSolved.
     * @example
     * // Create one ProblemsSolved
     * const ProblemsSolved = await prisma.problemsSolved.create({
     *   data: {
     *     // ... data to create a ProblemsSolved
     *   }
     * })
     * 
     */
    create<T extends ProblemsSolvedCreateArgs>(args: SelectSubset<T, ProblemsSolvedCreateArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemsSolveds.
     * @param {ProblemsSolvedCreateManyArgs} args - Arguments to create many ProblemsSolveds.
     * @example
     * // Create many ProblemsSolveds
     * const problemsSolved = await prisma.problemsSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemsSolvedCreateManyArgs>(args?: SelectSubset<T, ProblemsSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemsSolveds and returns the data saved in the database.
     * @param {ProblemsSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemsSolveds.
     * @example
     * // Create many ProblemsSolveds
     * const problemsSolved = await prisma.problemsSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemsSolveds and only return the `id`
     * const problemsSolvedWithIdOnly = await prisma.problemsSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemsSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemsSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemsSolved.
     * @param {ProblemsSolvedDeleteArgs} args - Arguments to delete one ProblemsSolved.
     * @example
     * // Delete one ProblemsSolved
     * const ProblemsSolved = await prisma.problemsSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemsSolved
     *   }
     * })
     * 
     */
    delete<T extends ProblemsSolvedDeleteArgs>(args: SelectSubset<T, ProblemsSolvedDeleteArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemsSolved.
     * @param {ProblemsSolvedUpdateArgs} args - Arguments to update one ProblemsSolved.
     * @example
     * // Update one ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemsSolvedUpdateArgs>(args: SelectSubset<T, ProblemsSolvedUpdateArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemsSolveds.
     * @param {ProblemsSolvedDeleteManyArgs} args - Arguments to filter ProblemsSolveds to delete.
     * @example
     * // Delete a few ProblemsSolveds
     * const { count } = await prisma.problemsSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemsSolvedDeleteManyArgs>(args?: SelectSubset<T, ProblemsSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemsSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemsSolveds
     * const problemsSolved = await prisma.problemsSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemsSolvedUpdateManyArgs>(args: SelectSubset<T, ProblemsSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemsSolveds and returns the data updated in the database.
     * @param {ProblemsSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemsSolveds.
     * @example
     * // Update many ProblemsSolveds
     * const problemsSolved = await prisma.problemsSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemsSolveds and only return the `id`
     * const problemsSolvedWithIdOnly = await prisma.problemsSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemsSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemsSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemsSolved.
     * @param {ProblemsSolvedUpsertArgs} args - Arguments to update or create a ProblemsSolved.
     * @example
     * // Update or create a ProblemsSolved
     * const problemsSolved = await prisma.problemsSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemsSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemsSolved we want to update
     *   }
     * })
     */
    upsert<T extends ProblemsSolvedUpsertArgs>(args: SelectSubset<T, ProblemsSolvedUpsertArgs<ExtArgs>>): Prisma__ProblemsSolvedClient<$Result.GetResult<Prisma.$ProblemsSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemsSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedCountArgs} args - Arguments to filter ProblemsSolveds to count.
     * @example
     * // Count the number of ProblemsSolveds
     * const count = await prisma.problemsSolved.count({
     *   where: {
     *     // ... the filter for the ProblemsSolveds we want to count
     *   }
     * })
    **/
    count<T extends ProblemsSolvedCountArgs>(
      args?: Subset<T, ProblemsSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemsSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemsSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemsSolvedAggregateArgs>(args: Subset<T, ProblemsSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemsSolvedAggregateType<T>>

    /**
     * Group by ProblemsSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemsSolvedGroupByArgs} args - Group by arguments.
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
      T extends ProblemsSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemsSolvedGroupByArgs['orderBy'] }
        : { orderBy?: ProblemsSolvedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemsSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemsSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemsSolved model
   */
  readonly fields: ProblemsSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemsSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemsSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemsSolved model
   */
  interface ProblemsSolvedFieldRefs {
    readonly id: FieldRef<"ProblemsSolved", 'String'>
    readonly problemId: FieldRef<"ProblemsSolved", 'String'>
    readonly userId: FieldRef<"ProblemsSolved", 'String'>
    readonly createdAt: FieldRef<"ProblemsSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemsSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemsSolved findUnique
   */
  export type ProblemsSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsSolved to fetch.
     */
    where: ProblemsSolvedWhereUniqueInput
  }

  /**
   * ProblemsSolved findUniqueOrThrow
   */
  export type ProblemsSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsSolved to fetch.
     */
    where: ProblemsSolvedWhereUniqueInput
  }

  /**
   * ProblemsSolved findFirst
   */
  export type ProblemsSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsSolved to fetch.
     */
    where?: ProblemsSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsSolveds to fetch.
     */
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemsSolveds.
     */
    cursor?: ProblemsSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemsSolveds.
     */
    distinct?: ProblemsSolvedScalarFieldEnum | ProblemsSolvedScalarFieldEnum[]
  }

  /**
   * ProblemsSolved findFirstOrThrow
   */
  export type ProblemsSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsSolved to fetch.
     */
    where?: ProblemsSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsSolveds to fetch.
     */
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemsSolveds.
     */
    cursor?: ProblemsSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemsSolveds.
     */
    distinct?: ProblemsSolvedScalarFieldEnum | ProblemsSolvedScalarFieldEnum[]
  }

  /**
   * ProblemsSolved findMany
   */
  export type ProblemsSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemsSolveds to fetch.
     */
    where?: ProblemsSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemsSolveds to fetch.
     */
    orderBy?: ProblemsSolvedOrderByWithRelationInput | ProblemsSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemsSolveds.
     */
    cursor?: ProblemsSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemsSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemsSolveds.
     */
    skip?: number
    distinct?: ProblemsSolvedScalarFieldEnum | ProblemsSolvedScalarFieldEnum[]
  }

  /**
   * ProblemsSolved create
   */
  export type ProblemsSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemsSolved.
     */
    data: XOR<ProblemsSolvedCreateInput, ProblemsSolvedUncheckedCreateInput>
  }

  /**
   * ProblemsSolved createMany
   */
  export type ProblemsSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemsSolveds.
     */
    data: ProblemsSolvedCreateManyInput | ProblemsSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemsSolved createManyAndReturn
   */
  export type ProblemsSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemsSolveds.
     */
    data: ProblemsSolvedCreateManyInput | ProblemsSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemsSolved update
   */
  export type ProblemsSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemsSolved.
     */
    data: XOR<ProblemsSolvedUpdateInput, ProblemsSolvedUncheckedUpdateInput>
    /**
     * Choose, which ProblemsSolved to update.
     */
    where: ProblemsSolvedWhereUniqueInput
  }

  /**
   * ProblemsSolved updateMany
   */
  export type ProblemsSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemsSolveds.
     */
    data: XOR<ProblemsSolvedUpdateManyMutationInput, ProblemsSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemsSolveds to update
     */
    where?: ProblemsSolvedWhereInput
    /**
     * Limit how many ProblemsSolveds to update.
     */
    limit?: number
  }

  /**
   * ProblemsSolved updateManyAndReturn
   */
  export type ProblemsSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * The data used to update ProblemsSolveds.
     */
    data: XOR<ProblemsSolvedUpdateManyMutationInput, ProblemsSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemsSolveds to update
     */
    where?: ProblemsSolvedWhereInput
    /**
     * Limit how many ProblemsSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemsSolved upsert
   */
  export type ProblemsSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemsSolved to update in case it exists.
     */
    where: ProblemsSolvedWhereUniqueInput
    /**
     * In case the ProblemsSolved found by the `where` argument doesn't exist, create a new ProblemsSolved with this data.
     */
    create: XOR<ProblemsSolvedCreateInput, ProblemsSolvedUncheckedCreateInput>
    /**
     * In case the ProblemsSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemsSolvedUpdateInput, ProblemsSolvedUncheckedUpdateInput>
  }

  /**
   * ProblemsSolved delete
   */
  export type ProblemsSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
    /**
     * Filter which ProblemsSolved to delete.
     */
    where: ProblemsSolvedWhereUniqueInput
  }

  /**
   * ProblemsSolved deleteMany
   */
  export type ProblemsSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemsSolveds to delete
     */
    where?: ProblemsSolvedWhereInput
    /**
     * Limit how many ProblemsSolveds to delete.
     */
    limit?: number
  }

  /**
   * ProblemsSolved without action
   */
  export type ProblemsSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemsSolved
     */
    select?: ProblemsSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemsSolved
     */
    omit?: ProblemsSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemsSolvedInclude<ExtArgs> | null
  }


  /**
   * Model ProblemList
   */

  export type AggregateProblemList = {
    _count: ProblemListCountAggregateOutputType | null
    _min: ProblemListMinAggregateOutputType | null
    _max: ProblemListMaxAggregateOutputType | null
  }

  export type ProblemListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemList to aggregate.
     */
    where?: ProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemLists to fetch.
     */
    orderBy?: ProblemListOrderByWithRelationInput | ProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemLists
    **/
    _count?: true | ProblemListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemListMaxAggregateInputType
  }

  export type GetProblemListAggregateType<T extends ProblemListAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemList[P]>
      : GetScalarType<T[P], AggregateProblemList[P]>
  }




  export type ProblemListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemListWhereInput
    orderBy?: ProblemListOrderByWithAggregationInput | ProblemListOrderByWithAggregationInput[]
    by: ProblemListScalarFieldEnum[] | ProblemListScalarFieldEnum
    having?: ProblemListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemListCountAggregateInputType | true
    _min?: ProblemListMinAggregateInputType
    _max?: ProblemListMaxAggregateInputType
  }

  export type ProblemListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemListCountAggregateOutputType | null
    _min: ProblemListMinAggregateOutputType | null
    _max: ProblemListMaxAggregateOutputType | null
  }

  type GetProblemListGroupByPayload<T extends ProblemListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemListGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemListGroupByOutputType[P]>
        }
      >
    >


  export type ProblemListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | ProblemList$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProblemListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemList"]>

  export type ProblemListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemList"]>

  export type ProblemListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemList"]>

  export type ProblemListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemList"]>
  export type ProblemListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | ProblemList$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProblemListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemList"
    objects: {
      problems: Prisma.$ProblemInProblemListPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemList"]>
    composites: {}
  }

  type ProblemListGetPayload<S extends boolean | null | undefined | ProblemListDefaultArgs> = $Result.GetResult<Prisma.$ProblemListPayload, S>

  type ProblemListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemListCountAggregateInputType | true
    }

  export interface ProblemListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemList'], meta: { name: 'ProblemList' } }
    /**
     * Find zero or one ProblemList that matches the filter.
     * @param {ProblemListFindUniqueArgs} args - Arguments to find a ProblemList
     * @example
     * // Get one ProblemList
     * const problemList = await prisma.problemList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemListFindUniqueArgs>(args: SelectSubset<T, ProblemListFindUniqueArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemListFindUniqueOrThrowArgs} args - Arguments to find a ProblemList
     * @example
     * // Get one ProblemList
     * const problemList = await prisma.problemList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemListFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListFindFirstArgs} args - Arguments to find a ProblemList
     * @example
     * // Get one ProblemList
     * const problemList = await prisma.problemList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemListFindFirstArgs>(args?: SelectSubset<T, ProblemListFindFirstArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListFindFirstOrThrowArgs} args - Arguments to find a ProblemList
     * @example
     * // Get one ProblemList
     * const problemList = await prisma.problemList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemListFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemLists
     * const problemLists = await prisma.problemList.findMany()
     * 
     * // Get first 10 ProblemLists
     * const problemLists = await prisma.problemList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemListWithIdOnly = await prisma.problemList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemListFindManyArgs>(args?: SelectSubset<T, ProblemListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemList.
     * @param {ProblemListCreateArgs} args - Arguments to create a ProblemList.
     * @example
     * // Create one ProblemList
     * const ProblemList = await prisma.problemList.create({
     *   data: {
     *     // ... data to create a ProblemList
     *   }
     * })
     * 
     */
    create<T extends ProblemListCreateArgs>(args: SelectSubset<T, ProblemListCreateArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemLists.
     * @param {ProblemListCreateManyArgs} args - Arguments to create many ProblemLists.
     * @example
     * // Create many ProblemLists
     * const problemList = await prisma.problemList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemListCreateManyArgs>(args?: SelectSubset<T, ProblemListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemLists and returns the data saved in the database.
     * @param {ProblemListCreateManyAndReturnArgs} args - Arguments to create many ProblemLists.
     * @example
     * // Create many ProblemLists
     * const problemList = await prisma.problemList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemLists and only return the `id`
     * const problemListWithIdOnly = await prisma.problemList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemListCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemList.
     * @param {ProblemListDeleteArgs} args - Arguments to delete one ProblemList.
     * @example
     * // Delete one ProblemList
     * const ProblemList = await prisma.problemList.delete({
     *   where: {
     *     // ... filter to delete one ProblemList
     *   }
     * })
     * 
     */
    delete<T extends ProblemListDeleteArgs>(args: SelectSubset<T, ProblemListDeleteArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemList.
     * @param {ProblemListUpdateArgs} args - Arguments to update one ProblemList.
     * @example
     * // Update one ProblemList
     * const problemList = await prisma.problemList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemListUpdateArgs>(args: SelectSubset<T, ProblemListUpdateArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemLists.
     * @param {ProblemListDeleteManyArgs} args - Arguments to filter ProblemLists to delete.
     * @example
     * // Delete a few ProblemLists
     * const { count } = await prisma.problemList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemListDeleteManyArgs>(args?: SelectSubset<T, ProblemListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemLists
     * const problemList = await prisma.problemList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemListUpdateManyArgs>(args: SelectSubset<T, ProblemListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemLists and returns the data updated in the database.
     * @param {ProblemListUpdateManyAndReturnArgs} args - Arguments to update many ProblemLists.
     * @example
     * // Update many ProblemLists
     * const problemList = await prisma.problemList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemLists and only return the `id`
     * const problemListWithIdOnly = await prisma.problemList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemListUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemList.
     * @param {ProblemListUpsertArgs} args - Arguments to update or create a ProblemList.
     * @example
     * // Update or create a ProblemList
     * const problemList = await prisma.problemList.upsert({
     *   create: {
     *     // ... data to create a ProblemList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemList we want to update
     *   }
     * })
     */
    upsert<T extends ProblemListUpsertArgs>(args: SelectSubset<T, ProblemListUpsertArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListCountArgs} args - Arguments to filter ProblemLists to count.
     * @example
     * // Count the number of ProblemLists
     * const count = await prisma.problemList.count({
     *   where: {
     *     // ... the filter for the ProblemLists we want to count
     *   }
     * })
    **/
    count<T extends ProblemListCountArgs>(
      args?: Subset<T, ProblemListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemListAggregateArgs>(args: Subset<T, ProblemListAggregateArgs>): Prisma.PrismaPromise<GetProblemListAggregateType<T>>

    /**
     * Group by ProblemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemListGroupByArgs} args - Group by arguments.
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
      T extends ProblemListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemListGroupByArgs['orderBy'] }
        : { orderBy?: ProblemListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemList model
   */
  readonly fields: ProblemListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends ProblemList$problemsArgs<ExtArgs> = {}>(args?: Subset<T, ProblemList$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemList model
   */
  interface ProblemListFieldRefs {
    readonly id: FieldRef<"ProblemList", 'String'>
    readonly name: FieldRef<"ProblemList", 'String'>
    readonly description: FieldRef<"ProblemList", 'String'>
    readonly userId: FieldRef<"ProblemList", 'String'>
    readonly createdAt: FieldRef<"ProblemList", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemList findUnique
   */
  export type ProblemListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemList to fetch.
     */
    where: ProblemListWhereUniqueInput
  }

  /**
   * ProblemList findUniqueOrThrow
   */
  export type ProblemListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemList to fetch.
     */
    where: ProblemListWhereUniqueInput
  }

  /**
   * ProblemList findFirst
   */
  export type ProblemListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemList to fetch.
     */
    where?: ProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemLists to fetch.
     */
    orderBy?: ProblemListOrderByWithRelationInput | ProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemLists.
     */
    cursor?: ProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemLists.
     */
    distinct?: ProblemListScalarFieldEnum | ProblemListScalarFieldEnum[]
  }

  /**
   * ProblemList findFirstOrThrow
   */
  export type ProblemListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemList to fetch.
     */
    where?: ProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemLists to fetch.
     */
    orderBy?: ProblemListOrderByWithRelationInput | ProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemLists.
     */
    cursor?: ProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemLists.
     */
    distinct?: ProblemListScalarFieldEnum | ProblemListScalarFieldEnum[]
  }

  /**
   * ProblemList findMany
   */
  export type ProblemListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemLists to fetch.
     */
    where?: ProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemLists to fetch.
     */
    orderBy?: ProblemListOrderByWithRelationInput | ProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemLists.
     */
    cursor?: ProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemLists.
     */
    skip?: number
    distinct?: ProblemListScalarFieldEnum | ProblemListScalarFieldEnum[]
  }

  /**
   * ProblemList create
   */
  export type ProblemListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemList.
     */
    data: XOR<ProblemListCreateInput, ProblemListUncheckedCreateInput>
  }

  /**
   * ProblemList createMany
   */
  export type ProblemListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemLists.
     */
    data: ProblemListCreateManyInput | ProblemListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemList createManyAndReturn
   */
  export type ProblemListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemLists.
     */
    data: ProblemListCreateManyInput | ProblemListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemList update
   */
  export type ProblemListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemList.
     */
    data: XOR<ProblemListUpdateInput, ProblemListUncheckedUpdateInput>
    /**
     * Choose, which ProblemList to update.
     */
    where: ProblemListWhereUniqueInput
  }

  /**
   * ProblemList updateMany
   */
  export type ProblemListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemLists.
     */
    data: XOR<ProblemListUpdateManyMutationInput, ProblemListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemLists to update
     */
    where?: ProblemListWhereInput
    /**
     * Limit how many ProblemLists to update.
     */
    limit?: number
  }

  /**
   * ProblemList updateManyAndReturn
   */
  export type ProblemListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * The data used to update ProblemLists.
     */
    data: XOR<ProblemListUpdateManyMutationInput, ProblemListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemLists to update
     */
    where?: ProblemListWhereInput
    /**
     * Limit how many ProblemLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemList upsert
   */
  export type ProblemListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemList to update in case it exists.
     */
    where: ProblemListWhereUniqueInput
    /**
     * In case the ProblemList found by the `where` argument doesn't exist, create a new ProblemList with this data.
     */
    create: XOR<ProblemListCreateInput, ProblemListUncheckedCreateInput>
    /**
     * In case the ProblemList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemListUpdateInput, ProblemListUncheckedUpdateInput>
  }

  /**
   * ProblemList delete
   */
  export type ProblemListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
    /**
     * Filter which ProblemList to delete.
     */
    where: ProblemListWhereUniqueInput
  }

  /**
   * ProblemList deleteMany
   */
  export type ProblemListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemLists to delete
     */
    where?: ProblemListWhereInput
    /**
     * Limit how many ProblemLists to delete.
     */
    limit?: number
  }

  /**
   * ProblemList.problems
   */
  export type ProblemList$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    where?: ProblemInProblemListWhereInput
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    cursor?: ProblemInProblemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInProblemListScalarFieldEnum | ProblemInProblemListScalarFieldEnum[]
  }

  /**
   * ProblemList without action
   */
  export type ProblemListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemList
     */
    select?: ProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemList
     */
    omit?: ProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemListInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInProblemList
   */

  export type AggregateProblemInProblemList = {
    _count: ProblemInProblemListCountAggregateOutputType | null
    _min: ProblemInProblemListMinAggregateOutputType | null
    _max: ProblemInProblemListMaxAggregateOutputType | null
  }

  export type ProblemInProblemListMinAggregateOutputType = {
    id: string | null
    problemListId: string | null
    problemListName: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInProblemListMaxAggregateOutputType = {
    id: string | null
    problemListId: string | null
    problemListName: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInProblemListCountAggregateOutputType = {
    id: number
    problemListId: number
    problemListName: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInProblemListMinAggregateInputType = {
    id?: true
    problemListId?: true
    problemListName?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInProblemListMaxAggregateInputType = {
    id?: true
    problemListId?: true
    problemListName?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInProblemListCountAggregateInputType = {
    id?: true
    problemListId?: true
    problemListName?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInProblemListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInProblemList to aggregate.
     */
    where?: ProblemInProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInProblemLists to fetch.
     */
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInProblemLists
    **/
    _count?: true | ProblemInProblemListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInProblemListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInProblemListMaxAggregateInputType
  }

  export type GetProblemInProblemListAggregateType<T extends ProblemInProblemListAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInProblemList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInProblemList[P]>
      : GetScalarType<T[P], AggregateProblemInProblemList[P]>
  }




  export type ProblemInProblemListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInProblemListWhereInput
    orderBy?: ProblemInProblemListOrderByWithAggregationInput | ProblemInProblemListOrderByWithAggregationInput[]
    by: ProblemInProblemListScalarFieldEnum[] | ProblemInProblemListScalarFieldEnum
    having?: ProblemInProblemListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInProblemListCountAggregateInputType | true
    _min?: ProblemInProblemListMinAggregateInputType
    _max?: ProblemInProblemListMaxAggregateInputType
  }

  export type ProblemInProblemListGroupByOutputType = {
    id: string
    problemListId: string
    problemListName: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemInProblemListCountAggregateOutputType | null
    _min: ProblemInProblemListMinAggregateOutputType | null
    _max: ProblemInProblemListMaxAggregateOutputType | null
  }

  type GetProblemInProblemListGroupByPayload<T extends ProblemInProblemListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInProblemListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInProblemListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInProblemListGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInProblemListGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInProblemListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemListId?: boolean
    problemListName?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInProblemList"]>

  export type ProblemInProblemListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemListId?: boolean
    problemListName?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInProblemList"]>

  export type ProblemInProblemListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemListId?: boolean
    problemListName?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInProblemList"]>

  export type ProblemInProblemListSelectScalar = {
    id?: boolean
    problemListId?: boolean
    problemListName?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemInProblemListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemListId" | "problemListName" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemInProblemList"]>
  export type ProblemInProblemListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInProblemListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInProblemListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problemList?: boolean | ProblemListDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInProblemListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInProblemList"
    objects: {
      problemList: Prisma.$ProblemListPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemListId: string
      problemListName: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInProblemList"]>
    composites: {}
  }

  type ProblemInProblemListGetPayload<S extends boolean | null | undefined | ProblemInProblemListDefaultArgs> = $Result.GetResult<Prisma.$ProblemInProblemListPayload, S>

  type ProblemInProblemListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInProblemListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInProblemListCountAggregateInputType | true
    }

  export interface ProblemInProblemListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInProblemList'], meta: { name: 'ProblemInProblemList' } }
    /**
     * Find zero or one ProblemInProblemList that matches the filter.
     * @param {ProblemInProblemListFindUniqueArgs} args - Arguments to find a ProblemInProblemList
     * @example
     * // Get one ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInProblemListFindUniqueArgs>(args: SelectSubset<T, ProblemInProblemListFindUniqueArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInProblemList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInProblemListFindUniqueOrThrowArgs} args - Arguments to find a ProblemInProblemList
     * @example
     * // Get one ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInProblemListFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInProblemListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInProblemList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListFindFirstArgs} args - Arguments to find a ProblemInProblemList
     * @example
     * // Get one ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInProblemListFindFirstArgs>(args?: SelectSubset<T, ProblemInProblemListFindFirstArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInProblemList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListFindFirstOrThrowArgs} args - Arguments to find a ProblemInProblemList
     * @example
     * // Get one ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInProblemListFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInProblemListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInProblemLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInProblemLists
     * const problemInProblemLists = await prisma.problemInProblemList.findMany()
     * 
     * // Get first 10 ProblemInProblemLists
     * const problemInProblemLists = await prisma.problemInProblemList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInProblemListWithIdOnly = await prisma.problemInProblemList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInProblemListFindManyArgs>(args?: SelectSubset<T, ProblemInProblemListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInProblemList.
     * @param {ProblemInProblemListCreateArgs} args - Arguments to create a ProblemInProblemList.
     * @example
     * // Create one ProblemInProblemList
     * const ProblemInProblemList = await prisma.problemInProblemList.create({
     *   data: {
     *     // ... data to create a ProblemInProblemList
     *   }
     * })
     * 
     */
    create<T extends ProblemInProblemListCreateArgs>(args: SelectSubset<T, ProblemInProblemListCreateArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInProblemLists.
     * @param {ProblemInProblemListCreateManyArgs} args - Arguments to create many ProblemInProblemLists.
     * @example
     * // Create many ProblemInProblemLists
     * const problemInProblemList = await prisma.problemInProblemList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInProblemListCreateManyArgs>(args?: SelectSubset<T, ProblemInProblemListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInProblemLists and returns the data saved in the database.
     * @param {ProblemInProblemListCreateManyAndReturnArgs} args - Arguments to create many ProblemInProblemLists.
     * @example
     * // Create many ProblemInProblemLists
     * const problemInProblemList = await prisma.problemInProblemList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInProblemLists and only return the `id`
     * const problemInProblemListWithIdOnly = await prisma.problemInProblemList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInProblemListCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInProblemListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInProblemList.
     * @param {ProblemInProblemListDeleteArgs} args - Arguments to delete one ProblemInProblemList.
     * @example
     * // Delete one ProblemInProblemList
     * const ProblemInProblemList = await prisma.problemInProblemList.delete({
     *   where: {
     *     // ... filter to delete one ProblemInProblemList
     *   }
     * })
     * 
     */
    delete<T extends ProblemInProblemListDeleteArgs>(args: SelectSubset<T, ProblemInProblemListDeleteArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInProblemList.
     * @param {ProblemInProblemListUpdateArgs} args - Arguments to update one ProblemInProblemList.
     * @example
     * // Update one ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInProblemListUpdateArgs>(args: SelectSubset<T, ProblemInProblemListUpdateArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInProblemLists.
     * @param {ProblemInProblemListDeleteManyArgs} args - Arguments to filter ProblemInProblemLists to delete.
     * @example
     * // Delete a few ProblemInProblemLists
     * const { count } = await prisma.problemInProblemList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInProblemListDeleteManyArgs>(args?: SelectSubset<T, ProblemInProblemListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInProblemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInProblemLists
     * const problemInProblemList = await prisma.problemInProblemList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInProblemListUpdateManyArgs>(args: SelectSubset<T, ProblemInProblemListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInProblemLists and returns the data updated in the database.
     * @param {ProblemInProblemListUpdateManyAndReturnArgs} args - Arguments to update many ProblemInProblemLists.
     * @example
     * // Update many ProblemInProblemLists
     * const problemInProblemList = await prisma.problemInProblemList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInProblemLists and only return the `id`
     * const problemInProblemListWithIdOnly = await prisma.problemInProblemList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemInProblemListUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInProblemListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInProblemList.
     * @param {ProblemInProblemListUpsertArgs} args - Arguments to update or create a ProblemInProblemList.
     * @example
     * // Update or create a ProblemInProblemList
     * const problemInProblemList = await prisma.problemInProblemList.upsert({
     *   create: {
     *     // ... data to create a ProblemInProblemList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInProblemList we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInProblemListUpsertArgs>(args: SelectSubset<T, ProblemInProblemListUpsertArgs<ExtArgs>>): Prisma__ProblemInProblemListClient<$Result.GetResult<Prisma.$ProblemInProblemListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInProblemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListCountArgs} args - Arguments to filter ProblemInProblemLists to count.
     * @example
     * // Count the number of ProblemInProblemLists
     * const count = await prisma.problemInProblemList.count({
     *   where: {
     *     // ... the filter for the ProblemInProblemLists we want to count
     *   }
     * })
    **/
    count<T extends ProblemInProblemListCountArgs>(
      args?: Subset<T, ProblemInProblemListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInProblemListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInProblemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemInProblemListAggregateArgs>(args: Subset<T, ProblemInProblemListAggregateArgs>): Prisma.PrismaPromise<GetProblemInProblemListAggregateType<T>>

    /**
     * Group by ProblemInProblemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInProblemListGroupByArgs} args - Group by arguments.
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
      T extends ProblemInProblemListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInProblemListGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInProblemListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemInProblemListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInProblemListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInProblemList model
   */
  readonly fields: ProblemInProblemListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInProblemList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInProblemListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problemList<T extends ProblemListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemListDefaultArgs<ExtArgs>>): Prisma__ProblemListClient<$Result.GetResult<Prisma.$ProblemListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProblemInProblemList model
   */
  interface ProblemInProblemListFieldRefs {
    readonly id: FieldRef<"ProblemInProblemList", 'String'>
    readonly problemListId: FieldRef<"ProblemInProblemList", 'String'>
    readonly problemListName: FieldRef<"ProblemInProblemList", 'String'>
    readonly problemId: FieldRef<"ProblemInProblemList", 'String'>
    readonly createdAt: FieldRef<"ProblemInProblemList", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemInProblemList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInProblemList findUnique
   */
  export type ProblemInProblemListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInProblemList to fetch.
     */
    where: ProblemInProblemListWhereUniqueInput
  }

  /**
   * ProblemInProblemList findUniqueOrThrow
   */
  export type ProblemInProblemListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInProblemList to fetch.
     */
    where: ProblemInProblemListWhereUniqueInput
  }

  /**
   * ProblemInProblemList findFirst
   */
  export type ProblemInProblemListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInProblemList to fetch.
     */
    where?: ProblemInProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInProblemLists to fetch.
     */
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInProblemLists.
     */
    cursor?: ProblemInProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInProblemLists.
     */
    distinct?: ProblemInProblemListScalarFieldEnum | ProblemInProblemListScalarFieldEnum[]
  }

  /**
   * ProblemInProblemList findFirstOrThrow
   */
  export type ProblemInProblemListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInProblemList to fetch.
     */
    where?: ProblemInProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInProblemLists to fetch.
     */
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInProblemLists.
     */
    cursor?: ProblemInProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInProblemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInProblemLists.
     */
    distinct?: ProblemInProblemListScalarFieldEnum | ProblemInProblemListScalarFieldEnum[]
  }

  /**
   * ProblemInProblemList findMany
   */
  export type ProblemInProblemListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInProblemLists to fetch.
     */
    where?: ProblemInProblemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInProblemLists to fetch.
     */
    orderBy?: ProblemInProblemListOrderByWithRelationInput | ProblemInProblemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInProblemLists.
     */
    cursor?: ProblemInProblemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInProblemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInProblemLists.
     */
    skip?: number
    distinct?: ProblemInProblemListScalarFieldEnum | ProblemInProblemListScalarFieldEnum[]
  }

  /**
   * ProblemInProblemList create
   */
  export type ProblemInProblemListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInProblemList.
     */
    data: XOR<ProblemInProblemListCreateInput, ProblemInProblemListUncheckedCreateInput>
  }

  /**
   * ProblemInProblemList createMany
   */
  export type ProblemInProblemListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInProblemLists.
     */
    data: ProblemInProblemListCreateManyInput | ProblemInProblemListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInProblemList createManyAndReturn
   */
  export type ProblemInProblemListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInProblemLists.
     */
    data: ProblemInProblemListCreateManyInput | ProblemInProblemListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInProblemList update
   */
  export type ProblemInProblemListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInProblemList.
     */
    data: XOR<ProblemInProblemListUpdateInput, ProblemInProblemListUncheckedUpdateInput>
    /**
     * Choose, which ProblemInProblemList to update.
     */
    where: ProblemInProblemListWhereUniqueInput
  }

  /**
   * ProblemInProblemList updateMany
   */
  export type ProblemInProblemListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInProblemLists.
     */
    data: XOR<ProblemInProblemListUpdateManyMutationInput, ProblemInProblemListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInProblemLists to update
     */
    where?: ProblemInProblemListWhereInput
    /**
     * Limit how many ProblemInProblemLists to update.
     */
    limit?: number
  }

  /**
   * ProblemInProblemList updateManyAndReturn
   */
  export type ProblemInProblemListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInProblemLists.
     */
    data: XOR<ProblemInProblemListUpdateManyMutationInput, ProblemInProblemListUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInProblemLists to update
     */
    where?: ProblemInProblemListWhereInput
    /**
     * Limit how many ProblemInProblemLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInProblemList upsert
   */
  export type ProblemInProblemListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInProblemList to update in case it exists.
     */
    where: ProblemInProblemListWhereUniqueInput
    /**
     * In case the ProblemInProblemList found by the `where` argument doesn't exist, create a new ProblemInProblemList with this data.
     */
    create: XOR<ProblemInProblemListCreateInput, ProblemInProblemListUncheckedCreateInput>
    /**
     * In case the ProblemInProblemList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInProblemListUpdateInput, ProblemInProblemListUncheckedUpdateInput>
  }

  /**
   * ProblemInProblemList delete
   */
  export type ProblemInProblemListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
    /**
     * Filter which ProblemInProblemList to delete.
     */
    where: ProblemInProblemListWhereUniqueInput
  }

  /**
   * ProblemInProblemList deleteMany
   */
  export type ProblemInProblemListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInProblemLists to delete
     */
    where?: ProblemInProblemListWhereInput
    /**
     * Limit how many ProblemInProblemLists to delete.
     */
    limit?: number
  }

  /**
   * ProblemInProblemList without action
   */
  export type ProblemInProblemListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInProblemList
     */
    select?: ProblemInProblemListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInProblemList
     */
    omit?: ProblemInProblemListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInProblemListInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpiry: 'emailVerificationTokenExpiry',
    forgotPasswordToken: 'forgotPasswordToken',
    forgotPasswordTokenExpiry: 'forgotPasswordTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testCases: 'testCases',
    codeSnippets: 'codeSnippets',
    referenceSolution: 'referenceSolution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stdError: 'stdError',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


  export const TestCasesScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    stdin: 'stdin',
    stdout: 'stdout',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestCasesScalarFieldEnum = (typeof TestCasesScalarFieldEnum)[keyof typeof TestCasesScalarFieldEnum]


  export const ProblemsSolvedScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemsSolvedScalarFieldEnum = (typeof ProblemsSolvedScalarFieldEnum)[keyof typeof ProblemsSolvedScalarFieldEnum]


  export const ProblemListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemListScalarFieldEnum = (typeof ProblemListScalarFieldEnum)[keyof typeof ProblemListScalarFieldEnum]


  export const ProblemInProblemListScalarFieldEnum: {
    id: 'id',
    problemListId: 'problemListId',
    problemListName: 'problemListName',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInProblemListScalarFieldEnum = (typeof ProblemInProblemListScalarFieldEnum)[keyof typeof ProblemInProblemListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProblemDifficulty'
   */
  export type EnumProblemDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemDifficulty'>
    


  /**
   * Reference to a field of type 'ProblemDifficulty[]'
   */
  export type ListEnumProblemDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProblemDifficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    problems?: ProblemListRelationFilter
    submission?: SubmissionsListRelationFilter
    testCases?: TestCasesListRelationFilter
    problemSolved?: ProblemsSolvedListRelationFilter
    problemLists?: ProblemListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submission?: SubmissionsOrderByRelationAggregateInput
    testCases?: TestCasesOrderByRelationAggregateInput
    problemSolved?: ProblemsSolvedOrderByRelationAggregateInput
    problemLists?: ProblemListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    problems?: ProblemListRelationFilter
    submission?: SubmissionsListRelationFilter
    testCases?: TestCasesListRelationFilter
    problemSolved?: ProblemsSolvedListRelationFilter
    problemLists?: ProblemListListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumProblemDifficultyFilter<"Problem"> | $Enums.ProblemDifficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionsListRelationFilter
    hiddenTestCases?: TestCasesListRelationFilter
    problemSolved?: ProblemsSolvedListRelationFilter
    problemLists?: ProblemInProblemListListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submission?: SubmissionsOrderByRelationAggregateInput
    hiddenTestCases?: TestCasesOrderByRelationAggregateInput
    problemSolved?: ProblemsSolvedOrderByRelationAggregateInput
    problemLists?: ProblemInProblemListOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumProblemDifficultyFilter<"Problem"> | $Enums.ProblemDifficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submission?: SubmissionsListRelationFilter
    hiddenTestCases?: TestCasesListRelationFilter
    problemSolved?: ProblemsSolvedListRelationFilter
    problemLists?: ProblemInProblemListListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumProblemDifficultyWithAggregatesFilter<"Problem"> | $Enums.ProblemDifficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testCases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolution?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionsWhereInput = {
    AND?: SubmissionsWhereInput | SubmissionsWhereInput[]
    OR?: SubmissionsWhereInput[]
    NOT?: SubmissionsWhereInput | SubmissionsWhereInput[]
    id?: StringFilter<"Submissions"> | string
    userId?: StringFilter<"Submissions"> | string
    problemId?: StringFilter<"Submissions"> | string
    sourceCode?: JsonFilter<"Submissions">
    language?: StringFilter<"Submissions"> | string
    stdin?: StringNullableFilter<"Submissions"> | string | null
    stdout?: StringNullableFilter<"Submissions"> | string | null
    stdError?: StringNullableFilter<"Submissions"> | string | null
    compileOutput?: StringNullableFilter<"Submissions"> | string | null
    status?: StringFilter<"Submissions"> | string
    memory?: StringNullableFilter<"Submissions"> | string | null
    time?: StringNullableFilter<"Submissions"> | string | null
    createdAt?: DateTimeFilter<"Submissions"> | Date | string
    updatedAt?: DateTimeFilter<"Submissions"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubmissionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stdError?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SubmissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionsWhereInput | SubmissionsWhereInput[]
    OR?: SubmissionsWhereInput[]
    NOT?: SubmissionsWhereInput | SubmissionsWhereInput[]
    userId?: StringFilter<"Submissions"> | string
    problemId?: StringFilter<"Submissions"> | string
    sourceCode?: JsonFilter<"Submissions">
    language?: StringFilter<"Submissions"> | string
    stdin?: StringNullableFilter<"Submissions"> | string | null
    stdout?: StringNullableFilter<"Submissions"> | string | null
    stdError?: StringNullableFilter<"Submissions"> | string | null
    compileOutput?: StringNullableFilter<"Submissions"> | string | null
    status?: StringFilter<"Submissions"> | string
    memory?: StringNullableFilter<"Submissions"> | string | null
    time?: StringNullableFilter<"Submissions"> | string | null
    createdAt?: DateTimeFilter<"Submissions"> | Date | string
    updatedAt?: DateTimeFilter<"Submissions"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubmissionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stdError?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionsCountOrderByAggregateInput
    _max?: SubmissionsMaxOrderByAggregateInput
    _min?: SubmissionsMinOrderByAggregateInput
  }

  export type SubmissionsScalarWhereWithAggregatesInput = {
    AND?: SubmissionsScalarWhereWithAggregatesInput | SubmissionsScalarWhereWithAggregatesInput[]
    OR?: SubmissionsScalarWhereWithAggregatesInput[]
    NOT?: SubmissionsScalarWhereWithAggregatesInput | SubmissionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submissions"> | string
    userId?: StringWithAggregatesFilter<"Submissions"> | string
    problemId?: StringWithAggregatesFilter<"Submissions"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submissions">
    language?: StringWithAggregatesFilter<"Submissions"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    stdError?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    status?: StringWithAggregatesFilter<"Submissions"> | string
    memory?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submissions"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submissions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submissions"> | Date | string
  }

  export type TestCasesWhereInput = {
    AND?: TestCasesWhereInput | TestCasesWhereInput[]
    OR?: TestCasesWhereInput[]
    NOT?: TestCasesWhereInput | TestCasesWhereInput[]
    id?: StringFilter<"TestCases"> | string
    problemId?: StringFilter<"TestCases"> | string
    stdin?: StringFilter<"TestCases"> | string
    stdout?: StringFilter<"TestCases"> | string
    userId?: StringFilter<"TestCases"> | string
    createdAt?: DateTimeFilter<"TestCases"> | Date | string
    updatedAt?: DateTimeFilter<"TestCases"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestCasesOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: ProblemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TestCasesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCasesWhereInput | TestCasesWhereInput[]
    OR?: TestCasesWhereInput[]
    NOT?: TestCasesWhereInput | TestCasesWhereInput[]
    problemId?: StringFilter<"TestCases"> | string
    stdin?: StringFilter<"TestCases"> | string
    stdout?: StringFilter<"TestCases"> | string
    userId?: StringFilter<"TestCases"> | string
    createdAt?: DateTimeFilter<"TestCases"> | Date | string
    updatedAt?: DateTimeFilter<"TestCases"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestCasesOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCasesCountOrderByAggregateInput
    _max?: TestCasesMaxOrderByAggregateInput
    _min?: TestCasesMinOrderByAggregateInput
  }

  export type TestCasesScalarWhereWithAggregatesInput = {
    AND?: TestCasesScalarWhereWithAggregatesInput | TestCasesScalarWhereWithAggregatesInput[]
    OR?: TestCasesScalarWhereWithAggregatesInput[]
    NOT?: TestCasesScalarWhereWithAggregatesInput | TestCasesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCases"> | string
    problemId?: StringWithAggregatesFilter<"TestCases"> | string
    stdin?: StringWithAggregatesFilter<"TestCases"> | string
    stdout?: StringWithAggregatesFilter<"TestCases"> | string
    userId?: StringWithAggregatesFilter<"TestCases"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestCases"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCases"> | Date | string
  }

  export type ProblemsSolvedWhereInput = {
    AND?: ProblemsSolvedWhereInput | ProblemsSolvedWhereInput[]
    OR?: ProblemsSolvedWhereInput[]
    NOT?: ProblemsSolvedWhereInput | ProblemsSolvedWhereInput[]
    id?: StringFilter<"ProblemsSolved"> | string
    problemId?: StringFilter<"ProblemsSolved"> | string
    userId?: StringFilter<"ProblemsSolved"> | string
    createdAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemsSolvedOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemsSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: ProblemsSolvedUserIdProblemIdCompoundUniqueInput
    AND?: ProblemsSolvedWhereInput | ProblemsSolvedWhereInput[]
    OR?: ProblemsSolvedWhereInput[]
    NOT?: ProblemsSolvedWhereInput | ProblemsSolvedWhereInput[]
    problemId?: StringFilter<"ProblemsSolved"> | string
    userId?: StringFilter<"ProblemsSolved"> | string
    createdAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type ProblemsSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemsSolvedCountOrderByAggregateInput
    _max?: ProblemsSolvedMaxOrderByAggregateInput
    _min?: ProblemsSolvedMinOrderByAggregateInput
  }

  export type ProblemsSolvedScalarWhereWithAggregatesInput = {
    AND?: ProblemsSolvedScalarWhereWithAggregatesInput | ProblemsSolvedScalarWhereWithAggregatesInput[]
    OR?: ProblemsSolvedScalarWhereWithAggregatesInput[]
    NOT?: ProblemsSolvedScalarWhereWithAggregatesInput | ProblemsSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemsSolved"> | string
    problemId?: StringWithAggregatesFilter<"ProblemsSolved"> | string
    userId?: StringWithAggregatesFilter<"ProblemsSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemsSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemsSolved"> | Date | string
  }

  export type ProblemListWhereInput = {
    AND?: ProblemListWhereInput | ProblemListWhereInput[]
    OR?: ProblemListWhereInput[]
    NOT?: ProblemListWhereInput | ProblemListWhereInput[]
    id?: StringFilter<"ProblemList"> | string
    name?: StringFilter<"ProblemList"> | string
    description?: StringNullableFilter<"ProblemList"> | string | null
    userId?: StringFilter<"ProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemList"> | Date | string
    problems?: ProblemInProblemListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProblemListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInProblemListOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProblemListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemListWhereInput | ProblemListWhereInput[]
    OR?: ProblemListWhereInput[]
    NOT?: ProblemListWhereInput | ProblemListWhereInput[]
    name?: StringFilter<"ProblemList"> | string
    description?: StringNullableFilter<"ProblemList"> | string | null
    userId?: StringFilter<"ProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemList"> | Date | string
    problems?: ProblemInProblemListListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProblemListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemListCountOrderByAggregateInput
    _max?: ProblemListMaxOrderByAggregateInput
    _min?: ProblemListMinOrderByAggregateInput
  }

  export type ProblemListScalarWhereWithAggregatesInput = {
    AND?: ProblemListScalarWhereWithAggregatesInput | ProblemListScalarWhereWithAggregatesInput[]
    OR?: ProblemListScalarWhereWithAggregatesInput[]
    NOT?: ProblemListScalarWhereWithAggregatesInput | ProblemListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemList"> | string
    name?: StringWithAggregatesFilter<"ProblemList"> | string
    description?: StringNullableWithAggregatesFilter<"ProblemList"> | string | null
    userId?: StringWithAggregatesFilter<"ProblemList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemList"> | Date | string
  }

  export type ProblemInProblemListWhereInput = {
    AND?: ProblemInProblemListWhereInput | ProblemInProblemListWhereInput[]
    OR?: ProblemInProblemListWhereInput[]
    NOT?: ProblemInProblemListWhereInput | ProblemInProblemListWhereInput[]
    id?: StringFilter<"ProblemInProblemList"> | string
    problemListId?: StringFilter<"ProblemInProblemList"> | string
    problemListName?: StringFilter<"ProblemInProblemList"> | string
    problemId?: StringFilter<"ProblemInProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
    problemList?: XOR<ProblemListScalarRelationFilter, ProblemListWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInProblemListOrderByWithRelationInput = {
    id?: SortOrder
    problemListId?: SortOrder
    problemListName?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problemList?: ProblemListOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemInProblemListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    problemListId_problemId?: ProblemInProblemListProblemListIdProblemIdCompoundUniqueInput
    AND?: ProblemInProblemListWhereInput | ProblemInProblemListWhereInput[]
    OR?: ProblemInProblemListWhereInput[]
    NOT?: ProblemInProblemListWhereInput | ProblemInProblemListWhereInput[]
    problemListId?: StringFilter<"ProblemInProblemList"> | string
    problemListName?: StringFilter<"ProblemInProblemList"> | string
    problemId?: StringFilter<"ProblemInProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
    problemList?: XOR<ProblemListScalarRelationFilter, ProblemListWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "problemListId_problemId">

  export type ProblemInProblemListOrderByWithAggregationInput = {
    id?: SortOrder
    problemListId?: SortOrder
    problemListName?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemInProblemListCountOrderByAggregateInput
    _max?: ProblemInProblemListMaxOrderByAggregateInput
    _min?: ProblemInProblemListMinOrderByAggregateInput
  }

  export type ProblemInProblemListScalarWhereWithAggregatesInput = {
    AND?: ProblemInProblemListScalarWhereWithAggregatesInput | ProblemInProblemListScalarWhereWithAggregatesInput[]
    OR?: ProblemInProblemListScalarWhereWithAggregatesInput[]
    NOT?: ProblemInProblemListScalarWhereWithAggregatesInput | ProblemInProblemListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInProblemList"> | string
    problemListId?: StringWithAggregatesFilter<"ProblemInProblemList"> | string
    problemListName?: StringWithAggregatesFilter<"ProblemInProblemList"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInProblemList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemInProblemList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemInProblemList"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionsCreateNestedManyWithoutUserInput
    testCases?: TestCasesCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionsUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCasesUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionsCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsUncheckedCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionsUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUncheckedUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    user: UserCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionsUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesCreateInput = {
    id?: string
    stdin: string
    stdout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutHiddenTestCasesInput
    user: UserCreateNestedOneWithoutTestCasesInput
  }

  export type TestCasesUncheckedCreateInput = {
    id?: string
    problemId: string
    stdin: string
    stdout: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutHiddenTestCasesNestedInput
    user?: UserUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCasesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesCreateManyInput = {
    id?: string
    problemId: string
    stdin: string
    stdout: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
  }

  export type ProblemsSolvedUncheckedCreateInput = {
    id?: string
    problemId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type ProblemsSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedCreateManyInput = {
    id?: string
    problemId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemListCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInProblemListCreateNestedManyWithoutProblemListInput
    user: UserCreateNestedOneWithoutProblemListsInput
  }

  export type ProblemListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemListInput
  }

  export type ProblemListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInProblemListUpdateManyWithoutProblemListNestedInput
    user?: UserUpdateOneRequiredWithoutProblemListsNestedInput
  }

  export type ProblemListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInProblemListUncheckedUpdateManyWithoutProblemListNestedInput
  }

  export type ProblemListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListCreateInput = {
    id?: string
    problemListName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problemList: ProblemListCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemListsInput
  }

  export type ProblemInProblemListUncheckedCreateInput = {
    id?: string
    problemListId: string
    problemListName: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemList?: ProblemListUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemListsNestedInput
  }

  export type ProblemInProblemListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListId?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListCreateManyInput = {
    id?: string
    problemListId: string
    problemListName: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListId?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionsListRelationFilter = {
    every?: SubmissionsWhereInput
    some?: SubmissionsWhereInput
    none?: SubmissionsWhereInput
  }

  export type TestCasesListRelationFilter = {
    every?: TestCasesWhereInput
    some?: TestCasesWhereInput
    none?: TestCasesWhereInput
  }

  export type ProblemsSolvedListRelationFilter = {
    every?: ProblemsSolvedWhereInput
    some?: ProblemsSolvedWhereInput
    none?: ProblemsSolvedWhereInput
  }

  export type ProblemListListRelationFilter = {
    every?: ProblemListWhereInput
    some?: ProblemListWhereInput
    none?: ProblemListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemsSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProblemDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyFilter<$PrismaModel> | $Enums.ProblemDifficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemInProblemListListRelationFilter = {
    every?: ProblemInProblemListWhereInput
    some?: ProblemInProblemListWhereInput
    none?: ProblemInProblemListWhereInput
  }

  export type ProblemInProblemListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testCases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProblemDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ProblemDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemDifficultyFilter<$PrismaModel>
    _max?: NestedEnumProblemDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type SubmissionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stdError?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stdError?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stdError?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemsSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type ProblemsSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemsSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemsSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemListScalarRelationFilter = {
    is?: ProblemListWhereInput
    isNot?: ProblemListWhereInput
  }

  export type ProblemInProblemListProblemListIdProblemIdCompoundUniqueInput = {
    problemListId: string
    problemId: string
  }

  export type ProblemInProblemListCountOrderByAggregateInput = {
    id?: SortOrder
    problemListId?: SortOrder
    problemListName?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInProblemListMaxOrderByAggregateInput = {
    id?: SortOrder
    problemListId?: SortOrder
    problemListName?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInProblemListMinOrderByAggregateInput = {
    id?: SortOrder
    problemListId?: SortOrder
    problemListName?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput> | SubmissionsCreateWithoutUserInput[] | SubmissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutUserInput | SubmissionsCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionsCreateManyUserInputEnvelope
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
  }

  export type TestCasesCreateNestedManyWithoutUserInput = {
    create?: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput> | TestCasesCreateWithoutUserInput[] | TestCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutUserInput | TestCasesCreateOrConnectWithoutUserInput[]
    createMany?: TestCasesCreateManyUserInputEnvelope
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
  }

  export type ProblemsSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput> | ProblemsSolvedCreateWithoutUserInput[] | ProblemsSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutUserInput | ProblemsSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemsSolvedCreateManyUserInputEnvelope
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
  }

  export type ProblemListCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput> | ProblemListCreateWithoutUserInput[] | ProblemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemListCreateOrConnectWithoutUserInput | ProblemListCreateOrConnectWithoutUserInput[]
    createMany?: ProblemListCreateManyUserInputEnvelope
    connect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput> | SubmissionsCreateWithoutUserInput[] | SubmissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutUserInput | SubmissionsCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionsCreateManyUserInputEnvelope
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
  }

  export type TestCasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput> | TestCasesCreateWithoutUserInput[] | TestCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutUserInput | TestCasesCreateOrConnectWithoutUserInput[]
    createMany?: TestCasesCreateManyUserInputEnvelope
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
  }

  export type ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput> | ProblemsSolvedCreateWithoutUserInput[] | ProblemsSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutUserInput | ProblemsSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemsSolvedCreateManyUserInputEnvelope
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
  }

  export type ProblemListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput> | ProblemListCreateWithoutUserInput[] | ProblemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemListCreateOrConnectWithoutUserInput | ProblemListCreateOrConnectWithoutUserInput[]
    createMany?: ProblemListCreateManyUserInputEnvelope
    connect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput> | SubmissionsCreateWithoutUserInput[] | SubmissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutUserInput | SubmissionsCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionsUpsertWithWhereUniqueWithoutUserInput | SubmissionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionsCreateManyUserInputEnvelope
    set?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    disconnect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    delete?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    update?: SubmissionsUpdateWithWhereUniqueWithoutUserInput | SubmissionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionsUpdateManyWithWhereWithoutUserInput | SubmissionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
  }

  export type TestCasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput> | TestCasesCreateWithoutUserInput[] | TestCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutUserInput | TestCasesCreateOrConnectWithoutUserInput[]
    upsert?: TestCasesUpsertWithWhereUniqueWithoutUserInput | TestCasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestCasesCreateManyUserInputEnvelope
    set?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    disconnect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    delete?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    update?: TestCasesUpdateWithWhereUniqueWithoutUserInput | TestCasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestCasesUpdateManyWithWhereWithoutUserInput | TestCasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
  }

  export type ProblemsSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput> | ProblemsSolvedCreateWithoutUserInput[] | ProblemsSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutUserInput | ProblemsSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemsSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemsSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemsSolvedCreateManyUserInputEnvelope
    set?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    disconnect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    delete?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    update?: ProblemsSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemsSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemsSolvedUpdateManyWithWhereWithoutUserInput | ProblemsSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
  }

  export type ProblemListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput> | ProblemListCreateWithoutUserInput[] | ProblemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemListCreateOrConnectWithoutUserInput | ProblemListCreateOrConnectWithoutUserInput[]
    upsert?: ProblemListUpsertWithWhereUniqueWithoutUserInput | ProblemListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemListCreateManyUserInputEnvelope
    set?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    disconnect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    delete?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    connect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    update?: ProblemListUpdateWithWhereUniqueWithoutUserInput | ProblemListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemListUpdateManyWithWhereWithoutUserInput | ProblemListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemListScalarWhereInput | ProblemListScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput> | SubmissionsCreateWithoutUserInput[] | SubmissionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutUserInput | SubmissionsCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionsUpsertWithWhereUniqueWithoutUserInput | SubmissionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionsCreateManyUserInputEnvelope
    set?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    disconnect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    delete?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    update?: SubmissionsUpdateWithWhereUniqueWithoutUserInput | SubmissionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionsUpdateManyWithWhereWithoutUserInput | SubmissionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
  }

  export type TestCasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput> | TestCasesCreateWithoutUserInput[] | TestCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutUserInput | TestCasesCreateOrConnectWithoutUserInput[]
    upsert?: TestCasesUpsertWithWhereUniqueWithoutUserInput | TestCasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestCasesCreateManyUserInputEnvelope
    set?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    disconnect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    delete?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    update?: TestCasesUpdateWithWhereUniqueWithoutUserInput | TestCasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestCasesUpdateManyWithWhereWithoutUserInput | TestCasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
  }

  export type ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput> | ProblemsSolvedCreateWithoutUserInput[] | ProblemsSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutUserInput | ProblemsSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemsSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemsSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemsSolvedCreateManyUserInputEnvelope
    set?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    disconnect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    delete?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    update?: ProblemsSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemsSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemsSolvedUpdateManyWithWhereWithoutUserInput | ProblemsSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
  }

  export type ProblemListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput> | ProblemListCreateWithoutUserInput[] | ProblemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemListCreateOrConnectWithoutUserInput | ProblemListCreateOrConnectWithoutUserInput[]
    upsert?: ProblemListUpsertWithWhereUniqueWithoutUserInput | ProblemListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemListCreateManyUserInputEnvelope
    set?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    disconnect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    delete?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    connect?: ProblemListWhereUniqueInput | ProblemListWhereUniqueInput[]
    update?: ProblemListUpdateWithWhereUniqueWithoutUserInput | ProblemListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemListUpdateManyWithWhereWithoutUserInput | ProblemListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemListScalarWhereInput | ProblemListScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionsCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput> | SubmissionsCreateWithoutProblemInput[] | SubmissionsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutProblemInput | SubmissionsCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionsCreateManyProblemInputEnvelope
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
  }

  export type TestCasesCreateNestedManyWithoutProblemInput = {
    create?: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput> | TestCasesCreateWithoutProblemInput[] | TestCasesUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutProblemInput | TestCasesCreateOrConnectWithoutProblemInput[]
    createMany?: TestCasesCreateManyProblemInputEnvelope
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
  }

  export type ProblemsSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput> | ProblemsSolvedCreateWithoutProblemInput[] | ProblemsSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutProblemInput | ProblemsSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemsSolvedCreateManyProblemInputEnvelope
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
  }

  export type ProblemInProblemListCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput> | ProblemInProblemListCreateWithoutProblemInput[] | ProblemInProblemListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemInput | ProblemInProblemListCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInProblemListCreateManyProblemInputEnvelope
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
  }

  export type SubmissionsUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput> | SubmissionsCreateWithoutProblemInput[] | SubmissionsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutProblemInput | SubmissionsCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionsCreateManyProblemInputEnvelope
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
  }

  export type TestCasesUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput> | TestCasesCreateWithoutProblemInput[] | TestCasesUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutProblemInput | TestCasesCreateOrConnectWithoutProblemInput[]
    createMany?: TestCasesCreateManyProblemInputEnvelope
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
  }

  export type ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput> | ProblemsSolvedCreateWithoutProblemInput[] | ProblemsSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutProblemInput | ProblemsSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemsSolvedCreateManyProblemInputEnvelope
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
  }

  export type ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput> | ProblemInProblemListCreateWithoutProblemInput[] | ProblemInProblemListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemInput | ProblemInProblemListCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInProblemListCreateManyProblemInputEnvelope
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
  }

  export type EnumProblemDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.ProblemDifficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionsUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput> | SubmissionsCreateWithoutProblemInput[] | SubmissionsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutProblemInput | SubmissionsCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionsUpsertWithWhereUniqueWithoutProblemInput | SubmissionsUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionsCreateManyProblemInputEnvelope
    set?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    disconnect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    delete?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    update?: SubmissionsUpdateWithWhereUniqueWithoutProblemInput | SubmissionsUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionsUpdateManyWithWhereWithoutProblemInput | SubmissionsUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
  }

  export type TestCasesUpdateManyWithoutProblemNestedInput = {
    create?: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput> | TestCasesCreateWithoutProblemInput[] | TestCasesUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutProblemInput | TestCasesCreateOrConnectWithoutProblemInput[]
    upsert?: TestCasesUpsertWithWhereUniqueWithoutProblemInput | TestCasesUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: TestCasesCreateManyProblemInputEnvelope
    set?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    disconnect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    delete?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    update?: TestCasesUpdateWithWhereUniqueWithoutProblemInput | TestCasesUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: TestCasesUpdateManyWithWhereWithoutProblemInput | TestCasesUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
  }

  export type ProblemsSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput> | ProblemsSolvedCreateWithoutProblemInput[] | ProblemsSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutProblemInput | ProblemsSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemsSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemsSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemsSolvedCreateManyProblemInputEnvelope
    set?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    disconnect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    delete?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    update?: ProblemsSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemsSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemsSolvedUpdateManyWithWhereWithoutProblemInput | ProblemsSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
  }

  export type ProblemInProblemListUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput> | ProblemInProblemListCreateWithoutProblemInput[] | ProblemInProblemListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemInput | ProblemInProblemListCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInProblemListUpsertWithWhereUniqueWithoutProblemInput | ProblemInProblemListUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInProblemListCreateManyProblemInputEnvelope
    set?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    disconnect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    delete?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    update?: ProblemInProblemListUpdateWithWhereUniqueWithoutProblemInput | ProblemInProblemListUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInProblemListUpdateManyWithWhereWithoutProblemInput | ProblemInProblemListUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
  }

  export type SubmissionsUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput> | SubmissionsCreateWithoutProblemInput[] | SubmissionsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionsCreateOrConnectWithoutProblemInput | SubmissionsCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionsUpsertWithWhereUniqueWithoutProblemInput | SubmissionsUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionsCreateManyProblemInputEnvelope
    set?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    disconnect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    delete?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    connect?: SubmissionsWhereUniqueInput | SubmissionsWhereUniqueInput[]
    update?: SubmissionsUpdateWithWhereUniqueWithoutProblemInput | SubmissionsUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionsUpdateManyWithWhereWithoutProblemInput | SubmissionsUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
  }

  export type TestCasesUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput> | TestCasesCreateWithoutProblemInput[] | TestCasesUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: TestCasesCreateOrConnectWithoutProblemInput | TestCasesCreateOrConnectWithoutProblemInput[]
    upsert?: TestCasesUpsertWithWhereUniqueWithoutProblemInput | TestCasesUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: TestCasesCreateManyProblemInputEnvelope
    set?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    disconnect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    delete?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    connect?: TestCasesWhereUniqueInput | TestCasesWhereUniqueInput[]
    update?: TestCasesUpdateWithWhereUniqueWithoutProblemInput | TestCasesUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: TestCasesUpdateManyWithWhereWithoutProblemInput | TestCasesUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
  }

  export type ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput> | ProblemsSolvedCreateWithoutProblemInput[] | ProblemsSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemsSolvedCreateOrConnectWithoutProblemInput | ProblemsSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemsSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemsSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemsSolvedCreateManyProblemInputEnvelope
    set?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    disconnect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    delete?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    connect?: ProblemsSolvedWhereUniqueInput | ProblemsSolvedWhereUniqueInput[]
    update?: ProblemsSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemsSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemsSolvedUpdateManyWithWhereWithoutProblemInput | ProblemsSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
  }

  export type ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput> | ProblemInProblemListCreateWithoutProblemInput[] | ProblemInProblemListUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemInput | ProblemInProblemListCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInProblemListUpsertWithWhereUniqueWithoutProblemInput | ProblemInProblemListUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInProblemListCreateManyProblemInputEnvelope
    set?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    disconnect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    delete?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    update?: ProblemInProblemListUpdateWithWhereUniqueWithoutProblemInput | ProblemInProblemListUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInProblemListUpdateManyWithWhereWithoutProblemInput | ProblemInProblemListUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
  }

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    upsert?: ProblemUpsertWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionInput, ProblemUpdateWithoutSubmissionInput>, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemCreateNestedOneWithoutHiddenTestCasesInput = {
    create?: XOR<ProblemCreateWithoutHiddenTestCasesInput, ProblemUncheckedCreateWithoutHiddenTestCasesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutHiddenTestCasesInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestCasesInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemUpdateOneRequiredWithoutHiddenTestCasesNestedInput = {
    create?: XOR<ProblemCreateWithoutHiddenTestCasesInput, ProblemUncheckedCreateWithoutHiddenTestCasesInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutHiddenTestCasesInput
    upsert?: ProblemUpsertWithoutHiddenTestCasesInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutHiddenTestCasesInput, ProblemUpdateWithoutHiddenTestCasesInput>, ProblemUncheckedUpdateWithoutHiddenTestCasesInput>
  }

  export type UserUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestCasesInput
    upsert?: UserUpsertWithoutTestCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestCasesInput, UserUpdateWithoutTestCasesInput>, UserUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    upsert?: UserUpsertWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemSolvedInput, UserUpdateWithoutProblemSolvedInput>, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    upsert?: ProblemUpsertWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemSolvedInput, ProblemUpdateWithoutProblemSolvedInput>, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemInProblemListCreateNestedManyWithoutProblemListInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput> | ProblemInProblemListCreateWithoutProblemListInput[] | ProblemInProblemListUncheckedCreateWithoutProblemListInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemListInput | ProblemInProblemListCreateOrConnectWithoutProblemListInput[]
    createMany?: ProblemInProblemListCreateManyProblemListInputEnvelope
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProblemListsInput = {
    create?: XOR<UserCreateWithoutProblemListsInput, UserUncheckedCreateWithoutProblemListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemListsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemInProblemListUncheckedCreateNestedManyWithoutProblemListInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput> | ProblemInProblemListCreateWithoutProblemListInput[] | ProblemInProblemListUncheckedCreateWithoutProblemListInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemListInput | ProblemInProblemListCreateOrConnectWithoutProblemListInput[]
    createMany?: ProblemInProblemListCreateManyProblemListInputEnvelope
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
  }

  export type ProblemInProblemListUpdateManyWithoutProblemListNestedInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput> | ProblemInProblemListCreateWithoutProblemListInput[] | ProblemInProblemListUncheckedCreateWithoutProblemListInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemListInput | ProblemInProblemListCreateOrConnectWithoutProblemListInput[]
    upsert?: ProblemInProblemListUpsertWithWhereUniqueWithoutProblemListInput | ProblemInProblemListUpsertWithWhereUniqueWithoutProblemListInput[]
    createMany?: ProblemInProblemListCreateManyProblemListInputEnvelope
    set?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    disconnect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    delete?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    update?: ProblemInProblemListUpdateWithWhereUniqueWithoutProblemListInput | ProblemInProblemListUpdateWithWhereUniqueWithoutProblemListInput[]
    updateMany?: ProblemInProblemListUpdateManyWithWhereWithoutProblemListInput | ProblemInProblemListUpdateManyWithWhereWithoutProblemListInput[]
    deleteMany?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProblemListsNestedInput = {
    create?: XOR<UserCreateWithoutProblemListsInput, UserUncheckedCreateWithoutProblemListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemListsInput
    upsert?: UserUpsertWithoutProblemListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemListsInput, UserUpdateWithoutProblemListsInput>, UserUncheckedUpdateWithoutProblemListsInput>
  }

  export type ProblemInProblemListUncheckedUpdateManyWithoutProblemListNestedInput = {
    create?: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput> | ProblemInProblemListCreateWithoutProblemListInput[] | ProblemInProblemListUncheckedCreateWithoutProblemListInput[]
    connectOrCreate?: ProblemInProblemListCreateOrConnectWithoutProblemListInput | ProblemInProblemListCreateOrConnectWithoutProblemListInput[]
    upsert?: ProblemInProblemListUpsertWithWhereUniqueWithoutProblemListInput | ProblemInProblemListUpsertWithWhereUniqueWithoutProblemListInput[]
    createMany?: ProblemInProblemListCreateManyProblemListInputEnvelope
    set?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    disconnect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    delete?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    connect?: ProblemInProblemListWhereUniqueInput | ProblemInProblemListWhereUniqueInput[]
    update?: ProblemInProblemListUpdateWithWhereUniqueWithoutProblemListInput | ProblemInProblemListUpdateWithWhereUniqueWithoutProblemListInput[]
    updateMany?: ProblemInProblemListUpdateManyWithWhereWithoutProblemListInput | ProblemInProblemListUpdateManyWithWhereWithoutProblemListInput[]
    deleteMany?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
  }

  export type ProblemListCreateNestedOneWithoutProblemsInput = {
    create?: XOR<ProblemListCreateWithoutProblemsInput, ProblemListUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ProblemListCreateOrConnectWithoutProblemsInput
    connect?: ProblemListWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemListsInput = {
    create?: XOR<ProblemCreateWithoutProblemListsInput, ProblemUncheckedCreateWithoutProblemListsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemListsInput
    connect?: ProblemWhereUniqueInput
  }

  export type ProblemListUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<ProblemListCreateWithoutProblemsInput, ProblemListUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ProblemListCreateOrConnectWithoutProblemsInput
    upsert?: ProblemListUpsertWithoutProblemsInput
    connect?: ProblemListWhereUniqueInput
    update?: XOR<XOR<ProblemListUpdateToOneWithWhereWithoutProblemsInput, ProblemListUpdateWithoutProblemsInput>, ProblemListUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemListsNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemListsInput, ProblemUncheckedCreateWithoutProblemListsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemListsInput
    upsert?: ProblemUpsertWithoutProblemListsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemListsInput, ProblemUpdateWithoutProblemListsInput>, ProblemUncheckedUpdateWithoutProblemListsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProblemDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyFilter<$PrismaModel> | $Enums.ProblemDifficulty
  }

  export type NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProblemDifficulty | EnumProblemDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProblemDifficulty[] | ListEnumProblemDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumProblemDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.ProblemDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProblemDifficultyFilter<$PrismaModel>
    _max?: NestedEnumProblemDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsUncheckedCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionsCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionsUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsCreateOrConnectWithoutUserInput = {
    where: SubmissionsWhereUniqueInput
    create: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput>
  }

  export type SubmissionsCreateManyUserInputEnvelope = {
    data: SubmissionsCreateManyUserInput | SubmissionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestCasesCreateWithoutUserInput = {
    id?: string
    stdin: string
    stdout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutHiddenTestCasesInput
  }

  export type TestCasesUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    stdin: string
    stdout: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesCreateOrConnectWithoutUserInput = {
    where: TestCasesWhereUniqueInput
    create: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput>
  }

  export type TestCasesCreateManyUserInputEnvelope = {
    data: TestCasesCreateManyUserInput | TestCasesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemsSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
  }

  export type ProblemsSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedCreateOrConnectWithoutUserInput = {
    where: ProblemsSolvedWhereUniqueInput
    create: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemsSolvedCreateManyUserInputEnvelope = {
    data: ProblemsSolvedCreateManyUserInput | ProblemsSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemListCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInProblemListCreateNestedManyWithoutProblemListInput
  }

  export type ProblemListUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemListInput
  }

  export type ProblemListCreateOrConnectWithoutUserInput = {
    where: ProblemListWhereUniqueInput
    create: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput>
  }

  export type ProblemListCreateManyUserInputEnvelope = {
    data: ProblemListCreateManyUserInput | ProblemListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumProblemDifficultyFilter<"Problem"> | $Enums.ProblemDifficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testCases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolution?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionsWhereUniqueInput
    update: XOR<SubmissionsUpdateWithoutUserInput, SubmissionsUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionsCreateWithoutUserInput, SubmissionsUncheckedCreateWithoutUserInput>
  }

  export type SubmissionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionsWhereUniqueInput
    data: XOR<SubmissionsUpdateWithoutUserInput, SubmissionsUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionsUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionsScalarWhereInput
    data: XOR<SubmissionsUpdateManyMutationInput, SubmissionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionsScalarWhereInput = {
    AND?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
    OR?: SubmissionsScalarWhereInput[]
    NOT?: SubmissionsScalarWhereInput | SubmissionsScalarWhereInput[]
    id?: StringFilter<"Submissions"> | string
    userId?: StringFilter<"Submissions"> | string
    problemId?: StringFilter<"Submissions"> | string
    sourceCode?: JsonFilter<"Submissions">
    language?: StringFilter<"Submissions"> | string
    stdin?: StringNullableFilter<"Submissions"> | string | null
    stdout?: StringNullableFilter<"Submissions"> | string | null
    stdError?: StringNullableFilter<"Submissions"> | string | null
    compileOutput?: StringNullableFilter<"Submissions"> | string | null
    status?: StringFilter<"Submissions"> | string
    memory?: StringNullableFilter<"Submissions"> | string | null
    time?: StringNullableFilter<"Submissions"> | string | null
    createdAt?: DateTimeFilter<"Submissions"> | Date | string
    updatedAt?: DateTimeFilter<"Submissions"> | Date | string
  }

  export type TestCasesUpsertWithWhereUniqueWithoutUserInput = {
    where: TestCasesWhereUniqueInput
    update: XOR<TestCasesUpdateWithoutUserInput, TestCasesUncheckedUpdateWithoutUserInput>
    create: XOR<TestCasesCreateWithoutUserInput, TestCasesUncheckedCreateWithoutUserInput>
  }

  export type TestCasesUpdateWithWhereUniqueWithoutUserInput = {
    where: TestCasesWhereUniqueInput
    data: XOR<TestCasesUpdateWithoutUserInput, TestCasesUncheckedUpdateWithoutUserInput>
  }

  export type TestCasesUpdateManyWithWhereWithoutUserInput = {
    where: TestCasesScalarWhereInput
    data: XOR<TestCasesUpdateManyMutationInput, TestCasesUncheckedUpdateManyWithoutUserInput>
  }

  export type TestCasesScalarWhereInput = {
    AND?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
    OR?: TestCasesScalarWhereInput[]
    NOT?: TestCasesScalarWhereInput | TestCasesScalarWhereInput[]
    id?: StringFilter<"TestCases"> | string
    problemId?: StringFilter<"TestCases"> | string
    stdin?: StringFilter<"TestCases"> | string
    stdout?: StringFilter<"TestCases"> | string
    userId?: StringFilter<"TestCases"> | string
    createdAt?: DateTimeFilter<"TestCases"> | Date | string
    updatedAt?: DateTimeFilter<"TestCases"> | Date | string
  }

  export type ProblemsSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemsSolvedWhereUniqueInput
    update: XOR<ProblemsSolvedUpdateWithoutUserInput, ProblemsSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemsSolvedCreateWithoutUserInput, ProblemsSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemsSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemsSolvedWhereUniqueInput
    data: XOR<ProblemsSolvedUpdateWithoutUserInput, ProblemsSolvedUncheckedUpdateWithoutUserInput>
  }

  export type ProblemsSolvedUpdateManyWithWhereWithoutUserInput = {
    where: ProblemsSolvedScalarWhereInput
    data: XOR<ProblemsSolvedUpdateManyMutationInput, ProblemsSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemsSolvedScalarWhereInput = {
    AND?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
    OR?: ProblemsSolvedScalarWhereInput[]
    NOT?: ProblemsSolvedScalarWhereInput | ProblemsSolvedScalarWhereInput[]
    id?: StringFilter<"ProblemsSolved"> | string
    problemId?: StringFilter<"ProblemsSolved"> | string
    userId?: StringFilter<"ProblemsSolved"> | string
    createdAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemsSolved"> | Date | string
  }

  export type ProblemListUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemListWhereUniqueInput
    update: XOR<ProblemListUpdateWithoutUserInput, ProblemListUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemListCreateWithoutUserInput, ProblemListUncheckedCreateWithoutUserInput>
  }

  export type ProblemListUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemListWhereUniqueInput
    data: XOR<ProblemListUpdateWithoutUserInput, ProblemListUncheckedUpdateWithoutUserInput>
  }

  export type ProblemListUpdateManyWithWhereWithoutUserInput = {
    where: ProblemListScalarWhereInput
    data: XOR<ProblemListUpdateManyMutationInput, ProblemListUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemListScalarWhereInput = {
    AND?: ProblemListScalarWhereInput | ProblemListScalarWhereInput[]
    OR?: ProblemListScalarWhereInput[]
    NOT?: ProblemListScalarWhereInput | ProblemListScalarWhereInput[]
    id?: StringFilter<"ProblemList"> | string
    name?: StringFilter<"ProblemList"> | string
    description?: StringNullableFilter<"ProblemList"> | string | null
    userId?: StringFilter<"ProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemList"> | Date | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    submission?: SubmissionsCreateNestedManyWithoutUserInput
    testCases?: TestCasesCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    submission?: SubmissionsUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCasesUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionsCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionsUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsCreateOrConnectWithoutProblemInput = {
    where: SubmissionsWhereUniqueInput
    create: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionsCreateManyProblemInputEnvelope = {
    data: SubmissionsCreateManyProblemInput | SubmissionsCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type TestCasesCreateWithoutProblemInput = {
    id?: string
    stdin: string
    stdout: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestCasesInput
  }

  export type TestCasesUncheckedCreateWithoutProblemInput = {
    id?: string
    stdin: string
    stdout: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesCreateOrConnectWithoutProblemInput = {
    where: TestCasesWhereUniqueInput
    create: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput>
  }

  export type TestCasesCreateManyProblemInputEnvelope = {
    data: TestCasesCreateManyProblemInput | TestCasesCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemsSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type ProblemsSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedCreateOrConnectWithoutProblemInput = {
    where: ProblemsSolvedWhereUniqueInput
    create: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemsSolvedCreateManyProblemInputEnvelope = {
    data: ProblemsSolvedCreateManyProblemInput | ProblemsSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInProblemListCreateWithoutProblemInput = {
    id?: string
    problemListName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problemList: ProblemListCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInProblemListUncheckedCreateWithoutProblemInput = {
    id?: string
    problemListId: string
    problemListName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListCreateOrConnectWithoutProblemInput = {
    where: ProblemInProblemListWhereUniqueInput
    create: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInProblemListCreateManyProblemInputEnvelope = {
    data: ProblemInProblemListCreateManyProblemInput | ProblemInProblemListCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionsUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionsUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionsUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionsWhereUniqueInput
    update: XOR<SubmissionsUpdateWithoutProblemInput, SubmissionsUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionsCreateWithoutProblemInput, SubmissionsUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionsUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionsWhereUniqueInput
    data: XOR<SubmissionsUpdateWithoutProblemInput, SubmissionsUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionsUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionsScalarWhereInput
    data: XOR<SubmissionsUpdateManyMutationInput, SubmissionsUncheckedUpdateManyWithoutProblemInput>
  }

  export type TestCasesUpsertWithWhereUniqueWithoutProblemInput = {
    where: TestCasesWhereUniqueInput
    update: XOR<TestCasesUpdateWithoutProblemInput, TestCasesUncheckedUpdateWithoutProblemInput>
    create: XOR<TestCasesCreateWithoutProblemInput, TestCasesUncheckedCreateWithoutProblemInput>
  }

  export type TestCasesUpdateWithWhereUniqueWithoutProblemInput = {
    where: TestCasesWhereUniqueInput
    data: XOR<TestCasesUpdateWithoutProblemInput, TestCasesUncheckedUpdateWithoutProblemInput>
  }

  export type TestCasesUpdateManyWithWhereWithoutProblemInput = {
    where: TestCasesScalarWhereInput
    data: XOR<TestCasesUpdateManyMutationInput, TestCasesUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemsSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemsSolvedWhereUniqueInput
    update: XOR<ProblemsSolvedUpdateWithoutProblemInput, ProblemsSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemsSolvedCreateWithoutProblemInput, ProblemsSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemsSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemsSolvedWhereUniqueInput
    data: XOR<ProblemsSolvedUpdateWithoutProblemInput, ProblemsSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemsSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemsSolvedScalarWhereInput
    data: XOR<ProblemsSolvedUpdateManyMutationInput, ProblemsSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInProblemListUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInProblemListWhereUniqueInput
    update: XOR<ProblemInProblemListUpdateWithoutProblemInput, ProblemInProblemListUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInProblemListCreateWithoutProblemInput, ProblemInProblemListUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInProblemListUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInProblemListWhereUniqueInput
    data: XOR<ProblemInProblemListUpdateWithoutProblemInput, ProblemInProblemListUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInProblemListUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInProblemListScalarWhereInput
    data: XOR<ProblemInProblemListUpdateManyMutationInput, ProblemInProblemListUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInProblemListScalarWhereInput = {
    AND?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
    OR?: ProblemInProblemListScalarWhereInput[]
    NOT?: ProblemInProblemListScalarWhereInput | ProblemInProblemListScalarWhereInput[]
    id?: StringFilter<"ProblemInProblemList"> | string
    problemListId?: StringFilter<"ProblemInProblemList"> | string
    problemListName?: StringFilter<"ProblemInProblemList"> | string
    problemId?: StringFilter<"ProblemInProblemList"> | string
    createdAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInProblemList"> | Date | string
  }

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    hiddenTestCases?: TestCasesCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    hiddenTestCases?: TestCasesUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
  }

  export type UserCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemCreateNestedManyWithoutUserInput
    testCases?: TestCasesCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCasesUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    hiddenTestCases?: TestCasesUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hiddenTestCases?: TestCasesUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemCreateWithoutHiddenTestCasesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionsCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutHiddenTestCasesInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutHiddenTestCasesInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutHiddenTestCasesInput, ProblemUncheckedCreateWithoutHiddenTestCasesInput>
  }

  export type UserCreateWithoutTestCasesInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionsCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestCasesInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionsUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
  }

  export type ProblemUpsertWithoutHiddenTestCasesInput = {
    update: XOR<ProblemUpdateWithoutHiddenTestCasesInput, ProblemUncheckedUpdateWithoutHiddenTestCasesInput>
    create: XOR<ProblemCreateWithoutHiddenTestCasesInput, ProblemUncheckedCreateWithoutHiddenTestCasesInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutHiddenTestCasesInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutHiddenTestCasesInput, ProblemUncheckedUpdateWithoutHiddenTestCasesInput>
  }

  export type ProblemUpdateWithoutHiddenTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionsUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutHiddenTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserUpsertWithoutTestCasesInput = {
    update: XOR<UserUpdateWithoutTestCasesInput, UserUncheckedUpdateWithoutTestCasesInput>
    create: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestCasesInput, UserUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionsCreateNestedManyWithoutUserInput
    testCases?: TestCasesCreateNestedManyWithoutUserInput
    problemLists?: ProblemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionsUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCasesUncheckedCreateNestedManyWithoutUserInput
    problemLists?: ProblemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
  }

  export type ProblemCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionsCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsUncheckedCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesUncheckedCreateNestedManyWithoutProblemInput
    problemLists?: ProblemInProblemListUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemSolvedInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
  }

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUncheckedUpdateManyWithoutUserNestedInput
    problemLists?: ProblemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutProblemSolvedInput = {
    update: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionsUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUncheckedUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUncheckedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemInProblemListCreateWithoutProblemListInput = {
    id?: string
    problemListName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemListsInput
  }

  export type ProblemInProblemListUncheckedCreateWithoutProblemListInput = {
    id?: string
    problemListName: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListCreateOrConnectWithoutProblemListInput = {
    where: ProblemInProblemListWhereUniqueInput
    create: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput>
  }

  export type ProblemInProblemListCreateManyProblemListInputEnvelope = {
    data: ProblemInProblemListCreateManyProblemListInput | ProblemInProblemListCreateManyProblemListInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProblemListsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemCreateNestedManyWithoutUserInput
    submission?: SubmissionsCreateNestedManyWithoutUserInput
    testCases?: TestCasesCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemListsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submission?: SubmissionsUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCasesUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemListsInput, UserUncheckedCreateWithoutProblemListsInput>
  }

  export type ProblemInProblemListUpsertWithWhereUniqueWithoutProblemListInput = {
    where: ProblemInProblemListWhereUniqueInput
    update: XOR<ProblemInProblemListUpdateWithoutProblemListInput, ProblemInProblemListUncheckedUpdateWithoutProblemListInput>
    create: XOR<ProblemInProblemListCreateWithoutProblemListInput, ProblemInProblemListUncheckedCreateWithoutProblemListInput>
  }

  export type ProblemInProblemListUpdateWithWhereUniqueWithoutProblemListInput = {
    where: ProblemInProblemListWhereUniqueInput
    data: XOR<ProblemInProblemListUpdateWithoutProblemListInput, ProblemInProblemListUncheckedUpdateWithoutProblemListInput>
  }

  export type ProblemInProblemListUpdateManyWithWhereWithoutProblemListInput = {
    where: ProblemInProblemListScalarWhereInput
    data: XOR<ProblemInProblemListUpdateManyMutationInput, ProblemInProblemListUncheckedUpdateManyWithoutProblemListInput>
  }

  export type UserUpsertWithoutProblemListsInput = {
    update: XOR<UserUpdateWithoutProblemListsInput, UserUncheckedUpdateWithoutProblemListsInput>
    create: XOR<UserCreateWithoutProblemListsInput, UserUncheckedCreateWithoutProblemListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemListsInput, UserUncheckedUpdateWithoutProblemListsInput>
  }

  export type UserUpdateWithoutProblemListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submission?: SubmissionsUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCasesUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemListCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemListsInput
  }

  export type ProblemListUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemListCreateOrConnectWithoutProblemsInput = {
    where: ProblemListWhereUniqueInput
    create: XOR<ProblemListCreateWithoutProblemsInput, ProblemListUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemListsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submission?: SubmissionsCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemListsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionsUncheckedCreateNestedManyWithoutProblemInput
    hiddenTestCases?: TestCasesUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: ProblemsSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemListsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemListsInput, ProblemUncheckedCreateWithoutProblemListsInput>
  }

  export type ProblemListUpsertWithoutProblemsInput = {
    update: XOR<ProblemListUpdateWithoutProblemsInput, ProblemListUncheckedUpdateWithoutProblemsInput>
    create: XOR<ProblemListCreateWithoutProblemsInput, ProblemListUncheckedCreateWithoutProblemsInput>
    where?: ProblemListWhereInput
  }

  export type ProblemListUpdateToOneWithWhereWithoutProblemsInput = {
    where?: ProblemListWhereInput
    data: XOR<ProblemListUpdateWithoutProblemsInput, ProblemListUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemListUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemListsNestedInput
  }

  export type ProblemListUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutProblemListsInput = {
    update: XOR<ProblemUpdateWithoutProblemListsInput, ProblemUncheckedUpdateWithoutProblemListsInput>
    create: XOR<ProblemCreateWithoutProblemListsInput, ProblemUncheckedCreateWithoutProblemListsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemListsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemListsInput, ProblemUncheckedUpdateWithoutProblemListsInput>
  }

  export type ProblemUpdateWithoutProblemListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submission?: SubmissionsUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUncheckedUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.ProblemDifficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolution: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesCreateManyUserInput = {
    id?: string
    problemId: string
    stdin: string
    stdout: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemListCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionsUncheckedUpdateManyWithoutProblemNestedInput
    hiddenTestCases?: TestCasesUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: ProblemsSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemLists?: ProblemInProblemListUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumProblemDifficultyFieldUpdateOperationsInput | $Enums.ProblemDifficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutHiddenTestCasesNestedInput
  }

  export type TestCasesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type ProblemsSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInProblemListUpdateManyWithoutProblemListNestedInput
  }

  export type ProblemListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInProblemListUncheckedUpdateManyWithoutProblemListNestedInput
  }

  export type ProblemListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stdError?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesCreateManyProblemInput = {
    id?: string
    stdin: string
    stdout: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemsSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListCreateManyProblemInput = {
    id?: string
    problemListId: string
    problemListName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionsUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionsUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionsUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stdError?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCasesUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    stdin?: StringFieldUpdateOperationsInput | string
    stdout?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type ProblemsSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemsSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemList?: ProblemListUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInProblemListUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListId?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListId?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListCreateManyProblemListInput = {
    id?: string
    problemListName: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInProblemListUpdateWithoutProblemListInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemListsNestedInput
  }

  export type ProblemInProblemListUncheckedUpdateWithoutProblemListInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInProblemListUncheckedUpdateManyWithoutProblemListInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemListName?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
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