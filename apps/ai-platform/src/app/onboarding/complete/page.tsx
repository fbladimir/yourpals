'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Sparkles, ArrowRight, Crown, Zap, Star, Target, Rocket } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function OnboardingCompletePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useAuth()
  const [countdown, setCountdown] = useState(8)
  const [plan] = useState(searchParams.get('plan') || 'PRO')

  useEffect(() => {
    // Auto-redirect to dashboard after countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/dashboard')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'FREE':
        return <Star className="w-16 h-16 text-gray-400" />
      case 'STARTER':
        return <Zap className="w-16 h-16 text-blue-500" />
      case 'PRO':
        return <Crown className="w-16 h-16 text-purple-500" />
      default:
        return <Star className="w-16 h-16" />
    }
  }

  const getPlanName = (planId: string) => {
    switch (planId) {
      case 'FREE':
        return 'Free Plan'
      case 'STARTER':
        return 'Starter Plan'
      case 'PRO':
        return 'Pro Plan'
      default:
        return 'Pro Plan'
    }
  }

  const getPlanFeatures = (planId: string) => {
    switch (planId) {
      case 'FREE':
        return [
          'Access to General Pal',
          'Basic AI assistance',
          'Limited queries per month',
          'Community support'
        ]
      case 'STARTER':
        return [
          'All Free features',
          'Access to 2 AI Pals',
          'Unlimited queries',
          'Priority support',
          'Custom AI training'
        ]
      case 'PRO':
        return [
          'All Starter features',
          'Access to all AI Pals',
          'Advanced AI customization',
          'API access',
          'Dedicated support',
          'Team collaboration'
        ]
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping opacity-20"></div>
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              🎉 Onboarding Complete!
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Congratulations! You've successfully set up YourPals AI Platform. 
              Your AI team is ready to help you achieve your goals.
            </p>
          </motion.div>

          {/* Plan Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-robot-blue/10 to-robot-purple/10 rounded-2xl p-6 ring-1 ring-robot-blue/20 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                {getPlanIcon(plan)}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                {getPlanName(plan)} Activated
              </h2>
              <p className="text-white/70 mb-6">
                You now have access to all the features included in your plan.
              </p>
              
              {/* Features List */}
              <div className="text-left max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-white mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {getPlanFeatures(plan).map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 ring-1 ring-green-500/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-3">
                🚀 What's Next?
              </h3>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Explore your AI Pals and their capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Start your first AI conversation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Customize your AI experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
                  <span>Access your dashboard and manage settings</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => router.push('/subscriptions')}
              className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Manage Subscription</span>
            </button>
          </motion.div>

          {/* Auto-redirect Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8"
          >
            <p className="text-white/50 text-sm">
              Redirecting to dashboard in {countdown} second{countdown !== 1 ? 's' : ''}...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
