import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
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
      // Use cookies for better session persistence
      storage: undefined, // Let Supabase use default cookie storage
    },
  })
}

export interface CurrentUser {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
  }
}

/**
 * Get current user from Supabase
 * Note: This is now handled by the AuthProvider
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  // This function is kept for compatibility but returns null
  // The real user data comes from the AuthProvider
  return null
}
