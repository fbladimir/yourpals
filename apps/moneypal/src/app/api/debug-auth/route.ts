import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('🔍 DEBUG: Starting auth debug...')
    
    // For now, return mock data
    // TODO: Implement real Supabase auth debug when environment is set up
    const mockUserId = 'mock_user_123'
    const mockUser = {
      id: mockUserId,
      email: 'demo@yourpals.com'
    }
    
    console.log('🔍 DEBUG: Mock userId:', mockUserId)
    console.log('🔍 DEBUG: Mock user exists:', !!mockUser)
    console.log('🔍 DEBUG: Mock user email:', mockUser.email)
    
    return NextResponse.json({
      success: true,
      debug: {
        userId: mockUserId,
        userExists: true,
        email: mockUser.email,
        userObject: mockUser,
        note: 'This is mock data - Supabase auth will be implemented later'
      }
    })
  } catch (error) {
    console.error('❌ DEBUG: Error in auth debug:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}
