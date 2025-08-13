"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createSupabaseClient } from '../../../lib/auth'

export default function AuthCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const supabase = createSupabaseClient()
        
        // Wait a bit for the session to be established
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          setError(error.message)
          setLoading(false)
          return
        }

        if (data.session) {
          console.log('✅ Auth successful for:', data.session.user.email)
          
          // Check which app the user should be redirected to
          const targetApp = searchParams.get('app')
          const returnTo = searchParams.get('returnTo')
          
          if (targetApp === 'moneypal' && returnTo) {
            // User authenticated for MoneyPal, redirect there with app token
            console.log('🔄 Redirecting to MoneyPal with app token...')
            
            try {
              // Get app token from our API
              const response = await fetch('/api/auth/app', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ app: 'moneypal' })
              })
              
              if (response.ok) {
                const authData = await response.json()
                const redirectUrl = new URL(returnTo)
                redirectUrl.searchParams.set('app_token', authData.appToken)
                redirectUrl.searchParams.set('user_id', authData.user.id)
                
                window.location.href = redirectUrl.toString()
              } else {
                console.error('Failed to get app token')
                window.location.href = returnTo
              }
            } catch (error) {
              console.error('Error getting app token:', error)
              window.location.href = returnTo
            }
          } else {
            // User authenticated for landing page, go to home
            console.log('🔄 Redirecting to landing page home')
            router.push('/')
          }
        } else {
          console.log('No session found, checking for user...')
          // Check if there's a user in the URL hash
          const hashParams = new URLSearchParams(window.location.hash.substring(1))
          const accessToken = hashParams.get('access_token')
          
          if (accessToken) {
            console.log('Found access token, setting session...')
            // Set the session manually
            const { error: setSessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: hashParams.get('refresh_token') || '',
            })
            
            if (!setSessionError) {
              console.log('Session set successfully, redirecting...')
              
              // Check which app the user should be redirected to
              const targetApp = searchParams.get('app')
              const returnTo = searchParams.get('returnTo')
              
              if (targetApp === 'moneypal' && returnTo) {
                try {
                  const response = await fetch('/api/auth/app', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ app: 'moneypal' })
                  })
                  
                  if (response.ok) {
                    const authData = await response.json()
                    const redirectUrl = new URL(returnTo)
                    redirectUrl.searchParams.set('app_token', authData.appToken)
                    redirectUrl.searchParams.set('user_id', authData.user.id)
                    
                    window.location.href = redirectUrl.toString()
                    return
                  }
                } catch (error) {
                  console.error('Error getting app token:', error)
                }
              }
              
              router.push('/')
              return
            }
          }
          
          setError('No session found after OAuth')
          setLoading(false)
        }
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('An unexpected error occurred')
        setLoading(false)
      }
    }

    handleAuthCallback()
  }, [router, searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Completing authentication...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we set up your account...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Authentication Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/signin')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return null
}
