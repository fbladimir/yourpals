"use client"

import { motion } from 'framer-motion'
import { Building2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'

interface BusinessBotProps {
  message: string
  onAction?: () => void
  actionText?: string
  showMetrics?: boolean
}

export default function BusinessBot({ 
  message, 
  onAction, 
  actionText = "Analyze", 
  showMetrics = false 
}: BusinessBotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-4 p-6 bg-gradient-to-br from-robot-blue/10 to-robot-cyan/10 rounded-2xl border border-robot-blue/20 backdrop-blur-sm"
    >
      {/* Robot Avatar */}
      <div className="relative">
        <motion.div
          animate={{ 
            y: [0, -3, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-gradient-to-br from-robot-blue to-robot-cyan rounded-full flex items-center justify-center shadow-lg"
        >
          <Building2 className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Business indicators */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 text-robot-blue"
        >
          <TrendingUp className="w-4 h-4" />
        </motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute -bottom-1 -left-1 text-robot-cyan"
        >
          <BarChart3 className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Message and Action */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">BusinessBot</span>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-blue text-2xl"
          >
            🏢
          </motion.div>
        </div>
        
        <p className="text-gray-200 leading-relaxed text-base">
          {message}
        </p>

        {showMetrics && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-robot-blue/20 rounded-lg p-3 text-center border border-robot-blue/30">
              <div className="text-robot-blue font-semibold text-sm">Growth</div>
              <div className="text-gray-300 text-xs">Data-driven insights</div>
            </div>
            <div className="bg-robot-cyan/20 rounded-lg p-3 text-center border border-robot-cyan/30">
              <div className="text-robot-cyan font-semibold text-sm">Strategy</div>
              <div className="text-gray-300 text-xs">AI-powered analysis</div>
            </div>
          </div>
        )}

        {onAction && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAction}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-blue to-robot-cyan text-white rounded-lg font-medium hover:from-robot-blue/90 hover:to-robot-cyan/90 transition-all duration-200"
          >
            {actionText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
