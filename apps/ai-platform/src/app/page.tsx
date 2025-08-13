"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import GeneralBot from '@/components/robots/GeneralBot'
import FinanceBot from '@/components/robots/FinanceBot'
import FitnessBot from '@/components/robots/FitnessBot'
import BusinessBot from '@/components/robots/BusinessBot'
import AuthForm from '@/components/AuthForm'
import EmailVerification from '@/components/EmailVerification'
import OnboardingComplete from '@/components/OnboardingComplete'
import Dashboard from '@/components/Dashboard'
import { useAuth } from '@/contexts/AuthContext'
import { Bot, Sparkles, ArrowRight, Heart, Zap, Target, CheckCircle, Star, Settings, User, LogOut } from 'lucide-react'

export default function HomePage() {
  const { user, loading, signOut, isEmailVerified, checkEmailVerification, checkEmailVerificationEnhanced, retryInitialization } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const [userGoals, setUserGoals] = useState<string[]>([])
  const [isBusiness, setIsBusiness] = useState<boolean | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [verificationEmail, setVerificationEmail] = useState('')
  const [onboardingCompleted, setOnboardingCompleted] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Add timeout to prevent loading from getting stuck
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        console.log('⚠️ Loading timeout reached, forcing render')
        setLoadingTimeout(true)
      }, 5000) // 5 second timeout
      
      return () => clearTimeout(timer)
    } else {
      setLoadingTimeout(false)
    }
  }, [loading])

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
    console.log('User changed:', user)
    if (user) {
      console.log('Starting onboarding for user:', user.email)
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
      console.log('🔍 Main Page: User exists but email not verified, checking status...')
      checkEmailVerification()
    }
  }, [user, isEmailVerified, checkEmailVerification])

  // Auto-check email verification when on verification page
  useEffect(() => {
    if (showEmailVerification && user && !isEmailVerified) {
      console.log('🔍 Main Page: Setting up auto-check for email verification...')
      
      const interval = setInterval(async () => {
        try {
          const verified = await checkEmailVerificationEnhanced()
          if (verified) {
            console.log('✅ Main Page: Auto-check detected email verification!')
            handleEmailVerified()
          }
        } catch (error) {
          console.error('❌ Main Page: Auto-check error:', error)
        }
      }, 3000) // Check every 3 seconds

      return () => clearInterval(interval)
    }
  }, [showEmailVerification, user, isEmailVerified, checkEmailVerificationEnhanced])

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

  const handleAuthSuccess = (userData: any) => {
    console.log('🎉 Main Page: handleAuthSuccess called with:', userData)
    console.log('🎯 Main Page: Current step before reset:', currentStep)
    
    // Check if email verification is needed
    if (userData && !userData.email_confirmed_at) {
      console.log('📧 Main Page: Email verification needed, showing verification page')
      setVerificationEmail(userData.email)
      setShowEmailVerification(true)
      return
    }
    
    // For both sign-up and sign-in, start the onboarding flow
    // The AuthContext will handle the user state, we just need to start onboarding
    setCurrentStep(0)
    setUserGoals([])
    setIsBusiness(null)
    setSelectedGoal(null)
    setSelectedPlan(null)
    
    console.log('🎯 Main Page: Step reset to 0, onboarding should start')
    console.log('🎯 Main Page: User state should update via AuthContext')
  }

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setCurrentStep(0)
      setUserGoals([])
      setIsBusiness(null)
      setSelectedGoal(null)
      setSelectedPlan(null)
      setOnboardingCompleted(false)
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
    // Move to step 2 (use case selection)
    setCurrentStep(2)
  }

  const handleUseCaseSelection = (isBusinessUser: boolean) => {
    setIsBusiness(isBusinessUser)
    // Move to step 3 (specialized bot)
    setCurrentStep(3)
  }

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan)
    // Move to onboarding completion step
    setCurrentStep(4)
  }

  const handleOnboardingComplete = () => {
    console.log('✅ Main Page: Onboarding completed, showing dashboard')
    setOnboardingCompleted(true)
  }

  const handleEmailVerified = async () => {
    console.log('✅ Main Page: Email verified, starting onboarding')
    
    // Double-check verification status using enhanced method
    try {
      const verified = await checkEmailVerificationEnhanced()
      if (verified) {
        console.log('✅ Main Page: Email verification confirmed, starting onboarding')
        setShowEmailVerification(false)
        setVerificationEmail('')
        setCurrentStep(0)
        setUserGoals([])
        setIsBusiness(null)
        setSelectedGoal(null)
        setSelectedPlan(null)
      } else {
        console.log('❌ Main Page: Email verification check failed, staying on verification page')
        // Stay on verification page if check fails
      }
    } catch (error) {
      console.error('❌ Main Page: Error checking email verification:', error)
      // Stay on verification page if there's an error
    }
  }

  const handleBackToSignIn = () => {
    console.log('🔄 Main Page: Going back to sign in')
    setShowEmailVerification(false)
    setVerificationEmail('')
    setAuthMode('signin')
  }

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
            className="p-8 bg-gradient-to-br from-robot-blue to-robot-cyan rounded-xl text-white text-center hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-white/20"
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

  // Show error state if chunk loading failed
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🚨</div>
          <h1 className="text-2xl font-bold text-white mb-4">Loading Error</h1>
          <p className="text-gray-300 mb-6">
            There was an issue loading the application. This usually happens when the development server has trouble loading JavaScript chunks.
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={() => window.location.reload()} 
              className="w-full px-6 py-3 bg-robot-blue text-white rounded-lg hover:bg-robot-blue/80 transition-colors font-semibold"
            >
              🔄 Refresh Page
            </button>
            
            <button 
              onClick={async () => {
                setError(null)
                try {
                  await retryInitialization()
                } catch (err) {
                  console.error('Retry failed:', err)
                }
              }} 
              className="w-full px-6 py-3 bg-robot-green text-white rounded-lg hover:bg-robot-green/80 transition-colors"
            >
              🔄 Retry Initialization
            </button>
            
            <button 
              onClick={() => setError(null)} 
              className="w-full px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Try Again
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="text-robot-orange cursor-pointer text-sm">Error Details</summary>
              <pre className="mt-2 p-3 bg-gray-800 rounded text-xs text-gray-300 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    )
  }

  // Show loading state while auth is initializing
  if (loading && !loadingTimeout) {
    console.log('🔄 Main Page: Showing loading state, loading:', loading, 'timeout:', loadingTimeout)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl"
        >
          🤖
        </motion.div>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">Initializing YourPals...</p>
          <p className="text-gray-500 text-xs mt-2">This may take a few seconds</p>
        </div>
      </div>
    )
  }

  // If loading timeout reached, show a fallback
  if (loadingTimeout) {
    console.log('⚠️ Main Page: Loading timeout reached, forcing render')
    console.log('⚠️ Main Page: User state:', user)
    console.log('⚠️ Main Page: Loading state:', loading)
  }

  // Show authentication form if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl"
              >
                🤖
              </motion.div>
              <h1 className="text-4xl sm:text-6xl font-bold robot-gradient-text">
                YourPals
              </h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="text-4xl"
              >
                🤖
              </motion.div>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your personal AI team with cute robot personalities, ready to help you achieve your goals!
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-robot-orange/20 border border-robot-orange/30 rounded-full text-robot-orange text-sm"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered • Secure • Fun
            </motion.div>
          </motion.div>

          {/* Authentication Form */}
          {showEmailVerification ? (
            <EmailVerification
              email={verificationEmail}
              onVerified={handleEmailVerified}
              onBackToSignIn={handleBackToSignIn}
            />
          ) : (
            <AuthForm
              mode={authMode}
              onAuthSuccess={handleAuthSuccess}
              onSwitchMode={handleSwitchAuthMode}
            />
          )}
        </div>
      </div>
    )
  }

  // Show dashboard if onboarding is completed
  if (onboardingCompleted) {
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
  if (currentStep === 4) {
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header with User Info and Sign Out */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl"
              >
                🤖
              </motion.div>
              <h1 className="text-4xl sm:text-6xl font-bold robot-gradient-text">
                YourPals
              </h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="text-4xl"
              >
                🤖
              </motion.div>
            </div>
            
            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🤖</span>
                <span className="font-medium">{user.user_metadata?.full_name || user.email}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </motion.button>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your personal AI team with cute robot personalities, ready to help you achieve your goals!
          </p>
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-robot-orange/20 border border-robot-orange/30 rounded-full text-robot-orange text-sm"
          >
            <Sparkles className="w-4 h-4" />
            AI-Powered • Secure • Fun
          </motion.div>
        </motion.div>

        {/* Onboarding Flow */}
        <div className="max-w-4xl mx-auto">
          {renderCurrentStep()}
          {renderGoalSelection()}
          {renderUseCaseSelection()}
          {renderSpecializedBot()}
          {renderSubscriptionPlans()}
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>Step {currentStep + 1} of 5</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index <= currentStep ? 'bg-robot-blue' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Debug Info - Remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 text-xs text-gray-400">
              <div>Debug: Current Step: {currentStep}</div>
              <div>Selected Goal: {selectedGoal || 'None'}</div>
              <div>Is Business: {isBusiness === null ? 'Not set' : isBusiness ? 'Yes' : 'No'}</div>
              <div>Selected Plan: {selectedPlan || 'None'}</div>
              <div>User ID: {user.id}</div>
              <div>Email Verified: {isEmailVerified ? 'Yes' : 'No'}</div>
              <div>Onboarding Completed: {onboardingCompleted ? 'Yes' : 'No'}</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
