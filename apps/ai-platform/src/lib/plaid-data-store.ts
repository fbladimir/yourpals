// Simple file-based storage for Plaid data across API routes
// TODO: Replace with real database storage in next session

import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

interface PlaidAccount {
  id: string
  name: string
  type: string
  subtype: string
  balance: number
  currency: string
  accountNumber: string
  officialName?: string
  institutionName: string
}

interface PlaidTransaction {
  id: string
  amount: number
  date: string
  description: string
  category: string
  subcategory?: string
  accountId: string
  merchant?: string
  isPending: boolean
  location?: string
  paymentChannel?: string
  transactionType?: string
}

interface FinancialSummary {
  totalBalance: number
  totalSavings: number
  monthlyIncome: number
  monthlyExpenses: number
  creditScore: number
}

interface PlaidData {
  accounts: PlaidAccount[]
  transactions: PlaidTransaction[]
  summary: FinancialSummary
  insights: any[]
  goals: any[]
}

// File-based storage that persists across API route calls
const STORAGE_FILE = join(process.cwd(), 'plaid-data-store.json')

export const plaidDataStore = {
  storeData: (userId: string, data: PlaidData): void => {
    try {
      // Read existing data
      let allData: Record<string, PlaidData> = {}
      if (existsSync(STORAGE_FILE)) {
        const fileContent = readFileSync(STORAGE_FILE, 'utf-8')
        allData = JSON.parse(fileContent)
      }
      
      // Store new data
      allData[userId] = data
      
      // Write back to file
      writeFileSync(STORAGE_FILE, JSON.stringify(allData, null, 2))
      
      console.log(`[PlaidDataStore] Stored data for user ${userId}:`, data)
    } catch (error) {
      console.error(`[PlaidDataStore] Error storing data for user ${userId}:`, error)
    }
  },

  getData: (userId: string): PlaidData | undefined => {
    try {
      if (!existsSync(STORAGE_FILE)) {
        console.log(`[PlaidDataStore] Storage file not found`)
        return undefined
      }
      
      const fileContent = readFileSync(STORAGE_FILE, 'utf-8')
      const allData: Record<string, PlaidData> = JSON.parse(fileContent)
      
      const data = allData[userId]
      console.log(`[PlaidDataStore] Retrieved data for user ${userId}:`, data ? 'Found' : 'Not found')
      return data
    } catch (error) {
      console.error(`[PlaidDataStore] Error retrieving data for user ${userId}:`, error)
      return undefined
    }
  },

  hasData: (userId: string): boolean => {
    try {
      if (!existsSync(STORAGE_FILE)) return false
      
      const fileContent = readFileSync(STORAGE_FILE, 'utf-8')
      const allData: Record<string, PlaidData> = JSON.parse(fileContent)
      
      return userId in allData
    } catch (error) {
      console.error(`[PlaidDataStore] Error checking data for user ${userId}:`, error)
      return false
    }
  },

  clearData: (userId: string): void => {
    try {
      if (!existsSync(STORAGE_FILE)) return
      
      const fileContent = readFileSync(STORAGE_FILE, 'utf-8')
      const allData: Record<string, PlaidData> = JSON.parse(fileContent)
      
      delete allData[userId]
      
      writeFileSync(STORAGE_FILE, JSON.stringify(allData, null, 2))
      console.log(`[PlaidDataStore] Cleared data for user ${userId}`)
    } catch (error) {
      console.error(`[PlaidDataStore] Error clearing data for user ${userId}:`, error)
    }
  },

  getAllUsers: (): string[] => {
    try {
      if (!existsSync(STORAGE_FILE)) return []
      
      const fileContent = readFileSync(STORAGE_FILE, 'utf-8')
      const allData: Record<string, PlaidData> = JSON.parse(fileContent)
      
      return Object.keys(allData)
    } catch (error) {
      console.error(`[PlaidDataStore] Error getting all users:`, error)
      return []
    }
  }
}

export type { PlaidAccount, PlaidTransaction, FinancialSummary, PlaidData }
