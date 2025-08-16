"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Sparkles, MessageCircle, Brain } from 'lucide-react'

interface YourPalAvatarProps {
  onOpenChat: () => void
}

export default function YourPalAvatar({ onOpenChat }: YourPalAvatarProps) {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const prompts = [
    "I am the manager of YourPals! 🤖",
    "Welcome to YourPals, let me know if you have any questions! ✨",
    "Need help choosing the right AI pal? Just ask! 🎯",
    "I can tell you about any of our specialized AI pals! 🚀",
    "Ready to explore what each AI pal can do? 💡"
  ]

  // Rotate through prompts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [prompts.length])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Floating Chat Bubble */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-16 right-0 mb-3 px-4 py-3 bg-white text-gray-800 rounded-2xl shadow-2xl max-w-xs border border-gray-200"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
              <span className="text-xs font-semibold text-gray-600">YourPal AI</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {prompts[currentPrompt]}
            </p>
            <div className="absolute bottom-0 right-4 w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 translate-y-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YourPal Avatar */}
      <motion.div
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onOpenChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Avatar Image */}
        <motion.div
          className="relative w-14 h-14 rounded-2xl shadow-lg border-2 border-white overflow-hidden"
          animate={{
            boxShadow: [
              "0 8px 25px rgba(59, 130, 246, 0.25)",
              "0 8px 25px rgba(147, 51, 234, 0.3)",
              "0 8px 25px rgba(59, 130, 246, 0.25)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/yourpalAvatar.png"
            alt="YourPal - AI Manager"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-robot-blue/50"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Chat Icon Overlay */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center shadow-lg border-2 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <MessageCircle className="w-3 h-3 text-white" />
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="absolute -bottom-1 -left-1 w-5 h-5 bg-robot-green rounded-full flex items-center justify-center shadow-lg border-2 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Brain className="w-2.5 h-2.5 text-white" />
        </motion.div>

        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-robot-blue/30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Click Hint */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div
          className="text-xs text-gray-400 font-medium bg-gray-900/80 px-2 py-1 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click to chat
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
