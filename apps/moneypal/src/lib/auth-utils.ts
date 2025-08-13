import { createSupabaseClient } from './auth'

export async function signInWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  // If sign in successful, store user data in localStorage
  if (data.session && !error) {
    const userData = {
      id: data.session.user.id,
      email: data.session.user.email || '',
      full_name: data.session.user.user_metadata?.full_name,
      avatar_url: data.session.user.user_metadata?.avatar_url
    }
    
    // Store auth token and user data
    localStorage.setItem('moneypal_auth_token', data.session.access_token)
    localStorage.setItem('moneypal_user_data', JSON.stringify(userData))
    
    console.log('✅ Email sign-in: User data stored in localStorage:', userData)
    
    // Dispatch custom event to notify AuthProvider that data is available
    window.dispatchEvent(new CustomEvent('moneypal:auth-data-stored', { 
      detail: { userData } 
    }))
  }
  
  return { data, error }
}

export async function signUpWithEmail(email: string, password: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  
  // If sign up successful and user is immediately signed in, store user data
  if (data.session && !error) {
    const userData = {
      id: data.session.user.id,
      email: data.session.user.email || '',
      full_name: data.session.user.user_metadata?.full_name,
      avatar_url: data.session.user.user_metadata?.avatar_url
    }
    
    // Store auth token and user data
    localStorage.setItem('moneypal_auth_token', data.session.access_token)
    localStorage.setItem('moneypal_user_data', JSON.stringify(userData))
    
    console.log('✅ Email sign-up: User data stored in localStorage:', userData)
    
    // Dispatch custom event to notify AuthProvider that data is available
    window.dispatchEvent(new CustomEvent('moneypal:auth-data-stored', { 
      detail: { userData } 
    }))
  } else if (!error && !data.session) {
    // Email verification required - this is expected behavior
    console.log('📧 Email verification required for:', email)
  }
  
  return { data, error }
}

export async function signInWithOAuth(provider: 'google' | 'apple' | 'azure') {
  const supabase = createSupabaseClient()
  
  // Use the current domain for OAuth callback
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })
  
  return { data, error }
}

export async function signOut() {
  const supabase = createSupabaseClient()
  const { error } = await supabase.auth.signOut()
  
  // Clear localStorage data on sign out
  if (!error) {
    localStorage.removeItem('moneypal_auth_token')
    localStorage.removeItem('moneypal_user_data')
    console.log('✅ Sign out: Cleared localStorage data')
  }
  
  return { error }
}

export async function resetPassword(email: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/callback`,
  })
  return { data, error }
}

export async function updatePassword(password: string) {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase.auth.updateUser({
    password,
  })
  return { data, error }
}
