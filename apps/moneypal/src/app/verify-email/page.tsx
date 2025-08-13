"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createSupabaseClient } from "../../lib/auth"
import { config } from "../../lib/config"

export default function VerifyEmailPage() {
  const router = useRouter()
  const [checking, setChecking] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkEmailVerification = async () => {
    setChecking(true)
    setError(null)
    
    try {
      const supabase = createSupabaseClient()
      
      // Get current session to check if user is now verified
      const { data, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Error checking session:', error)
        setError('Failed to check email verification status')
        return
      }
      
      if (data.session && data.session.user.email_confirmed_at) {
        // Email is verified, user can access dashboard
        setVerified(true)
        
        // Store user data in localStorage for the simplified auth system
        const userData = {
          id: data.session.user.id,
          email: data.session.user.email || '',
          full_name: data.session.user.user_metadata?.full_name,
          avatar_url: data.session.user.user_metadata?.avatar_url
        }
        
        localStorage.setItem('moneypal_auth_token', data.session.access_token)
        localStorage.setItem('moneypal_user_data', JSON.stringify(userData))
        
        console.log('✅ Email verified: User data stored in localStorage:', userData)
        
        // Dispatch custom event to notify AuthProvider
        window.dispatchEvent(new CustomEvent('moneypal:auth-data-stored', { 
          detail: { userData } 
        }))
        
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)
        
      } else {
        setError('Email not yet verified. Please check your inbox and click the verification link.')
      }
      
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('An unexpected error occurred while checking verification status')
    } finally {
      setChecking(false)
    }
  }

  const goBackToWelcome = () => {
    router.push('/welcome')
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      {/* Back to YourPals Navigation */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <a 
          href={config.marketingUrl} 
          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-700/50 backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to YourPals</span>
        </a>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto text-center w-full px-4"
      >
        {/* Email Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Check Your Email
        </h1>
        
        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
          We've sent you a verification link to confirm your email address. 
          Please check your inbox and click the link to verify your account.
        </p>

        {/* Status Messages */}
        {verified && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Email Verified!
            </div>
            <p className="text-green-300 text-xs sm:text-sm">
              Redirecting you to your dashboard...
            </p>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6"
          >
            <p className="text-red-300 text-xs sm:text-sm">{error}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={checkEmailVerification}
            disabled={checking || verified}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
          >
            {checking ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Checking...
              </div>
            ) : verified ? (
              'Email Confirmed!'
            ) : (
              'Email Confirmed'
            )}
          </button>
          
          <button
            onClick={goBackToWelcome}
            disabled={checking || verified}
            className="w-full border-2 border-gray-600 text-gray-300 px-4 sm:px-6 py-3 rounded-xl font-semibold hover:border-gray-500 hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Back to MoneyPal
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-2">
            Didn't receive the email?
          </p>
          <p className="text-gray-500 text-xs">
            Check your spam folder or contact support if you continue to have issues.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
