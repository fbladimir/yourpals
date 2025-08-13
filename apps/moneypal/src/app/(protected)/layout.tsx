"use client"

import { useAuth } from '../../components/AuthProvider'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(() => {
    // Give AuthProvider time to initialize
    const timer = setTimeout(() => {
      setCheckingSession(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!checkingSession && !loading && !user) {
      console.log('❌ ProtectedLayout: No user found, redirecting to welcome')
      router.push('/welcome')
    } else if (!checkingSession && !loading && user) {
      console.log('✅ ProtectedLayout: User authenticated:', user.email)
    }
  }, [user, loading, checkingSession, router])

  if (checkingSession || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {children}
    </div>
  )
}
