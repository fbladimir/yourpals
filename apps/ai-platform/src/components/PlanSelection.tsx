"use client"

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

interface PlanSelectionProps {
  onPlanSelected: (plan: string) => void
  onBack: () => void
  onSkip: () => void
}

export default function PlanSelection({ onPlanSelected, onBack, onSkip }: PlanSelectionProps) {
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
        'Community support'
      ],
      icon: '🚀',
      color: 'from-gray-600 to-gray-700',
      popular: false
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
        'Custom AI training'
      ],
      icon: '⭐',
      color: 'from-robot-blue to-robot-purple',
      popular: true
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
        'Team collaboration'
      ],
      icon: '👑',
      color: 'from-robot-green to-robot-blue',
      popular: false
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* AI Mode Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <img 
              src="/yourpalsRobot.png" 
              alt="AI Mode Active" 
              className="h-20 mx-auto"
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
          className="text-robot-blue font-mono text-sm tracking-widest mb-3"
        >
          AI PLAN OPTIMIZATION MODULE
        </motion.div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
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
      </motion.div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
              plan.popular 
                ? 'border-robot-blue bg-gradient-to-br from-robot-blue/10 to-robot-purple/10' 
                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
            }`}
            onClick={() => onPlanSelected(plan.id)}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-robot-blue to-robot-purple text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </motion.div>
            )}

            {/* Plan Icon */}
            <div className="text-center mb-4">
              <div className={`text-4xl mb-2 ${plan.icon}`}></div>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-300 text-sm">{plan.description}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <Check className="w-4 h-4 text-robot-green flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Select Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white hover:shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {plan.id === 'FREE' ? '🎉 Get Started Free' : 'Choose Plan'}
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
            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            ← Go Back
          </button>
          
          <div className="text-gray-500">•</div>
          
          <button
            onClick={onSkip}
            className="text-robot-green hover:text-robot-blue transition-colors duration-200 flex items-center gap-2 font-medium"
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
