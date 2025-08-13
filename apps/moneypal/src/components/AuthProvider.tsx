"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { config } from '../lib/config'

interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing auth token
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('moneypal_auth_token')
        const userData = localStorage.getItem('moneypal_user_data')
        
        if (token && userData) {
          const user = JSON.parse(userData)
          console.log('✅ MoneyPal AuthProvider: Found existing auth for:', user.email)
          setUser(user)
        } else {
          console.log('❌ MoneyPal AuthProvider: No existing auth found')
        }
      } catch (error) {
        console.error('❌ MoneyPal AuthProvider: Error checking auth:', error)
      } finally {
        setLoading(false)
      }
    }

    // Small delay to ensure everything is ready
    const timer = setTimeout(checkAuth, 100)
    
    // Listen for auth data being stored
    const handleAuthDataStored = (event: CustomEvent) => {
      console.log('🔄 MoneyPal AuthProvider: Received auth data stored event:', event.detail)
      const userData = event.detail.userData
      setUser(userData)
      setLoading(false)
    }
    
    window.addEventListener('moneypal:auth-data-stored', handleAuthDataStored as EventListener)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('moneypal:auth-data-stored', handleAuthDataStored as EventListener)
    }
  }, [])

  const signOut = () => {
    console.log('🚪 MoneyPal AuthProvider: Signing out...')
    
    // Clear all local data
    localStorage.removeItem('moneypal_auth_token')
    localStorage.removeItem('moneypal_user_data')
    
    // Clear state
    setUser(null)
    
    // Redirect to landing page
    console.log('🚀 MoneyPal AuthProvider: Redirecting to landing page...')
    window.location.href = config.marketingUrl
  }

  const value = {
    user,
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
