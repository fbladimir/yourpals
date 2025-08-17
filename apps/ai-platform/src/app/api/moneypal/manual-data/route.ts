import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// In a real app, this would be stored in a database
// For now, we'll use a simple in-memory store for demonstration
const manualDataStore = new Map<string, any>()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    const userData = manualDataStore.get(userId)
    
    if (!userData) {
      return NextResponse.json({
        success: true,
        data: {
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
        }
      })
    }

    return NextResponse.json({
      success: true,
      data: userData
    })

  } catch (error: any) {
    console.error('Error fetching manual financial data:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch manual financial data',
        details: error.message
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, data } = await request.json()

    if (!userId || !data) {
      return NextResponse.json(
        { error: 'Missing userId or data' },
        { status: 400 }
      )
    }

    // Store the manual data
    manualDataStore.set(userId, {
      ...data,
      lastUpdated: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Manual financial data saved successfully'
    })

  } catch (error: any) {
    console.error('Error saving manual financial data:', error)
    return NextResponse.json(
      {
        error: 'Failed to save manual financial data',
        details: error.message
      },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, updates } = await request.json()

    if (!userId || !updates) {
      return NextResponse.json(
        { error: 'Missing userId or updates' },
        { status: 400 }
      )
    }

    const existingData = manualDataStore.get(userId) || {
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
    }

    // Merge updates with existing data
    const updatedData = {
      ...existingData,
      ...updates,
      lastUpdated: new Date().toISOString()
    }

    manualDataStore.set(userId, updatedData)

    return NextResponse.json({
      success: true,
      message: 'Manual financial data updated successfully',
      data: updatedData
    })

  } catch (error: any) {
    console.error('Error updating manual financial data:', error)
    return NextResponse.json(
      {
        error: 'Failed to update manual financial data',
        details: error.message
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    manualDataStore.delete(userId)

    return NextResponse.json({
      success: true,
      message: 'Manual financial data deleted successfully'
    })

  } catch (error: any) {
    console.error('Error deleting manual financial data:', error)
    return NextResponse.json(
      {
        error: 'Failed to delete manual financial data',
        details: error.message
      },
      { status: 500 }
    )
  }
}
