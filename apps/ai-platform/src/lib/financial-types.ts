// Financial Account Types
export interface FinancialAccount {
  id: string
  userId: string
  plaidAccountId: string
  plaidItemId: string
  name: string
  officialName?: string
  type: 'checking' | 'savings' | 'credit' | 'loan' | 'investment' | 'other'
  subtype?: string
  mask: string
  balance: {
    available: number
    current: number
    limit?: number
    currency: string
  }
  isActive: boolean
  lastSync: Date
  createdAt: Date
  updatedAt: Date
}

// Transaction Types
export interface Transaction {
  id: string
  userId: string
  accountId: string
  plaidTransactionId: string
  amount: number
  currency: string
  name: string
  merchantName?: string
  category: string[]
  categoryId: string
  date: Date
  pending: boolean
  location?: {
    address?: string
    city?: string
    region?: string
    postalCode?: string
    country?: string
    coordinates?: { lat: number; lon: number }
  }
  paymentChannel: 'online' | 'in_store' | 'other'
  transactionType: 'special' | 'place' | 'digital' | 'resolved'
  aiCategorized: boolean
  aiCategory?: string
  aiConfidence?: number
  tags: string[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

// Financial Goal Types
export interface FinancialGoal {
  id: string
  userId: string
  name: string
  description?: string
  type: 'savings' | 'debt_payoff' | 'investment' | 'emergency_fund' | 'purchase' | 'other'
  targetAmount: number
  currentAmount: number
  targetDate: Date
  status: 'active' | 'completed' | 'paused' | 'cancelled'
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: string
  isRecurring: boolean
  recurringAmount?: number
  recurringFrequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly'
  createdAt: Date
  updatedAt: Date
}

// Budget Types
export interface Budget {
  id: string
  userId: string
  name: string
  description?: string
  amount: number
  spent: number
  period: 'weekly' | 'monthly' | 'quarterly' | 'yearly'
  startDate: Date
  endDate: Date
  categories: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// AI Insight Types
export interface AIInsight {
  id: string
  userId: string
  type: 'spending_pattern' | 'savings_opportunity' | 'risk_alert' | 'goal_progress' | 'budget_alert' | 'recommendation'
  title: string
  message: string
  severity: 'info' | 'warning' | 'critical'
  actionRequired: boolean
  actionType?: 'review' | 'approve' | 'modify' | 'dismiss'
  relatedData?: {
    transactions?: string[]
    accounts?: string[]
    goals?: string[]
    budgets?: string[]
  }
  confidence: number
  isRead: boolean
  expiresAt?: Date
  createdAt: Date
  updatedAt: Date
}

// Automation Rule Types
export interface AutomationRule {
  id: string
  userId: string
  name: string
  description?: string
  triggerType: 'transaction' | 'balance' | 'goal' | 'schedule' | 'pattern'
  triggerConditions: {
    field: string
    operator: 'equals' | 'greater_than' | 'less_than' | 'contains' | 'matches'
    value: any
  }[]
  actionType: 'transfer' | 'categorize' | 'alert' | 'goal_update' | 'budget_adjust'
  actionParameters: Record<string, any>
  isActive: boolean
  priority: number
  lastExecuted?: Date
  executionCount: number
  createdAt: Date
  updatedAt: Date
}

// Chat Message Types
export interface ChatMessage {
  id: string
  userId: string
  message: string
  response: string
  context: {
    currentTab?: string
    highlightedElement?: string
    relatedData?: any
  }
  messageType: 'user' | 'ai' | 'system'
  aiInsights?: string[]
  suggestedActions?: string[]
  createdAt: Date
}

// User Preferences Types
export interface UserPreferences {
  userId: string
  automationLevel: 'minimal' | 'moderate' | 'aggressive'
  notificationPreferences: {
    email: boolean
    push: boolean
    sms: boolean
    frequency: 'immediate' | 'daily' | 'weekly'
  }
  privacySettings: {
    shareAnonymizedData: boolean
    allowAILearning: boolean
    dataRetentionDays: number
  }
  aiPersonality: {
    tone: 'friendly' | 'professional' | 'casual' | 'motivational'
    detailLevel: 'simple' | 'detailed' | 'comprehensive'
    proactiveLevel: 'reactive' | 'moderate' | 'proactive'
  }
  createdAt: Date
  updatedAt: Date
}

// Financial Summary Types
export interface FinancialSummary {
  userId: string
  totalBalance: number
  totalDebt: number
  netWorth: number
  monthlyIncome: number
  monthlyExpenses: number
  monthlySavings: number
  emergencyFund: number
  creditScore?: number
  lastUpdated: Date
}

// Spending Analysis Types
export interface SpendingAnalysis {
  userId: string
  period: 'week' | 'month' | 'quarter' | 'year'
  startDate: Date
  endDate: Date
  totalSpent: number
  categoryBreakdown: {
    category: string
    amount: number
    percentage: number
    transactionCount: number
  }[]
  topMerchants: {
    merchant: string
    amount: number
    transactionCount: number
  }[]
  spendingTrends: {
    date: string
    amount: number
    change: number
  }[]
  insights: string[]
  createdAt: Date
}


