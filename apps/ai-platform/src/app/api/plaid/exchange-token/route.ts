import { NextRequest, NextResponse } from 'next/server'
import { exchangePublicToken } from '@/lib/plaid'

export async function POST(request: NextRequest) {
  try {
    const { publicToken } = await request.json()

    if (!publicToken) {
      return NextResponse.json(
        { error: 'Public token is required' },
        { status: 400 }
      )
    }

    const accessTokenResponse = await exchangePublicToken(publicToken)

    return NextResponse.json(accessTokenResponse)
  } catch (error) {
    console.error('Error exchanging public token:', error)
    return NextResponse.json(
      { error: 'Failed to exchange public token' },
      { status: 500 }
    )
  }
}
