
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
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model BudgetRule
 * 
 */
export type BudgetRule = $Result.DefaultSelection<Prisma.$BudgetRulePayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model InsightCache
 * 
 */
export type InsightCache = $Result.DefaultSelection<Prisma.$InsightCachePayload>
/**
 * Model PlaidAccount
 * 
 */
export type PlaidAccount = $Result.DefaultSelection<Prisma.$PlaidAccountPayload>
/**
 * Model AIInsight
 * 
 */
export type AIInsight = $Result.DefaultSelection<Prisma.$AIInsightPayload>
/**
 * Model AutomationRule
 * 
 */
export type AutomationRule = $Result.DefaultSelection<Prisma.$AutomationRulePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionPlan: {
  FREE: 'FREE',
  MONEYPAL_PRO: 'MONEYPAL_PRO',
  ALL_ACCESS: 'ALL_ACCESS'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  PAST_DUE: 'PAST_DUE',
  UNPAID: 'UNPAID'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const ConnectionType: {
  PLAID: 'PLAID',
  MANUAL: 'MANUAL'
};

export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType]


export const ConnectionStatus: {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
  PENDING: 'PENDING'
};

export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus]


export const GoalType: {
  DEBT: 'DEBT',
  SAVINGS: 'SAVINGS',
  EMERGENCY_FUND: 'EMERGENCY_FUND',
  VACATION: 'VACATION',
  HOME_DOWN_PAYMENT: 'HOME_DOWN_PAYMENT',
  INVESTMENT: 'INVESTMENT',
  OTHER: 'OTHER'
};

export type GoalType = (typeof GoalType)[keyof typeof GoalType]


export const InsightKind: {
  WEEKLY: 'WEEKLY',
  DAILY: 'DAILY',
  MONTHLY: 'MONTHLY'
};

export type InsightKind = (typeof InsightKind)[keyof typeof InsightKind]


export const AIInsightType: {
  SPENDING_ALERT: 'SPENDING_ALERT',
  SAVINGS_OPPORTUNITY: 'SAVINGS_OPPORTUNITY',
  BUDGET_WARNING: 'BUDGET_WARNING',
  GOAL_PROGRESS: 'GOAL_PROGRESS',
  UNUSUAL_ACTIVITY: 'UNUSUAL_ACTIVITY',
  FINANCIAL_TIP: 'FINANCIAL_TIP',
  AUTOMATION_SUGGESTION: 'AUTOMATION_SUGGESTION'
};

export type AIInsightType = (typeof AIInsightType)[keyof typeof AIInsightType]


export const AIInsightPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type AIInsightPriority = (typeof AIInsightPriority)[keyof typeof AIInsightPriority]


export const AutomationTriggerType: {
  BALANCE_THRESHOLD: 'BALANCE_THRESHOLD',
  TRANSACTION_CATEGORY: 'TRANSACTION_CATEGORY',
  GOAL_PROGRESS: 'GOAL_PROGRESS',
  SCHEDULED: 'SCHEDULED',
  INCOME_RECEIVED: 'INCOME_RECEIVED',
  BILL_DUE: 'BILL_DUE'
};

export type AutomationTriggerType = (typeof AutomationTriggerType)[keyof typeof AutomationTriggerType]


export const AutomationActionType: {
  TRANSFER_MONEY: 'TRANSFER_MONEY',
  SET_GOAL: 'SET_GOAL',
  CREATE_BUDGET: 'CREATE_BUDGET',
  SEND_NOTIFICATION: 'SEND_NOTIFICATION',
  CATEGORIZE_TRANSACTION: 'CATEGORIZE_TRANSACTION',
  CREATE_INSIGHT: 'CREATE_INSIGHT'
};

export type AutomationActionType = (typeof AutomationActionType)[keyof typeof AutomationActionType]


export const ChatMessageType: {
  USER: 'USER',
  AI: 'AI',
  SYSTEM: 'SYSTEM'
};

export type ChatMessageType = (typeof ChatMessageType)[keyof typeof ChatMessageType]


export const RiskTolerance: {
  CONSERVATIVE: 'CONSERVATIVE',
  MODERATE: 'MODERATE',
  AGGRESSIVE: 'AGGRESSIVE'
};

export type RiskTolerance = (typeof RiskTolerance)[keyof typeof RiskTolerance]


export const AutomationLevel: {
  MINIMAL: 'MINIMAL',
  MEDIUM: 'MEDIUM',
  MAXIMAL: 'MAXIMAL'
};

export type AutomationLevel = (typeof AutomationLevel)[keyof typeof AutomationLevel]

}

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type ConnectionType = $Enums.ConnectionType

export const ConnectionType: typeof $Enums.ConnectionType

export type ConnectionStatus = $Enums.ConnectionStatus

export const ConnectionStatus: typeof $Enums.ConnectionStatus

export type GoalType = $Enums.GoalType

export const GoalType: typeof $Enums.GoalType

export type InsightKind = $Enums.InsightKind

export const InsightKind: typeof $Enums.InsightKind

export type AIInsightType = $Enums.AIInsightType

export const AIInsightType: typeof $Enums.AIInsightType

export type AIInsightPriority = $Enums.AIInsightPriority

export const AIInsightPriority: typeof $Enums.AIInsightPriority

export type AutomationTriggerType = $Enums.AutomationTriggerType

export const AutomationTriggerType: typeof $Enums.AutomationTriggerType

export type AutomationActionType = $Enums.AutomationActionType

export const AutomationActionType: typeof $Enums.AutomationActionType

export type ChatMessageType = $Enums.ChatMessageType

export const ChatMessageType: typeof $Enums.ChatMessageType

export type RiskTolerance = $Enums.RiskTolerance

export const RiskTolerance: typeof $Enums.RiskTolerance

export type AutomationLevel = $Enums.AutomationLevel

export const AutomationLevel: typeof $Enums.AutomationLevel

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.budgetRule`: Exposes CRUD operations for the **BudgetRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BudgetRules
    * const budgetRules = await prisma.budgetRule.findMany()
    * ```
    */
  get budgetRule(): Prisma.BudgetRuleDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs>;

  /**
   * `prisma.insightCache`: Exposes CRUD operations for the **InsightCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InsightCaches
    * const insightCaches = await prisma.insightCache.findMany()
    * ```
    */
  get insightCache(): Prisma.InsightCacheDelegate<ExtArgs>;

  /**
   * `prisma.plaidAccount`: Exposes CRUD operations for the **PlaidAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaidAccounts
    * const plaidAccounts = await prisma.plaidAccount.findMany()
    * ```
    */
  get plaidAccount(): Prisma.PlaidAccountDelegate<ExtArgs>;

  /**
   * `prisma.aIInsight`: Exposes CRUD operations for the **AIInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIInsights
    * const aIInsights = await prisma.aIInsight.findMany()
    * ```
    */
  get aIInsight(): Prisma.AIInsightDelegate<ExtArgs>;

  /**
   * `prisma.automationRule`: Exposes CRUD operations for the **AutomationRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomationRules
    * const automationRules = await prisma.automationRule.findMany()
    * ```
    */
  get automationRule(): Prisma.AutomationRuleDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Subscription: 'Subscription',
    Connection: 'Connection',
    Transaction: 'Transaction',
    BudgetRule: 'BudgetRule',
    Goal: 'Goal',
    InsightCache: 'InsightCache',
    PlaidAccount: 'PlaidAccount',
    AIInsight: 'AIInsight',
    AutomationRule: 'AutomationRule',
    ChatMessage: 'ChatMessage',
    UserPreferences: 'UserPreferences'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "subscription" | "connection" | "transaction" | "budgetRule" | "goal" | "insightCache" | "plaidAccount" | "aIInsight" | "automationRule" | "chatMessage" | "userPreferences"
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
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      BudgetRule: {
        payload: Prisma.$BudgetRulePayload<ExtArgs>
        fields: Prisma.BudgetRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          findFirst: {
            args: Prisma.BudgetRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          findMany: {
            args: Prisma.BudgetRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>[]
          }
          create: {
            args: Prisma.BudgetRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          createMany: {
            args: Prisma.BudgetRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>[]
          }
          delete: {
            args: Prisma.BudgetRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          update: {
            args: Prisma.BudgetRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          deleteMany: {
            args: Prisma.BudgetRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BudgetRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetRulePayload>
          }
          aggregate: {
            args: Prisma.BudgetRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudgetRule>
          }
          groupBy: {
            args: Prisma.BudgetRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetRuleCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetRuleCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      InsightCache: {
        payload: Prisma.$InsightCachePayload<ExtArgs>
        fields: Prisma.InsightCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsightCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsightCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          findFirst: {
            args: Prisma.InsightCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsightCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          findMany: {
            args: Prisma.InsightCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>[]
          }
          create: {
            args: Prisma.InsightCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          createMany: {
            args: Prisma.InsightCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsightCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>[]
          }
          delete: {
            args: Prisma.InsightCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          update: {
            args: Prisma.InsightCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          deleteMany: {
            args: Prisma.InsightCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsightCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InsightCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightCachePayload>
          }
          aggregate: {
            args: Prisma.InsightCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsightCache>
          }
          groupBy: {
            args: Prisma.InsightCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsightCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsightCacheCountArgs<ExtArgs>
            result: $Utils.Optional<InsightCacheCountAggregateOutputType> | number
          }
        }
      }
      PlaidAccount: {
        payload: Prisma.$PlaidAccountPayload<ExtArgs>
        fields: Prisma.PlaidAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaidAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaidAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          findFirst: {
            args: Prisma.PlaidAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaidAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          findMany: {
            args: Prisma.PlaidAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>[]
          }
          create: {
            args: Prisma.PlaidAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          createMany: {
            args: Prisma.PlaidAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaidAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>[]
          }
          delete: {
            args: Prisma.PlaidAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          update: {
            args: Prisma.PlaidAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          deleteMany: {
            args: Prisma.PlaidAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaidAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlaidAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaidAccountPayload>
          }
          aggregate: {
            args: Prisma.PlaidAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaidAccount>
          }
          groupBy: {
            args: Prisma.PlaidAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaidAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaidAccountCountArgs<ExtArgs>
            result: $Utils.Optional<PlaidAccountCountAggregateOutputType> | number
          }
        }
      }
      AIInsight: {
        payload: Prisma.$AIInsightPayload<ExtArgs>
        fields: Prisma.AIInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          findFirst: {
            args: Prisma.AIInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          findMany: {
            args: Prisma.AIInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>[]
          }
          create: {
            args: Prisma.AIInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          createMany: {
            args: Prisma.AIInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>[]
          }
          delete: {
            args: Prisma.AIInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          update: {
            args: Prisma.AIInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          deleteMany: {
            args: Prisma.AIInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          aggregate: {
            args: Prisma.AIInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIInsight>
          }
          groupBy: {
            args: Prisma.AIInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIInsightCountArgs<ExtArgs>
            result: $Utils.Optional<AIInsightCountAggregateOutputType> | number
          }
        }
      }
      AutomationRule: {
        payload: Prisma.$AutomationRulePayload<ExtArgs>
        fields: Prisma.AutomationRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          findFirst: {
            args: Prisma.AutomationRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          findMany: {
            args: Prisma.AutomationRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>[]
          }
          create: {
            args: Prisma.AutomationRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          createMany: {
            args: Prisma.AutomationRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>[]
          }
          delete: {
            args: Prisma.AutomationRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          update: {
            args: Prisma.AutomationRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          deleteMany: {
            args: Prisma.AutomationRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutomationRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationRulePayload>
          }
          aggregate: {
            args: Prisma.AutomationRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomationRule>
          }
          groupBy: {
            args: Prisma.AutomationRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationRuleCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
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
    subscriptions: number
    connections: number
    transactions: number
    budgetRules: number
    goals: number
    insightCaches: number
    plaidAccounts: number
    aiInsights: number
    automationRules: number
    chatMessages: number
    userPreferences: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    budgetRules?: boolean | UserCountOutputTypeCountBudgetRulesArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    insightCaches?: boolean | UserCountOutputTypeCountInsightCachesArgs
    plaidAccounts?: boolean | UserCountOutputTypeCountPlaidAccountsArgs
    aiInsights?: boolean | UserCountOutputTypeCountAiInsightsArgs
    automationRules?: boolean | UserCountOutputTypeCountAutomationRulesArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    userPreferences?: boolean | UserCountOutputTypeCountUserPreferencesArgs
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
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBudgetRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetRuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInsightCachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsightCacheWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaidAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaidAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInsightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAutomationRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationRuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
  }


  /**
   * Count Type PlaidAccountCountOutputType
   */

  export type PlaidAccountCountOutputType = {
    transactions: number
  }

  export type PlaidAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PlaidAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PlaidAccountCountOutputType without action
   */
  export type PlaidAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccountCountOutputType
     */
    select?: PlaidAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaidAccountCountOutputType without action
   */
  export type PlaidAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
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
    supabaseUserId: string | null
    email: string | null
    phone: string | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    email: string | null
    phone: string | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    twoFactorEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    email: number
    phone: number
    emailVerified: number
    phoneVerified: number
    twoFactorEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    phone?: true
    emailVerified?: true
    phoneVerified?: true
    twoFactorEnabled?: true
    createdAt?: true
    updatedAt?: true
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
    supabaseUserId: string
    email: string
    phone: string | null
    emailVerified: boolean
    phoneVerified: boolean
    twoFactorEnabled: boolean
    createdAt: Date
    updatedAt: Date
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
    supabaseUserId?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    connections?: boolean | User$connectionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgetRules?: boolean | User$budgetRulesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    insightCaches?: boolean | User$insightCachesArgs<ExtArgs>
    plaidAccounts?: boolean | User$plaidAccountsArgs<ExtArgs>
    aiInsights?: boolean | User$aiInsightsArgs<ExtArgs>
    automationRules?: boolean | User$automationRulesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    userPreferences?: boolean | User$userPreferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    phone?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    connections?: boolean | User$connectionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    budgetRules?: boolean | User$budgetRulesArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    insightCaches?: boolean | User$insightCachesArgs<ExtArgs>
    plaidAccounts?: boolean | User$plaidAccountsArgs<ExtArgs>
    aiInsights?: boolean | User$aiInsightsArgs<ExtArgs>
    automationRules?: boolean | User$automationRulesArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    userPreferences?: boolean | User$userPreferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      connections: Prisma.$ConnectionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgetRules: Prisma.$BudgetRulePayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      insightCaches: Prisma.$InsightCachePayload<ExtArgs>[]
      plaidAccounts: Prisma.$PlaidAccountPayload<ExtArgs>[]
      aiInsights: Prisma.$AIInsightPayload<ExtArgs>[]
      automationRules: Prisma.$AutomationRulePayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      userPreferences: Prisma.$UserPreferencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseUserId: string
      email: string
      phone: string | null
      emailVerified: boolean
      phoneVerified: boolean
      twoFactorEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    budgetRules<T extends User$budgetRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$budgetRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany"> | Null>
    insightCaches<T extends User$insightCachesArgs<ExtArgs> = {}>(args?: Subset<T, User$insightCachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findMany"> | Null>
    plaidAccounts<T extends User$plaidAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$plaidAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findMany"> | Null>
    aiInsights<T extends User$aiInsightsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findMany"> | Null>
    automationRules<T extends User$automationRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$automationRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findMany"> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    userPreferences<T extends User$userPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$userPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly supabaseUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.connections
   */
  export type User$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.budgetRules
   */
  export type User$budgetRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    where?: BudgetRuleWhereInput
    orderBy?: BudgetRuleOrderByWithRelationInput | BudgetRuleOrderByWithRelationInput[]
    cursor?: BudgetRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetRuleScalarFieldEnum | BudgetRuleScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.insightCaches
   */
  export type User$insightCachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    where?: InsightCacheWhereInput
    orderBy?: InsightCacheOrderByWithRelationInput | InsightCacheOrderByWithRelationInput[]
    cursor?: InsightCacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsightCacheScalarFieldEnum | InsightCacheScalarFieldEnum[]
  }

  /**
   * User.plaidAccounts
   */
  export type User$plaidAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    where?: PlaidAccountWhereInput
    orderBy?: PlaidAccountOrderByWithRelationInput | PlaidAccountOrderByWithRelationInput[]
    cursor?: PlaidAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaidAccountScalarFieldEnum | PlaidAccountScalarFieldEnum[]
  }

  /**
   * User.aiInsights
   */
  export type User$aiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    where?: AIInsightWhereInput
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    cursor?: AIInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * User.automationRules
   */
  export type User$automationRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    where?: AutomationRuleWhereInput
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    cursor?: AutomationRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.userPreferences
   */
  export type User$userPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    cursor?: UserPreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      currentPeriodEnd: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ConnectionType | null
    status: $Enums.ConnectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ConnectionType | null
    status: $Enums.ConnectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.ConnectionType
      status: $Enums.ConnectionStatus
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
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
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Connection model
   */ 
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'String'>
    readonly userId: FieldRef<"Connection", 'String'>
    readonly type: FieldRef<"Connection", 'ConnectionType'>
    readonly status: FieldRef<"Connection", 'ConnectionStatus'>
    readonly metadata: FieldRef<"Connection", 'Json'>
    readonly createdAt: FieldRef<"Connection", 'DateTime'>
    readonly updatedAt: FieldRef<"Connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
    aiConfidence: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
    aiConfidence: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plaidAccountId: string | null
    plaidTransactionId: string | null
    date: Date | null
    amount: Decimal | null
    merchant: string | null
    category: string | null
    subcategory: string | null
    source: string | null
    isRecurring: boolean | null
    recurringGroupId: string | null
    notes: string | null
    aiCategorized: boolean | null
    aiCategory: string | null
    aiConfidence: number | null
    isPending: boolean | null
    paymentChannel: string | null
    transactionType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plaidAccountId: string | null
    plaidTransactionId: string | null
    date: Date | null
    amount: Decimal | null
    merchant: string | null
    category: string | null
    subcategory: string | null
    source: string | null
    isRecurring: boolean | null
    recurringGroupId: string | null
    notes: string | null
    aiCategorized: boolean | null
    aiCategory: string | null
    aiConfidence: number | null
    isPending: boolean | null
    paymentChannel: string | null
    transactionType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    plaidAccountId: number
    plaidTransactionId: number
    date: number
    amount: number
    merchant: number
    category: number
    subcategory: number
    source: number
    isRecurring: number
    recurringGroupId: number
    notes: number
    aiCategorized: number
    aiCategory: number
    aiConfidence: number
    isPending: number
    location: number
    paymentChannel: number
    transactionType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
    aiConfidence?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
    aiConfidence?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidTransactionId?: true
    date?: true
    amount?: true
    merchant?: true
    category?: true
    subcategory?: true
    source?: true
    isRecurring?: true
    recurringGroupId?: true
    notes?: true
    aiCategorized?: true
    aiCategory?: true
    aiConfidence?: true
    isPending?: true
    paymentChannel?: true
    transactionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidTransactionId?: true
    date?: true
    amount?: true
    merchant?: true
    category?: true
    subcategory?: true
    source?: true
    isRecurring?: true
    recurringGroupId?: true
    notes?: true
    aiCategorized?: true
    aiCategory?: true
    aiConfidence?: true
    isPending?: true
    paymentChannel?: true
    transactionType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidTransactionId?: true
    date?: true
    amount?: true
    merchant?: true
    category?: true
    subcategory?: true
    source?: true
    isRecurring?: true
    recurringGroupId?: true
    notes?: true
    aiCategorized?: true
    aiCategory?: true
    aiConfidence?: true
    isPending?: true
    location?: true
    paymentChannel?: true
    transactionType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    plaidAccountId: string | null
    plaidTransactionId: string | null
    date: Date
    amount: Decimal
    merchant: string
    category: string
    subcategory: string | null
    source: string
    isRecurring: boolean
    recurringGroupId: string | null
    notes: string | null
    aiCategorized: boolean
    aiCategory: string | null
    aiConfidence: number | null
    isPending: boolean
    location: JsonValue | null
    paymentChannel: string | null
    transactionType: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidTransactionId?: boolean
    date?: boolean
    amount?: boolean
    merchant?: boolean
    category?: boolean
    subcategory?: boolean
    source?: boolean
    isRecurring?: boolean
    recurringGroupId?: boolean
    notes?: boolean
    aiCategorized?: boolean
    aiCategory?: boolean
    aiConfidence?: boolean
    isPending?: boolean
    location?: boolean
    paymentChannel?: boolean
    transactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaidAccount?: boolean | Transaction$plaidAccountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidTransactionId?: boolean
    date?: boolean
    amount?: boolean
    merchant?: boolean
    category?: boolean
    subcategory?: boolean
    source?: boolean
    isRecurring?: boolean
    recurringGroupId?: boolean
    notes?: boolean
    aiCategorized?: boolean
    aiCategory?: boolean
    aiConfidence?: boolean
    isPending?: boolean
    location?: boolean
    paymentChannel?: boolean
    transactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaidAccount?: boolean | Transaction$plaidAccountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidTransactionId?: boolean
    date?: boolean
    amount?: boolean
    merchant?: boolean
    category?: boolean
    subcategory?: boolean
    source?: boolean
    isRecurring?: boolean
    recurringGroupId?: boolean
    notes?: boolean
    aiCategorized?: boolean
    aiCategory?: boolean
    aiConfidence?: boolean
    isPending?: boolean
    location?: boolean
    paymentChannel?: boolean
    transactionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaidAccount?: boolean | Transaction$plaidAccountArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plaidAccount?: boolean | Transaction$plaidAccountArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plaidAccount: Prisma.$PlaidAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plaidAccountId: string | null
      plaidTransactionId: string | null
      date: Date
      amount: Prisma.Decimal
      merchant: string
      category: string
      subcategory: string | null
      source: string
      isRecurring: boolean
      recurringGroupId: string | null
      notes: string | null
      aiCategorized: boolean
      aiCategory: string | null
      aiConfidence: number | null
      isPending: boolean
      location: Prisma.JsonValue | null
      paymentChannel: string | null
      transactionType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plaidAccount<T extends Transaction$plaidAccountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$plaidAccountArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly plaidAccountId: FieldRef<"Transaction", 'String'>
    readonly plaidTransactionId: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly merchant: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly subcategory: FieldRef<"Transaction", 'String'>
    readonly source: FieldRef<"Transaction", 'String'>
    readonly isRecurring: FieldRef<"Transaction", 'Boolean'>
    readonly recurringGroupId: FieldRef<"Transaction", 'String'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly aiCategorized: FieldRef<"Transaction", 'Boolean'>
    readonly aiCategory: FieldRef<"Transaction", 'String'>
    readonly aiConfidence: FieldRef<"Transaction", 'Float'>
    readonly isPending: FieldRef<"Transaction", 'Boolean'>
    readonly location: FieldRef<"Transaction", 'Json'>
    readonly paymentChannel: FieldRef<"Transaction", 'String'>
    readonly transactionType: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.plaidAccount
   */
  export type Transaction$plaidAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    where?: PlaidAccountWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model BudgetRule
   */

  export type AggregateBudgetRule = {
    _count: BudgetRuleCountAggregateOutputType | null
    _avg: BudgetRuleAvgAggregateOutputType | null
    _sum: BudgetRuleSumAggregateOutputType | null
    _min: BudgetRuleMinAggregateOutputType | null
    _max: BudgetRuleMaxAggregateOutputType | null
  }

  export type BudgetRuleAvgAggregateOutputType = {
    monthlyCap: Decimal | null
  }

  export type BudgetRuleSumAggregateOutputType = {
    monthlyCap: Decimal | null
  }

  export type BudgetRuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    monthlyCap: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetRuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    monthlyCap: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetRuleCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    monthlyCap: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BudgetRuleAvgAggregateInputType = {
    monthlyCap?: true
  }

  export type BudgetRuleSumAggregateInputType = {
    monthlyCap?: true
  }

  export type BudgetRuleMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    monthlyCap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetRuleMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    monthlyCap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetRuleCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    monthlyCap?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetRule to aggregate.
     */
    where?: BudgetRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetRules to fetch.
     */
    orderBy?: BudgetRuleOrderByWithRelationInput | BudgetRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BudgetRules
    **/
    _count?: true | BudgetRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetRuleMaxAggregateInputType
  }

  export type GetBudgetRuleAggregateType<T extends BudgetRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateBudgetRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudgetRule[P]>
      : GetScalarType<T[P], AggregateBudgetRule[P]>
  }




  export type BudgetRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetRuleWhereInput
    orderBy?: BudgetRuleOrderByWithAggregationInput | BudgetRuleOrderByWithAggregationInput[]
    by: BudgetRuleScalarFieldEnum[] | BudgetRuleScalarFieldEnum
    having?: BudgetRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetRuleCountAggregateInputType | true
    _avg?: BudgetRuleAvgAggregateInputType
    _sum?: BudgetRuleSumAggregateInputType
    _min?: BudgetRuleMinAggregateInputType
    _max?: BudgetRuleMaxAggregateInputType
  }

  export type BudgetRuleGroupByOutputType = {
    id: string
    userId: string
    category: string
    monthlyCap: Decimal
    createdAt: Date
    updatedAt: Date
    _count: BudgetRuleCountAggregateOutputType | null
    _avg: BudgetRuleAvgAggregateOutputType | null
    _sum: BudgetRuleSumAggregateOutputType | null
    _min: BudgetRuleMinAggregateOutputType | null
    _max: BudgetRuleMaxAggregateOutputType | null
  }

  type GetBudgetRuleGroupByPayload<T extends BudgetRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetRuleGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetRuleGroupByOutputType[P]>
        }
      >
    >


  export type BudgetRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    monthlyCap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetRule"]>

  export type BudgetRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    monthlyCap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budgetRule"]>

  export type BudgetRuleSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    monthlyCap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BudgetRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BudgetRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BudgetRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BudgetRule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      monthlyCap: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["budgetRule"]>
    composites: {}
  }

  type BudgetRuleGetPayload<S extends boolean | null | undefined | BudgetRuleDefaultArgs> = $Result.GetResult<Prisma.$BudgetRulePayload, S>

  type BudgetRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BudgetRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BudgetRuleCountAggregateInputType | true
    }

  export interface BudgetRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BudgetRule'], meta: { name: 'BudgetRule' } }
    /**
     * Find zero or one BudgetRule that matches the filter.
     * @param {BudgetRuleFindUniqueArgs} args - Arguments to find a BudgetRule
     * @example
     * // Get one BudgetRule
     * const budgetRule = await prisma.budgetRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetRuleFindUniqueArgs>(args: SelectSubset<T, BudgetRuleFindUniqueArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BudgetRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BudgetRuleFindUniqueOrThrowArgs} args - Arguments to find a BudgetRule
     * @example
     * // Get one BudgetRule
     * const budgetRule = await prisma.budgetRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BudgetRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleFindFirstArgs} args - Arguments to find a BudgetRule
     * @example
     * // Get one BudgetRule
     * const budgetRule = await prisma.budgetRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetRuleFindFirstArgs>(args?: SelectSubset<T, BudgetRuleFindFirstArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BudgetRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleFindFirstOrThrowArgs} args - Arguments to find a BudgetRule
     * @example
     * // Get one BudgetRule
     * const budgetRule = await prisma.budgetRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BudgetRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BudgetRules
     * const budgetRules = await prisma.budgetRule.findMany()
     * 
     * // Get first 10 BudgetRules
     * const budgetRules = await prisma.budgetRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetRuleWithIdOnly = await prisma.budgetRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetRuleFindManyArgs>(args?: SelectSubset<T, BudgetRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BudgetRule.
     * @param {BudgetRuleCreateArgs} args - Arguments to create a BudgetRule.
     * @example
     * // Create one BudgetRule
     * const BudgetRule = await prisma.budgetRule.create({
     *   data: {
     *     // ... data to create a BudgetRule
     *   }
     * })
     * 
     */
    create<T extends BudgetRuleCreateArgs>(args: SelectSubset<T, BudgetRuleCreateArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BudgetRules.
     * @param {BudgetRuleCreateManyArgs} args - Arguments to create many BudgetRules.
     * @example
     * // Create many BudgetRules
     * const budgetRule = await prisma.budgetRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetRuleCreateManyArgs>(args?: SelectSubset<T, BudgetRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BudgetRules and returns the data saved in the database.
     * @param {BudgetRuleCreateManyAndReturnArgs} args - Arguments to create many BudgetRules.
     * @example
     * // Create many BudgetRules
     * const budgetRule = await prisma.budgetRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BudgetRules and only return the `id`
     * const budgetRuleWithIdOnly = await prisma.budgetRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BudgetRule.
     * @param {BudgetRuleDeleteArgs} args - Arguments to delete one BudgetRule.
     * @example
     * // Delete one BudgetRule
     * const BudgetRule = await prisma.budgetRule.delete({
     *   where: {
     *     // ... filter to delete one BudgetRule
     *   }
     * })
     * 
     */
    delete<T extends BudgetRuleDeleteArgs>(args: SelectSubset<T, BudgetRuleDeleteArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BudgetRule.
     * @param {BudgetRuleUpdateArgs} args - Arguments to update one BudgetRule.
     * @example
     * // Update one BudgetRule
     * const budgetRule = await prisma.budgetRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetRuleUpdateArgs>(args: SelectSubset<T, BudgetRuleUpdateArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BudgetRules.
     * @param {BudgetRuleDeleteManyArgs} args - Arguments to filter BudgetRules to delete.
     * @example
     * // Delete a few BudgetRules
     * const { count } = await prisma.budgetRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetRuleDeleteManyArgs>(args?: SelectSubset<T, BudgetRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BudgetRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BudgetRules
     * const budgetRule = await prisma.budgetRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetRuleUpdateManyArgs>(args: SelectSubset<T, BudgetRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BudgetRule.
     * @param {BudgetRuleUpsertArgs} args - Arguments to update or create a BudgetRule.
     * @example
     * // Update or create a BudgetRule
     * const budgetRule = await prisma.budgetRule.upsert({
     *   create: {
     *     // ... data to create a BudgetRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BudgetRule we want to update
     *   }
     * })
     */
    upsert<T extends BudgetRuleUpsertArgs>(args: SelectSubset<T, BudgetRuleUpsertArgs<ExtArgs>>): Prisma__BudgetRuleClient<$Result.GetResult<Prisma.$BudgetRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BudgetRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleCountArgs} args - Arguments to filter BudgetRules to count.
     * @example
     * // Count the number of BudgetRules
     * const count = await prisma.budgetRule.count({
     *   where: {
     *     // ... the filter for the BudgetRules we want to count
     *   }
     * })
    **/
    count<T extends BudgetRuleCountArgs>(
      args?: Subset<T, BudgetRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BudgetRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetRuleAggregateArgs>(args: Subset<T, BudgetRuleAggregateArgs>): Prisma.PrismaPromise<GetBudgetRuleAggregateType<T>>

    /**
     * Group by BudgetRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetRuleGroupByArgs} args - Group by arguments.
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
      T extends BudgetRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetRuleGroupByArgs['orderBy'] }
        : { orderBy?: BudgetRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BudgetRule model
   */
  readonly fields: BudgetRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BudgetRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BudgetRule model
   */ 
  interface BudgetRuleFieldRefs {
    readonly id: FieldRef<"BudgetRule", 'String'>
    readonly userId: FieldRef<"BudgetRule", 'String'>
    readonly category: FieldRef<"BudgetRule", 'String'>
    readonly monthlyCap: FieldRef<"BudgetRule", 'Decimal'>
    readonly createdAt: FieldRef<"BudgetRule", 'DateTime'>
    readonly updatedAt: FieldRef<"BudgetRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BudgetRule findUnique
   */
  export type BudgetRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter, which BudgetRule to fetch.
     */
    where: BudgetRuleWhereUniqueInput
  }

  /**
   * BudgetRule findUniqueOrThrow
   */
  export type BudgetRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter, which BudgetRule to fetch.
     */
    where: BudgetRuleWhereUniqueInput
  }

  /**
   * BudgetRule findFirst
   */
  export type BudgetRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter, which BudgetRule to fetch.
     */
    where?: BudgetRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetRules to fetch.
     */
    orderBy?: BudgetRuleOrderByWithRelationInput | BudgetRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetRules.
     */
    cursor?: BudgetRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetRules.
     */
    distinct?: BudgetRuleScalarFieldEnum | BudgetRuleScalarFieldEnum[]
  }

  /**
   * BudgetRule findFirstOrThrow
   */
  export type BudgetRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter, which BudgetRule to fetch.
     */
    where?: BudgetRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetRules to fetch.
     */
    orderBy?: BudgetRuleOrderByWithRelationInput | BudgetRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BudgetRules.
     */
    cursor?: BudgetRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BudgetRules.
     */
    distinct?: BudgetRuleScalarFieldEnum | BudgetRuleScalarFieldEnum[]
  }

  /**
   * BudgetRule findMany
   */
  export type BudgetRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter, which BudgetRules to fetch.
     */
    where?: BudgetRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BudgetRules to fetch.
     */
    orderBy?: BudgetRuleOrderByWithRelationInput | BudgetRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BudgetRules.
     */
    cursor?: BudgetRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BudgetRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BudgetRules.
     */
    skip?: number
    distinct?: BudgetRuleScalarFieldEnum | BudgetRuleScalarFieldEnum[]
  }

  /**
   * BudgetRule create
   */
  export type BudgetRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a BudgetRule.
     */
    data: XOR<BudgetRuleCreateInput, BudgetRuleUncheckedCreateInput>
  }

  /**
   * BudgetRule createMany
   */
  export type BudgetRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BudgetRules.
     */
    data: BudgetRuleCreateManyInput | BudgetRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BudgetRule createManyAndReturn
   */
  export type BudgetRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BudgetRules.
     */
    data: BudgetRuleCreateManyInput | BudgetRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BudgetRule update
   */
  export type BudgetRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a BudgetRule.
     */
    data: XOR<BudgetRuleUpdateInput, BudgetRuleUncheckedUpdateInput>
    /**
     * Choose, which BudgetRule to update.
     */
    where: BudgetRuleWhereUniqueInput
  }

  /**
   * BudgetRule updateMany
   */
  export type BudgetRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BudgetRules.
     */
    data: XOR<BudgetRuleUpdateManyMutationInput, BudgetRuleUncheckedUpdateManyInput>
    /**
     * Filter which BudgetRules to update
     */
    where?: BudgetRuleWhereInput
  }

  /**
   * BudgetRule upsert
   */
  export type BudgetRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the BudgetRule to update in case it exists.
     */
    where: BudgetRuleWhereUniqueInput
    /**
     * In case the BudgetRule found by the `where` argument doesn't exist, create a new BudgetRule with this data.
     */
    create: XOR<BudgetRuleCreateInput, BudgetRuleUncheckedCreateInput>
    /**
     * In case the BudgetRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetRuleUpdateInput, BudgetRuleUncheckedUpdateInput>
  }

  /**
   * BudgetRule delete
   */
  export type BudgetRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
    /**
     * Filter which BudgetRule to delete.
     */
    where: BudgetRuleWhereUniqueInput
  }

  /**
   * BudgetRule deleteMany
   */
  export type BudgetRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BudgetRules to delete
     */
    where?: BudgetRuleWhereInput
  }

  /**
   * BudgetRule without action
   */
  export type BudgetRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BudgetRule
     */
    select?: BudgetRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetRuleInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetAmount: Decimal | null
    progressAmount: Decimal | null
  }

  export type GoalSumAggregateOutputType = {
    targetAmount: Decimal | null
    progressAmount: Decimal | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.GoalType | null
    targetAmount: Decimal | null
    targetDate: Date | null
    progressAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.GoalType | null
    targetAmount: Decimal | null
    targetDate: Date | null
    progressAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    targetAmount: number
    targetDate: number
    progressAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetAmount?: true
    progressAmount?: true
  }

  export type GoalSumAggregateInputType = {
    targetAmount?: true
    progressAmount?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetAmount?: true
    targetDate?: true
    progressAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetAmount?: true
    targetDate?: true
    progressAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetAmount?: true
    targetDate?: true
    progressAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.GoalType
    targetAmount: Decimal
    targetDate: Date
    progressAmount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    targetAmount?: boolean
    targetDate?: boolean
    progressAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    targetAmount?: boolean
    targetDate?: boolean
    progressAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    targetAmount?: boolean
    targetDate?: boolean
    progressAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.GoalType
      targetAmount: Prisma.Decimal
      targetDate: Date
      progressAmount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Goal model
   */ 
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly type: FieldRef<"Goal", 'GoalType'>
    readonly targetAmount: FieldRef<"Goal", 'Decimal'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly progressAmount: FieldRef<"Goal", 'Decimal'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model InsightCache
   */

  export type AggregateInsightCache = {
    _count: InsightCacheCountAggregateOutputType | null
    _min: InsightCacheMinAggregateOutputType | null
    _max: InsightCacheMaxAggregateOutputType | null
  }

  export type InsightCacheMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kind: $Enums.InsightKind | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type InsightCacheMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kind: $Enums.InsightKind | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type InsightCacheCountAggregateOutputType = {
    id: number
    userId: number
    kind: number
    payload: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type InsightCacheMinAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    expiresAt?: true
    createdAt?: true
  }

  export type InsightCacheMaxAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    expiresAt?: true
    createdAt?: true
  }

  export type InsightCacheCountAggregateInputType = {
    id?: true
    userId?: true
    kind?: true
    payload?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type InsightCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsightCache to aggregate.
     */
    where?: InsightCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsightCaches to fetch.
     */
    orderBy?: InsightCacheOrderByWithRelationInput | InsightCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsightCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsightCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsightCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InsightCaches
    **/
    _count?: true | InsightCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsightCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsightCacheMaxAggregateInputType
  }

  export type GetInsightCacheAggregateType<T extends InsightCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateInsightCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsightCache[P]>
      : GetScalarType<T[P], AggregateInsightCache[P]>
  }




  export type InsightCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsightCacheWhereInput
    orderBy?: InsightCacheOrderByWithAggregationInput | InsightCacheOrderByWithAggregationInput[]
    by: InsightCacheScalarFieldEnum[] | InsightCacheScalarFieldEnum
    having?: InsightCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsightCacheCountAggregateInputType | true
    _min?: InsightCacheMinAggregateInputType
    _max?: InsightCacheMaxAggregateInputType
  }

  export type InsightCacheGroupByOutputType = {
    id: string
    userId: string
    kind: $Enums.InsightKind
    payload: JsonValue
    expiresAt: Date
    createdAt: Date
    _count: InsightCacheCountAggregateOutputType | null
    _min: InsightCacheMinAggregateOutputType | null
    _max: InsightCacheMaxAggregateOutputType | null
  }

  type GetInsightCacheGroupByPayload<T extends InsightCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsightCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsightCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsightCacheGroupByOutputType[P]>
            : GetScalarType<T[P], InsightCacheGroupByOutputType[P]>
        }
      >
    >


  export type InsightCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kind?: boolean
    payload?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insightCache"]>

  export type InsightCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kind?: boolean
    payload?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insightCache"]>

  export type InsightCacheSelectScalar = {
    id?: boolean
    userId?: boolean
    kind?: boolean
    payload?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type InsightCacheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InsightCacheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InsightCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InsightCache"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kind: $Enums.InsightKind
      payload: Prisma.JsonValue
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["insightCache"]>
    composites: {}
  }

  type InsightCacheGetPayload<S extends boolean | null | undefined | InsightCacheDefaultArgs> = $Result.GetResult<Prisma.$InsightCachePayload, S>

  type InsightCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InsightCacheFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InsightCacheCountAggregateInputType | true
    }

  export interface InsightCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InsightCache'], meta: { name: 'InsightCache' } }
    /**
     * Find zero or one InsightCache that matches the filter.
     * @param {InsightCacheFindUniqueArgs} args - Arguments to find a InsightCache
     * @example
     * // Get one InsightCache
     * const insightCache = await prisma.insightCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsightCacheFindUniqueArgs>(args: SelectSubset<T, InsightCacheFindUniqueArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InsightCache that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InsightCacheFindUniqueOrThrowArgs} args - Arguments to find a InsightCache
     * @example
     * // Get one InsightCache
     * const insightCache = await prisma.insightCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsightCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, InsightCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InsightCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheFindFirstArgs} args - Arguments to find a InsightCache
     * @example
     * // Get one InsightCache
     * const insightCache = await prisma.insightCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsightCacheFindFirstArgs>(args?: SelectSubset<T, InsightCacheFindFirstArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InsightCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheFindFirstOrThrowArgs} args - Arguments to find a InsightCache
     * @example
     * // Get one InsightCache
     * const insightCache = await prisma.insightCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsightCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, InsightCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InsightCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InsightCaches
     * const insightCaches = await prisma.insightCache.findMany()
     * 
     * // Get first 10 InsightCaches
     * const insightCaches = await prisma.insightCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insightCacheWithIdOnly = await prisma.insightCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsightCacheFindManyArgs>(args?: SelectSubset<T, InsightCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InsightCache.
     * @param {InsightCacheCreateArgs} args - Arguments to create a InsightCache.
     * @example
     * // Create one InsightCache
     * const InsightCache = await prisma.insightCache.create({
     *   data: {
     *     // ... data to create a InsightCache
     *   }
     * })
     * 
     */
    create<T extends InsightCacheCreateArgs>(args: SelectSubset<T, InsightCacheCreateArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InsightCaches.
     * @param {InsightCacheCreateManyArgs} args - Arguments to create many InsightCaches.
     * @example
     * // Create many InsightCaches
     * const insightCache = await prisma.insightCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsightCacheCreateManyArgs>(args?: SelectSubset<T, InsightCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InsightCaches and returns the data saved in the database.
     * @param {InsightCacheCreateManyAndReturnArgs} args - Arguments to create many InsightCaches.
     * @example
     * // Create many InsightCaches
     * const insightCache = await prisma.insightCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InsightCaches and only return the `id`
     * const insightCacheWithIdOnly = await prisma.insightCache.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsightCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, InsightCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InsightCache.
     * @param {InsightCacheDeleteArgs} args - Arguments to delete one InsightCache.
     * @example
     * // Delete one InsightCache
     * const InsightCache = await prisma.insightCache.delete({
     *   where: {
     *     // ... filter to delete one InsightCache
     *   }
     * })
     * 
     */
    delete<T extends InsightCacheDeleteArgs>(args: SelectSubset<T, InsightCacheDeleteArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InsightCache.
     * @param {InsightCacheUpdateArgs} args - Arguments to update one InsightCache.
     * @example
     * // Update one InsightCache
     * const insightCache = await prisma.insightCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsightCacheUpdateArgs>(args: SelectSubset<T, InsightCacheUpdateArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InsightCaches.
     * @param {InsightCacheDeleteManyArgs} args - Arguments to filter InsightCaches to delete.
     * @example
     * // Delete a few InsightCaches
     * const { count } = await prisma.insightCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsightCacheDeleteManyArgs>(args?: SelectSubset<T, InsightCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InsightCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InsightCaches
     * const insightCache = await prisma.insightCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsightCacheUpdateManyArgs>(args: SelectSubset<T, InsightCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InsightCache.
     * @param {InsightCacheUpsertArgs} args - Arguments to update or create a InsightCache.
     * @example
     * // Update or create a InsightCache
     * const insightCache = await prisma.insightCache.upsert({
     *   create: {
     *     // ... data to create a InsightCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InsightCache we want to update
     *   }
     * })
     */
    upsert<T extends InsightCacheUpsertArgs>(args: SelectSubset<T, InsightCacheUpsertArgs<ExtArgs>>): Prisma__InsightCacheClient<$Result.GetResult<Prisma.$InsightCachePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InsightCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheCountArgs} args - Arguments to filter InsightCaches to count.
     * @example
     * // Count the number of InsightCaches
     * const count = await prisma.insightCache.count({
     *   where: {
     *     // ... the filter for the InsightCaches we want to count
     *   }
     * })
    **/
    count<T extends InsightCacheCountArgs>(
      args?: Subset<T, InsightCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsightCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InsightCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsightCacheAggregateArgs>(args: Subset<T, InsightCacheAggregateArgs>): Prisma.PrismaPromise<GetInsightCacheAggregateType<T>>

    /**
     * Group by InsightCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCacheGroupByArgs} args - Group by arguments.
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
      T extends InsightCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsightCacheGroupByArgs['orderBy'] }
        : { orderBy?: InsightCacheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsightCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsightCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InsightCache model
   */
  readonly fields: InsightCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InsightCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsightCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the InsightCache model
   */ 
  interface InsightCacheFieldRefs {
    readonly id: FieldRef<"InsightCache", 'String'>
    readonly userId: FieldRef<"InsightCache", 'String'>
    readonly kind: FieldRef<"InsightCache", 'InsightKind'>
    readonly payload: FieldRef<"InsightCache", 'Json'>
    readonly expiresAt: FieldRef<"InsightCache", 'DateTime'>
    readonly createdAt: FieldRef<"InsightCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InsightCache findUnique
   */
  export type InsightCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter, which InsightCache to fetch.
     */
    where: InsightCacheWhereUniqueInput
  }

  /**
   * InsightCache findUniqueOrThrow
   */
  export type InsightCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter, which InsightCache to fetch.
     */
    where: InsightCacheWhereUniqueInput
  }

  /**
   * InsightCache findFirst
   */
  export type InsightCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter, which InsightCache to fetch.
     */
    where?: InsightCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsightCaches to fetch.
     */
    orderBy?: InsightCacheOrderByWithRelationInput | InsightCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsightCaches.
     */
    cursor?: InsightCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsightCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsightCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsightCaches.
     */
    distinct?: InsightCacheScalarFieldEnum | InsightCacheScalarFieldEnum[]
  }

  /**
   * InsightCache findFirstOrThrow
   */
  export type InsightCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter, which InsightCache to fetch.
     */
    where?: InsightCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsightCaches to fetch.
     */
    orderBy?: InsightCacheOrderByWithRelationInput | InsightCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InsightCaches.
     */
    cursor?: InsightCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsightCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsightCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InsightCaches.
     */
    distinct?: InsightCacheScalarFieldEnum | InsightCacheScalarFieldEnum[]
  }

  /**
   * InsightCache findMany
   */
  export type InsightCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter, which InsightCaches to fetch.
     */
    where?: InsightCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InsightCaches to fetch.
     */
    orderBy?: InsightCacheOrderByWithRelationInput | InsightCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InsightCaches.
     */
    cursor?: InsightCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InsightCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InsightCaches.
     */
    skip?: number
    distinct?: InsightCacheScalarFieldEnum | InsightCacheScalarFieldEnum[]
  }

  /**
   * InsightCache create
   */
  export type InsightCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * The data needed to create a InsightCache.
     */
    data: XOR<InsightCacheCreateInput, InsightCacheUncheckedCreateInput>
  }

  /**
   * InsightCache createMany
   */
  export type InsightCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InsightCaches.
     */
    data: InsightCacheCreateManyInput | InsightCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InsightCache createManyAndReturn
   */
  export type InsightCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InsightCaches.
     */
    data: InsightCacheCreateManyInput | InsightCacheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InsightCache update
   */
  export type InsightCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * The data needed to update a InsightCache.
     */
    data: XOR<InsightCacheUpdateInput, InsightCacheUncheckedUpdateInput>
    /**
     * Choose, which InsightCache to update.
     */
    where: InsightCacheWhereUniqueInput
  }

  /**
   * InsightCache updateMany
   */
  export type InsightCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InsightCaches.
     */
    data: XOR<InsightCacheUpdateManyMutationInput, InsightCacheUncheckedUpdateManyInput>
    /**
     * Filter which InsightCaches to update
     */
    where?: InsightCacheWhereInput
  }

  /**
   * InsightCache upsert
   */
  export type InsightCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * The filter to search for the InsightCache to update in case it exists.
     */
    where: InsightCacheWhereUniqueInput
    /**
     * In case the InsightCache found by the `where` argument doesn't exist, create a new InsightCache with this data.
     */
    create: XOR<InsightCacheCreateInput, InsightCacheUncheckedCreateInput>
    /**
     * In case the InsightCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsightCacheUpdateInput, InsightCacheUncheckedUpdateInput>
  }

  /**
   * InsightCache delete
   */
  export type InsightCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
    /**
     * Filter which InsightCache to delete.
     */
    where: InsightCacheWhereUniqueInput
  }

  /**
   * InsightCache deleteMany
   */
  export type InsightCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InsightCaches to delete
     */
    where?: InsightCacheWhereInput
  }

  /**
   * InsightCache without action
   */
  export type InsightCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsightCache
     */
    select?: InsightCacheSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightCacheInclude<ExtArgs> | null
  }


  /**
   * Model PlaidAccount
   */

  export type AggregatePlaidAccount = {
    _count: PlaidAccountCountAggregateOutputType | null
    _avg: PlaidAccountAvgAggregateOutputType | null
    _sum: PlaidAccountSumAggregateOutputType | null
    _min: PlaidAccountMinAggregateOutputType | null
    _max: PlaidAccountMaxAggregateOutputType | null
  }

  export type PlaidAccountAvgAggregateOutputType = {
    currentBalance: Decimal | null
    availableBalance: Decimal | null
    limit: Decimal | null
  }

  export type PlaidAccountSumAggregateOutputType = {
    currentBalance: Decimal | null
    availableBalance: Decimal | null
    limit: Decimal | null
  }

  export type PlaidAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plaidAccountId: string | null
    plaidItemId: string | null
    name: string | null
    officialName: string | null
    type: string | null
    subtype: string | null
    mask: string | null
    institutionName: string | null
    institutionLogo: string | null
    currentBalance: Decimal | null
    availableBalance: Decimal | null
    limit: Decimal | null
    lastSyncAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaidAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plaidAccountId: string | null
    plaidItemId: string | null
    name: string | null
    officialName: string | null
    type: string | null
    subtype: string | null
    mask: string | null
    institutionName: string | null
    institutionLogo: string | null
    currentBalance: Decimal | null
    availableBalance: Decimal | null
    limit: Decimal | null
    lastSyncAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaidAccountCountAggregateOutputType = {
    id: number
    userId: number
    plaidAccountId: number
    plaidItemId: number
    name: number
    officialName: number
    type: number
    subtype: number
    mask: number
    institutionName: number
    institutionLogo: number
    currentBalance: number
    availableBalance: number
    limit: number
    lastSyncAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaidAccountAvgAggregateInputType = {
    currentBalance?: true
    availableBalance?: true
    limit?: true
  }

  export type PlaidAccountSumAggregateInputType = {
    currentBalance?: true
    availableBalance?: true
    limit?: true
  }

  export type PlaidAccountMinAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidItemId?: true
    name?: true
    officialName?: true
    type?: true
    subtype?: true
    mask?: true
    institutionName?: true
    institutionLogo?: true
    currentBalance?: true
    availableBalance?: true
    limit?: true
    lastSyncAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaidAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidItemId?: true
    name?: true
    officialName?: true
    type?: true
    subtype?: true
    mask?: true
    institutionName?: true
    institutionLogo?: true
    currentBalance?: true
    availableBalance?: true
    limit?: true
    lastSyncAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaidAccountCountAggregateInputType = {
    id?: true
    userId?: true
    plaidAccountId?: true
    plaidItemId?: true
    name?: true
    officialName?: true
    type?: true
    subtype?: true
    mask?: true
    institutionName?: true
    institutionLogo?: true
    currentBalance?: true
    availableBalance?: true
    limit?: true
    lastSyncAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaidAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaidAccount to aggregate.
     */
    where?: PlaidAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaidAccounts to fetch.
     */
    orderBy?: PlaidAccountOrderByWithRelationInput | PlaidAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaidAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaidAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaidAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaidAccounts
    **/
    _count?: true | PlaidAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaidAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaidAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaidAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaidAccountMaxAggregateInputType
  }

  export type GetPlaidAccountAggregateType<T extends PlaidAccountAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaidAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaidAccount[P]>
      : GetScalarType<T[P], AggregatePlaidAccount[P]>
  }




  export type PlaidAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaidAccountWhereInput
    orderBy?: PlaidAccountOrderByWithAggregationInput | PlaidAccountOrderByWithAggregationInput[]
    by: PlaidAccountScalarFieldEnum[] | PlaidAccountScalarFieldEnum
    having?: PlaidAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaidAccountCountAggregateInputType | true
    _avg?: PlaidAccountAvgAggregateInputType
    _sum?: PlaidAccountSumAggregateInputType
    _min?: PlaidAccountMinAggregateInputType
    _max?: PlaidAccountMaxAggregateInputType
  }

  export type PlaidAccountGroupByOutputType = {
    id: string
    userId: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName: string | null
    type: string
    subtype: string | null
    mask: string | null
    institutionName: string
    institutionLogo: string | null
    currentBalance: Decimal
    availableBalance: Decimal
    limit: Decimal | null
    lastSyncAt: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlaidAccountCountAggregateOutputType | null
    _avg: PlaidAccountAvgAggregateOutputType | null
    _sum: PlaidAccountSumAggregateOutputType | null
    _min: PlaidAccountMinAggregateOutputType | null
    _max: PlaidAccountMaxAggregateOutputType | null
  }

  type GetPlaidAccountGroupByPayload<T extends PlaidAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaidAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaidAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaidAccountGroupByOutputType[P]>
            : GetScalarType<T[P], PlaidAccountGroupByOutputType[P]>
        }
      >
    >


  export type PlaidAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidItemId?: boolean
    name?: boolean
    officialName?: boolean
    type?: boolean
    subtype?: boolean
    mask?: boolean
    institutionName?: boolean
    institutionLogo?: boolean
    currentBalance?: boolean
    availableBalance?: boolean
    limit?: boolean
    lastSyncAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | PlaidAccount$transactionsArgs<ExtArgs>
    _count?: boolean | PlaidAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plaidAccount"]>

  export type PlaidAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidItemId?: boolean
    name?: boolean
    officialName?: boolean
    type?: boolean
    subtype?: boolean
    mask?: boolean
    institutionName?: boolean
    institutionLogo?: boolean
    currentBalance?: boolean
    availableBalance?: boolean
    limit?: boolean
    lastSyncAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plaidAccount"]>

  export type PlaidAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    plaidAccountId?: boolean
    plaidItemId?: boolean
    name?: boolean
    officialName?: boolean
    type?: boolean
    subtype?: boolean
    mask?: boolean
    institutionName?: boolean
    institutionLogo?: boolean
    currentBalance?: boolean
    availableBalance?: boolean
    limit?: boolean
    lastSyncAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaidAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | PlaidAccount$transactionsArgs<ExtArgs>
    _count?: boolean | PlaidAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaidAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaidAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaidAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plaidAccountId: string
      plaidItemId: string
      name: string
      officialName: string | null
      type: string
      subtype: string | null
      mask: string | null
      institutionName: string
      institutionLogo: string | null
      currentBalance: Prisma.Decimal
      availableBalance: Prisma.Decimal
      limit: Prisma.Decimal | null
      lastSyncAt: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plaidAccount"]>
    composites: {}
  }

  type PlaidAccountGetPayload<S extends boolean | null | undefined | PlaidAccountDefaultArgs> = $Result.GetResult<Prisma.$PlaidAccountPayload, S>

  type PlaidAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaidAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaidAccountCountAggregateInputType | true
    }

  export interface PlaidAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaidAccount'], meta: { name: 'PlaidAccount' } }
    /**
     * Find zero or one PlaidAccount that matches the filter.
     * @param {PlaidAccountFindUniqueArgs} args - Arguments to find a PlaidAccount
     * @example
     * // Get one PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaidAccountFindUniqueArgs>(args: SelectSubset<T, PlaidAccountFindUniqueArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlaidAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlaidAccountFindUniqueOrThrowArgs} args - Arguments to find a PlaidAccount
     * @example
     * // Get one PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaidAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaidAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlaidAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountFindFirstArgs} args - Arguments to find a PlaidAccount
     * @example
     * // Get one PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaidAccountFindFirstArgs>(args?: SelectSubset<T, PlaidAccountFindFirstArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlaidAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountFindFirstOrThrowArgs} args - Arguments to find a PlaidAccount
     * @example
     * // Get one PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaidAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaidAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlaidAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaidAccounts
     * const plaidAccounts = await prisma.plaidAccount.findMany()
     * 
     * // Get first 10 PlaidAccounts
     * const plaidAccounts = await prisma.plaidAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plaidAccountWithIdOnly = await prisma.plaidAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaidAccountFindManyArgs>(args?: SelectSubset<T, PlaidAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlaidAccount.
     * @param {PlaidAccountCreateArgs} args - Arguments to create a PlaidAccount.
     * @example
     * // Create one PlaidAccount
     * const PlaidAccount = await prisma.plaidAccount.create({
     *   data: {
     *     // ... data to create a PlaidAccount
     *   }
     * })
     * 
     */
    create<T extends PlaidAccountCreateArgs>(args: SelectSubset<T, PlaidAccountCreateArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlaidAccounts.
     * @param {PlaidAccountCreateManyArgs} args - Arguments to create many PlaidAccounts.
     * @example
     * // Create many PlaidAccounts
     * const plaidAccount = await prisma.plaidAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaidAccountCreateManyArgs>(args?: SelectSubset<T, PlaidAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaidAccounts and returns the data saved in the database.
     * @param {PlaidAccountCreateManyAndReturnArgs} args - Arguments to create many PlaidAccounts.
     * @example
     * // Create many PlaidAccounts
     * const plaidAccount = await prisma.plaidAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaidAccounts and only return the `id`
     * const plaidAccountWithIdOnly = await prisma.plaidAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaidAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaidAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlaidAccount.
     * @param {PlaidAccountDeleteArgs} args - Arguments to delete one PlaidAccount.
     * @example
     * // Delete one PlaidAccount
     * const PlaidAccount = await prisma.plaidAccount.delete({
     *   where: {
     *     // ... filter to delete one PlaidAccount
     *   }
     * })
     * 
     */
    delete<T extends PlaidAccountDeleteArgs>(args: SelectSubset<T, PlaidAccountDeleteArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlaidAccount.
     * @param {PlaidAccountUpdateArgs} args - Arguments to update one PlaidAccount.
     * @example
     * // Update one PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaidAccountUpdateArgs>(args: SelectSubset<T, PlaidAccountUpdateArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlaidAccounts.
     * @param {PlaidAccountDeleteManyArgs} args - Arguments to filter PlaidAccounts to delete.
     * @example
     * // Delete a few PlaidAccounts
     * const { count } = await prisma.plaidAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaidAccountDeleteManyArgs>(args?: SelectSubset<T, PlaidAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaidAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaidAccounts
     * const plaidAccount = await prisma.plaidAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaidAccountUpdateManyArgs>(args: SelectSubset<T, PlaidAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaidAccount.
     * @param {PlaidAccountUpsertArgs} args - Arguments to update or create a PlaidAccount.
     * @example
     * // Update or create a PlaidAccount
     * const plaidAccount = await prisma.plaidAccount.upsert({
     *   create: {
     *     // ... data to create a PlaidAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaidAccount we want to update
     *   }
     * })
     */
    upsert<T extends PlaidAccountUpsertArgs>(args: SelectSubset<T, PlaidAccountUpsertArgs<ExtArgs>>): Prisma__PlaidAccountClient<$Result.GetResult<Prisma.$PlaidAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlaidAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountCountArgs} args - Arguments to filter PlaidAccounts to count.
     * @example
     * // Count the number of PlaidAccounts
     * const count = await prisma.plaidAccount.count({
     *   where: {
     *     // ... the filter for the PlaidAccounts we want to count
     *   }
     * })
    **/
    count<T extends PlaidAccountCountArgs>(
      args?: Subset<T, PlaidAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaidAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaidAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaidAccountAggregateArgs>(args: Subset<T, PlaidAccountAggregateArgs>): Prisma.PrismaPromise<GetPlaidAccountAggregateType<T>>

    /**
     * Group by PlaidAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaidAccountGroupByArgs} args - Group by arguments.
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
      T extends PlaidAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaidAccountGroupByArgs['orderBy'] }
        : { orderBy?: PlaidAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaidAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaidAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaidAccount model
   */
  readonly fields: PlaidAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaidAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaidAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transactions<T extends PlaidAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, PlaidAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PlaidAccount model
   */ 
  interface PlaidAccountFieldRefs {
    readonly id: FieldRef<"PlaidAccount", 'String'>
    readonly userId: FieldRef<"PlaidAccount", 'String'>
    readonly plaidAccountId: FieldRef<"PlaidAccount", 'String'>
    readonly plaidItemId: FieldRef<"PlaidAccount", 'String'>
    readonly name: FieldRef<"PlaidAccount", 'String'>
    readonly officialName: FieldRef<"PlaidAccount", 'String'>
    readonly type: FieldRef<"PlaidAccount", 'String'>
    readonly subtype: FieldRef<"PlaidAccount", 'String'>
    readonly mask: FieldRef<"PlaidAccount", 'String'>
    readonly institutionName: FieldRef<"PlaidAccount", 'String'>
    readonly institutionLogo: FieldRef<"PlaidAccount", 'String'>
    readonly currentBalance: FieldRef<"PlaidAccount", 'Decimal'>
    readonly availableBalance: FieldRef<"PlaidAccount", 'Decimal'>
    readonly limit: FieldRef<"PlaidAccount", 'Decimal'>
    readonly lastSyncAt: FieldRef<"PlaidAccount", 'DateTime'>
    readonly isActive: FieldRef<"PlaidAccount", 'Boolean'>
    readonly createdAt: FieldRef<"PlaidAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"PlaidAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaidAccount findUnique
   */
  export type PlaidAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlaidAccount to fetch.
     */
    where: PlaidAccountWhereUniqueInput
  }

  /**
   * PlaidAccount findUniqueOrThrow
   */
  export type PlaidAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlaidAccount to fetch.
     */
    where: PlaidAccountWhereUniqueInput
  }

  /**
   * PlaidAccount findFirst
   */
  export type PlaidAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlaidAccount to fetch.
     */
    where?: PlaidAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaidAccounts to fetch.
     */
    orderBy?: PlaidAccountOrderByWithRelationInput | PlaidAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaidAccounts.
     */
    cursor?: PlaidAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaidAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaidAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaidAccounts.
     */
    distinct?: PlaidAccountScalarFieldEnum | PlaidAccountScalarFieldEnum[]
  }

  /**
   * PlaidAccount findFirstOrThrow
   */
  export type PlaidAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlaidAccount to fetch.
     */
    where?: PlaidAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaidAccounts to fetch.
     */
    orderBy?: PlaidAccountOrderByWithRelationInput | PlaidAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaidAccounts.
     */
    cursor?: PlaidAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaidAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaidAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaidAccounts.
     */
    distinct?: PlaidAccountScalarFieldEnum | PlaidAccountScalarFieldEnum[]
  }

  /**
   * PlaidAccount findMany
   */
  export type PlaidAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter, which PlaidAccounts to fetch.
     */
    where?: PlaidAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaidAccounts to fetch.
     */
    orderBy?: PlaidAccountOrderByWithRelationInput | PlaidAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaidAccounts.
     */
    cursor?: PlaidAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaidAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaidAccounts.
     */
    skip?: number
    distinct?: PlaidAccountScalarFieldEnum | PlaidAccountScalarFieldEnum[]
  }

  /**
   * PlaidAccount create
   */
  export type PlaidAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaidAccount.
     */
    data: XOR<PlaidAccountCreateInput, PlaidAccountUncheckedCreateInput>
  }

  /**
   * PlaidAccount createMany
   */
  export type PlaidAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaidAccounts.
     */
    data: PlaidAccountCreateManyInput | PlaidAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaidAccount createManyAndReturn
   */
  export type PlaidAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlaidAccounts.
     */
    data: PlaidAccountCreateManyInput | PlaidAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaidAccount update
   */
  export type PlaidAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaidAccount.
     */
    data: XOR<PlaidAccountUpdateInput, PlaidAccountUncheckedUpdateInput>
    /**
     * Choose, which PlaidAccount to update.
     */
    where: PlaidAccountWhereUniqueInput
  }

  /**
   * PlaidAccount updateMany
   */
  export type PlaidAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaidAccounts.
     */
    data: XOR<PlaidAccountUpdateManyMutationInput, PlaidAccountUncheckedUpdateManyInput>
    /**
     * Filter which PlaidAccounts to update
     */
    where?: PlaidAccountWhereInput
  }

  /**
   * PlaidAccount upsert
   */
  export type PlaidAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaidAccount to update in case it exists.
     */
    where: PlaidAccountWhereUniqueInput
    /**
     * In case the PlaidAccount found by the `where` argument doesn't exist, create a new PlaidAccount with this data.
     */
    create: XOR<PlaidAccountCreateInput, PlaidAccountUncheckedCreateInput>
    /**
     * In case the PlaidAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaidAccountUpdateInput, PlaidAccountUncheckedUpdateInput>
  }

  /**
   * PlaidAccount delete
   */
  export type PlaidAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
    /**
     * Filter which PlaidAccount to delete.
     */
    where: PlaidAccountWhereUniqueInput
  }

  /**
   * PlaidAccount deleteMany
   */
  export type PlaidAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaidAccounts to delete
     */
    where?: PlaidAccountWhereInput
  }

  /**
   * PlaidAccount.transactions
   */
  export type PlaidAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PlaidAccount without action
   */
  export type PlaidAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaidAccount
     */
    select?: PlaidAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaidAccountInclude<ExtArgs> | null
  }


  /**
   * Model AIInsight
   */

  export type AggregateAIInsight = {
    _count: AIInsightCountAggregateOutputType | null
    _min: AIInsightMinAggregateOutputType | null
    _max: AIInsightMaxAggregateOutputType | null
  }

  export type AIInsightMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AIInsightType | null
    title: string | null
    message: string | null
    actionRequired: boolean | null
    actionType: string | null
    priority: $Enums.AIInsightPriority | null
    isRead: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIInsightMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AIInsightType | null
    title: string | null
    message: string | null
    actionRequired: boolean | null
    actionType: string | null
    priority: $Enums.AIInsightPriority | null
    isRead: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIInsightCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    actionRequired: number
    actionType: number
    actionData: number
    priority: number
    isRead: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIInsightMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    actionRequired?: true
    actionType?: true
    priority?: true
    isRead?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIInsightMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    actionRequired?: true
    actionType?: true
    priority?: true
    isRead?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIInsightCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    actionRequired?: true
    actionType?: true
    actionData?: true
    priority?: true
    isRead?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInsight to aggregate.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIInsights
    **/
    _count?: true | AIInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIInsightMaxAggregateInputType
  }

  export type GetAIInsightAggregateType<T extends AIInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateAIInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIInsight[P]>
      : GetScalarType<T[P], AggregateAIInsight[P]>
  }




  export type AIInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInsightWhereInput
    orderBy?: AIInsightOrderByWithAggregationInput | AIInsightOrderByWithAggregationInput[]
    by: AIInsightScalarFieldEnum[] | AIInsightScalarFieldEnum
    having?: AIInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIInsightCountAggregateInputType | true
    _min?: AIInsightMinAggregateInputType
    _max?: AIInsightMaxAggregateInputType
  }

  export type AIInsightGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired: boolean
    actionType: string | null
    actionData: JsonValue | null
    priority: $Enums.AIInsightPriority
    isRead: boolean
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AIInsightCountAggregateOutputType | null
    _min: AIInsightMinAggregateOutputType | null
    _max: AIInsightMaxAggregateOutputType | null
  }

  type GetAIInsightGroupByPayload<T extends AIInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIInsightGroupByOutputType[P]>
            : GetScalarType<T[P], AIInsightGroupByOutputType[P]>
        }
      >
    >


  export type AIInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    actionRequired?: boolean
    actionType?: boolean
    actionData?: boolean
    priority?: boolean
    isRead?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInsight"]>

  export type AIInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    actionRequired?: boolean
    actionType?: boolean
    actionData?: boolean
    priority?: boolean
    isRead?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInsight"]>

  export type AIInsightSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    actionRequired?: boolean
    actionType?: boolean
    actionData?: boolean
    priority?: boolean
    isRead?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AIInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIInsight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.AIInsightType
      title: string
      message: string
      actionRequired: boolean
      actionType: string | null
      actionData: Prisma.JsonValue | null
      priority: $Enums.AIInsightPriority
      isRead: boolean
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIInsight"]>
    composites: {}
  }

  type AIInsightGetPayload<S extends boolean | null | undefined | AIInsightDefaultArgs> = $Result.GetResult<Prisma.$AIInsightPayload, S>

  type AIInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AIInsightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AIInsightCountAggregateInputType | true
    }

  export interface AIInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIInsight'], meta: { name: 'AIInsight' } }
    /**
     * Find zero or one AIInsight that matches the filter.
     * @param {AIInsightFindUniqueArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIInsightFindUniqueArgs>(args: SelectSubset<T, AIInsightFindUniqueArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AIInsight that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AIInsightFindUniqueOrThrowArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, AIInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AIInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindFirstArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIInsightFindFirstArgs>(args?: SelectSubset<T, AIInsightFindFirstArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AIInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindFirstOrThrowArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, AIInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AIInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIInsights
     * const aIInsights = await prisma.aIInsight.findMany()
     * 
     * // Get first 10 AIInsights
     * const aIInsights = await prisma.aIInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIInsightWithIdOnly = await prisma.aIInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIInsightFindManyArgs>(args?: SelectSubset<T, AIInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AIInsight.
     * @param {AIInsightCreateArgs} args - Arguments to create a AIInsight.
     * @example
     * // Create one AIInsight
     * const AIInsight = await prisma.aIInsight.create({
     *   data: {
     *     // ... data to create a AIInsight
     *   }
     * })
     * 
     */
    create<T extends AIInsightCreateArgs>(args: SelectSubset<T, AIInsightCreateArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AIInsights.
     * @param {AIInsightCreateManyArgs} args - Arguments to create many AIInsights.
     * @example
     * // Create many AIInsights
     * const aIInsight = await prisma.aIInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIInsightCreateManyArgs>(args?: SelectSubset<T, AIInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIInsights and returns the data saved in the database.
     * @param {AIInsightCreateManyAndReturnArgs} args - Arguments to create many AIInsights.
     * @example
     * // Create many AIInsights
     * const aIInsight = await prisma.aIInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIInsights and only return the `id`
     * const aIInsightWithIdOnly = await prisma.aIInsight.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, AIInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AIInsight.
     * @param {AIInsightDeleteArgs} args - Arguments to delete one AIInsight.
     * @example
     * // Delete one AIInsight
     * const AIInsight = await prisma.aIInsight.delete({
     *   where: {
     *     // ... filter to delete one AIInsight
     *   }
     * })
     * 
     */
    delete<T extends AIInsightDeleteArgs>(args: SelectSubset<T, AIInsightDeleteArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AIInsight.
     * @param {AIInsightUpdateArgs} args - Arguments to update one AIInsight.
     * @example
     * // Update one AIInsight
     * const aIInsight = await prisma.aIInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIInsightUpdateArgs>(args: SelectSubset<T, AIInsightUpdateArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AIInsights.
     * @param {AIInsightDeleteManyArgs} args - Arguments to filter AIInsights to delete.
     * @example
     * // Delete a few AIInsights
     * const { count } = await prisma.aIInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIInsightDeleteManyArgs>(args?: SelectSubset<T, AIInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIInsights
     * const aIInsight = await prisma.aIInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIInsightUpdateManyArgs>(args: SelectSubset<T, AIInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIInsight.
     * @param {AIInsightUpsertArgs} args - Arguments to update or create a AIInsight.
     * @example
     * // Update or create a AIInsight
     * const aIInsight = await prisma.aIInsight.upsert({
     *   create: {
     *     // ... data to create a AIInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIInsight we want to update
     *   }
     * })
     */
    upsert<T extends AIInsightUpsertArgs>(args: SelectSubset<T, AIInsightUpsertArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AIInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightCountArgs} args - Arguments to filter AIInsights to count.
     * @example
     * // Count the number of AIInsights
     * const count = await prisma.aIInsight.count({
     *   where: {
     *     // ... the filter for the AIInsights we want to count
     *   }
     * })
    **/
    count<T extends AIInsightCountArgs>(
      args?: Subset<T, AIInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIInsightAggregateArgs>(args: Subset<T, AIInsightAggregateArgs>): Prisma.PrismaPromise<GetAIInsightAggregateType<T>>

    /**
     * Group by AIInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightGroupByArgs} args - Group by arguments.
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
      T extends AIInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIInsightGroupByArgs['orderBy'] }
        : { orderBy?: AIInsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIInsight model
   */
  readonly fields: AIInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AIInsight model
   */ 
  interface AIInsightFieldRefs {
    readonly id: FieldRef<"AIInsight", 'String'>
    readonly userId: FieldRef<"AIInsight", 'String'>
    readonly type: FieldRef<"AIInsight", 'AIInsightType'>
    readonly title: FieldRef<"AIInsight", 'String'>
    readonly message: FieldRef<"AIInsight", 'String'>
    readonly actionRequired: FieldRef<"AIInsight", 'Boolean'>
    readonly actionType: FieldRef<"AIInsight", 'String'>
    readonly actionData: FieldRef<"AIInsight", 'Json'>
    readonly priority: FieldRef<"AIInsight", 'AIInsightPriority'>
    readonly isRead: FieldRef<"AIInsight", 'Boolean'>
    readonly expiresAt: FieldRef<"AIInsight", 'DateTime'>
    readonly createdAt: FieldRef<"AIInsight", 'DateTime'>
    readonly updatedAt: FieldRef<"AIInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIInsight findUnique
   */
  export type AIInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight findUniqueOrThrow
   */
  export type AIInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight findFirst
   */
  export type AIInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInsights.
     */
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight findFirstOrThrow
   */
  export type AIInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInsights.
     */
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight findMany
   */
  export type AIInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsights to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight create
   */
  export type AIInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a AIInsight.
     */
    data: XOR<AIInsightCreateInput, AIInsightUncheckedCreateInput>
  }

  /**
   * AIInsight createMany
   */
  export type AIInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIInsights.
     */
    data: AIInsightCreateManyInput | AIInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIInsight createManyAndReturn
   */
  export type AIInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AIInsights.
     */
    data: AIInsightCreateManyInput | AIInsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIInsight update
   */
  export type AIInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a AIInsight.
     */
    data: XOR<AIInsightUpdateInput, AIInsightUncheckedUpdateInput>
    /**
     * Choose, which AIInsight to update.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight updateMany
   */
  export type AIInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIInsights.
     */
    data: XOR<AIInsightUpdateManyMutationInput, AIInsightUncheckedUpdateManyInput>
    /**
     * Filter which AIInsights to update
     */
    where?: AIInsightWhereInput
  }

  /**
   * AIInsight upsert
   */
  export type AIInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the AIInsight to update in case it exists.
     */
    where: AIInsightWhereUniqueInput
    /**
     * In case the AIInsight found by the `where` argument doesn't exist, create a new AIInsight with this data.
     */
    create: XOR<AIInsightCreateInput, AIInsightUncheckedCreateInput>
    /**
     * In case the AIInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIInsightUpdateInput, AIInsightUncheckedUpdateInput>
  }

  /**
   * AIInsight delete
   */
  export type AIInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter which AIInsight to delete.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight deleteMany
   */
  export type AIInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInsights to delete
     */
    where?: AIInsightWhereInput
  }

  /**
   * AIInsight without action
   */
  export type AIInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
  }


  /**
   * Model AutomationRule
   */

  export type AggregateAutomationRule = {
    _count: AutomationRuleCountAggregateOutputType | null
    _avg: AutomationRuleAvgAggregateOutputType | null
    _sum: AutomationRuleSumAggregateOutputType | null
    _min: AutomationRuleMinAggregateOutputType | null
    _max: AutomationRuleMaxAggregateOutputType | null
  }

  export type AutomationRuleAvgAggregateOutputType = {
    executionCount: number | null
  }

  export type AutomationRuleSumAggregateOutputType = {
    executionCount: number | null
  }

  export type AutomationRuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    triggerType: $Enums.AutomationTriggerType | null
    actionType: $Enums.AutomationActionType | null
    isActive: boolean | null
    lastExecutedAt: Date | null
    executionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationRuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    triggerType: $Enums.AutomationTriggerType | null
    actionType: $Enums.AutomationActionType | null
    isActive: boolean | null
    lastExecutedAt: Date | null
    executionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationRuleCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    triggerType: number
    triggerData: number
    actionType: number
    actionData: number
    isActive: number
    lastExecutedAt: number
    executionCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationRuleAvgAggregateInputType = {
    executionCount?: true
  }

  export type AutomationRuleSumAggregateInputType = {
    executionCount?: true
  }

  export type AutomationRuleMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    triggerType?: true
    actionType?: true
    isActive?: true
    lastExecutedAt?: true
    executionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationRuleMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    triggerType?: true
    actionType?: true
    isActive?: true
    lastExecutedAt?: true
    executionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationRuleCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    triggerType?: true
    triggerData?: true
    actionType?: true
    actionData?: true
    isActive?: true
    lastExecutedAt?: true
    executionCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationRule to aggregate.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomationRules
    **/
    _count?: true | AutomationRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomationRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomationRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationRuleMaxAggregateInputType
  }

  export type GetAutomationRuleAggregateType<T extends AutomationRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomationRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomationRule[P]>
      : GetScalarType<T[P], AggregateAutomationRule[P]>
  }




  export type AutomationRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationRuleWhereInput
    orderBy?: AutomationRuleOrderByWithAggregationInput | AutomationRuleOrderByWithAggregationInput[]
    by: AutomationRuleScalarFieldEnum[] | AutomationRuleScalarFieldEnum
    having?: AutomationRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationRuleCountAggregateInputType | true
    _avg?: AutomationRuleAvgAggregateInputType
    _sum?: AutomationRuleSumAggregateInputType
    _min?: AutomationRuleMinAggregateInputType
    _max?: AutomationRuleMaxAggregateInputType
  }

  export type AutomationRuleGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonValue
    isActive: boolean
    lastExecutedAt: Date | null
    executionCount: number
    createdAt: Date
    updatedAt: Date
    _count: AutomationRuleCountAggregateOutputType | null
    _avg: AutomationRuleAvgAggregateOutputType | null
    _sum: AutomationRuleSumAggregateOutputType | null
    _min: AutomationRuleMinAggregateOutputType | null
    _max: AutomationRuleMaxAggregateOutputType | null
  }

  type GetAutomationRuleGroupByPayload<T extends AutomationRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationRuleGroupByOutputType[P]>
        }
      >
    >


  export type AutomationRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    triggerType?: boolean
    triggerData?: boolean
    actionType?: boolean
    actionData?: boolean
    isActive?: boolean
    lastExecutedAt?: boolean
    executionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationRule"]>

  export type AutomationRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    triggerType?: boolean
    triggerData?: boolean
    actionType?: boolean
    actionData?: boolean
    isActive?: boolean
    lastExecutedAt?: boolean
    executionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automationRule"]>

  export type AutomationRuleSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    triggerType?: boolean
    triggerData?: boolean
    actionType?: boolean
    actionData?: boolean
    isActive?: boolean
    lastExecutedAt?: boolean
    executionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AutomationRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AutomationRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomationRule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      triggerType: $Enums.AutomationTriggerType
      triggerData: Prisma.JsonValue
      actionType: $Enums.AutomationActionType
      actionData: Prisma.JsonValue
      isActive: boolean
      lastExecutedAt: Date | null
      executionCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automationRule"]>
    composites: {}
  }

  type AutomationRuleGetPayload<S extends boolean | null | undefined | AutomationRuleDefaultArgs> = $Result.GetResult<Prisma.$AutomationRulePayload, S>

  type AutomationRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AutomationRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AutomationRuleCountAggregateInputType | true
    }

  export interface AutomationRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomationRule'], meta: { name: 'AutomationRule' } }
    /**
     * Find zero or one AutomationRule that matches the filter.
     * @param {AutomationRuleFindUniqueArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationRuleFindUniqueArgs>(args: SelectSubset<T, AutomationRuleFindUniqueArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AutomationRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AutomationRuleFindUniqueOrThrowArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AutomationRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindFirstArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationRuleFindFirstArgs>(args?: SelectSubset<T, AutomationRuleFindFirstArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AutomationRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindFirstOrThrowArgs} args - Arguments to find a AutomationRule
     * @example
     * // Get one AutomationRule
     * const automationRule = await prisma.automationRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AutomationRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomationRules
     * const automationRules = await prisma.automationRule.findMany()
     * 
     * // Get first 10 AutomationRules
     * const automationRules = await prisma.automationRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationRuleWithIdOnly = await prisma.automationRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationRuleFindManyArgs>(args?: SelectSubset<T, AutomationRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AutomationRule.
     * @param {AutomationRuleCreateArgs} args - Arguments to create a AutomationRule.
     * @example
     * // Create one AutomationRule
     * const AutomationRule = await prisma.automationRule.create({
     *   data: {
     *     // ... data to create a AutomationRule
     *   }
     * })
     * 
     */
    create<T extends AutomationRuleCreateArgs>(args: SelectSubset<T, AutomationRuleCreateArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AutomationRules.
     * @param {AutomationRuleCreateManyArgs} args - Arguments to create many AutomationRules.
     * @example
     * // Create many AutomationRules
     * const automationRule = await prisma.automationRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationRuleCreateManyArgs>(args?: SelectSubset<T, AutomationRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomationRules and returns the data saved in the database.
     * @param {AutomationRuleCreateManyAndReturnArgs} args - Arguments to create many AutomationRules.
     * @example
     * // Create many AutomationRules
     * const automationRule = await prisma.automationRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomationRules and only return the `id`
     * const automationRuleWithIdOnly = await prisma.automationRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AutomationRule.
     * @param {AutomationRuleDeleteArgs} args - Arguments to delete one AutomationRule.
     * @example
     * // Delete one AutomationRule
     * const AutomationRule = await prisma.automationRule.delete({
     *   where: {
     *     // ... filter to delete one AutomationRule
     *   }
     * })
     * 
     */
    delete<T extends AutomationRuleDeleteArgs>(args: SelectSubset<T, AutomationRuleDeleteArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AutomationRule.
     * @param {AutomationRuleUpdateArgs} args - Arguments to update one AutomationRule.
     * @example
     * // Update one AutomationRule
     * const automationRule = await prisma.automationRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationRuleUpdateArgs>(args: SelectSubset<T, AutomationRuleUpdateArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AutomationRules.
     * @param {AutomationRuleDeleteManyArgs} args - Arguments to filter AutomationRules to delete.
     * @example
     * // Delete a few AutomationRules
     * const { count } = await prisma.automationRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationRuleDeleteManyArgs>(args?: SelectSubset<T, AutomationRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomationRules
     * const automationRule = await prisma.automationRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationRuleUpdateManyArgs>(args: SelectSubset<T, AutomationRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AutomationRule.
     * @param {AutomationRuleUpsertArgs} args - Arguments to update or create a AutomationRule.
     * @example
     * // Update or create a AutomationRule
     * const automationRule = await prisma.automationRule.upsert({
     *   create: {
     *     // ... data to create a AutomationRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomationRule we want to update
     *   }
     * })
     */
    upsert<T extends AutomationRuleUpsertArgs>(args: SelectSubset<T, AutomationRuleUpsertArgs<ExtArgs>>): Prisma__AutomationRuleClient<$Result.GetResult<Prisma.$AutomationRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AutomationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleCountArgs} args - Arguments to filter AutomationRules to count.
     * @example
     * // Count the number of AutomationRules
     * const count = await prisma.automationRule.count({
     *   where: {
     *     // ... the filter for the AutomationRules we want to count
     *   }
     * })
    **/
    count<T extends AutomationRuleCountArgs>(
      args?: Subset<T, AutomationRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationRuleAggregateArgs>(args: Subset<T, AutomationRuleAggregateArgs>): Prisma.PrismaPromise<GetAutomationRuleAggregateType<T>>

    /**
     * Group by AutomationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationRuleGroupByArgs} args - Group by arguments.
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
      T extends AutomationRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationRuleGroupByArgs['orderBy'] }
        : { orderBy?: AutomationRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomationRule model
   */
  readonly fields: AutomationRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomationRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AutomationRule model
   */ 
  interface AutomationRuleFieldRefs {
    readonly id: FieldRef<"AutomationRule", 'String'>
    readonly userId: FieldRef<"AutomationRule", 'String'>
    readonly name: FieldRef<"AutomationRule", 'String'>
    readonly description: FieldRef<"AutomationRule", 'String'>
    readonly triggerType: FieldRef<"AutomationRule", 'AutomationTriggerType'>
    readonly triggerData: FieldRef<"AutomationRule", 'Json'>
    readonly actionType: FieldRef<"AutomationRule", 'AutomationActionType'>
    readonly actionData: FieldRef<"AutomationRule", 'Json'>
    readonly isActive: FieldRef<"AutomationRule", 'Boolean'>
    readonly lastExecutedAt: FieldRef<"AutomationRule", 'DateTime'>
    readonly executionCount: FieldRef<"AutomationRule", 'Int'>
    readonly createdAt: FieldRef<"AutomationRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AutomationRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutomationRule findUnique
   */
  export type AutomationRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule findUniqueOrThrow
   */
  export type AutomationRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule findFirst
   */
  export type AutomationRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationRules.
     */
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule findFirstOrThrow
   */
  export type AutomationRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRule to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomationRules.
     */
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule findMany
   */
  export type AutomationRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutomationRules to fetch.
     */
    where?: AutomationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomationRules to fetch.
     */
    orderBy?: AutomationRuleOrderByWithRelationInput | AutomationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomationRules.
     */
    cursor?: AutomationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomationRules.
     */
    skip?: number
    distinct?: AutomationRuleScalarFieldEnum | AutomationRuleScalarFieldEnum[]
  }

  /**
   * AutomationRule create
   */
  export type AutomationRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomationRule.
     */
    data: XOR<AutomationRuleCreateInput, AutomationRuleUncheckedCreateInput>
  }

  /**
   * AutomationRule createMany
   */
  export type AutomationRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomationRules.
     */
    data: AutomationRuleCreateManyInput | AutomationRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomationRule createManyAndReturn
   */
  export type AutomationRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AutomationRules.
     */
    data: AutomationRuleCreateManyInput | AutomationRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomationRule update
   */
  export type AutomationRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomationRule.
     */
    data: XOR<AutomationRuleUpdateInput, AutomationRuleUncheckedUpdateInput>
    /**
     * Choose, which AutomationRule to update.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule updateMany
   */
  export type AutomationRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomationRules.
     */
    data: XOR<AutomationRuleUpdateManyMutationInput, AutomationRuleUncheckedUpdateManyInput>
    /**
     * Filter which AutomationRules to update
     */
    where?: AutomationRuleWhereInput
  }

  /**
   * AutomationRule upsert
   */
  export type AutomationRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomationRule to update in case it exists.
     */
    where: AutomationRuleWhereUniqueInput
    /**
     * In case the AutomationRule found by the `where` argument doesn't exist, create a new AutomationRule with this data.
     */
    create: XOR<AutomationRuleCreateInput, AutomationRuleUncheckedCreateInput>
    /**
     * In case the AutomationRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationRuleUpdateInput, AutomationRuleUncheckedUpdateInput>
  }

  /**
   * AutomationRule delete
   */
  export type AutomationRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
    /**
     * Filter which AutomationRule to delete.
     */
    where: AutomationRuleWhereUniqueInput
  }

  /**
   * AutomationRule deleteMany
   */
  export type AutomationRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomationRules to delete
     */
    where?: AutomationRuleWhereInput
  }

  /**
   * AutomationRule without action
   */
  export type AutomationRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationRule
     */
    select?: AutomationRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationRuleInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    response: string | null
    messageType: $Enums.ChatMessageType | null
    isAI: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    response: string | null
    messageType: $Enums.ChatMessageType | null
    isAI: boolean | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    response: number
    context: number
    messageType: number
    isAI: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    response?: true
    messageType?: true
    isAI?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    response?: true
    messageType?: true
    isAI?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    response?: true
    context?: true
    messageType?: true
    isAI?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    userId: string
    message: string
    response: string
    context: JsonValue | null
    messageType: $Enums.ChatMessageType
    isAI: boolean
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    response?: boolean
    context?: boolean
    messageType?: boolean
    isAI?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    response?: boolean
    context?: boolean
    messageType?: boolean
    isAI?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    response?: boolean
    context?: boolean
    messageType?: boolean
    isAI?: boolean
    createdAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      response: string
      context: Prisma.JsonValue | null
      messageType: $Enums.ChatMessageType
      isAI: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly userId: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly response: FieldRef<"ChatMessage", 'String'>
    readonly context: FieldRef<"ChatMessage", 'Json'>
    readonly messageType: FieldRef<"ChatMessage", 'ChatMessageType'>
    readonly isAI: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    riskTolerance: $Enums.RiskTolerance | null
    automationLevel: $Enums.AutomationLevel | null
    aiPersonality: string | null
    aiResponseStyle: string | null
    theme: string | null
    tutorialCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    riskTolerance: $Enums.RiskTolerance | null
    automationLevel: $Enums.AutomationLevel | null
    aiPersonality: string | null
    aiResponseStyle: string | null
    theme: string | null
    tutorialCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    riskTolerance: number
    automationLevel: number
    notificationPreferences: number
    aiPersonality: number
    aiResponseStyle: number
    theme: number
    tutorialCompleted: number
    tutorialPosition: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    riskTolerance?: true
    automationLevel?: true
    aiPersonality?: true
    aiResponseStyle?: true
    theme?: true
    tutorialCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    riskTolerance?: true
    automationLevel?: true
    aiPersonality?: true
    aiResponseStyle?: true
    theme?: true
    tutorialCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    riskTolerance?: true
    automationLevel?: true
    notificationPreferences?: true
    aiPersonality?: true
    aiResponseStyle?: true
    theme?: true
    tutorialCompleted?: true
    tutorialPosition?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    riskTolerance: $Enums.RiskTolerance
    automationLevel: $Enums.AutomationLevel
    notificationPreferences: JsonValue | null
    aiPersonality: string | null
    aiResponseStyle: string | null
    theme: string | null
    tutorialCompleted: boolean
    tutorialPosition: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskTolerance?: boolean
    automationLevel?: boolean
    notificationPreferences?: boolean
    aiPersonality?: boolean
    aiResponseStyle?: boolean
    theme?: boolean
    tutorialCompleted?: boolean
    tutorialPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskTolerance?: boolean
    automationLevel?: boolean
    notificationPreferences?: boolean
    aiPersonality?: boolean
    aiResponseStyle?: boolean
    theme?: boolean
    tutorialCompleted?: boolean
    tutorialPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    riskTolerance?: boolean
    automationLevel?: boolean
    notificationPreferences?: boolean
    aiPersonality?: boolean
    aiResponseStyle?: boolean
    theme?: boolean
    tutorialCompleted?: boolean
    tutorialPosition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      riskTolerance: $Enums.RiskTolerance
      automationLevel: $Enums.AutomationLevel
      notificationPreferences: Prisma.JsonValue | null
      aiPersonality: string | null
      aiResponseStyle: string | null
      theme: string | null
      tutorialCompleted: boolean
      tutorialPosition: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
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
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserPreferences model
   */ 
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly riskTolerance: FieldRef<"UserPreferences", 'RiskTolerance'>
    readonly automationLevel: FieldRef<"UserPreferences", 'AutomationLevel'>
    readonly notificationPreferences: FieldRef<"UserPreferences", 'Json'>
    readonly aiPersonality: FieldRef<"UserPreferences", 'String'>
    readonly aiResponseStyle: FieldRef<"UserPreferences", 'String'>
    readonly theme: FieldRef<"UserPreferences", 'String'>
    readonly tutorialCompleted: FieldRef<"UserPreferences", 'Boolean'>
    readonly tutorialPosition: FieldRef<"UserPreferences", 'Json'>
    readonly createdAt: FieldRef<"UserPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
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
    supabaseUserId: 'supabaseUserId',
    email: 'email',
    phone: 'phone',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    twoFactorEnabled: 'twoFactorEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plaidAccountId: 'plaidAccountId',
    plaidTransactionId: 'plaidTransactionId',
    date: 'date',
    amount: 'amount',
    merchant: 'merchant',
    category: 'category',
    subcategory: 'subcategory',
    source: 'source',
    isRecurring: 'isRecurring',
    recurringGroupId: 'recurringGroupId',
    notes: 'notes',
    aiCategorized: 'aiCategorized',
    aiCategory: 'aiCategory',
    aiConfidence: 'aiConfidence',
    isPending: 'isPending',
    location: 'location',
    paymentChannel: 'paymentChannel',
    transactionType: 'transactionType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const BudgetRuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    monthlyCap: 'monthlyCap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BudgetRuleScalarFieldEnum = (typeof BudgetRuleScalarFieldEnum)[keyof typeof BudgetRuleScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    targetAmount: 'targetAmount',
    targetDate: 'targetDate',
    progressAmount: 'progressAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const InsightCacheScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kind: 'kind',
    payload: 'payload',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type InsightCacheScalarFieldEnum = (typeof InsightCacheScalarFieldEnum)[keyof typeof InsightCacheScalarFieldEnum]


  export const PlaidAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plaidAccountId: 'plaidAccountId',
    plaidItemId: 'plaidItemId',
    name: 'name',
    officialName: 'officialName',
    type: 'type',
    subtype: 'subtype',
    mask: 'mask',
    institutionName: 'institutionName',
    institutionLogo: 'institutionLogo',
    currentBalance: 'currentBalance',
    availableBalance: 'availableBalance',
    limit: 'limit',
    lastSyncAt: 'lastSyncAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaidAccountScalarFieldEnum = (typeof PlaidAccountScalarFieldEnum)[keyof typeof PlaidAccountScalarFieldEnum]


  export const AIInsightScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    actionRequired: 'actionRequired',
    actionType: 'actionType',
    actionData: 'actionData',
    priority: 'priority',
    isRead: 'isRead',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIInsightScalarFieldEnum = (typeof AIInsightScalarFieldEnum)[keyof typeof AIInsightScalarFieldEnum]


  export const AutomationRuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    triggerType: 'triggerType',
    triggerData: 'triggerData',
    actionType: 'actionType',
    actionData: 'actionData',
    isActive: 'isActive',
    lastExecutedAt: 'lastExecutedAt',
    executionCount: 'executionCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationRuleScalarFieldEnum = (typeof AutomationRuleScalarFieldEnum)[keyof typeof AutomationRuleScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    response: 'response',
    context: 'context',
    messageType: 'messageType',
    isAI: 'isAI',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    riskTolerance: 'riskTolerance',
    automationLevel: 'automationLevel',
    notificationPreferences: 'notificationPreferences',
    aiPersonality: 'aiPersonality',
    aiResponseStyle: 'aiResponseStyle',
    theme: 'theme',
    tutorialCompleted: 'tutorialCompleted',
    tutorialPosition: 'tutorialPosition',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'ConnectionType'
   */
  export type EnumConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionType'>
    


  /**
   * Reference to a field of type 'ConnectionType[]'
   */
  export type ListEnumConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionType[]'>
    


  /**
   * Reference to a field of type 'ConnectionStatus'
   */
  export type EnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus'>
    


  /**
   * Reference to a field of type 'ConnectionStatus[]'
   */
  export type ListEnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType'>
    


  /**
   * Reference to a field of type 'GoalType[]'
   */
  export type ListEnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType[]'>
    


  /**
   * Reference to a field of type 'InsightKind'
   */
  export type EnumInsightKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsightKind'>
    


  /**
   * Reference to a field of type 'InsightKind[]'
   */
  export type ListEnumInsightKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsightKind[]'>
    


  /**
   * Reference to a field of type 'AIInsightType'
   */
  export type EnumAIInsightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIInsightType'>
    


  /**
   * Reference to a field of type 'AIInsightType[]'
   */
  export type ListEnumAIInsightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIInsightType[]'>
    


  /**
   * Reference to a field of type 'AIInsightPriority'
   */
  export type EnumAIInsightPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIInsightPriority'>
    


  /**
   * Reference to a field of type 'AIInsightPriority[]'
   */
  export type ListEnumAIInsightPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIInsightPriority[]'>
    


  /**
   * Reference to a field of type 'AutomationTriggerType'
   */
  export type EnumAutomationTriggerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationTriggerType'>
    


  /**
   * Reference to a field of type 'AutomationTriggerType[]'
   */
  export type ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationTriggerType[]'>
    


  /**
   * Reference to a field of type 'AutomationActionType'
   */
  export type EnumAutomationActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationActionType'>
    


  /**
   * Reference to a field of type 'AutomationActionType[]'
   */
  export type ListEnumAutomationActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationActionType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ChatMessageType'
   */
  export type EnumChatMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatMessageType'>
    


  /**
   * Reference to a field of type 'ChatMessageType[]'
   */
  export type ListEnumChatMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatMessageType[]'>
    


  /**
   * Reference to a field of type 'RiskTolerance'
   */
  export type EnumRiskToleranceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskTolerance'>
    


  /**
   * Reference to a field of type 'RiskTolerance[]'
   */
  export type ListEnumRiskToleranceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskTolerance[]'>
    


  /**
   * Reference to a field of type 'AutomationLevel'
   */
  export type EnumAutomationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationLevel'>
    


  /**
   * Reference to a field of type 'AutomationLevel[]'
   */
  export type ListEnumAutomationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationLevel[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    supabaseUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    connections?: ConnectionListRelationFilter
    transactions?: TransactionListRelationFilter
    budgetRules?: BudgetRuleListRelationFilter
    goals?: GoalListRelationFilter
    insightCaches?: InsightCacheListRelationFilter
    plaidAccounts?: PlaidAccountListRelationFilter
    aiInsights?: AIInsightListRelationFilter
    automationRules?: AutomationRuleListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    userPreferences?: UserPreferencesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    connections?: ConnectionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    budgetRules?: BudgetRuleOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    insightCaches?: InsightCacheOrderByRelationAggregateInput
    plaidAccounts?: PlaidAccountOrderByRelationAggregateInput
    aiInsights?: AIInsightOrderByRelationAggregateInput
    automationRules?: AutomationRuleOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    userPreferences?: UserPreferencesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    connections?: ConnectionListRelationFilter
    transactions?: TransactionListRelationFilter
    budgetRules?: BudgetRuleListRelationFilter
    goals?: GoalListRelationFilter
    insightCaches?: InsightCacheListRelationFilter
    plaidAccounts?: PlaidAccountListRelationFilter
    aiInsights?: AIInsightListRelationFilter
    automationRules?: AutomationRuleListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    userPreferences?: UserPreferencesListRelationFilter
  }, "id" | "supabaseUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    supabaseUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: StringFilter<"Connection"> | string
    userId?: StringFilter<"Connection"> | string
    type?: EnumConnectionTypeFilter<"Connection"> | $Enums.ConnectionType
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    metadata?: JsonNullableFilter<"Connection">
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    userId?: StringFilter<"Connection"> | string
    type?: EnumConnectionTypeFilter<"Connection"> | $Enums.ConnectionType
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    metadata?: JsonNullableFilter<"Connection">
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connection"> | string
    userId?: StringWithAggregatesFilter<"Connection"> | string
    type?: EnumConnectionTypeWithAggregatesFilter<"Connection"> | $Enums.ConnectionType
    status?: EnumConnectionStatusWithAggregatesFilter<"Connection"> | $Enums.ConnectionStatus
    metadata?: JsonNullableWithAggregatesFilter<"Connection">
    createdAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    plaidAccountId?: StringNullableFilter<"Transaction"> | string | null
    plaidTransactionId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    merchant?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    source?: StringFilter<"Transaction"> | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    recurringGroupId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    aiCategorized?: BoolFilter<"Transaction"> | boolean
    aiCategory?: StringNullableFilter<"Transaction"> | string | null
    aiConfidence?: FloatNullableFilter<"Transaction"> | number | null
    isPending?: BoolFilter<"Transaction"> | boolean
    location?: JsonNullableFilter<"Transaction">
    paymentChannel?: StringNullableFilter<"Transaction"> | string | null
    transactionType?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    plaidAccount?: XOR<PlaidAccountNullableRelationFilter, PlaidAccountWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrderInput | SortOrder
    plaidTransactionId?: SortOrderInput | SortOrder
    date?: SortOrder
    amount?: SortOrder
    merchant?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    source?: SortOrder
    isRecurring?: SortOrder
    recurringGroupId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiCategorized?: SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiConfidence?: SortOrderInput | SortOrder
    isPending?: SortOrder
    location?: SortOrderInput | SortOrder
    paymentChannel?: SortOrderInput | SortOrder
    transactionType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plaidAccount?: PlaidAccountOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plaidTransactionId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    plaidAccountId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    merchant?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    source?: StringFilter<"Transaction"> | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    recurringGroupId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    aiCategorized?: BoolFilter<"Transaction"> | boolean
    aiCategory?: StringNullableFilter<"Transaction"> | string | null
    aiConfidence?: FloatNullableFilter<"Transaction"> | number | null
    isPending?: BoolFilter<"Transaction"> | boolean
    location?: JsonNullableFilter<"Transaction">
    paymentChannel?: StringNullableFilter<"Transaction"> | string | null
    transactionType?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    plaidAccount?: XOR<PlaidAccountNullableRelationFilter, PlaidAccountWhereInput> | null
  }, "id" | "plaidTransactionId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrderInput | SortOrder
    plaidTransactionId?: SortOrderInput | SortOrder
    date?: SortOrder
    amount?: SortOrder
    merchant?: SortOrder
    category?: SortOrder
    subcategory?: SortOrderInput | SortOrder
    source?: SortOrder
    isRecurring?: SortOrder
    recurringGroupId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiCategorized?: SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiConfidence?: SortOrderInput | SortOrder
    isPending?: SortOrder
    location?: SortOrderInput | SortOrder
    paymentChannel?: SortOrderInput | SortOrder
    transactionType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    plaidAccountId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    plaidTransactionId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    merchant?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringWithAggregatesFilter<"Transaction"> | string
    subcategory?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    source?: StringWithAggregatesFilter<"Transaction"> | string
    isRecurring?: BoolWithAggregatesFilter<"Transaction"> | boolean
    recurringGroupId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    aiCategorized?: BoolWithAggregatesFilter<"Transaction"> | boolean
    aiCategory?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    aiConfidence?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    isPending?: BoolWithAggregatesFilter<"Transaction"> | boolean
    location?: JsonNullableWithAggregatesFilter<"Transaction">
    paymentChannel?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    transactionType?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type BudgetRuleWhereInput = {
    AND?: BudgetRuleWhereInput | BudgetRuleWhereInput[]
    OR?: BudgetRuleWhereInput[]
    NOT?: BudgetRuleWhereInput | BudgetRuleWhereInput[]
    id?: StringFilter<"BudgetRule"> | string
    userId?: StringFilter<"BudgetRule"> | string
    category?: StringFilter<"BudgetRule"> | string
    monthlyCap?: DecimalFilter<"BudgetRule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BudgetRule"> | Date | string
    updatedAt?: DateTimeFilter<"BudgetRule"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BudgetRuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    monthlyCap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BudgetRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetRuleWhereInput | BudgetRuleWhereInput[]
    OR?: BudgetRuleWhereInput[]
    NOT?: BudgetRuleWhereInput | BudgetRuleWhereInput[]
    userId?: StringFilter<"BudgetRule"> | string
    category?: StringFilter<"BudgetRule"> | string
    monthlyCap?: DecimalFilter<"BudgetRule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BudgetRule"> | Date | string
    updatedAt?: DateTimeFilter<"BudgetRule"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BudgetRuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    monthlyCap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BudgetRuleCountOrderByAggregateInput
    _avg?: BudgetRuleAvgOrderByAggregateInput
    _max?: BudgetRuleMaxOrderByAggregateInput
    _min?: BudgetRuleMinOrderByAggregateInput
    _sum?: BudgetRuleSumOrderByAggregateInput
  }

  export type BudgetRuleScalarWhereWithAggregatesInput = {
    AND?: BudgetRuleScalarWhereWithAggregatesInput | BudgetRuleScalarWhereWithAggregatesInput[]
    OR?: BudgetRuleScalarWhereWithAggregatesInput[]
    NOT?: BudgetRuleScalarWhereWithAggregatesInput | BudgetRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BudgetRule"> | string
    userId?: StringWithAggregatesFilter<"BudgetRule"> | string
    category?: StringWithAggregatesFilter<"BudgetRule"> | string
    monthlyCap?: DecimalWithAggregatesFilter<"BudgetRule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"BudgetRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BudgetRule"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    targetAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    progressAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetAmount?: SortOrder
    targetDate?: SortOrder
    progressAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    targetAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    progressAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetAmount?: SortOrder
    targetDate?: SortOrder
    progressAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    type?: EnumGoalTypeWithAggregatesFilter<"Goal"> | $Enums.GoalType
    targetAmount?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    progressAmount?: DecimalWithAggregatesFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type InsightCacheWhereInput = {
    AND?: InsightCacheWhereInput | InsightCacheWhereInput[]
    OR?: InsightCacheWhereInput[]
    NOT?: InsightCacheWhereInput | InsightCacheWhereInput[]
    id?: StringFilter<"InsightCache"> | string
    userId?: StringFilter<"InsightCache"> | string
    kind?: EnumInsightKindFilter<"InsightCache"> | $Enums.InsightKind
    payload?: JsonFilter<"InsightCache">
    expiresAt?: DateTimeFilter<"InsightCache"> | Date | string
    createdAt?: DateTimeFilter<"InsightCache"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type InsightCacheOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    payload?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InsightCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InsightCacheWhereInput | InsightCacheWhereInput[]
    OR?: InsightCacheWhereInput[]
    NOT?: InsightCacheWhereInput | InsightCacheWhereInput[]
    userId?: StringFilter<"InsightCache"> | string
    kind?: EnumInsightKindFilter<"InsightCache"> | $Enums.InsightKind
    payload?: JsonFilter<"InsightCache">
    expiresAt?: DateTimeFilter<"InsightCache"> | Date | string
    createdAt?: DateTimeFilter<"InsightCache"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type InsightCacheOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    payload?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: InsightCacheCountOrderByAggregateInput
    _max?: InsightCacheMaxOrderByAggregateInput
    _min?: InsightCacheMinOrderByAggregateInput
  }

  export type InsightCacheScalarWhereWithAggregatesInput = {
    AND?: InsightCacheScalarWhereWithAggregatesInput | InsightCacheScalarWhereWithAggregatesInput[]
    OR?: InsightCacheScalarWhereWithAggregatesInput[]
    NOT?: InsightCacheScalarWhereWithAggregatesInput | InsightCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InsightCache"> | string
    userId?: StringWithAggregatesFilter<"InsightCache"> | string
    kind?: EnumInsightKindWithAggregatesFilter<"InsightCache"> | $Enums.InsightKind
    payload?: JsonWithAggregatesFilter<"InsightCache">
    expiresAt?: DateTimeWithAggregatesFilter<"InsightCache"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"InsightCache"> | Date | string
  }

  export type PlaidAccountWhereInput = {
    AND?: PlaidAccountWhereInput | PlaidAccountWhereInput[]
    OR?: PlaidAccountWhereInput[]
    NOT?: PlaidAccountWhereInput | PlaidAccountWhereInput[]
    id?: StringFilter<"PlaidAccount"> | string
    userId?: StringFilter<"PlaidAccount"> | string
    plaidAccountId?: StringFilter<"PlaidAccount"> | string
    plaidItemId?: StringFilter<"PlaidAccount"> | string
    name?: StringFilter<"PlaidAccount"> | string
    officialName?: StringNullableFilter<"PlaidAccount"> | string | null
    type?: StringFilter<"PlaidAccount"> | string
    subtype?: StringNullableFilter<"PlaidAccount"> | string | null
    mask?: StringNullableFilter<"PlaidAccount"> | string | null
    institutionName?: StringFilter<"PlaidAccount"> | string
    institutionLogo?: StringNullableFilter<"PlaidAccount"> | string | null
    currentBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    limit?: DecimalNullableFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    isActive?: BoolFilter<"PlaidAccount"> | boolean
    createdAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type PlaidAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidItemId?: SortOrder
    name?: SortOrder
    officialName?: SortOrderInput | SortOrder
    type?: SortOrder
    subtype?: SortOrderInput | SortOrder
    mask?: SortOrderInput | SortOrder
    institutionName?: SortOrder
    institutionLogo?: SortOrderInput | SortOrder
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type PlaidAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plaidAccountId?: string
    AND?: PlaidAccountWhereInput | PlaidAccountWhereInput[]
    OR?: PlaidAccountWhereInput[]
    NOT?: PlaidAccountWhereInput | PlaidAccountWhereInput[]
    userId?: StringFilter<"PlaidAccount"> | string
    plaidItemId?: StringFilter<"PlaidAccount"> | string
    name?: StringFilter<"PlaidAccount"> | string
    officialName?: StringNullableFilter<"PlaidAccount"> | string | null
    type?: StringFilter<"PlaidAccount"> | string
    subtype?: StringNullableFilter<"PlaidAccount"> | string | null
    mask?: StringNullableFilter<"PlaidAccount"> | string | null
    institutionName?: StringFilter<"PlaidAccount"> | string
    institutionLogo?: StringNullableFilter<"PlaidAccount"> | string | null
    currentBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    limit?: DecimalNullableFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    isActive?: BoolFilter<"PlaidAccount"> | boolean
    createdAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "plaidAccountId">

  export type PlaidAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidItemId?: SortOrder
    name?: SortOrder
    officialName?: SortOrderInput | SortOrder
    type?: SortOrder
    subtype?: SortOrderInput | SortOrder
    mask?: SortOrderInput | SortOrder
    institutionName?: SortOrder
    institutionLogo?: SortOrderInput | SortOrder
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrderInput | SortOrder
    lastSyncAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaidAccountCountOrderByAggregateInput
    _avg?: PlaidAccountAvgOrderByAggregateInput
    _max?: PlaidAccountMaxOrderByAggregateInput
    _min?: PlaidAccountMinOrderByAggregateInput
    _sum?: PlaidAccountSumOrderByAggregateInput
  }

  export type PlaidAccountScalarWhereWithAggregatesInput = {
    AND?: PlaidAccountScalarWhereWithAggregatesInput | PlaidAccountScalarWhereWithAggregatesInput[]
    OR?: PlaidAccountScalarWhereWithAggregatesInput[]
    NOT?: PlaidAccountScalarWhereWithAggregatesInput | PlaidAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaidAccount"> | string
    userId?: StringWithAggregatesFilter<"PlaidAccount"> | string
    plaidAccountId?: StringWithAggregatesFilter<"PlaidAccount"> | string
    plaidItemId?: StringWithAggregatesFilter<"PlaidAccount"> | string
    name?: StringWithAggregatesFilter<"PlaidAccount"> | string
    officialName?: StringNullableWithAggregatesFilter<"PlaidAccount"> | string | null
    type?: StringWithAggregatesFilter<"PlaidAccount"> | string
    subtype?: StringNullableWithAggregatesFilter<"PlaidAccount"> | string | null
    mask?: StringNullableWithAggregatesFilter<"PlaidAccount"> | string | null
    institutionName?: StringWithAggregatesFilter<"PlaidAccount"> | string
    institutionLogo?: StringNullableWithAggregatesFilter<"PlaidAccount"> | string | null
    currentBalance?: DecimalWithAggregatesFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalWithAggregatesFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    limit?: DecimalNullableWithAggregatesFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeWithAggregatesFilter<"PlaidAccount"> | Date | string
    isActive?: BoolWithAggregatesFilter<"PlaidAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlaidAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlaidAccount"> | Date | string
  }

  export type AIInsightWhereInput = {
    AND?: AIInsightWhereInput | AIInsightWhereInput[]
    OR?: AIInsightWhereInput[]
    NOT?: AIInsightWhereInput | AIInsightWhereInput[]
    id?: StringFilter<"AIInsight"> | string
    userId?: StringFilter<"AIInsight"> | string
    type?: EnumAIInsightTypeFilter<"AIInsight"> | $Enums.AIInsightType
    title?: StringFilter<"AIInsight"> | string
    message?: StringFilter<"AIInsight"> | string
    actionRequired?: BoolFilter<"AIInsight"> | boolean
    actionType?: StringNullableFilter<"AIInsight"> | string | null
    actionData?: JsonNullableFilter<"AIInsight">
    priority?: EnumAIInsightPriorityFilter<"AIInsight"> | $Enums.AIInsightPriority
    isRead?: BoolFilter<"AIInsight"> | boolean
    expiresAt?: DateTimeNullableFilter<"AIInsight"> | Date | string | null
    createdAt?: DateTimeFilter<"AIInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AIInsight"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AIInsightOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    actionType?: SortOrderInput | SortOrder
    actionData?: SortOrderInput | SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AIInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIInsightWhereInput | AIInsightWhereInput[]
    OR?: AIInsightWhereInput[]
    NOT?: AIInsightWhereInput | AIInsightWhereInput[]
    userId?: StringFilter<"AIInsight"> | string
    type?: EnumAIInsightTypeFilter<"AIInsight"> | $Enums.AIInsightType
    title?: StringFilter<"AIInsight"> | string
    message?: StringFilter<"AIInsight"> | string
    actionRequired?: BoolFilter<"AIInsight"> | boolean
    actionType?: StringNullableFilter<"AIInsight"> | string | null
    actionData?: JsonNullableFilter<"AIInsight">
    priority?: EnumAIInsightPriorityFilter<"AIInsight"> | $Enums.AIInsightPriority
    isRead?: BoolFilter<"AIInsight"> | boolean
    expiresAt?: DateTimeNullableFilter<"AIInsight"> | Date | string | null
    createdAt?: DateTimeFilter<"AIInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AIInsight"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AIInsightOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    actionType?: SortOrderInput | SortOrder
    actionData?: SortOrderInput | SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIInsightCountOrderByAggregateInput
    _max?: AIInsightMaxOrderByAggregateInput
    _min?: AIInsightMinOrderByAggregateInput
  }

  export type AIInsightScalarWhereWithAggregatesInput = {
    AND?: AIInsightScalarWhereWithAggregatesInput | AIInsightScalarWhereWithAggregatesInput[]
    OR?: AIInsightScalarWhereWithAggregatesInput[]
    NOT?: AIInsightScalarWhereWithAggregatesInput | AIInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIInsight"> | string
    userId?: StringWithAggregatesFilter<"AIInsight"> | string
    type?: EnumAIInsightTypeWithAggregatesFilter<"AIInsight"> | $Enums.AIInsightType
    title?: StringWithAggregatesFilter<"AIInsight"> | string
    message?: StringWithAggregatesFilter<"AIInsight"> | string
    actionRequired?: BoolWithAggregatesFilter<"AIInsight"> | boolean
    actionType?: StringNullableWithAggregatesFilter<"AIInsight"> | string | null
    actionData?: JsonNullableWithAggregatesFilter<"AIInsight">
    priority?: EnumAIInsightPriorityWithAggregatesFilter<"AIInsight"> | $Enums.AIInsightPriority
    isRead?: BoolWithAggregatesFilter<"AIInsight"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"AIInsight"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AIInsight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIInsight"> | Date | string
  }

  export type AutomationRuleWhereInput = {
    AND?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    OR?: AutomationRuleWhereInput[]
    NOT?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    id?: StringFilter<"AutomationRule"> | string
    userId?: StringFilter<"AutomationRule"> | string
    name?: StringFilter<"AutomationRule"> | string
    description?: StringNullableFilter<"AutomationRule"> | string | null
    triggerType?: EnumAutomationTriggerTypeFilter<"AutomationRule"> | $Enums.AutomationTriggerType
    triggerData?: JsonFilter<"AutomationRule">
    actionType?: EnumAutomationActionTypeFilter<"AutomationRule"> | $Enums.AutomationActionType
    actionData?: JsonFilter<"AutomationRule">
    isActive?: BoolFilter<"AutomationRule"> | boolean
    lastExecutedAt?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
    executionCount?: IntFilter<"AutomationRule"> | number
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AutomationRuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    triggerType?: SortOrder
    triggerData?: SortOrder
    actionType?: SortOrder
    actionData?: SortOrder
    isActive?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    executionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AutomationRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    OR?: AutomationRuleWhereInput[]
    NOT?: AutomationRuleWhereInput | AutomationRuleWhereInput[]
    userId?: StringFilter<"AutomationRule"> | string
    name?: StringFilter<"AutomationRule"> | string
    description?: StringNullableFilter<"AutomationRule"> | string | null
    triggerType?: EnumAutomationTriggerTypeFilter<"AutomationRule"> | $Enums.AutomationTriggerType
    triggerData?: JsonFilter<"AutomationRule">
    actionType?: EnumAutomationActionTypeFilter<"AutomationRule"> | $Enums.AutomationActionType
    actionData?: JsonFilter<"AutomationRule">
    isActive?: BoolFilter<"AutomationRule"> | boolean
    lastExecutedAt?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
    executionCount?: IntFilter<"AutomationRule"> | number
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AutomationRuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    triggerType?: SortOrder
    triggerData?: SortOrder
    actionType?: SortOrder
    actionData?: SortOrder
    isActive?: SortOrder
    lastExecutedAt?: SortOrderInput | SortOrder
    executionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationRuleCountOrderByAggregateInput
    _avg?: AutomationRuleAvgOrderByAggregateInput
    _max?: AutomationRuleMaxOrderByAggregateInput
    _min?: AutomationRuleMinOrderByAggregateInput
    _sum?: AutomationRuleSumOrderByAggregateInput
  }

  export type AutomationRuleScalarWhereWithAggregatesInput = {
    AND?: AutomationRuleScalarWhereWithAggregatesInput | AutomationRuleScalarWhereWithAggregatesInput[]
    OR?: AutomationRuleScalarWhereWithAggregatesInput[]
    NOT?: AutomationRuleScalarWhereWithAggregatesInput | AutomationRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomationRule"> | string
    userId?: StringWithAggregatesFilter<"AutomationRule"> | string
    name?: StringWithAggregatesFilter<"AutomationRule"> | string
    description?: StringNullableWithAggregatesFilter<"AutomationRule"> | string | null
    triggerType?: EnumAutomationTriggerTypeWithAggregatesFilter<"AutomationRule"> | $Enums.AutomationTriggerType
    triggerData?: JsonWithAggregatesFilter<"AutomationRule">
    actionType?: EnumAutomationActionTypeWithAggregatesFilter<"AutomationRule"> | $Enums.AutomationActionType
    actionData?: JsonWithAggregatesFilter<"AutomationRule">
    isActive?: BoolWithAggregatesFilter<"AutomationRule"> | boolean
    lastExecutedAt?: DateTimeNullableWithAggregatesFilter<"AutomationRule"> | Date | string | null
    executionCount?: IntWithAggregatesFilter<"AutomationRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutomationRule"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    response?: StringFilter<"ChatMessage"> | string
    context?: JsonNullableFilter<"ChatMessage">
    messageType?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    isAI?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    response?: SortOrder
    context?: SortOrderInput | SortOrder
    messageType?: SortOrder
    isAI?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    response?: StringFilter<"ChatMessage"> | string
    context?: JsonNullableFilter<"ChatMessage">
    messageType?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    isAI?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    response?: SortOrder
    context?: SortOrderInput | SortOrder
    messageType?: SortOrder
    isAI?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    userId?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    response?: StringWithAggregatesFilter<"ChatMessage"> | string
    context?: JsonNullableWithAggregatesFilter<"ChatMessage">
    messageType?: EnumChatMessageTypeWithAggregatesFilter<"ChatMessage"> | $Enums.ChatMessageType
    isAI?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    riskTolerance?: EnumRiskToleranceFilter<"UserPreferences"> | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFilter<"UserPreferences"> | $Enums.AutomationLevel
    notificationPreferences?: JsonNullableFilter<"UserPreferences">
    aiPersonality?: StringNullableFilter<"UserPreferences"> | string | null
    aiResponseStyle?: StringNullableFilter<"UserPreferences"> | string | null
    theme?: StringNullableFilter<"UserPreferences"> | string | null
    tutorialCompleted?: BoolFilter<"UserPreferences"> | boolean
    tutorialPosition?: JsonNullableFilter<"UserPreferences">
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskTolerance?: SortOrder
    automationLevel?: SortOrder
    notificationPreferences?: SortOrderInput | SortOrder
    aiPersonality?: SortOrderInput | SortOrder
    aiResponseStyle?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    tutorialCompleted?: SortOrder
    tutorialPosition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    riskTolerance?: EnumRiskToleranceFilter<"UserPreferences"> | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFilter<"UserPreferences"> | $Enums.AutomationLevel
    notificationPreferences?: JsonNullableFilter<"UserPreferences">
    aiPersonality?: StringNullableFilter<"UserPreferences"> | string | null
    aiResponseStyle?: StringNullableFilter<"UserPreferences"> | string | null
    theme?: StringNullableFilter<"UserPreferences"> | string | null
    tutorialCompleted?: BoolFilter<"UserPreferences"> | boolean
    tutorialPosition?: JsonNullableFilter<"UserPreferences">
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskTolerance?: SortOrder
    automationLevel?: SortOrder
    notificationPreferences?: SortOrderInput | SortOrder
    aiPersonality?: SortOrderInput | SortOrder
    aiResponseStyle?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    tutorialCompleted?: SortOrder
    tutorialPosition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    riskTolerance?: EnumRiskToleranceWithAggregatesFilter<"UserPreferences"> | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelWithAggregatesFilter<"UserPreferences"> | $Enums.AutomationLevel
    notificationPreferences?: JsonNullableWithAggregatesFilter<"UserPreferences">
    aiPersonality?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    aiResponseStyle?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    theme?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    tutorialCompleted?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    tutorialPosition?: JsonNullableWithAggregatesFilter<"UserPreferences">
    createdAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    id?: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectionsInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    plaidAccount?: PlaidAccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    plaidAccountId?: string | null
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    plaidAccount?: PlaidAccountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    plaidAccountId?: string | null
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleCreateInput = {
    id?: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBudgetRulesInput
  }

  export type BudgetRuleUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBudgetRulesNestedInput
  }

  export type BudgetRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleCreateManyInput = {
    id?: string
    userId: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheCreateInput = {
    id?: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInsightCachesInput
  }

  export type InsightCacheUncheckedCreateInput = {
    id?: string
    userId: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InsightCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInsightCachesNestedInput
  }

  export type InsightCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheCreateManyInput = {
    id?: string
    userId: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InsightCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaidAccountCreateInput = {
    id?: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaidAccountsInput
    transactions?: TransactionCreateNestedManyWithoutPlaidAccountInput
  }

  export type PlaidAccountUncheckedCreateInput = {
    id?: string
    userId: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPlaidAccountInput
  }

  export type PlaidAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaidAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutPlaidAccountNestedInput
  }

  export type PlaidAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutPlaidAccountNestedInput
  }

  export type PlaidAccountCreateManyInput = {
    id?: string
    userId: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaidAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaidAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightCreateInput = {
    id?: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAiInsightsInput
  }

  export type AIInsightUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiInsightsNestedInput
  }

  export type AIInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleCreateInput = {
    id?: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAutomationRulesInput
  }

  export type AutomationRuleUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAutomationRulesNestedInput
  }

  export type AutomationRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    userId: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type BudgetRuleListRelationFilter = {
    every?: BudgetRuleWhereInput
    some?: BudgetRuleWhereInput
    none?: BudgetRuleWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type InsightCacheListRelationFilter = {
    every?: InsightCacheWhereInput
    some?: InsightCacheWhereInput
    none?: InsightCacheWhereInput
  }

  export type PlaidAccountListRelationFilter = {
    every?: PlaidAccountWhereInput
    some?: PlaidAccountWhereInput
    none?: PlaidAccountWhereInput
  }

  export type AIInsightListRelationFilter = {
    every?: AIInsightWhereInput
    some?: AIInsightWhereInput
    none?: AIInsightWhereInput
  }

  export type AutomationRuleListRelationFilter = {
    every?: AutomationRuleWhereInput
    some?: AutomationRuleWhereInput
    none?: AutomationRuleWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type UserPreferencesListRelationFilter = {
    every?: UserPreferencesWhereInput
    some?: UserPreferencesWhereInput
    none?: UserPreferencesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsightCacheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaidAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    twoFactorEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type EnumConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeFilter<$PrismaModel> | $Enums.ConnectionType
  }

  export type EnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectionTypeFilter<$PrismaModel>
  }

  export type EnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PlaidAccountNullableRelationFilter = {
    is?: PlaidAccountWhereInput | null
    isNot?: PlaidAccountWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidTransactionId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    merchant?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    source?: SortOrder
    isRecurring?: SortOrder
    recurringGroupId?: SortOrder
    notes?: SortOrder
    aiCategorized?: SortOrder
    aiCategory?: SortOrder
    aiConfidence?: SortOrder
    isPending?: SortOrder
    location?: SortOrder
    paymentChannel?: SortOrder
    transactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    aiConfidence?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidTransactionId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    merchant?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    source?: SortOrder
    isRecurring?: SortOrder
    recurringGroupId?: SortOrder
    notes?: SortOrder
    aiCategorized?: SortOrder
    aiCategory?: SortOrder
    aiConfidence?: SortOrder
    isPending?: SortOrder
    paymentChannel?: SortOrder
    transactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidTransactionId?: SortOrder
    date?: SortOrder
    amount?: SortOrder
    merchant?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    source?: SortOrder
    isRecurring?: SortOrder
    recurringGroupId?: SortOrder
    notes?: SortOrder
    aiCategorized?: SortOrder
    aiCategory?: SortOrder
    aiConfidence?: SortOrder
    isPending?: SortOrder
    paymentChannel?: SortOrder
    transactionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    aiConfidence?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BudgetRuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    monthlyCap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetRuleAvgOrderByAggregateInput = {
    monthlyCap?: SortOrder
  }

  export type BudgetRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    monthlyCap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetRuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    monthlyCap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetRuleSumOrderByAggregateInput = {
    monthlyCap?: SortOrder
  }

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetAmount?: SortOrder
    targetDate?: SortOrder
    progressAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    progressAmount?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetAmount?: SortOrder
    targetDate?: SortOrder
    progressAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetAmount?: SortOrder
    targetDate?: SortOrder
    progressAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    progressAmount?: SortOrder
  }

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type EnumInsightKindFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightKind | EnumInsightKindFieldRefInput<$PrismaModel>
    in?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightKindFilter<$PrismaModel> | $Enums.InsightKind
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InsightCacheCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    payload?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightCacheMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kind?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInsightKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightKind | EnumInsightKindFieldRefInput<$PrismaModel>
    in?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightKindWithAggregatesFilter<$PrismaModel> | $Enums.InsightKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsightKindFilter<$PrismaModel>
    _max?: NestedEnumInsightKindFilter<$PrismaModel>
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PlaidAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidItemId?: SortOrder
    name?: SortOrder
    officialName?: SortOrder
    type?: SortOrder
    subtype?: SortOrder
    mask?: SortOrder
    institutionName?: SortOrder
    institutionLogo?: SortOrder
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrder
    lastSyncAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaidAccountAvgOrderByAggregateInput = {
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrder
  }

  export type PlaidAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidItemId?: SortOrder
    name?: SortOrder
    officialName?: SortOrder
    type?: SortOrder
    subtype?: SortOrder
    mask?: SortOrder
    institutionName?: SortOrder
    institutionLogo?: SortOrder
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrder
    lastSyncAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaidAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plaidAccountId?: SortOrder
    plaidItemId?: SortOrder
    name?: SortOrder
    officialName?: SortOrder
    type?: SortOrder
    subtype?: SortOrder
    mask?: SortOrder
    institutionName?: SortOrder
    institutionLogo?: SortOrder
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrder
    lastSyncAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaidAccountSumOrderByAggregateInput = {
    currentBalance?: SortOrder
    availableBalance?: SortOrder
    limit?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type EnumAIInsightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightType | EnumAIInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightTypeFilter<$PrismaModel> | $Enums.AIInsightType
  }

  export type EnumAIInsightPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightPriority | EnumAIInsightPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightPriorityFilter<$PrismaModel> | $Enums.AIInsightPriority
  }

  export type AIInsightCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    actionType?: SortOrder
    actionData?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    actionType?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIInsightMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    actionType?: SortOrder
    priority?: SortOrder
    isRead?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAIInsightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightType | EnumAIInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIInsightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIInsightTypeFilter<$PrismaModel>
    _max?: NestedEnumAIInsightTypeFilter<$PrismaModel>
  }

  export type EnumAIInsightPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightPriority | EnumAIInsightPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightPriorityWithAggregatesFilter<$PrismaModel> | $Enums.AIInsightPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIInsightPriorityFilter<$PrismaModel>
    _max?: NestedEnumAIInsightPriorityFilter<$PrismaModel>
  }

  export type EnumAutomationTriggerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationTriggerType | EnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel> | $Enums.AutomationTriggerType
  }

  export type EnumAutomationActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationActionType | EnumAutomationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationActionTypeFilter<$PrismaModel> | $Enums.AutomationActionType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AutomationRuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    triggerType?: SortOrder
    triggerData?: SortOrder
    actionType?: SortOrder
    actionData?: SortOrder
    isActive?: SortOrder
    lastExecutedAt?: SortOrder
    executionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationRuleAvgOrderByAggregateInput = {
    executionCount?: SortOrder
  }

  export type AutomationRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    triggerType?: SortOrder
    actionType?: SortOrder
    isActive?: SortOrder
    lastExecutedAt?: SortOrder
    executionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationRuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    triggerType?: SortOrder
    actionType?: SortOrder
    isActive?: SortOrder
    lastExecutedAt?: SortOrder
    executionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationRuleSumOrderByAggregateInput = {
    executionCount?: SortOrder
  }

  export type EnumAutomationTriggerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationTriggerType | EnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationTriggerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationTriggerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel>
  }

  export type EnumAutomationActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationActionType | EnumAutomationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationActionTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationActionTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumChatMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatMessageTypeFilter<$PrismaModel> | $Enums.ChatMessageType
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    response?: SortOrder
    context?: SortOrder
    messageType?: SortOrder
    isAI?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    response?: SortOrder
    messageType?: SortOrder
    isAI?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    response?: SortOrder
    messageType?: SortOrder
    isAI?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChatMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumChatMessageTypeFilter<$PrismaModel>
  }

  export type EnumRiskToleranceFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel>
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskToleranceFilter<$PrismaModel> | $Enums.RiskTolerance
  }

  export type EnumAutomationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationLevel | EnumAutomationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationLevelFilter<$PrismaModel> | $Enums.AutomationLevel
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskTolerance?: SortOrder
    automationLevel?: SortOrder
    notificationPreferences?: SortOrder
    aiPersonality?: SortOrder
    aiResponseStyle?: SortOrder
    theme?: SortOrder
    tutorialCompleted?: SortOrder
    tutorialPosition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskTolerance?: SortOrder
    automationLevel?: SortOrder
    aiPersonality?: SortOrder
    aiResponseStyle?: SortOrder
    theme?: SortOrder
    tutorialCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskTolerance?: SortOrder
    automationLevel?: SortOrder
    aiPersonality?: SortOrder
    aiResponseStyle?: SortOrder
    theme?: SortOrder
    tutorialCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRiskToleranceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel>
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskToleranceWithAggregatesFilter<$PrismaModel> | $Enums.RiskTolerance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskToleranceFilter<$PrismaModel>
    _max?: NestedEnumRiskToleranceFilter<$PrismaModel>
  }

  export type EnumAutomationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationLevel | EnumAutomationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationLevelWithAggregatesFilter<$PrismaModel> | $Enums.AutomationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationLevelFilter<$PrismaModel>
    _max?: NestedEnumAutomationLevelFilter<$PrismaModel>
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetRuleCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput> | BudgetRuleCreateWithoutUserInput[] | BudgetRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetRuleCreateOrConnectWithoutUserInput | BudgetRuleCreateOrConnectWithoutUserInput[]
    createMany?: BudgetRuleCreateManyUserInputEnvelope
    connect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type InsightCacheCreateNestedManyWithoutUserInput = {
    create?: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput> | InsightCacheCreateWithoutUserInput[] | InsightCacheUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InsightCacheCreateOrConnectWithoutUserInput | InsightCacheCreateOrConnectWithoutUserInput[]
    createMany?: InsightCacheCreateManyUserInputEnvelope
    connect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
  }

  export type PlaidAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput> | PlaidAccountCreateWithoutUserInput[] | PlaidAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutUserInput | PlaidAccountCreateOrConnectWithoutUserInput[]
    createMany?: PlaidAccountCreateManyUserInputEnvelope
    connect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
  }

  export type AIInsightCreateNestedManyWithoutUserInput = {
    create?: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput> | AIInsightCreateWithoutUserInput[] | AIInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutUserInput | AIInsightCreateOrConnectWithoutUserInput[]
    createMany?: AIInsightCreateManyUserInputEnvelope
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
  }

  export type AutomationRuleCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserPreferencesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput> | BudgetRuleCreateWithoutUserInput[] | BudgetRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetRuleCreateOrConnectWithoutUserInput | BudgetRuleCreateOrConnectWithoutUserInput[]
    createMany?: BudgetRuleCreateManyUserInputEnvelope
    connect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type InsightCacheUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput> | InsightCacheCreateWithoutUserInput[] | InsightCacheUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InsightCacheCreateOrConnectWithoutUserInput | InsightCacheCreateOrConnectWithoutUserInput[]
    createMany?: InsightCacheCreateManyUserInputEnvelope
    connect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
  }

  export type PlaidAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput> | PlaidAccountCreateWithoutUserInput[] | PlaidAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutUserInput | PlaidAccountCreateOrConnectWithoutUserInput[]
    createMany?: PlaidAccountCreateManyUserInputEnvelope
    connect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
  }

  export type AIInsightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput> | AIInsightCreateWithoutUserInput[] | AIInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutUserInput | AIInsightCreateOrConnectWithoutUserInput[]
    createMany?: AIInsightCreateManyUserInputEnvelope
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
  }

  export type AutomationRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetRuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput> | BudgetRuleCreateWithoutUserInput[] | BudgetRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetRuleCreateOrConnectWithoutUserInput | BudgetRuleCreateOrConnectWithoutUserInput[]
    upsert?: BudgetRuleUpsertWithWhereUniqueWithoutUserInput | BudgetRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetRuleCreateManyUserInputEnvelope
    set?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    disconnect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    delete?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    connect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    update?: BudgetRuleUpdateWithWhereUniqueWithoutUserInput | BudgetRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetRuleUpdateManyWithWhereWithoutUserInput | BudgetRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetRuleScalarWhereInput | BudgetRuleScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type InsightCacheUpdateManyWithoutUserNestedInput = {
    create?: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput> | InsightCacheCreateWithoutUserInput[] | InsightCacheUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InsightCacheCreateOrConnectWithoutUserInput | InsightCacheCreateOrConnectWithoutUserInput[]
    upsert?: InsightCacheUpsertWithWhereUniqueWithoutUserInput | InsightCacheUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InsightCacheCreateManyUserInputEnvelope
    set?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    disconnect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    delete?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    connect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    update?: InsightCacheUpdateWithWhereUniqueWithoutUserInput | InsightCacheUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InsightCacheUpdateManyWithWhereWithoutUserInput | InsightCacheUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InsightCacheScalarWhereInput | InsightCacheScalarWhereInput[]
  }

  export type PlaidAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput> | PlaidAccountCreateWithoutUserInput[] | PlaidAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutUserInput | PlaidAccountCreateOrConnectWithoutUserInput[]
    upsert?: PlaidAccountUpsertWithWhereUniqueWithoutUserInput | PlaidAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaidAccountCreateManyUserInputEnvelope
    set?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    disconnect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    delete?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    connect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    update?: PlaidAccountUpdateWithWhereUniqueWithoutUserInput | PlaidAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaidAccountUpdateManyWithWhereWithoutUserInput | PlaidAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaidAccountScalarWhereInput | PlaidAccountScalarWhereInput[]
  }

  export type AIInsightUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput> | AIInsightCreateWithoutUserInput[] | AIInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutUserInput | AIInsightCreateOrConnectWithoutUserInput[]
    upsert?: AIInsightUpsertWithWhereUniqueWithoutUserInput | AIInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIInsightCreateManyUserInputEnvelope
    set?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    disconnect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    delete?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    update?: AIInsightUpdateWithWhereUniqueWithoutUserInput | AIInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIInsightUpdateManyWithWhereWithoutUserInput | AIInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
  }

  export type AutomationRuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    upsert?: AutomationRuleUpsertWithWhereUniqueWithoutUserInput | AutomationRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    set?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    disconnect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    delete?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    update?: AutomationRuleUpdateWithWhereUniqueWithoutUserInput | AutomationRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationRuleUpdateManyWithWhereWithoutUserInput | AutomationRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserPreferencesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutUserInput | UserPreferencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutUserInput | UserPreferencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutUserInput | UserPreferencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput> | ConnectionCreateWithoutUserInput[] | ConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutUserInput | ConnectionCreateOrConnectWithoutUserInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutUserInput | ConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectionCreateManyUserInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutUserInput | ConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutUserInput | ConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput> | BudgetRuleCreateWithoutUserInput[] | BudgetRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BudgetRuleCreateOrConnectWithoutUserInput | BudgetRuleCreateOrConnectWithoutUserInput[]
    upsert?: BudgetRuleUpsertWithWhereUniqueWithoutUserInput | BudgetRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BudgetRuleCreateManyUserInputEnvelope
    set?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    disconnect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    delete?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    connect?: BudgetRuleWhereUniqueInput | BudgetRuleWhereUniqueInput[]
    update?: BudgetRuleUpdateWithWhereUniqueWithoutUserInput | BudgetRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BudgetRuleUpdateManyWithWhereWithoutUserInput | BudgetRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BudgetRuleScalarWhereInput | BudgetRuleScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type InsightCacheUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput> | InsightCacheCreateWithoutUserInput[] | InsightCacheUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InsightCacheCreateOrConnectWithoutUserInput | InsightCacheCreateOrConnectWithoutUserInput[]
    upsert?: InsightCacheUpsertWithWhereUniqueWithoutUserInput | InsightCacheUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InsightCacheCreateManyUserInputEnvelope
    set?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    disconnect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    delete?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    connect?: InsightCacheWhereUniqueInput | InsightCacheWhereUniqueInput[]
    update?: InsightCacheUpdateWithWhereUniqueWithoutUserInput | InsightCacheUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InsightCacheUpdateManyWithWhereWithoutUserInput | InsightCacheUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InsightCacheScalarWhereInput | InsightCacheScalarWhereInput[]
  }

  export type PlaidAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput> | PlaidAccountCreateWithoutUserInput[] | PlaidAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutUserInput | PlaidAccountCreateOrConnectWithoutUserInput[]
    upsert?: PlaidAccountUpsertWithWhereUniqueWithoutUserInput | PlaidAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaidAccountCreateManyUserInputEnvelope
    set?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    disconnect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    delete?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    connect?: PlaidAccountWhereUniqueInput | PlaidAccountWhereUniqueInput[]
    update?: PlaidAccountUpdateWithWhereUniqueWithoutUserInput | PlaidAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaidAccountUpdateManyWithWhereWithoutUserInput | PlaidAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaidAccountScalarWhereInput | PlaidAccountScalarWhereInput[]
  }

  export type AIInsightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput> | AIInsightCreateWithoutUserInput[] | AIInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutUserInput | AIInsightCreateOrConnectWithoutUserInput[]
    upsert?: AIInsightUpsertWithWhereUniqueWithoutUserInput | AIInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIInsightCreateManyUserInputEnvelope
    set?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    disconnect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    delete?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    update?: AIInsightUpdateWithWhereUniqueWithoutUserInput | AIInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIInsightUpdateManyWithWhereWithoutUserInput | AIInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
  }

  export type AutomationRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput> | AutomationRuleCreateWithoutUserInput[] | AutomationRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationRuleCreateOrConnectWithoutUserInput | AutomationRuleCreateOrConnectWithoutUserInput[]
    upsert?: AutomationRuleUpsertWithWhereUniqueWithoutUserInput | AutomationRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationRuleCreateManyUserInputEnvelope
    set?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    disconnect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    delete?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    connect?: AutomationRuleWhereUniqueInput | AutomationRuleWhereUniqueInput[]
    update?: AutomationRuleUpdateWithWhereUniqueWithoutUserInput | AutomationRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationRuleUpdateManyWithWhereWithoutUserInput | AutomationRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput> | UserPreferencesCreateWithoutUserInput[] | UserPreferencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput | UserPreferencesCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferencesUpsertWithWhereUniqueWithoutUserInput | UserPreferencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferencesCreateManyUserInputEnvelope
    set?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    disconnect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    delete?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    connect?: UserPreferencesWhereUniqueInput | UserPreferencesWhereUniqueInput[]
    update?: UserPreferencesUpdateWithWhereUniqueWithoutUserInput | UserPreferencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferencesUpdateManyWithWhereWithoutUserInput | UserPreferencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConnectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConnectionType
  }

  export type EnumConnectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConnectionStatus
  }

  export type UserUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput
    upsert?: UserUpsertWithoutConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectionsInput, UserUpdateWithoutConnectionsInput>, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaidAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PlaidAccountCreateWithoutTransactionsInput, PlaidAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutTransactionsInput
    connect?: PlaidAccountWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type PlaidAccountUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<PlaidAccountCreateWithoutTransactionsInput, PlaidAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PlaidAccountCreateOrConnectWithoutTransactionsInput
    upsert?: PlaidAccountUpsertWithoutTransactionsInput
    disconnect?: PlaidAccountWhereInput | boolean
    delete?: PlaidAccountWhereInput | boolean
    connect?: PlaidAccountWhereUniqueInput
    update?: XOR<XOR<PlaidAccountUpdateToOneWithWhereWithoutTransactionsInput, PlaidAccountUpdateWithoutTransactionsInput>, PlaidAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutBudgetRulesInput = {
    create?: XOR<UserCreateWithoutBudgetRulesInput, UserUncheckedCreateWithoutBudgetRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetRulesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBudgetRulesNestedInput = {
    create?: XOR<UserCreateWithoutBudgetRulesInput, UserUncheckedCreateWithoutBudgetRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBudgetRulesInput
    upsert?: UserUpsertWithoutBudgetRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBudgetRulesInput, UserUpdateWithoutBudgetRulesInput>, UserUncheckedUpdateWithoutBudgetRulesInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutInsightCachesInput = {
    create?: XOR<UserCreateWithoutInsightCachesInput, UserUncheckedCreateWithoutInsightCachesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInsightCachesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInsightKindFieldUpdateOperationsInput = {
    set?: $Enums.InsightKind
  }

  export type UserUpdateOneRequiredWithoutInsightCachesNestedInput = {
    create?: XOR<UserCreateWithoutInsightCachesInput, UserUncheckedCreateWithoutInsightCachesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInsightCachesInput
    upsert?: UserUpsertWithoutInsightCachesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInsightCachesInput, UserUpdateWithoutInsightCachesInput>, UserUncheckedUpdateWithoutInsightCachesInput>
  }

  export type UserCreateNestedOneWithoutPlaidAccountsInput = {
    create?: XOR<UserCreateWithoutPlaidAccountsInput, UserUncheckedCreateWithoutPlaidAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaidAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutPlaidAccountInput = {
    create?: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput> | TransactionCreateWithoutPlaidAccountInput[] | TransactionUncheckedCreateWithoutPlaidAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPlaidAccountInput | TransactionCreateOrConnectWithoutPlaidAccountInput[]
    createMany?: TransactionCreateManyPlaidAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPlaidAccountInput = {
    create?: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput> | TransactionCreateWithoutPlaidAccountInput[] | TransactionUncheckedCreateWithoutPlaidAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPlaidAccountInput | TransactionCreateOrConnectWithoutPlaidAccountInput[]
    createMany?: TransactionCreateManyPlaidAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutPlaidAccountsNestedInput = {
    create?: XOR<UserCreateWithoutPlaidAccountsInput, UserUncheckedCreateWithoutPlaidAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaidAccountsInput
    upsert?: UserUpsertWithoutPlaidAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaidAccountsInput, UserUpdateWithoutPlaidAccountsInput>, UserUncheckedUpdateWithoutPlaidAccountsInput>
  }

  export type TransactionUpdateManyWithoutPlaidAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput> | TransactionCreateWithoutPlaidAccountInput[] | TransactionUncheckedCreateWithoutPlaidAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPlaidAccountInput | TransactionCreateOrConnectWithoutPlaidAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPlaidAccountInput | TransactionUpsertWithWhereUniqueWithoutPlaidAccountInput[]
    createMany?: TransactionCreateManyPlaidAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPlaidAccountInput | TransactionUpdateWithWhereUniqueWithoutPlaidAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPlaidAccountInput | TransactionUpdateManyWithWhereWithoutPlaidAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPlaidAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput> | TransactionCreateWithoutPlaidAccountInput[] | TransactionUncheckedCreateWithoutPlaidAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPlaidAccountInput | TransactionCreateOrConnectWithoutPlaidAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPlaidAccountInput | TransactionUpsertWithWhereUniqueWithoutPlaidAccountInput[]
    createMany?: TransactionCreateManyPlaidAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPlaidAccountInput | TransactionUpdateWithWhereUniqueWithoutPlaidAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPlaidAccountInput | TransactionUpdateManyWithWhereWithoutPlaidAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAiInsightsInput = {
    create?: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInsightsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAIInsightTypeFieldUpdateOperationsInput = {
    set?: $Enums.AIInsightType
  }

  export type EnumAIInsightPriorityFieldUpdateOperationsInput = {
    set?: $Enums.AIInsightPriority
  }

  export type UserUpdateOneRequiredWithoutAiInsightsNestedInput = {
    create?: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInsightsInput
    upsert?: UserUpsertWithoutAiInsightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiInsightsInput, UserUpdateWithoutAiInsightsInput>, UserUncheckedUpdateWithoutAiInsightsInput>
  }

  export type UserCreateNestedOneWithoutAutomationRulesInput = {
    create?: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationRulesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAutomationTriggerTypeFieldUpdateOperationsInput = {
    set?: $Enums.AutomationTriggerType
  }

  export type EnumAutomationActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AutomationActionType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAutomationRulesNestedInput = {
    create?: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationRulesInput
    upsert?: UserUpsertWithoutAutomationRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutomationRulesInput, UserUpdateWithoutAutomationRulesInput>, UserUncheckedUpdateWithoutAutomationRulesInput>
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumChatMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChatMessageType
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserCreateNestedOneWithoutUserPreferencesInput = {
    create?: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRiskToleranceFieldUpdateOperationsInput = {
    set?: $Enums.RiskTolerance
  }

  export type EnumAutomationLevelFieldUpdateOperationsInput = {
    set?: $Enums.AutomationLevel
  }

  export type UserUpdateOneRequiredWithoutUserPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPreferencesInput
    upsert?: UserUpsertWithoutUserPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPreferencesInput, UserUpdateWithoutUserPreferencesInput>, UserUncheckedUpdateWithoutUserPreferencesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type NestedEnumConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeFilter<$PrismaModel> | $Enums.ConnectionType
  }

  export type NestedEnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }

  export type NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectionTypeFilter<$PrismaModel>
  }

  export type NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalType[] | ListEnumGoalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type NestedEnumInsightKindFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightKind | EnumInsightKindFieldRefInput<$PrismaModel>
    in?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightKindFilter<$PrismaModel> | $Enums.InsightKind
  }

  export type NestedEnumInsightKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightKind | EnumInsightKindFieldRefInput<$PrismaModel>
    in?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightKind[] | ListEnumInsightKindFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightKindWithAggregatesFilter<$PrismaModel> | $Enums.InsightKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsightKindFilter<$PrismaModel>
    _max?: NestedEnumInsightKindFilter<$PrismaModel>
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumAIInsightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightType | EnumAIInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightTypeFilter<$PrismaModel> | $Enums.AIInsightType
  }

  export type NestedEnumAIInsightPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightPriority | EnumAIInsightPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightPriorityFilter<$PrismaModel> | $Enums.AIInsightPriority
  }

  export type NestedEnumAIInsightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightType | EnumAIInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightType[] | ListEnumAIInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightTypeWithAggregatesFilter<$PrismaModel> | $Enums.AIInsightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIInsightTypeFilter<$PrismaModel>
    _max?: NestedEnumAIInsightTypeFilter<$PrismaModel>
  }

  export type NestedEnumAIInsightPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIInsightPriority | EnumAIInsightPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIInsightPriority[] | ListEnumAIInsightPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumAIInsightPriorityWithAggregatesFilter<$PrismaModel> | $Enums.AIInsightPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIInsightPriorityFilter<$PrismaModel>
    _max?: NestedEnumAIInsightPriorityFilter<$PrismaModel>
  }

  export type NestedEnumAutomationTriggerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationTriggerType | EnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel> | $Enums.AutomationTriggerType
  }

  export type NestedEnumAutomationActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationActionType | EnumAutomationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationActionTypeFilter<$PrismaModel> | $Enums.AutomationActionType
  }

  export type NestedEnumAutomationTriggerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationTriggerType | EnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationTriggerType[] | ListEnumAutomationTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationTriggerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationTriggerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationTriggerTypeFilter<$PrismaModel>
  }

  export type NestedEnumAutomationActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationActionType | EnumAutomationActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationActionType[] | ListEnumAutomationActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AutomationActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationActionTypeFilter<$PrismaModel>
    _max?: NestedEnumAutomationActionTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumChatMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatMessageTypeFilter<$PrismaModel> | $Enums.ChatMessageType
  }

  export type NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageType | EnumChatMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatMessageType[] | ListEnumChatMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChatMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumChatMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumRiskToleranceFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel>
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskToleranceFilter<$PrismaModel> | $Enums.RiskTolerance
  }

  export type NestedEnumAutomationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationLevel | EnumAutomationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationLevelFilter<$PrismaModel> | $Enums.AutomationLevel
  }

  export type NestedEnumRiskToleranceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel>
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskToleranceWithAggregatesFilter<$PrismaModel> | $Enums.RiskTolerance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskToleranceFilter<$PrismaModel>
    _max?: NestedEnumRiskToleranceFilter<$PrismaModel>
  }

  export type NestedEnumAutomationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AutomationLevel | EnumAutomationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AutomationLevel[] | ListEnumAutomationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAutomationLevelWithAggregatesFilter<$PrismaModel> | $Enums.AutomationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAutomationLevelFilter<$PrismaModel>
    _max?: NestedEnumAutomationLevelFilter<$PrismaModel>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionCreateWithoutUserInput = {
    id?: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionCreateOrConnectWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionCreateManyUserInputEnvelope = {
    data: ConnectionCreateManyUserInput | ConnectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plaidAccount?: PlaidAccountCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    plaidAccountId?: string | null
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BudgetRuleCreateWithoutUserInput = {
    id?: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetRuleUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetRuleCreateOrConnectWithoutUserInput = {
    where: BudgetRuleWhereUniqueInput
    create: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput>
  }

  export type BudgetRuleCreateManyUserInputEnvelope = {
    data: BudgetRuleCreateManyUserInput | BudgetRuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InsightCacheCreateWithoutUserInput = {
    id?: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InsightCacheUncheckedCreateWithoutUserInput = {
    id?: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InsightCacheCreateOrConnectWithoutUserInput = {
    where: InsightCacheWhereUniqueInput
    create: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput>
  }

  export type InsightCacheCreateManyUserInputEnvelope = {
    data: InsightCacheCreateManyUserInput | InsightCacheCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaidAccountCreateWithoutUserInput = {
    id?: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutPlaidAccountInput
  }

  export type PlaidAccountUncheckedCreateWithoutUserInput = {
    id?: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPlaidAccountInput
  }

  export type PlaidAccountCreateOrConnectWithoutUserInput = {
    where: PlaidAccountWhereUniqueInput
    create: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput>
  }

  export type PlaidAccountCreateManyUserInputEnvelope = {
    data: PlaidAccountCreateManyUserInput | PlaidAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIInsightCreateWithoutUserInput = {
    id?: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightCreateOrConnectWithoutUserInput = {
    where: AIInsightWhereUniqueInput
    create: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput>
  }

  export type AIInsightCreateManyUserInputEnvelope = {
    data: AIInsightCreateManyUserInput | AIInsightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AutomationRuleCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleCreateOrConnectWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    create: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput>
  }

  export type AutomationRuleCreateManyUserInputEnvelope = {
    data: AutomationRuleCreateManyUserInput | AutomationRuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserInput = {
    id?: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesCreateManyUserInputEnvelope = {
    data: UserPreferencesCreateManyUserInput | UserPreferencesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type ConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectionCreateWithoutUserInput, ConnectionUncheckedCreateWithoutUserInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutUserInput, ConnectionUncheckedUpdateWithoutUserInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutUserInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: StringFilter<"Connection"> | string
    userId?: StringFilter<"Connection"> | string
    type?: EnumConnectionTypeFilter<"Connection"> | $Enums.ConnectionType
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    metadata?: JsonNullableFilter<"Connection">
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    plaidAccountId?: StringNullableFilter<"Transaction"> | string | null
    plaidTransactionId?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    merchant?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    source?: StringFilter<"Transaction"> | string
    isRecurring?: BoolFilter<"Transaction"> | boolean
    recurringGroupId?: StringNullableFilter<"Transaction"> | string | null
    notes?: StringNullableFilter<"Transaction"> | string | null
    aiCategorized?: BoolFilter<"Transaction"> | boolean
    aiCategory?: StringNullableFilter<"Transaction"> | string | null
    aiConfidence?: FloatNullableFilter<"Transaction"> | number | null
    isPending?: BoolFilter<"Transaction"> | boolean
    location?: JsonNullableFilter<"Transaction">
    paymentChannel?: StringNullableFilter<"Transaction"> | string | null
    transactionType?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type BudgetRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: BudgetRuleWhereUniqueInput
    update: XOR<BudgetRuleUpdateWithoutUserInput, BudgetRuleUncheckedUpdateWithoutUserInput>
    create: XOR<BudgetRuleCreateWithoutUserInput, BudgetRuleUncheckedCreateWithoutUserInput>
  }

  export type BudgetRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: BudgetRuleWhereUniqueInput
    data: XOR<BudgetRuleUpdateWithoutUserInput, BudgetRuleUncheckedUpdateWithoutUserInput>
  }

  export type BudgetRuleUpdateManyWithWhereWithoutUserInput = {
    where: BudgetRuleScalarWhereInput
    data: XOR<BudgetRuleUpdateManyMutationInput, BudgetRuleUncheckedUpdateManyWithoutUserInput>
  }

  export type BudgetRuleScalarWhereInput = {
    AND?: BudgetRuleScalarWhereInput | BudgetRuleScalarWhereInput[]
    OR?: BudgetRuleScalarWhereInput[]
    NOT?: BudgetRuleScalarWhereInput | BudgetRuleScalarWhereInput[]
    id?: StringFilter<"BudgetRule"> | string
    userId?: StringFilter<"BudgetRule"> | string
    category?: StringFilter<"BudgetRule"> | string
    monthlyCap?: DecimalFilter<"BudgetRule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BudgetRule"> | Date | string
    updatedAt?: DateTimeFilter<"BudgetRule"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    type?: EnumGoalTypeFilter<"Goal"> | $Enums.GoalType
    targetAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    progressAmount?: DecimalFilter<"Goal"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type InsightCacheUpsertWithWhereUniqueWithoutUserInput = {
    where: InsightCacheWhereUniqueInput
    update: XOR<InsightCacheUpdateWithoutUserInput, InsightCacheUncheckedUpdateWithoutUserInput>
    create: XOR<InsightCacheCreateWithoutUserInput, InsightCacheUncheckedCreateWithoutUserInput>
  }

  export type InsightCacheUpdateWithWhereUniqueWithoutUserInput = {
    where: InsightCacheWhereUniqueInput
    data: XOR<InsightCacheUpdateWithoutUserInput, InsightCacheUncheckedUpdateWithoutUserInput>
  }

  export type InsightCacheUpdateManyWithWhereWithoutUserInput = {
    where: InsightCacheScalarWhereInput
    data: XOR<InsightCacheUpdateManyMutationInput, InsightCacheUncheckedUpdateManyWithoutUserInput>
  }

  export type InsightCacheScalarWhereInput = {
    AND?: InsightCacheScalarWhereInput | InsightCacheScalarWhereInput[]
    OR?: InsightCacheScalarWhereInput[]
    NOT?: InsightCacheScalarWhereInput | InsightCacheScalarWhereInput[]
    id?: StringFilter<"InsightCache"> | string
    userId?: StringFilter<"InsightCache"> | string
    kind?: EnumInsightKindFilter<"InsightCache"> | $Enums.InsightKind
    payload?: JsonFilter<"InsightCache">
    expiresAt?: DateTimeFilter<"InsightCache"> | Date | string
    createdAt?: DateTimeFilter<"InsightCache"> | Date | string
  }

  export type PlaidAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaidAccountWhereUniqueInput
    update: XOR<PlaidAccountUpdateWithoutUserInput, PlaidAccountUncheckedUpdateWithoutUserInput>
    create: XOR<PlaidAccountCreateWithoutUserInput, PlaidAccountUncheckedCreateWithoutUserInput>
  }

  export type PlaidAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaidAccountWhereUniqueInput
    data: XOR<PlaidAccountUpdateWithoutUserInput, PlaidAccountUncheckedUpdateWithoutUserInput>
  }

  export type PlaidAccountUpdateManyWithWhereWithoutUserInput = {
    where: PlaidAccountScalarWhereInput
    data: XOR<PlaidAccountUpdateManyMutationInput, PlaidAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaidAccountScalarWhereInput = {
    AND?: PlaidAccountScalarWhereInput | PlaidAccountScalarWhereInput[]
    OR?: PlaidAccountScalarWhereInput[]
    NOT?: PlaidAccountScalarWhereInput | PlaidAccountScalarWhereInput[]
    id?: StringFilter<"PlaidAccount"> | string
    userId?: StringFilter<"PlaidAccount"> | string
    plaidAccountId?: StringFilter<"PlaidAccount"> | string
    plaidItemId?: StringFilter<"PlaidAccount"> | string
    name?: StringFilter<"PlaidAccount"> | string
    officialName?: StringNullableFilter<"PlaidAccount"> | string | null
    type?: StringFilter<"PlaidAccount"> | string
    subtype?: StringNullableFilter<"PlaidAccount"> | string | null
    mask?: StringNullableFilter<"PlaidAccount"> | string | null
    institutionName?: StringFilter<"PlaidAccount"> | string
    institutionLogo?: StringNullableFilter<"PlaidAccount"> | string | null
    currentBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string
    limit?: DecimalNullableFilter<"PlaidAccount"> | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    isActive?: BoolFilter<"PlaidAccount"> | boolean
    createdAt?: DateTimeFilter<"PlaidAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PlaidAccount"> | Date | string
  }

  export type AIInsightUpsertWithWhereUniqueWithoutUserInput = {
    where: AIInsightWhereUniqueInput
    update: XOR<AIInsightUpdateWithoutUserInput, AIInsightUncheckedUpdateWithoutUserInput>
    create: XOR<AIInsightCreateWithoutUserInput, AIInsightUncheckedCreateWithoutUserInput>
  }

  export type AIInsightUpdateWithWhereUniqueWithoutUserInput = {
    where: AIInsightWhereUniqueInput
    data: XOR<AIInsightUpdateWithoutUserInput, AIInsightUncheckedUpdateWithoutUserInput>
  }

  export type AIInsightUpdateManyWithWhereWithoutUserInput = {
    where: AIInsightScalarWhereInput
    data: XOR<AIInsightUpdateManyMutationInput, AIInsightUncheckedUpdateManyWithoutUserInput>
  }

  export type AIInsightScalarWhereInput = {
    AND?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
    OR?: AIInsightScalarWhereInput[]
    NOT?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
    id?: StringFilter<"AIInsight"> | string
    userId?: StringFilter<"AIInsight"> | string
    type?: EnumAIInsightTypeFilter<"AIInsight"> | $Enums.AIInsightType
    title?: StringFilter<"AIInsight"> | string
    message?: StringFilter<"AIInsight"> | string
    actionRequired?: BoolFilter<"AIInsight"> | boolean
    actionType?: StringNullableFilter<"AIInsight"> | string | null
    actionData?: JsonNullableFilter<"AIInsight">
    priority?: EnumAIInsightPriorityFilter<"AIInsight"> | $Enums.AIInsightPriority
    isRead?: BoolFilter<"AIInsight"> | boolean
    expiresAt?: DateTimeNullableFilter<"AIInsight"> | Date | string | null
    createdAt?: DateTimeFilter<"AIInsight"> | Date | string
    updatedAt?: DateTimeFilter<"AIInsight"> | Date | string
  }

  export type AutomationRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    update: XOR<AutomationRuleUpdateWithoutUserInput, AutomationRuleUncheckedUpdateWithoutUserInput>
    create: XOR<AutomationRuleCreateWithoutUserInput, AutomationRuleUncheckedCreateWithoutUserInput>
  }

  export type AutomationRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: AutomationRuleWhereUniqueInput
    data: XOR<AutomationRuleUpdateWithoutUserInput, AutomationRuleUncheckedUpdateWithoutUserInput>
  }

  export type AutomationRuleUpdateManyWithWhereWithoutUserInput = {
    where: AutomationRuleScalarWhereInput
    data: XOR<AutomationRuleUpdateManyMutationInput, AutomationRuleUncheckedUpdateManyWithoutUserInput>
  }

  export type AutomationRuleScalarWhereInput = {
    AND?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
    OR?: AutomationRuleScalarWhereInput[]
    NOT?: AutomationRuleScalarWhereInput | AutomationRuleScalarWhereInput[]
    id?: StringFilter<"AutomationRule"> | string
    userId?: StringFilter<"AutomationRule"> | string
    name?: StringFilter<"AutomationRule"> | string
    description?: StringNullableFilter<"AutomationRule"> | string | null
    triggerType?: EnumAutomationTriggerTypeFilter<"AutomationRule"> | $Enums.AutomationTriggerType
    triggerData?: JsonFilter<"AutomationRule">
    actionType?: EnumAutomationActionTypeFilter<"AutomationRule"> | $Enums.AutomationActionType
    actionData?: JsonFilter<"AutomationRule">
    isActive?: BoolFilter<"AutomationRule"> | boolean
    lastExecutedAt?: DateTimeNullableFilter<"AutomationRule"> | Date | string | null
    executionCount?: IntFilter<"AutomationRule"> | number
    createdAt?: DateTimeFilter<"AutomationRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutomationRule"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    userId?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    response?: StringFilter<"ChatMessage"> | string
    context?: JsonNullableFilter<"ChatMessage">
    messageType?: EnumChatMessageTypeFilter<"ChatMessage"> | $Enums.ChatMessageType
    isAI?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type UserPreferencesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferencesScalarWhereInput
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferencesScalarWhereInput = {
    AND?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    OR?: UserPreferencesScalarWhereInput[]
    NOT?: UserPreferencesScalarWhereInput | UserPreferencesScalarWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    riskTolerance?: EnumRiskToleranceFilter<"UserPreferences"> | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFilter<"UserPreferences"> | $Enums.AutomationLevel
    notificationPreferences?: JsonNullableFilter<"UserPreferences">
    aiPersonality?: StringNullableFilter<"UserPreferences"> | string | null
    aiResponseStyle?: StringNullableFilter<"UserPreferences"> | string | null
    theme?: StringNullableFilter<"UserPreferences"> | string | null
    tutorialCompleted?: BoolFilter<"UserPreferences"> | boolean
    tutorialPosition?: JsonNullableFilter<"UserPreferences">
    createdAt?: DateTimeFilter<"UserPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConnectionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
  }

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
    create: XOR<UserCreateWithoutConnectionsInput, UserUncheckedCreateWithoutConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectionsInput, UserUncheckedUpdateWithoutConnectionsInput>
  }

  export type UserUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type PlaidAccountCreateWithoutTransactionsInput = {
    id?: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaidAccountsInput
  }

  export type PlaidAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaidAccountCreateOrConnectWithoutTransactionsInput = {
    where: PlaidAccountWhereUniqueInput
    create: XOR<PlaidAccountCreateWithoutTransactionsInput, PlaidAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaidAccountUpsertWithoutTransactionsInput = {
    update: XOR<PlaidAccountUpdateWithoutTransactionsInput, PlaidAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PlaidAccountCreateWithoutTransactionsInput, PlaidAccountUncheckedCreateWithoutTransactionsInput>
    where?: PlaidAccountWhereInput
  }

  export type PlaidAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PlaidAccountWhereInput
    data: XOR<PlaidAccountUpdateWithoutTransactionsInput, PlaidAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type PlaidAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaidAccountsNestedInput
  }

  export type PlaidAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBudgetRulesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBudgetRulesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBudgetRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBudgetRulesInput, UserUncheckedCreateWithoutBudgetRulesInput>
  }

  export type UserUpsertWithoutBudgetRulesInput = {
    update: XOR<UserUpdateWithoutBudgetRulesInput, UserUncheckedUpdateWithoutBudgetRulesInput>
    create: XOR<UserCreateWithoutBudgetRulesInput, UserUncheckedCreateWithoutBudgetRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBudgetRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBudgetRulesInput, UserUncheckedUpdateWithoutBudgetRulesInput>
  }

  export type UserUpdateWithoutBudgetRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBudgetRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInsightCachesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInsightCachesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInsightCachesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInsightCachesInput, UserUncheckedCreateWithoutInsightCachesInput>
  }

  export type UserUpsertWithoutInsightCachesInput = {
    update: XOR<UserUpdateWithoutInsightCachesInput, UserUncheckedUpdateWithoutInsightCachesInput>
    create: XOR<UserCreateWithoutInsightCachesInput, UserUncheckedCreateWithoutInsightCachesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInsightCachesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInsightCachesInput, UserUncheckedUpdateWithoutInsightCachesInput>
  }

  export type UserUpdateWithoutInsightCachesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInsightCachesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPlaidAccountsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaidAccountsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaidAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaidAccountsInput, UserUncheckedCreateWithoutPlaidAccountsInput>
  }

  export type TransactionCreateWithoutPlaidAccountInput = {
    id?: string
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPlaidAccountInput = {
    id?: string
    userId: string
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutPlaidAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput>
  }

  export type TransactionCreateManyPlaidAccountInputEnvelope = {
    data: TransactionCreateManyPlaidAccountInput | TransactionCreateManyPlaidAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaidAccountsInput = {
    update: XOR<UserUpdateWithoutPlaidAccountsInput, UserUncheckedUpdateWithoutPlaidAccountsInput>
    create: XOR<UserCreateWithoutPlaidAccountsInput, UserUncheckedCreateWithoutPlaidAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaidAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaidAccountsInput, UserUncheckedUpdateWithoutPlaidAccountsInput>
  }

  export type UserUpdateWithoutPlaidAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaidAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutPlaidAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPlaidAccountInput, TransactionUncheckedUpdateWithoutPlaidAccountInput>
    create: XOR<TransactionCreateWithoutPlaidAccountInput, TransactionUncheckedCreateWithoutPlaidAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPlaidAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPlaidAccountInput, TransactionUncheckedUpdateWithoutPlaidAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPlaidAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPlaidAccountInput>
  }

  export type UserCreateWithoutAiInsightsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiInsightsInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiInsightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
  }

  export type UserUpsertWithoutAiInsightsInput = {
    update: XOR<UserUpdateWithoutAiInsightsInput, UserUncheckedUpdateWithoutAiInsightsInput>
    create: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiInsightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiInsightsInput, UserUncheckedUpdateWithoutAiInsightsInput>
  }

  export type UserUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAutomationRulesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutomationRulesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutomationRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
  }

  export type UserUpsertWithoutAutomationRulesInput = {
    update: XOR<UserUpdateWithoutAutomationRulesInput, UserUncheckedUpdateWithoutAutomationRulesInput>
    create: XOR<UserCreateWithoutAutomationRulesInput, UserUncheckedCreateWithoutAutomationRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutomationRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutomationRulesInput, UserUncheckedUpdateWithoutAutomationRulesInput>
  }

  export type UserUpdateWithoutAutomationRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutomationRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatMessagesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    userPreferences?: UserPreferencesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    userPreferences?: UserPreferencesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserPreferencesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    connections?: ConnectionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPreferencesInput = {
    id?: string
    supabaseUserId: string
    email: string
    phone?: string | null
    emailVerified?: boolean
    phoneVerified?: boolean
    twoFactorEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    connections?: ConnectionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    budgetRules?: BudgetRuleUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    insightCaches?: InsightCacheUncheckedCreateNestedManyWithoutUserInput
    plaidAccounts?: PlaidAccountUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutUserInput
    automationRules?: AutomationRuleUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
  }

  export type UserUpsertWithoutUserPreferencesInput = {
    update: XOR<UserUpdateWithoutUserPreferencesInput, UserUncheckedUpdateWithoutUserPreferencesInput>
    create: XOR<UserCreateWithoutUserPreferencesInput, UserUncheckedCreateWithoutUserPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPreferencesInput, UserUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type UserUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    connections?: ConnectionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    connections?: ConnectionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    budgetRules?: BudgetRuleUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    insightCaches?: InsightCacheUncheckedUpdateManyWithoutUserNestedInput
    plaidAccounts?: PlaidAccountUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutUserNestedInput
    automationRules?: AutomationRuleUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionCreateManyUserInput = {
    id?: string
    type: $Enums.ConnectionType
    status: $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    plaidAccountId?: string | null
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BudgetRuleCreateManyUserInput = {
    id?: string
    category: string
    monthlyCap: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    type: $Enums.GoalType
    targetAmount: Decimal | DecimalJsLike | number | string
    targetDate: Date | string
    progressAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsightCacheCreateManyUserInput = {
    id?: string
    kind: $Enums.InsightKind
    payload: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PlaidAccountCreateManyUserInput = {
    id?: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string | null
    type: string
    subtype?: string | null
    mask?: string | null
    institutionName: string
    institutionLogo?: string | null
    currentBalance: Decimal | DecimalJsLike | number | string
    availableBalance: Decimal | DecimalJsLike | number | string
    limit?: Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightCreateManyUserInput = {
    id?: string
    type: $Enums.AIInsightType
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: $Enums.AIInsightPriority
    isRead?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationRuleCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    triggerType: $Enums.AutomationTriggerType
    triggerData: JsonNullValueInput | InputJsonValue
    actionType: $Enums.AutomationActionType
    actionData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    lastExecutedAt?: Date | string | null
    executionCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyUserInput = {
    id?: string
    message: string
    response: string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: $Enums.ChatMessageType
    isAI?: boolean
    createdAt?: Date | string
  }

  export type UserPreferencesCreateManyUserInput = {
    id?: string
    riskTolerance?: $Enums.RiskTolerance
    automationLevel?: $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: string | null
    aiResponseStyle?: string | null
    theme?: string | null
    tutorialCompleted?: boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plaidAccount?: PlaidAccountUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetRuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    monthlyCap?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    targetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    progressAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCacheUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kind?: EnumInsightKindFieldUpdateOperationsInput | $Enums.InsightKind
    payload?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaidAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutPlaidAccountNestedInput
  }

  export type PlaidAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutPlaidAccountNestedInput
  }

  export type PlaidAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidAccountId?: StringFieldUpdateOperationsInput | string
    plaidItemId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officialName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    subtype?: NullableStringFieldUpdateOperationsInput | string | null
    mask?: NullableStringFieldUpdateOperationsInput | string | null
    institutionName?: StringFieldUpdateOperationsInput | string
    institutionLogo?: NullableStringFieldUpdateOperationsInput | string | null
    currentBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    limit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastSyncAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAIInsightTypeFieldUpdateOperationsInput | $Enums.AIInsightType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: BoolFieldUpdateOperationsInput | boolean
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    actionData?: NullableJsonNullValueInput | InputJsonValue
    priority?: EnumAIInsightPriorityFieldUpdateOperationsInput | $Enums.AIInsightPriority
    isRead?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationRuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    triggerType?: EnumAutomationTriggerTypeFieldUpdateOperationsInput | $Enums.AutomationTriggerType
    triggerData?: JsonNullValueInput | InputJsonValue
    actionType?: EnumAutomationActionTypeFieldUpdateOperationsInput | $Enums.AutomationActionType
    actionData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastExecutedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    messageType?: EnumChatMessageTypeFieldUpdateOperationsInput | $Enums.ChatMessageType
    isAI?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskTolerance?: EnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance
    automationLevel?: EnumAutomationLevelFieldUpdateOperationsInput | $Enums.AutomationLevel
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    aiPersonality?: NullableStringFieldUpdateOperationsInput | string | null
    aiResponseStyle?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialCompleted?: BoolFieldUpdateOperationsInput | boolean
    tutorialPosition?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyPlaidAccountInput = {
    id?: string
    userId: string
    plaidTransactionId?: string | null
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    merchant: string
    category: string
    subcategory?: string | null
    source: string
    isRecurring?: boolean
    recurringGroupId?: string | null
    notes?: string | null
    aiCategorized?: boolean
    aiCategory?: string | null
    aiConfidence?: number | null
    isPending?: boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: string | null
    transactionType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutPlaidAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPlaidAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutPlaidAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plaidTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    merchant?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurringGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategorized?: BoolFieldUpdateOperationsInput | boolean
    aiCategory?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    isPending?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableJsonNullValueInput | InputJsonValue
    paymentChannel?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaidAccountCountOutputTypeDefaultArgs instead
     */
    export type PlaidAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaidAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConnectionDefaultArgs instead
     */
    export type ConnectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConnectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetRuleDefaultArgs instead
     */
    export type BudgetRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetRuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalDefaultArgs instead
     */
    export type GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsightCacheDefaultArgs instead
     */
    export type InsightCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsightCacheDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaidAccountDefaultArgs instead
     */
    export type PlaidAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaidAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AIInsightDefaultArgs instead
     */
    export type AIInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AIInsightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AutomationRuleDefaultArgs instead
     */
    export type AutomationRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AutomationRuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesDefaultArgs instead
     */
    export type UserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesDefaultArgs<ExtArgs>

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