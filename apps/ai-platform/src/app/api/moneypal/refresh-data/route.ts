import { NextRequest, NextResponse } from 'next/server'
import { databaseService } from '@/lib/database-service'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json()

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId' },
        { status: 400 }
      )
    }

    // For now, just return success - in the future this could trigger
    // a background job to refresh data from Plaid
    return NextResponse.json({
      success: true,
      message: 'Data refresh initiated'
    })

  } catch (error: any) {
    console.error('Error refreshing data:', error)
    return NextResponse.json(
      { 
        error: 'Failed to refresh data',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
