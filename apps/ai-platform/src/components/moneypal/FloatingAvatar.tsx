import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface FloatingAvatarProps {
  onOpenChat: () => void
  isChatOpen: boolean
}

const chatPrompts = [
  "Click me if you have questions! 💬",
  "Need financial advice? I'm here! 🤖",
  "Ask me about your money! 💰",
  "Want to chat about finances? 💭",
  "I can help with your budget! 📊",
  "Questions about accounts? 🏦",
  "Need savings tips? Let's talk! 🎯",
  "I'm your AI financial pal! 🤝"
]

export default function FloatingAvatar({ onOpenChat, isChatOpen }: FloatingAvatarProps) {
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
          className="absolute bottom-0 right-0 h-20 bg-gradient-to-r from-robot-green/90 to-robot-blue/90 backdrop-blur-sm rounded-full overflow-hidden shadow-2xl border border-white/20"
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
            className="flex items-center h-full px-8 pr-12 gap-4"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm font-medium text-white leading-relaxed">
              {chatPrompts[currentPrompt]}
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Robot Avatar */}
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenChat}
          className="relative cursor-pointer group"
        >
          {/* Sparkles effect */}
          <AnimatePresence>
            {showSparkles && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-robot-orange animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Avatar */}
          <motion.div
            animate={{ 
              y: showPrompt ? [0, -15, -8, 0] : [0, -8, 0],
              rotate: [0, 3, -3, 0],
              scale: showPrompt ? [1, 1.1, 1.02, 1] : [1, 1.02, 1]
            }}
            transition={{ 
              duration: showPrompt ? 0.8 : 2.5,
              repeat: showPrompt ? 0 : Infinity,
              ease: "easeInOut",
              times: showPrompt ? [0, 0.3, 0.7, 1] : [0, 0.5, 1]
            }}
            className="relative w-20 h-20 bg-gradient-to-br from-robot-green to-robot-blue rounded-full p-2 shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI"
              width={64}
              height={64}
              className="rounded-full"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-robot-green/30 to-robot-blue/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Enhanced Pulse ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-20 h-20 border border-robot-green/30 rounded-full"
          ></motion.div>
          
          {/* Second pulse ring for layered effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.2, 0, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute inset-0 w-20 h-20 border border-robot-blue/30 rounded-full"
          ></motion.div>

          {/* Enhanced Click indicator */}
          <motion.div
            animate={{ 
              opacity: [0.8, 1, 0.8],
              scale: [0.9, 1.1, 0.9],
              y: [0, -2, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-robot-orange to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20"
          >
            <span className="text-white text-xs font-bold">💬</span>
          </motion.div>
        </motion.div>

        {/* Hover hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-32 right-0 text-center"
        >
          <p className="text-xs text-gray-400 bg-gray-800/80 px-2 py-1 rounded">
            Click to chat with MoneyPal! 🤖
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
