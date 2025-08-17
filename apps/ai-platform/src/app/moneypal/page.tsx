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
  Send,
  PieChart,
  User,
  Shield,
  Mail,
  AlertTriangle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AccountLinking from '@/components/moneypal/AccountLinking'
import FloatingAvatar from '@/components/moneypal/FloatingAvatar'
import ChatModal from '@/components/moneypal/ChatModal'

import HeroSection from '@/components/moneypal/HeroSection'
import SummaryCards from '@/components/moneypal/SummaryCards'
import EnhancedAccountCard from '@/components/moneypal/EnhancedAccountCard'
import TransactionHistory from '@/components/moneypal/TransactionHistory'
import GoalTrackingCard from '@/components/moneypal/GoalTrackingCard'
import BudgetVisualization from '@/components/moneypal/BudgetVisualization'
import ProgressMetrics from '@/components/moneypal/ProgressMetrics'
import SpendingTrendsChart from '@/components/moneypal/SpendingTrendsChart'
import CategoryBreakdownChart from '@/components/moneypal/CategoryBreakdownChart'
import ForecastingChart from '@/components/moneypal/ForecastingChart'
import ClientOnly from '@/components/moneypal/ClientOnly'
import CollapsibleSection from '@/components/moneypal/CollapsibleSection'
import OnboardingModal from '@/components/moneypal/OnboardingModal'
import { useAuth } from '@/contexts/AuthContext'
import { useFinancialData } from '@/hooks/useFinancialData'
import { useAIChat } from '@/hooks/useAIChat'
import AutomationCenter from '@/components/template/AutomationCenter'

export default function MoneyPalPage() {
  const authData = useAuth()
  
  // MoneyPal automation templates
  const automationTemplates = [
    {
      name: 'Weekly Spending Summary',
      description: 'Get a comprehensive weekly spending report every Sunday',
      type: 'schedule' as const,
      frequency: 'Every Sunday at 9:00 AM',
      action: 'Send email with weekly spending breakdown and insights',
      category: 'Reporting',
      icon: Mail,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Low Balance Alert',
      description: 'Get notified when your account balance drops below threshold',
      type: 'trigger' as const,
      frequency: 'Real-time monitoring',
      action: 'Send push notification and email when balance is low',
      category: 'Alerts',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Monthly Budget Review',
      description: 'Review your monthly budget performance and get recommendations',
      type: 'schedule' as const,
      frequency: '1st of every month at 10:00 AM',
      action: 'Generate monthly budget report with AI insights',
      category: 'Budgeting',
      icon: BarChart3,
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Goal Progress Update',
      description: 'Track your financial goals and get progress updates',
      type: 'schedule' as const,
      frequency: 'Every Friday at 5:00 PM',
      action: 'Send weekly goal progress summary and motivation',
      category: 'Goals',
      icon: Target,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Unusual Spending Alert',
      description: 'Detect unusual spending patterns and get alerts',
      type: 'monitor' as const,
      frequency: 'Daily analysis',
      action: 'Analyze spending patterns and alert on anomalies',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      name: 'Investment Reminder',
      description: 'Get reminded to review and rebalance your investments',
      type: 'schedule' as const,
      frequency: 'Every 2 weeks on Monday',
      action: 'Send investment review reminder with market insights',
      category: 'Investing',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    }
  ]

  // Automation handlers
  const handleAutomationCreate = (automation: any) => {
    console.log('Creating MoneyPal automation:', automation)
    // In real app, this would save to database/API
  }

  const handleAutomationToggle = (id: string, isActive: boolean) => {
    console.log('Toggling MoneyPal automation:', id, isActive)
    // In real app, this would update database/API
  }

  const handleAutomationDelete = (id: string) => {
    console.log('Deleting MoneyPal automation:', id)
    // In real app, this would remove from database/API
  }

  const handleAutomationEdit = (automation: any) => {
    console.log('Editing MoneyPal automation:', automation)
    // In real app, this would open edit modal
  }
  
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
  const [showOnboarding, setShowOnboarding] = useState(false)
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
  const [showAccountBalances, setShowAccountBalances] = useState(true)
  const [showTransactionAmounts, setShowTransactionAmounts] = useState(true)
  const [showAmounts, setShowAmounts] = useState(true)
  const [manualData, setManualData] = useState<any>(null)

  // Refs for scrolling to elements
  const navTabsRef = useRef<HTMLDivElement>(null)
  const accountsSectionRef = useRef<HTMLDivElement>(null)

  // Get actual financial data (combines Plaid data with manual data)
  const getActualFinancialData = () => {
    // If user has manual data, use that
    if (manualData) {
      return {
        accounts: manualData.accounts || [],
        summary: manualData.summary || {
          totalBalance: 0,
          monthlyIncome: 0,
          monthlyExpenses: 0,
          monthlySavings: 0,
          creditScore: 750,
          emergencyFund: 0,
          totalDebt: 0,
          investmentAmount: 0,
          monthlyChange: 0
        },
        goals: manualData.goals || [],
        transactions: []
      }
    }

    // If user has Plaid data, use that
    if (accounts && accounts.length > 0) {
      return {
        accounts,
        summary,
        goals,
        transactions
      }
    }

    // Default: show zero balances for new users
    return {
      accounts: [],
      summary: {
        totalBalance: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        monthlySavings: 0,
        creditScore: 750,
        emergencyFund: 0,
        totalDebt: 0,
        investmentAmount: 0,
        monthlyChange: 0
      },
      goals: [],
      transactions: []
    }
  }

  const actualData = getActualFinancialData()

  // Check if this is the user's first time
  useEffect(() => {
    const tutorialSeen = localStorage.getItem('moneypal-tutorial-completed')
    const onboardingCompleted = localStorage.getItem('moneypal-onboarding-completed')
    
    if (!tutorialSeen) {
      setShowTutorial(true)
      setTutorialMode(true)
    }
    
    // Show onboarding if not completed
    if (!onboardingCompleted) {
      setShowOnboarding(true)
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

  // Load manual data if available
  useEffect(() => {
    if (user?.id) {
      const savedManualData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
      if (savedManualData) {
        try {
          setManualData(JSON.parse(savedManualData))
        } catch (e) {
          console.log('Could not load manual data')
        }
      }
    }
  }, [user?.id])

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
      target: 'summary-cards',
      position: { x: 16, y: 16 }
    },
    {
      title: "Financial Health Metrics 💡",
      message: "Track your financial health score and get AI-powered insights for improvement.",
      target: 'progress-metrics',
      position: { x: 16, y: 16 }
    },
    {
      title: "Quick Actions ⚡",
      message: "Link your bank accounts, refresh data, and access key features quickly.",
      target: 'hero-section',
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

  const handleOnboardingComplete = () => {
    localStorage.setItem('moneypal-onboarding-completed', 'true')
    setShowOnboarding(false)
    
    // Load manual data if available
    const savedManualData = localStorage.getItem(`moneypal-manual-data-${user?.id}`)
    if (savedManualData) {
      try {
        setManualData(JSON.parse(savedManualData))
      } catch (e) {
        console.log('Could not load manual data')
      }
    }
    
    // Optionally show tutorial after onboarding
    if (!localStorage.getItem('moneypal-tutorial-completed')) {
      setShowTutorial(true)
      setTutorialMode(true)
    }
  }

  const handleUnlinkAccount = (accountId: string) => {
    // TODO: Implement account unlinking
    console.log('Unlinking account:', accountId)
  }

  const handleRefreshAccount = (accountId: string) => {
    // TODO: Implement account refresh
    console.log('Refresh account:', accountId)
    refreshData()
  }

  const handleViewAccountDetails = (accountId: string) => {
    // TODO: Implement account details view
    console.log('View account details:', accountId)
  }

  const handleTransactionClick = (transaction: any) => {
    // TODO: Implement transaction details view
    console.log('Transaction clicked:', transaction)
  }

  const handleCategoryChange = (transactionId: string, newCategory: string) => {
    // TODO: Implement category change
    console.log('Change category:', transactionId, newCategory)
  }

  const handleAddTag = (transactionId: string, tag: string) => {
    // TODO: Implement tag addition
    console.log('Add tag:', transactionId, tag)
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
      {/* Overview Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">📊 Financial Overview</h3>
        <p className="text-gray-400">Your complete financial picture with AI-powered insights</p>
      </div>

      {/* Financial Health Metrics */}
      <CollapsibleSection
        title="Financial Health Metrics"
        subtitle="Track your financial health score and get AI-powered insights"
        icon={<TrendingUp className="w-5 h-5 text-robot-green" />}
        defaultOpen={true}
      >
        <ProgressMetrics
          totalBalance={actualData.summary.totalBalance}
          monthlySavings={actualData.summary.monthlySavings}
          monthlyIncome={actualData.summary.monthlyIncome}
          monthlyExpenses={actualData.summary.monthlyExpenses}
          creditScore={actualData.summary.creditScore}
          emergencyFund={actualData.summary.emergencyFund}
          debtAmount={actualData.summary.totalDebt}
          investmentAmount={actualData.summary.investmentAmount}
          showAmounts={showAmounts}
        />
      </CollapsibleSection>

      {/* Budget Visualization */}
      <CollapsibleSection
        title="Budget Management"
        subtitle="Track your spending against budgets and get insights"
        icon={<PiggyBank className="w-5 h-5 text-robot-blue" />}
        defaultOpen={true}
      >
        <BudgetVisualization
          categories={
            actualData.summary.monthlyExpenses > 0 ? [
              {
                id: 'food',
                name: 'Food & Dining',
                budgeted: 500,
                spent: 450,
                remaining: 50,
                color: '#f97316',
                icon: '🍽️',
                trend: 'down',
                status: 'under'
              },
              {
                id: 'transport',
                name: 'Transportation',
                budgeted: 300,
                spent: 320,
                remaining: -20,
                color: '#3b82f6',
                icon: '🚗',
                trend: 'up',
                status: 'over'
              },
              {
                id: 'entertainment',
                name: 'Entertainment',
                budgeted: 200,
                spent: 180,
                remaining: 20,
                color: '#ec4899',
                icon: '🎬',
                trend: 'down',
                status: 'under'
              }
            ] : []
          }
          monthlyIncome={actualData.summary.monthlyIncome}
          monthlyExpenses={actualData.summary.monthlyExpenses}
          monthlySavings={actualData.summary.monthlySavings}
          showAmounts={showAmounts}
          onToggleAmounts={() => setShowAmounts(!showAmounts)}
          onCategoryClick={(categoryId) => console.log('Category clicked:', categoryId)}
        />
      </CollapsibleSection>

      {/* Advanced Analytics & Charts */}
      <CollapsibleSection
        title="Advanced Analytics & Charts"
        subtitle="AI-powered insights and forecasting for smarter financial decisions"
        icon={<BarChart3 className="w-5 h-5 text-robot-purple" />}
        defaultOpen={false}
      >
        <div className="space-y-8">

        {/* Spending Trends Chart */}
        <ClientOnly fallback={
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-robot-green" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Loading Analytics...</h4>
            <p className="text-gray-400">Preparing your financial insights</p>
          </div>
        }>
          <SpendingTrendsChart
            data={transactions.map(tx => ({
              date: tx.date,
              amount: tx.amount,
              category: tx.category || 'Uncategorized',
              type: tx.amount > 0 ? 'income' : 'expense'
            }))}
            showAmounts={showAmounts}
            onToggleAmounts={() => setShowAmounts(!showAmounts)}
            onCategoryClick={(category) => console.log('Category clicked:', category)}
          />
        </ClientOnly>

        {/* Category Breakdown Chart */}
        <ClientOnly fallback={
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <PieChart className="w-8 h-8 text-robot-green" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Loading Categories...</h4>
            <p className="text-gray-400">Analyzing your spending patterns</p>
          </div>
        }>
          <CategoryBreakdownChart
            categories={[
              {
                id: 'food',
                name: 'Food & Dining',
                amount: 450,
                color: '#f97316',
                icon: '🍽️',
                trend: 'down',
                percentage: 25
              },
              {
                id: 'transport',
                name: 'Transportation',
                amount: 320,
                color: '#3b82f6',
                icon: '🚗',
                trend: 'up',
                percentage: 18
              },
              {
                id: 'entertainment',
                name: 'Entertainment',
                amount: 280,
                color: '#ec4899',
                icon: '🎬',
                trend: 'down',
                percentage: 16
              },
              {
                id: 'shopping',
                name: 'Shopping',
                amount: 250,
                color: '#8b5cf6',
                icon: '🛍️',
                trend: 'stable',
                percentage: 14
              },
              {
                id: 'utilities',
                name: 'Utilities',
                amount: 200,
                color: '#10b981',
                icon: '💡',
                trend: 'stable',
                percentage: 11
              },
              {
                id: 'other',
                name: 'Other',
                amount: 300,
                color: '#6b7280',
                icon: '📦',
                trend: 'up',
                percentage: 16
              }
            ]}
            showAmounts={showAmounts}
            onToggleAmounts={() => setShowAmounts(!showAmounts)}
            onCategoryClick={(category) => console.log('Category clicked:', category)}
          />
        </ClientOnly>

        {/* Financial Forecasting Chart */}
        <ClientOnly fallback={
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-robot-green" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Loading Forecast...</h4>
            <p className="text-gray-400">Calculating your financial future</p>
          </div>
        }>
          <ForecastingChart
            historicalData={transactions}
            showAmounts={showAmounts}
            onToggleAmounts={() => setShowAmounts(!showAmounts)}
          />
        </ClientOnly>
        </div>
      </CollapsibleSection>

      {/* Recent Transactions */}
      <CollapsibleSection
        title="Recent Transactions"
        subtitle="View and manage your latest financial activity"
        icon={<Clock className="w-5 h-5 text-robot-orange" />}
        defaultOpen={true}
      >
        <TransactionHistory
          transactions={transactions.slice(0, 10).map(tx => ({
            id: tx.id,
            date: tx.date,
            amount: tx.amount,
            description: tx.description || tx.name,
            category: tx.category || 'Uncategorized',
            accountId: tx.accountId,
            accountName: accounts.find(acc => acc.id === tx.accountId)?.name || 'Unknown Account',
            merchant: tx.merchant,
            type: tx.amount > 0 ? 'income' : 'expense',
            status: 'completed',
            aiInsights: tx.aiInsights,
            tags: tx.tags
          }))}
          onTransactionClick={handleTransactionClick}
          onCategoryChange={handleCategoryChange}
          onAddTag={handleAddTag}
          showAmounts={showTransactionAmounts}
          onToggleAmounts={() => setShowTransactionAmounts(!showTransactionAmounts)}
        />
      </CollapsibleSection>
    </div>
  )

  const renderAccounts = () => (
    <CollapsibleSection
      title="Your Accounts"
      subtitle="Manage and monitor your linked financial accounts"
      icon={<CreditCard className="w-5 h-5 text-robot-green" />}
      defaultOpen={true}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Linked Accounts</h3>
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
      ) : (actualData.accounts && actualData.accounts.length > 0) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actualData.accounts.map((account: any) => (
            <EnhancedAccountCard
              key={account.id}
              account={{
                id: account.id,
                name: account.name,
                type: account.type,
                balance: account.balance || 0,
                currency: account.currency || 'USD',
                lastSync: account.lastSync,
                institution: account.institution,
                accountNumber: account.accountNumber,
                status: 'active'
              }}
              onRefresh={handleRefreshAccount}
              onUnlink={handleUnlinkAccount}
              onViewDetails={handleViewAccountDetails}
              showBalance={showAccountBalances}
              onToggleBalance={() => setShowAccountBalances(!showAccountBalances)}
            />
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
      </CollapsibleSection>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'automation', label: 'Automation', icon: Zap },
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

          {/* Onboarding Button */}
          <button
            onClick={() => setShowOnboarding(true)}
            className="flex items-center gap-2 px-3 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors mr-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Onboarding</span>
          </button>

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



      {/* New Hero Section & Financial Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero-section">
          <HeroSection
            userName={user?.email?.split('@')[0] || 'there'}
            onLinkAccounts={handleLinkAccounts}
            onAddTransaction={() => setIsChatOpen(true)}
            onRefreshData={() => refreshData()}
          />
        </div>
        
        <div id="summary-cards">
          <SummaryCards
            totalBalance={actualData.summary.totalBalance}
            monthlySavings={actualData.summary.monthlySavings}
            creditScore={actualData.summary.creditScore}
            cashFlow={actualData.summary.monthlyIncome + actualData.summary.monthlySavings}
            monthlyIncome={actualData.summary.monthlyIncome}
            monthlyChange={actualData.summary.monthlyChange}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'accounts' && renderAccounts()}
        {activeTab === 'goals' && (
          <CollapsibleSection
            title="🎯 Financial Goals"
            subtitle="Set, track, and achieve your financial milestones"
            icon={<Target className="w-5 h-5 text-robot-orange" />}
            defaultOpen={true}
          >
            <div className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Goal Cards - In real app, these would be dynamic */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-robot-green" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Emergency Fund</h4>
                <p className="text-gray-400 mb-4">Build 6 months of expenses</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-robot-green h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-sm text-gray-400">65% Complete</p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-robot-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-robot-blue" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Investment Portfolio</h4>
                <p className="text-gray-400 mb-4">Reach $50,000 invested</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-robot-blue h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <p className="text-sm text-gray-400">42% Complete</p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-robot-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-8 h-8 text-robot-purple" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Debt Free</h4>
                <p className="text-gray-400 mb-4">Pay off all credit cards</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-robot-purple h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-sm text-gray-400">78% Complete</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-robot-green to-robot-blue px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200">
                + Create New Goal
              </button>
                </div>
              </div>
        </CollapsibleSection>
        )}
        
        {activeTab === 'automation' && (
          <CollapsibleSection
            title="🤖 Automation Center"
            subtitle="Automate your financial tasks and get insights"
            icon={<Zap className="w-5 h-5 text-robot-purple" />}
            defaultOpen={true}
          >
                         <AutomationCenter
               appName="MoneyPal"
               appIcon={DollarSign}
               appColor="from-green-500 to-blue-600"
               automationTemplates={automationTemplates}
               onAutomationCreate={handleAutomationCreate}
               onAutomationToggle={handleAutomationToggle}
               onAutomationDelete={handleAutomationDelete}
               onAutomationEdit={handleAutomationEdit}
             />
          </CollapsibleSection>
        )}

        {activeTab === 'settings' && (
          <CollapsibleSection
            title="⚙️ Account Settings"
            subtitle="Manage your preferences and account details"
            icon={<Settings className="w-5 h-5 text-robot-blue" />}
            defaultOpen={true}
          >
            <div className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-robot-green" />
                  Profile Settings
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Email</span>
                    <span className="text-white">{user?.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Notifications</span>
                    <span className="text-robot-green">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Privacy</span>
                    <span className="text-robot-green">Private</span>
                </div>
              </div>
            </div>

              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-robot-blue" />
                  Security
                </h4>
              <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">2FA</span>
                    <span className="text-robot-green">Enabled</span>
                      </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Last Login</span>
                    <span className="text-white">Today</span>
                      </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Password</span>
                    <span className="text-robot-green">Strong</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-robot-green to-robot-blue px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200">
                Save Changes
              </button>
            </div>
          </div>
        </CollapsibleSection>
        )}
      </main>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        userId={user?.id || ''}
        onComplete={handleOnboardingComplete}
      />

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
