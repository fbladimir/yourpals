import { useState, useEffect } from 'react'

interface FinancialData {
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  loading: boolean
  error: string | null
}

export function useFinancialData(userId: string) {
  const [data, setData] = useState<FinancialData>({
    accounts: [],
    transactions: [],
    summary: null,
    insights: [],
    goals: [],
    loading: true,
    error: null
  })

  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const refreshData = async () => {
    if (!userId) return
    
    try {
      setData(prev => ({ ...prev, loading: true, error: null }))
      
      // Call refresh API endpoint
      const response = await fetch('/api/moneypal/refresh-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to refresh data')
      }
      
      // Trigger data refetch
      setRefreshTrigger(prev => prev + 1)
    } catch (error: any) {
      console.error('Error refreshing data:', error)
      setData(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Failed to refresh data'
      }))
    }
  }

  useEffect(() => {
    if (!userId) return

    const fetchData = async () => {
      try {
        console.log('Fetching financial data for user:', userId)
        setData(prev => ({ ...prev, loading: true, error: null }))

        // Fetch all financial data from API endpoint
        const response = await fetch(`/api/moneypal/financial-data?userId=${userId}`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('Financial data API response:', result)
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch financial data')
        }

        const { accounts, transactions, summary, insights, goals } = result.data

        setData({
          accounts: accounts || [],
          transactions: transactions || [],
          summary: summary || null,
          insights: insights || [],
          goals: goals || [],
          loading: false,
          error: null
        })
        
        console.log('Financial data updated:', { accounts, transactions, summary, insights, goals })
      } catch (error: any) {
        console.error('Error fetching financial data:', error)
        setData(prev => ({
          ...prev,
          loading: false,
          error: error.message || 'Failed to fetch financial data'
        }))
      }
    }

    fetchData()
  }, [userId, refreshTrigger])

  // Helper functions for common operations
  const getAccountById = (accountId: string) => {
    return data.accounts.find(account => account.id === accountId)
  }

  const getTransactionsByAccount = (accountId: string) => {
    return data.transactions.filter(tx => tx.plaidAccountId === accountId)
  }

  const getRecentTransactions = (limit: number = 10) => {
    return data.transactions.slice(0, limit)
  }

  const getSpendingByCategory = (period: 'week' | 'month' = 'month') => {
    const now = new Date()
    const startDate = period === 'week' 
      ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      : new Date(now.getFullYear(), now.getMonth(), 1)

    const periodTransactions = data.transactions.filter(tx => 
      new Date(tx.date) >= startDate && Number(tx.amount) < 0
    )

    const categoryMap = new Map<string, { amount: number; count: number }>()
    
    periodTransactions.forEach(tx => {
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

    return Array.from(categoryMap.entries())
      .map(([category, data]) => ({
        category,
        amount: data.amount,
        transactionCount: data.count,
        percentage: 0 // Will be calculated when needed
      }))
      .sort((a, b) => b.amount - a.amount)
  }

  const getTopMerchants = (period: 'week' | 'month' = 'month') => {
    const now = new Date()
    const startDate = period === 'week' 
      ? new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      : new Date(now.getFullYear(), now.getMonth(), 1)

    const periodTransactions = data.transactions.filter(tx => 
      new Date(tx.date) >= startDate && Number(tx.amount) < 0
    )

    const merchantMap = new Map<string, { amount: number; count: number }>()
    
    periodTransactions.forEach(tx => {
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

    return Array.from(merchantMap.entries())
      .map(([merchant, data]) => ({
        merchant,
        amount: data.amount,
        transactionCount: data.count
      }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 10)
  }

  return {
    ...data,
    refreshData,
    getAccountById,
    getTransactionsByAccount,
    getRecentTransactions,
    getSpendingByCategory,
    getTopMerchants
  }
}
