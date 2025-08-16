"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle, ArrowRight, Minimize2, Maximize2 } from 'lucide-react'

interface YourPalChatModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

export default function YourPalChatModal({ isOpen, onClose }: YourPalChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentStep, setCurrentStep] = useState<'welcome' | 'chat'>('welcome')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // AI Pal Knowledge Base
  const aiPalKnowledge = {
    moneypal: {
      name: "MoneyPal",
      description: "Your AI financial co-pilot",
      capabilities: [
        "Smart budgeting and expense tracking",
        "AI-powered financial insights",
        "Goal setting and progress tracking",
        "Account linking and real-time sync",
        "Personalized financial coaching"
      ],
      bestFor: "Personal finance management, budgeting, financial goals",
      examples: "Track spending, set savings goals, get investment advice",
      status: "Active and ready to use"
    },
    salespal: {
      name: "SalesPal",
      description: "Your AI sales and ecommerce assistant",
      capabilities: [
        "Sales performance analytics",
        "Inventory optimization",
        "Market insights and competitive analysis",
        "Customer behavior analysis",
        "Automated reporting and alerts"
      ],
      bestFor: "Ecommerce sellers, online businesses, sales teams",
      examples: "Analyze sales trends, optimize pricing, track performance",
      status: "Coming soon - in development"
    },
    fitnesspal: {
      name: "FitnessPal",
      description: "Your AI workout buddy and health coach",
      capabilities: [
        "Workout planning and tracking",
        "Nutrition guidance and meal planning",
        "Progress analytics and goal setting",
        "AI-powered fitness coaching",
        "Health monitoring and insights"
      ],
      bestFor: "Fitness enthusiasts, health-conscious individuals, athletes",
      examples: "Create workout plans, track nutrition, monitor progress",
      status: "Coming soon - in development"
    },
    productivitypal: {
      name: "ProductivityPal",
      description: "Your AI productivity and time management expert",
      capabilities: [
        "Task automation and management",
        "Time tracking and analysis",
        "Smart scheduling and prioritization",
        "Focus optimization and distraction blocking",
        "Performance analytics and insights"
      ],
      bestFor: "Professionals, students, anyone looking to boost productivity",
      examples: "Automate repetitive tasks, optimize your schedule, track focus time",
      status: "Coming soon - in development"
    },
    businesspal: {
      name: "BusinessPal",
      description: "Your AI business strategist and growth advisor",
      capabilities: [
        "Market analysis and insights",
        "Performance metrics and KPIs",
        "Strategy development and planning",
        "Growth optimization recommendations",
        "Competitive intelligence and benchmarking"
      ],
      bestFor: "Business owners, entrepreneurs, startup founders",
      examples: "Analyze market trends, optimize business performance, plan growth strategies",
      status: "Coming soon - in development"
    }
  }

  // Welcome message when modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'ai',
        content: "Hello! I'm YourPal, the manager of all your AI pals! 🤖✨\n\nI can help you understand what each specialized AI pal does and guide you to the right one for your needs.\n\nWhat would you like to know about?",
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom
  useEffect(() => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isMinimized])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue.trim())
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for specific AI pal questions
    for (const [key, pal] of Object.entries(aiPalKnowledge)) {
      if (input.includes(key) || input.includes(pal.name.toLowerCase())) {
        return `**${pal.name}** - ${pal.description}\n\n**What it can do:**\n${pal.capabilities.map(cap => `• ${cap}`).join('\n')}\n\n**Best for:** ${pal.bestFor}\n\n**Examples:** ${pal.examples}\n\n**Status:** ${pal.status}\n\nWould you like me to tell you more about ${pal.name} or help you get started?`
      }
    }

    // General platform questions
    if (input.includes('what') && input.includes('yourpals')) {
      return "**YourPals** is a platform of specialized AI assistants, each designed to excel in a specific domain:\n\n• **MoneyPal** 💰 - Personal finance management\n• **SalesPal** 🚀 - Ecommerce and sales optimization\n• **FitnessPal** 💪 - Health and fitness coaching\n• **ProductivityPal** ⚡ - Time management and efficiency\n• **BusinessPal** 🏢 - Business strategy and growth\n\nEach AI pal is an expert in their field and can help you achieve specific goals. What area are you most interested in?"
    }

    if (input.includes('how') && input.includes('work')) {
      return "**How YourPals works:**\n\n1. **Choose your AI pal** based on your needs\n2. **Connect your data** (accounts, goals, preferences)\n3. **Chat naturally** with your AI pal\n4. **Get personalized insights** and recommendations\n5. **Track progress** and achieve your goals\n\nEach AI pal learns from your data and interactions to provide increasingly personalized assistance. Which AI pal sounds most useful to you right now?"
    }

    if (input.includes('choose') || input.includes('which') || input.includes('help')) {
      return "I'd be happy to help you choose the right AI pal! Here are some questions to consider:\n\n• **What's your main goal right now?** (saving money, growing business, getting fit, etc.)\n• **What type of data do you have?** (bank accounts, business metrics, fitness trackers, etc.)\n• **How much time do you want to spend?** (quick insights vs. deep analysis)\n\nTell me more about what you're trying to achieve, and I'll recommend the perfect AI pal for you! 🎯"
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello there! 👋 I'm YourPal, your AI manager and guide to the YourPals platform!\n\nI can help you:\n• Learn about each specialized AI pal\n• Choose the right AI pal for your needs\n• Understand how the platform works\n• Get started with any AI pal\n\nWhat would you like to explore today?"
    }

    // Default response
    return "That's a great question! I'm here to help you understand the YourPals platform and choose the right AI pal for your needs.\n\nYou can ask me about:\n• **Specific AI pals** (MoneyPal, SalesPal, FitnessPal, etc.)\n• **How the platform works**\n• **Which AI pal to choose**\n• **Getting started** with any AI pal\n\nWhat would you like to know more about?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What does MoneyPal do?",
    "Tell me about SalesPal",
    "How do I choose the right AI pal?",
    "How does YourPals work?"
  ]

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Minimized State */}
      {isMinimized && (
        <motion.div
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMinimized(false)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden">
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
            className="w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-robot-blue to-robot-purple p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden">
                    <img
                      src="/yourpalAvatar.png"
                      alt="YourPal AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">YourPal AI</div>
                    <div className="text-xs opacity-90">AI Manager & Guide</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Welcome Screen */}
            {currentStep === 'welcome' && (
              <div className="p-4 text-center">
                <div className="mb-4">
                  <img
                    src="/yourpalAvatar.png"
                    alt="YourPal AI"
                    className="w-16 h-16 mx-auto mb-3 rounded-2xl"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Welcome to YourPals! 🤖✨
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    I'm YourPal, your AI manager and guide to all our specialized AI pals.
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question)
                        setCurrentStep('chat')
                        setTimeout(() => handleSendMessage(), 100)
                      }}
                      className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm text-gray-700 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{question}</span>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-robot-blue transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentStep('chat')}
                  className="w-full py-2 px-4 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Start Chatting
                </button>
              </div>
            )}

            {/* Chat Interface */}
            {currentStep === 'chat' && (
              <div className="flex flex-col h-full">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className={`text-xs mt-2 ${
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
                      <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                        <div className="flex items-center gap-2">
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

                {/* Input */}
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask YourPal anything..."
                      className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-robot-blue focus:ring-1 focus:ring-robot-blue/20"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
