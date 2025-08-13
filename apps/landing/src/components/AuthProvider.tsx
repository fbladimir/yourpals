"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { createSupabaseClient } from '../lib/auth'
import { storeSessionForTransfer, clearStoredSession } from '../lib/session-transfer'
import type { User, Session } from '@supabase/supabase-js'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createSupabaseClient()

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log('🔍 Landing AuthProvider: Checking for existing session...')
        
        const { data: { session: existingSession } } = await supabase.auth.getSession()
        
        if (existingSession) {
          console.log('✅ Landing AuthProvider: Found existing session for:', existingSession.user.email)
          setSession(existingSession)
          setUser(existingSession.user)
          
          // Store session for transfer to other apps
          storeSessionForTransfer(existingSession)
        } else {
          console.log('❌ Landing AuthProvider: No existing session found')
          // Clear any stale transfer data
          clearStoredSession()
        }
        
        setLoading(false)
      } catch (error) {
        console.error('❌ Landing AuthProvider: Error getting initial session:', error)
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔄 Landing AuthProvider: Auth state changed:', event, session?.user?.email)
        setSession(session)
        setUser(session?.user ?? null)
        
        if (session) {
          // Store session for transfer to other apps
          storeSessionForTransfer(session)
        } else {
          // Clear transfer data on sign out
          clearStoredSession()
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value = {
    user,
    session,
    loading,
    signOut,
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
