import { NextRequest, NextResponse } from 'next/server'
import { ensureUser } from '@yourpals/core'

export async function POST(request: NextRequest) {
  try {
    const { clerkUserId, email } = await request.json()
    
    if (!clerkUserId || !email) {
      return NextResponse.json(
        { error: 'clerkUserId and email are required' },
        { status: 400 }
      )
    }

    // This ensures a User row exists in our database
    const user = await ensureUser({ clerkUserId, email })
    
    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    })
  } catch (error) {
    console.error('Error ensuring user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
