'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import OnboardingProgress from './OnboardingProgress'

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  userId: string
  onComplete: () => void
}

export default function OnboardingModal({ 
  isOpen, 
  onClose, 
  userId, 
  onComplete 
}: OnboardingModalProps) {
  const handleStepComplete = (stepId: string) => {
    console.log('Step completed:', stepId)
    // In a real app, this would trigger specific actions
    // For now, we'll just log the completion
  }

  const handleOnboardingComplete = () => {
    onComplete()
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
              <div className="w-10 h-10 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Welcome to MoneyPal</h2>
                <p className="text-sm text-gray-400">Let's get you set up for success</p>
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

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <OnboardingProgress
              userId={userId}
              onStepComplete={handleStepComplete}
              onComplete={handleOnboardingComplete}
            />
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">
                Need help? Our AI assistant is here to guide you through every step.
              </p>
              <div className="flex items-center justify-center gap-2 text-robot-green">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Onboarding</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
