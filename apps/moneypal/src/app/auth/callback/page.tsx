"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseClient } from '../../../lib/auth'
import { config } from '../../../lib/config'

export default function AuthCallback() {
  const router = useRouter()
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
          console.log('Auth successful, redirecting to dashboard...', data.session.user.email)
          
          // Store user data in localStorage for the simplified auth system
          const userData = {
            id: data.session.user.id,
            email: data.session.user.email || '',
            full_name: data.session.user.user_metadata?.full_name,
            avatar_url: data.session.user.user_metadata?.avatar_url
          }
          
          // Store auth token and user data
          localStorage.setItem('moneypal_auth_token', data.session.access_token)
          localStorage.setItem('moneypal_user_data', JSON.stringify(userData))
          
          console.log('✅ User data stored in localStorage:', userData)
          
          // Dispatch custom event to notify AuthProvider that data is available
          window.dispatchEvent(new CustomEvent('moneypal:auth-data-stored', { 
            detail: { userData } 
          }))
          
          // Check if this is an email verification callback
          const urlParams = new URLSearchParams(window.location.search)
          const isEmailVerification = urlParams.get('type') === 'signup' || 
                                    window.location.hash.includes('access_token')
          
          if (isEmailVerification) {
            // This is an email verification, redirect to verify-email page
            console.log('📧 Email verification callback, redirecting to verify-email page')
            router.push('/verify-email')
          } else {
            // Check if user came from landing page or direct MoneyPal access
            const referrer = document.referrer
            const isFromLanding = referrer.includes('yourpals.app') && !referrer.includes('moneypal')
            
            if (isFromLanding) {
              // User came from landing page, redirect back there
              console.log('User came from landing page, redirecting back...')
              window.location.href = config.marketingUrl
            } else {
              // User came directly to MoneyPal, go to dashboard
              console.log('Redirecting to dashboard...')
              router.push('/dashboard')
            }
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
              
              // Get the session again to extract user data
              const { data: sessionData } = await supabase.auth.getSession()
              if (sessionData.session) {
                // Store user data in localStorage
                const userData = {
                  id: sessionData.session.user.id,
                  email: sessionData.session.user.email || '',
                  full_name: sessionData.session.user.user_metadata?.full_name,
                  avatar_url: sessionData.session.user.user_metadata?.avatar_url
                }
                
                localStorage.setItem('moneypal_auth_token', sessionData.session.access_token)
                localStorage.setItem('moneypal_user_data', JSON.stringify(userData))
                
                console.log('✅ User data stored in localStorage:', userData)
                
                // Dispatch custom event to notify AuthProvider that data is available
                window.dispatchEvent(new CustomEvent('moneypal:auth-data-stored', { 
                  detail: { userData } 
                }))
              }
              
              // Check referrer again after setting session
              const referrer = document.referrer
              const isFromLanding = referrer.includes('yourpals.app') && !referrer.includes('moneypal')
              
              if (isFromLanding) {
                window.location.href = config.marketingUrl
              } else {
                router.push('/dashboard')
              }
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
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300">Completing authentication...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we set up your account...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">Authentication Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/sign-in')}
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
