"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FunLoadingScreenProps {
  onComplete: () => void
}

export default function FunLoadingScreen({ onComplete }: FunLoadingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const messages = [
    "Initializing AI neural networks...",
    "Calibrating personalized algorithms...",
    "Synchronizing with your digital profile...",
    "Preparing your AI team for deployment...",
    "Establishing secure AI connections...",
    "Finalizing your personalized experience..."
  ]

  const aiPersonalities = [
    { name: 'Money Pal', icon: '💰', description: 'AI Finance Assistant', color: 'from-robot-green to-robot-blue', delay: 0 },
    { name: 'Fitness Pal', icon: '💪', description: 'AI Health & Fitness Coach', color: 'from-robot-orange to-robot-red', delay: 0.5 },
    { name: 'Productivity Pal', icon: '⚡', description: 'AI Productivity Expert', color: 'from-robot-purple to-robot-pink', delay: 1 },
    { name: 'Business Pal', icon: '🏢', description: 'AI Business Strategist', color: 'from-robot-blue to-robot-cyan', delay: 1.5 }
  ]

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 100)

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % messages.length)
    }, 1500)

    // Auto-complete after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="text-center max-w-6xl mx-auto">
        {/* AI Mode Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 sm:mb-12"
        >
          {/* AI Mode Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative inline-block">
              <img 
                src="/yourpalsRobot.png" 
                alt="AI Mode Initializing" 
                className="h-20 sm:h-24 lg:h-32 mx-auto"
              />
              {/* AI Mode Pulse Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border-2 sm:border-4 border-robot-blue rounded-full"
              />
              {/* Secondary Pulse Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 border border-2 border-robot-purple rounded-full"
              />
            </div>
          </motion.div>

          {/* AI Mode Status */}
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 0 rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.8)",
                "0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-blue font-mono text-sm sm:text-lg tracking-widest mb-3 sm:mb-4"
          >
            AI MODE: INITIALIZING
          </motion.div>

          <motion.h1
            animate={{ 
              textShadow: [
                "0 0 0 rgba(255, 255, 255, 0)",
                "0 0 40px rgba(255, 255, 255, 0.4)",
                "0 0 0 rgba(255, 255, 255, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            ENTERING AI MODE
          </motion.h1>

          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Welcome to the future. Your AI team is preparing for deployment.
          </motion.p>
        </motion.div>

        {/* AI Personalities Grid - Compact Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Your AI Team is Coming Online
          </h3>
          
          {/* Mobile-Optimized Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-2xl mx-auto">
            {aiPersonalities.map((personality, index) => (
              <motion.div
                key={personality.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: personality.delay }}
                className={`p-2 sm:p-3 bg-gradient-to-br ${personality.color} rounded-lg text-white text-center relative overflow-hidden`}
              >
                {/* Animated Background */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: personality.delay }}
                    className="text-xl sm:text-2xl mb-1"
                  >
                    {personality.icon}
                  </motion.div>
                  
                  <div className="font-semibold text-sm mb-1">{personality.name}</div>
                  <div className="text-xs opacity-90 leading-tight">{personality.description}</div>
                  
                  {/* Compact Status Indicator */}
                  <motion.div
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: personality.delay + 1 }}
                    className="mt-1 text-xs font-mono opacity-75"
                  >
                    INIT...
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Section - Compact Mobile Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-6"
        >
          <div className="max-w-xl mx-auto">
            {/* Current Message */}
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-robot-blue font-mono text-sm sm:text-base mb-3 text-center"
            >
              {messages[currentMessageIndex]}
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 mb-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-robot-blue to-robot-purple rounded-full relative"
              >
                {/* Progress Glow */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.8)",
                      "0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-robot-blue to-robot-purple rounded-full"
                />
              </motion.div>
            </div>

            <div className="text-gray-400 font-mono text-xs sm:text-sm text-center">
              {progress}% Complete
            </div>
          </div>
        </motion.div>

        {/* Final Message - Compact Mobile Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 0 rgba(34, 197, 94, 0)",
                "0 0 20px rgba(34, 197, 94, 0.6)",
                "0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-robot-green font-mono text-sm sm:text-base mb-2"
          >
            AI INTEGRATION IN PROGRESS
          </motion.div>
          
          <p className="text-gray-300 text-sm sm:text-base">
            🎉 **Almost there!** Your AI pals are almost ready to welcome you!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
