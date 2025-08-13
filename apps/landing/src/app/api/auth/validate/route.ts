import { NextRequest, NextResponse } from 'next/server'
import { validateAppToken } from '../../../../lib/auth-service'

export async function POST(request: NextRequest) {
  try {
    const { app_token, app, user_id } = await request.json()
    
    if (!app_token || !app || !user_id) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }
    
    const validatedUserId = validateAppToken(app_token, app)
    
    if (!validatedUserId || validatedUserId !== user_id) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
    }
    
    // Return user data (in production, fetch from database)
    return NextResponse.json({
      user: {
        id: user_id,
        // Add other user fields as needed
      }
    })
  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
