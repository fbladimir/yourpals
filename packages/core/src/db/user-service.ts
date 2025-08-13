import { prisma } from './client'
import type { User } from './types'

export interface EnsureUserParams {
  supabaseUserId: string
  email: string
  phone?: string
  emailVerified?: boolean
  phoneVerified?: boolean
}

/**
 * Ensures a User row exists in the database for the given Supabase user.
 * Creates a new user if one doesn't exist, otherwise returns the existing user.
 * This function should be called on authenticated requests to sync Supabase users with our database.
 */
export async function ensureUser({ supabaseUserId, email, phone, emailVerified = false, phoneVerified = false }: EnsureUserParams): Promise<User> {
  // First try to find existing user by email (since marketing app might have created them)
  let user = await prisma.user.findUnique({
    where: { email },
  })

  if (user) {
    // User exists by email, check if we need to update supabaseUserId
    if (user.supabaseUserId !== supabaseUserId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { 
          supabaseUserId,
          phone: phone || user.phone,
          emailVerified: emailVerified || user.emailVerified,
          phoneVerified: phoneVerified || user.phoneVerified,
        },
      })
    }
    return user
  }

  // If no user by email, try by supabaseUserId
  user = await prisma.user.findUnique({
    where: { supabaseUserId },
  })

  if (user) {
    // User exists by supabaseUserId, check if we need to update email
    if (user.email !== email) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { 
          email,
          phone: phone || user.phone,
          emailVerified: emailVerified || user.emailVerified,
          phoneVerified: phoneVerified || user.phoneVerified,
        },
      })
    }
    return user
  }

  // No user exists, create new one
  user = await prisma.user.create({
    data: {
      supabaseUserId,
      email,
      phone,
      emailVerified,
      phoneVerified,
      twoFactorEnabled: false,
    },
  })

  return user
}

/**
 * Get user by Supabase user ID
 */
export async function getUserBySupabaseId(supabaseUserId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { supabaseUserId },
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
