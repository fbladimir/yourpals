"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CheckCircle, ArrowRight, Sparkles, User, Target, Settings } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

interface OnboardingCompleteProps {
  userGoals: string[]
  isBusiness: boolean
  selectedGoal: string
  selectedPlan: string
  onComplete: () => void
}

export default function OnboardingComplete({ userGoals, isBusiness, selectedGoal, selectedPlan, onComplete }: OnboardingCompleteProps) {
  const { user } = useAuth()
  const [countdown, setCountdown] = useState(15) // Increased from 8 to 15 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onComplete])

  const getBotIcon = (goal: string) => {
    switch (goal) {
      case 'finance': return '💰'
      case 'fitness': return '💪'
      case 'productivity': return '⚡'
      case 'business': return '🏢'
      default: return '🤖'
    }
  }

  const getBotName = (goal: string) => {
    switch (goal) {
      case 'finance': return 'Money Pal'
      case 'fitness': return 'Fitness Pal'
      case 'productivity': return 'Productivity Pal'
      case 'business': return 'Business Pal'
      default: return 'General Pal'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-8"
      >
        {/* AI Mode Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <img 
              src="/yourpalsRobot.png" 
              alt="AI Mode Active" 
              className="h-24 mx-auto"
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-robot-green rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            textShadow: [
              "0 0 0 rgba(34, 197, 94, 0)",
              "0 0 20px rgba(34, 197, 94, 0.6)",
              "0 0 0 rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-robot-green font-mono text-sm tracking-widest mb-4"
        >
          AI INTEGRATION COMPLETE
        </motion.div>
        
        <div className="w-24 h-24 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      {/* Congratulations Message */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-bold text-white mb-4"
      >
        🎉 Onboarding Complete!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Welcome to YourPals, {user?.user_metadata?.full_name || 'friend'}! Your AI journey is about to begin!
      </motion.p>

      {/* User Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-xl p-6 mb-8 border border-robot-blue/20 max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Info */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-5 h-5 text-robot-blue" />
              <span className="font-semibold text-white">Your Profile</span>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Name: {user?.user_metadata?.full_name || 'Not set'}</div>
              <div>Email: {user?.email}</div>
              <div>Plan: {selectedPlan}</div>
            </div>
          </div>

          {/* Goals & Preferences */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-robot-green" />
              <span className="font-semibold text-white">Your Goals</span>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Primary: {selectedGoal}</div>
              <div>Use Case: {isBusiness ? 'Business' : 'Personal'}</div>
              <div>Focus Areas: {userGoals.join(', ')}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Team Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          Meet Your AI Team! 🤖
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Primary Bot */}
          <div className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-lg p-4 border border-robot-green/30">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{getBotIcon(selectedGoal)}</span>
              <span className="font-semibold text-white">{getBotName(selectedGoal)}</span>
            </div>
            <p className="text-sm text-gray-300">Your primary AI assistant</p>
          </div>

          {/* General Bot */}
          <div className="bg-gradient-to-br from-robot-purple/20 to-robot-pink/20 rounded-lg p-4 border border-robot-purple/30">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold text-white">General Pal</span>
            </div>
            <p className="text-sm text-gray-300">Your AI coordinator</p>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          What's Next?
        </h3>
        
        <div className="space-y-3 max-w-md mx-auto text-left">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
            <span>Access your personalized dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
            <span>Start using {getBotName(selectedGoal)}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
            <span>Explore other AI assistants</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
            <span>Customize your experience</span>
          </div>
        </div>
      </motion.div>

      {/* Countdown and Redirect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-br from-robot-orange/20 to-robot-red/20 rounded-xl p-6 border border-robot-orange/30 max-w-md mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="w-5 h-5 text-robot-orange" />
          <span className="font-semibold text-white">Redirecting to Dashboard</span>
        </div>
        
        <div className="text-3xl font-bold text-robot-orange mb-2">
          {countdown}
        </div>
        
        <p className="text-sm text-gray-300 mb-4">
          You'll be automatically redirected to your personalized dashboard in {countdown} seconds
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-robot-orange to-robot-red text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
        >
          Go to Dashboard Now
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
