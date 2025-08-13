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
    { id: 'finance', label: 'Personal Finance', icon: '💰', color: 'from-robot-green to-robot-blue', description: 'Track expenses, budgets, and financial goals' },
    { id: 'fitness', label: 'Fitness & Health', icon: '💪', color: 'from-robot-orange to-robot-red', description: 'Monitor workouts, nutrition, and wellness' },
    { id: 'productivity', label: 'Productivity', icon: '⚡', color: 'from-robot-purple to-robot-pink', description: 'Boost efficiency and time management' },
    { id: 'business', label: 'Business Management', icon: '🏢', color: 'from-robot-blue to-robot-cyan', description: 'Optimize operations and growth' }
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
    <div className="max-w-4xl mx-auto">
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
          AI ANALYSIS MODULE
        </motion.div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          What's Your Primary Goal?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Choose from our curated options or tell us what you're working on. Our AI will help personalize your experience.
        </p>
      </motion.div>

      {/* Custom Goal Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center gap-3">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/yourpalsRobot.png" 
                alt="AI Analysis" 
                className="w-8 h-8"
              />
            </motion.div>
            <span className="text-robot-blue font-mono">AI GOAL ANALYSIS</span>
          </h3>
          
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-robot-blue w-5 h-5" />
              <input
                type="text"
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                placeholder="e.g., Learn Spanish, Start a podcast, Build a website..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-robot-blue/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-blue focus:border-transparent transition-all duration-200"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateAISuggestions}
              disabled={!customGoal.trim() || isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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

          {/* AI Suggestions */}
          {aiSuggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-xl p-4 border border-robot-blue/20"
            >
              <h4 className="text-robot-blue font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="font-mono text-sm">AI ANALYSIS COMPLETE</span>
              </h4>
              <p className="text-gray-300 text-sm mb-3 font-mono">
                Generated suggestions for: <span className="text-robot-blue">"{customGoal}"</span>
              </p>
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
                    <div className="text-gray-400 text-sm font-mono">CLICK TO SELECT</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Custom Goal Submit */}
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
                className="px-8 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <Target className="w-4 h-4" />
                Use "{customGoal}" as my goal
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-900 text-gray-400">or choose from our curated options</span>
        </div>
      </div>

      {/* Predefined Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        {predefinedGoals.map((goal, index) => (
          <motion.button
            key={goal.id}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onGoalSelected(goal.id)}
            className={`p-6 bg-gradient-to-br ${goal.color} rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20`}
          >
            <div className="text-4xl mb-3">{goal.icon}</div>
            <div className="font-semibold text-lg mb-2">{goal.label}</div>
            <div className="text-sm opacity-90">{goal.description}</div>
          </motion.button>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto"
        >
          ← Go Back
        </button>
      </motion.div>
    </div>
  )
}
