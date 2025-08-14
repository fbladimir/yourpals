"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, Sparkles, Target, Zap } from 'lucide-react'

interface AIGoalInputProps {
  onGoalSelected: (goal: string) => void
  onBack: () => void
}

export default function AIGoalInput({ onGoalSelected, onBack }: AIGoalInputProps) {
  const [customGoal, setCustomGoal] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([])

  const predefinedGoals = [
    { id: 'finance', label: 'Finance', icon: '💰', color: 'from-robot-green to-robot-blue' },
    { id: 'fitness', label: 'Fitness', icon: '💪', color: 'from-robot-orange to-robot-red' },
    { id: 'productivity', label: 'Productivity', icon: '⚡', color: 'from-robot-purple to-robot-pink' },
    { id: 'business', label: 'Business', icon: '🏢', color: 'from-robot-blue to-robot-cyan' }
  ]

  const generateAISuggestions = async () => {
    if (!customGoal.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI processing
    setTimeout(() => {
      const suggestions = [
        `${customGoal} optimization`,
        `Advanced ${customGoal} strategies`,
        `${customGoal} automation`,
        `Personal ${customGoal} coaching`
      ]
      setAiSuggestions(suggestions)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCustomGoalSubmit = () => {
    if (customGoal.trim()) {
      onGoalSelected(customGoal.trim())
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-0">
      {/* Streamlined Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <motion.div
          animate={{ 
            textShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 15px rgba(59, 130, 246, 0.6)",
              "0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-robot-blue font-mono text-xs tracking-widest mb-3"
        >
          AI ANALYSIS MODULE
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          What's Your Primary Goal?
        </h2>
      </motion.div>

      {/* Custom Goal Input - Mobile-Optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 sm:mb-8"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Tell us about your goal
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-robot-blue w-5 h-5" />
              <input
                type="text"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                placeholder="e.g., Learn Spanish, Start a podcast..."
                className="w-full pl-10 pr-4 py-3 sm:py-3 bg-gray-800/50 border border-robot-blue/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent transition-all duration-200 mobile-input"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateAISuggestions}
              disabled={!customGoal.trim() || isGenerating}
              className="px-4 sm:px-6 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mobile-button"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span className="font-mono text-sm">AI THINKING...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span className="font-mono text-sm">AI SUGGEST</span>
                </>
              )}
            </motion.button>
          </div>

          {/* AI Suggestions - Streamlined */}
          {aiSuggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-xl p-4 border border-robot-blue/20"
            >
              <h4 className="text-robot-blue font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="font-mono text-sm">AI SUGGESTIONS</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aiSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onGoalSelected(suggestion)}
                    className="p-3 bg-gray-800/50 rounded-lg text-left hover:bg-gray-700/50 transition-colors duration-200 border border-gray-700 hover:border-robot-blue/50 group"
                  >
                    <div className="text-white font-medium group-hover:text-robot-blue transition-colors">
                      {suggestion}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Custom Goal Submit - Mobile-Optimized */}
          {customGoal.trim() && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCustomGoalSubmit}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto mobile-button"
              >
                <Target className="w-4 h-4" />
                <span className="text-sm sm:text-base">Use "{customGoal}" as my goal</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Divider - Mobile-Optimized */}
      <div className="relative mb-6 sm:mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-900 text-gray-400">or choose from our options</span>
        </div>
      </div>

      {/* Predefined Goals - Mobile-Optimized */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid mobile-goal-grid mb-6 sm:mb-8"
      >
        {predefinedGoals.map((goal, index) => (
          <motion.button
            key={goal.id}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onGoalSelected(goal.id)}
            className={`p-4 sm:p-6 bg-gradient-to-br ${goal.color} rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20 mobile-goal-card flex flex-col items-center justify-center`}
          >
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{goal.icon}</div>
            <div className="font-semibold text-sm sm:text-lg">{goal.label}</div>
          </motion.button>
        ))}
      </motion.div>

      {/* Back Button - Mobile-Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto px-4 py-2 rounded-lg hover:bg-gray-800/50"
        >
          ← Go Back
        </button>
      </motion.div>
    </div>
  )
}
