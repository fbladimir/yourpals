"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
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
  AlertTriangle,
  Calculator,
  Power,
  Lock
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AccountLinking from '@/components/moneypal/AccountLinking'
import FloatingAvatar from '@/components/moneypal/FloatingAvatar'
import ChatModal from '@/components/moneypal/ChatModal'
import ManualDataEntry from '@/components/moneypal/ManualDataEntry'

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
import { useUnifiedFinancialData } from '@/hooks/useUnifiedFinancialData'
import { useAIChat } from '@/hooks/useAIChat'
import AutomationCenter from '@/components/template/AutomationCenter'
import TestModeToggle from '@/components/moneypal/TestModeToggle'
import ProactiveNotifications from '@/components/moneypal/ProactiveNotifications'
import AIBudgetCreator from '@/components/moneypal/AIBudgetCreator'
import PredictiveAnalytics from '@/components/moneypal/PredictiveAnalytics'
import AIAutomationSystem from '@/components/moneypal/AIAutomationSystem'

export default function MoneyPalPage() {
  const authData = useAuth()
  const router = useRouter()
  
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

  // Handle manual data entry
  const handleManualDataEntered = (data: any) => {
    console.log('Manual data entered:', data)
    
    // Update the unified data store with the new data
    if (data.accounts) {
      updateAccounts(data.accounts.map((acc: any) => ({
        ...acc,
        source: 'manual' as const
      })))
    }
    
    if (data.debtAccounts) {
      updateDebtAccounts(data.debtAccounts.map((acc: any) => ({
        ...acc,
        source: 'manual' as const
      })))
    }
    
    if (data.transactions) {
      updateTransactions(data.transactions.map((tx: any) => ({
        ...tx,
        source: 'manual' as const
      })))
    }
    
    if (data.goals) {
      updateGoals(data.goals.map((goal: any) => ({
        ...goal,
        source: 'manual' as const
      })))
    }
    
    if (data.summary) {
      updateSummary(data.summary)
    }
    
    // Also save to localStorage for persistence
    if (user?.id) {
      localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(data))
    }
    
    setManualData(data)
    setShowManualDataEntry(false)
    
    // Show success message
    console.log('Manual data saved successfully and dashboard updated:', data)
  }

  // Handle overview data changes (auto-save)
  const handleOverviewDataChange = (overviewData: any) => {
    if (user?.id) {
      console.log('Overview data changed:', overviewData)
      
      // Calculate proper monthly savings and cash flow
      const monthlyIncome = overviewData.monthlyIncome || 0
      const monthlyExpenses = overviewData.monthlyExpenses || 0
      const monthlySavings = monthlyIncome - monthlyExpenses
      
      console.log('Calculated values:', {
        monthlyIncome,
        monthlyExpenses,
        monthlySavings,
        monthlyChange: monthlySavings
      })
      
      const correctedOverviewData = {
        ...overviewData,
        monthlySavings,
        monthlyChange: monthlySavings // This is what cash flow should use
      }
      
      console.log('Corrected overview data:', correctedOverviewData)
      
      // Update the unified data store with corrected data
      updateSummary(correctedOverviewData)
      
      // Also save to localStorage for persistence
      const existingData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
      if (existingData) {
        try {
          const parsedData = JSON.parse(existingData)
          const updatedData = { ...parsedData, summary: { ...parsedData.summary, ...correctedOverviewData } }
          localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(updatedData))
          console.log('Overview data saved to localStorage:', updatedData)
        } catch (e) {
          console.error('Error updating overview data in localStorage:', e)
        }
      }
    }
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
  const financialData = useUnifiedFinancialData(user?.id || '')
  
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
    data: unifiedData,
    loading, 
    error, 
    refreshData = () => {},
    getSpendingByCategory = () => ({}),
    getRecentTransactions = () => ([]),
    updateAccounts,
    updateDebtAccounts,
    updateTransactions,
    updateGoals,
    updateSummary
  } = financialData

  // Extract data from unified structure
  const accounts = unifiedData?.accounts || []
  const transactions = unifiedData?.transactions || []
  const summary = unifiedData?.summary || null
  const goals = unifiedData?.goals || []
  const debtAccounts = unifiedData?.debtAccounts || []
  const insights: any[] = [] // Will be generated by AI later

  // Get actual data for display (prioritize manual data over mock data)
  const actualData = {
    accounts: accounts.length > 0 ? accounts : (financialData.data?.accounts || []),
    transactions: transactions.length > 0 ? transactions : (financialData.data?.transactions || []),
    summary: summary || financialData.data?.summary || null,
    goals: goals.length > 0 ? goals : (financialData.data?.goals || []),
    debtAccounts: debtAccounts.length > 0 ? debtAccounts : [],
    insights: insights
  }

  // Debug logging to see what data we're working with
  console.log('Unified data:', {
    accounts: accounts.length,
    transactions: transactions.length,
    summary: summary,
    goals: goals.length,
    debtAccounts: debtAccounts.length
  })
  
  console.log('Actual data for display:', {
    accounts: actualData.accounts.length,
    transactions: actualData.transactions.length,
    summary: actualData.summary,
    goals: actualData.goals.length,
    debtAccounts: actualData.debtAccounts.length
  })
  
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

  const [activeTab, setActiveTab] = useState('overview') // Default to desktop tab
  
  // Set mobile tab on mount if on mobile
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setActiveTab('home')
    }
  }, [])
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
  const [showManualDataEntry, setShowManualDataEntry] = useState(false)
  const [isTestMode, setIsTestMode] = useState(false)
  const [allCardsFlipped, setAllCardsFlipped] = useState(false)
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())
  
  // Mobile Onboarding State
  const [showMobileOnboarding, setShowMobileOnboarding] = useState(false)
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [onboardingData, setOnboardingData] = useState({
    setupMethod: '',
    hasCompletedSetup: false
  })

  // Update manualData state whenever unified data changes
  useEffect(() => {
    if (unifiedData) {
      // Only update if the data has actually changed to prevent unnecessary re-renders
      const newManualData = {
        accounts: unifiedData.accounts,
        debtAccounts: unifiedData.debtAccounts,
        transactions: unifiedData.transactions,
        goals: unifiedData.goals,
        summary: unifiedData.summary
      }
      
      // Deep comparison to prevent unnecessary updates
      if (JSON.stringify(newManualData) !== JSON.stringify(manualData)) {
        console.log('Updating manualData state with new unified data')
        setManualData(newManualData)
      }
    }
  }, [unifiedData, manualData])

  // Handle global card flip toggle
  useEffect(() => {
    if (allCardsFlipped) {
      setFlippedCards(new Set(['financial-summary', 'accounts', 'goals', 'credit-score', 'quick-actions']))
    } else {
      setFlippedCards(new Set())
    }
  }, [allCardsFlipped])

  // Test mode data
  const testData = {
    accounts: [
      {
        id: 'test-1',
        name: 'Chase Checking',
        type: 'checking' as const,
        balance: 2500,
        currency: 'USD',
        institution: 'Chase Bank',
        lastSync: new Date().toISOString(),
        status: 'active' as const,
        source: 'test' as const
      },
      {
        id: 'test-2',
        name: 'Chase Savings',
        type: 'savings' as const,
        balance: 8500,
        currency: 'USD',
        institution: 'Chase Bank',
        lastSync: new Date().toISOString(),
        status: 'active' as const,
        source: 'test' as const
      }
    ],
    debtAccounts: [
      {
        id: 'test-debt-1',
        name: 'Chase Credit Card',
        type: 'credit-card' as const,
        balance: 1200,
        currency: 'USD',
        institution: 'Chase Bank',
        interestRate: 18.99,
        minimumPayment: 35,
        dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'active' as const,
        source: 'test' as const
      }
    ],
    transactions: [
      {
        id: 'test-tx-1',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: 'Grocery Store',
        amount: -85.50,
        category: 'Food & Dining',
        accountId: 'test-1',
        merchant: 'Whole Foods',
        source: 'test' as const
      },
      {
        id: 'test-tx-2',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: 'Salary Deposit',
        amount: 3200,
        category: 'Income',
        accountId: 'test-1',
        merchant: 'Employer',
        source: 'test' as const
      }
    ],
    goals: [
      {
        id: 'test-goal-1',
        name: 'Emergency Fund',
        target: 10000,
        current: 8500,
        deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        type: 'emergency' as const,
        priority: 'high' as const,
        status: 'active' as const,
        source: 'test' as const
      }
    ],
    summary: {
      totalAssets: 11000,
      totalDebt: 1200,
      netWorth: 9800,
      monthlyIncome: 3200,
      monthlyExpenses: 2500,
      monthlySavings: 700,
      creditScore: 780,
      emergencyFund: 8500,
      investmentAmount: 0,
      monthlyChange: 700
    }
  }

  // Test mode handlers
  const handleEnterTestMode = () => {
    setIsTestMode(true)
    // Load test data into unified store
    updateAccounts(testData.accounts)
    updateDebtAccounts(testData.debtAccounts)
    updateTransactions(testData.transactions)
    updateGoals(testData.goals)
    updateSummary(testData.summary)
    
    // Save test data to localStorage
    if (user?.id) {
      localStorage.setItem(`moneypal-test-data-${user.id}`, JSON.stringify(testData))
    }
  }

  const handleExitTestMode = () => {
    if (confirm('Are you sure you want to exit test mode? All test data will be removed and your dashboard will be reset to empty.')) {
      setIsTestMode(false)
      
      // Clear all data from unified store
      updateAccounts([])
      updateDebtAccounts([])
      updateTransactions([])
      updateGoals([])
      updateSummary({
        totalAssets: 0,
        totalDebt: 0,
        netWorth: 0,
        monthlyIncome: 0,
        monthlyExpenses: 0,
        monthlySavings: 0,
        creditScore: 750,
        emergencyFund: 0,
        investmentAmount: 0,
        monthlyChange: 0,
        debtToIncomeRatio: 0,
        savingsRate: 0
      })
      
      // Clear localStorage completely
      if (user?.id) {
        localStorage.removeItem(`moneypal-test-data-${user.id}`)
        localStorage.removeItem(`moneypal-manual-data-${user.id}`)
        
        // Also clear the API store by sending empty data
        fetch('/api/moneypal/manual-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.id,
            data: {
              accounts: [],
              debtAccounts: [],
              transactions: [],
              summary: {
                totalAssets: 0,
                totalDebt: 0,
                netWorth: 0,
                monthlyIncome: 0,
                monthlyExpenses: 0,
                monthlySavings: 0,
                creditScore: 750,
                emergencyFund: 0,
                investmentAmount: 0,
                monthlyChange: 0
              },
              goals: [],
              lastUpdated: new Date().toISOString()
            }
          })
        }).then(() => {
          console.log('Test mode data cleared from API')
        }).catch((error) => {
          console.error('Error clearing test mode data:', error)
        })
      }
      
      console.log('Test mode exited - all data cleared')
    }
  }

  const handleExitToDashboard = () => {
    // Create a smooth fade-out effect that transitions to dashboard
    const fadeOutEffect = () => {
      // Create overlay with initial transparency
      const overlay = document.createElement('div')
      overlay.className = 'fixed inset-0 bg-black z-[9999] transition-opacity duration-700 ease-in-out'
      overlay.style.opacity = '0'
      document.body.appendChild(overlay)
      
      // Start fade in
      requestAnimationFrame(() => {
        overlay.style.opacity = '1'
      })
      
      // After fade completes, navigate to dashboard
      setTimeout(() => {
        // Remove overlay and navigate
        overlay.remove()
        router.push('/dashboard')
      }, 700)
    }
    
    fadeOutEffect()
  }

  // Refs for scrolling to elements
  const navTabsRef = useRef<HTMLDivElement>(null)
  const accountsSectionRef = useRef<HTMLDivElement>(null)
  const mobileCardsRef = useRef<HTMLDivElement>(null)
  
  // State for tracking scroll position
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

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

  // Check if this is the user's first time
  useEffect(() => {
    const tutorialSeen = localStorage.getItem('moneypal-tutorial-completed')
    const onboardingCompleted = localStorage.getItem('moneypal-onboarding-completed')
    const mobileOnboardingCompleted = localStorage.getItem('moneypal-mobile-onboarding-completed')
    
    if (!tutorialSeen) {
      setShowTutorial(true)
      setTutorialMode(true)
    }
    
    // Show desktop onboarding if not completed
    if (!onboardingCompleted) {
      setShowOnboarding(true)
    }
    
    // Show mobile onboarding for new users on mobile
    if (!mobileOnboardingCompleted && typeof window !== 'undefined' && window.innerWidth < 768) {
      console.log('New mobile user detected - showing onboarding')
      setShowMobileOnboarding(true)
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
  
  // Additional effect to handle onboarding after data loads
  useEffect(() => {
    if (!loading && typeof window !== 'undefined' && window.innerWidth < 768) {
      const mobileOnboardingCompleted = localStorage.getItem('moneypal-mobile-onboarding-completed')
      
      console.log('Mobile onboarding check:', {
        loading,
        mobileOnboardingCompleted,
        hasAccounts: actualData.accounts && actualData.accounts.length > 0,
        hasSummary: actualData.summary && actualData.summary.monthlyIncome > 0,
        showMobileOnboarding
      })
      
      // Show onboarding if user has no data and hasn't completed onboarding
      if (!mobileOnboardingCompleted && 
          (!actualData.accounts || actualData.accounts.length === 0) && 
          (!actualData.summary || actualData.summary.monthlyIncome === 0)) {
        console.log('User with no data on mobile - showing onboarding')
        setShowMobileOnboarding(true)
      }
    }
  }, [loading, actualData.accounts, actualData.summary, showMobileOnboarding])
  
  // Timeout fallback to ensure onboarding shows for new users
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const mobileOnboardingCompleted = localStorage.getItem('moneypal-mobile-onboarding-completed')
      
      if (!mobileOnboardingCompleted) {
        const timer = setTimeout(() => {
          if (!showMobileOnboarding) {
            console.log('Timeout fallback - showing onboarding for new mobile user')
            setShowMobileOnboarding(true)
          }
        }, 2000) // 2 second fallback
        
        return () => clearTimeout(timer)
      }
    }
  }, [showMobileOnboarding])
  
  // Auto-complete demo mode setup after timeout
  useEffect(() => {
    if (onboardingStep === 2 && onboardingData.setupMethod === 'demo') {
      const timer = setTimeout(() => {
        // Auto-show demo mode as ready after 3 seconds
        console.log('Demo mode setup completed automatically')
      }, 3000) // 3 second timeout
      
      return () => clearTimeout(timer)
    }
  }, [onboardingStep, onboardingData.setupMethod])
  
  // Track horizontal scroll position for mobile cards
  useEffect(() => {
    const cardsContainer = mobileCardsRef.current
    if (!cardsContainer) return
    
    const handleScroll = () => {
      const scrollLeft = cardsContainer.scrollLeft
      const cardWidth = 320 + 16 // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentCardIndex(Math.max(0, Math.min(newIndex, 4))) // 5 cards total
    }
    
    cardsContainer.addEventListener('scroll', handleScroll)
    return () => cardsContainer.removeEventListener('scroll', handleScroll)
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

  // Handle account deletion
  const handleDeleteAccount = (accountId: string) => {
    if (confirm('Are you sure you want to delete this account? This action cannot be undone.')) {
      const updatedAccounts = accounts.filter(acc => acc.id !== accountId)
      updateAccounts(updatedAccounts)
      
      // Also remove from localStorage
      if (user?.id) {
        const existingData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
        if (existingData) {
          try {
            const parsedData = JSON.parse(existingData)
            const updatedData = { ...parsedData, accounts: updatedAccounts }
            localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(updatedData))
          } catch (e) {
            console.error('Error updating accounts in localStorage:', e)
          }
        }
      }
    }
  }

  // Handle debt account deletion
  const handleDeleteDebtAccount = (debtAccountId: string) => {
    if (confirm('Are you sure you want to delete this debt account? This action cannot be undone.')) {
      const updatedDebtAccounts = debtAccounts.filter(acc => acc.id !== debtAccountId)
      updateDebtAccounts(updatedDebtAccounts)
      
      // Also remove from localStorage
      if (user?.id) {
        const existingData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
        if (existingData) {
          try {
            const parsedData = JSON.parse(existingData)
            const updatedData = { ...parsedData, debtAccounts: updatedDebtAccounts }
            localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(updatedData))
          } catch (e) {
            console.error('Error updating debt accounts in localStorage:', e)
          }
        }
      }
    }
  }

  // Handle goal deletion
  const handleDeleteGoal = (goalId: string) => {
    if (confirm('Are you sure you want to delete this goal? This action cannot be undone.')) {
      const updatedGoals = goals.filter(goal => goal.id !== goalId)
      updateGoals(updatedGoals)
      
      // Also remove from localStorage
      if (user?.id) {
        const existingData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
        if (existingData) {
          try {
            const parsedData = JSON.parse(existingData)
            const updatedData = { ...parsedData, goals: updatedGoals }
            localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(updatedData))
          } catch (e) {
            console.error('Error updating goals in localStorage:', e)
          }
        }
      }
    }
  }

  // Handle goal updates
  const handleGoalUpdate = (goalId: string, updates: any) => {
    const updatedGoals = goals.map(goal => 
      goal.id === goalId ? { ...goal, ...updates } : goal
    )
    updateGoals(updatedGoals)
    
    // Also update localStorage
    if (user?.id) {
      const existingData = localStorage.getItem(`moneypal-manual-data-${user.id}`)
      if (existingData) {
        try {
          const parsedData = JSON.parse(existingData)
          const updatedData = { ...parsedData, goals: updatedGoals }
          localStorage.setItem(`moneypal-manual-data-${user.id}`, JSON.stringify(updatedData))
        } catch (e) {
          console.error('Error updating goals in localStorage:', e)
        }
      }
    }
  }

  // Card flip functions
  const toggleCard = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(cardId)) {
        newSet.delete(cardId)
      } else {
        newSet.add(cardId)
      }
      return newSet
    })
  }

  const isCardFlipped = (cardId: string) => flippedCards.has(cardId)

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
          totalBalance={actualData.summary?.totalAssets || 0}
          monthlySavings={actualData.summary?.monthlySavings || 0}
          monthlyIncome={actualData.summary?.monthlyIncome || 0}
          monthlyExpenses={actualData.summary?.monthlyExpenses || 0}
          creditScore={actualData.summary?.creditScore || 750}
          emergencyFund={actualData.summary?.emergencyFund || 0}
          debtAmount={actualData.summary?.totalDebt || 0}
          investmentAmount={actualData.summary?.investmentAmount || 0}
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
            description: tx.description,
            category: tx.category || 'Uncategorized',
            accountId: tx.accountId,
            accountName: accounts.find(acc => acc.id === tx.accountId)?.name || 'Unknown Account',
            merchant: tx.merchant,
            type: tx.amount > 0 ? 'income' : 'expense',
            status: 'completed',
            aiInsights: [], // Will be generated by AI later
            tags: [] // Will be added by AI later
          }))}
          onTransactionClick={handleTransactionClick}
          onCategoryChange={handleCategoryChange}
          onAddTag={handleAddTag}
          showAmounts={showTransactionAmounts}
          onToggleAmounts={() => setShowTransactionAmounts(!showTransactionAmounts)}
        />
      </CollapsibleSection>

      {/* Financial Summary */}
      <CollapsibleSection
        title="Financial Summary"
        subtitle="Your key financial metrics at a glance"
        icon={<BarChart3 className="w-5 h-5 text-robot-green" />}
        defaultOpen={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Balance Card */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Balance</h3>
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              ${actualData.summary.totalAssets.toLocaleString()}
            </div>
            <div className="text-sm text-blue-300">
              +${actualData.summary.monthlyChange.toLocaleString()} this month
            </div>
            <div className="mt-3">
              <svg className="w-16 h-8 text-blue-400" viewBox="0 0 16 8">
                <path d="M0 8 L4 4 L8 6 L12 2 L16 4 L16 8 Z" fill="currentColor" opacity="0.3"/>
                <path d="M0 8 L4 4 L8 6 L12 2 L16 4" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Monthly Savings Card */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Monthly Savings</h3>
              <PiggyBank className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              ${actualData.summary.monthlySavings.toLocaleString()}
            </div>
            <div className="text-sm text-green-300">
              {actualData.summary.monthlyIncome > 0 ? 
                `${Math.round((actualData.summary.monthlySavings / actualData.summary.monthlyIncome) * 100)}% of income` : 
                '0% of income'
              }
            </div>
          </div>

          {/* Credit Score Card */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Credit Score</h3>
              <CreditCard className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {actualData.summary.creditScore}
            </div>
            <div className="text-sm text-purple-300">
              {actualData.summary.creditScore >= 750 ? 'Excellent' : 
               actualData.summary.creditScore >= 700 ? 'Good' : 
               actualData.summary.creditScore >= 650 ? 'Fair' : 'Poor'}
            </div>
          </div>

          {/* Cash Flow Card */}
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Cash Flow</h3>
              <BarChart3 className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              ${(actualData.summary.monthlyIncome - actualData.summary.monthlyExpenses).toLocaleString()}
            </div>
            <div className="text-sm text-orange-300">
              Monthly net
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* AI Budget Creator */}
      <CollapsibleSection
        title="AI Budget Creator"
        subtitle="Get personalized budget recommendations powered by AI"
        icon={<Calculator className="w-5 h-5 text-robot-green" />}
        defaultOpen={false}
      >
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Budget Planning</h3>
            <p className="text-gray-400">
              Let AI analyze your financial data and create a personalized budget plan that adapts to your goals and situation
            </p>
          </div>
          
          <AIBudgetCreator
            financialData={{
              summary: actualData.summary,
              transactions: actualData.transactions
            }}
            onBudgetCreated={(budget) => {
              console.log('AI Budget created:', budget)
              // Here you could save the budget to user preferences
            }}
          />
        </div>
      </CollapsibleSection>

      {/* Predictive Analytics */}
      <CollapsibleSection
        title="Predictive Analytics"
        subtitle="Get insights into your future financial health"
        icon={<BarChart3 className="w-5 h-5 text-robot-purple" />}
        defaultOpen={false}
      >
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Financial Forecasting</h3>
            <p className="text-gray-400">
              Predict your future financial health based on historical data
            </p>
          </div>
          
          <PredictiveAnalytics
            financialData={{
              summary: actualData.summary,
              transactions: actualData.transactions,
              goals: actualData.goals,
              accounts: actualData.accounts
            }}
            onAction={(prediction) => {
              console.log('Predictive forecast generated:', prediction)
              // Here you could save the forecast to user preferences
            }}
          />
        </div>
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowManualDataEntry(true)}
            className="flex items-center gap-2 px-4 py-2 bg-robot-orange text-white rounded-lg hover:bg-robot-orange/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Manual Entry
          </button>
          <button
            onClick={handleLinkAccounts}
            className="flex items-center gap-2 px-4 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Link Account
          </button>
        </div>
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
              onDelete={handleDeleteAccount}
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
          <h3 className="text-xl font-semibold text-white mb-2">
            {manualData ? 'No Bank Accounts Linked' : 'No Accounts Linked'}
          </h3>
          <p className="text-gray-400 mb-4">
            {manualData 
              ? 'You have manual data entered. Link your bank accounts for real-time updates, or continue using manual entry.'
              : 'Link your bank accounts to get started with MoneyPal, or enter your financial data manually.'
            }
          </p>
          <div className="flex items-center justify-center gap-3">
            {manualData && (
              <button
                onClick={() => setShowManualDataEntry(true)}
                className="px-6 py-3 bg-robot-orange text-white rounded-lg font-semibold hover:bg-robot-orange/90 transition-colors"
              >
                Update Manual Data
              </button>
            )}
            <button
              onClick={handleLinkAccounts}
              className="px-6 py-3 bg-robot-green text-white rounded-lg font-semibold hover:bg-robot-green/90 transition-colors"
            >
              Link Your First Account
            </button>
          </div>
        </div>
      )}

      {/* Debt Accounts Section */}
      {debtAccounts && debtAccounts.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              Debt & Liabilities
            </h3>
              <button
              onClick={() => setShowManualDataEntry(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
              <Plus className="w-4 h-4" />
              Manage Debt
              </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {debtAccounts.map((debtAccount: any) => (
              <div
                key={debtAccount.id}
                className="bg-gray-800/50 border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                      <h4 className="font-semibold text-white">{debtAccount.name}</h4>
                      <p className="text-sm text-gray-400 capitalize">{debtAccount.type.replace('-', ' ')}</p>
                </div>
              </div>
                  <span className="text-2xl font-bold text-red-400">
                    ${debtAccount.balance.toLocaleString()}
                  </span>
            </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Institution:</span>
                    <span className="text-white">{debtAccount.institution}</span>
                  </div>
                  {debtAccount.interestRate > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Interest Rate:</span>
                      <span className="text-white">{debtAccount.interestRate}%</span>
                    </div>
                  )}
                  {debtAccount.minimumPayment > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Min Payment:</span>
                      <span className="text-white">${debtAccount.minimumPayment.toLocaleString()}</span>
                    </div>
                  )}
                  {debtAccount.dueDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Due Date:</span>
                      <span className="text-white">{new Date(debtAccount.dueDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => setShowManualDataEntry(true)}
                    className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                  >
                    Edit Debt Account
              </button>
                  <button
                    onClick={() => handleDeleteDebtAccount(debtAccount.id)}
                    className="w-full px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors text-sm mt-2"
                  >
                    Delete Debt Account
              </button>
            </div>
          </div>
            ))}
        </div>
        </div>
      )}
      </CollapsibleSection>
  )

  const renderGoals = () => (
    <CollapsibleSection
      title="🎯 Financial Goals"
      subtitle="Set, track, and achieve your financial milestones"
      icon={<Target className="w-5 h-5 text-robot-orange" />}
      defaultOpen={true}
    >
      <div className="space-y-8">
        {goals && goals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal: any) => (
              <div
                key={goal.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center relative group"
              >
                {/* Delete Button */}
              <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete Goal"
                >
                  <X className="w-4 h-4" />
              </button>

                <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-robot-green" />
        </div>
                <h4 className="text-lg font-semibold text-white mb-2">{goal.name}</h4>
                <p className="text-gray-400 mb-4 capitalize">{goal.type}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current:</span>
                    <span className="text-white">${goal.current.toLocaleString()}</span>
                  </div>
                  {goal.deadline && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Deadline:</span>
                      <span className="text-white">{new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-robot-green h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400">
                  {Math.round((goal.current / goal.target) * 100)}% Complete
                </p>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <button
                    onClick={() => setShowManualDataEntry(true)}
                    className="w-full px-4 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors text-sm"
                  >
                    Edit Goal
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/moneypal/robotavatar.PNG"
                alt="No Goals"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Financial Goals Set
            </h3>
            <p className="text-gray-400 mb-4">
              Set your financial goals to track your progress and stay motivated.
            </p>
            <button
              onClick={() => setShowManualDataEntry(true)}
              className="bg-gradient-to-r from-robot-green to-robot-blue px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200"
            >
              + Add New Goal
            </button>
          </div>
        )}
      </div>
    </CollapsibleSection>
  )

  const renderAutomation = () => (
    <CollapsibleSection
      title="🤖 Automation Center"
      subtitle="Automate your financial tasks and get insights"
      icon={<Zap className="w-5 h-5 text-robot-purple" />}
      defaultOpen={true}
    >
      {/* AI Automation System */}
      <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 mb-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
                </div>
          <h3 className="text-xl font-semibold text-white mb-2">Automate Your Finances</h3>
          <p className="text-gray-400">
            Let AI handle your financial tasks and get personalized insights
          </p>
        </div>
        <AIAutomationSystem
          financialData={{
            summary: actualData.summary,
            transactions: actualData.transactions,
            goals: actualData.goals,
            accounts: actualData.accounts
          }}
          onAutomationTriggered={(automation, data) => {
            console.log('AI automation triggered:', automation, data)
            // Hook for future persistence/integration
          }}
        />
              </div>

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
  )

  const renderSettings = () => (
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

      {/* Test Mode & Data Management Section */}
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-robot-green" />
          Test Mode & Data Management
        </h4>
        <div className="space-y-4">
          {/* Test Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
                  <div>
                <h5 className="text-white font-medium">Test Mode</h5>
                <p className="text-sm text-gray-400">
                  {isTestMode ? 'Currently active with sample data' : 'Experience MoneyPal with sample data'}
                </p>
                  </div>
                </div>
            <div className="flex items-center gap-3">
              {isTestMode ? (
                <button
                  onClick={handleExitTestMode}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Exit Test Mode
                </button>
              ) : (
                <button
                  onClick={handleEnterTestMode}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Enter Test Mode
                </button>
              )}
              </div>
            </div>

          {/* Reset Data Option */}
          {!isTestMode && (actualData.accounts.length > 0 || actualData.summary.monthlyIncome > 0) && (
            <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                      </div>
                      <div>
                  <h5 className="text-white font-medium">Reset All Data</h5>
                  <p className="text-sm text-gray-400">
                    Clear all manually entered financial data
                  </p>
                      </div>
                    </div>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all your manual data? This will clear everything and cannot be undone.')) {
                    // Clear all data
                    updateAccounts([])
                    updateDebtAccounts([])
                    updateTransactions([])
                    updateGoals([])
                    updateSummary({
                      totalAssets: 0,
                      totalDebt: 0,
                      netWorth: 0,
                      monthlyIncome: 0,
                      monthlyExpenses: 0,
                      monthlySavings: 0,
                      creditScore: 750,
                      emergencyFund: 0,
                      investmentAmount: 0,
                      monthlyChange: 0,
                      debtToIncomeRatio: 0,
                      savingsRate: 0
                    })
                    
                    // Clear localStorage
                    if (user?.id) {
                      localStorage.removeItem(`moneypal-manual-data-${user.id}`)
                      localStorage.removeItem(`moneypal-test-data-${user.id}`)
                    }
                    
                    console.log('All manual data reset by user')
                  }
                }}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Reset Data
              </button>
                    </div>
          )}
                  </div>
              </div>
      
      <div className="text-center">
        <button className="bg-gradient-to-r from-robot-green to-robot-blue px-6 py-3 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-200">
          Save Changes
        </button>
            </div>
    </div>
  </CollapsibleSection>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  // Mobile tabs (CalAI inspired - simple, guided)
  const mobileTabs = [
    { id: 'home', label: 'Home', icon: BarChart3, shortLabel: 'Home' },
    { id: 'analysis', label: 'Analysis', icon: TrendingUp, shortLabel: 'Analysis' },
    { id: 'automation', label: 'Automation', icon: Zap, shortLabel: 'Auto' },
    { id: 'profile', label: 'Profile', icon: User, shortLabel: 'Profile' }
  ]

  // Mobile render functions (CalAI inspired - simple, guided)
  const renderMobileOnboarding = () => (
    <div className="md:hidden min-h-screen bg-gray-900 px-4 pt-4">
      {/* Step 1: Welcome */}
      {onboardingStep === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mb-8"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI"
              width={64}
              height={64}
              className="rounded-full"
            />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Welcome to MoneyPal! 🤖
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-sm"
          >
            Your AI Financial Co-Pilot is ready to help you take control of your money
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 w-full max-w-sm"
          >
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-green rounded-full"></div>
              <span>Get personalized financial insights</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
              <span>Track spending and set goals</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-purple rounded-full"></div>
              <span>AI-powered financial advice</span>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => setOnboardingStep(1)}
            className="mt-8 w-full max-w-sm bg-gradient-to-r from-robot-green to-robot-blue text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200"
          >
            Get Started
          </motion.button>
        </div>
      )}

      {/* Step 2: Choose Setup Method */}
      {onboardingStep === 1 && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mb-6"
          >
            <CreditCard className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-4"
          >
            How would you like to get started?
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 mb-8 max-w-sm"
          >
            Choose the option that works best for you
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 w-full max-w-sm"
          >
            {/* Option 1: Link Bank Accounts */}
            <button
              onClick={() => {
                setOnboardingData({ ...onboardingData, setupMethod: 'bank-linking' })
                setOnboardingStep(2)
              }}
              className="w-full p-6 bg-gradient-to-r from-robot-green/20 to-robot-blue/20 border border-robot-green/30 rounded-2xl text-left hover:border-robot-green/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Link Bank Accounts</h3>
                  <p className="text-sm text-gray-400">Connect securely with Plaid for real-time updates</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-robot-green/20 text-robot-green px-2 py-1 rounded-full">Recommended</span>
                  </div>
                </div>
              </div>
            </button>

            {/* Option 2: Manual Entry */}
            <button
              onClick={() => {
                setOnboardingData({ ...onboardingData, setupMethod: 'manual' })
                setOnboardingStep(2)
              }}
              className="w-full p-6 bg-gradient-to-r from-robot-orange/20 to-robot-pink/20 border border-robot-orange/30 rounded-2xl text-left hover:border-robot-orange/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-robot-orange to-robot-pink rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Enter Data Manually</h3>
                  <p className="text-sm text-gray-400">Add your accounts and transactions manually</p>
                </div>
              </div>
            </button>

            {/* Option 3: Demo Mode */}
            <button
              onClick={() => {
                setOnboardingData({ ...onboardingData, setupMethod: 'demo' })
                setOnboardingStep(2)
              }}
              className="w-full p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 rounded-2xl text-left hover:border-gray-600/50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">Try Demo Mode</h3>
                  <p className="text-sm text-gray-400">Experience MoneyPal with sample data first</p>
                </div>
              </div>
            </button>
          </motion.div>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => setOnboardingStep(0)}
            className="mt-6 text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Go Back
          </motion.button>
        </div>
      )}

      {/* Step 3: Setup Process */}
      {onboardingStep === 2 && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mb-6"
          >
            {onboardingData.setupMethod === 'demo' ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-4"
          >
            {onboardingData.setupMethod === 'bank-linking' && 'Connecting Your Banks...'}
            {onboardingData.setupMethod === 'manual' && 'Setting Up Your Data...'}
            {onboardingData.setupMethod === 'demo' && 'Demo Mode Ready!'}
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 mb-8 max-w-sm"
          >
            {onboardingData.setupMethod === 'bank-linking' && 'Securely connecting to your financial institutions'}
            {onboardingData.setupMethod === 'manual' && 'Preparing your personalized financial dashboard'}
            {onboardingData.setupMethod === 'demo' && 'Sample data loaded successfully. Ready to explore MoneyPal!'}
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-sm"
          >
            {onboardingData.setupMethod === 'bank-linking' && (
              <button
                onClick={handleLinkAccounts}
                className="w-full bg-gradient-to-r from-robot-green to-robot-blue text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200"
              >
                Continue to Bank Linking
              </button>
            )}
            
            {onboardingData.setupMethod === 'manual' && (
              <button
                onClick={() => setShowManualDataEntry(true)}
                className="w-full bg-gradient-to-r from-robot-orange to-robot-pink text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:from-robot-orange/90 hover:to-robot-pink/90 transition-all duration-200"
              >
                Continue to Manual Setup
              </button>
            )}
            
            {onboardingData.setupMethod === 'demo' && (
              <button
                onClick={() => {
                  handleEnterTestMode()
                  setOnboardingStep(3)
                }}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-200"
              >
                Enter Demo Mode
              </button>
            )}
          </motion.div>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => setOnboardingStep(1)}
            className="mt-6 text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Go Back
          </motion.button>
        </div>
      )}

      {/* Step 4: Success */}
      {onboardingStep === 3 && (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-4"
          >
            🎉 You're All Set!
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-sm"
          >
            Welcome to your AI-powered financial dashboard! Your MoneyPal is ready to help you take control of your money.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 w-full max-w-sm mb-8"
          >
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-green rounded-full"></div>
              <span>Your financial data is ready</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
              <span>AI insights are being generated</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-2 h-2 bg-robot-purple rounded-full"></div>
              <span>Ready to explore your dashboard</span>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => {
              setShowMobileOnboarding(false)
              localStorage.setItem('moneypal-mobile-onboarding-completed', 'true')
              setOnboardingData({ ...onboardingData, hasCompletedSetup: true })
              // Ensure we're on a valid mobile tab
              if (!['home', 'analysis', 'automation', 'profile'].includes(activeTab)) {
                setActiveTab('home')
              }
              console.log('Onboarding completed, switching to mobile dashboard')
            }}
            className="w-full max-w-sm bg-gradient-to-r from-robot-green to-robot-blue text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200"
          >
            Explore Your Dashboard
          </motion.button>
        </div>
      )}
    </div>
  )

    const renderMobileHome = () => (
    <div className="md:hidden space-y-8 px-4 pt-4">
      {/* Mobile Header with MoneyPal Logo - Home Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center relative group hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI Chat"
              width={32}
              height={32}
              className="rounded-full"
            />
            {/* Orange Chat Symbol */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2z"/>
              </svg>
            </div>
            {/* Floating Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-robot-green to-robot-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <p className="text-xs text-robot-green">AI Financial Co-Pilot</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-orange-400">💬 Tap to chat</p>
              {isTestMode && (
                <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                  DEMO
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Global Toggle for All Cards */}
          <button
            onClick={() => setAllCardsFlipped(!allCardsFlipped)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 hover:border-gray-500/50 transition-all duration-200 group"
          >
            <div className={`w-4 h-4 transition-transform duration-300 ${allCardsFlipped ? 'rotate-180' : ''} group-hover:scale-110`}>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-200">{allCardsFlipped ? 'Hide All' : 'Show All'}</span>
          </button>
          
          {/* Unified Action Button - Changes based on mode */}
          {isTestMode ? (
            /* Demo Mode: Exit Demo Button */
            <button
              onClick={handleExitTestMode}
              className="flex items-center gap-2 px-3 py-2 bg-orange-500/20 rounded-lg border border-orange-500/30 text-orange-400 hover:bg-orange-500/30 hover:border-orange-500/50 transition-all duration-200 group"
              title="Exit Demo Mode"
            >
              <div className="relative">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute inset-0 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
              </div>
              <span className="text-xs font-medium">Exit Demo</span>
            </button>
          ) : (
            /* Normal Mode: Exit to Dashboard Button */
            <button
              onClick={handleExitToDashboard}
              className="flex items-center gap-2 px-3 py-2 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-200 group"
              title="Exit to Dashboard"
            >
              <div className="relative">
                <Power className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
              </div>
              <span className="text-xs font-medium">Exit</span>
            </button>
          )}
        </div>
      </div>
      
      {/* Subtle Header Separator - Home Section */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8"></div>
  
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">💰 Your Money</h2>
        <p className="text-sm text-gray-300">Swipe to explore your finances</p>
        
        {/* Prominent Help Button for New Users */}
        {(!actualData.accounts || actualData.accounts.length === 0) && 
         (!actualData.summary || actualData.summary.monthlyIncome === 0) && (
          <div className="mt-4">
            <button
              onClick={() => {
                setShowMobileOnboarding(true)
                setOnboardingStep(0)
                setOnboardingData({ setupMethod: '', hasCompletedSetup: false })
              }}
              className="bg-gradient-to-r from-robot-green to-robot-blue text-white font-medium py-3 px-6 rounded-xl hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
            >
              <HelpCircle className="w-4 h-4" />
              New to MoneyPal? Get Started Here!
            </button>
          </div>
        )}
      </div>
  
      {/* Horizontal Scrollable Cards Container */}
      <div className="relative">
        <div ref={mobileCardsRef} className="mobile-card-container">
                    {/* Financial Summary Card - 3D Flip */}
          <div 
            onClick={() => toggleCard('financial-summary')}
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('financial-summary') ? 'flipped' : ''
            }`}
          >
            <div className="card-flip-container">
              {/* Front of card - minimal info */}
              <div className="card-flip-front bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl border border-robot-green/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Financial Overview</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Summary</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-robot-green mb-1">
                        ${actualData.summary?.netWorth?.toLocaleString() || '0'}
                      </div>
                      <div className="text-sm text-gray-400">Net Worth</div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to see detailed breakdown
                    </div>
                  </div>
                  
                  <div className="text-xs text-robot-green flex items-center justify-center gap-1">
                    <span>💡 Tap to flip card</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - detailed info */}
              <div className="card-flip-back bg-gradient-to-br from-robot-blue/20 to-robot-purple/20 rounded-2xl border border-robot-blue/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Financial Overview</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Detailed Summary</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-robot-green mb-1">
                        ${actualData.summary?.netWorth?.toLocaleString() || '0'}
                      </div>
                      <div className="text-sm text-gray-400">Net Worth</div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Income:</span>
                        <span className="text-white">${actualData.summary?.monthlyIncome?.toLocaleString() || '0'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expenses:</span>
                        <span className="text-white">${actualData.summary?.monthlyExpenses?.toLocaleString() || '0'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Savings:</span>
                        <span className="text-white">${actualData.summary?.monthlySavings?.toLocaleString() || '0'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-robot-blue">🔒 Tap to flip back</div>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Card - 3D Flip */}
          <div 
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('accounts') ? 'flipped' : ''
            }`}
            onClick={() => setShowManualDataEntry(true)}
          >
            <div className="card-flip-container">
              {/* Front of card - minimal info */}
              <div className="card-flip-front bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Account Management</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Accounts</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm text-gray-400">
                        {actualData.accounts && actualData.accounts.length > 0 ? `${actualData.accounts.length} accounts` : 'No accounts'}
                      </div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to manage accounts
                    </div>
                  </div>
                  
                  <div className="text-xs text-blue-300 flex items-center justify-center gap-1">
                    <span>💳 Tap to manage</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - detailed accounts */}
              <div className="card-flip-back bg-gradient-to-br from-blue-600/20 to-indigo-500/20 rounded-2xl border border-blue-600/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Account Details</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Accounts</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    {actualData.accounts && actualData.accounts.length > 0 ? (
                      <div className="space-y-3 text-sm">
                        {actualData.accounts.slice(0, 3).map((account, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-400">{account.name}:</span>
                            <span className="text-white font-medium">${account.balance?.toLocaleString() || '0'}</span>
                          </div>
                        ))}
                        {actualData.accounts.length > 3 && (
                          <div className="text-center text-gray-400 text-xs pt-2 border-t border-gray-600/30">
                            +{actualData.accounts.length - 3} more accounts
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-sm">
                        No accounts linked yet
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setShowManualDataEntry(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-xl text-white font-medium text-sm"
                  >
                    Manage Accounts
                  </button>
                  
                  <div className="text-xs text-blue-300 mt-2">🔒 Tap to flip back</div>
                </div>
              </div>
            </div>
          </div>

                    {/* Goals Card - 3D Flip */}
          <div 
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('goals') ? 'flipped' : ''
            }`}
            onClick={() => setShowManualDataEntry(true)}
          >
            <div className="card-flip-container">
              {/* Front of card - minimal info */}
              <div className="card-flip-front bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Financial Goals</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Goals</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm text-gray-400">
                        {actualData.goals && actualData.goals.length > 0 ? `${actualData.goals.length} active goals` : 'No goals set'}
                      </div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to manage goals
                    </div>
                  </div>
                  
                  <div className="text-xs text-purple-300 flex items-center justify-center gap-1">
                    <span>🎯 Tap to manage</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - detailed goals */}
              <div className="card-flip-back bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-2xl border border-purple-600/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Goal Details</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Goals</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    {actualData.goals && actualData.goals.length > 0 ? (
                      <div className="space-y-3 text-sm">
                        {actualData.goals.slice(0, 2).map((goal, index) => (
                          <div key={index} className="text-center">
                            <div className="text-white font-medium mb-2">{goal.name}</div>
                            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                              <div 
                                className="bg-robot-green h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-300">
                              ${goal.current?.toLocaleString() || '0'} / ${goal.target?.toLocaleString() || '0'}
                            </div>
                          </div>
                        ))}
                        {actualData.goals.length > 2 && (
                          <div className="text-center text-gray-400 text-xs pt-2 border-t border-gray-600/30">
                            +{actualData.goals.length - 2} more goals
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-sm">
                        No goals set yet
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setShowManualDataEntry(true)}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-xl text-white font-medium text-sm"
                  >
                    Manage Goals
                  </button>
                  
                  <div className="text-xs text-pink-300 mt-2">🔒 Tap to flip back</div>
                </div>
              </div>
            </div>
          </div>

                    {/* Credit Score Card - 3D Flip */}
          <div 
            onClick={() => toggleCard('credit-score')}
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('credit-score') ? 'flipped' : ''
            }`}
          >
            <div className="card-flip-container">
              {/* Front of card - hidden score */}
              <div className="card-flip-front bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Credit Health</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Score</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-purple-400 mb-1">***</div>
                      <div className="text-sm text-gray-400">Credit Score</div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to reveal your score
                    </div>
                  </div>
                  
                  <div className="text-xs text-purple-300 flex items-center justify-center gap-1">
                    <span>🔒 Tap to flip card</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - revealed score */}
              <div className="card-flip-back bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-2xl border border-purple-600/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Credit Health</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Score</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-purple-400 mb-1">
                        {actualData.summary?.creditScore || 750}
                      </div>
                      <div className="text-sm text-gray-400">Credit Score</div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min((actualData.summary?.creditScore || 750) / 850 * 100, 100)}%` }}
                      ></div>
                    </div>

                    <div className="text-xs text-purple-300">
                      {actualData.summary?.creditScore >= 750 ? 'Excellent' : 
                       actualData.summary?.creditScore >= 700 ? 'Good' : 
                       actualData.summary?.creditScore >= 650 ? 'Fair' : 'Poor'}
                    </div>
                  </div>
                  
                  <div className="text-xs text-pink-300">🔒 Tap to flip back</div>
                </div>
              </div>
            </div>
          </div>

                    {/* Quick Actions Card - 3D Flip */}
          <div 
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('quick-actions') ? 'flipped' : ''
            }`}
          >
            <div className="card-flip-container">
              {/* Front of card - minimal info */}
              <div className="card-flip-front bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Quick Actions</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-sm text-gray-400">Quick access to key features</div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to see available actions
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-300 flex items-center justify-center gap-1">
                    <span>⚡ Tap to see actions</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - detailed actions */}
              <div className="card-flip-back bg-gradient-to-br from-gray-700/50 to-gray-600/50 rounded-2xl border border-gray-500/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Available Actions</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Actions</h3>
                  
                  <div className="space-y-3 mb-4">
                    {(!actualData.accounts || actualData.accounts.length === 0) ? (
                      <>
                        <button
                          onClick={handleLinkAccounts}
                          className="w-full bg-gradient-to-r from-robot-green to-robot-blue p-2 rounded-xl text-white font-medium flex items-center justify-center gap-2 text-sm"
                        >
                          <CreditCard className="w-4 h-4" />
                          Link Bank Account
                        </button>
                        <button
                          onClick={() => setShowManualDataEntry(true)}
                          className="w-full bg-gradient-to-r from-robot-orange to-robot-pink p-2 rounded-xl text-white font-medium flex items-center justify-center gap-2 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                          Enter Data Manually
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setShowManualDataEntry(true)}
                          className="w-full bg-gradient-to-r from-robot-green to-robot-blue p-2 rounded-xl text-white font-medium flex items-center justify-center gap-2 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                          Add Transaction
                        </button>
                        <button
                          onClick={() => setIsChatOpen(true)}
                          className="w-full bg-gradient-to-r from-robot-purple to-robot-blue p-2 rounded-xl text-white font-medium flex items-center justify-center gap-2 text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Ask AI Assistant
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-300">🔒 Tap to flip back</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentCardIndex ? 'w-3 h-3 bg-robot-green' : 'w-2 h-2 bg-gray-600'
              } rounded-full ${index === currentCardIndex ? 'animate-pulse' : ''}`}
            />
          ))}
        </div>

        {/* Quick Actions Card - 3D Flip */}
        <div className="mt-6 px-4 mb-6">
          <div 
            onClick={() => toggleCard('quick-actions')}
            className={`mobile-card card-flip cursor-pointer ${
              isCardFlipped('quick-actions') ? 'flipped' : ''
            }`}
          >
            <div className="card-flip-container">
              {/* Front of card - minimal info */}
              <div className="card-flip-front bg-gradient-to-br from-robot-purple/20 to-robot-pink/20 rounded-2xl border border-robot-purple/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Quick Actions</div>
                  <h3 className="text-2xl font-bold text-white mb-4">⚡ Actions</h3>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-robot-purple mb-1">
                        Quick Access
                      </div>
                      <div className="text-sm text-gray-400">Essential tools</div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      Tap to see available actions
                    </div>
                  </div>
                  
                  <div className="text-xs text-robot-purple flex items-center justify-center gap-1">
                    <span>💡 Tap to flip card</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Back of card - detailed actions */}
              <div className="card-flip-back bg-gradient-to-br from-robot-pink/20 to-robot-purple/20 rounded-2xl border border-robot-pink/30 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-3">Quick Actions</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Available Actions</h3>
                  
                  <div className="space-y-3 mb-4">
                    <button
                      onClick={() => setIsChatOpen(true)}
                      className="w-full bg-gradient-to-r from-robot-green/20 to-robot-blue/20 border border-robot-green/30 text-robot-green font-medium py-2 px-3 rounded-lg hover:from-robot-green/30 hover:to-robot-blue/30 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      AI Chat
                    </button>
                    
                    <button
                      onClick={() => setShowManualDataEntry(true)}
                      className="w-full bg-gradient-to-r from-robot-blue/20 to-robot-purple/20 border border-robot-blue/30 text-robot-blue font-medium py-2 px-3 rounded-lg hover:from-robot-blue/30 hover:to-robot-purple/30 transition-all duration-200 text-xs"
                    >
                      <Plus className="w-4 h-4" />
                      Add Data
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowMobileOnboarding(true)
                        setOnboardingStep(0)
                        setOnboardingData({ setupMethod: '', hasCompletedSetup: false })
                      }}
                      className="w-full bg-gradient-to-r from-robot-purple/20 to-robot-pink/20 border border-robot-purple/30 text-robot-purple font-medium py-2 px-3 rounded-lg hover:from-robot-purple/30 hover:to-robot-pink/30 transition-all duration-200 flex items-center justify-center gap-2 text-xs"
                    >
                      <HelpCircle className="w-4 h-4" />
                      Get Help
                    </button>
                  </div>
                  
                  <div className="text-xs text-robot-pink flex items-center justify-center gap-1">
                    <span>💡 Tap to flip back</span>
                    <motion.div
                      animate={{ rotateY: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      🔄
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swipe Instructions */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">Swipe left/right to explore more</p>
        </div>
      </div>
    </div>
  )

  const renderMobileAnalysis = () => (
    <div className="md:hidden space-y-8 px-4 pt-4">
      {/* Mobile Header with MoneyPal Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center relative group hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI Chat"
              width={32}
              height={32}
              className="rounded-full"
            />
            {/* Orange Chat Symbol */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2z"/>
              </svg>
            </div>
            {/* Floating Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-robot-green to-robot-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <p className="text-xs text-robot-green">AI Financial Co-Pilot</p>
          </div>
        </div>
        
        {/* Global Toggle for All Cards - Analysis Section */}
        <div className="flex items-center gap-2">
          {/* Global Toggle for All Cards */}
          <button
            onClick={() => setAllCardsFlipped(!allCardsFlipped)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30"
          >
            <div className={`w-4 h-4 transition-transform duration-300 ${allCardsFlipped ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-xs text-gray-300">{allCardsFlipped ? 'Hide All' : 'Show All'}</span>
          </button>
          
          {/* Gaming-Style Power Button for Dashboard Exit */}
          <button
            onClick={handleExitToDashboard}
            className="flex items-center gap-2 px-3 py-2 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all duration-200 group"
            title="Exit to Dashboard"
          >
            <div className="relative">
              <Power className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span className="text-xs">Exit</span>
          </button>
        </div>
      </div>
  
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">📊 Financial Analysis</h2>
        <p className="text-gray-300 text-sm">Swipe to explore your insights</p>
      </div>
  
      {/* Horizontal Scrollable Analysis Cards */}
      <div className="relative">
        <div className="mobile-card-container">
          {/* Spending Overview Card */}
          <div className="mobile-card bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Monthly Spending</div>
              <h3 className="text-2xl font-bold text-white mb-4">Track Expenses</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    ${actualData.summary?.monthlyExpenses?.toLocaleString() || '0'}
                  </div>
                  <div className="text-sm text-gray-400">This Month</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Food & Dining:</span>
                    <span className="text-white">$450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transportation:</span>
                    <span className="text-white">$320</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Entertainment:</span>
                    <span className="text-white">$180</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-orange-300">Tap to see full breakdown</div>
            </div>
          </div>

          {/* Savings Rate Card */}
          <div className="mobile-card bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Savings Rate</div>
              <h3 className="text-2xl font-bold text-white mb-4">Your Progress</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {actualData.summary?.monthlyIncome > 0 ? 
                      `${Math.round((actualData.summary?.monthlySavings || 0) / actualData.summary.monthlyIncome * 100)}%` : 
                      '0%'
                    }
                  </div>
                  <div className="text-sm text-gray-400">Of Income Saved</div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${Math.min((actualData.summary?.monthlySavings || 0) / (actualData.summary?.monthlyIncome || 1) * 100, 100)}%` }}
                  ></div>
                </div>
                
                <div className="text-xs text-green-300">
                  ${actualData.summary?.monthlySavings?.toLocaleString() || '0'} saved this month
                </div>
              </div>
              
              <div className="text-xs text-gray-500">Goal: 20% of income</div>
            </div>
          </div>

          {/* Debt Overview Card */}
          <div className="mobile-card bg-gradient-to-br from-red-500/20 to-rose-600/20 rounded-2xl p-6 border border-red-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Debt Overview</div>
              <h3 className="text-2xl font-bold text-white mb-4">Manage Liabilities</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-red-400 mb-1">
                    ${actualData.summary?.totalDebt?.toLocaleString() || '0'}
                  </div>
                  <div className="text-sm text-gray-400">Total Debt</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credit Cards:</span>
                    <span className="text-white">${(actualData.debtAccounts?.find(acc => acc.type === 'credit-card')?.balance || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Loans:</span>
                    <span className="text-white">$0</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-red-300">Monitor your debt-to-income ratio</div>
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="mobile-card bg-gradient-to-br from-robot-purple/20 to-robot-blue/20 rounded-2xl p-6 border border-robot-purple/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">AI Insights</div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analysis</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">AI-Powered Insights</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-robot-green rounded-full"></div>
                    <span className="text-white">Spending patterns detected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
                    <span className="text-white">Budget recommendations ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-robot-purple rounded-full"></div>
                    <span className="text-white">Goal tracking active</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsChatOpen(true)}
                className="w-full bg-gradient-to-r from-robot-purple to-robot-blue p-3 rounded-xl text-white font-medium"
              >
                Get AI Insights
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-robot-green rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )

  const renderMobileAutomation = () => (
    <div className="md:hidden space-y-8 px-4 pt-4">
      {/* Mobile Header with MoneyPal Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center relative group hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI Chat"
              width={32}
              height={32}
              className="rounded-full"
            />
            {/* Orange Chat Symbol */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2z"/>
              </svg>
            </div>
            {/* Floating Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-robot-green to-robot-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <p className="text-xs text-robot-green">AI Financial Co-Pilot</p>
          </div>
        </div>
        
        {/* Global Toggle for All Cards - Automation Section */}
        <div className="flex items-center gap-2">
          {/* Global Toggle for All Cards */}
          <button
            onClick={() => setAllCardsFlipped(!allCardsFlipped)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30"
          >
            <div className={`w-4 h-4 transition-transform duration-300 ${allCardsFlipped ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-xs text-gray-300">{allCardsFlipped ? 'Hide All' : 'Show All'}</span>
          </button>
          
          {/* Gaming-Style Power Button for Dashboard Exit */}
          <button
            onClick={handleExitToDashboard}
            className="flex items-center gap-2 px-3 py-2 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all duration-200 group"
            title="Exit to Dashboard"
          >
            <div className="relative">
              <Power className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
            </div>
            <span className="text-xs">Exit</span>
          </button>
        </div>
      </div>
  
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">🤖 AI Automation</h2>
        <p className="text-gray-300 text-sm">Swipe to explore automation features</p>
      </div>
  
      {/* Horizontal Scrollable Automation Cards */}
      <div className="relative">
        <div className="mobile-card-container">
          {/* Weekly Summary Card */}
          <div className="mobile-card bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Weekly Reports</div>
              <h3 className="text-2xl font-bold text-white mb-4">Auto Summary</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Every Sunday at 9:00 AM</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Spending breakdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">AI insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Goal progress</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-blue-300">Active automation</div>
            </div>
          </div>

          {/* Low Balance Alert Card */}
          <div className="mobile-card bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Smart Alerts</div>
              <h3 className="text-2xl font-bold text-white mb-4">Balance Monitor</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Real-time monitoring</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-white">Low balance alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-white">Push notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-white">Email alerts</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-orange-300">Always protected</div>
            </div>
          </div>

          {/* Budget Review Card */}
          <div className="mobile-card bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Monthly Review</div>
              <h3 className="text-2xl font-bold text-white mb-4">Budget Analysis</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">1st of every month</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Performance review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">AI recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">Goal adjustments</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-green-300">Next: 3 days</div>
            </div>
          </div>

          {/* Goal Tracking Card */}
          <div className="mobile-card bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Goal Progress</div>
              <h3 className="text-2xl font-bold text-white mb-4">Track Milestones</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Every Friday at 5:00 PM</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">Progress updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white">Motivation tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">Next steps</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-purple-300">Stay motivated</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-robot-green rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )

  const renderMobileProfile = () => (
    <div className="md:hidden space-y-8 px-4 pt-4">
      {/* Mobile Header with MoneyPal Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center relative group hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI Chat"
              width={32}
              height={32}
              className="rounded-full"
            />
            {/* Orange Chat Symbol */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2z"/>
              </svg>
            </div>
            {/* Floating Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-robot-green to-robot-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <p className="text-xs text-robot-green">AI Financial Co-Pilot</p>
          </div>
        </div>
        
        {/* Global Toggle for All Cards - Profile Section */}
        <div className="flex items-center gap-2">
          {/* Global Toggle for All Cards */}
          <button
            onClick={() => setAllCardsFlipped(!allCardsFlipped)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30"
          >
            <div className={`w-4 h-4 transition-transform duration-300 ${allCardsFlipped ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span className="text-xs text-gray-300">{allCardsFlipped ? 'Hide All' : 'Show All'}</span>
          </button>
          
          {/* Gaming-Style Power Button for Dashboard Exit */}
          <button
            onClick={handleExitToDashboard}
            className="flex items-center gap-2 px-3 py-2 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all duration-200 group"
            title="Exit to Dashboard"
          >
            <div className="relative">
              <Power className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
            </div>
            <span className="text-xs">Exit</span>
          </button>
        </div>
      </div>
  
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-white mb-2">👤 Your Profile</h2>
        <p className="text-gray-300 text-sm">Swipe to manage your account</p>
      </div>
  
      {/* Horizontal Scrollable Profile Cards */}
      <div className="relative">
        <div className="mobile-card-container">
          {/* Profile Settings Card */}
          <div className="mobile-card bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl p-6 border border-robot-green/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Account Info</div>
              <h3 className="text-2xl font-bold text-white mb-4">Profile Settings</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Account Details</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white">{user?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Notifications:</span>
                    <span className="text-robot-green">Enabled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Privacy:</span>
                    <span className="text-robot-green">Private</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-robot-green to-robot-blue p-3 rounded-xl text-white font-medium">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Test Mode Card */}
          <div className="mobile-card bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Test Mode</div>
              <h3 className="text-2xl font-bold text-white mb-4">Experience MoneyPal</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">
                    {isTestMode ? 'Currently active' : 'Try with sample data'}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white">Sample accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-white">Mock transactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white">Demo goals</span>
                  </div>
                </div>
              </div>
              
              {isTestMode ? (
                <button
                  onClick={handleExitTestMode}
                  className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-xl text-white font-medium"
                >
                  Exit Test Mode
                </button>
              ) : (
                <button
                  onClick={handleEnterTestMode}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl text-white font-medium"
                >
                  Enter Test Mode
                </button>
              )}
            </div>
          </div>

          {/* Data Management Card */}
          <div className="mobile-card bg-gradient-to-br from-robot-orange/20 to-robot-pink/20 rounded-2xl p-6 border border-robot-orange/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Data Control</div>
              <h3 className="text-2xl font-bold text-white mb-4">Manage Data</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-robot-orange to-robot-pink rounded-full flex items-center justify-center mx-auto mb-3">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Data Options</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-white">Manual entry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white">Bank linking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-white">Data export</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowManualDataEntry(true)}
                className="w-full bg-gradient-to-r from-robot-orange to-robot-pink p-3 rounded-xl text-white font-medium"
              >
                Manage Data
              </button>
            </div>
          </div>

          {/* Support & Help Card */}
          <div className="mobile-card bg-gradient-to-br from-robot-purple/20 to-robot-blue/20 rounded-2xl p-6 border border-robot-purple/30">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">Support</div>
              <h3 className="text-2xl font-bold text-white mb-4">Get Help</h3>
              
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-robot-purple to-robot-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-400">Support Options</div>
                </div>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">AI chat support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Tutorial mode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">Onboarding help</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowTutorial(true)}
                className="w-full bg-gradient-to-r from-robot-purple to-robot-blue p-3 rounded-xl text-white font-medium mb-3"
              >
                Get Help
              </button>
              
              <button
                onClick={() => {
                  setShowMobileOnboarding(true)
                  setOnboardingStep(0)
                  setOnboardingData({ setupMethod: '', hasCompletedSetup: false })
                }}
                className="w-full bg-gradient-to-r from-robot-green to-robot-blue p-3 rounded-xl text-white font-medium"
              >
                Restart Onboarding
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-robot-green rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Interactive AI Tutorial Overlay */}
      {renderInteractiveTutorial()}

      {/* Desktop Header - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        className="hidden md:block sticky top-0 z-40 mb-8 p-6 bg-gray-900/80 backdrop-blur-xl border-b border-robot-green/20 rounded-b-2xl"
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
          
          <div className="flex items-center gap-4">
            {/* Proactive Notifications */}
            <ProactiveNotifications 
              financialData={{
                accounts: actualData.accounts,
                transactions: actualData.transactions,
                summary: actualData.summary,
                goals: actualData.goals
              }}
              onAction={(notification) => {
                // Handle notification actions (scroll to relevant section, etc.)
                console.log('Notification action:', notification)
              }}
            />
            
            <button
              onClick={() => setShowOnboarding(true)}
              className="px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Onboarding
            </button>
            <button
              onClick={() => setShowTutorial(true)}
              className="px-4 py-2 bg-gradient-to-r from-robot-purple to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Tutorial
            </button>
          </div>
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



      {/* Desktop Hero Section & Financial Summary - Hidden on Mobile */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            totalBalance={actualData.summary?.totalAssets || 0}
            monthlySavings={actualData.summary?.monthlySavings || 0}
            creditScore={actualData.summary?.creditScore || 750}
            cashFlow={(actualData.summary?.monthlyIncome || 0) + (actualData.summary?.monthlySavings || 0)}
            monthlyIncome={actualData.summary?.monthlyIncome || 0}
            monthlyChange={actualData.summary?.monthlyChange || 0}
          />
              </div>
              </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 pb-24 md:pb-8">
        {/* Mobile Content - Always visible on mobile */}
        <div className="md:hidden">
          
          {loading ? (
            // Mobile Loading State
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-24 h-24 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mb-8"
              >
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="MoneyPal AI"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Loading MoneyPal... 🤖
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 mb-8"
              >
                Preparing your AI financial dashboard
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-16 h-16 border-4 border-robot-green border-t-transparent rounded-full animate-spin"
              ></motion.div>
            </div>
          ) : showMobileOnboarding ? (
            renderMobileOnboarding()
          ) : (
            <>
              {activeTab === 'home' && renderMobileHome()}
              {activeTab === 'analysis' && renderMobileAnalysis()}
              {activeTab === 'automation' && renderMobileAutomation()}
              {activeTab === 'profile' && renderMobileProfile()}
              
              {/* Fallback - if no tab matches, show home */}
              {!['home', 'analysis', 'automation', 'profile'].includes(activeTab) && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-robot-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tab Not Found</h3>
                  <p className="text-gray-400 mb-4">Current tab: {activeTab}</p>
                  <button
                    onClick={() => setActiveTab('home')}
                    className="bg-gradient-to-r from-robot-green to-robot-blue text-white font-medium py-3 px-6 rounded-xl hover:from-robot-green/90 hover:to-robot-blue/90 transition-all duration-200"
                  >
                    Go to Home
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Desktop Content - Hidden on Mobile */}
        {/* Desktop Content - Hidden on Mobile */}
        <div className="hidden md:block">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'accounts' && renderAccounts()}
          {activeTab === 'goals' && renderGoals()}
          {activeTab === 'automation' && renderAutomation()}
          {activeTab === 'settings' && renderSettings()}
        </div>
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

      {/* Floating AI Avatar - Hidden on Mobile */}
      <div className="hidden md:block">
        <FloatingAvatar 
          onOpenChat={() => setIsChatOpen(true)}
          isChatOpen={isChatOpen}
        />
      </div>

      {/* AI Chat Modal */}
      <ChatModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Manual Data Entry Modal */}
      <AnimatePresence>
        {showManualDataEntry && (
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
              className="bg-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              <div className="p-6">
                <ManualDataEntry
                  onDataEntered={handleManualDataEntered}
                  onClose={() => setShowManualDataEntry(false)}
                  initialData={manualData}
                  onOverviewDataChange={handleOverviewDataChange}
                />
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Test Mode Toggle - Moved to Settings tab for better UI/UX */}
      {/* <TestModeToggle
        isTestMode={isTestMode}
        onEnterTestMode={handleEnterTestMode}
        onExitTestMode={handleExitTestMode}
      /> */}

      {/* Reset Data Button - Moved to Settings tab for better UI/UX */}
      {/* {!isTestMode && (actualData.accounts.length > 0 || actualData.summary.monthlyIncome > 0) && (
        <div className="fixed bottom-6 left-32 z-50">
          <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-xl p-1 shadow-2xl border border-red-400/30">
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all your manual data? This will clear everything and cannot be undone.')) {
                  // Clear all data
                  updateAccounts([])
                  updateDebtAccounts([])
                  updateTransactions([])
                  updateGoals([])
                  updateSummary({
                    totalAssets: 0,
                    totalDebt: 0,
                    netWorth: 0,
                    monthlyIncome: 0,
                    monthlyExpenses: 0,
                    monthlySavings: 0,
                    creditScore: 750,
                    emergencyFund: 0,
                    investmentAmount: 0,
                    monthlyChange: 0,
                    debtToIncomeRatio: 0,
                    savingsRate: 0
                  })
                  
                  // Clear localStorage
                  if (user?.id) {
                    localStorage.removeItem(`moneypal-manual-data-${user.id}`)
                    localStorage.removeItem(`moneypal-test-data-${user.id}`)
                  }
                  
                  console.log('All manual data reset by user')
                }
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-xl text-red-400 font-semibold hover:bg-gray-800 hover:text-red-300 transition-all duration-200 border border-gray-700/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Reset Data
              </button>
            </div>
        </div>
      )} */}



      {/* Mobile Bottom Navigation - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 mobile-safe-bottom"
      >
        <div className="flex items-center justify-around p-4">
          {mobileTabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-2 px-4 py-4 rounded-2xl transition-all duration-300 touch-manipulation ${
                activeTab === tab.id
                  ? 'text-robot-green bg-robot-green/20' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div className={`w-7 h-7 flex items-center justify-center ${
                activeTab === tab.id ? 'text-robot-green' : 'text-gray-400'
              }`}>
                <tab.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium">{tab.shortLabel}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
