'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, MessageCircle, X, Send, Sparkles } from 'lucide-react'

interface CookingPalAvatarProps {
  onOpenChat: () => void
  isChatOpen: boolean
}

export default function CookingPalAvatar({ onOpenChat, isChatOpen }: CookingPalAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showAutoBubble, setShowAutoBubble] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const avatarRef = useRef<HTMLButtonElement>(null)

  // Cooking-specific chat prompts
  const chatPrompts = [
    "Click me for cooking advice! 👨‍🍳",
    "Need a recipe? I'm here to help! 🍳",
    "Let's plan your meals together! 🥘",
    "Hungry? Let me suggest something delicious! 😋",
    "What's in your fridge? I'll find a recipe! 🥬"
  ]

  useEffect(() => {
    // Rotate through prompts every 5 seconds
    const interval = setInterval(() => {
      setCurrentPrompt(prev => (prev + 1) % chatPrompts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Show auto-bubble occasionally
    const showBubble = () => {
      if (!isChatOpen && !isHovered && Math.random() < 0.3) {
        setShowAutoBubble(true)
        setTimeout(() => setShowAutoBubble(false), 3000)
      }
    }

    const interval = setInterval(showBubble, 15000)
    return () => clearInterval(interval)
  }, [isChatOpen, isHovered])

  const handleAvatarClick = () => {
    if (!isChatOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        onOpenChat()
      }, 300)
    }
  }

  return (
    <>
      {/* Main Avatar Button */}
      <motion.button
        ref={avatarRef}
        onClick={handleAvatarClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.div
          className="relative w-20 h-20 bg-gradient-to-r from-orange-500/90 to-green-600/90 rounded-full shadow-2xl border-2 border-white/20 overflow-hidden cursor-pointer"
          animate={isAnimating ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Avatar Image */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/cookingpal/robotavatar.png" 
              alt="CookingPal Robot Avatar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Chef Hat Icon Overlay */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-green-500 rounded-full flex items-center justify-center border-2 border-white/30">
            <ChefHat className="w-4 h-4 text-white" />
          </div>

          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-orange-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Hover Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white text-sm font-medium rounded-lg shadow-lg border border-white/20 whitespace-nowrap"
            >
              {chatPrompts[currentPrompt]}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Auto Bubble */}
        <AnimatePresence>
          {showAutoBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white text-sm font-medium rounded-lg shadow-lg border border-white/20 whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>What's for dinner tonight? 🍽️</span>
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
