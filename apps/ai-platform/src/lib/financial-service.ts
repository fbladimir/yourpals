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
import { databaseService } from './database-service'

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
  async syncAccounts(userId: string, accessToken: string, plaidItemId: string): Promise<any[]> {
    try {
      const plaidAccounts = await getAccounts(accessToken)
      
      // Transform and save each Plaid account to database
      const savedAccounts = []
      for (const account of plaidAccounts) {
        try {
          const savedAccount = await databaseService.createPlaidAccount({
            userId,
            plaidAccountId: account.account_id,
            plaidItemId,
            name: account.name,
            officialName: account.official_name || undefined,
            type: account.type,
            subtype: account.subtype || undefined,
            mask: account.mask,
            institutionName: 'Unknown Institution', // Will be updated when we have item info
            currentBalance: account.balances.current || 0,
            availableBalance: account.balances.available || 0,
            limit: account.balances.limit || undefined
          })
          
          savedAccounts.push(savedAccount)
        } catch (error) {
          console.error(`Error saving account ${account.account_id}:`, error)
          // Continue with other accounts
        }
      }

      return savedAccounts
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
  ): Promise<any[]> {
    try {
      const plaidTransactions = await getTransactions(accessToken, startDate, endDate)
      
      // Transform and save each Plaid transaction to database
      const savedTransactions = []
      for (const tx of plaidTransactions) {
        try {
          // Find the corresponding Plaid account
          const account = await databaseService.getPlaidAccountByPlaidId(tx.account_id)
          if (!account) {
            console.warn(`No account found for transaction ${tx.transaction_id}`)
            continue
          }

          const savedTransaction = await databaseService.createTransaction({
            userId,
            plaidAccountId: account.id,
            plaidTransactionId: tx.transaction_id,
            date: new Date(tx.date),
            amount: tx.amount, // Keep Plaid's amount (negative for debits)
            merchant: tx.name,
            category: tx.category?.[0] || 'Uncategorized',
            subcategory: tx.category?.[1] || undefined,
            source: 'plaid',
            isPending: tx.pending,
            location: tx.location || undefined,
            paymentChannel: tx.payment_channel,
            transactionType: tx.transaction_type
          })
          
          savedTransactions.push(savedTransaction)
        } catch (error) {
          console.error(`Error saving transaction ${tx.transaction_id}:`, error)
          // Continue with other transactions
        }
      }

      return savedTransactions
    } catch (error) {
      console.error('Error syncing transactions:', error)
      throw new Error('Failed to sync transactions')
    }
  }

  // Financial Analysis
  async generateFinancialSummary(userId: string): Promise<FinancialSummary> {
    try {
      // Get real data from database
      const summary = await databaseService.getFinancialSummary(userId)
      
      // Transform to our FinancialSummary format
      const financialSummary: FinancialSummary = {
        userId,
        totalBalance: summary.totalBalance,
        totalDebt: summary.totalDebt,
        netWorth: summary.netWorth,
        monthlyIncome: 0, // TODO: Calculate from income transactions
        monthlyExpenses: summary.monthlyExpenses,
        monthlySavings: 0, // TODO: Calculate from savings transactions
        emergencyFund: 0, // TODO: Get from emergency fund goal
        lastUpdated: summary.lastUpdated
      }

      return financialSummary
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
      // Get real transactions from database
      const transactions = await databaseService.getTransactionsByUserId(userId, {
        startDate,
        endDate
      })

      // Calculate spending analysis
      const expenses = transactions.filter(tx => Number(tx.amount) < 0)
      const totalSpent = expenses.reduce((sum, tx) => sum + Math.abs(Number(tx.amount)), 0)
      
      // Category breakdown
      const categoryMap = new Map<string, { amount: number; count: number }>()
      expenses.forEach(tx => {
        const category = tx.category || 'Uncategorized'
        const amount = Math.abs(Number(tx.amount))
        const existing = categoryMap.get(category)
        if (existing) {
          existing.amount += amount
          existing.count += 1
        } else {
          categoryMap.set(category, { amount, count: 1 })
        }
      })
      
      const categoryBreakdown = Array.from(categoryMap.entries()).map(([category, data]) => ({
        category,
        amount: data.amount,
        percentage: (data.amount / totalSpent) * 100,
        transactionCount: data.count
      })).sort((a, b) => b.amount - a.amount)

      // Top merchants
      const merchantMap = new Map<string, { amount: number; count: number }>()
      expenses.forEach(tx => {
        const merchant = tx.merchant || 'Unknown'
        const amount = Math.abs(Number(tx.amount))
        const existing = merchantMap.get(merchant)
        if (existing) {
          existing.amount += amount
          existing.count += 1
        } else {
          merchantMap.set(merchant, { amount, count: 1 })
        }
      })
      
      const topMerchants = Array.from(merchantMap.entries())
        .map(([merchant, data]) => ({ 
          merchant, 
          amount: data.amount,
          transactionCount: data.count
        }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 10)

      const analysis: SpendingAnalysis = {
        userId,
        period,
        startDate,
        endDate,
        totalSpent,
        categoryBreakdown,
        topMerchants,
        spendingTrends: [], // TODO: Implement trend analysis
        insights: [], // TODO: Generate AI insights
        createdAt: new Date()
      }

      return analysis
    } catch (error) {
      console.error('Error analyzing spending:', error)
      throw new Error('Failed to analyze spending')
    }
  }

  // Goal Management
  async createGoal(goalData: Omit<FinancialGoal, 'id' | 'createdAt' | 'updatedAt'>): Promise<any> {
    try {
      const goal = await databaseService.createGoal({
        userId: goalData.userId,
        type: goalData.type,
        targetAmount: goalData.targetAmount,
        targetDate: goalData.targetDate,
        progressAmount: goalData.currentAmount || 0
      })

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
  async createBudget(budgetData: Omit<Budget, 'id' | 'createdAt' | 'updatedAt'>): Promise<any> {
    try {
      // TODO: Implement budget creation in database service
      throw new Error('Budget creation not implemented yet')
    } catch (error) {
      console.error('Error creating budget:', error)
      throw new Error('Failed to create budget')
    }
  }

  // AI Insights
  async generateAIInsights(userId: string): Promise<any[]> {
    try {
      // TODO: Implement AI analysis logic
      const mockInsight = await databaseService.createAIInsight({
        userId,
        type: 'SPENDING_ALERT',
        title: 'Unusual Spending Detected',
        message: 'Your spending on dining out is 25% higher than last month.',
        actionRequired: false,
        priority: 'MEDIUM'
      })

      return [mockInsight]
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
