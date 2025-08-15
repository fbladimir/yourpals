// AI Service for MoneyPal - Handles conversations, analysis, and recommendations
import { AIInsight, ChatMessage } from './financial-types'

export interface AIResponse {
  message: string
  insights: AIInsight[]
  actions: string[]
  confidence: number
  nextQuestion?: string
}

export interface AIContext {
  userFinancialData: {
    accounts: {
      id: string
      name: string
      type: string
      balance: number
      currency: string
      accountNumber: string
    }[]
    transactions: {
      id: string
      amount: number
      date: string
      description: string
      category: string
      accountId: string
    }[]
    totalBalance: number
    monthlyIncome: number
    monthlyExpenses: number
  }
  conversationHistory: ChatMessage[]
  userPreferences: {
    riskTolerance: 'LOW' | 'MODERATE' | 'HIGH'
    automationLevel: 'BASIC' | 'ADVANCED' | 'EXPERT'
    financialGoals: string[]
  }
}

export class AIService {
  private apiKey: string
  private model: string

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || ''
    this.model = 'gpt-4' // or 'gpt-3.5-turbo' for cost optimization
  }

  // Main conversation handler
  async chat(userMessage: string, context: AIContext): Promise<AIResponse> {
    try {
      // For now, we'll use a smart rule-based system
      // In the next phase, we'll integrate with OpenAI/Claude
      return this.processFinancialQuery(userMessage, context)
    } catch (error) {
      console.error('AI Service Error:', error)
      return {
        message: "I'm having trouble processing your request right now. Let me try a different approach.",
        insights: [],
        actions: [],
        confidence: 0.5
      }
    }
  }

  // Smart financial query processing
  private processFinancialQuery(userMessage: string, context: AIContext): AIResponse {
    const message = userMessage.toLowerCase()
    const { userFinancialData } = context

    // Balance inquiries
    if (message.includes('balance') || message.includes('how much')) {
      return this.handleBalanceInquiry(userFinancialData)
    }

    // Spending analysis
    if (message.includes('spend') || message.includes('expense') || message.includes('budget')) {
      return this.handleSpendingAnalysis(userFinancialData, context)
    }

    // Savings recommendations
    if (message.includes('save') || message.includes('savings') || message.includes('invest')) {
      return this.handleSavingsRecommendation(userFinancialData, context)
    }

    // General financial advice
    if (message.includes('advice') || message.includes('help') || message.includes('recommend')) {
      return this.handleGeneralAdvice(userFinancialData, context)
    }

    // Default response
    return {
      message: "I'd be happy to help with your finances! You can ask me about your balance, spending patterns, savings goals, or any financial advice you need.",
      insights: [],
      actions: ['Check Balance', 'Analyze Spending', 'Set Savings Goal'],
      confidence: 0.8,
      nextQuestion: "What would you like to know about your finances?"
    }
  }

  // Handle balance inquiries
  private handleBalanceInquiry(data: AIContext['userFinancialData']): AIResponse {
    const totalBalance = data.totalBalance
    const accountCount = data.accounts.length

    let message = `Your total balance across ${accountCount} accounts is $${totalBalance.toLocaleString()}. `
    
    if (totalBalance > 0) {
      message += "That's a healthy financial position! "
      
      if (totalBalance > 10000) {
        message += "You have a strong emergency fund. Consider investing some of this for growth."
      } else if (totalBalance > 5000) {
        message += "You're building a good financial foundation. Keep it up!"
      }
    } else {
      message += "Let's work on building your savings together."
    }

    return {
      message,
      insights: [{
        id: 'balance-insight',
        userId: 'temp',
        type: 'recommendation',
        title: 'Balance Overview',
        message: `Total: $${totalBalance.toLocaleString()} | Accounts: ${accountCount}`,
        severity: 'info',
        actionRequired: false,
        confidence: 0.95,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      actions: ['View Account Details', 'Set Savings Goal', 'Analyze Spending'],
      confidence: 0.95
    }
  }

  // Handle spending analysis
  private handleSpendingAnalysis(data: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const { monthlyExpenses, monthlyIncome, transactions } = data
    const spendingRatio = monthlyExpenses / monthlyIncome

    let message = `Your monthly expenses are $${monthlyExpenses.toLocaleString()} out of $${monthlyIncome.toLocaleString()} income. `
    
    if (spendingRatio < 0.5) {
      message += "Excellent! You're saving more than 50% of your income. This is exceptional financial discipline!"
    } else if (spendingRatio < 0.7) {
      message += "Good job! You're saving about 30% of your income. This is above average."
    } else if (spendingRatio < 0.9) {
      message += "You're saving some money, but there's room to optimize your spending."
    } else {
      message += "Your expenses are high relative to income. Let's identify areas to reduce spending."
    }

    // Analyze recent transactions for insights
    const recentTransactions = transactions.slice(0, 10)
    const spendingInsights = this.analyzeSpendingPatterns(recentTransactions)

    return {
      message,
      insights: spendingInsights,
      actions: ['Create Budget', 'Track Expenses', 'Set Spending Limits'],
      confidence: 0.9
    }
  }

  // Handle savings recommendations
  private handleSavingsRecommendation(data: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const { totalBalance, monthlyIncome, monthlyExpenses } = data
    const monthlySavings = monthlyIncome - monthlyExpenses
    const emergencyFundTarget = monthlyExpenses * 3

    let message = "Let me analyze your savings situation. "
    
    if (totalBalance >= emergencyFundTarget) {
      message += `Great news! You have a solid emergency fund (${Math.round(totalBalance / monthlyExpenses)} months of expenses). `
      message += "Consider investing additional savings for long-term growth."
    } else if (totalBalance >= emergencyFundTarget * 0.5) {
      message += `You're halfway to your emergency fund goal. Keep saving $${Math.round((emergencyFundTarget - totalBalance) / 6)} per month to reach it in 6 months.`
    } else {
      message += `Let's build your emergency fund. Aim to save $${Math.round(emergencyFundTarget / 12)} per month to reach 3 months of expenses in a year.`
    }

    return {
      message,
      insights: [{
        id: 'savings-insight',
        userId: 'temp',
        type: 'savings_opportunity',
        title: 'Savings Recommendation',
        message: `Emergency Fund Target: $${emergencyFundTarget.toLocaleString()} | Current: $${totalBalance.toLocaleString()}`,
        severity: 'warning',
        actionRequired: true,
        confidence: 0.88,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      actions: ['Set Savings Goal', 'Create Auto-Savings', 'Investment Planning'],
      confidence: 0.88
    }
  }

  // Handle general financial advice
  private handleGeneralAdvice(data: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const { totalBalance, monthlyIncome, monthlyExpenses } = data
    const monthlySavings = monthlyIncome - monthlyExpenses

    let message = "Based on your financial profile, here's my advice: "
    
    if (monthlySavings > 0) {
      message += "You're in a great position! Consider: 1) Building an emergency fund, 2) Paying off high-interest debt, 3) Investing for long-term goals."
    } else {
      message += "Let's focus on: 1) Reducing expenses, 2) Increasing income, 3) Creating a realistic budget."
    }

    return {
      message,
      insights: [{
        id: 'general-advice',
        userId: 'temp',
        type: 'recommendation',
        title: 'Financial Health Assessment',
        message: monthlySavings > 0 ? 'Strong financial position' : 'Room for improvement',
        severity: 'info',
        actionRequired: false,
        confidence: 0.85,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      actions: ['Financial Health Check', 'Budget Review', 'Goal Setting'],
      confidence: 0.85
    }
  }

  // Analyze spending patterns from transactions
  private analyzeSpendingPatterns(transactions: any[]): any[] {
    const insights: any[] = []
    
    // Group by category
    const categorySpending = transactions.reduce((acc: any, tx: any) => {
      if (tx.amount < 0) { // Only expenses
        const category = tx.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + Math.abs(tx.amount)
      }
      return acc
    }, {} as Record<string, number>)

    // Find highest spending category
    const topCategory = Object.entries(categorySpending)
      .sort(([,a], [,b]) => (b as number) - (a as number))[0]

    if (topCategory) {
      insights.push({
        id: 'spending-pattern',
        userId: 'temp',
        type: 'spending_pattern',
        title: 'Top Spending Category',
        message: `${topCategory[0]}: $${(topCategory[1] as number).toFixed(2)}`,
        severity: 'info',
        actionRequired: false,
        confidence: 0.8,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return insights
  }

  // Generate spending insights
  async generateSpendingInsights(transactions: any[]): Promise<any[]> {
    // This will be enhanced with ML in Phase 2C
    const insights: any[] = []
    
    const totalSpending = transactions
      .filter((tx: any) => tx.amount < 0)
      .reduce((sum: number, tx: any) => sum + Math.abs(tx.amount), 0)

    if (totalSpending > 1000) {
      insights.push({
        id: 'high-spending-alert',
        userId: 'temp',
        type: 'budget_alert',
        title: 'High Monthly Spending',
        message: `Your monthly spending is $${totalSpending.toFixed(2)}. Consider reviewing your budget.`,
        severity: 'warning',
        actionRequired: true,
        confidence: 0.9,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return insights
  }

  // Check if AI service is properly configured
  isConfigured(): boolean {
    return !!this.apiKey
  }

  // Get AI model information
  getModelInfo(): { model: string; configured: boolean } {
    return {
      model: this.model,
      configured: this.isConfigured()
    }
  }
}

// Export singleton instance
export const aiService = new AIService()
