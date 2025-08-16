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
  Sparkles,
  Trash2,
  Send
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AccountLinking from '@/components/moneypal/AccountLinking'
import FloatingAvatar from '@/components/moneypal/FloatingAvatar'
import ChatModal from '@/components/moneypal/ChatModal'
import ContextualAI from '@/components/moneypal/ContextualAI'
import AIInsightsEngine from '@/components/moneypal/AIInsightsEngine'
import SmartNotifications from '@/components/moneypal/SmartNotifications'
import PersonalizedCoaching from '@/components/moneypal/PersonalizedCoaching'
import AdvancedAutomation from '@/components/moneypal/AdvancedAutomation'
import HeroSection from '@/components/moneypal/HeroSection'
import SummaryCards from '@/components/moneypal/SummaryCards'
import { useAuth } from '@/contexts/AuthContext'
import { useFinancialData } from '@/hooks/useFinancialData'
import { useAIChat } from '@/hooks/useAIChat'

export default function MoneyPalPage() {
  const authData = useAuth()
  
  // Add safety check for auth hook
  if (!authData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Loading authentication...</p>
        </div>
      </div>
    )
  }
  
  const { user } = authData
  const financialData = useFinancialData(user?.id || '')
  
  // Add safety check to prevent rendering until hook is ready
  if (!financialData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Loading MoneyPal...</p>
        </div>
      </div>
    )
  }
  
  const { 
    accounts = [], 
    transactions = [], 
    summary = null, 
    insights = [], 
    goals = [], 
    loading = false, 
    error = null, 
    refreshData = () => {},
    getSpendingByCategory = () => ({}),
    getTopMerchants = () => ([])
  } = financialData
  
  const aiChatData = useAIChat()
  
  // Add safety check for AI chat hook
  if (!aiChatData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Initializing AI Chat...</p>
        </div>
      </div>
    )
  }
  
  const {
    messages: chatMessages,
    isLoading: isAILoading,
    error: aiError,
    sendMessage: sendAIMessage,
    clearChat: clearAIChat,
    lastAIResponse
  } = aiChatData
  
  const [activeTab, setActiveTab] = useState('overview')
  const [isLinkingAccounts, setIsLinkingAccounts] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [tutorialStep, setTutorialStep] = useState(0)
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false)
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null)
  const [tutorialMode, setTutorialMode] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [tutorialPosition, setTutorialPosition] = useState({ x: 16, y: 16 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Refs for scrolling to elements
  const overviewCardsRef = useRef<HTMLDivElement>(null)
  const aiInsightsRef = useRef<HTMLDivElement>(null)
  const quickActionsRef = useRef<HTMLDivElement>(null)
  const navTabsRef = useRef<HTMLDivElement>(null)
  const accountsSectionRef = useRef<HTMLDivElement>(null)

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

  // Tutorial steps
  const tutorialSteps = [
    {
      title: "Welcome to MoneyPal! 🤖",
      message: "I'm your AI financial co-pilot. Let me show you around!",
      target: null,
      position: { x: 16, y: 16 }
    },
    {
      title: "Financial Overview 📊",
      message: "Here you can see your total balance, savings, and credit score at a glance.",
      target: 'overview-cards',
      position: { x: 16, y: 16 }
    },
    {
      title: "AI Insights 💡",
      message: "Get personalized financial insights and recommendations powered by AI.",
      target: 'ai-insights',
      position: { x: 16, y: 16 }
    },
    {
      title: "Quick Actions ⚡",
      message: "Link your bank accounts, refresh data, and access key features quickly.",
      target: 'quick-actions',
      position: { x: 16, y: 16 }
    },
    {
      title: "Navigation Tabs 🧭",
      message: "Switch between Overview, Accounts, Goals, and Settings to manage different aspects of your finances.",
      target: 'nav-tabs',
      position: { x: 16, y: 16 }
    },
    {
      title: "Account Management 🏦",
      message: "View and manage all your linked financial accounts in one place.",
      target: 'accounts-section',
      position: { x: 16, y: 16 }
    },
    {
      title: "You're All Set! 🎉",
      message: "You now know how to use MoneyPal! Click 'Get Started' to begin managing your finances.",
      target: null,
      position: { x: 16, y: 16 }
    }
  ]

  const handleTutorialNext = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      const nextStep = tutorialStep + 1
      setTutorialStep(nextStep)
      
      const step = tutorialSteps[nextStep]
      if (step.target) {
        setHighlightedElement(step.target)
        const element = document.getElementById(step.target)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
      
      // Update tutorial position
      const newPosition = { ...step.position }
      setTutorialPosition(newPosition)
      localStorage.setItem('moneypal-tutorial-position', JSON.stringify(newPosition))
    } else {
      completeTutorial()
    }
  }

  const handleTutorialSkip = () => {
    completeTutorial()
  }

  const completeTutorial = () => {
    setShowTutorial(false)
    setTutorialMode(false)
    setHighlightedElement(null)
    localStorage.setItem('moneypal-tutorial-completed', 'true')
  }

  const restartTutorial = () => {
    setShowTutorial(true)
    setTutorialMode(true)
    setTutorialStep(0)
    setHighlightedElement(null)
  }

  const handleLinkAccounts = () => {
    setIsLinkingAccounts(true)
  }

  const handleAccountsLinked = () => {
    setIsLinkingAccounts(false)
    refreshData()
  }

  const handleUnlinkAccount = (accountId: string) => {
    // TODO: Implement account unlinking
    console.log('Unlinking account:', accountId)
  }

  // Tutorial drag handlers
  const handleTutorialMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleTutorialMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      setTutorialPosition({ x: newX, y: newY })
    }
  }

  const handleTutorialMouseUp = () => {
    setIsDragging(false)
    localStorage.setItem('moneypal-tutorial-position', JSON.stringify(tutorialPosition))
  }

  // Type the tutorial message
  useEffect(() => {
    if (showTutorial && tutorialMode) {
      const currentStep = tutorialSteps[tutorialStep]
      setTypingText('')
      setIsTyping(true)
      
      let index = 0
      const timer = setInterval(() => {
        if (index < currentStep.message.length) {
          setTypingText(currentStep.message.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          clearInterval(timer)
        }
      }, 30)
      
      return () => clearInterval(timer)
    }
  }, [tutorialStep, showTutorial, tutorialMode])

  const renderInteractiveTutorial = () => {
    if (!showTutorial) return null

    const currentStep = tutorialSteps[tutorialStep]
    const isLastStep = tutorialStep === tutorialSteps.length - 1

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 pointer-events-none"
      >
        <motion.div
          style={{
            left: tutorialPosition.x,
            top: tutorialPosition.y,
            transition: isDragging ? 'none' : 'all 0.3s ease'
          }}
          onMouseDown={handleTutorialMouseDown}
          onMouseMove={handleTutorialMouseMove}
          onMouseUp={handleTutorialMouseUp}
          onMouseLeave={handleTutorialMouseUp}
          className="absolute w-80 bg-gradient-to-br from-robot-green to-robot-blue rounded-2xl p-6 shadow-2xl border border-white/20 pointer-events-auto cursor-move"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="MoneyPal AI"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">{currentStep.title}</h3>
              <p className="text-white/90 text-sm">
                {isTyping ? typingText : currentStep.message}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-white/80 text-xs">
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
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
              >
                <SkipForward className="w-4 h-4" />
                Skip Tour
              </button>
              <button
                onClick={handleTutorialNext}
                className="flex-1 px-4 py-2 bg-white text-robot-green rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 flex items-center gap-2"
              >
                {isLastStep ? 'Get Started' : 'Next'}
                {isLastStep ? <Play className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Financial Summary Cards */}
      <div 
        id="overview-cards" 
        ref={overviewCardsRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ${
          highlightedElement === 'overview-cards' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20 animate-pulse' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-robot-green to-robot-blue rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Total Balance</h3>
            <Wallet className="w-5 h-5 text-robot-green" />
          </div>
          <div className="text-3xl font-bold text-white">${((summary?.totalBalance) || 0).toLocaleString()}</div>
          <div className="text-robot-green text-sm mt-2">+$247.63 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-robot-purple to-robot-pink rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Monthly Savings</h3>
            <PiggyBank className="w-5 h-5 text-robot-purple" />
          </div>
          <div className="text-3xl font-bold text-white">${((summary?.monthlySavings) || 0).toLocaleString()}</div>
          <div className="text-robot-purple text-sm mt-2">23% of income</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-robot-orange to-robot-yellow rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Credit Score</h3>
            <TrendingUp className="w-5 h-5 text-robot-orange" />
          </div>
          <div className="text-3xl font-bold text-white">{summary?.creditScore || 785}</div>
          <div className="text-robot-orange text-sm mt-2">+12 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-robot-blue to-robot-cyan rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Cash Flow</h3>
            <BarChart3 className="w-5 h-5 text-robot-blue" />
          </div>
          <div className="text-3xl font-bold text-white">+${((summary?.monthlyIncome) || 0) - ((summary?.monthlyExpenses) || 0)}</div>
          <div className="text-robot-blue text-sm mt-2">Net monthly</div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <div 
        id="ai-insights" 
        ref={aiInsightsRef}
        className={`space-y-6 transition-all duration-300 ${
          highlightedElement === 'ai-insights' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20 animate-pulse' : ''
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">AI Insights & Recommendations</h3>
          <div className="flex items-center gap-2 px-2 py-1 bg-robot-green/20 text-robot-green rounded-full text-xs">
            <div className="w-2 h-2 bg-robot-green rounded-full animate-pulse"></div>
            AI Powered
          </div>
        </div>
        
        {/* Enhanced AI Insights Engine */}
        <AIInsightsEngine
          accounts={accounts}
          transactions={transactions}
          summary={summary}
          insights={insights}
          goals={goals}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </div>

      {/* Quick Actions */}
      <div 
        id="quick-actions" 
        ref={quickActionsRef}
        className={`space-y-6 transition-all duration-300 ${
          highlightedElement === 'quick-actions' && tutorialMode ? 'ring-4 ring-robot-green/50 scale-105 shadow-2xl shadow-robot-green/20 animate-pulse' : ''
        }`}
      >
        <h3 className="text-xl font-semibold text-white">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLinkAccounts}
            className="bg-gradient-to-r from-robot-green to-robot-blue p-6 rounded-xl text-white text-center hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Link Accounts</h4>
            <p className="text-sm text-white/80">Connect your bank accounts</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={refreshData}
            disabled={loading}
            className="bg-gradient-to-r from-robot-purple to-robot-pink p-6 rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Refresh Data</h4>
            <p className="text-sm text-white/80">{loading ? 'Updating...' : 'Sync latest data'}</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-robot-orange to-robot-yellow p-6 rounded-xl text-white text-center hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-semibold mb-1">Chat with AI</h4>
            <p className="text-sm text-white/80">Get financial advice</p>
          </motion.button>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </div>
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
          className="flex items-center gap-2 px-4 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Link Account
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Loading your accounts...</p>
        </div>
             ) : (accounts && accounts.length > 0) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-robot-green/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    account.type === 'checking' ? 'bg-robot-blue/20' :
                    account.type === 'savings' ? 'bg-robot-green/20' :
                    account.type === 'credit' ? 'bg-robot-orange/20' : 'bg-gray-600/20'
                  }`}>
                    {account.type === 'checking' ? '🏦' :
                     account.type === 'savings' ? '💰' :
                     account.type === 'credit' ? '💳' : '🏛️'}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{account.name}</h4>
                    <p className="text-gray-400 text-sm capitalize">{account.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleUnlinkAccount(account.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                  title="Unlink Account"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Balance:</span>
                  <span className={`font-semibold ${
                    (account.balance || 0) >= 0 ? 'text-robot-green' : 'text-red-400'
                  }`}>
                    {(account.balance || 0) >= 0 ? '+' : ''}${Math.abs(account.balance || 0).toFixed(2)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Account:</span>
                  <span className="text-white font-mono text-sm">{account.accountNumber}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Last sync:</span>
                  <span className="text-white text-sm">{account.lastSync || 'Just now'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="No Accounts"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Accounts Linked</h3>
          <p className="text-gray-400 mb-4">Link your bank accounts to get started with MoneyPal</p>
          <button
            onClick={handleLinkAccounts}
            className="px-6 py-3 bg-robot-green text-white rounded-lg font-semibold hover:bg-robot-green/90 transition-colors"
          >
            Link Your First Account
          </button>
        </div>
      )}
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
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

      {/* Contextual AI Suggestions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContextualAI
          activeTab={activeTab}
          accounts={accounts}
          transactions={transactions}
          summary={summary}
          insights={insights}
          goals={goals}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </div>

      {/* Smart Notifications System */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmartNotifications
          accounts={accounts}
          transactions={transactions}
          summary={summary}
          insights={insights}
          goals={goals}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </div>

      {/* Personalized Financial Coaching */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PersonalizedCoaching
          accounts={accounts}
          transactions={transactions}
          summary={summary}
          insights={insights}
          goals={goals}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </div>

      {/* Advanced Automation Rules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdvancedAutomation
          accounts={accounts}
          transactions={transactions}
          summary={summary}
          insights={insights}
          goals={goals}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </div>

      {/* New Hero Section & Financial Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection
          userName={user?.email?.split('@')[0] || 'there'}
          onLinkAccounts={handleLinkAccounts}
          onAddTransaction={() => setIsChatOpen(true)}
          onRefreshData={() => refreshData()}
        />
        
        <SummaryCards
          totalBalance={summary?.totalBalance || 0}
          monthlySavings={summary?.monthlySavings || 0}
          creditScore={summary?.creditScore || 750}
          cashFlow={summary?.monthlyIncome ? (summary.monthlyIncome + (summary.monthlySavings || 0)) : 0}
          monthlyIncome={summary?.monthlyIncome || 0}
          monthlyChange={summary?.monthlyChange || 0}
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'accounts' && renderAccounts()}
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
            <div className="w-24 h-24 bg-robot-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Account Linking Modal */}
      <AnimatePresence>
        {isLinkingAccounts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              <AccountLinking userId={user?.id || ''} onAccountsLinked={handleAccountsLinked} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Avatar */}
      <FloatingAvatar 
        onOpenChat={() => setIsChatOpen(true)}
        isChatOpen={isChatOpen}
      />

      {/* AI Chat Modal */}
      <ChatModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}
