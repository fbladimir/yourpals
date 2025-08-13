"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react'

export default function VerifyEmailPage() {
  const [verificationStatus, setVerificationStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [countdown, setCountdown] = useState(8) // Increased from 5 to 8 seconds
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('token')
    const type = searchParams.get('type')
    
    if (token && type === 'signup') {
      console.log('🔍 VerifyEmailPage: Processing verification token...')
      verifyEmail(token)
    } else {
      console.error('❌ VerifyEmailPage: Missing or invalid verification parameters')
      setVerificationStatus('error')
      setErrorMessage('Invalid verification link')
    }
  }, [searchParams])

  // Countdown and redirect on success
  useEffect(() => {
    if (verificationStatus === 'success') {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            console.log('✅ VerifyEmailPage: Redirecting to main app...')
            // Redirect with verification parameters
            router.push('/?verified=true&email=' + encodeURIComponent(searchParams.get('email') || ''))
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [verificationStatus, router, searchParams])

  const verifyEmail = async (token: string) => {
    try {
      console.log('🔍 VerifyEmailPage: Verifying email with token...')
      
      // Exchange the token for a session
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'signup'
      })
      
      if (error) {
        console.error('❌ VerifyEmailPage: Token verification failed:', error)
        setErrorMessage(error.message)
        setVerificationStatus('error')
        return
      }
      
      if (data.session && data.user) {
        console.log('✅ VerifyEmailPage: Email verified successfully!')
        console.log('✅ VerifyEmailPage: User session created:', data.user.email)
        console.log('✅ VerifyEmailPage: Session data:', data.session)
        
        // Ensure the session is properly set
        await supabase.auth.setSession(data.session)
        
        // Force a session refresh to ensure the context updates
        await supabase.auth.refreshSession()
        
        setVerificationStatus('success')
      } else {
        console.error('❌ VerifyEmailPage: No session returned after verification')
        setErrorMessage('Verification completed but session creation failed')
        setVerificationStatus('error')
      }
      
    } catch (error) {
      console.error('❌ VerifyEmailPage: Error during verification:', error)
      setErrorMessage('An unexpected error occurred during verification')
      setVerificationStatus('error')
    }
  }

  const handleGoToApp = () => {
    // Redirect with verification parameters
    router.push('/?verified=true&email=' + encodeURIComponent(searchParams.get('email') || ''))
  }

  const handleRetry = () => {
    const token = searchParams.get('token')
    if (token) {
      setVerificationStatus('verifying')
      setErrorMessage('')
      verifyEmail(token)
    }
  }

  if (verificationStatus === 'verifying') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-6xl mb-6"
          >
            🤖
          </motion.div>
          
          <h1 className="text-2xl font-bold text-white mb-4">
            Verifying Your Email...
          </h1>
          
          <p className="text-gray-300 mb-6">
            Please wait while I verify your email address. This should only take a moment!
          </p>
          
          <div className="flex items-center justify-center gap-2 text-robot-blue">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-5 h-5" />
            </motion.div>
            <span>Processing verification...</span>
          </div>
        </div>
      </div>
    )
  }

  if (verificationStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-white mb-4">
            🎉 Email Verified!
          </h1>
          
          <p className="text-gray-300 mb-6">
            Welcome to YourPals! Your email has been successfully verified.
          </p>

          <div className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-xl p-6 border border-robot-green/30 mb-6">
            <div className="text-3xl font-bold text-robot-green mb-2">
              {countdown}
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Redirecting to YourPals in {countdown} seconds...
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoToApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Go Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    )
  }

  if (verificationStatus === 'error') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-robot-red to-robot-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h1 className="text-2xl font-bold text-white mb-4">
            Verification Failed
          </h1>
          
          <p className="text-gray-300 mb-6">
            {errorMessage || 'There was an issue verifying your email address.'}
          </p>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRetry}
              className="w-full px-6 py-3 bg-robot-blue text-white rounded-lg hover:bg-robot-blue/80 transition-colors font-semibold"
            >
              🔄 Try Again
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Go Back to App
            </motion.button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>If the problem persists, please contact support or try signing up again.</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}
