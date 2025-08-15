
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
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
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
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  plan: 'plan',
  status: 'status',
  currentPeriodEnd: 'currentPeriodEnd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConnectionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  status: 'status',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
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

exports.Prisma.BudgetRuleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  category: 'category',
  monthlyCap: 'monthlyCap',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  targetAmount: 'targetAmount',
  targetDate: 'targetDate',
  progressAmount: 'progressAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InsightCacheScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  kind: 'kind',
  payload: 'payload',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.PlaidAccountScalarFieldEnum = {
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

exports.Prisma.AIInsightScalarFieldEnum = {
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

exports.Prisma.AutomationRuleScalarFieldEnum = {
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

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  message: 'message',
  response: 'response',
  context: 'context',
  messageType: 'messageType',
  isAI: 'isAI',
  createdAt: 'createdAt'
};

exports.Prisma.UserPreferencesScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.SubscriptionPlan = exports.$Enums.SubscriptionPlan = {
  FREE: 'FREE',
  MONEYPAL_PRO: 'MONEYPAL_PRO',
  ALL_ACCESS: 'ALL_ACCESS'
};

exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  PAST_DUE: 'PAST_DUE',
  UNPAID: 'UNPAID'
};

exports.ConnectionType = exports.$Enums.ConnectionType = {
  PLAID: 'PLAID',
  MANUAL: 'MANUAL'
};

exports.ConnectionStatus = exports.$Enums.ConnectionStatus = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
  PENDING: 'PENDING'
};

exports.GoalType = exports.$Enums.GoalType = {
  DEBT: 'DEBT',
  SAVINGS: 'SAVINGS',
  EMERGENCY_FUND: 'EMERGENCY_FUND',
  VACATION: 'VACATION',
  HOME_DOWN_PAYMENT: 'HOME_DOWN_PAYMENT',
  INVESTMENT: 'INVESTMENT',
  OTHER: 'OTHER'
};

exports.InsightKind = exports.$Enums.InsightKind = {
  WEEKLY: 'WEEKLY',
  DAILY: 'DAILY',
  MONTHLY: 'MONTHLY'
};

exports.AIInsightType = exports.$Enums.AIInsightType = {
  SPENDING_ALERT: 'SPENDING_ALERT',
  SAVINGS_OPPORTUNITY: 'SAVINGS_OPPORTUNITY',
  BUDGET_WARNING: 'BUDGET_WARNING',
  GOAL_PROGRESS: 'GOAL_PROGRESS',
  UNUSUAL_ACTIVITY: 'UNUSUAL_ACTIVITY',
  FINANCIAL_TIP: 'FINANCIAL_TIP',
  AUTOMATION_SUGGESTION: 'AUTOMATION_SUGGESTION'
};

exports.AIInsightPriority = exports.$Enums.AIInsightPriority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.AutomationTriggerType = exports.$Enums.AutomationTriggerType = {
  BALANCE_THRESHOLD: 'BALANCE_THRESHOLD',
  TRANSACTION_CATEGORY: 'TRANSACTION_CATEGORY',
  GOAL_PROGRESS: 'GOAL_PROGRESS',
  SCHEDULED: 'SCHEDULED',
  INCOME_RECEIVED: 'INCOME_RECEIVED',
  BILL_DUE: 'BILL_DUE'
};

exports.AutomationActionType = exports.$Enums.AutomationActionType = {
  TRANSFER_MONEY: 'TRANSFER_MONEY',
  SET_GOAL: 'SET_GOAL',
  CREATE_BUDGET: 'CREATE_BUDGET',
  SEND_NOTIFICATION: 'SEND_NOTIFICATION',
  CATEGORIZE_TRANSACTION: 'CATEGORIZE_TRANSACTION',
  CREATE_INSIGHT: 'CREATE_INSIGHT'
};

exports.ChatMessageType = exports.$Enums.ChatMessageType = {
  USER: 'USER',
  AI: 'AI',
  SYSTEM: 'SYSTEM'
};

exports.RiskTolerance = exports.$Enums.RiskTolerance = {
  CONSERVATIVE: 'CONSERVATIVE',
  MODERATE: 'MODERATE',
  AGGRESSIVE: 'AGGRESSIVE'
};

exports.AutomationLevel = exports.$Enums.AutomationLevel = {
  MINIMAL: 'MINIMAL',
  MEDIUM: 'MEDIUM',
  MAXIMAL: 'MAXIMAL'
};

exports.Prisma.ModelName = {
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
