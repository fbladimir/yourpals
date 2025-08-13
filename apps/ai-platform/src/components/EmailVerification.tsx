"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Bot, RefreshCw } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface EmailVerificationProps {
  email: string
  onVerified: () => void
  onBackToSignIn: () => void
}

export default function EmailVerification({ email, onVerified, onBackToSignIn }: EmailVerificationProps) {
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const handleResendEmail = async () => {
    setIsResending(true)
    setResendSuccess(false)
    
    try {
      console.log('📧 EmailVerification: Resending verification email...')
      
      // Get the current origin for redirect
      const redirectTo = typeof window !== 'undefined' 
        ? `${window.location.origin}/auth/verify-email`
        : undefined
      
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: redirectTo,
        },
      })
      
      if (error) {
        console.error('❌ EmailVerification: Error resending email:', error)
      } else {
        console.log('✅ EmailVerification: Verification email resent successfully')
        setResendSuccess(true)
        // Hide success message after 3 seconds
        setTimeout(() => setResendSuccess(false), 3000)
      }
    } catch (error) {
      console.error('❌ EmailVerification: Error resending email:', error)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl mb-4"
        >
          🤖
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Email Verification Required!
        </h2>
        <p className="text-gray-400">
          Hi there! I'm GeneralBot, and I need to verify your email before we can continue our AI journey together!
        </p>
      </div>

      {/* Robot Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-xl p-6 mb-6 border border-robot-blue/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-robot-blue to-robot-purple rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">GeneralBot says:</h3>
            <p className="text-gray-300 leading-relaxed">
              I've sent a verification link to <span className="text-robot-blue font-medium">{email}</span>. 
              Please check your inbox and click the verification link!
            </p>
            <p className="text-sm text-robot-green mt-2">
              💡 <strong>Pro tip:</strong> Click the link in your email and I'll automatically verify you!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <div className="p-4 bg-robot-blue/20 rounded-lg border border-robot-blue/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-robot-blue" />
            <span className="font-semibold text-robot-blue">
              Check Your Email
            </span>
          </div>
          
          <p className="text-sm text-gray-300">
            Click the verification link in your email to continue
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleResendEmail}
          disabled={isResending}
          className="w-full py-3 px-4 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isResending ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-4 h-4" />
              </motion.div>
              Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              Resend Verification Email
            </>
          )}
        </motion.button>

        {resendSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-robot-green/20 border border-robot-green/30 rounded-lg text-center"
          >
            <p className="text-robot-green text-sm font-medium">
              ✅ Verification email sent successfully!
            </p>
          </motion.div>
        )}
      </div>

      {/* Manual Sign In Option */}
      <div className="mt-6 text-center">
        <button
          onClick={onBackToSignIn}
          className="text-robot-blue hover:text-robot-purple transition-colors duration-200"
        >
          Or go back to sign in
        </button>
      </div>
    </motion.div>
  )
}
