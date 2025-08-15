-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE', 'MONEYPAL_PRO', 'ALL_ACCESS');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'PAST_DUE', 'UNPAID');

-- CreateEnum
CREATE TYPE "ConnectionType" AS ENUM ('PLAID', 'MANUAL');

-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('CONNECTED', 'DISCONNECTED', 'ERROR', 'PENDING');

-- CreateEnum
CREATE TYPE "GoalType" AS ENUM ('DEBT', 'SAVINGS', 'EMERGENCY_FUND', 'VACATION', 'HOME_DOWN_PAYMENT', 'INVESTMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "InsightKind" AS ENUM ('WEEKLY', 'DAILY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "AIInsightType" AS ENUM ('SPENDING_ALERT', 'SAVINGS_OPPORTUNITY', 'BUDGET_WARNING', 'GOAL_PROGRESS', 'UNUSUAL_ACTIVITY', 'FINANCIAL_TIP', 'AUTOMATION_SUGGESTION');

-- CreateEnum
CREATE TYPE "AIInsightPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "AutomationTriggerType" AS ENUM ('BALANCE_THRESHOLD', 'TRANSACTION_CATEGORY', 'GOAL_PROGRESS', 'SCHEDULED', 'INCOME_RECEIVED', 'BILL_DUE');

-- CreateEnum
CREATE TYPE "AutomationActionType" AS ENUM ('TRANSFER_MONEY', 'SET_GOAL', 'CREATE_BUDGET', 'SEND_NOTIFICATION', 'CATEGORIZE_TRANSACTION', 'CREATE_INSIGHT');

-- CreateEnum
CREATE TYPE "ChatMessageType" AS ENUM ('USER', 'AI', 'SYSTEM');

-- CreateEnum
CREATE TYPE "RiskTolerance" AS ENUM ('CONSERVATIVE', 'MODERATE', 'AGGRESSIVE');

-- CreateEnum
CREATE TYPE "AutomationLevel" AS ENUM ('MINIMAL', 'MEDIUM', 'MAXIMAL');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "supabaseUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "phoneVerified" BOOLEAN NOT NULL DEFAULT false,
    "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "SubscriptionPlan" NOT NULL,
    "status" "SubscriptionStatus" NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connections" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "ConnectionType" NOT NULL,
    "status" "ConnectionStatus" NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plaidAccountId" TEXT,
    "plaidTransactionId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "merchant" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "source" TEXT NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurringGroupId" TEXT,
    "notes" TEXT,
    "aiCategorized" BOOLEAN NOT NULL DEFAULT false,
    "aiCategory" TEXT,
    "aiConfidence" DOUBLE PRECISION,
    "isPending" BOOLEAN NOT NULL DEFAULT false,
    "location" JSONB,
    "paymentChannel" TEXT,
    "transactionType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_rules" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "monthlyCap" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "budget_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goals" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "GoalType" NOT NULL,
    "targetAmount" DECIMAL(10,2) NOT NULL,
    "targetDate" TIMESTAMP(3) NOT NULL,
    "progressAmount" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insight_caches" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kind" "InsightKind" NOT NULL,
    "payload" JSONB NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "insight_caches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plaid_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plaidAccountId" TEXT NOT NULL,
    "plaidItemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "officialName" TEXT,
    "type" TEXT NOT NULL,
    "subtype" TEXT,
    "mask" TEXT,
    "institutionName" TEXT NOT NULL,
    "institutionLogo" TEXT,
    "currentBalance" DECIMAL(10,2) NOT NULL,
    "availableBalance" DECIMAL(10,2) NOT NULL,
    "limit" DECIMAL(10,2),
    "lastSyncAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plaid_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_insights" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "AIInsightType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "actionRequired" BOOLEAN NOT NULL DEFAULT false,
    "actionType" TEXT,
    "actionData" JSONB,
    "priority" "AIInsightPriority" NOT NULL DEFAULT 'MEDIUM',
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_insights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "automation_rules" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "triggerType" "AutomationTriggerType" NOT NULL,
    "triggerData" JSONB NOT NULL,
    "actionType" "AutomationActionType" NOT NULL,
    "actionData" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastExecutedAt" TIMESTAMP(3),
    "executionCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "automation_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "context" JSONB,
    "messageType" "ChatMessageType" NOT NULL DEFAULT 'USER',
    "isAI" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "riskTolerance" "RiskTolerance" NOT NULL DEFAULT 'MODERATE',
    "automationLevel" "AutomationLevel" NOT NULL DEFAULT 'MEDIUM',
    "notificationPreferences" JSONB,
    "aiPersonality" TEXT,
    "aiResponseStyle" TEXT,
    "theme" TEXT,
    "tutorialCompleted" BOOLEAN NOT NULL DEFAULT false,
    "tutorialPosition" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_supabaseUserId_key" ON "users"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_plaidTransactionId_key" ON "transactions"("plaidTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "plaid_accounts_plaidAccountId_key" ON "plaid_accounts"("plaidAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "user_preferences_userId_key" ON "user_preferences"("userId");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_plaidAccountId_fkey" FOREIGN KEY ("plaidAccountId") REFERENCES "plaid_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_rules" ADD CONSTRAINT "budget_rules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insight_caches" ADD CONSTRAINT "insight_caches_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plaid_accounts" ADD CONSTRAINT "plaid_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_insights" ADD CONSTRAINT "ai_insights_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "automation_rules" ADD CONSTRAINT "automation_rules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
