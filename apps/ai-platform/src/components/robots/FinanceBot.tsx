"use client"

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Shield, ArrowRight } from 'lucide-react'

interface FinanceBotProps {
  message: string
  onAction?: () => void
  actionText?: string
  showStats?: boolean
}

export default function FinanceBot({ 
  message, 
  onAction, 
  actionText = "Get Started", 
  showStats = false 
}: FinanceBotProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-4 p-6 bg-gradient-to-br from-robot-green/10 to-robot-blue/10 rounded-2xl border border-robot-green/20 backdrop-blur-sm"
    >
      {/* Robot Avatar */}
      <div className="relative">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center shadow-lg"
        >
          <DollarSign className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Professional indicators */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 text-robot-green"
        >
          <Shield className="w-4 h-4" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute -bottom-1 -left-1 text-robot-blue"
        >
          <TrendingUp className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Message and Action */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">FinanceBot</span>
          <motion.div
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-green"
          >
            👔
          </motion.div>
        </div>
        
        <p className="text-gray-200 leading-relaxed text-base">
          {message}
        </p>

        {showStats && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-robot-green/20 rounded-lg p-3 text-center">
              <div className="text-robot-green font-semibold text-sm">Secure</div>
              <div className="text-gray-300 text-xs">Bank-level encryption</div>
            </div>
            <div className="bg-robot-blue/20 rounded-lg p-3 text-center">
              <div className="text-robot-blue font-semibold text-sm">Smart</div>
              <div className="text-gray-300 text-xs">AI-powered insights</div>
            </div>
          </div>
        )}

        {onAction && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAction}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200"
          >
            {actionText}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
