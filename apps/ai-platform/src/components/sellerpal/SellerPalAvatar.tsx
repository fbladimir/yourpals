'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Sparkles, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface SellerPalAvatarProps {
  onOpenChat: () => void
  isChatOpen: boolean
}

const chatPrompts = [
  "Click me for eCommerce advice! 🛒",
  "Need help with your business? I'm here! 🤖",
  "Ask me about sales strategies! 📈",
  "Want to optimize inventory? 📦",
  "I can help with pricing! 💰",
  "Questions about Amazon/Shopify? 🏪",
  "Need growth tips? Let's talk! 🚀",
  "I'm your AI business pal! 🤝"
]

export default function SellerPalAvatar({ onOpenChat, isChatOpen }: SellerPalAvatarProps) {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  // Rotate through chat prompts and trigger animations
  useEffect(() => {
    if (!isChatOpen) {
      const interval = setInterval(() => {
        // Trigger jump animation and prompt expansion
        setShowPrompt(true)
        setCurrentPrompt((prev) => (prev + 1) % chatPrompts.length)
        
        // Hide prompt after showing for 3 seconds
        setTimeout(() => {
          setShowPrompt(false)
        }, 3000)
      }, 8000) // Show every 8 seconds
      return () => clearInterval(interval)
    }
  }, [isChatOpen])

  // Show sparkles on hover
  useEffect(() => {
    if (isHovered) {
      setShowSparkles(true)
      const timer = setTimeout(() => setShowSparkles(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isHovered])

  if (isChatOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -3, 0]
        }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut",
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Expanding Prompt Container */}
        <motion.div
          initial={{ width: 80, opacity: 0, scale: 0.9 }}
          animate={{ 
            width: showPrompt ? 360 : 80,
            opacity: showPrompt ? 1 : 0,
            scale: showPrompt ? 1 : 0.9
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 h-20 bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm rounded-full overflow-hidden shadow-2xl border border-white/20"
        >
          {/* Prompt Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: showPrompt ? 1 : 0,
              x: showPrompt ? 0 : 20
            }}
            transition={{ 
              duration: 0.4,
              delay: 0.2
            }}
            className="flex items-center justify-center h-full px-6 text-white font-medium text-sm text-center"
          >
            {chatPrompts[currentPrompt]}
          </motion.div>
        </motion.div>

        {/* Main Avatar Button */}
        <motion.button
          onClick={onOpenChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl border-2 border-white/20 overflow-hidden cursor-pointer"
        >
          {/* Avatar Image */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/sellerpal/robotavatar.png" 
              alt="SellerPal Robot Avatar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Hover Effects */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />
            )}
          </AnimatePresence>

          {/* Sparkles Animation */}
          <AnimatePresence>
            {showSparkles && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -10, y: -10 }}
                  animate={{ opacity: 1, scale: 1, x: -15, y: -15 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-0 left-0"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 10, y: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 15, y: -15 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="absolute top-0 right-0"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -10, y: 10 }}
                  animate={{ opacity: 1, scale: 1, x: -15, y: 15 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="absolute bottom-0 left-0"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: 10, y: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 15, y: 15 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="absolute bottom-0 right-0"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Pulse Ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
          />
        </motion.button>

        {/* Chat Icon Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500"
        >
          <MessageCircle className="w-4 h-4 text-blue-600" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
