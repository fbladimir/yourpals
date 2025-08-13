/**
 * Centralized authentication service for YourPals ecosystem
 * This handles all auth and provides secure tokens to other apps
 */

import { createSupabaseClient } from './auth'
import { createHash, randomBytes } from 'crypto'

// In-memory store for app tokens (in production, use Redis/database)
const appTokens = new Map<string, { userId: string, expiresAt: number, app: string }>()

/**
 * Generate a secure token for app-to-app authentication
 */
export function generateAppToken(userId: string, app: string): string {
  const token = randomBytes(32).toString('hex')
  const expiresAt = Date.now() + (60 * 60 * 1000) // 1 hour
  
  appTokens.set(token, { userId, expiresAt, app })
  
  // Clean up expired tokens
  cleanupExpiredTokens()
  
  return token
}

/**
 * Validate an app token
 */
export function validateAppToken(token: string, app: string): string | null {
  const tokenData = appTokens.get(token)
  
  if (!tokenData || tokenData.expiresAt < Date.now() || tokenData.app !== app) {
    return null
  }
  
  return tokenData.userId
}

/**
 * Clean up expired tokens
 */
function cleanupExpiredTokens() {
  const now = Date.now()
  for (const [token, data] of appTokens.entries()) {
    if (data.expiresAt < now) {
      appTokens.delete(token)
    }
  }
}

/**
 * Get user session and generate app token
 */
export async function getAuthForApp(app: string) {
  try {
    const supabase = createSupabaseClient()
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error || !session) {
      return { error: 'No active session' }
    }
    
    const appToken = generateAppToken(session.user.id, app)
    
    return {
      user: {
        id: session.user.id,
        email: session.user.email,
        user_metadata: session.user.user_metadata,
      },
      appToken,
      expiresAt: Date.now() + (60 * 60 * 1000)
    }
  } catch (error) {
    console.error('Error getting auth for app:', error)
    return { error: 'Authentication failed' }
  }
}
