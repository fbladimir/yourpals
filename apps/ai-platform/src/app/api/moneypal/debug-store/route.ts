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

    const allUsers = plaidDataStore.getAllUsers()
    const userData = plaidDataStore.getData(userId)
    const hasData = plaidDataStore.hasData(userId)

    return NextResponse.json({
      success: true,
      debug: {
        requestedUserId: userId,
        allUsersInStore: allUsers,
        userHasData: hasData,
        userData: userData,
        storeStatus: 'active'
      }
    })

  } catch (error: any) {
    console.error('Error in debug store:', error)
    return NextResponse.json(
      {
        error: 'Failed to debug store',
        details: error.message
      },
      { status: 500 }
    )
  }
}
