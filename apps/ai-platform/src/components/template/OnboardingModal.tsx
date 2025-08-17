'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  appName: string
  appDescription?: string
  steps?: OnboardingStep[]
  onComplete?: () => void
}

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: any
  completed: boolean
  action?: () => void
}

export default function OnboardingModal({ 
  isOpen, 
  onClose, 
  appName,
  appDescription = "Let's get you set up for success",
  steps = [],
  onComplete
}: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  // Default steps if none provided
  const defaultSteps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to ' + appName,
      description: 'Get started with your AI-powered assistant',
      icon: Sparkles,
      completed: false
    },
    {
      id: 'setup',
      title: 'Initial Setup',
      description: 'Configure your preferences and settings',
      icon: CheckCircle,
      completed: false
    },
    {
      id: 'connect',
      title: 'Connect Data',
      description: 'Link your accounts or upload data',
      icon: CheckCircle,
      completed: false
    },
    {
      id: 'complete',
      title: 'You\'re All Set!',
      description: 'Start using ' + appName + ' features',
      icon: CheckCircle,
      completed: false
    }
  ]

  const activeSteps = steps.length > 0 ? steps : defaultSteps

  const handleStepComplete = (stepId: string) => {
    setCompletedSteps(prev => new Set(Array.from(prev).concat(stepId)))
    
    // Move to next step
    const currentIndex = activeSteps.findIndex(step => step.id === stepId)
    if (currentIndex < activeSteps.length - 1) {
      setCurrentStep(currentIndex + 1)
    } else {
      // All steps completed
      if (onComplete) {
        onComplete()
      }
      onClose()
    }
  }

  const handleSkip = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Welcome to {appName}</h2>
                <p className="text-sm text-gray-400">{appDescription}</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title="Close Onboarding"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-gray-700/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm text-white">{completedSteps.size} of {activeSteps.length} completed</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completedSteps.size / activeSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="space-y-6">
              {activeSteps.map((step, index) => {
                const Icon = step.icon
                const isCompleted = completedSteps.has(step.id)
                const isCurrent = index === currentStep
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      isCompleted 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : isCurrent 
                          ? 'bg-blue-500/10 border-blue-500/30' 
                          : 'bg-gray-700/30 border-gray-600/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500/20 border-2 border-green-500/50' 
                          : isCurrent 
                            ? 'bg-blue-500/20 border-2 border-blue-500/50' 
                            : 'bg-gray-600/50 border-2 border-gray-500/50'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <Icon className={`w-6 h-6 ${
                            isCurrent ? 'text-blue-400' : 'text-gray-400'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${
                          isCompleted ? 'text-green-400' : isCurrent ? 'text-blue-400' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                      {isCurrent && !isCompleted && (
                        <button
                          onClick={() => handleStepComplete(step.id)}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-sm text-gray-400 mb-2">
                  Need help? Our AI assistant is here to guide you through every step.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">AI-Powered Onboarding</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  Skip for Now
                </button>
                {completedSteps.size === activeSteps.length && (
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
