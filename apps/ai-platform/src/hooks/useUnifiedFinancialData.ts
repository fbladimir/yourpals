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
  source: 'manual' | 'plaid' | 'test'
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
  source: 'manual' | 'test'
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
  source: 'manual' | 'plaid' | 'test'
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
  source: 'manual' | 'test'
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

    // Use manual overview data for monthly income/expenses (user's budget)
    // Don't calculate from transactions - use what user actually entered
    const monthlyIncome = manualOverview?.monthlyIncome || 0
    const monthlyExpenses = manualOverview?.monthlyExpenses || 0
    const monthlySavings = monthlyIncome - monthlyExpenses
    const monthlyChange = monthlySavings // Cash flow = monthly savings

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
      monthlyChange,
      debtToIncomeRatio,
      savingsRate
    }
  }, [])

  // Merge manual data with any existing Plaid data
  const mergeFinancialData = useCallback((manualData: any, plaidData: any = null) => {
    console.log('mergeFinancialData called with:', { manualData, plaidData })
    
    if (!manualData && !plaidData) {
      console.log('No data to merge, returning null')
      return null
    }

    // Handle case where only Plaid data exists (no manual data)
    if (!manualData && plaidData) {
      console.log('Only Plaid data exists, creating unified structure')
      manualData = {
        accounts: [],
        debtAccounts: [],
        transactions: [],
        goals: [],
        summary: {
          monthlyIncome: 0,
          monthlyExpenses: 0,
          creditScore: 750,
          emergencyFund: 0,
          investmentAmount: 0
        }
      }
    }

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
      // Add Plaid accounts - handle different field structure
      const plaidAccounts = (plaidData.accounts || []).map((acc: any) => ({
        id: acc.id,
        name: acc.name || acc.officialName,
        type: acc.subtype || acc.type,
        balance: acc.balance || 0,
        currency: acc.currency || 'USD',
        institution: acc.institutionName || acc.institution || 'Plaid Institution',
        lastSync: new Date().toISOString(),
        status: 'active' as const,
        source: 'plaid' as const
      }))
      accounts.push(...plaidAccounts)

      // Add Plaid transactions - handle different field structure
      const plaidTransactions = (plaidData.transactions || []).map((tx: any) => ({
        id: tx.id,
        date: tx.date,
        description: tx.description,
        amount: tx.amount,
        category: tx.category || 'Uncategorized',
        accountId: tx.accountId,
        merchant: tx.merchant,
        source: 'plaid' as const
      }))
      transactions.push(...plaidTransactions)
      
      console.log('Merged Plaid data:', { plaidAccounts, plaidTransactions })
    }

    // Ensure summary is recalculated correctly when loading saved data
    // Don't trust the saved summary - recalculate based on actual data
    const recalculatedSummary = calculateUnifiedSummary(accounts, debtAccounts, transactions, {
      // Only use saved summary values that we can't recalculate
      monthlyIncome: manualData.summary?.monthlyIncome || 0,
      monthlyExpenses: manualData.summary?.monthlyExpenses || 0,
      creditScore: manualData.summary?.creditScore || 750,
      emergencyFund: manualData.summary?.emergencyFund || 0,
      investmentAmount: manualData.summary?.investmentAmount || 0
    })

    const result = {
      accounts,
      debtAccounts,
      transactions,
      summary: recalculatedSummary,
      goals,
      lastUpdated: new Date().toISOString(),
      dataSource: plaidData ? ('mixed' as const) : ('manual' as const)
    }

    console.log('mergeFinancialData result:', result)
    return result
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
        
        // Load manual data FIRST (this is the priority)
        const manualResponse = await fetch(`/api/moneypal/manual-data?userId=${userId}`)
        let manualData = null
        if (manualResponse.ok) {
          const result = await manualResponse.json()
          if (result.success && result.data) {
            manualData = result.data
            console.log('Manual data loaded from API:', manualData)
          }
        }

        // ALWAYS try to load from localStorage as primary source
        try {
          const localStorageData = localStorage.getItem(`moneypal-manual-data-${userId}`)
          if (localStorageData) {
            const parsedLocalData = JSON.parse(localStorageData)
            console.log('LocalStorage data found:', parsedLocalData)
            
            // Use localStorage data if it's more recent or if no API data
            if (!manualData || (parsedLocalData.lastUpdated && manualData.lastUpdated && 
                new Date(parsedLocalData.lastUpdated) > new Date(manualData.lastUpdated))) {
              manualData = parsedLocalData
              console.log('Using localStorage data (more recent)')
            } else {
              console.log('Using API data (more recent)')
            }
          }
        } catch (e) {
          console.log('No localStorage data available:', e)
        }

        // Load existing Plaid data (linked bank accounts)
        let plaidData = null
        try {
          const plaidResponse = await fetch(`/api/moneypal/financial-data?userId=${userId}`)
          if (plaidResponse.ok) {
            const result = await plaidResponse.json()
            if (result.success && result.data) {
              plaidData = result.data
              console.log('Plaid data loaded (linked bank accounts):', plaidData)
            }
          }
        } catch (e) {
          console.log('No Plaid data available:', e)
        }

        // Merge and set unified data
        console.log('Data loading summary:', {
          hasManualData: !!manualData,
          hasPlaidData: !!plaidData,
          manualDataAccounts: manualData?.accounts?.length || 0,
          plaidDataAccounts: plaidData?.accounts?.length || 0
        })

        if (manualData || plaidData) {
          const mergedData = mergeFinancialData(manualData, plaidData)
          if (mergedData) {
            console.log('Setting unified data:', mergedData)
            setUnifiedData(mergedData)
          } else {
            console.error('Failed to merge financial data')
          }
        } else {
          console.log('No data available, setting empty state')
          // Set empty state explicitly
          setUnifiedData({
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

  // Ensure data is saved to localStorage for persistence
  const saveToLocalStorage = useCallback((data: any) => {
    if (userId && data) {
      try {
        const dataToSave = {
          ...data,
          lastUpdated: new Date().toISOString()
        }
        localStorage.setItem(`moneypal-manual-data-${userId}`, JSON.stringify(dataToSave))
        console.log('Data saved to localStorage for persistence')
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }, [userId])

  // Update specific data sections
  const updateAccounts = useCallback((accounts: UnifiedAccount[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, accounts }
      const summary = calculateUnifiedSummary(accounts, prev.debtAccounts, prev.transactions, prev.summary)
      const updatedData = { ...newData, summary, lastUpdated: new Date().toISOString() }
      
      // Always save to localStorage for persistence
      saveToLocalStorage(updatedData)
      
      return updatedData
    })
  }, [calculateUnifiedSummary, saveToLocalStorage])

  const updateDebtAccounts = useCallback((debtAccounts: UnifiedDebtAccount[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, debtAccounts }
      const summary = calculateUnifiedSummary(prev.accounts, debtAccounts, prev.transactions, prev.summary)
      const updatedData = { ...newData, summary, lastUpdated: new Date().toISOString() }
      
      // Always save to localStorage for persistence
      saveToLocalStorage(updatedData)
      
      return updatedData
    })
  }, [calculateUnifiedSummary, saveToLocalStorage])

  const updateTransactions = useCallback((transactions: UnifiedTransaction[]) => {
    setUnifiedData(prev => {
      const newData = { ...prev, transactions }
      const summary = calculateUnifiedSummary(prev.accounts, prev.debtAccounts, transactions, prev.summary)
      const updatedData = { ...newData, summary, lastUpdated: new Date().toISOString() }
      
      // Always save to localStorage for persistence
      saveToLocalStorage(updatedData)
      
      return updatedData
    })
  }, [calculateUnifiedSummary, saveToLocalStorage])

  const updateGoals = useCallback((goals: UnifiedFinancialGoal[]) => {
    setUnifiedData(prev => {
      const updatedData = {
        ...prev,
        goals,
        lastUpdated: new Date().toISOString()
      }
      
      // Always save to localStorage for persistence
      saveToLocalStorage(updatedData)
      
      return updatedData
    })
  }, [saveToLocalStorage])

  const updateSummary = useCallback((summary: Partial<UnifiedFinancialSummary>) => {
    setUnifiedData(prev => {
      const updatedData = {
        ...prev,
        summary: { ...prev.summary, ...summary },
        lastUpdated: new Date().toISOString()
      }
      
      // Always save to localStorage for persistence
      saveToLocalStorage(updatedData)
      
      return updatedData
    })
  }, [saveToLocalStorage])

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
