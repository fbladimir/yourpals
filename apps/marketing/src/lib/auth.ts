import { auth, currentUser } from '@clerk/nextjs/server'
import { ensureUser } from '@yourpals/core'

export interface MarketingUser {
  id: string
  email: string
  clerkUserId: string
  createdAt: Date
}

/**
 * Server-side helper to get the current authenticated user for marketing app.
 * Automatically creates/updates the user in our database.
 */
export async function getMarketingUser(): Promise<MarketingUser | null> {
  try {
    const { userId } = await auth()
    const user = await currentUser()
    
    if (!userId || !user?.emailAddresses?.[0]?.emailAddress) {
      return null
    }

    const email = user.emailAddresses[0].emailAddress
    
    // Ensure user exists in our database
    const dbUser = await ensureUser({
      clerkUserId: userId,
      email,
    })

    return {
      id: dbUser.id,
      email: dbUser.email,
      clerkUserId: dbUser.clerkUserId,
      createdAt: dbUser.createdAt,
    }
  } catch (error) {
    console.error('Error getting marketing user:', error)
    return null
  }
}
