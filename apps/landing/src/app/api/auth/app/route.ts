import { NextRequest, NextResponse } from 'next/server'
import { getAuthForApp } from '../../../../lib/auth-service'

export async function POST(request: NextRequest) {
  try {
    const { app } = await request.json()
    
    if (!app) {
      return NextResponse.json({ error: 'App parameter required' }, { status: 400 })
    }
    
    const authData = await getAuthForApp(app)
    
    if ('error' in authData) {
      return NextResponse.json({ error: authData.error }, { status: 401 })
    }
    
    return NextResponse.json(authData)
  } catch (error) {
    console.error('App auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
