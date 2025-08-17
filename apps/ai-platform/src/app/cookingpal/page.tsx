'use client'

import { useState, useEffect } from 'react'
import { ChefHat, TrendingUp, Utensils, DollarSign, AlertTriangle, BarChart3, Target, Zap, Brain, Rocket, X, HelpCircle, Clock, Heart, Calendar, TrendingDown, Settings, ChefHat as ChefHatIcon, Utensils as UtensilsIcon, Clock as ClockIcon, Heart as HeartIcon, Calendar as CalendarIcon, TrendingDown as TrendingDownIcon, BarChart3 as BarChart3Icon, Target as TargetIcon, Zap as ZapIcon, Brain as BrainIcon, Rocket as RocketIcon, X as XIcon, HelpCircle as HelpCircleIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AIPalTemplate from '@/components/template/AIPalTemplate'
import CookingPalAvatar from '@/components/cookingpal/CookingPalAvatar'
import CookingPalChatModal from '@/components/cookingpal/CookingPalChatModal'
import AutomationCenter from '@/components/template/AutomationCenter'

export default function CookingPalPage() {
  const [showChat, setShowChat] = useState(false)
  const [showTutorial, setShowTutorial] = useState(true)
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  // CookingPal automation templates
  const automationTemplates = [
    {
      name: 'Weekly Meal Planning',
      description: 'Automatically generate weekly meal plans based on your preferences and budget',
      type: 'schedule' as const,
      frequency: 'Every Sunday at 10:00 AM',
      action: 'Create weekly meal plan with recipes and grocery list',
      category: 'Meal Planning',
      icon: Calendar,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Grocery List Generation',
      description: 'Automatically create shopping lists from your meal plans',
      type: 'trigger' as const,
      frequency: 'After meal plan creation',
      action: 'Generate organized grocery list with estimated costs',
      category: 'Shopping',
      icon: Utensils,
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Budget Alert',
      description: 'Get notified when your grocery spending approaches budget limit',
      type: 'monitor' as const,
      frequency: 'Real-time monitoring',
      action: 'Send alert when spending reaches 80% of weekly budget',
      category: 'Budget',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Recipe Reminder',
      description: 'Get reminded of your favorite recipes and cooking tips',
      type: 'schedule' as const,
      frequency: 'Every Wednesday at 6:00 PM',
      action: 'Send recipe inspiration and cooking motivation',
      category: 'Inspiration',
      icon: Heart,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Waste Reduction Alert',
      description: 'Get notified about ingredients that will expire soon',
      type: 'monitor' as const,
      frequency: 'Daily at 8:00 AM',
      action: 'Suggest recipes to use expiring ingredients',
      category: 'Waste Reduction',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Quick Meal Suggestions',
      description: 'Get quick meal ideas when you have limited time',
      type: 'schedule' as const,
      frequency: 'Every weekday at 5:00 PM',
      action: 'Send 3 quick dinner ideas under 30 minutes',
      category: 'Quick Meals',
      icon: Clock,
      color: 'from-blue-500 to-green-600'
    }
  ]

  // Automation handlers
  const handleAutomationCreate = (automation: any) => {
    console.log('Creating CookingPal automation:', automation)
    // In real app, this would save to database/API
  }

  const handleAutomationToggle = (id: string, isActive: boolean) => {
    console.log('Toggling CookingPal automation:', id, isActive)
    // In real app, this would update database/API
  }

  const handleAutomationDelete = (id: string) => {
    console.log('Deleting CookingPal automation:', id)
    // In real app, this would remove from database/API
  }

  const handleAutomationEdit = (automation: any) => {
    console.log('Editing CookingPal automation:', automation)
    // In real app, this would open edit modal
  }

  // Tutorial steps for CookingPal
  const tutorialSteps = [
    {
      title: "Welcome to CookingPal! 🍳",
      description: "Your AI kitchen companion for smart meal planning and delicious recipes. Let me show you around!",
      position: "center",
      target: null
    },
    {
      title: "Quick Stats Dashboard",
      description: "Monitor your meal plans, grocery spending, and cooking progress at a glance.",
      position: "top",
      target: "stats-dashboard"
    },
    {
      title: "Ingredient Input",
      description: "Tell me what ingredients you have, and I'll find creative recipes for you.",
      position: "left",
      target: "ingredient-input"
    },
    {
      title: "AI Insights",
      description: "Get personalized cooking recommendations and budget-friendly meal suggestions.",
      position: "right",
      target: "ai-insights"
    },
    {
      title: "Quick Actions",
      description: "Access recipes, meal planning, grocery lists, and cooking tips quickly.",
      position: "bottom",
      target: "quick-actions"
    },
    {
      title: "Automation Center",
      description: "Create AI-powered automations to plan meals and manage your kitchen automatically!",
      position: "center",
      target: null
    },
    {
      title: "Chat with CookingPal",
      description: "Click the chat button in the bottom-right for AI cooking assistance!",
      position: "bottom-right",
      target: null
    }
  ]

  const handleTutorialComplete = () => {
    setShowTutorial(false)
    // Save tutorial completion to localStorage
    localStorage.setItem('cookingpal-tutorial-completed', 'true')
  }

  const handleNextStep = () => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1)
    } else {
      handleTutorialComplete()
    }
  }

  const handleSkipTutorial = () => {
    handleTutorialComplete()
  }

  useEffect(() => {
    // Check if tutorial was already completed
    const tutorialCompleted = localStorage.getItem('cookingpal-tutorial-completed')
    if (tutorialCompleted) {
      setShowTutorial(false)
    }
  }, [])

  // Custom hero content for CookingPal
  const heroContent = (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center overflow-hidden">
        <img 
          src="/cookingpal/robotavatar.png" 
          alt="CookingPal Robot Avatar" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">
        Welcome to CookingPal! 🍳✨
      </h2>
      <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
        Your AI kitchen companion for smart meal planning, budget-friendly cooking, and delicious recipes. 
        Let's turn your ingredients into amazing meals!
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-orange-400">
          <Target className="w-5 h-5" />
          <span className="font-medium">Smart Meal Planning</span>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">Budget-Aware Cooking</span>
        </div>
        <div className="flex items-center gap-2 text-purple-400">
          <Zap className="w-5 h-5" />
          <span className="font-medium">AI Recipe Generation</span>
        </div>
      </div>
    </div>
  )

  // Custom main content for CookingPal
  const mainContent = (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div id="stats-dashboard" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Utensils className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Recipes This Week</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Grocery Budget</p>
              <p className="text-2xl font-bold text-white">$0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Meal Plans</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Expiring Soon</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredient Input */}
      <div id="ingredient-input" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <ChefHat className="w-5 h-5 text-orange-400" />
          What's in Your Kitchen?
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Enter ingredients you have (e.g., chicken, rice, tomatoes)"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200">
              Find Recipes
            </button>
          </div>
          <p className="text-sm text-gray-400">
            💡 Tip: List your main ingredients and I'll suggest delicious recipes you can make!
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div id="quick-actions" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl text-white hover:bg-orange-500/30 transition-all duration-200">
            <div className="text-center">
              <ChefHat className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <span className="text-sm font-medium">Browse Recipes</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl text-white hover:bg-green-500/30 transition-all duration-200">
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <span className="text-sm font-medium">Meal Planning</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-white hover:bg-purple-500/30 transition-all duration-200">
            <div className="text-center">
              <Utensils className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-sm font-medium">Grocery List</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-xl text-white hover:bg-blue-500/30 transition-all duration-200">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <span className="text-sm font-medium">Quick Meals</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )

  // Custom sidebar content for CookingPal
  const sidebarContent = (
    <div className="space-y-6">
      <div id="ai-insights" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          AI Cooking Insights
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <p className="text-orange-300 text-sm">
              <strong>Tip:</strong> Connect with MoneyPal to get budget-aware meal suggestions based on your actual spending!
            </p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-300 text-sm">
              <strong>Ready:</strong> I'm here to help you plan meals, find recipes, and cook delicious food on any budget.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          Getting Started
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
              <span className="text-orange-400 text-xs font-bold">1</span>
            </div>
            <span className="text-sm">Enter ingredients you have in your kitchen</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">2</span>
            </div>
            <span className="text-sm">Get AI-generated recipe suggestions</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">3</span>
            </div>
            <span className="text-sm">Plan meals and generate grocery lists</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <AIPalTemplate
        appName="CookingPal"
        appDescription="AI Kitchen Companion for smart meal planning"
        appIcon={ChefHat}
        appAvatar="/cookingpal/robotavatar.png"
        appColor="from-orange-500 to-green-600"
        appFeatures={[
          'Ingredient-based recipe generation',
          'Smart meal planning', 
          'Budget-aware cooking',
          'AI automation'
        ]}
        heroContent={heroContent}
        mainContent={mainContent}
        sidebarContent={sidebarContent}
        showOnboarding={true}
        showYourPal={false} // Disable template's YourPal integration
        showAutomation={true} // Enable automation tab
        automationTemplates={automationTemplates}
        onAutomationCreate={handleAutomationCreate}
        onAutomationToggle={handleAutomationToggle}
        onAutomationDelete={handleAutomationDelete}
        onAutomationEdit={handleAutomationEdit}
        customActions={
          <button
            onClick={() => setShowTutorial(true)}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Tutorial
          </button>
        }
      />

      {/* CookingPal-specific chat components */}
      <CookingPalAvatar onOpenChat={() => setShowChat(true)} isChatOpen={showChat} />
      <CookingPalChatModal isOpen={showChat} onClose={() => setShowChat(false)} />

      {/* Tutorial Overlay */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/cookingpal/robotavatar.png" 
                    alt="CookingPal Robot Avatar" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tutorialSteps[currentTutorialStep].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {tutorialSteps[currentTutorialStep].description}
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleSkipTutorial}
                    className="px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-colors"
                  >
                    Skip Tutorial
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                  >
                    {currentTutorialStep === tutorialSteps.length - 1 ? 'Get Started!' : 'Next'}
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-2 mt-6">
                  {tutorialSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentTutorialStep 
                          ? 'bg-orange-500' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
