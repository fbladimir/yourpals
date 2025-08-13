"use client"

import { useEffect, useState } from 'react'
import { createSupabaseClient } from '../lib/auth'

export default function SessionDebug() {
  const [sessionInfo, setSessionInfo] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      try {
        const supabase = createSupabaseClient()
        
        // Check current session
        const { data: { session } } = await supabase.auth.getSession()
        
        // Check user
        const { data: { user } } = await supabase.auth.getUser()
        
        setSessionInfo({
          session: session ? {
            access_token: session.access_token ? 'Present' : 'Missing',
            refresh_token: session.refresh_token ? 'Present' : 'Missing',
            expires_at: session.expires_at,
            user: session.user ? {
              id: session.user.id,
              email: session.user.email,
              user_metadata: session.user.user_metadata
            } : null
          } : null,
          user: user ? {
            id: user.id,
            email: user.email,
            user_metadata: user.user_metadata
          } : null,
          localStorage: {
            supabase_auth_token: localStorage.getItem('supabase_auth_token'),
            supabase_auth_refresh_token: localStorage.getItem('supabase_auth_refresh_token')
          }
        })
      } catch (error) {
        console.error('Error checking session:', error)
        setSessionInfo({ error: error instanceof Error ? error.message : String(error) })
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  if (loading) {
    return <div className="p-4 bg-gray-800 rounded-lg">Loading session info...</div>
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-sm">
      <h3 className="text-white font-bold mb-2">Session Debug Info</h3>
      <pre className="text-gray-300 text-xs overflow-auto">
        {JSON.stringify(sessionInfo, null, 2)}
      </pre>
    </div>
  )
}
