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

    // Fallback to mock data if no Plaid accounts linked
    console.log(`[Financial Data API] No Plaid data found for user ${userId}, returning mock data`)
    const mockData = {
      accounts: [
        {
          id: '1',
          name: 'Chase Checking',
          type: 'checking',
          balance: 5240.50,
          currency: 'USD',
          accountNumber: '****1234'
        },
        {
          id: '2',
          name: 'Chase Savings',
          type: 'savings',
          balance: 12500.00,
          currency: 'USD',
          accountNumber: '****5678'
        }
      ],
      transactions: [
        {
          id: '1',
          amount: -45.99,
          date: '2024-01-15',
          description: 'Netflix Subscription',
          category: 'Entertainment',
          accountId: '1'
        },
        {
          id: '2',
          amount: -89.50,
          date: '2024-01-14',
          description: 'Grocery Store',
          category: 'Food & Dining',
          accountId: '1'
        }
      ],
      summary: {
        totalBalance: 17740.50,
        totalSavings: 12500.00,
        monthlyIncome: 8500.00,
        monthlyExpenses: 3200.00,
        creditScore: 785
      },
      insights: [
        {
          id: '1',
          type: 'spending',
          title: 'High Entertainment Spending',
          message: 'Your entertainment spending is 15% higher than last month.',
          priority: 'medium'
        }
      ],
      goals: [
        {
          id: '1',
          name: 'Emergency Fund',
          targetAmount: 25000,
          currentAmount: 12500,
          targetDate: '2024-06-01'
        }
      ]
    }

    return NextResponse.json({
      success: true,
      data: mockData
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
