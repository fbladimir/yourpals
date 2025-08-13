"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isEmailVerified: boolean
  signUp: (email: string, password: string, name: string) => Promise<{ data: any; error: any }>
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signOut: () => Promise<{ error: any }>
  checkEmailVerification: () => Promise<boolean>
  checkEmailVerificationEnhanced: () => Promise<boolean>
  retryInitialization: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [initTimeout, setInitTimeout] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [maxRetries] = useState(3)

  // Add initialization timeout to prevent loading from getting stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.log('⚠️ AuthContext: Initialization timeout reached, forcing completion')
        setInitTimeout(true)
        setLoading(false)
      }
    }, 8000) // 8 second timeout

    return () => clearTimeout(timer)
  }, [loading])

  // Retry mechanism for failed initialization
  const retryInitialization = async () => {
    if (retryCount < maxRetries) {
      console.log(`🔄 AuthContext: Retrying initialization (${retryCount + 1}/${maxRetries})`)
      setRetryCount(prev => prev + 1)
      setLoading(true)
      setInitTimeout(false)
      
      try {
        await getInitialSession()
      } catch (error) {
        console.error('❌ AuthContext: Retry failed:', error)
        if (retryCount + 1 >= maxRetries) {
          console.log('⚠️ AuthContext: Max retries reached, forcing completion')
          setLoading(false)
        }
      }
    }
  }

  // Check email verification status
  const checkEmailVerification = async (): Promise<boolean> => {
    if (!user) return false
    
    try {
      console.log('🔍 AuthContext: Checking email verification status...')
      
      // Method 1: Check current user session
      const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error('❌ AuthContext: Error getting user:', userError)
        return false
      }
      
      const verified = !!currentUser?.email_confirmed_at
      console.log('🔍 AuthContext: Email verification status:', verified)
      setIsEmailVerified(verified)
      return verified
    } catch (error) {
      console.error('❌ AuthContext: Error in checkEmailVerification:', error)
      return false
    }
  }

  // Enhanced email verification check with session refresh
  const checkEmailVerificationEnhanced = async (): Promise<boolean> => {
    if (!user) return false
    
    try {
      console.log('🔍 AuthContext: Enhanced email verification check...')
      
      // Method 1: Check current user session
      const { data: { user: currentUser }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error('❌ AuthContext: Error getting user:', userError)
        return false
      }

      if (currentUser?.email_confirmed_at) {
        console.log('✅ AuthContext: Email verified via user session!')
        setIsEmailVerified(true)
        return true
      }

      // Method 2: Refresh session to get latest status
      const { data: { session }, error: sessionError } = await supabase.auth.refreshSession()
      
      if (sessionError) {
        console.error('❌ AuthContext: Error refreshing session:', sessionError)
        return false
      }

      if (session?.user?.email_confirmed_at) {
        console.log('✅ AuthContext: Email verified via session refresh!')
        setIsEmailVerified(true)
        return true
      }

      console.log('⏳ AuthContext: Email not verified yet...')
      setIsEmailVerified(false)
      return false
      
    } catch (error) {
      console.error('❌ AuthContext: Error in enhanced email verification check:', error)
      return false
    }
  }

  // Get initial session function
  const getInitialSession = async () => {
    try {
      console.log('🔍 AuthContext: Getting initial session...')
      const { data: { user } } = await supabase.auth.getUser()
      console.log('🔍 AuthContext: Initial user data:', user)
      if (user) {
        setUser(user)
        setIsEmailVerified(!!user.email_confirmed_at)
        console.log('✅ AuthContext: Initial user set:', user.email)
        console.log('✅ AuthContext: Email verified:', !!user.email_confirmed_at)
      }
    } catch (error) {
      console.error('❌ AuthContext: Error getting initial session:', error)
      throw error
    } finally {
      setLoading(false)
      console.log('🔍 AuthContext: Loading set to false')
    }
  }

  useEffect(() => {
    // Get initial session
    getInitialSession().catch((error) => {
      console.error('❌ AuthContext: Initial session failed:', error)
      if (retryCount < maxRetries) {
        // Will retry automatically
      }
    })

    // Listen for auth changes
    console.log('🔍 AuthContext: Setting up auth state listener...')
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('🔄 AuthContext: Auth state change event:', event)
      console.log('🔄 AuthContext: Session data:', session)
      
      // Handle specific events
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        if (session?.user?.email_confirmed_at) {
          console.log('✅ AuthContext: Email verification detected via auth event!')
          setIsEmailVerified(true)
        } else {
          console.log('⏳ AuthContext: User signed in but email not verified yet')
          setIsEmailVerified(false)
        }
      }
      
      setSession(session)
      setUser(session?.user ?? null)
      setIsEmailVerified(!!session?.user?.email_confirmed_at)
      setLoading(false)
      console.log('🔄 AuthContext: User state updated to:', session?.user?.email || 'null')
      console.log('🔄 AuthContext: Email verified:', !!session?.user?.email_confirmed_at)
    })

    return () => subscription.unsubscribe()
  }, [retryCount])

  const signUp = async (email: string, password: string, name: string) => {
    console.log('📝 AuthContext: signUp called with:', { email, name })
    
    // For now, skip email verification and go directly to onboarding
    // We'll add this back later when we have proper email verification working
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        // Skip email verification for now
        // emailRedirectTo: redirectTo,
      },
    })
    
    console.log('📝 AuthContext: signUp result:', { data, error })
    
    // Handle specific error cases for better UX
    if (error) {
      console.log('❌ AuthContext: Signup error message:', error.message)
      
      // Check if user already exists - this is the most common case
      if (error.message.includes('User already registered') || 
          error.message.includes('already exists') ||
          error.message.includes('already registered') ||
          error.message.includes('already been registered') ||
          error.message.includes('already been created')) {
        return { 
          data: null, 
          error: { 
            message: 'An account with this email already exists. Please sign in instead.' 
          } 
        }
      }
      
      // Check if email is already confirmed
      if (error.message.includes('Email not confirmed') || 
          error.message.includes('not confirmed')) {
        return { 
          data: null, 
          error: { 
            message: 'This email is already registered but not verified. Please sign in to resend verification.' 
          } 
        }
      }
      
      // Check for other common errors
      if (error.message.includes('Invalid email')) {
        return { 
          data: null, 
          error: { 
            message: 'Please enter a valid email address.' 
          } 
        }
      }
      
      if (error.message.includes('Password')) {
        return { 
          data: null, 
          error: { 
            message: 'Password must be at least 6 characters long.' 
          } 
        }
      }
      
      // For any other errors, return the original error
      return { data: null, error }
    }
    
    // If no error, the signup was successful
    // Since we're skipping email verification, we can consider the user as "verified"
    if (data?.user) {
      console.log('✅ AuthContext: Signup successful, user created:', data.user.email)
      // Mark email as verified for now since we're skipping verification
      setIsEmailVerified(true)
    }
    
    return { data, error }
  }

  const signIn = async (email: string, password: string) => {
    console.log('🔑 AuthContext: signIn called with:', { email })
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log('🔑 AuthContext: signIn result:', { data, error })
    return { data, error }
  }

  const signOut = async () => {
    console.log('🚪 AuthContext: signOut called')
    const { error } = await supabase.auth.signOut()
    console.log('🚪 AuthContext: signOut result:', { error })
    return { error }
  }

  const value = {
    user,
    session,
    loading,
    isEmailVerified,
    signUp,
    signIn,
    signOut,
    checkEmailVerification,
    checkEmailVerificationEnhanced,
    retryInitialization,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
