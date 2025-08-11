import { NextRequest, NextResponse } from 'next/server'
import { getMarketingUser } from '../../../lib/auth'

export async function GET() {
  try {
    const user = await getMarketingUser()
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    })
  } catch (error) {
    console.error('Error getting marketing user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
