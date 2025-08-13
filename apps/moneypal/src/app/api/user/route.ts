import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { supabaseUserId, email, phone } = await request.json()
    
    if (!supabaseUserId || !email) {
      return NextResponse.json(
        { error: 'supabaseUserId and email are required' },
        { status: 400 }
      )
    }

    // For now, return a mock response
    // TODO: Implement real user creation with Supabase when environment is set up
    const mockUser = {
      id: 'mock_user_' + Date.now(),
      email,
      createdAt: new Date().toISOString()
    }
    
    return NextResponse.json({ 
      success: true, 
      user: mockUser,
      note: 'This is mock data - Supabase integration will be implemented later'
    })
  } catch (error) {
    console.error('Error ensuring user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
