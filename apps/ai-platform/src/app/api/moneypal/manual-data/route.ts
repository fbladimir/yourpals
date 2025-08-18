import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

// File-based persistence for development (in production, use a real database)
const DATA_DIR = path.join(process.cwd(), 'data', 'manual-data')
const ensureDataDir = async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (error) {
    console.log('Data directory already exists or cannot be created')
  }
}

// Helper function to get data from file storage
async function getDataFromStorage(userId: string) {
  try {
    await ensureDataDir()
    const filePath = path.join(DATA_DIR, `${userId}.json`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    // File doesn't exist or can't be read
    return null
  }
}

// Helper function to save data to file storage
async function saveDataToStorage(userId: string, data: any) {
  try {
    await ensureDataDir()
    const filePath = path.join(DATA_DIR, `${userId}.json`)
    const dataToSave = { ...data, lastUpdated: new Date().toISOString() }
    await fs.writeFile(filePath, JSON.stringify(dataToSave, null, 2))
    console.log(`Data saved to file for user ${userId}`)
  } catch (error) {
    console.error(`Error saving data for user ${userId}:`, error)
    throw error
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId parameter' }, { status: 400 })
    }
    
    const userData = await getDataFromStorage(userId)
    
    if (!userData) {
      // Return empty data structure
      return NextResponse.json({
        success: true,
        data: {
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
            monthlyChange: 0
          },
          goals: [],
          lastUpdated: new Date().toISOString()
        }
      })
    }
    
    return NextResponse.json({ success: true, data: userData })
  } catch (error: any) {
    console.error('Error fetching manual financial data:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch manual financial data', 
      details: error.message 
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, data } = await request.json()
    
    if (!userId || !data) {
      return NextResponse.json({ error: 'Missing userId or data' }, { status: 400 })
    }
    
    await saveDataToStorage(userId, data)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Manual financial data saved successfully' 
    })
  } catch (error: any) {
    console.error('Error saving manual financial data:', error)
    return NextResponse.json({ 
      error: 'Failed to save manual financial data', 
      details: error.message 
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, updates } = await request.json()
    
    if (!userId || !updates) {
      return NextResponse.json({ error: 'Missing userId or updates' }, { status: 400 })
    }
    
    const existingData = await getDataFromStorage(userId) || {
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
        monthlyChange: 0
      },
      goals: [],
      lastUpdated: new Date().toISOString()
    }
    
    const updatedData = { ...existingData, ...updates, lastUpdated: new Date().toISOString() }
    await saveDataToStorage(userId, updatedData)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Manual financial data updated successfully', 
      data: updatedData 
    })
  } catch (error: any) {
    console.error('Error updating manual financial data:', error)
    return NextResponse.json({ 
      error: 'Failed to update manual financial data', 
      details: error.message 
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId parameter' }, { status: 400 })
    }
    
    const filePath = path.join(DATA_DIR, `${userId}.json`)
    try {
      await fs.unlink(filePath)
      console.log(`Data file for user ${userId} deleted`)
      return NextResponse.json({ 
        success: true, 
        message: 'Manual financial data deleted successfully' 
      })
    } catch (error: any) {
      console.error(`Error deleting data file for user ${userId}:`, error)
      return NextResponse.json({ 
        error: 'Failed to delete manual financial data', 
        details: error.message 
      }, { status: 500 })
    }
  } catch (error: any) {
    console.error('Error deleting manual financial data:', error)
    return NextResponse.json({ 
      error: 'Failed to delete manual financial data', 
      details: error.message 
    }, { status: 500 })
  }
}
