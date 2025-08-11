import { prisma } from './client'
import type { User } from './types'

export interface EnsureUserParams {
  clerkUserId: string
  email: string
}

/**
 * Ensures a User row exists in the database for the given Clerk user.
 * Creates a new user if one doesn't exist, otherwise returns the existing user.
 * This function should be called on authenticated requests to sync Clerk users with our database.
 */
export async function ensureUser({ clerkUserId, email }: EnsureUserParams): Promise<User> {
  // First try to find existing user by email (since marketing app might have created them)
  let user = await prisma.user.findUnique({
    where: { email },
  })

  if (user) {
    // User exists by email, check if we need to update clerkUserId
    if (user.clerkUserId !== clerkUserId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { clerkUserId },
      })
    }
    return user
  }

  // If no user by email, try by clerkUserId
  user = await prisma.user.findUnique({
    where: { clerkUserId },
  })

  if (user) {
    // User exists by clerkUserId, check if we need to update email
    if (user.email !== email) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { email },
      })
    }
    return user
  }

  // No user exists, create new one
  user = await prisma.user.create({
    data: {
      clerkUserId,
      email,
    },
  })

  return user
}

/**
 * Get user by Clerk user ID
 */
export async function getUserByClerkId(clerkUserId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { clerkUserId },
  })
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  })
}
