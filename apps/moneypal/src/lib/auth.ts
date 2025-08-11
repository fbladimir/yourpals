import { auth, currentUser } from '@clerk/nextjs/server'
import { ensureUser } from '@yourpals/core'
import { prisma } from '@yourpals/core'

export interface CurrentUser {
  id: string
  email: string
  clerkUserId: string
  createdAt: Date
  subscription: {
    id: string
    plan: 'FREE' | 'MONEYPAL_PRO' | 'ALL_ACCESS'
    status: 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'UNPAID'
    currentPeriodEnd: Date | null
  } | null
}

/**
 * Server-side helper to get the current authenticated user with subscription data.
 * Returns null if user is not authenticated.
 * Automatically creates/updates the user in our database.
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  try {
    console.log('🔍 getCurrentUser: Starting auth check...')
    
    const { userId } = await auth()
    console.log('🔍 getCurrentUser: Clerk userId:', userId)
    
    const user = await currentUser()
    console.log('🔍 getCurrentUser: Clerk user:', user ? 'exists' : 'null')
    console.log('🔍 getCurrentUser: Clerk user email:', user?.emailAddresses?.[0]?.emailAddress)
    
    if (!userId || !user?.emailAddresses?.[0]?.emailAddress) {
      console.log('🔍 getCurrentUser: Missing userId or email, returning null')
      return null
    }

    const email = user.emailAddresses[0].emailAddress
    console.log('🔍 getCurrentUser: Processing email:', email)
    
    // Ensure user exists in our database
    console.log('🔍 getCurrentUser: Calling ensureUser...')
    const dbUser = await ensureUser({
      clerkUserId: userId,
      email,
    })
    console.log('🔍 getCurrentUser: Database user created/found:', dbUser.id)

    // Get user's subscription
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: dbUser.id,
        status: 'ACTIVE',
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    // If no active subscription exists, create a FREE one
    let userSubscription = subscription
    if (!subscription) {
      console.log('🔍 getCurrentUser: Creating FREE subscription for user')
      userSubscription = await prisma.subscription.create({
        data: {
          userId: dbUser.id,
          plan: 'FREE',
          status: 'ACTIVE',
        },
      })
    }

    const result = {
      id: dbUser.id,
      email: dbUser.email,
      clerkUserId: dbUser.clerkUserId,
      createdAt: dbUser.createdAt,
      subscription: userSubscription ? {
        id: userSubscription.id,
        plan: userSubscription.plan,
        status: userSubscription.status,
        currentPeriodEnd: userSubscription.currentPeriodEnd,
      } : null,
    }
    
    console.log('🔍 getCurrentUser: Successfully returning user:', result.id)
    return result
  } catch (error) {
    console.error('❌ getCurrentUser: Error occurred:', error)
    return null
  }
}

/**
 * Check if user has access to a specific plan
 */
export function hasPlanAccess(user: CurrentUser | null, requiredPlan: 'FREE' | 'MONEYPAL_PRO' | 'ALL_ACCESS'): boolean {
  if (!user || !user.subscription) return false
  
  const planHierarchy = {
    'FREE': 0,
    'MONEYPAL_PRO': 1,
    'ALL_ACCESS': 2,
  }
  
  return planHierarchy[user.subscription.plan] >= planHierarchy[requiredPlan]
}
