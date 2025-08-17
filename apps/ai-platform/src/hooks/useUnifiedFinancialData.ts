import { useState, useEffect, useCallback, useRef } from 'react'
import { useManualFinancialData } from './useManualFinancialData'

interface UnifiedAccount {
  id: string
  name: string
  type: 'checking' | 'savings' | 'investment'
  balance: number
  currency: string
  institution: string
  lastSync: string
  status: 'active' | 'inactive'
  source: 'manual' | 'plaid'
}

interface UnifiedDebtAccount {
  id: string
  name: string
  type: 'credit-card' | 'student-loan' | 'car-loan' | 'mortgage' | 'personal-loan' | 'other'
  balance: number
  currency: string
  institution: string
  interestRate: number
  minimumPayment: number
  dueDate: string
  status: 'active' | 'inactive'
  source: 'manual'
}

interface UnifiedTransaction {
  id: string
  date: string
  description: string
  amount: number
  category: string
  accountId: string
  merchant: string
  recurring?: boolean
  recurringFrequency?: 'weekly' | 'monthly' | 'yearly'
  source: 'manual' | 'plaid'
}

interface UnifiedFinancialGoal {
  id: string
  name: string
  target: number
  current: number
  deadline: string
  type: 'savings' | 'debt' | 'investment' | 'emergency'
  priority: 'low' | 'medium' | 'high'
  status: 'active' | 'completed' | 'paused'
  source: 'manual'
}

interface UnifiedFinancialSummary {
  totalAssets: number
  totalDebt: number
  netWorth: number
  monthlyIncome: number
  monthlyExpenses: number
  monthlySavings: number
  creditScore: number
  emergencyFund: number
  investmentAmount: number
  monthlyChange: number
  debtToIncomeRatio: number
  savingsRate: number
}

interface UnifiedFinancialData {
  accounts: UnifiedAccount[]
  debtAccounts: UnifiedDebtAccount[]
  transactions: UnifiedTransaction[]
  summary: UnifiedFinancialSummary
  goals: UnifiedFinancialGoal[]
  lastUpdated: string
  dataSource: 'manual' | 'plaid' | 'mixed'
}

export function useUnifiedFinancialData(userId: string) {
  const [unifiedData, setUnifiedData] = useState<UnifiedFinancialData>({
    accounts: [],
    debtAccounts: [],
    transactions: [],
    summary: {
      totalAssets: 0,
      totalDebt: 0,
      netWorth: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      monthlySavings: 0,
      creditScore: 750,
      emergencyFund: 0,
      investmentAmount: 0,
      monthlyChange: 0,
      debtToIncomeRatio: 0,
      savingsRate: 0
    },
    goals: [],
    lastUpdated: new Date().toISOString(),
    dataSource: 'manual'
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Get manual financial data
  const manualData = useManualFinancialData(userId)

  // Ref for tracking if component is mounted
  const isMounted = useRef(true)

  // Calculate unified summary from all data sources
  const calculateUnifiedSummary = useCallback((
    accounts: UnifiedAccount[],
    debtAccounts: UnifiedDebtAccount[],
    transactions: UnifiedTransaction[],
    manualOverview: any
  ): UnifiedFinancialSummary => {
    const totalAssets = accounts.reduce((sum, acc) => sum + acc.balance, 0)
    const totalDebt = debtAccounts.reduce((sum, acc) => sum + acc.balance, 0)
    const netWorth = totalAssets - totalDebt

    // Calculate monthly income/expenses from transactions
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

    // Calculate financial ratios
    const debtToIncomeRatio = monthlyIncome > 0 ? (totalDebt / monthlyIncome) * 100 : 0
    const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0

    return {
      totalAssets,
      totalDebt,
      netWorth,
      monthlyIncome,
      monthlyExpenses,
      monthlySavings,
      creditScore: manualOverview?.creditScore || 750,
      emergencyFund: manualOverview?.emergencyFund || 0,
      investmentAmount: manualOverview?.investmentAmount || 0,
      monthlyChange: monthlySavings,
      debtToIncomeRatio,
      savingsRate
    }
  }, [])

  // Merge manual data with any existing Plaid data
  const mergeFinancialData = useCallback((manualData: any, plaidData: any = null) => {
    if (!manualData) return null

    const accounts: UnifiedAccount[] = (manualData.accounts || []).map((acc: any) => ({
      ...acc,
      source: 'manual' as const
    }))

    const debtAccounts: UnifiedDebtAccount[] = (manualData.debtAccounts || []).map((acc: any) => ({
      ...acc,
      source: 'manual' as const
    }))

    const transactions: UnifiedTransaction[] = (manualData.transactions || []).map((tx: any) => ({
      ...tx,
      source: 'manual' as const
    }))

    const goals: UnifiedFinancialGoal[] = (manualData.goals || []).map((goal: any) => ({
      ...goal,
      source: 'manual' as const
    }))

    // If we have Plaid data, merge it (for future use)
    if (plaidData) {
      // Add Plaid accounts
      const plaidAccounts = (plaidData.accounts || []).map((acc: any) => ({
        ...acc,
        source: 'plaid' as const
      }))
      accounts.push(...plaidAccounts)

      // Add Plaid transactions
      const plaidTransactions = (plaidData.transactions || []).map((tx: any) => ({
        ...tx,
        source: 'plaid' as const
      }))
      transactions.push(...plaidTransactions)
    }

    const summary = calculateUnifiedSummary(accounts, debtAccounts, transactions, manualData.summary)

    return {
      accounts,
      debtAccounts,
      transactions,
      summary,
      goals,
      lastUpdated: new Date().toISOString(),
      dataSource: plaidData ? ('mixed' as const) : ('manual' as const)
    }
  }, [calculateUnifiedSummary])

  // Update unified data when manual data changes
  useEffect(() => {
    if (!manualData.data || !isMounted.current) return

    const mergedData = mergeFinancialData(manualData.data)
    if (mergedData) {
      setUnifiedData(mergedData)
    }
  }, [manualData.data, mergeFinancialData])

  // Load initial data
  useEffect(() => {
    if (!userId) return

    const loadInitialData = async () => {
      try {
        setLoading(true)
        console.log('Loading unified financial data for user:', userId)
        
        // Try to load any existing Plaid data (for future use)
        let plaidData = null
        try {
          const response = await fetch(`/api/moneypal/financial-data?userId=${userId}`)
          if (response.ok) {
            const result = await response.json()
            if (result.success && result.data) {
              plaidData = result.data
              console.log('Plaid data loaded:', plaidData)
            }
          }
        } catch (e) {
          // No Plaid data available, continue with manual data only
          console.log('No Plaid data available')
        }

        // Load manual data
        const manualResponse = await fetch(`/api/moneypal/manual-data?userId=${userId}`)
        let manualData = null
        if (manualResponse.ok) {
          const result = await manualResponse.json()
          if (result.success && result.data) {
            manualData = result.data
            console.log('Manual data loaded:', manualData)
          }
        }

        // Also try to load from localStorage as backup
        try {
          const localStorageData = localStorage.getItem(`moneypal-manual-data-${userId}`)
          if (localStorageData) {
            const parsedLocalData = JSON.parse(localStorageData)
            console.log('LocalStorage data found:', parsedLocalData)
            // Use localStorage data if no API data
            if (!manualData) {
              manualData = parsedLocalData
            }
          }
        } catch (e) {
          console.log('No localStorage data available')
        }

        // Merge and set unified data
        if (manualData || plaidData) {
          const mergedData = mergeFinancialData(manualData, plaidData)
          if (mergedData) {
            console.log('Setting unified data:', mergedData)
            setUnifiedData(mergedData)
          }
        } else {
          console.log('No data available, setting empty state')
        }
      } catch (error: any) {
        console.error('Error loading unified financial data:', error)
        setError(error.message || 'Failed to load financial data')
      } finally {
        setLoading(false)
      }
    }

    loadInitialData()
  }, [userId, mergeFinancialData])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  // Refresh data
  const refreshData = useCallback(async () => {
    setRefreshTrigger(prev => prev + 1)
  }, [])

  // Update specific data sections
  const updateAccounts = useCallback((accounts: UnifiedAccount[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, accounts }
      const summary = calculateUnifiedSummary(accounts, prev.debtAccounts, prev.transactions, prev.summary)
      return { ...newData, summary, lastUpdated: new Date().toISOString() }
    })
  }, [calculateUnifiedSummary])

  const updateDebtAccounts = useCallback((debtAccounts: UnifiedDebtAccount[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, debtAccounts }
      const summary = calculateUnifiedSummary(prev.accounts, debtAccounts, prev.transactions, prev.summary)
      return { ...newData, summary, lastUpdated: new Date().toISOString() }
    })
  }, [calculateUnifiedSummary])

  const updateTransactions = useCallback((transactions: UnifiedTransaction[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, transactions }
      const summary = calculateUnifiedSummary(prev.accounts, prev.debtAccounts, transactions, prev.summary)
      return { ...newData, summary, lastUpdated: new Date().toISOString() }
    })
  }, [calculateUnifiedSummary])

  const updateGoals = useCallback((goals: UnifiedFinancialGoal[]) => {
    setUnifiedData(prev => ({
      ...prev,
      goals,
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  const updateSummary = useCallback((updates: Partial<UnifiedFinancialSummary>) => {
    setUnifiedData(prev => ({
      ...prev,
      summary: { ...prev.summary, ...updates },
      lastUpdated: new Date().toISOString()
    }))
  }, [])

  // Helper functions
  const getAccountById = useCallback((id: string) => {
    return unifiedData.accounts.find(acc => acc.id === id)
  }, [unifiedData.accounts])

  const getDebtAccountById = useCallback((id: string) => {
    return unifiedData.debtAccounts.find(acc => acc.id === id)
  }, [unifiedData.debtAccounts])

  const getTransactionsByAccount = useCallback((accountId: string) => {
    return unifiedData.transactions.filter(tx => tx.accountId === accountId)
  }, [unifiedData.transactions])

  const getRecentTransactions = useCallback((limit: number = 10) => {
    return unifiedData.transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
  }, [unifiedData.transactions])

  const getSpendingByCategory = useCallback((period: 'week' | 'month' = 'month') => {
    const now = new Date()
    const startDate = period === 'week' 
      ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      : new Date(now.getFullYear(), now.getMonth(), 1)

    const periodTransactions = unifiedData.transactions.filter(tx => 
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
        percentage: 0
      }))
      .sort((a, b) => b.amount - a.amount)
  }, [unifiedData.transactions])

  return {
    data: unifiedData,
    loading,
    error,
    refreshData,
    // Update functions
    updateAccounts,
    updateDebtAccounts,
    updateTransactions,
    updateGoals,
    updateSummary,
    // Helper functions
    getAccountById,
    getDebtAccountById,
    getTransactionsByAccount,
    getRecentTransactions,
    getSpendingByCategory,
    // Manual data functions for backward compatibility
    manualData
  }
}
