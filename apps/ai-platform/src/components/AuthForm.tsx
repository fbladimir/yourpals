"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, Bot } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

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
        result = await signUp(email, password, name)
        console.log('📝 AuthForm: Sign up result:', result)
      } else {
        console.log('🔑 AuthForm: Attempting sign in...')
        result = await signIn(email, password)
        console.log('🔑 AuthForm: Sign in result:', result)
      }

      if (result.error) {
        console.error('❌ AuthForm: Authentication error:', result.error)
        setError(result.error.message)
        return
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
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl mb-4"
        >
          🤖
        </motion.div>
        <h2 className="text-3xl font-bold text-white mb-2">
          {mode === 'signin' ? 'Welcome Back!' : 'Join YourPals!'}
        </h2>
        <p className="text-gray-400">
          {mode === 'signin' 
            ? 'Sign in to continue your AI journey' 
            : 'Start your personalized AI experience today'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent"
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
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent"
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
              className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
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
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              {mode === 'signin' ? 'Signing In...' : 'Creating Account...'}
            </div>
          ) : (
            mode === 'signin' ? 'Sign In' : 'Create Account'
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={onSwitchMode}
            className="ml-2 text-robot-blue hover:text-robot-purple transition-colors duration-200"
          >
            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <Bot className="w-4 h-4 text-robot-orange" />
          <span>Your data is secure and encrypted. We never share your information.</span>
        </div>
      </div>
    </motion.div>
  )
}
