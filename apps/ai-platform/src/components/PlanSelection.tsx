"use client"

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, CreditCard, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { getStripe, getStripePriceId } from '@/lib/stripe'
import { useAuth } from '@/contexts/AuthContext'

interface PlanSelectionProps {
  onPlanSelected: (plan: string) => void
  onBack: () => void
  onSkip: () => void
  onPaymentInitiated: (plan: string) => void
}

export default function PlanSelection({ onPlanSelected, onBack, onSkip, onPaymentInitiated }: PlanSelectionProps) {
  const { user } = useAuth()
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const plans = [
    {
      id: 'FREE',
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Access to General Pal',
        'Basic AI assistance',
        'Limited queries per month',
        'Community support',
        '7-day trial of Pro features'
      ],
      icon: '🚀',
      color: 'from-gray-600 to-gray-700',
      popular: false,
      stripePriceId: null
    },
    {
      id: 'STARTER',
      name: 'Starter Plan',
      price: '$9.99',
      period: 'per month',
      description: 'Great for personal use',
      features: [
        'All Free features',
        'Access to 2 AI Pals',
        'Unlimited queries',
        'Priority support',
        'Custom AI training',
        '7-day free trial'
      ],
      icon: '⭐',
      color: 'from-robot-blue to-robot-purple',
      popular: true,
      stripePriceId: 'price_1RvtcCPB044dbGNMhsglTuZw' // Real Stripe price ID for Starter Plan
    },
    {
      id: 'PRO',
      name: 'Pro Plan',
      price: '$19.99',
      period: 'per month',
      description: 'For power users & professionals',
      features: [
        'All Starter features',
        'Access to all AI Pals',
        'Advanced AI customization',
        'API access',
        'Dedicated support',
        'Team collaboration',
        '7-day free trial'
      ],
      icon: '👑',
      color: 'from-robot-green to-robot-blue',
      popular: false,
      stripePriceId: 'price_1RvtdEPB044dbGNMFVPJZA8r' // Real Stripe price ID for Pro Plan
    }
  ]

  const handlePlanSelection = async (plan: any) => {
    if (plan.id === 'FREE') {
      // Free plan - no payment needed
      onPlanSelected(plan.id)
    } else {
      // Paid plan - initiate Stripe checkout
      await handlePaidPlanSelection(plan)
    }
  }

  const handlePaidPlanSelection = async (plan: any) => {
    if (!user?.email) {
      setError('Please sign in to continue with a paid plan')
      return
    }

    setIsProcessing(plan.id)
    setError(null)

    try {
      // Get the Stripe price ID for this plan
      const priceId = plan.stripePriceId
      if (!priceId) {
        throw new Error('Invalid plan selected')
      }

      console.log('Creating Stripe checkout session for plan:', plan.id, 'with price:', priceId)

      // Create Stripe checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: priceId,
          successUrl: `${window.location.origin}/onboarding/payment-success?plan=${plan.id}`,
          cancelUrl: `${window.location.origin}/onboarding/plan-selection`,
          customerEmail: user.email,
          planId: plan.id
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create checkout session')
      }

      const { sessionId } = await response.json()
      console.log('Checkout session created:', sessionId)

      // Notify parent component that payment is being initiated
      onPaymentInitiated(plan.id)

      // Redirect to Stripe checkout
      const stripe = await getStripe()
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          throw new Error(error.message)
        }
      } else {
        throw new Error('Stripe failed to load')
      }

    } catch (error) {
      console.error('Error initiating payment:', error)
      setError(error instanceof Error ? error.message : 'Payment failed to start')
    } finally {
      setIsProcessing(null)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        {/* AI Mode Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <div className="relative inline-block">
            <img 
              src="/yourpalsRobot.png" 
              alt="AI Mode Active" 
              className="h-16 sm:h-18 lg:h-20 mx-auto"
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
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
          className="text-robot-blue font-mono text-xs sm:text-sm tracking-widest mb-3"
        >
          AI PLAN OPTIMIZATION MODULE
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-4 sm:mb-6">
          Select the perfect plan for your AI journey. You can always upgrade or downgrade later.
        </p>
        
        {/* Friendly Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-robot-green/10 to-robot-blue/10 rounded-xl p-4 border border-robot-green/20 max-w-2xl mx-auto mb-8"
        >
          <div className="flex items-center gap-3 text-center">
            <span className="text-2xl">💡</span>
            <div>
              <div className="text-robot-green font-semibold mb-1">Start Free, Upgrade When Ready</div>
              <div className="text-gray-300 text-sm">
                We believe in letting you experience the value first. Start with our free plan and upgrade whenever you're ready for more features!
              </div>
            </div>
          </div>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 max-w-2xl mx-auto mb-6"
          >
            <div className="text-red-400 text-sm text-center">
              ⚠️ {error}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Plans Grid - Mobile Scrollable, Desktop Grid */}
      <div className="mb-6 sm:mb-8">
        {/* Mobile: Horizontal Scrollable Cards */}
        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide touch-pan-x">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0 w-80 touch-manipulation ${
                  plan.popular 
                    ? 'border-robot-blue bg-gradient-to-br from-robot-blue/10 to-robot-purple/10' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
                onClick={() => !isProcessing && handlePlanSelection(plan)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-gradient-to-r from-robot-blue to-robot-purple text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  </motion.div>
                )}

                {/* Plan Icon */}
                <div className="text-center mb-3">
                  <div className={`text-3xl mb-2 ${plan.icon}`}></div>
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-xs ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-xs">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-2 text-xs"
                    >
                      <Check className="w-3 h-3 text-robot-green flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Select Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isProcessing !== null}
                  className={`w-full py-2 px-3 rounded-xl font-semibold transition-all duration-200 text-sm flex items-center justify-center gap-2 ${
                    isProcessing === plan.id
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white hover:shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  {isProcessing === plan.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : plan.id === 'FREE' ? (
                    '🎉 Get Started Free'
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      Choose Plan
                    </>
                  )}
                </motion.button>
                
                {/* Friendly Message */}
                {plan.id === 'FREE' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-robot-green text-xs text-center mt-2 font-medium"
                  >
                    ✨ Perfect for getting started!
                  </motion.p>
                )}
                
                {plan.popular && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-robot-blue text-xs text-center mt-2 font-medium"
                  >
                    🌟 Most popular choice!
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-gray-400 text-xs bg-gray-800/50 px-3 py-2 rounded-full">
              <span className="text-robot-blue">←</span>
              <span>Swipe to see all plans</span>
              <span className="text-robot-blue">→</span>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                plan.popular 
                  ? 'border-robot-blue bg-gradient-to-br from-robot-blue/10 to-robot-purple/10' 
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
              }`}
              onClick={() => !isProcessing && handlePlanSelection(plan)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-robot-blue to-robot-purple text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Most Popular</span>
                    <span className="sm:hidden">Popular</span>
                  </div>
                </motion.div>
              )}

              {/* Plan Icon */}
              <div className="text-center mb-3 sm:mb-4">
                <div className={`text-3xl sm:text-4xl mb-2 ${plan.icon}`}></div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-xs sm:text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm"
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-robot-green flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Select Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isProcessing !== null}
                className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold transition-all duration-200 text-sm flex items-center justify-center gap-2 ${
                  isProcessing === plan.id
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white hover:shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {isProcessing === plan.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : plan.id === 'FREE' ? (
                  '🎉 Get Started Free'
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    Choose Plan
                  </>
                )}
              </motion.button>
              
              {/* Friendly Message */}
              {plan.id === 'FREE' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-robot-green text-xs text-center mt-2 font-medium"
                >
                  ✨ Perfect for getting started!
                </motion.p>
              )}
              
              {plan.popular && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-robot-blue text-xs text-center mt-2 font-medium"
                >
                  🌟 Most popular choice!
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBack}
            disabled={isProcessing !== null}
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Go Back
          </button>
          
          <div className="text-gray-500">•</div>
          
          <button
            onClick={onSkip}
            disabled={isProcessing !== null}
            className="text-robot-green hover:text-robot-blue transition-colors duration-200 flex items-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🚀 Start with Free Plan
          </button>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-500 text-sm mt-4 max-w-md mx-auto"
        >
          💡 <strong>No pressure!</strong> You can always upgrade later. Start exploring with our free plan and see how YourPals can help you!
        </motion.p>
      </motion.div>
    </div>
  )
}
