'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, TrendingUp, Package, DollarSign, AlertTriangle, BarChart3, Target, Zap, Brain, Rocket, X, HelpCircle, Mail, Bell, Calendar, TrendingDown, Settings, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AIPalTemplate from '@/components/template/AIPalTemplate'
import SellerPalAvatar from '@/components/sellerpal/SellerPalAvatar'
import SellerPalChatModal from '@/components/sellerpal/SellerPalChatModal'
import AutomationCenter from '@/components/template/AutomationCenter'

export default function SellerPalPage() {
  const [showChat, setShowChat] = useState(false)
  const [showTutorial, setShowTutorial] = useState(true)
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  // SellerPal automation templates
  const automationTemplates = [
    {
      name: 'Weekly Profit Report',
      description: 'Automatically generate and send weekly profit summaries to track business performance',
      type: 'schedule' as const,
      frequency: 'Every Monday at 9:00 AM',
      action: 'Send email report with weekly revenue, costs, and profit analysis',
      category: 'Reporting',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-600'
    },
    {
      name: 'Low Stock Alert',
      description: 'Monitor inventory levels and alert when products are running low',
      type: 'trigger' as const,
      frequency: 'Real-time monitoring',
      action: 'Send push notification and email when stock drops below threshold',
      category: 'Inventory',
      icon: Package,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Expiry Date Reminder',
      description: 'Track product expiry dates from your Excel data and send alerts',
      type: 'monitor' as const,
      frequency: 'Daily at 8:00 AM',
      action: 'Check for products expiring within 7 days and send reminders',
      category: 'Inventory',
      icon: Calendar,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Competitor Price Alert',
      description: 'Monitor competitor pricing and alert when significant changes occur',
      type: 'monitor' as const,
      frequency: 'Every 6 hours',
      action: 'Track price changes and send alerts for competitive opportunities',
      category: 'Pricing',
      icon: TrendingDown,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Monthly Business Review',
      description: 'Generate comprehensive monthly business performance reports',
      type: 'schedule' as const,
      frequency: '1st of every month at 10:00 AM',
      action: 'Create detailed monthly report with insights and recommendations',
      category: 'Reporting',
      icon: BarChart3,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Customer Retention Alert',
      description: 'Identify customers at risk of churning and suggest retention strategies',
      type: 'monitor' as const,
      frequency: 'Daily analysis',
      action: 'Analyze customer behavior and send retention recommendations',
      category: 'Customer',
      icon: Heart,
      color: 'from-pink-500 to-red-600'
    }
  ]

  // Automation handlers
  const handleAutomationCreate = (automation: any) => {
    console.log('Creating automation:', automation)
    // In real app, this would save to database/API
  }

  const handleAutomationToggle = (id: string, isActive: boolean) => {
    console.log('Toggling automation:', id, isActive)
    // In real app, this would update database/API
  }

  const handleAutomationDelete = (id: string) => {
    console.log('Deleting automation:', id)
    // In real app, this would remove from database/API
  }

  const handleAutomationEdit = (automation: any) => {
    console.log('Editing automation:', automation)
    // In real app, this would open edit modal
  }

  // Tutorial steps for SellerPal
  const tutorialSteps = [
    {
      title: "Welcome to SellerPal! 🛒",
      description: "Your AI co-pilot for eCommerce success. Let me show you around!",
      position: "center",
      target: null
    },
    {
      title: "Quick Stats Dashboard",
      description: "Monitor your revenue, orders, inventory, and alerts at a glance.",
      position: "top",
      target: "stats-dashboard"
    },
    {
      title: "Platform Connections",
      description: "Connect your Amazon, Shopify, and Google Analytics accounts here.",
      position: "left",
      target: "platform-connections"
    },
    {
      title: "AI Insights",
      description: "Get personalized business recommendations and insights.",
      position: "right",
      target: "ai-insights"
    },
    {
      title: "Quick Actions",
      description: "Access analytics, inventory, reports, and alerts quickly.",
      position: "bottom",
      target: "quick-actions"
    },
    {
      title: "Automation Center",
      description: "Create AI-powered automations to work for you 24/7!",
      position: "center",
      target: null
    },
    {
      title: "Chat with SellerPal",
      description: "Click the chat button in the bottom-right for AI assistance!",
      position: "bottom-right",
      target: null
    }
  ]

  const handleTutorialComplete = () => {
    setShowTutorial(false)
    // Save tutorial completion to localStorage
    localStorage.setItem('sellerpal-tutorial-completed', 'true')
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
    const tutorialCompleted = localStorage.getItem('sellerpal-tutorial-completed')
    if (tutorialCompleted) {
      setShowTutorial(false)
    }
  }, [])

  // Custom hero content for SellerPal
  const heroContent = (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
        <img 
          src="/sellerpal/robotavatar.png" 
          alt="SellerPal Robot Avatar" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">
        Welcome to SellerPal! 🛒✨
      </h2>
      <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
        Your AI co-pilot for selling smarter. Connect your platforms and let me analyze your business, 
        predict trends, and automate your operations.
      </p>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-green-400">
          <Target className="w-5 h-5" />
          <span className="font-medium">Smart Inventory</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">Growth Analytics</span>
        </div>
        <div className="flex items-center gap-2 text-purple-400">
          <Zap className="w-5 h-5" />
          <span className="font-medium">AI Automation</span>
        </div>
      </div>
    </div>
  )

  // Custom main content for SellerPal
  const mainContent = (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div id="stats-dashboard" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Today's Revenue</p>
              <p className="text-2xl font-bold text-white">$0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Orders Today</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Low Stock Items</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Alerts</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Connection */}
      <div id="platform-connections" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-blue-400" />
          Connect Your Platforms
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-white">Amazon Seller Central</span>
            </div>
            <button className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm hover:bg-blue-500/30 transition-colors">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-white">Shopify Store</span>
            </div>
            <button className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm hover:bg-blue-500/30 transition-colors">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-white">Google Analytics</span>
            </div>
            <button className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 text-sm hover:bg-blue-500/30 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div id="quick-actions" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-white hover:bg-blue-500/30 transition-all duration-200">
            <div className="text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <span className="text-sm font-medium">View Analytics</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl text-white hover:bg-green-500/30 transition-all duration-200">
            <div className="text-center">
              <Package className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <span className="text-sm font-medium">Inventory</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-white hover:bg-purple-500/30 transition-all duration-200">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-sm font-medium">Sales Report</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl text-white hover:bg-orange-500/30 transition-all duration-200">
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <span className="text-sm font-medium">Alerts</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )

  // Custom sidebar content for SellerPal
  const sidebarContent = (
    <div className="space-y-6">
      <div id="ai-insights" className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          AI Insights
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Tip:</strong> Connect your first platform to start getting AI-powered insights about your business.
            </p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-300 text-sm">
              <strong>Ready:</strong> I'm here to help you optimize inventory, track competition, and grow your sales.
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
            <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">1</span>
            </div>
            <span className="text-sm">Connect your first platform (Amazon, Shopify, etc.)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">2</span>
            </div>
            <span className="text-sm">Set your business priorities and goals</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
              <span className="text-green-400 text-xs font-bold">3</span>
            </div>
            <span className="text-sm">Start receiving AI insights and recommendations</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Custom content for different tabs
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 mb-8 border border-white/10`}
            >
              {heroContent}
            </motion.div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                {mainContent}
              </motion.div>

              {/* Right Column - Sidebar */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                {sidebarContent}
              </motion.div>
            </div>
          </div>
        )
      
      case 'automation':
        return (
          <AutomationCenter
            appName="SellerPal"
            appIcon={ShoppingCart}
            appColor="from-blue-500 to-purple-600"
            automationTemplates={automationTemplates}
            onAutomationCreate={handleAutomationCreate}
            onAutomationToggle={handleAutomationToggle}
            onAutomationDelete={handleAutomationDelete}
            onAutomationEdit={handleAutomationEdit}
          />
        )
      
      case 'analytics':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
            <p className="text-gray-300">Connect your platforms to see detailed analytics and insights.</p>
          </motion.div>
        )
      
      case 'settings':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Settings className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Settings & Preferences</h3>
            <p className="text-gray-300">Configure your SellerPal preferences and automation rules.</p>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      <AIPalTemplate
        appName="SellerPal"
        appDescription="AI eCommerce Co-Pilot for business growth"
        appIcon={ShoppingCart}
        appAvatar="/sellerpal/robotavatar.png"
        appColor="from-blue-500 to-purple-600"
        appFeatures={[
          'Inventory management',
          'Sales analytics', 
          'Competitive insights',
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

      {/* SellerPal-specific chat components */}
      <SellerPalAvatar onOpenChat={() => setShowChat(true)} isChatOpen={showChat} />
      <SellerPalChatModal isOpen={showChat} onClose={() => setShowChat(false)} />

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
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/sellerpal/robotavatar.png" 
                    alt="SellerPal Robot Avatar" 
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
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
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
                          ? 'bg-blue-500' 
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
