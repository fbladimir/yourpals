"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import GeneralBot from '@/components/robots/GeneralBot'
import FinanceBot from '@/components/robots/FinanceBot'
import FitnessBot from '@/components/robots/FitnessBot'
import BusinessBot from '@/components/robots/BusinessBot'
import AuthForm from '@/components/AuthForm'
import OnboardingComplete from '@/components/OnboardingComplete'
import Dashboard from '@/components/Dashboard'
import FunLoadingScreen from '@/components/FunLoadingScreen'
import AIGoalInput from '@/components/AIGoalInput'
import PlanSelection from '@/components/PlanSelection'
import { useAuth } from '@/contexts/AuthContext'
import { Bot, Sparkles, ArrowRight, Heart, Zap, Target, CheckCircle, Star, Settings, User, LogOut } from 'lucide-react'

export default function HomePage() {
  const { user, loading, signOut, isEmailVerified, checkEmailVerification, checkEmailVerificationEnhanced, retryInitialization } = useAuth()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [userGoals, setUserGoals] = useState<string[]>([])
  const [isBusiness, setIsBusiness] = useState<boolean | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [onboardingCompleted, setOnboardingCompleted] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [showFunLoading, setShowFunLoading] = useState(true)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)

  // Add timeout to prevent loading from getting stuck
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoadingTimeout(true)
      }, 5000) // 5 second timeout
      
      return () => clearTimeout(timer)
    } else {
      setLoadingTimeout(false)
    }
  }, [loading])

  // Handle fun loading screen completion
  const handleFunLoadingComplete = () => {
    setShowFunLoading(false)
  }

  // Add error boundary for chunk loading issues
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error && event.error.message && event.error.message.includes('ChunkLoadError')) {
        console.error('🚨 ChunkLoadError detected:', event.error)
        setError(event.error)
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && event.reason.message && event.reason.message.includes('ChunkLoadError')) {
        console.error('🚨 ChunkLoadError in promise rejection:', event.reason)
        setError(event.reason)
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  // Reset onboarding when user changes
  useEffect(() => {
    if (user) {
      setCurrentStep(0)
      setUserGoals([])
      setIsBusiness(null)
      setSelectedGoal(null)
      setSelectedPlan(null)
      setOnboardingCompleted(false)
    }
  }, [user])

  // Check email verification status when user changes
  useEffect(() => {
    if (user && !isEmailVerified) {
      checkEmailVerification()
    }
  }, [user, isEmailVerified, checkEmailVerification])

  // Auto-check email verification when on verification page
  useEffect(() => {
    if (user && !isEmailVerified) {
      
      const interval = setInterval(async () => {
        try {
          const verified = await checkEmailVerificationEnhanced()
          if (verified) {
            // handleEmailVerified() // This function is removed
          }
        } catch (error) {
          console.error('❌ Main Page: Auto-check error:', error)
        }
      }, 3000) // Check every 3 seconds

      return () => clearInterval(interval)
    }
  }, [user, isEmailVerified, checkEmailVerificationEnhanced])

  // NEW: Check if user just returned from email verification
  useEffect(() => {
    if (user && isEmailVerified && !onboardingCompleted && currentStep === 0) {
      // User just verified email and returned, start onboarding
      // setShowEmailVerification(false) // This state is removed
      // setVerificationEmail('') // This state is removed
      // Onboarding will start automatically since currentStep is 0
    }
  }, [user, isEmailVerified, onboardingCompleted, currentStep])

  // IMPROVED: Better detection of email verification completion
  useEffect(() => {
    if (user && isEmailVerified && !onboardingCompleted) {
      
      // If we're currently showing email verification, hide it
      // if (showEmailVerification) { // This state is removed
      //   setShowEmailVerification(false)
      //   setVerificationEmail('')
      // }
      
      // Ensure we're at the start of onboarding
      if (currentStep === 0) {
        // The onboarding will render automatically since currentStep is 0
      }
    }
  }, [user, isEmailVerified, onboardingCompleted, currentStep])

  // NEW: Check URL parameters for verification completion
  useEffect(() => {
    const verified = searchParams.get('verified')
    const email = searchParams.get('email')
    
    if (verified === 'true' && email && user && isEmailVerified) {
      
      // Hide email verification if it's showing
      // if (showEmailVerification) { // This state is removed
      //   setShowEmailVerification(false)
      //   setVerificationEmail('')
      // }
      
      // Ensure onboarding starts
      if (currentStep === 0) {
      }
    }
  }, [searchParams, user, isEmailVerified, currentStep])

  // Check localStorage for onboarding completion
  useEffect(() => {
    if (user) {
      const storedOnboarding = localStorage.getItem(`onboarding_${user.id}`)
      if (storedOnboarding) {
        try {
          const parsed = JSON.parse(storedOnboarding)
          console.log('📱 Main Page: Found stored onboarding data:', parsed)
          
          if (parsed.completed) {
            console.log('✅ Main Page: Onboarding completed, setting up dashboard data')
            setOnboardingCompleted(true)
            setUserGoals(parsed.goals || [])
            setIsBusiness(parsed.isBusiness)
            setSelectedGoal(parsed.selectedGoal)
            setSelectedPlan(parsed.selectedPlan)
            setHasCompletedOnboarding(true) // This will trigger dashboard render
          }
        } catch (error) {
          console.error('❌ Main Page: Error parsing stored onboarding data:', error)
          // Clear corrupted data
          localStorage.removeItem(`onboarding_${user.id}`)
        }
      } else {
        console.log('📱 Main Page: No stored onboarding data found, user needs onboarding')
        setOnboardingCompleted(false)
        setHasCompletedOnboarding(false)
      }
    }
  }, [user])

  // Debug logging for step changes
  useEffect(() => {
    // Step change monitoring (kept for development but silent)
  }, [currentStep, selectedGoal, isBusiness, selectedPlan, userGoals])

  // Monitor step changes specifically
  useEffect(() => {
    // Step state monitoring (kept for development but silent)
  }, [currentStep])

  // NOW ALL HOOKS ARE CALLED, WE CAN DO CONDITIONAL RENDERING

  // Define all functions before conditional rendering
  const handleAuthSuccess = (userData: any) => {
    // Since we're skipping email verification for now, go directly to onboarding
    // Check if user has a name (indicating successful signup)
    if (userData && userData.name) {
      // Start the onboarding flow immediately
      setCurrentStep(0)
      setUserGoals([])
      setIsBusiness(null)
      setSelectedGoal(null)
      setSelectedPlan(null)
    }
  }

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
  }

  const handleSignOut = async () => {
    try {
      // Clear onboarding data from localStorage
      if (user) {
        localStorage.removeItem(`onboarding_${user.id}`)
      }
      
      await signOut()
      setCurrentStep(0)
      setUserGoals([])
      setIsBusiness(null)
      setSelectedGoal(null)
      setSelectedPlan(null)
      setOnboardingCompleted(false)
      setShowFunLoading(true) // Show fun loading screen again on next visit
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleNextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleGoalSelection = (goal: string) => {
    setSelectedGoal(goal)
    setUserGoals([...userGoals, goal])
    // Move to step 2 (AI personality interaction)
    setCurrentStep(2)
  }

  const handlePersonalityInteraction = () => {
    // Move to step 3 (use case selection)
    setCurrentStep(3)
  }

  const handleUseCaseSelection = (isBusinessUser: boolean) => {
    setIsBusiness(isBusinessUser)
    // Move to step 4 (plan selection)
    setCurrentStep(4)
  }

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan)
    // Move to onboarding completion step
    setCurrentStep(5)
  }

  const handlePaymentInitiated = (plan: string) => {
    setSelectedPlan(plan)
    // Payment is being processed - user will be redirected to Stripe
    // We'll handle the success/failure in the payment success page
    console.log('Payment initiated for plan:', plan)
  }

  const handleSkipSubscription = () => {
    // Set to free plan and complete onboarding
    setSelectedPlan('FREE')
    setCurrentStep(5)
  }

  const handleOnboardingComplete = () => {
    console.log('🎉 Main Page: Onboarding completed!')
    
    // Save onboarding completion to localStorage
    if (user) {
      const onboardingData = {
        completed: true,
        goals: userGoals,
        isBusiness,
        selectedGoal,
        selectedPlan,
        completedAt: new Date().toISOString()
      }
      localStorage.setItem(`onboarding_${user.id}`, JSON.stringify(onboardingData))
    }
    
    setOnboardingCompleted(true)
  }

  const handleBackToSignIn = () => {
    console.log('🔄 Main Page: Going back to sign in')
    // setShowEmailVerification(false) // This state is removed
    // setVerificationEmail('') // This state is removed
    setAuthMode('signin')
  }

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Show fun loading screen on first visit
  if (showFunLoading && !user) {
    return <FunLoadingScreen onComplete={handleFunLoadingComplete} />
  }

  // Show loading state while auth is initializing
  if (loading && !loadingTimeout) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-8xl mb-8"
          >
            🤖
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading YourPals...</h1>
          <p className="text-gray-400">Setting up your AI experience...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🚨</div>
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-gray-300 mb-6">{error.message}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full px-6 py-3 bg-robot-blue text-white rounded-lg hover:bg-robot-blue/80 transition-colors font-semibold"
            >
              🔄 Refresh Page
            </button>
            <button
              onClick={() => retryInitialization()}
              className="w-full px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
            >
              🔄 Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Show sign-in/sign-up if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mobile-header mb-6 sm:mb-8"
          >

          </motion.div>

          {/* Auth Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* AI Access Portal Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center mb-12"
            >
              {/* AI Access Portal Visual */}
              <div className="relative mb-6 sm:mb-8">
                {/* Central Robot Logo */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img 
                    src="/yourpalsRobot.png" 
                    alt="AI Access Portal" 
                    className="h-16 sm:h-20 lg:h-24 mx-auto"
                  />
                </motion.div>
                
                {/* Orbiting Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {/* Orbiting Dots */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-robot-blue rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-robot-green rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-robot-purple rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-robot-orange rounded-full"></div>
                </motion.div>
                
                {/* Pulse Rings */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-robot-blue rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  className="absolute inset-0 border border-robot-purple rounded-full"
                />
              </div>
              
              {/* AI Access Status */}
              <motion.div
                animate={{ 
                  textShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 20px rgba(59, 130, 246, 0.8)",
                    "0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-robot-blue font-mono text-lg tracking-widest mb-4"
              >
                AI ACCESS PORTAL: READY
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Access Your AI Network
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Your personal AI team is ready to assist. Authenticate to enter the future.
              </p>
              
              {/* AI System Status - Compact Horizontal Layout */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-4 sm:mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-robot-green/20 to-robot-blue/20 rounded-full border border-robot-green/30"
                >
                  <div className="w-2 h-2 bg-robot-green rounded-full animate-pulse"></div>
                  <span className="text-robot-green font-mono text-xs font-medium">AI-POWERED</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-robot-blue/20 to-robot-purple/20 rounded-full border border-robot-blue/30"
                >
                  <div className="w-2 h-2 bg-robot-blue rounded-full animate-pulse"></div>
                  <span className="text-robot-blue font-mono text-xs font-medium">PERSONALIZED</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-robot-purple/20 to-robot-pink/20 rounded-full border border-robot-purple/30"
                >
                  <div className="w-2 h-2 bg-robot-purple rounded-full animate-pulse"></div>
                  <span className="text-robot-purple font-mono text-xs font-medium">SECURE</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Auth Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              <AuthForm 
                mode={authMode} 
                onSwitchMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                onAuthSuccess={handleAuthSuccess}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  const onboardingSteps = [
    {
      bot: 'general',
      message: `Hi ${user?.user_metadata?.full_name || 'there'}! I'm GeneralBot! 🤖 Welcome to YourPals! I'm here to help you discover the perfect AI assistants for your needs. Let's start with a few questions to personalize your experience!`,
      actionText: "Let's Get Started!",
      showSparkles: true
    },
    {
      bot: 'general',
      message: "Great! What's your primary goal today? I want to make sure we find the perfect AI assistants for you!",
      actionText: "Continue",
      showSparkles: true
    },
    {
      bot: 'general',
      message: "Perfect! Now let me understand your specific needs better. Are you looking for personal use or business solutions?",
      actionText: "Continue",
      showSparkles: true
    }
  ]

  // Helper function to safely get current step info
  const getCurrentStepInfo = () => {
    if (currentStep < onboardingSteps.length) {
      return onboardingSteps[currentStep]
    }
    return null
  }

  const renderCurrentStep = () => {
    // Only show onboarding steps when currentStep is within the array bounds
    if (currentStep >= onboardingSteps.length) return null
    
    const step = onboardingSteps[currentStep]
    
    if (step && step.bot === 'general') {
      return (
        <GeneralBot
          message={step.message}
          onAction={handleNextStep}
          actionText={step.actionText}
          showSparkles={step.showSparkles}
        />
      )
    }
    
    return null
  }

  const renderGoalSelection = () => {
    if (currentStep !== 1) return null

    const goals = [
      { id: 'finance', label: 'Personal Finance', icon: '💰', color: 'from-robot-green to-robot-blue', description: 'Track expenses, budgets, and financial goals' },
      { id: 'fitness', label: 'Fitness & Health', icon: '💪', color: 'from-robot-orange to-robot-red', description: 'Monitor workouts, nutrition, and wellness' },
      { id: 'productivity', label: 'Productivity', icon: '⚡', color: 'from-robot-purple to-robot-pink', description: 'Boost efficiency and time management' },
      { id: 'business', label: 'Business Management', icon: '🏢', color: 'from-robot-blue to-robot-cyan', description: 'Optimize operations and growth' }
    ]

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
      >
        {goals.map((goal) => (
          <motion.button
            key={goal.id}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleGoalSelection(goal.id)}
            className={`p-6 bg-gradient-to-br ${goal.color} rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20`}
          >
            <div className="text-4xl mb-3">{goal.icon}</div>
            <div className="font-semibold text-lg mb-2">{goal.label}</div>
            <div className="text-sm opacity-90">{goal.description}</div>
          </motion.button>
        ))}
      </motion.div>
    )
  }

  const renderUseCaseSelection = () => {
    if (currentStep !== 2) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 space-y-4"
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            How will you be using {selectedGoal === 'finance' ? 'FinanceBot' : selectedGoal === 'fitness' ? 'FitnessBot' : selectedGoal === 'business' ? 'BusinessBot' : 'YourPals'}?
          </h3>
          <p className="text-gray-400">This helps us recommend the perfect plan for you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleUseCaseSelection(false)}
            className="p-8 bg-gradient-to-br from-robot-purple to-robot-pink rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20"
          >
            <div className="text-4xl mb-3">👤</div>
            <div className="font-semibold text-xl mb-2">Personal Use</div>
            <div className="text-sm opacity-90">For your individual needs and goals</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleUseCaseSelection(true)}
            className="p-8 bg-gradient-to-br from-robot-green to-robot-blue rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20"
          >
            <div className="text-4xl mb-3">🏢</div>
            <div className="font-semibold text-xl mb-2">Business Use</div>
            <div className="text-sm opacity-90">For your company or team</div>
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const renderSpecializedBot = () => {
    if (currentStep !== 3) return null

    if (selectedGoal === 'finance') {
      return (
        <FinanceBot
          message={`Excellent choice! 👔 I'm FinanceBot, your personal finance specialist! I can help you track expenses, set budgets, and achieve financial goals. Since you're using this for ${isBusiness ? 'business' : 'personal'} purposes, I'll customize everything just for you!`}
          onAction={() => setCurrentStep(4)}
          actionText="Show me the plans!"
          showStats={true}
        />
      )
    }

    if (selectedGoal === 'fitness') {
      return (
        <FitnessBot
          message={`Awesome! 💪 I'm FitnessBot, your personal fitness coach! I'll help you track workouts, monitor nutrition, and achieve your health goals. Whether it's ${isBusiness ? 'corporate wellness' : 'personal fitness'}, I've got you covered!`}
          onAction={() => setCurrentStep(4)}
          actionText="Let's get moving!"
          showMotivation={true}
        />
      )
    }

    if (selectedGoal === 'business') {
      return (
        <BusinessBot
          message={`Perfect! 🏢 I'm BusinessBot, your strategic business partner! I'll help you optimize operations, analyze data, and drive growth. Let me show you our ${isBusiness ? 'enterprise' : 'business'} solutions!`}
          onAction={() => setCurrentStep(4)}
          actionText="Analyze my business!"
          showMetrics={true}
        />
      )
    }

    if (selectedGoal === 'productivity') {
      return (
        <GeneralBot
          message={`Brilliant choice! ⚡ I'm GeneralBot, your productivity expert! I'll help you optimize your workflow, manage time effectively, and boost your efficiency. Let me show you our productivity solutions!`}
          onAction={() => setCurrentStep(4)}
          actionText="Boost my productivity!"
          showSparkles={true}
        />
      )
    }

    return null
  }

  const renderSubscriptionPlans = () => {
    if (currentStep !== 4) return null

    const plans = [
      {
        name: 'FREE',
        price: '$0',
        features: ['Basic features', '1 AI assistant', 'Limited usage'],
        color: 'from-gray-600 to-gray-700',
        popular: false
      },
      {
        name: 'PRO',
        price: isBusiness ? '$29' : '$9.99',
        period: '/month',
        features: ['Advanced features', 'Unlimited AI assistants', 'Priority support'],
        color: 'from-robot-blue to-robot-purple',
        popular: true
      },
      {
        name: 'ENTERPRISE',
        price: 'Custom',
        features: ['Everything in PRO', 'Custom integrations', 'Dedicated support'],
        color: 'from-robot-green to-robot-cyan',
        popular: false
      }
    ]

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Choose Your Perfect Plan
          </h3>
          <p className="text-gray-400">
            Start with FREE and upgrade anytime as your needs grow!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative p-6 rounded-xl border-2 ${
                plan.popular ? 'border-robot-blue shadow-lg shadow-robot-blue/20' : 'border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-robot-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-robot-blue rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-robot-blue to-robot-purple text-white hover:shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {plan.name === 'FREE' ? 'Get Started' : 'Choose Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  // If user has completed onboarding, show dashboard
  if (hasCompletedOnboarding || onboardingCompleted) {
    console.log('🎯 Main Page: Showing dashboard for completed user')
    return (
      <Dashboard
        userGoals={userGoals}
        isBusiness={isBusiness || false}
        selectedGoal={selectedGoal || 'general'}
        selectedPlan={selectedPlan || 'FREE'}
        onSignOut={handleSignOut}
      />
    )
  }

  // Show onboarding completion step
  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-6xl mx-auto w-full">
          <OnboardingComplete
            userGoals={userGoals}
            isBusiness={isBusiness || false}
            selectedGoal={selectedGoal || 'general'}
            selectedPlan={selectedPlan || 'FREE'}
            onComplete={handleOnboardingComplete}
          />
        </div>
      </div>
    )
  }

  // Show onboarding flow if authenticated
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header with User Info and Sign Out */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          {/* AI Mode Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* AI Mode Indicator */}
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img 
                  src="/yourpalsRobot.png" 
                  alt="AI Mode Active" 
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                {/* AI Mode Pulse Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-robot-blue rounded-full"
                />
              </motion.div>
              
              <div className="text-left">
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-robot-blue text-xs sm:text-sm font-mono tracking-wider"
                >
                  AI MODE ACTIVE
                </motion.div>
                <div className="text-white font-semibold text-base sm:text-lg">
                  {user.user_metadata?.full_name || 'User'}
                </div>
              </div>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.8)",
                    "0 0 0 rgba(59, 130, 246, 0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="px-3 py-2 bg-gradient-to-r from-robot-blue/20 to-robot-purple/20 border border-robot-blue/30 rounded-lg text-robot-blue font-mono text-xs text-center"
              >
                AI ASSISTANT READY
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-lg text-gray-200 hover:text-white hover:bg-gray-700/80 hover:border-gray-500/70 transition-all duration-200 text-sm backdrop-blur-sm shadow-lg min-h-[44px] flex items-center justify-center"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Exit AI Mode</span>
                <span className="sm:hidden ml-2">Exit</span>
              </motion.button>
            </div>
          </div>

          {/* Immersive AI Welcome - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-robot-blue font-mono text-xs sm:text-sm tracking-widest mb-2"
            >
              WELCOME TO THE FUTURE
            </motion.div>
            
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(255, 255, 255, 0)",
                  "0 0 30px rgba(255, 255, 255, 0.3)",
                  "0 0 0 rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
            >
              AI MODE ENGAGED
            </motion.h1>
            
            <motion.p
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto"
            >
              Let's begin your digital transformation.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Onboarding Steps */}
        {currentStep === 0 && (
          <GeneralBot
            message={`Hi ${user?.user_metadata?.full_name || 'there'}! I'm General Pal! 🤖 Welcome to YourPals! I'm here to help you discover the perfect AI assistants for your needs. Let's start with a few questions to personalize your experience!`}
            onAction={() => setCurrentStep(1)}
            actionText="Let's Get Started!"
            showSparkles={true}
          />
        )}

        {currentStep === 1 && (
          <AIGoalInput
            onGoalSelected={handleGoalSelection}
            onBack={handleGoBack}
          />
        )}

        {currentStep === 2 && (
          <div className="text-center">
            {selectedGoal === 'finance' && (
              <FinanceBot
                message={`Hi ${user?.user_metadata?.full_name || 'there'}! I'm Money Pal! 💰 I'm excited to help you with your financial goals! I can help you track expenses, create budgets, plan investments, and more. Let me get to know you better for personalized assistance!`}
                onAction={handlePersonalityInteraction}
                actionText="Tell Me More About You!"
              />
            )}
            {selectedGoal === 'fitness' && (
              <FitnessBot
                message={`Hi ${user?.user_metadata?.full_name || 'there'}! I'm Fitness Pal! 💪 I'm thrilled to be your health and fitness companion! Whether you want to build strength, improve endurance, eat better, or feel more energized, I'm here to guide you. Let's get to know each other better!`}
                onAction={handlePersonalityInteraction}
                actionText="Let's Get Personal!"
              />
            )}
            {selectedGoal === 'productivity' && (
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="text-6xl mb-4">⚡</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Hi {user?.user_metadata?.full_name || 'there'}! I'm Productivity Pal!
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    I'm here to supercharge your efficiency and help you achieve more in less time! Whether you need help with time management, task organization, or workflow optimization, I've got your back. Let me get to know you better for personalized strategies!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePersonalityInteraction}
                    className="px-8 py-4 bg-gradient-to-r from-robot-purple to-robot-pink text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-lg"
                  >
                    ⚡ Let's Boost Your Productivity!
                  </motion.button>
                </motion.div>
              </div>
            )}
            {selectedGoal === 'business' && (
              <BusinessBot
                message={`Hi ${user?.user_metadata?.full_name || 'there'}! I'm Business Pal! 🏢 I'm excited to help you grow your business and optimize operations! Whether you need help with strategy, marketing, operations, or growth planning, I'm here to provide expert guidance. Let me get to know your business better!`}
                onAction={handlePersonalityInteraction}
                actionText="Tell Me About Your Business!"
              />
            )}
            {selectedGoal && !['finance', 'fitness', 'productivity', 'business'].includes(selectedGoal) && (
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="text-6xl mb-4">🤖</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Hi {user?.user_metadata?.full_name || 'there'}! I'm Your AI Pal!
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    I'm so excited to help you with your goal: <span className="text-robot-blue font-semibold">"{selectedGoal}"</span>! I can't wait to learn more about you and provide personalized assistance. Let me get to know you better!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePersonalityInteraction}
                    className="px-8 py-4 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-lg"
                  >
                    🤖 Let's Get Personal!
                  </motion.button>
                </motion.div>
              </div>
            )}
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center px-4 sm:px-0">
            {/* AI Mode Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <img 
                  src="/yourpalsRobot.png" 
                  alt="AI Mode Active" 
                  className="h-12 sm:h-16 mx-auto"
                />
                {/* AI Mode Pulse Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-robot-blue rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 15px rgba(59, 130, 246, 0.6)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-robot-blue font-mono text-sm tracking-widest mb-3"
            >
              AI USE CASE ANALYSIS
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                How will you use YourPals?
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                This helps us personalize your AI experience and recommend the right features for you.
              </p>
            </motion.div>

            <div className="grid mobile-use-case-grid max-w-4xl mx-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleUseCaseSelection(false)}
                className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-robot-blue to-robot-purple rounded-2xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20 mobile-use-case-card flex flex-col items-center justify-center"
              >
                <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">👤</div>
                <div className="font-semibold text-lg sm:text-2xl mb-2 sm:mb-3">Personal Use</div>
                <div className="text-sm sm:text-lg opacity-90">For personal goals, learning, and daily tasks</div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleUseCaseSelection(true)}
                className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-robot-green to-robot-blue rounded-2xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20 mobile-use-case-card flex flex-col items-center justify-center"
              >
                <div className="text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">🏢</div>
                <div className="font-semibold text-lg sm:text-2xl mb-2 sm:mb-3">Business Use</div>
                <div className="text-sm sm:text-lg opacity-90">For business growth, operations, and team collaboration</div>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-6 sm:mt-8"
            >
              <button
                onClick={handleGoBack}
                className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto px-4 py-2 rounded-lg hover:bg-gray-800/50 min-h-[44px] touch-manipulation"
              >
                ← Go Back
              </button>
            </motion.div>
          </div>
        )}

        {currentStep === 4 && (
          <PlanSelection
            onPlanSelected={handlePlanSelection}
            onBack={handleGoBack}
            onSkip={handleSkipSubscription}
            onPaymentInitiated={handlePaymentInitiated}
          />
        )}

        {/* Show onboarding completion step */}
        {currentStep === 5 && (
          <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
            <div className="max-w-6xl mx-auto w-full">
              <OnboardingComplete
                userGoals={userGoals}
                isBusiness={isBusiness || false}
                selectedGoal={selectedGoal || 'general'}
                selectedPlan={selectedPlan || 'FREE'}
                onComplete={handleOnboardingComplete}
              />
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
