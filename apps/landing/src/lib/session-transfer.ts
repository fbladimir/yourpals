/**
 * Session transfer utilities for sharing authentication state between apps
 * This is needed because localStorage/cookies are domain-specific in development
 */

const SESSION_TRANSFER_KEY = 'yourpals_session_transfer'

export interface SessionTransferData {
  accessToken: string
  refreshToken: string
  expiresAt: number
  user: {
    id: string
    email: string
    user_metadata?: any
  }
}

/**
 * Store session data for transfer to other apps
 */
export function storeSessionForTransfer(session: any) {
  if (!session?.access_token) return

  const transferData: SessionTransferData = {
    accessToken: session.access_token,
    refreshToken: session.refresh_token || '',
    expiresAt: session.expires_at || Date.now() + 3600000, // 1 hour default
    user: {
      id: session.user.id,
      email: session.user.email || '',
      user_metadata: session.user.user_metadata,
    }
  }

  try {
    localStorage.setItem(SESSION_TRANSFER_KEY, JSON.stringify(transferData))
    console.log('✅ Session stored for transfer')
  } catch (error) {
    console.error('❌ Failed to store session for transfer:', error)
  }
}

/**
 * Clear stored session data
 */
export function clearStoredSession() {
  try {
    localStorage.removeItem(SESSION_TRANSFER_KEY)
    console.log('✅ Stored session cleared')
  } catch (error) {
    console.error('❌ Failed to clear stored session:', error)
  }
}

/**
 * Check if there's a valid stored session
 */
export function hasValidStoredSession(): boolean {
  try {
    const stored = localStorage.getItem(SESSION_TRANSFER_KEY)
    if (!stored) return false

    const data: SessionTransferData = JSON.parse(stored)
    const now = Date.now()
    
    // Check if session is still valid (not expired)
    return data.expiresAt > now
  } catch (error) {
    console.error('❌ Error checking stored session:', error)
    return false
  }
}
