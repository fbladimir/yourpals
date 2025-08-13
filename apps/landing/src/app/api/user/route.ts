import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // For now, return a mock response
    // TODO: Implement real Supabase auth when environment is set up
    return NextResponse.json({ 
      success: true, 
      user: {
        id: 'mock_user_123',
        email: 'demo@yourpals.com',
        createdAt: new Date('2024-01-01').toISOString()
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
