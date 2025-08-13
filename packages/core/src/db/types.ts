import { Prisma } from '@prisma/client'

// Override the User type to match our new schema
export interface User {
  id: string
  supabaseUserId: string
  email: string
  phone: string | null
  emailVerified: boolean
  phoneVerified: boolean
  twoFactorEnabled: boolean
  createdAt: Date
  updatedAt: Date
  subscriptions?: Subscription[]
  connections?: Connection[]
  transactions?: Transaction[]
  budgetRules?: BudgetRule[]
  goals?: Goal[]
  insightCaches?: InsightCache[]
}

export interface Subscription {
  id: string
  userId: string
  plan: SubscriptionPlan
  status: SubscriptionStatus
  currentPeriodEnd: Date | null
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Connection {
  id: string
  userId: string
  type: ConnectionType
  status: ConnectionStatus
  metadata: Prisma.JsonValue | null
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Transaction {
  id: string
  userId: string
  date: Date
  amount: Prisma.Decimal
  merchant: string
  category: string
  source: string
  isRecurring: boolean
  recurringGroupId: string | null
  notes: string | null
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface BudgetRule {
  id: string
  userId: string
  category: string
  monthlyCap: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface Goal {
  id: string
  userId: string
  type: GoalType
  targetAmount: Prisma.Decimal
  targetDate: Date
  progressAmount: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
  user: User
}

export interface InsightCache {
  id: string
  userId: string
  kind: InsightKind
  payload: Prisma.JsonValue
  expiresAt: Date
  createdAt: Date
  user: User
}

export enum SubscriptionPlan {
  FREE = 'FREE',
  MONEYPAL_PRO = 'MONEYPAL_PRO',
  ALL_ACCESS = 'ALL_ACCESS'
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  PAST_DUE = 'PAST_DUE',
  UNPAID = 'UNPAID'
}

export enum ConnectionType {
  PLAID = 'PLAID',
  MANUAL = 'MANUAL'
}

export enum ConnectionStatus {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  ERROR = 'ERROR',
  PENDING = 'PENDING'
}

export enum GoalType {
  DEBT = 'DEBT',
  SAVINGS = 'SAVINGS'
}

export enum InsightKind {
  WEEKLY = 'WEEKLY',
  DAILY = 'DAILY'
}
