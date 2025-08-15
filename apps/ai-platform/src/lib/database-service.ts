import { PrismaClient } from '@yourpals/core/prisma-client'

// Database service for MoneyPal
export class DatabaseService {
  private static instance: DatabaseService
  private prisma: PrismaClient

  private constructor() {
    this.prisma = new PrismaClient()
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  // User Management
  async getUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        plaidAccounts: true,
        transactions: true,
        goals: true,
        aiInsights: true,
        automationRules: true,
        userPreferences: true
      }
    })
  }

  async getUserBySupabaseId(supabaseUserId: string) {
    return this.prisma.user.findUnique({
      where: { supabaseUserId },
      include: {
        plaidAccounts: true,
        transactions: true,
        goals: true,
        aiInsights: true,
        automationRules: true,
        userPreferences: true
      }
    })
  }

  async createUser(userData: {
    supabaseUserId: string
    email: string
    phone?: string
  }) {
    return this.prisma.user.create({
      data: userData,
      include: {
        plaidAccounts: true,
        transactions: true,
        goals: true,
        aiInsights: true,
        automationRules: true,
        userPreferences: true
      }
    })
  }

  // Plaid Account Management
  async createPlaidAccount(accountData: {
    userId: string
    plaidAccountId: string
    plaidItemId: string
    name: string
    officialName?: string
    type: string
    subtype?: string
    mask?: string
    institutionName: string
    institutionLogo?: string
    currentBalance: number
    availableBalance: number
    limit?: number
  }) {
    return this.prisma.plaidAccount.create({
      data: {
        ...accountData,
        currentBalance: accountData.currentBalance,
        availableBalance: accountData.availableBalance,
        limit: accountData.limit
      }
    })
  }

  async updatePlaidAccount(plaidAccountId: string, updateData: {
    currentBalance?: number
    availableBalance?: number
    limit?: number
    lastSyncAt?: Date
    isActive?: boolean
  }) {
    return this.prisma.plaidAccount.update({
      where: { plaidAccountId },
      data: {
        ...updateData,
        currentBalance: updateData.currentBalance,
        availableBalance: updateData.availableBalance,
        limit: updateData.limit
      }
    })
  }

  async getPlaidAccountsByUserId(userId: string) {
    return this.prisma.plaidAccount.findMany({
      where: { userId, isActive: true },
      include: {
        transactions: true
      }
    })
  }

  async getPlaidAccountByPlaidId(plaidAccountId: string) {
    return this.prisma.plaidAccount.findUnique({
      where: { plaidAccountId },
      include: {
        transactions: true
      }
    })
  }

  // Transaction Management
  async createTransaction(transactionData: {
    userId: string
    plaidAccountId?: string
    plaidTransactionId?: string
    date: Date
    amount: number
    merchant: string
    category: string
    subcategory?: string
    source: string
    isRecurring?: boolean
    recurringGroupId?: string
    notes?: string
    aiCategorized?: boolean
    aiCategory?: string
    aiConfidence?: number
    isPending?: boolean
    location?: any
    paymentChannel?: string
    transactionType?: string
  }) {
    return this.prisma.transaction.create({
      data: {
        ...transactionData,
        amount: transactionData.amount
      }
    })
  }

  async updateTransaction(id: string, updateData: {
    category?: string
    subcategory?: string
    notes?: string
    aiCategorized?: boolean
    aiCategory?: string
    aiConfidence?: number
    isPending?: boolean
  }) {
    return this.prisma.transaction.update({
      where: { id },
      data: updateData
    })
  }

  async getTransactionsByUserId(userId: string, options?: {
    startDate?: Date
    endDate?: Date
    category?: string
    limit?: number
    offset?: number
  }) {
    const where: any = { userId }
    
    if (options?.startDate || options?.endDate) {
      where.date = {}
      if (options.startDate) where.date.gte = options.startDate
      if (options.endDate) where.date.lte = options.endDate
    }
    
    if (options?.category) {
      where.category = options.category
    }

    return this.prisma.transaction.findMany({
      where,
      include: {
        plaidAccount: true
      },
      orderBy: { date: 'desc' },
      take: options?.limit || 100,
      skip: options?.offset || 0
    })
  }

  async getTransactionByPlaidId(plaidTransactionId: string) {
    return this.prisma.transaction.findUnique({
      where: { plaidTransactionId }
    })
  }

  // Goal Management
  async createGoal(goalData: {
    userId: string
    type: string
    targetAmount: number
    targetDate: Date
    progressAmount?: number
  }) {
    return this.prisma.goal.create({
      data: {
        userId: goalData.userId,
        type: goalData.type as any, // Type assertion for now
        targetAmount: goalData.targetAmount,
        targetDate: goalData.targetDate,
        progressAmount: goalData.progressAmount || 0
      }
    })
  }

  async updateGoalProgress(id: string, progressAmount: number) {
    return this.prisma.goal.update({
      where: { id },
      data: { progressAmount }
    })
  }

  async getGoalsByUserId(userId: string) {
    return this.prisma.goal.findMany({
      where: { userId },
      orderBy: { targetDate: 'asc' }
    })
  }

  // AI Insights Management
  async createAIInsight(insightData: {
    userId: string
    type: string
    title: string
    message: string
    actionRequired?: boolean
    actionType?: string
    actionData?: any
    priority?: string
    expiresAt?: Date
  }) {
    return this.prisma.aIInsight.create({
      data: {
        userId: insightData.userId,
        type: insightData.type as any, // Type assertion for now
        title: insightData.title,
        message: insightData.message,
        actionRequired: insightData.actionRequired,
        actionType: insightData.actionType,
        actionData: insightData.actionData,
        priority: insightData.priority as any, // Type assertion for now
        expiresAt: insightData.expiresAt
      }
    })
  }

  async getAIInsightsByUserId(userId: string, options?: {
    type?: string
    isRead?: boolean
    limit?: number
  }) {
    const where: any = { userId }
    
    if (options?.type) where.type = options.type
    if (options?.isRead !== undefined) where.isRead = options.isRead

    return this.prisma.aIInsight.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: options?.limit || 50
    })
  }

  async markInsightAsRead(id: string) {
    return this.prisma.aIInsight.update({
      where: { id },
      data: { isRead: true }
    })
  }

  // Automation Rules Management
  async createAutomationRule(ruleData: {
    userId: string
    name: string
    description?: string
    triggerType: string
    triggerData: any
    actionType: string
    actionData: any
    isActive?: boolean
  }) {
    return this.prisma.automationRule.create({
      data: {
        userId: ruleData.userId,
        name: ruleData.name,
        description: ruleData.description,
        triggerType: ruleData.triggerType as any, // Type assertion for now
        triggerData: ruleData.triggerData,
        actionType: ruleData.actionType as any, // Type assertion for now
        actionData: ruleData.actionData,
        isActive: ruleData.isActive
      }
    })
  }

  async getAutomationRulesByUserId(userId: string, isActive?: boolean) {
    const where: any = { userId }
    if (isActive !== undefined) where.isActive = isActive

    return this.prisma.automationRule.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
  }

  async updateAutomationRule(id: string, updateData: {
    isActive?: boolean
    lastExecutedAt?: Date
    executionCount?: number
  }) {
    return this.prisma.automationRule.update({
      where: { id },
      data: updateData
    })
  }

  // Chat Messages Management
  async createChatMessage(messageData: {
    userId: string
    message: string
    response: string
    context?: any
    messageType?: string
    isAI?: boolean
  }) {
    return this.prisma.chatMessage.create({
      data: {
        userId: messageData.userId,
        message: messageData.message,
        response: messageData.response,
        context: messageData.context,
        messageType: messageData.messageType as any, // Type assertion for now
        isAI: messageData.isAI
      }
    })
  }

  async getChatHistoryByUserId(userId: string, limit?: number) {
    return this.prisma.chatMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit || 50
    })
  }

  // User Preferences Management
  async getUserPreferences(userId: string) {
    return this.prisma.userPreferences.findUnique({
      where: { userId }
    })
  }

  async createUserPreferences(preferencesData: {
    userId: string
    riskTolerance?: string
    automationLevel?: string
    notificationPreferences?: any
    aiPersonality?: string
    aiResponseStyle?: string
    theme?: string
    tutorialCompleted?: boolean
    tutorialPosition?: any
  }) {
    return this.prisma.userPreferences.create({
      data: {
        userId: preferencesData.userId,
        riskTolerance: preferencesData.riskTolerance as any, // Type assertion for now
        automationLevel: preferencesData.automationLevel as any, // Type assertion for now
        notificationPreferences: preferencesData.notificationPreferences,
        aiPersonality: preferencesData.aiPersonality,
        aiResponseStyle: preferencesData.aiResponseStyle,
        theme: preferencesData.theme,
        tutorialCompleted: preferencesData.tutorialCompleted,
        tutorialPosition: preferencesData.tutorialPosition
      }
    })
  }

  async updateUserPreferences(userId: string, updateData: {
    riskTolerance?: string
    automationLevel?: string
    notificationPreferences?: any
    aiPersonality?: string
    aiResponseStyle?: string
    theme?: string
    tutorialCompleted?: boolean
    tutorialPosition?: any
  }) {
    return this.prisma.userPreferences.upsert({
      where: { userId },
      update: {
        riskTolerance: updateData.riskTolerance as any, // Type assertion for now
        automationLevel: updateData.automationLevel as any, // Type assertion for now
        notificationPreferences: updateData.notificationPreferences,
        aiPersonality: updateData.aiPersonality,
        aiResponseStyle: updateData.aiResponseStyle,
        theme: updateData.theme,
        tutorialCompleted: updateData.tutorialCompleted,
        tutorialPosition: updateData.tutorialPosition
      },
      create: {
        userId,
        riskTolerance: updateData.riskTolerance as any, // Type assertion for now
        automationLevel: updateData.automationLevel as any, // Type assertion for now
        notificationPreferences: updateData.notificationPreferences,
        aiPersonality: updateData.aiPersonality,
        aiResponseStyle: updateData.aiResponseStyle,
        theme: updateData.theme,
        tutorialCompleted: updateData.tutorialCompleted,
        tutorialPosition: updateData.tutorialPosition
      }
    })
  }

  // Financial Summary
  async getFinancialSummary(userId: string) {
    const accounts = await this.getPlaidAccountsByUserId(userId)
    const transactions = await this.getTransactionsByUserId(userId, {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      endDate: new Date()
    })

    const totalBalance = accounts.reduce((sum: number, account: any) => sum + Number(account.currentBalance), 0)
    const totalDebt = accounts
      .filter((account: any) => account.type === 'credit' || account.type === 'loan')
      .reduce((sum: number, account: any) => sum + Number(account.currentBalance), 0)
    
    const monthlyExpenses = transactions
      .filter((tx: any) => tx.amount < 0)
      .reduce((sum: number, tx: any) => sum + Math.abs(Number(tx.amount)), 0)

    return {
      userId,
      totalBalance,
      totalDebt,
      netWorth: totalBalance - totalDebt,
      monthlyExpenses,
      lastUpdated: new Date()
    }
  }

  // Cleanup
  async disconnect() {
    await this.prisma.$disconnect()
  }
}

// Export singleton instance
export const databaseService = DatabaseService.getInstance()
