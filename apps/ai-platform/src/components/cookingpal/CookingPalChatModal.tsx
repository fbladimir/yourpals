'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, X, Send, ChefHat as ChefHatIcon, Utensils, Clock, DollarSign, Heart, Sparkles } from 'lucide-react'

interface CookingPalChatModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function CookingPalChatModal({ isOpen, onClose }: CookingPalChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👨‍🍳 Hi! I'm CookingPal, your AI kitchen companion! I can help you find recipes, plan meals, create grocery lists, and even suggest budget-friendly options. What would you like to cook today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Cooking-specific knowledge base
  const cookingKnowledge: { [key: string]: string } = {
    'recipe': 'I can help you find recipes based on ingredients you have! Just tell me what\'s in your fridge or pantry, and I\'ll suggest delicious meals. You can also specify dietary restrictions, cooking time, or budget constraints.',
    'ingredients': 'I can work with any ingredients you have! From basic staples like rice and beans to fresh produce and proteins. Just list what you have, and I\'ll find creative ways to use them.',
    'budget': 'I can suggest budget-friendly recipes and meal plans! If you connect with MoneyPal, I can even see your weekly food budget and suggest meals that fit perfectly within your spending limits.',
    'meal planning': 'I can create weekly meal plans for you! Just tell me your preferences, dietary restrictions, and how many people you\'re cooking for. I\'ll generate a complete plan with recipes and grocery lists.',
    'grocery list': 'I can automatically generate grocery lists from your meal plans! Just select the recipes you want to make, and I\'ll create a shopping list organized by category with estimated costs.',
    'quick meals': 'I have plenty of quick meal ideas! From 15-minute stir-fries to 30-minute pasta dishes. Just tell me how much time you have, and I\'ll suggest something delicious and fast.',
    'vegetarian': 'I have tons of vegetarian recipes! From hearty bean dishes to creative vegetable preparations. I can also suggest meat substitutes and protein alternatives for balanced nutrition.',
    'healthy': 'I focus on nutritious, balanced meals! I can suggest recipes that are high in protein, fiber, and essential nutrients while being delicious and satisfying.',
    'waste reduction': 'I can help you use ingredients before they go bad! Just tell me what\'s expiring soon, and I\'ll suggest recipes that use those ingredients. This saves money and reduces food waste.',
    'cooking tips': 'I can share cooking techniques, ingredient substitutions, and kitchen hacks! From how to properly cook rice to creative ways to use leftovers, I\'m here to help you become a better cook.',
    'dietary restrictions': 'I can adapt recipes for various dietary needs! Whether you\'re gluten-free, dairy-free, low-sodium, or following other restrictions, I can suggest suitable recipes and substitutions.',
    'family meals': 'I can scale recipes for different family sizes! Just tell me how many people you\'re cooking for, and I\'ll adjust ingredient amounts and cooking times accordingly.',
    'meal prep': 'I can help you plan batch cooking sessions! Prepare multiple meals at once to save time during busy weeks. I\'ll suggest recipes that freeze well and can be made ahead.',
    'seasonal cooking': 'I can suggest recipes using seasonal ingredients! This often means better flavor, lower costs, and supporting local farmers. Tell me what season it is, and I\'ll focus on fresh, seasonal produce.',
    'international cuisine': 'I can suggest recipes from around the world! From Italian pasta to Thai curries, Mexican tacos to Indian dal. Explore new flavors and cooking techniques with my help.'
  }

  const quickQuestions = [
    "What can I make with chicken and rice?",
    "I need a quick dinner in 20 minutes",
    "Suggest a vegetarian meal under $10",
    "Help me plan meals for the week",
    "What's a good recipe for beginners?"
  ]

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for specific cooking topics
    for (const [topic, response] of Object.entries(cookingKnowledge)) {
      if (lowerMessage.includes(topic)) {
        return response
      }
    }

    // Default responses for common cooking questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "👨‍🍳 Hello! Ready to cook something delicious? I can help you find recipes, plan meals, or answer any cooking questions you have!"
    }
    
    if (lowerMessage.includes('recipe') || lowerMessage.includes('cook') || lowerMessage.includes('make')) {
      return "🍳 I'd love to help you find a recipe! What ingredients do you have on hand? I can work with anything from basic staples to fresh produce and proteins."
    }
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('cheap') || lowerMessage.includes('money')) {
      return "💰 I can definitely help with budget-friendly cooking! I have recipes that cost under $10 per meal, and if you connect with MoneyPal, I can see your actual food budget to make perfect suggestions."
    }
    
    if (lowerMessage.includes('time') || lowerMessage.includes('quick') || lowerMessage.includes('fast')) {
      return "⏰ I have plenty of quick meal ideas! From 15-minute stir-fries to 30-minute pasta dishes. How much time do you have? I'll suggest something delicious and fast!"
    }
    
    if (lowerMessage.includes('vegetarian') || lowerMessage.includes('vegan')) {
      return "🥬 I have tons of vegetarian and vegan recipes! From hearty bean dishes to creative vegetable preparations. I can also suggest meat substitutes and protein alternatives for balanced nutrition."
    }

    return "👨‍🍳 That's a great question! I can help you with recipes, meal planning, grocery lists, cooking tips, and much more. What specific cooking help do you need today?"
  }

  const handleSendMessage = async () => {
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
      const aiResponse = generateAIResponse(inputValue)
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

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    inputRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
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
        className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50 bg-gradient-to-r from-orange-600/20 to-green-600/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/cookingpal/robotavatar.png" 
                alt="CookingPal Robot Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">CookingPal AI Assistant</h2>
              <p className="text-sm text-gray-300">Your AI kitchen companion</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 max-h-[60vh] space-y-4">
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
                    ? 'bg-gradient-to-r from-orange-500 to-green-600 text-white'
                    : 'bg-white/10 text-gray-100 border border-white/20'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.isUser ? 'text-orange-100' : 'text-gray-400'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 text-gray-100 border border-white/20 max-w-[80%] p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-4 border-t border-gray-700/50">
          <p className="text-sm text-gray-400 mb-3">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="px-3 py-2 bg-white/10 hover:bg-orange-500/20 border border-white/20 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-700/50">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about recipes, meal planning, cooking tips..."
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
