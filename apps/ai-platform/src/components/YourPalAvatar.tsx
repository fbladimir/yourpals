"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Brain, Move, ArrowUpRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface YourPalAvatarProps {
  onOpenChat: () => void
}

export default function YourPalAvatar({ onOpenChat }: YourPalAvatarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(112)
  const [currentPrompt, setCurrentPrompt] = useState(0)
  const [showAutoBubble, setShowAutoBubble] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  const avatarRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef<HTMLDivElement>(null)

  const prompts = [
    "Need help choosing the right AI pal? Just ask!",
    "I can explain what each AI pal does for you!",
    "Want to know how MoneyPal can help with finances?",
    "Curious about SalesPal for your business?",
    "I'm here to guide you through all our AI pals!",
    "Let me know if you have questions about any feature!"
  ]

  // Set client-side flag and default position
  useEffect(() => {
    setIsClient(true)
    const defaultX = window.innerWidth - 140
    const defaultY = window.innerHeight - 140
    setPosition({ x: defaultX, y: defaultY })
  }, [])

  // Auto-rotate prompts and show chat bubble
  useEffect(() => {
    const promptInterval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length)
      setShowAutoBubble(true)
      
      // Hide bubble after 4 seconds
      setTimeout(() => setShowAutoBubble(false), 4000)
    }, 8000)

    return () => clearInterval(promptInterval)
  }, [prompts.length])

  // Cute random animations
  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (!isHovered && !isDragging && !isResizing) {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 2000)
      }
    }, 15000) // Every 15 seconds

    return () => clearInterval(animationInterval)
  }, [isHovered, isDragging, isResizing])

  // Load saved position and size from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem('yourpal-position')
    const savedSize = localStorage.getItem('yourpal-size')
    
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition))
    }
    if (savedSize) {
      setSize(parseInt(savedSize))
    }
  }, [])

  // Save position and size to localStorage
  const saveToStorage = (newPosition: typeof position, newSize: number) => {
    localStorage.setItem('yourpal-position', JSON.stringify(newPosition))
    localStorage.setItem('yourpal-size', newSize.toString())
  }

  // Handle dragging
  const handleDragStart = (e: React.MouseEvent) => {
    if (e.target === dragRef.current || e.currentTarget === dragRef.current) {
      setIsDragging(true)
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const handleDrag = (e: React.MouseEvent) => {
    if (isDragging && avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect()
      const newX = e.clientX - rect.width / 2
      const newY = e.clientY - rect.height / 2
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - size
      const maxY = window.innerHeight - size
      
      const boundedX = Math.max(0, Math.min(newX, maxX))
      const boundedY = Math.max(0, Math.min(newY, maxY))
      
      const newPosition = { x: boundedX, y: boundedY }
      setPosition(newPosition)
      saveToStorage(newPosition, size)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // Handle resizing
  const handleResizeStart = (e: React.MouseEvent) => {
    if (e.target === resizeRef.current || e.currentTarget === resizeRef.current) {
      setIsResizing(true)
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const handleResize = (e: React.MouseEvent) => {
    if (isResizing && avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect()
      const distance = Math.sqrt(
        Math.pow(e.clientX - rect.left, 2) + Math.pow(e.clientY - rect.top, 2)
      )
      
      // Calculate new size (min 80px, max 200px)
      const newSize = Math.max(80, Math.min(200, distance * 2))
      setSize(newSize)
      saveToStorage(position, newSize)
    }
  }

  const handleResizeEnd = () => {
    setIsResizing(false)
  }

  // Add global mouse event listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDrag(e as any)
      if (isResizing) handleResize(e as any)
    }

    const handleMouseUp = () => {
      handleDragEnd()
      handleResizeEnd()
    }

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isResizing, position, size])

  return (
    <>
      {isClient && (
        <motion.div
          ref={avatarRef}
          className="fixed z-50 cursor-pointer select-none"
          style={{
            left: position.x,
            top: position.y,
            width: size,
            height: size
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onOpenChat}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            rotate: isAnimating ? [0, -5, 5, -5, 0] : 0,
            y: isAnimating ? [0, -3, 0] : 0
          }}
          transition={{ 
            duration: 0.3,
            rotate: { duration: 2, ease: "easeInOut" },
            y: { duration: 2, ease: "easeInOut" }
          }}
        >
          {/* Auto-rotating Chat Bubble - Positioned closer to avatar */}
          <AnimatePresence>
            {showAutoBubble && (
              <motion.div
                className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white text-gray-800 rounded-2xl shadow-2xl max-w-xs border border-gray-200"
                initial={{ opacity: 0, y: 5, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-600">YourPal AI</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  {prompts[currentPrompt]}
                </p>
                <div className="absolute bottom-0 right-3 w-2 h-2 bg-white border-r border-b border-gray-200 transform rotate-45 translate-y-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hover Chat Bubble - Positioned closer to avatar */}
          <AnimatePresence>
            {isHovered && !showAutoBubble && (
              <motion.div
                className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white text-gray-800 rounded-2xl shadow-2xl max-w-xs border border-gray-200"
                initial={{ opacity: 0, y: 5, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-600">YourPal AI</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  Click to chat with me!
                </p>
                <div className="absolute bottom-0 right-3 w-2 h-2 bg-white border-r border-b border-gray-200 transform rotate-45 translate-y-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* YourPal Avatar - Clean, container-free design */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden"
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

            {/* Hover Effects - Subtle glow */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-robot-blue/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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

            {/* Pulse Ring - Subtle animation */}
            <motion.div
              className="absolute inset-0 rounded-full border border-robot-blue/30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />

            {/* Drag Handle - Larger, more accessible */}
            <div
              ref={dragRef}
              className="absolute top-0 left-0 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center cursor-move transition-colors"
              onMouseDown={handleDragStart}
              title="Drag to move"
            >
              <Move className="w-4 h-4 text-white" />
            </div>

            {/* Resize Handle - Larger, more accessible */}
            <div
              ref={resizeRef}
              className="absolute bottom-0 right-0 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center cursor-nw-resize transition-colors"
              onMouseDown={handleResizeStart}
              title="Drag to resize"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
