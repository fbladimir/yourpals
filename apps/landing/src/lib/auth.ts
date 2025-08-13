import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export interface MarketingUser {
  id: string
  email: string
  supabaseUserId: string
  createdAt: Date
}

/**
 * Server-side helper to get the current authenticated user for marketing app.
 * This is a simplified version that works directly with Supabase.
 */
export async function getMarketingUser(): Promise<MarketingUser | null> {
  try {
    // For now, return null since we need to implement proper session handling
    // This will be updated when we implement the full auth flow
    return null
  } catch (error) {
    console.error('Error getting marketing user:', error)
    return null
  }
}

/**
 * Create a Supabase client for client-side usage
 */
export function createSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
}
