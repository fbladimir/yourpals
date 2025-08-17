import { useState, useEffect, useCallback } from 'react'

interface ManualAccount {
  id: string
  name: string
  type: 'checking' | 'savings' | 'credit' | 'investment'
  balance: number
  currency: string
  institution: string
  lastSync: string
  status: 'active' | 'inactive'
}

interface ManualTransaction {
  id: string
  date: string
  description: string
  amount: number
  category: string
  accountId: string
  merchant: string
  recurring?: boolean
  recurringFrequency?: 'weekly' | 'monthly' | 'yearly'
}

interface ManualFinancialGoal {
  id: string
  name: string
  target: number
  current: number
  deadline: string
  type: 'savings' | 'debt' | 'investment' | 'emergency'
  priority: 'low' | 'medium' | 'high'
  status: 'active' | 'completed' | 'paused'
}

interface ManualFinancialSummary {
  totalBalance: number
  monthlyIncome: number
  monthlyExpenses: number
  monthlySavings: number
  creditScore: number
  emergencyFund: number
  totalDebt: number
  investmentAmount: number
  monthlyChange: number
}

interface ManualFinancialData {
  accounts: ManualAccount[]
  transactions: ManualTransaction[]
  summary: ManualFinancialSummary
  goals: ManualFinancialGoal[]
  lastUpdated: string
}

const STORAGE_KEY = 'moneypal-manual-data'

export function useManualFinancialData(userId: string) {
  const [data, setData] = useState<ManualFinancialData>({
    accounts: [],
    transactions: [],
    summary: {
      totalBalance: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      monthlySavings: 0,
      creditScore: 750,
      emergencyFund: 0,
      totalDebt: 0,
      investmentAmount: 0,
      monthlyChange: 0
    },
    goals: [],
    lastUpdated: new Date().toISOString()
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load data from localStorage on mount
  useEffect(() => {
    if (!userId) return

    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}-${userId}`)
      if (stored) {
        const parsedData = JSON.parse(stored)
        setData(parsedData)
      }
    } catch (err) {
      console.error('Error loading manual financial data:', err)
      setError('Failed to load saved data')
    } finally {
      setLoading(false)
    }
  }, [userId])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (!userId || loading) return

    try {
      localStorage.setItem(`${STORAGE_KEY}-${userId}`, JSON.stringify(data))
    } catch (err) {
      console.error('Error saving manual financial data:', err)
      setError('Failed to save data')
    }
  }, [data, userId, loading])

  // Calculate summary from accounts and transactions
  const calculateSummary = useCallback((accounts: ManualAccount[], transactions: ManualTransaction[]) => {
    const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0)
    
    const monthlyTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.date)
      const now = new Date()
      return txDate.getMonth() === now.getMonth() && txDate.getFullYear() === now.getFullYear()
    })

    const monthlyIncome = monthlyTransactions
      .filter(tx => tx.amount > 0)
      .reduce((sum, tx) => sum + tx.amount, 0)

    const monthlyExpenses = monthlyTransactions
      .filter(tx => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0)

    const monthlySavings = monthlyIncome - monthlyExpenses

    return {
      totalBalance,
      monthlyIncome,
      monthlyExpenses,
      monthlySavings,
      creditScore: data.summary.creditScore,
      emergencyFund: data.summary.emergencyFund,
      totalDebt: data.summary.totalDebt,
      investmentAmount: data.summary.investmentAmount,
      monthlyChange: monthlySavings
    }
  }, [data.summary])

  // Update accounts
  const updateAccounts = useCallback((accounts: ManualAccount[]) => {
    const summary = calculateSummary(accounts, data.transactions)
    setData(prev => ({
      ...prev,
      accounts,
      summary,
      lastUpdated: new Date().toISOString()
    }))
  }, [calculateSummary, data.transactions])

  // Update transactions
  const updateTransactions = useCallback((transactions: ManualTransaction[]) => {
    const summary = calculateSummary(data.accounts, transactions)
    setData(prev => ({
      ...prev,
      transactions,
      summary,
      lastUpdated: new Date().toISOString()
    }))
  }, [calculateSummary, data.accounts])

  // Update summary fields
  const updateSummary = useCallback((updates: Partial<ManualFinancialSummary>) => {
    setData(prev => ({
      ...prev,
      summary: { ...prev.summary, ...updates },
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  // Update goals
  const updateGoals = useCallback((goals: ManualFinancialGoal[]) => {
    setData(prev => ({
      ...prev,
      goals,
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  // Add new account
  const addAccount = useCallback((account: Omit<ManualAccount, 'id' | 'lastSync'>) => {
    const newAccount: ManualAccount = {
      ...account,
      id: Date.now().toString(),
      lastSync: new Date().toISOString()
    }
    updateAccounts([...data.accounts, newAccount])
  }, [data.accounts, updateAccounts])

  // Update existing account
  const updateAccount = useCallback((id: string, updates: Partial<ManualAccount>) => {
    const updatedAccounts = data.accounts.map(acc => 
      acc.id === id ? { ...acc, ...updates } : acc
    )
    updateAccounts(updatedAccounts)
  }, [data.accounts, updateAccounts])

  // Remove account
  const removeAccount = useCallback((id: string) => {
    const updatedAccounts = data.accounts.filter(acc => acc.id !== id)
    // Also remove transactions for this account
    const updatedTransactions = data.transactions.filter(tx => tx.accountId !== id)
    updateAccounts(updatedAccounts)
    updateTransactions(updatedTransactions)
  }, [data.accounts, data.transactions, updateAccounts, updateTransactions])

  // Add new transaction
  const addTransaction = useCallback((transaction: Omit<ManualTransaction, 'id'>) => {
    const newTransaction: ManualTransaction = {
      ...transaction,
      id: Date.now().toString()
    }
    updateTransactions([...data.transactions, newTransaction])
  }, [data.transactions, updateTransactions])

  // Update existing transaction
  const updateTransaction = useCallback((id: string, updates: Partial<ManualTransaction>) => {
    const updatedTransactions = data.transactions.map(tx => 
      tx.id === id ? { ...tx, ...updates } : tx
    )
    updateTransactions(updatedTransactions)
  }, [data.transactions, updateTransactions])

  // Remove transaction
  const removeTransaction = useCallback((id: string) => {
    const updatedTransactions = data.transactions.filter(tx => tx.id !== id)
    updateTransactions(updatedTransactions)
  }, [data.transactions, updateTransactions])

  // Add new goal
  const addGoal = useCallback((goal: Omit<ManualFinancialGoal, 'id'>) => {
    const newGoal: ManualFinancialGoal = {
      ...goal,
      id: Date.now().toString()
    }
    updateGoals([...data.goals, newGoal])
  }, [data.goals, updateGoals])

  // Update existing goal
  const updateGoal = useCallback((id: string, updates: Partial<ManualFinancialGoal>) => {
    const updatedGoals = data.goals.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    )
    updateGoals(updatedGoals)
  }, [data.goals, updateGoals])

  // Remove goal
  const removeGoal = useCallback((id: string) => {
    const updatedGoals = data.goals.filter(goal => goal.id !== id)
    updateGoals(updatedGoals)
  }, [data.goals, updateGoals])

  // Get spending by category
  const getSpendingByCategory = useCallback((period: 'week' | 'month' = 'month') => {
    const now = new Date()
    const startDate = period === 'week' 
      ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      : new Date(now.getFullYear(), now.getMonth(), 1)

    const periodTransactions = data.transactions.filter(tx => 
      new Date(tx.date) >= startDate && tx.amount < 0
    )

    const categoryMap = new Map<string, { amount: number; count: number }>()
    
    periodTransactions.forEach(tx => {
      const category = tx.category || 'Uncategorized'
      const amount = Math.abs(tx.amount)
      const existing = categoryMap.get(category)
      
      if (existing) {
        existing.amount += amount
        existing.count += 1
      } else {
        categoryMap.set(category, { amount, count: 1 })
      }
    })

    return Array.from(categoryMap.entries())
      .map(([category, data]) => ({
        category,
        amount: data.amount,
        transactionCount: data.count,
        percentage: 0 // Will be calculated when needed
      }))
      .sort((a, b) => b.amount - a.amount)
  }, [data.transactions])

  // Get top merchants
  const getTopMerchants = useCallback((period: 'week' | 'month' = 'month') => {
    const now = new Date()
    const startDate = period === 'week' 
      ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      : new Date(now.getFullYear(), now.getMonth(), 1)

    const periodTransactions = data.transactions.filter(tx => 
      new Date(tx.date) >= startDate && tx.amount < 0
    )

    const merchantMap = new Map<string, { amount: number; count: number }>()
    
    periodTransactions.forEach(tx => {
      const merchant = tx.merchant || 'Unknown'
      const amount = Math.abs(tx.amount)
      const existing = merchantMap.get(merchant)
      
      if (existing) {
        existing.amount += amount
        existing.count += 1
      } else {
        merchantMap.set(merchant, { amount, count: 1 })
      }
    })

    return Array.from(merchantMap.entries())
      .map(([merchant, data]) => ({
        merchant,
        amount: data.amount,
        transactionCount: data.count
      }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 10)
  }, [data.transactions])

  // Clear all data
  const clearData = useCallback(() => {
    setData({
      accounts: [],
      transactions: [],
      summary: {
        totalBalance: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        monthlySavings: 0,
        creditScore: 750,
        emergencyFund: 0,
        totalDebt: 0,
        investmentAmount: 0,
        monthlyChange: 0
      },
      goals: [],
      lastUpdated: new Date().toISOString()
    })
  }, [])

  // Export data
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(data, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `moneypal-data-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }, [data])

  // Import data
  const importData = useCallback((importedData: ManualFinancialData) => {
    setData({
      ...importedData,
      lastUpdated: new Date().toISOString()
    })
  }, [])

  return {
    data,
    loading,
    error,
    // Account operations
    addAccount,
    updateAccount,
    removeAccount,
    // Transaction operations
    addTransaction,
    updateTransaction,
    removeTransaction,
    // Goal operations
    addGoal,
    updateGoal,
    removeGoal,
    // Summary operations
    updateSummary,
    // Data operations
    clearData,
    exportData,
    importData,
    // Helper functions
    getSpendingByCategory,
    getTopMerchants,
    // Refresh function for compatibility
    refreshData: () => Promise.resolve()
  }
}
