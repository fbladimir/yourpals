import { NextRequest, NextResponse } from 'next/server'
import { plaidDataStore } from '@/lib/plaid-data-store'

export const dynamic = 'force-dynamic'

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

    // Check if we have real Plaid data for this user
    console.log(`[Financial Data API] Checking for Plaid data for user: ${userId}`)
    console.log(`[Financial Data API] All users in store:`, plaidDataStore.getAllUsers())
    
    const userPlaidData = plaidDataStore.getData(userId)
    
    if (userPlaidData) {
      console.log(`[Financial Data API] Returning real Plaid data for user ${userId}:`, userPlaidData)
      return NextResponse.json({
        success: true,
        data: userPlaidData
      })
    }

    // Return empty data for new users (no mock data contamination)
    console.log(`[Financial Data API] No Plaid data found for user ${userId}, returning empty data`)
    const emptyData = {
      accounts: [],
      transactions: [],
      summary: {
        totalBalance: 0,
        totalSavings: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        creditScore: 750
      },
      insights: [],
      goals: []
    }

    return NextResponse.json({
      success: true,
      data: emptyData
    })

  } catch (error: any) {
    console.error('Error fetching financial data:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch financial data',
        details: error.message
      },
      { status: 500 }
    )
  }
}
