'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  StopCircle, 
  Zap, 
  AlertTriangle, 
  CheckCircle,
  DollarSign,
  CreditCard,
  Target,
  TrendingUp
} from 'lucide-react'

interface TestModeToggleProps {
  isTestMode: boolean
  onEnterTestMode: () => void
  onExitTestMode: () => void
}

export default function TestModeToggle({ 
  isTestMode, 
  onEnterTestMode, 
  onExitTestMode 
}: TestModeToggleProps) {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleEnterTestMode = () => {
    setShowConfirmation(true)
  }

  const confirmEnterTestMode = () => {
    onEnterTestMode()
    setShowConfirmation(false)
  }

  const handleExitTestMode = () => {
    if (confirm('Are you sure you want to exit test mode? All test data will be removed and your dashboard will be reset to empty.')) {
      onExitTestMode()
    }
  }

  if (isTestMode) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full p-1 shadow-2xl">
          <button
            onClick={handleExitTestMode}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full text-orange-600 font-semibold hover:shadow-lg transition-all duration-200 group"
          >
            <StopCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Exit Test Mode</span>
          </button>
        </div>
        
        {/* Test Mode Indicator */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
          TEST
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-1 shadow-2xl border border-emerald-400/30">
          <button
            onClick={handleEnterTestMode}
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-xl text-emerald-400 font-semibold hover:bg-gray-800 hover:text-emerald-300 transition-all duration-200 group border border-gray-700/50"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Try Test Mode</span>
          </button>
        </div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enter Test Mode?</h3>
                  <p className="text-gray-300">
                    Experience MoneyPal with sample data to see all features in action.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What you'll get:
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-200">
                      <li className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Sample bank accounts & transactions
                      </li>
                      <li className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Credit card & loan examples
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Financial goals & progress
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Charts & analytics demo
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-orange-300 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Important:
                    </h4>
                    <p className="text-sm text-orange-200">
                      This is test data only. You can exit anytime to return to your empty dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmEnterTestMode}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Enter Test Mode
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
