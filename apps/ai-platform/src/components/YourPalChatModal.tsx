"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { X, Send, ArrowRight, Minimize2, Maximize2, ArrowUpRight } from 'lucide-react'

interface YourPalChatModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: number
  content: string
  type: 'user' | 'ai'
  timestamp: Date
}

export default function YourPalChatModal({ isOpen, onClose }: YourPalChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState<'welcome' | 'chat'>('welcome')
  const [isMinimized, setIsMinimized] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isMinimizedDragging, setIsMinimizedDragging] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 420, height: 600 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [minimizedPosition, setMinimizedPosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const resizeRef = useRef<HTMLDivElement>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    "What does MoneyPal do?",
    "Tell me about SalesPal",
    "How do I choose the right AI pal?",
    "How does YourPals work?"
  ]

  // Set client-side flag and default position
  useEffect(() => {
    setIsClient(true)
    const savedSize = localStorage.getItem('yourpal-chat-size')
    const savedPosition = localStorage.getItem('yourpal-chat-position')
    
    if (savedSize) {
      setWindowSize(JSON.parse(savedSize))
    }
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition))
    } else {
      // Default position: to the left of YourPal avatar in bottom-right
      const defaultX = window.innerWidth - 460
      const defaultY = window.innerHeight - 640
      setPosition({ x: defaultX, y: defaultY })
    }
    
    // Set default minimized position near YourPal avatar
    const defaultMinimizedX = window.innerWidth - 280 // Position to the left of avatar
    const defaultMinimizedY = window.innerHeight - 80
    setMinimizedPosition({ x: defaultMinimizedX, y: defaultMinimizedY })
  }, [])

  // Update position when window resizes
  useEffect(() => {
    if (!isClient) return

    const handleResize = () => {
      const savedPosition = localStorage.getItem('yourpal-chat-position')
      if (!savedPosition) {
        // Only update default position if user hasn't set a custom position
        const defaultX = window.innerWidth - 460
        const defaultY = window.innerHeight - 640
        setPosition({ x: defaultX, y: defaultY })
      }
      
      // Update minimized position to stay near YourPal avatar
      const defaultMinimizedX = window.innerWidth - 280 // Position to the left of avatar
      const defaultMinimizedY = window.innerHeight - 80
      setMinimizedPosition({ x: defaultMinimizedX, y: defaultMinimizedY })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isClient])

  // Save window size and position to localStorage
  const saveToStorage = (newSize: typeof windowSize, newPosition: typeof position) => {
    localStorage.setItem('yourpal-chat-size', JSON.stringify(newSize))
    localStorage.setItem('yourpal-chat-position', JSON.stringify(newPosition))
  }

  // Handle resizing
  const handleResizeStart = (e: React.MouseEvent) => {
    if (e.target === resizeRef.current) {
      setIsResizing(true)
      e.preventDefault()
    }
  }

  const handleResize = (e: MouseEvent) => {
    if (isResizing && chatWindowRef.current) {
      const rect = chatWindowRef.current.getBoundingClientRect()
      const newWidth = Math.max(320, Math.min(800, e.clientX - rect.left))
      const newHeight = Math.max(400, Math.min(800, e.clientY - rect.top))
      
      const newSize = { width: newWidth, height: newHeight }
      setWindowSize(newSize)
      saveToStorage(newSize, position)
    }
  }

  const handleResizeEnd = () => {
    setIsResizing(false)
  }

  // Add global mouse event listeners for resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) handleResize(e)
    }

    const handleMouseUp = () => {
      handleResizeEnd()
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, position])

  // Handle dragging the chat window
  const handleDragStart = (e: React.MouseEvent) => {
    if (e.target === dragHandleRef.current || e.currentTarget === dragHandleRef.current) {
      setIsDragging(true)
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const handleDrag = (e: MouseEvent) => {
    if (isDragging && chatWindowRef.current) {
      const rect = chatWindowRef.current.getBoundingClientRect()
      const newX = e.clientX - rect.width / 2
      const newY = e.clientY - rect.height / 2
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - windowSize.width
      const maxY = window.innerHeight - windowSize.height
      
      const boundedX = Math.max(0, Math.min(newX, maxX))
      const boundedY = Math.max(0, Math.min(newY, maxY))
      
      const newPosition = { x: boundedX, y: boundedY }
      setPosition(newPosition)
      saveToStorage(windowSize, newPosition)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // Handle dragging the minimized window
  const handleMinimizedDragStart = (e: React.MouseEvent) => {
    setIsMinimizedDragging(true)
    e.preventDefault()
    e.stopPropagation()
  }

  const handleMinimizedDrag = (e: MouseEvent) => {
    if (isMinimizedDragging) {
      const newX = e.clientX - 100 // Offset for minimized window width
      const newY = e.clientY - 25  // Offset for minimized window height
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 200
      const maxY = window.innerHeight - 50
      
      const boundedX = Math.max(0, Math.min(newX, maxX))
      const boundedY = Math.max(0, Math.min(newY, maxY))
      
      setMinimizedPosition({ x: boundedX, y: boundedY })
    }
  }

  const handleMinimizedDragEnd = () => {
    setIsMinimizedDragging(false)
  }

  // Add global mouse event listeners for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDrag(e)
      if (isMinimizedDragging) handleMinimizedDrag(e)
    }

    const handleMouseUp = () => {
      handleDragEnd()
      handleMinimizedDragEnd()
    }

    if (isDragging || isMinimizedDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, isMinimizedDragging, windowSize])

  // Welcome message
  useEffect(() => {
    if (isOpen && currentStep === 'welcome') {
      setMessages([
        {
          id: 1,
          content: "Hello! I'm YourPal, your AI manager and guide. I can help you understand what each AI pal does and choose the right one for your needs. What would you like to know?",
          type: 'ai',
          timestamp: new Date()
        }
      ])
    }
  }, [isOpen, currentStep])

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current && currentStep === 'chat') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, currentStep])

  // Focus input when chat opens
  useEffect(() => {
    if (currentStep === 'chat' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentStep])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      const aiMessage: Message = {
        id: Date.now() + 1,
        content: aiResponse,
        type: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('moneypal') || input.includes('money') || input.includes('finance')) {
      return "MoneyPal is your AI financial advisor! It helps you manage personal finances, track spending, set budgets, and get AI-powered insights about your money habits. It can connect to your bank accounts (via Plaid) or work with manually entered data to provide personalized financial recommendations."
    }
    
    if (input.includes('salespal') || input.includes('sales') || input.includes('ecommerce')) {
      return "SalesPal is your AI sales and ecommerce assistant! It helps online sellers optimize their business by analyzing sales data, managing inventory, automating customer interactions, and providing insights to increase revenue. It can integrate with platforms like Amazon, Shopify, and more."
    }
    
    if (input.includes('fitnesspal') || input.includes('fitness') || input.includes('workout')) {
      return "FitnessPal is your AI workout buddy and health coach! It creates personalized workout plans, tracks your fitness progress, provides nutrition advice, and motivates you to reach your health goals. It adapts to your fitness level and preferences."
    }
    
    if (input.includes('productivitypal') || input.includes('productivity') || input.includes('work')) {
      return "ProductivityPal is your AI productivity assistant! It helps you manage tasks, optimize your workflow, track time, and get more done. It can integrate with your calendar, project management tools, and provide AI-powered insights to boost your efficiency."
    }
    
    if (input.includes('businesspal') || input.includes('business') || input.includes('entrepreneur')) {
      return "BusinessPal is your AI business consultant! It helps entrepreneurs and business owners with strategy, market analysis, financial planning, and growth optimization. It can analyze business data and provide actionable insights to scale your business."
    }
    
    if (input.includes('choose') || input.includes('which') || input.includes('help')) {
      return "Great question! Each AI pal is specialized in a specific area. Think about what you need help with most right now:\n\n• MoneyPal: Personal finances and budgeting\n• SalesPal: Online selling and ecommerce\n• FitnessPal: Health, fitness, and wellness\n• ProductivityPal: Work efficiency and task management\n• BusinessPal: Business strategy and growth\n\nWhat's your main goal or challenge?"
    }
    
    if (input.includes('how') && input.includes('work')) {
      return "YourPals works by connecting you with specialized AI assistants, each designed for a specific domain. You can:\n\n1. Chat with me (YourPal) to learn about each AI pal\n2. Launch any AI pal to get started with their specialized features\n3. Each pal learns from your data and interactions to provide personalized help\n4. Switch between pals as your needs change\n\nIt's like having a team of AI experts, each focused on helping you succeed in their area of expertise!"
    }
    
    return "I'm here to help you understand our AI pals and choose the right one for your needs! You can ask me about MoneyPal (finances), SalesPal (ecommerce), FitnessPal (health), ProductivityPal (work), or BusinessPal (business strategy). What interests you most?"
  }

  if (!isOpen) return null

  return (
    <>
      {isClient && (
        <div 
          className="fixed z-50"
          style={{
            left: position.x,
            top: position.y
          }}
        >
      {/* Minimized State */}
      {isMinimized && (
        <motion.div
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 cursor-grab active:cursor-grabbing"
          style={{
            position: 'fixed',
            left: minimizedPosition.x,
            top: minimizedPosition.y,
            zIndex: 50
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMinimized(false)}
          onMouseDown={handleMinimizedDragStart}
        >
          <div className="flex items-center gap-3 p-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden">
              <img
                src="/yourpalAvatar.png"
                alt="YourPal AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-800">YourPal AI</div>
              <div className="text-sm text-gray-500">Click to chat</div>
            </div>
            <Maximize2 className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>
      )}

      {/* Expanded Chat Window */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            ref={chatWindowRef}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{
              width: windowSize.width,
              height: windowSize.height
            }}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div 
              ref={dragHandleRef}
              className="bg-gradient-to-r from-robot-blue to-robot-purple p-4 text-white cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <img
                      src="/yourpalAvatar.png"
                      alt="YourPal AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">YourPal AI</div>
                    <div className="text-xs opacity-90">AI Manager & Guide</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Drag Handle - Visual indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-t-2xl" />
            </div>

            {/* Welcome Screen */}
            {currentStep === 'welcome' && (
              <div className="p-6 text-center flex-1 overflow-y-auto">
                <div className="mb-6">
                  <img
                    src="/yourpalAvatar.png"
                    alt="YourPal AI"
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Welcome to YourPals! 🤖✨
                  </h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    I'm YourPal, your AI manager and guide to all our specialized AI pals. I can help you understand what each AI pal does and choose the right one for your needs.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question)
                        setCurrentStep('chat')
                        setTimeout(() => handleSendMessage(), 100)
                      }}
                      className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-sm text-gray-700 transition-all duration-200 group hover:border-robot-blue/50 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{question}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-robot-blue transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentStep('chat')}
                  className="w-full py-3 px-6 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-base"
                >
                  Start Chatting
                </button>
              </div>
            )}

            {/* Chat Interface */}
            {currentStep === 'chat' && (
              <div className="flex flex-col h-full flex-1 min-h-0">
                {/* Messages - Responsive to window size */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                        <div className={`text-xs mt-3 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 p-4 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-sm text-gray-600">YourPal is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input - Responsive to window size */}
                <div className="p-4 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                  <div className="flex gap-3">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask YourPal anything about our AI pals..."
                      className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all duration-200"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-5 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Resize Handle */}
            <div
              ref={resizeRef}
              className="absolute bottom-0 right-0 w-6 h-6 bg-black/20 hover:bg-black/40 rounded-tl-lg flex items-center justify-center cursor-nw-resize transition-colors"
              onMouseDown={handleResizeStart}
              title="Drag to resize"
            >
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      )}
    </>
  )
}
