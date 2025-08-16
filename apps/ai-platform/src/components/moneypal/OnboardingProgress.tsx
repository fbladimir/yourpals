'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, 
  Circle, 
  Lock, 
  Star,
  Trophy,
  Sparkles,
  ArrowRight,
  Target,
  CreditCard,
  Settings,
  User
} from 'lucide-react'
import ManualDataEntry from './ManualDataEntry'

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  action: string
  isCompleted: boolean
  isRequired: boolean
  isLocked: boolean
  order: number
}

interface OnboardingProgressProps {
  userId: string
  onStepComplete: (stepId: string) => void
  onComplete: () => void
}

export default function OnboardingProgress({ 
  userId, 
  onStepComplete, 
  onComplete 
}: OnboardingProgressProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showManualDataEntry, setShowManualDataEntry] = useState(false)

  const onboardingSteps: OnboardingStep[] = [
    {
      id: 'profile',
      title: 'Complete Your Profile',
      description: 'Set up your basic information and preferences',
      icon: <User className="w-5 h-5" />,
      action: 'Update Profile',
      isCompleted: false,
      isRequired: true,
      isLocked: false,
      order: 1
    },
    {
      id: 'accounts',
      title: 'Link Your First Account',
      description: 'Connect a bank account to get started with MoneyPal',
      icon: <CreditCard className="w-5 h-5" />,
      action: 'Link Account',
      isCompleted: false,
      isRequired: true,
      isLocked: false,
      order: 2
    },
    {
      id: 'goals',
      title: 'Set Financial Goals',
      description: 'Define what you want to achieve financially',
      icon: <Target className="w-5 h-5" />,
      action: 'Set Goals',
      isCompleted: false,
      isRequired: true,
      isLocked: false,
      order: 3
    },
    {
      id: 'preferences',
      title: 'Configure Preferences',
      description: 'Customize your MoneyPal experience',
      icon: <Settings className="w-5 h-5" />,
      action: 'Configure',
      isCompleted: false,
      isRequired: false,
      isLocked: false,
      order: 4
    }
  ]

  const [steps, setSteps] = useState(onboardingSteps)

  // Check completion status from localStorage or API
  useEffect(() => {
    const savedProgress = localStorage.getItem(`onboarding-progress-${userId}`)
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setSteps(prev => prev.map(step => ({
        ...step,
        isCompleted: progress[step.id] || false
      })))
    }
  }, [userId])

  // Check if all required steps are completed
  useEffect(() => {
    const requiredSteps = steps.filter(step => step.isRequired)
    const completedRequired = requiredSteps.every(step => step.isCompleted)
    
    if (completedRequired && !showCelebration) {
      setShowCelebration(true)
      setTimeout(() => {
        onComplete()
      }, 3000)
    }
  }, [steps, onComplete, showCelebration])

  const handleStepAction = (stepId: string) => {
    if (stepId === 'accounts') {
      setShowManualDataEntry(true)
      return
    }
    
    // For other steps, simulate completion
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, isCompleted: true } : step
    ))
    
    // Save progress
    const progress = steps.reduce((acc, step) => ({
      ...acc,
      [step.id]: step.isCompleted
    }), {})
    localStorage.setItem(`onboarding-progress-${userId}`, JSON.stringify(progress))
    
    onStepComplete(stepId)
  }

  const handleManualDataEntered = (data: any) => {
    // Save the manual data
    localStorage.setItem(`moneypal-manual-data-${userId}`, JSON.stringify(data))
    
    // Mark accounts step as completed
    setSteps(prev => prev.map(step => 
      step.id === 'accounts' ? { ...step, isCompleted: true } : step
    ))
    
    setShowManualDataEntry(false)
    onStepComplete('accounts')
  }

  const completedSteps = steps.filter(step => step.isCompleted).length
  const totalRequiredSteps = steps.filter(step => step.isRequired).length
  const progressPercentage = (completedSteps / totalRequiredSteps) * 100

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome to MoneyPal! 🎉</h2>
        <p className="text-gray-300 mb-4">Let's get you set up in just a few steps</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <motion.div
            className="bg-gradient-to-r from-robot-green to-robot-blue h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        
        <p className="text-sm text-gray-400">
          {completedSteps} of {totalRequiredSteps} required steps completed
        </p>
      </div>

      {/* Onboarding Steps */}
      <div className="grid gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-4 rounded-xl border transition-all duration-300 ${
              step.isCompleted
                ? 'bg-robot-green/10 border-robot-green/30'
                : step.isLocked
                ? 'bg-gray-800/30 border-gray-700/50 opacity-50'
                : 'bg-gray-800/30 border-gray-700/50 hover:border-robot-green/30'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Step Icon */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                step.isCompleted
                  ? 'bg-robot-green/20 text-robot-green'
                  : step.isLocked
                  ? 'bg-gray-700/50 text-gray-500'
                  : 'bg-robot-blue/20 text-robot-blue'
              }`}>
                {step.isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : step.isLocked ? (
                  <Lock className="w-6 h-6" />
                ) : (
                  step.icon
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-semibold ${
                    step.isCompleted ? 'text-robot-green' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  {step.isRequired && (
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                      Required
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2">
                {step.isCompleted ? (
                  <div className="flex items-center gap-2 text-robot-green">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                ) : step.isLocked ? (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
                  >
                    Locked
                  </button>
                ) : (
                  <button
                    onClick={() => handleStepAction(step.id)}
                    className="px-4 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/90 transition-colors flex items-center gap-2"
                  >
                    {step.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Step Number */}
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center">
              <span className="text-xs text-gray-400">{step.order}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Celebration Modal */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 border border-robot-green/30 rounded-3xl p-8 text-center max-w-md"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">🎉 You're All Set!</h3>
              <p className="text-gray-300 mb-6">
                Welcome to MoneyPal! You've completed the essential setup and are ready to start your financial journey.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-robot-green mb-4">
                <Star className="w-5 h-5" />
                <span className="font-medium">Achievement Unlocked: First Steps</span>
                <Star className="w-5 h-5" />
              </div>
              
              <p className="text-sm text-gray-400">
                Redirecting to your dashboard in a few seconds...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Manual Data Entry Modal */}
      <AnimatePresence>
        {showManualDataEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ManualDataEntry
                onDataEntered={handleManualDataEntered}
                onClose={() => setShowManualDataEntry(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
