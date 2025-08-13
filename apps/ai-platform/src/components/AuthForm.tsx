"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, Bot } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

interface AuthFormProps {
  onAuthSuccess: (userData: any) => void
  onSwitchMode: () => void
  mode: 'signin' | 'signup'
}

export default function AuthForm({ onAuthSuccess, onSwitchMode, mode }: AuthFormProps) {
  const { signUp, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError('')
    
    try {
      console.log('🔑 AuthForm: Starting Google sign-in...')
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined' ? window.location.origin : undefined
        }
      })
      
      if (error) {
        console.error('❌ AuthForm: Google sign-in error:', error)
        setError('Google sign-in failed. Please try again.')
      } else {
        console.log('✅ AuthForm: Google sign-in initiated:', data)
        // The user will be redirected to Google OAuth
      }
    } catch (err: any) {
      console.error('💥 AuthForm: Google sign-in unexpected error:', err)
      setError('Google sign-in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    console.log('🚀 AuthForm: Starting authentication for mode:', mode)
    console.log('📧 Email:', email)
    console.log('👤 Name:', name)

    try {
      let result
      
      if (mode === 'signup') {
        console.log('📝 AuthForm: Attempting sign up...')
        
        // Let Supabase handle the duplicate email check
        result = await signUp(email, password, name)
        console.log('📝 AuthForm: Sign up result:', result)
      } else {
        console.log('🔑 AuthForm: Attempting sign in...')
        result = await signIn(email, password)
        console.log('🔑 AuthForm: Sign in result:', result)
      }

      if (result.error) {
        console.error('❌ AuthForm: Authentication error:', result.error)
        console.error('❌ AuthForm: Error message:', result.error.message)
        console.error('❌ AuthForm: Full error object:', result.error)
        
        // Handle specific error cases for better UX
        if (result.error.message.includes('already exists') || 
            result.error.message.includes('already registered') ||
            result.error.message.includes('User already registered')) {
          setError('An account with this email already exists. Please sign in instead.')
          // Don't return here, let the user see the message and choose to switch to sign in
        } else if (result.error.message.includes('not verified') || 
                   result.error.message.includes('Email not confirmed')) {
          setError('This email is already registered but not verified. Please sign in to resend verification.')
          // Don't return here, let the user see the message
        } else {
          setError(result.error.message)
          return
        }
      }

      if (result.data?.user) {
        console.log('✅ AuthForm: Authentication successful!')
        console.log('👤 AuthForm: User data:', result.data.user)
        
        const userData = {
          id: result.data.user.id,
          email: result.data.user.email,
          name: result.data.user.user_metadata?.full_name || 'User',
          avatar: '🤖',
          email_confirmed_at: result.data.user.email_confirmed_at
        }
        
        console.log('🎯 AuthForm: Calling onAuthSuccess with:', userData)
        onAuthSuccess(userData)
      } else {
        console.warn('⚠️ AuthForm: No user data in result:', result)
      }
    } catch (err: any) {
      console.error('💥 AuthForm: Unexpected error:', err)
      setError(err.message || 'Authentication failed. Please try again.')
    } finally {
      setIsLoading(false)
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <img 
              src="/yourpalsRobot.png" 
              alt="AI Authentication" 
              className="h-16 mx-auto"
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-robot-blue rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            textShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 15px rgba(59, 130, 246, 0.6)",
              "0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-robot-blue font-mono text-sm tracking-wider mb-2"
        >
          AI AUTHENTICATION MODULE
        </motion.div>
        
        <h2 className="text-xl font-bold text-white mb-2">
          {mode === 'signin' ? 'Access Your AI Network' : 'Initialize AI Profile'}
        </h2>
        <p className="text-gray-400 text-sm">
          {mode === 'signin' 
            ? 'Authenticate to reconnect with your AI team' 
            : 'Create your profile to deploy your AI assistants'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Google Sign In */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 rounded-xl text-white font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center justify-center gap-3 mb-6"
        >
          <Bot className="w-5 h-5 text-robot-blue" />
          <span className="font-mono text-sm">AI-ENHANCED GOOGLE ACCESS</span>
        </motion.button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-gray-900 text-gray-400 font-mono">AI AUTHENTICATION REQUIRED</span>
          </div>
        </div>

        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
          >
            {error}
            {/* Show helpful action for existing account errors */}
            {(error.includes('already exists') || 
              error.includes('already registered') || 
              error.includes('User already registered') ||
              error.includes('already been registered')) && (
              <div className="mt-3 pt-3 border-t border-red-500/30">
                <div className="text-sm text-gray-300 mb-2">
                  It looks like you already have an account with this email.
                </div>
                <button
                  onClick={onSwitchMode}
                  className="text-robot-blue hover:text-robot-purple transition-colors duration-200 text-sm font-medium underline"
                >
                  Click here to sign in instead →
                </button>
              </div>
            )}
            {/* Show helpful action for unverified email errors */}
            {(error.includes('not verified') || 
              error.includes('Email not confirmed') ||
              error.includes('email not confirmed')) && (
              <div className="mt-3 pt-3 border-t border-red-500/30">
                <div className="text-sm text-gray-300 mb-2">
                  Your email was registered but not verified.
                </div>
                <button
                  onClick={onSwitchMode}
                  className="text-robot-blue hover:text-robot-purple transition-colors duration-200 text-sm font-medium underline"
                >
                  Click here to sign in and resend verification →
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span className="font-mono text-sm">AI PROCESSING...</span>
            </>
          ) : (
            <>
              <Bot className="w-5 h-5" />
              <span className="font-mono text-sm">
                {mode === 'signin' ? 'ACCESS AI NETWORK' : 'DEPLOY AI PROFILE'}
              </span>
            </>
          )}
        </motion.button>
      </form>

      {/* Bottom Section */}
      <div className="text-center mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-sm mb-4"
        >
          {mode === 'signin' 
            ? "Don't have an AI profile yet?" 
            : "Already have AI network access?"
          }
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSwitchMode}
          className="text-robot-blue hover:text-robot-purple transition-colors duration-200 font-medium"
        >
          <span className="font-mono text-sm">
            {mode === 'signin' 
              ? 'INITIALIZE NEW AI PROFILE' 
              : 'ACCESS EXISTING AI NETWORK'
            }
          </span>
        </motion.button>
      </div>

      {/* AI Security Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 p-4 bg-gradient-to-r from-robot-green/10 to-robot-blue/10 rounded-xl border border-robot-green/20"
      >
        <div className="flex items-center gap-3 text-center">
          <span className="text-2xl">🔒</span>
          <div>
            <div className="text-robot-green font-semibold text-sm mb-1">AI SECURITY PROTOCOLS ACTIVE</div>
            <div className="text-gray-300 text-xs">
              Your data is protected with quantum encryption and AI-powered security measures
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
