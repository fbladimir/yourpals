import { 
  FinancialAccount, 
  Transaction, 
  FinancialGoal, 
  Budget, 
  AIInsight,
  FinancialSummary,
  SpendingAnalysis 
} from './financial-types'
import { plaidClient, getAccounts, getTransactions } from './plaid'

// Financial Data Service
export class FinancialService {
  private static instance: FinancialService

  private constructor() {}

  public static getInstance(): FinancialService {
    if (!FinancialService.instance) {
      FinancialService.instance = new FinancialService()
    }
    return FinancialService.instance
  }

  // Account Management
  async syncAccounts(userId: string, accessToken: string): Promise<FinancialAccount[]> {
    try {
      const plaidAccounts = await getAccounts(accessToken)
      
      // Transform Plaid accounts to our format
      const accounts = plaidAccounts.map(account => ({
        id: this.generateId(),
        userId,
        plaidAccountId: account.account_id,
        plaidItemId: '', // Will be set when we have item_id
        name: account.name,
        officialName: account.official_name || undefined,
        type: this.mapPlaidAccountType(account.type),
        subtype: account.subtype || undefined,
        mask: account.mask,
        balance: {
          available: account.balances.available || 0,
          current: account.balances.current || 0,
          limit: account.balances.limit,
          currency: account.balances.iso_currency_code
        },
        isActive: true,
        lastSync: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      })) as FinancialAccount[]

      // TODO: Save to database
      return accounts
    } catch (error) {
      console.error('Error syncing accounts:', error)
      throw new Error('Failed to sync accounts')
    }
  }

  async syncTransactions(
    userId: string, 
    accessToken: string, 
    startDate: string, 
    endDate: string
  ): Promise<Transaction[]> {
    try {
      const plaidTransactions = await getTransactions(accessToken, startDate, endDate)
      
      // Transform Plaid transactions to our format
      const transactions = plaidTransactions.map(tx => ({
        id: this.generateId(),
        userId,
        accountId: '', // Will be set when we have account mapping
        plaidTransactionId: tx.transaction_id,
        amount: Math.abs(tx.amount), // Plaid uses negative for debits
        currency: tx.iso_currency_code,
        name: tx.name,
        merchantName: tx.merchant_name || undefined,
        category: tx.category || [],
        categoryId: tx.category_id,
        date: new Date(tx.date),
        pending: tx.pending,
        location: tx.location ? {
          address: tx.location.address,
          city: tx.location.city,
          region: tx.location.region,
          postalCode: tx.location.postal_code,
          country: tx.location.country,
          coordinates: tx.location.lat && tx.location.lon ? {
            lat: tx.location.lat,
            lon: tx.location.lon
          } : undefined
        } : undefined,
        paymentChannel: this.mapPlaidPaymentChannel(tx.payment_channel),
        transactionType: tx.transaction_type,
        aiCategorized: false,
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date()
      })) as Transaction[]

      // TODO: Save to database
      return transactions
    } catch (error) {
      console.error('Error syncing transactions:', error)
      throw new Error('Failed to sync transactions')
    }
  }

  // Financial Analysis
  async generateFinancialSummary(userId: string): Promise<FinancialSummary> {
    try {
      // TODO: Get data from database
      const mockSummary: FinancialSummary = {
        userId,
        totalBalance: 0,
        totalDebt: 0,
        netWorth: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        monthlySavings: 0,
        emergencyFund: 0,
        lastUpdated: new Date()
      }

      return mockSummary
    } catch (error) {
      console.error('Error generating financial summary:', error)
      throw new Error('Failed to generate financial summary')
    }
  }

  async analyzeSpending(
    userId: string, 
    period: 'week' | 'month' | 'quarter' | 'year',
    startDate: Date,
    endDate: Date
  ): Promise<SpendingAnalysis> {
    try {
      // TODO: Get transactions from database and analyze
      const mockAnalysis: SpendingAnalysis = {
        userId,
        period,
        startDate,
        endDate,
        totalSpent: 0,
        categoryBreakdown: [],
        topMerchants: [],
        spendingTrends: [],
        insights: [],
        createdAt: new Date()
      }

      return mockAnalysis
    } catch (error) {
      console.error('Error analyzing spending:', error)
      throw new Error('Failed to analyze spending')
    }
  }

  // Goal Management
  async createGoal(goalData: Omit<FinancialGoal, 'id' | 'createdAt' | 'updatedAt'>): Promise<FinancialGoal> {
    try {
      const goal: FinancialGoal = {
        ...goalData,
        id: this.generateId(),
        createdAt: new Date(),
        updatedAt: new Date()
      }

      // TODO: Save to database
      return goal
    } catch (error) {
      console.error('Error creating goal:', error)
      throw new Error('Failed to create goal')
    }
  }

  async updateGoalProgress(goalId: string, newAmount: number): Promise<FinancialGoal> {
    try {
      // TODO: Get goal from database and update
      throw new Error('Not implemented yet')
    } catch (error) {
      console.error('Error updating goal progress:', error)
      throw new Error('Failed to update goal progress')
    }
  }

  // Budget Management
  async createBudget(budgetData: Omit<Budget, 'id' | 'createdAt' | 'updatedAt'>): Promise<Budget> {
    try {
      const budget: Budget = {
        ...budgetData,
        id: this.generateId(),
        createdAt: new Date(),
        updatedAt: new Date()
      }

      // TODO: Save to database
      return budget
    } catch (error) {
      console.error('Error creating budget:', error)
      throw new Error('Failed to create budget')
    }
  }

  // AI Insights
  async generateAIInsights(userId: string): Promise<AIInsight[]> {
    try {
      // TODO: Implement AI analysis logic
      const mockInsights: AIInsight[] = [
        {
          id: this.generateId(),
          userId,
          type: 'spending_pattern',
          title: 'Unusual Spending Detected',
          message: 'Your spending on dining out is 25% higher than last month.',
          severity: 'warning',
          actionRequired: false,
          confidence: 0.85,
          isRead: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      return mockInsights
    } catch (error) {
      console.error('Error generating AI insights:', error)
      throw new Error('Failed to generate AI insights')
    }
  }

  // Utility Methods
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  private mapPlaidAccountType(plaidType: string): FinancialAccount['type'] {
    const typeMap: Record<string, FinancialAccount['type']> = {
      'depository': 'checking',
      'credit': 'credit',
      'loan': 'loan',
      'investment': 'investment',
      'other': 'other'
    }
    return typeMap[plaidType] || 'other'
  }

  private mapPlaidPaymentChannel(channel: string): Transaction['paymentChannel'] {
    const channelMap: Record<string, Transaction['paymentChannel']> = {
      'online': 'online',
      'in store': 'in_store',
      'other': 'other'
    }
    return channelMap[channel] || 'other'
  }

  // Data Validation
  validateTransaction(transaction: Partial<Transaction>): boolean {
    return !!(
      transaction.userId &&
      transaction.accountId &&
      transaction.amount &&
      transaction.name &&
      transaction.date
    )
  }

  validateGoal(goal: Partial<FinancialGoal>): boolean {
    return !!(
      goal.userId &&
      goal.name &&
      goal.targetAmount &&
      goal.targetDate
    )
  }

  validateBudget(budget: Partial<Budget>): boolean {
    return !!(
      budget.userId &&
      budget.name &&
      budget.amount &&
      budget.period &&
      budget.startDate &&
      budget.endDate
    )
  }
}

// Export singleton instance
export const financialService = FinancialService.getInstance()
