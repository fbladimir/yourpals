"use client"

import { motion } from 'framer-motion'
import { Bot, Sparkles, Heart, ArrowRight } from 'lucide-react'

interface GeneralBotProps {
  message: string
  onAction?: () => void
  actionText?: string
  showSparkles?: boolean
}

export default function GeneralBot({ 
  message, 
  onAction, 
  actionText = "Continue", 
  showSparkles = true 
}: GeneralBotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-4 p-6 bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-2xl border border-robot-blue/20 backdrop-blur-sm"
    >
      {/* Robot Avatar */}
      <div className="relative">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-gradient-to-br from-robot-blue to-robot-purple rounded-full flex items-center justify-center shadow-lg"
        >
          <Bot className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Floating sparkles */}
        {showSparkles && (
          <>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 text-robot-orange"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-1 -left-1 text-robot-green"
            >
              <Sparkles className="w-3 h-3" />
            </motion.div>
          </>
        )}
      </div>

      {/* Message and Action */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">GeneralBot</span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-orange"
          >
            <Heart className="w-4 h-4" />
          </motion.div>
        </div>
        
        <p className="text-gray-200 leading-relaxed text-base">
          {message}
        </p>

        {onAction && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAction}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-lg font-medium hover:from-robot-blue/90 hover:to-robot-purple/90 transition-all duration-200"
          >
            {actionText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
