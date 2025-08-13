import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    // Set redirect URL for email verification
    redirectTo: typeof window !== 'undefined' 
      ? `${window.location.origin}/auth/verify-email`
      : undefined,
  },
})

// Browser client for client-side usage
export function createClientComponentClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      // Set redirect URL for email verification
      redirectTo: typeof window !== 'undefined' 
        ? `${window.location.origin}/auth/verify-email`
        : undefined,
    },
  })
}
