'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, ShoppingCart, TrendingUp, Package, DollarSign, Brain } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface SellerPalChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SellerPalChatModal({ isOpen, onClose }: SellerPalChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // SellerPal-specific knowledge base
  const sellerPalKnowledge = {
    'inventory': 'I can help you manage inventory by tracking stock levels, predicting demand, and suggesting reorder points. Connect your Amazon or Shopify account to get started!',
    'pricing': 'I analyze competitor pricing and market trends to help you optimize your product prices for maximum profitability.',
    'sales': 'I track your sales performance, identify trends, and suggest strategies to increase revenue and customer acquisition.',
    'amazon': 'I can help you optimize your Amazon listings, track performance metrics, and manage your FBA inventory efficiently.',
    'shopify': 'I provide insights into your Shopify store performance, customer behavior, and conversion optimization strategies.',
    'analytics': 'I offer comprehensive business analytics including sales trends, customer insights, and performance metrics to help you make data-driven decisions.',
    'growth': 'I identify growth opportunities through market analysis, customer segmentation, and strategic recommendations for expanding your business.',
    'automation': 'I can automate routine tasks like inventory alerts, price monitoring, and report generation to save you time and improve efficiency.'
  }

  useEffect(() => {
    if (isOpen) {
      // Welcome message
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hi! I'm SellerPal, your AI eCommerce co-pilot! 🛒✨ I can help you with inventory management, sales analytics, pricing optimization, and business growth strategies. What would you like to know about?",
        isUser: false,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue.toLowerCase())
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateAIResponse = (userInput: string): string => {
    // Check for keywords in user input
    for (const [keyword, response] of Object.entries(sellerPalKnowledge)) {
      if (userInput.includes(keyword)) {
        return response
      }
    }

    // Default responses for common eCommerce questions
    if (userInput.includes('hello') || userInput.includes('hi')) {
      return "Hello! I'm here to help you grow your eCommerce business. How can I assist you today?"
    }
    
    if (userInput.includes('help')) {
      return "I can help you with inventory management, sales analytics, pricing strategies, Amazon/Shopify optimization, and business growth. What specific area would you like to focus on?"
    }
    
    if (userInput.includes('profit') || userInput.includes('revenue')) {
      return "I can analyze your sales data to identify profit opportunities, optimize pricing, and suggest strategies to increase revenue. Connect your platforms to get personalized insights!"
    }
    
    if (userInput.includes('customer') || userInput.includes('buyer')) {
      return "I provide customer behavior insights, segmentation analysis, and retention strategies to help you better understand and serve your customers."
    }

    return "I'm here to help you succeed in eCommerce! I can assist with inventory, pricing, sales, analytics, and growth strategies. What would you like to learn more about?"
  }

  const quickQuestions = [
    "How can I optimize my inventory?",
    "What pricing strategy should I use?",
    "How do I increase my sales?",
    "Can you help with Amazon optimization?"
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/sellerpal/robotavatar.png" 
                  alt="SellerPal Robot Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">SellerPal AI Assistant</h2>
                <p className="text-sm text-gray-300">Your eCommerce AI co-pilot</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
              title="Close Chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Welcome Section */}
            {messages.length === 1 && (
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome to SellerPal! 🛒</h3>
                <p className="text-gray-300 mb-6">I'm your AI co-pilot for eCommerce success. Ask me anything about inventory, pricing, sales, or business growth!</p>
                
                {/* Quick Questions */}
                <div className="space-y-3 mb-6">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(question)}
                      className="w-full p-4 text-left bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white font-medium">{question}</span>
                        <div className="ml-auto">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700/50 text-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-blue-200' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-700/50 text-gray-100 p-4 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-400">SellerPal is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about inventory, pricing, sales, or business growth..."
                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
