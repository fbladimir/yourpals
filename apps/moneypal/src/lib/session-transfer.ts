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
 * Retrieve session data transferred from other apps
 */
export function getTransferredSession(): SessionTransferData | null {
  try {
    const stored = localStorage.getItem(SESSION_TRANSFER_KEY)
    if (!stored) return null

    const data: SessionTransferData = JSON.parse(stored)
    const now = Date.now()
    
    // Check if session is still valid (not expired)
    if (data.expiresAt <= now) {
      console.log('❌ Transferred session expired, clearing...')
      localStorage.removeItem(SESSION_TRANSFER_KEY)
      return null
    }

    console.log('✅ Found valid transferred session for:', data.user.email)
    return data
  } catch (error) {
    console.error('❌ Error reading transferred session:', error)
    return null
  }
}

/**
 * Clear transferred session data
 */
export function clearTransferredSession() {
  try {
    localStorage.removeItem(SESSION_TRANSFER_KEY)
    console.log('✅ Transferred session cleared')
  } catch (error) {
    console.error('❌ Failed to clear transferred session:', error)
  }
}

/**
 * Check if there's a valid transferred session
 */
export function hasValidTransferredSession(): boolean {
  return getTransferredSession() !== null
}
