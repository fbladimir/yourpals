import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'

export async function GET() {
  try {
    console.log('🔍 DEBUG: Starting auth debug...')
    
    const { userId } = await auth()
    console.log('🔍 DEBUG: Clerk userId:', userId)
    
    const user = await currentUser()
    console.log('🔍 DEBUG: Clerk user exists:', !!user)
    console.log('🔍 DEBUG: Clerk user email:', user?.emailAddresses?.[0]?.emailAddress)
    console.log('🔍 DEBUG: Clerk user full object:', JSON.stringify(user, null, 2))
    
    return NextResponse.json({
      success: true,
      debug: {
        userId,
        userExists: !!user,
        email: user?.emailAddresses?.[0]?.emailAddress,
        userObject: user
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
