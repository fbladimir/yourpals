"use client"

import { motion } from 'framer-motion'
import { Activity, Target, Zap, ArrowRight } from 'lucide-react'

interface FitnessBotProps {
  message: string
  onAction?: () => void
  actionText?: string
  showMotivation?: boolean
}

export default function FitnessBot({ 
  message, 
  onAction, 
  actionText = "Let's Go!", 
  showMotivation = false 
}: FitnessBotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-4 p-6 bg-gradient-to-br from-robot-orange/10 to-robot-red/10 rounded-2xl border border-robot-orange/20 backdrop-blur-sm"
    >
      {/* Robot Avatar */}
      <div className="relative">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-gradient-to-br from-robot-orange to-robot-red rounded-full flex items-center justify-center shadow-lg"
        >
          <Activity className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Energy indicators */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 -right-2 text-robot-orange"
        >
          <Zap className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-1 -left-1 text-robot-red"
        >
          <Target className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Message and Action */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">FitnessBot</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-orange text-2xl"
          >
            💪
          </motion.div>
        </div>
        
        <p className="text-gray-200 leading-relaxed text-base">
          {message}
        </p>

        {showMotivation && (
          <div className="bg-robot-orange/20 rounded-lg p-3 border border-robot-orange/30">
            <div className="flex items-center gap-2 text-robot-orange font-semibold text-sm">
              <Zap className="w-4 h-4" />
              Daily Motivation
            </div>
            <p className="text-gray-300 text-xs mt-1">
              "Every step counts! You're building a stronger, healthier you! 🚀"
            </p>
          </div>
        )}

        {onAction && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAction}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-orange to-robot-red text-white rounded-lg font-medium hover:from-robot-orange/90 hover:to-robot-red/90 transition-all duration-200"
          >
            {actionText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
