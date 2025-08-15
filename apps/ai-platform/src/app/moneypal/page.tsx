"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  ArrowLeft, 
  Plus, 
  TrendingUp, 
  CreditCard, 
  PiggyBank, 
  Target, 
  Settings,
  MessageCircle,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Wallet,
  Zap,
  X,
  HelpCircle,
  ArrowRight,
  Play,
  SkipForward,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AccountLinking from '@/components/moneypal/AccountLinking'


export default function MoneyPalPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [chatMessage, setChatMessage] = useState('')
  const [isLinkingAccounts, setIsLinkingAccounts] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [tutorialStep, setTutorialStep] = useState(0)
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false)
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null)
  const [tutorialMode, setTutorialMode] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [tutorialPosition, setTutorialPosition] = useState({ x: 16, y: 16 }) // Default position
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  // Refs for scrolling to elements
  const overviewCardsRef = useRef<HTMLDivElement>(null)
  const aiInsightsRef = useRef<HTMLDivElement>(null)
  const quickActionsRef = useRef<HTMLDivElement>(null)
  const navTabsRef = useRef<HTMLDivElement>(null)
  const accountsSectionRef = useRef<HTMLDivElement>(null)
  const aiChatRef = useRef<HTMLDivElement>(null)

  // Check if this is the user's first time
  useEffect(() => {
    const tutorialSeen = localStorage.getItem('moneypal-tutorial-completed')
    if (!tutorialSeen) {
      setShowTutorial(true)
      setTutorialMode(true)
    }
    
    // Load saved tutorial position
    const savedPosition = localStorage.getItem('moneypal-tutorial-position')
    if (savedPosition) {
      try {
        setTutorialPosition(JSON.parse(savedPosition))
      } catch (e) {
        console.log('Could not load saved tutorial position')
      }
    }
  }, [])

  // Typing effect for AI messages
  useEffect(() => {
    if (showTutorial && tutorialSteps[tutorialStep]) {
      const currentStep = tutorialSteps[tutorialStep]
      setIsTyping(true)
      setTypingText('')
      
      let index = 0
      const timer = setInterval(() => {
        if (index < currentStep.message.length) {
          setTypingText(currentStep.message.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          clearInterval(timer)
        }
      }, 30) // Adjust speed here (lower = faster typing)

      return () => clearInterval(timer)
    }
  }, [showTutorial, tutorialStep])

  // Dragging functionality - make entire tutorial box draggable
  const handleMouseDown = (e: React.MouseEvent) => {
    // Allow dragging from anywhere in the tutorial box
    setIsDragging(true)
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Keep tutorial within viewport bounds
      const maxX = window.innerWidth - 400 // Tutorial width
      const maxY = window.innerHeight - 300 // Tutorial height
      
      setTutorialPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      // Save position to localStorage
      localStorage.setItem('moneypal-tutorial-position', JSON.stringify(tutorialPosition))
    }
  }

  // Add/remove global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  // Mock data for development - will be replaced with real data
  const mockData = {
    totalBalance: 39847.63,
    monthlyIncome: 5200,
    monthlyExpenses: 3200,
    monthlySavings: 1200,
    creditScore: 745,
    accounts: [
      { id: 1, name: 'Chase Checking', balance: 1247.63, type: 'checking', lastSync: '2 min ago' },
      { id: 2, name: 'Citi Credit Card', balance: -450.00, type: 'credit', lastSync: '5 min ago' },
      { id: 3, name: 'Ally Savings', balance: 2050.00, type: 'savings', lastSync: '1 min ago' }
    ],
    upcomingBills: [
      { name: 'Netflix', amount: 15.99, dueDate: '2024-01-15', status: 'pending' },
      { name: 'Electric Bill', amount: 89.50, dueDate: '2024-01-18', status: 'pending' },
      { name: 'Rent', amount: 1200, dueDate: '2024-01-25', status: 'pending' }
    ],
    aiInsights: [
      { 
        type: 'recommendation', 
        message: 'You can safely move $1000 to your high-yield savings this week without affecting upcoming bills.',
        action: 'Move to Savings',
        priority: 'high'
      },
      { 
        type: 'alert', 
        message: 'Pay $200 to your Citi card now to save $30 in interest this month.',
        action: 'Pay Now',
        priority: 'medium'
      },
      { 
        type: 'insight', 
        message: 'Your grocery spending is 15% below budget this week. Great job!',
        action: null,
        priority: 'low'
      }
    ]
  }

  const tutorialSteps = [
    {
      id: 'welcome',
      title: "Welcome to MoneyPal! 🎉",
      message: "Hi! I'm MoneyPal, your AI financial co-pilot. I'm going to give you a hands-on tour of your new financial dashboard. Let's start by exploring your financial overview!",
      action: "Click 'Next' to see your financial dashboard",
      targetTab: 'overview',
      highlightElement: 'overview-cards',
      scrollTo: 'overview-cards'
    },
    {
      id: 'overview-cards',
      title: "Your Financial Command Center",
      message: "These four cards show your financial health at a glance. You can see your total balance, monthly savings, credit score, and cash flow. The AI analyzes your data in real-time!",
      action: "Take a look at your balance: $39,847.63 - that's impressive!",
      targetTab: 'overview',
      highlightElement: 'overview-cards',
      scrollTo: 'overview-cards'
    },
    {
      id: 'ai-insights',
      title: "AI Insights & Smart Recommendations",
      message: "This is where I shine! I constantly analyze your finances and provide personalized advice. See the green recommendation? That's high priority - you can safely move $1000 to savings this week!",
      action: "Click the 'Move to Savings' button to see how easy it is",
      targetTab: 'overview',
      highlightElement: 'ai-insights',
      scrollTo: 'ai-insights'
    },
    {
      id: 'quick-actions',
      title: "Quick Actions for Common Tasks",
      message: "Need to link accounts, transfer money, or set goals? These quick action buttons let you perform common tasks instantly. The 'Link Accounts' button will securely connect your bank accounts.",
      action: "Try clicking the 'Link Accounts' button - I'll show you how it works",
      targetTab: 'overview',
      highlightElement: 'quick-actions',
      scrollTo: 'quick-actions'
    },
    {
      id: 'navigation',
      title: "Navigate Between Features",
      message: "Use these tabs to switch between different views. You're currently on 'Overview', but you can also check your accounts, chat with me, set goals, and adjust settings.",
      action: "Click on the 'Accounts' tab to see your linked accounts",
      targetTab: 'accounts',
      highlightElement: 'nav-tabs',
      scrollTo: 'nav-tabs'
    },
    {
      id: 'accounts',
      title: "Manage Your Financial Accounts",
      message: "Here you can see all your linked accounts, balances, and sync status. Each account type has its own color coding - checking accounts are blue, credit cards are red, and savings are green.",
      action: "Notice how your Chase Checking shows $1,247.63 and syncs every 2 minutes",
      targetTab: 'accounts',
      highlightElement: 'accounts-section',
      scrollTo: 'accounts-section'
    },
    {
      id: 'ai-chat',
      title: "Chat with Your AI Financial Co-Pilot",
      message: "This is where the magic happens! You can ask me anything about your finances in natural language. Try asking 'What's my safe grocery budget?' or 'Move $300 to savings on Friday' - just like talking to a friend!",
      action: "Click on the 'AI Chat' tab to start a conversation with me",
      targetTab: 'ai',
      highlightElement: 'ai-chat',
      scrollTo: 'ai-chat'
    },
    {
      id: 'chat-interface',
      title: "Natural Language Financial Assistant",
      message: "See how I respond to your questions? I can analyze your spending patterns, suggest budget adjustments, and even help you make financial decisions. I'm here 24/7 to help!",
      action: "Try typing a question in the chat box below",
      targetTab: 'ai',
      highlightElement: 'ai-chat',
      scrollTo: 'ai-chat'
    },
    {
      id: 'completion',
      title: "You're All Set! 🚀",
      message: "Congratulations! You now know how to use MoneyPal like a pro. I'll learn your patterns and provide increasingly personalized advice. Feel free to explore and ask questions - I'm here to help you build wealth!",
      action: "Click 'Get Started' to begin your financial journey",
      targetTab: 'overview',
      highlightElement: null,
      scrollTo: null
    }
  ]

  const handleLinkAccounts = () => {
    setIsLinkingAccounts(true)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatMessage.trim()) return
    
    // TODO: Implement AI chat functionality
    console.log('Sending message:', chatMessage)
    setChatMessage('')
  }

  const handleTutorialNext = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      const nextStep = tutorialSteps[tutorialStep + 1]
      
      // Switch tabs if needed
      if (nextStep.targetTab && nextStep.targetTab !== activeTab) {
        setActiveTab(nextStep.targetTab)
      }
      
      // Scroll to element if specified
      if (nextStep.scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(nextStep.scrollTo)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      }
      
      // Update highlighted element
      setHighlightedElement(nextStep.highlightElement)
      
      // Intelligently reposition tutorial box based on the next step
      const newPosition = getIntelligentPosition(nextStep.highlightElement)
      setTutorialPosition(newPosition)
      
      setTutorialStep(tutorialStep + 1)
    } else {
      completeTutorial()
    }
  }

  // Calculate intelligent position based on the element being highlighted
  const getIntelligentPosition = (highlightElement: string | null) => {
    if (!highlightElement) return { x: 16, y: 16 } // Default position
    
    switch (highlightElement) {
      case 'overview-cards':
        return { x: window.innerWidth - 450, y: 80 } // Right side, above the cards
      case 'ai-insights':
        return { x: window.innerWidth - 450, y: 400 } // Right side, above the insights
      case 'quick-actions':
        return { x: window.innerWidth - 450, y: 600 } // Right side, above the actions
      case 'nav-tabs':
        return { x: window.innerWidth - 450, y: 120 } // Right side, below the tabs
      case 'accounts-section':
        return { x: window.innerWidth - 450, y: 80 } // Right side, above the accounts
      case 'ai-chat':
        return { x: window.innerWidth - 450, y: 80 } // Right side, above the chat
      default:
        return { x: 16, y: 16 }
    }
  }

  const handleTutorialSkip = () => {
    completeTutorial()
  }

  const completeTutorial = () => {
    setShowTutorial(false)
    setTutorialMode(false)
    setTutorialStep(0)
    setHighlightedElement(null)
    setHasSeenTutorial(true)
    localStorage.setItem('moneypal-tutorial-completed', 'true')
  }

  const restartTutorial = () => {
    setShowTutorial(true)
    setTutorialMode(true)
    setTutorialStep(0)
    setHighlightedElement(null)
    setActiveTab('overview')
  }

  const renderInteractiveTutorial = () => {
    if (!showTutorial) return null

    const currentStep = tutorialSteps[tutorialStep]
    const isLastStep = tutorialStep === tutorialSteps.length - 1

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          {/* AI Assistant Floating Card - Draggable and Positioned by User */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              left: tutorialPosition.x,
              top: tutorialPosition.y,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'left 0.5s ease-out, top 0.5s ease-out'
            }}
            className="bg-gradient-to-br from-robot-green to-robot-blue rounded-2xl p-6 max-w-sm shadow-2xl border border-white/20 pointer-events-auto select-none"
            onMouseDown={handleMouseDown}
          >
            {/* Drag Handle - Visual indicator that tutorial is draggable */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/moneypal/robotavatar.PNG"
                    alt="MoneyPal AI"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">MoneyPal AI</h3>
                  <p className="text-white/80 text-sm">Your Financial Guide</p>
                </div>
              </div>
              <div className="text-white/60 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                <span className="block mt-1">Drag anywhere</span>
              </div>
            </div>

            {/* Tutorial Content with Typing Effect */}
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">{currentStep.title}</h4>
              <div className="text-white/90 text-sm leading-relaxed mb-3 min-h-[4rem]">
                {typingText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-white ml-1"
                  />
                )}
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium">{currentStep.action}</p>
              </div>
            </div>

            {/* Progress & Actions */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-white/70">
                <span>Step {tutorialStep + 1} of {tutorialSteps.length}</span>
                <span>{Math.round(((tutorialStep + 1) / tutorialSteps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((tutorialStep + 1) / tutorialSteps.length) * 100}%` }}
                  className="bg-white h-2 rounded-full transition-all duration-300"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleTutorialSkip}
                  className="flex-1 px-3 py-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  Skip Tour
                </button>
                <button
                  onClick={handleTutorialNext}
                  className="flex-1 px-4 py-2 bg-white text-robot-green rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isLastStep ? 'Get Started' : 'Next'}
                  {isLastStep ? <Play className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Subtle Element Highlighting - No overlay blocking */}
          {currentStep.highlightElement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Add a subtle glow effect around the highlighted element */}
              <div className="absolute inset-0">
                {/* This will be handled by the CSS classes on the actual elements */}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Account Linking Modal */}
      <AnimatePresence>
        {isLinkingAccounts && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
          <div className="relative max-w-2xl w-full mx-4">
            <button
              onClick={() => setIsLinkingAccounts(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <AccountLinking 
              userId="user-123" // TODO: Get real user ID from auth context
              onAccountsLinked={() => setIsLinkingAccounts(false)}
            />
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Financial Summary Cards */}
      <div 
        id="overview-cards" 
        ref={overviewCardsRef}
        className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-300 ${
          highlightedElement === 'overview-cards' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl p-6 ring-1 ring-robot-green/30 ${
            highlightedElement === 'overview-cards' && tutorialMode ? 'animate-pulse' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Total Balance</h3>
            <Wallet className="w-5 h-5 text-robot-green" />
          </div>
          <div className="text-3xl font-bold text-white">${mockData.totalBalance.toLocaleString()}</div>
          <div className="text-robot-green text-sm mt-2">+$247.63 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`bg-gradient-to-br from-robot-purple/20 to-robot-pink/20 rounded-2xl p-6 ring-1 ring-robot-purple/30 ${
            highlightedElement === 'overview-cards' && tutorialMode ? 'animate-pulse' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Monthly Savings</h3>
            <PiggyBank className="w-5 h-5 text-robot-purple" />
          </div>
          <div className="text-3xl font-bold text-white">${mockData.monthlySavings.toLocaleString()}</div>
          <div className="text-robot-purple text-sm mt-2">23% of income</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`bg-gradient-to-br from-robot-orange/20 to-robot-red/20 rounded-2xl p-6 ring-1 ring-robot-orange/30 ${
            highlightedElement === 'overview-cards' && tutorialMode ? 'animate-pulse' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Credit Score</h3>
            <TrendingUp className="w-5 h-5 text-robot-orange" />
          </div>
          <div className="text-3xl font-bold text-white">{mockData.creditScore}</div>
          <div className="text-robot-orange text-sm mt-2">+12 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`bg-gradient-to-br from-robot-blue/20 to-robot-cyan/20 rounded-2xl p-6 ring-1 ring-robot-blue/30 ${
            highlightedElement === 'overview-cards' && tutorialMode ? 'animate-pulse' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Cash Flow</h3>
            <BarChart3 className="w-5 h-5 text-robot-blue" />
          </div>
          <div className="text-3xl font-bold text-white">+${(mockData.monthlyIncome - mockData.monthlyExpenses).toLocaleString()}</div>
          <div className="text-robot-blue text-sm mt-2">Monthly net</div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        id="ai-insights"
        ref={aiInsightsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`bg-gradient-to-br from-robot-blue/20 to-robot-cyan/20 rounded-2xl p-6 ring-1 ring-robot-blue/30 transition-all duration-300 ${
          highlightedElement === 'ai-insights' && tutorialMode ? 'ring-4 ring-robot-blue/50 scale-105 shadow-2xl shadow-robot-blue/20 animate-pulse' : ''
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-robot-blue to-robot-cyan rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-white font-semibold text-lg">AI Insights & Recommendations</h3>
        </div>
        <div className="space-y-4">
          {mockData.aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                insight.priority === 'high' ? 'bg-robot-green/10 border border-robot-green/20' :
                insight.priority === 'medium' ? 'bg-robot-orange/10 border border-robot-orange/20' :
                'bg-white/5'
              }`}
            >
              {insight.type === 'recommendation' ? (
                <CheckCircle className="w-5 h-5 text-robot-green mt-0.5" />
              ) : insight.type === 'alert' ? (
                <AlertCircle className="w-5 h-5 text-robot-orange mt-0.5" />
              ) : (
                <Clock className="w-5 h-5 text-robot-blue mt-0.5" />
              )}
              <div className="flex-1">
                <div className="text-white font-medium">{insight.message}</div>
                {insight.action && (
                  <button className="mt-2 text-sm bg-robot-green text-white px-3 py-1 rounded-lg hover:bg-robot-green/80 transition-colors">
                    {insight.action}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        id="quick-actions"
        ref={quickActionsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`bg-gradient-to-br from-robot-purple/10 to-robot-pink/10 rounded-2xl p-6 ring-1 ring-robot-purple/20 transition-all duration-300 ${
          highlightedElement === 'quick-actions' && tutorialMode ? 'ring-4 ring-robot-purple/50 scale-105 shadow-2xl shadow-robot-purple/20 animate-pulse' : ''
        }`}
      >
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleLinkAccounts}
            disabled={isLinkingAccounts}
            className="p-4 bg-robot-blue/20 rounded-lg border border-robot-blue/30 text-white hover:bg-robot-blue/30 transition-all duration-200 disabled:opacity-50"
          >
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-semibold">
              {isLinkingAccounts ? 'Linking...' : 'Link Accounts'}
            </div>
          </button>
          
          <button className="p-4 bg-robot-green/20 rounded-lg border border-robot-green/30 text-white hover:bg-robot-green/30 transition-all duration-200">
            <div className="text-2xl mb-2">💰</div>
            <div className="font-semibold">Transfer Money</div>
          </button>
          
          <button className="p-4 bg-robot-orange/20 rounded-lg border border-robot-orange/30 text-white hover:bg-robot-orange/30 transition-all duration-200">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">Set Goals</div>
          </button>
        </div>
      </motion.div>
    </div>
  )

  const renderAccounts = () => (
    <div 
      id="accounts-section" 
      ref={accountsSectionRef}
      className={`space-y-6 transition-all duration-300 ${
        highlightedElement === 'accounts-section' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20 animate-pulse' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Your Accounts</h3>
        <button
          onClick={handleLinkAccounts}
          className="flex items-center gap-2 px-4 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/80 transition-colors"
        >
          <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="Link Account"
              width={12}
              height={12}
              className="rounded"
            />
          </div>
          Link Account
        </button>
      </div>

      <div className="space-y-4">
        {mockData.accounts.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gray-800/30 rounded-xl p-6 border border-gray-700 transition-all duration-300 ${
              highlightedElement === 'accounts-section' && tutorialMode ? 'ring-2 ring-robot-green/30 scale-102' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  account.type === 'checking' ? 'bg-robot-blue/20' :
                  account.type === 'credit' ? 'bg-robot-red/20' :
                  'bg-robot-green/20'
                }`}>
                  {account.type === 'checking' ? (
                    <Image
                      src="/moneypal/robotavatar.PNG"
                      alt="Checking Account"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  ) : account.type === 'credit' ? (
                    <div className="w-6 h-6 bg-robot-red rounded-full"></div>
                  ) : (
                    <Image
                      src="/moneypal/robotavatar.PNG"
                      alt="Savings Account"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{account.name}</h4>
                  <p className="text-gray-400 text-sm">Last sync: {account.lastSync}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  account.balance >= 0 ? 'text-robot-green' : 'text-robot-red'
                }`}>
                  {account.balance >= 0 ? '+' : ''}${Math.abs(account.balance).toFixed(2)}
                </div>
                <div className="text-gray-400 text-sm capitalize">{account.type}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderAI = () => (
    <div 
      id="ai-chat" 
      ref={aiChatRef}
      className={`space-y-6 transition-all duration-300 ${
        highlightedElement === 'ai-chat' && tutorialMode ? 'ring-4 ring-robot-blue/50 scale-105 shadow-2xl shadow-robot-blue/20 animate-pulse' : ''
      }`}
    >
      <h3 className="text-xl font-semibold text-white">Chat with MoneyPal AI</h3>
      
      {/* Chat Interface */}
      <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-robot-green to-robot-blue rounded-lg flex items-center justify-center">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="MoneyPal AI"
                width={24}
                height={24}
                className="rounded"
              />
            </div>
            <div>
              <h4 className="text-white font-semibold">MoneyPal AI</h4>
              <p className="text-gray-400 text-sm">Your financial co-pilot is ready to help!</p>
            </div>
          </div>
          
          {/* Sample AI Messages */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="AI Response"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
              </div>
              <div className="bg-robot-green/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Hi! I'm MoneyPal, your AI financial co-pilot. I can help you with budgeting, saving, debt management, and more. What would you like to know?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-robot-blue/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">What's my safe grocery budget for this week?</p>
              </div>
              <div className="w-8 h-8 bg-robot-blue/20 rounded-full flex items-center justify-center">
                👤
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="AI Response"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
              </div>
              <div className="bg-robot-green/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Based on your current spending patterns and upcoming bills, your safe grocery budget this week is $120. You're currently at $67, so you have $53 remaining. Want me to adjust your budget?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="flex gap-3">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Ask MoneyPal anything about your finances..."
            className="flex-1 px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'ai', label: 'AI Chat', icon: MessageCircle },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Interactive AI Tutorial Overlay */}
      {renderInteractiveTutorial()}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 mb-8 p-6 bg-gray-900/80 backdrop-blur-xl border-b border-robot-green/20 rounded-b-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="flex items-center gap-2 text-robot-green hover:text-robot-blue transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-robot-blue/20 rounded-full flex items-center justify-center">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="MoneyPal Robot"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <div className="text-robot-green font-mono text-xs tracking-wider">AI FINANCIAL CO-PILOT</div>
          </div>

          {/* Tutorial Button */}
          <button
            onClick={restartTutorial}
            className="flex items-center gap-2 px-3 py-2 bg-robot-blue/20 text-robot-blue rounded-lg hover:bg-robot-blue/30 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Tutorial</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div 
          id="nav-tabs" 
          ref={navTabsRef}
          className={`flex gap-2 mt-6 transition-all duration-300 ${
            highlightedElement === 'nav-tabs' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20 animate-pulse' : ''
          }`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'accounts' && renderAccounts()}
        {activeTab === 'ai' && renderAI()}
        {activeTab === 'goals' && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-robot-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="Goals"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Goals Coming Soon</h3>
            <p className="text-gray-400">Goal setting and tracking will be available in the next phase</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-robot-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="Settings"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Settings Coming Soon</h3>
            <p className="text-gray-400">Account settings and preferences will be available in the next phase</p>
          </div>
        )}
      </main>
    </div>
  )
}
