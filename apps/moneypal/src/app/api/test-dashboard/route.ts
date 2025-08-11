import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '../../../lib/auth'

export async function GET() {
  try {
    const user = await getCurrentUser()
    
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        message: 'No user found',
        shouldRedirect: 'to sign-in'
      })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'User authenticated',
      user: {
        id: user.id,
        email: user.email,
        plan: user.subscription?.plan || 'FREE'
      },
      shouldRedirect: 'to dashboard'
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
