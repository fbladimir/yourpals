import { createSupabaseClient } from './auth'

// Configuration for shared auth domain
const config = {
  authUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000' // Use landing page for auth in development
    : 'https://yourpals.app', // Use main domain for auth in production
}

/**
 * Shared auth utilities for consistent behavior across apps
 */

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data
}

/**
 * Sign up with email and password
 */
export async function signUpWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data
}

/**
 * Sign in with OAuth provider
 */
export async function signInWithOAuth(provider: 'google' | 'apple' | 'azure') {
  const supabase = createSupabaseClient()
  
  // Use shared auth domain for consistent sessions across apps
  const redirectUrl = `${config.authUrl}/auth/callback`
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data
}

/**
 * Sign out user
 */
export async function signOut() {
  const supabase = createSupabaseClient()
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    throw new Error(error.message)
  }
}

/**
 * Reset password
 */
export async function resetPassword(email: string) {
  const supabase = createSupabaseClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  })
  
  if (error) {
    throw new Error(error.message)
  }
}

/**
 * Update password
 */
export async function updatePassword(password: string) {
  const supabase = createSupabaseClient()
  const { error } = await supabase.auth.updateUser({
    password,
  })
  
  if (error) {
    throw new Error(error.message)
  }
}
