"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  User, 
  Settings, 
  LogOut, 
  Plus, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Calendar,
  Bell,
  Search,
  Star,
  Crown,
  Check,
  ChevronRight,
  Zap,
  Heart,
  Brain,
  Rocket,
  Clock,
  DollarSign,
  ShoppingCart,
  ChefHat
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import FinanceBot from '@/components/robots/FinanceBot'
import FitnessBot from '@/components/robots/FitnessBot'
import BusinessBot from '@/components/robots/BusinessBot'
import GeneralBot from '@/components/robots/GeneralBot'
import YourPalAvatar from '@/components/YourPalAvatar'
import YourPalChatModal from '@/components/YourPalChatModal'

interface DashboardProps {
  userGoals: string[]
  isBusiness: boolean
  selectedGoal: string
  selectedPlan: string
  onSignOut: () => void
}

export default function Dashboard({ 
  userGoals, 
  isBusiness, 
  selectedGoal, 
  selectedPlan, 
  onSignOut 
}: DashboardProps) {
  const authData = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const [showYourPalChat, setShowYourPalChat] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const aiApps = [
    { 
      id: 'moneypal', 
      name: 'MoneyPal', 
      description: 'AI financial assistant for smart money management',
      icon: DollarSign,
      avatar: '/moneypal/robotavatar.PNG',
      features: ['Budget tracking', 'Expense analysis', 'Financial insights', 'AI automation'],
      lastUsed: '2 hours ago',
      usage: 'Frequently used',
      status: 'active',
      href: '/moneypal'
    },
    {
      id: 'sellerpal',
      name: 'SellerPal',
      description: 'AI eCommerce co-pilot for business growth',
      icon: ShoppingCart,
      avatar: '/sellerpal/robotavatar.png',
      features: ['Inventory management', 'Sales analytics', 'Competitive insights', 'AI automation'],
      lastUsed: 'Never used',
      usage: 'New',
      status: 'active',
      href: '/sellerpal'
    },
    {
      id: 'cookingpal',
      name: 'CookingPal',
      description: 'AI kitchen companion for smart meal planning',
      icon: ChefHat,
      avatar: '/cookingpal/robotavatar.png',
      features: ['Recipe generation', 'Meal planning', 'Budget-aware cooking', 'AI automation'],
      lastUsed: 'Never used',
      usage: 'New',
      status: 'active',
      href: '/cookingpal'
    }
  ]

  const getBotIcon = (goal: string) => {
    switch (goal) {
      case 'finance': return '💰'
      case 'fitness': return '💪'
      case 'productivity': return '⚡'
      case 'business': return '🏢'
      default: return '🤖'
    }
  }

  const getBotName = (goal: string) => {
    switch (goal) {
      case 'finance': return 'FinanceBot'
      case 'fitness': return 'FitnessBot'
      case 'productivity': return 'ProductivityBot'
      case 'business': return 'BusinessBot'
      default: return 'GeneralBot'
    }
  }

  const getPersonalizedWelcome = () => {
    if (isBusiness) {
      return `Welcome back, ${user?.user_metadata?.full_name || 'Business User'}! Your AI team is ready to help grow your business.`
    }
    return `Welcome back, ${user?.user_metadata?.full_name || 'Friend'}! Your AI pals are excited to help you achieve your goals.`
  }

  const getRelevantAIPals = () => {
    const allPals = [
      { id: 'general', name: 'General Pal', icon: '🤖', description: 'Your AI coordinator', color: 'from-robot-purple to-robot-pink' },
      { id: 'finance', name: 'Money Pal', icon: '💰', description: 'AI Finance Assistant', color: 'from-robot-green to-robot-blue' },
      { id: 'fitness', name: 'Fitness Pal', icon: '💪', description: 'AI Health & Fitness Coach', color: 'from-robot-orange to-robot-red' },
      { id: 'productivity', name: 'Productivity Pal', icon: '⚡', description: 'AI Productivity Expert', color: 'from-robot-purple to-robot-pink' },
      { id: 'business', name: 'Business Pal', icon: '🏢', description: 'AI Business Strategist', color: 'from-robot-blue to-robot-cyan' }
    ]

    // Show the selected goal first, then other relevant ones
    const relevantPals = allPals.filter(pal => pal.id === selectedGoal || pal.id === 'general')
    const otherPals = allPals.filter(pal => pal.id !== selectedGoal && pal.id !== 'general')
    
    return [...relevantPals, ...otherPals]
  }

  const getPlanFeatures = () => {
    switch (selectedPlan) {
      case 'FREE':
        return ['Access to General Pal', 'Basic AI assistance', 'Limited queries per month']
      case 'STARTER':
        return ['Access to 2 AI Pals', 'Unlimited queries', 'Priority support', 'Custom AI training']
      case 'PRO':
        return ['Access to all AI Pals', 'Advanced AI customization', 'API access', 'Dedicated support']
      default:
        return ['Access to General Pal', 'Basic AI assistance']
    }
  }

  const handleLaunchApp = (appId: string) => {
    switch (appId) {
      case 'moneypal':
        router.push('/moneypal')
        break
          case 'sellerpal':
      router.push('/sellerpal')
      break
    case 'cookingpal':
      router.push('/cookingpal')
      break
      case 'fitnesspal':
        // TODO: Implement when FitnessPal is ready
        console.log('FitnessPal coming soon!')
        break
      case 'productivitypal':
        // TODO: Implement when ProductivityPal is ready
        console.log('ProductivityPal coming soon!')
        break
      case 'businesspal':
        // TODO: Implement when BusinessPal is ready
        console.log('BusinessPal coming soon!')
        break
      default:
        console.log('Unknown app:', appId)
    }
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Enhanced Welcome Section - Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block relative overflow-hidden bg-gradient-to-br from-robot-blue/10 via-robot-purple/10 to-robot-pink/10 rounded-3xl p-8 border border-robot-blue/20 shadow-2xl shadow-robot-blue/10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-robot-blue to-robot-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-robot-purple to-robot-pink rounded-full blur-3xl"></div>
        </div>

        {/* AI Mode Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8 flex justify-center"
        >
          <div className="relative inline-block">
            <motion.img 
              src="/moneypal/robotavatar.PNG" 
              alt="AI Mode Active" 
              className="h-20 w-20 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-robot-blue rounded-2xl"
            />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            textShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 20px rgba(59, 130, 246, 0.8)",
              "0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-robot-blue font-mono text-sm tracking-widest mb-4 text-center"
        >
          AI MODE: OPERATIONAL
        </motion.div>
        
        <div className="text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {getPersonalizedWelcome()}
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            You're all set up with your personalized AI team. Here's what's available to you:
          </motion.p>
        </div>
      </motion.div>

      {/* Mobile Welcome Section - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:hidden relative overflow-hidden bg-gradient-to-br from-robot-purple/20 via-robot-pink/20 to-robot-orange/20 rounded-2xl p-6 border border-robot-purple/30 shadow-lg mb-8"
      >
        <div className="text-center relative z-10">
          <motion.h2 
            className="text-lg font-semibold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            You're all set up with your personalized AI team. Here's what's available to you:
          </motion.h2>
        </div>
      </motion.div>

      {/* Enhanced AI Apps Grid */}
      <div>
        <motion.h3 
          className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-6 h-6 text-robot-blue" />
          Your AI Applications
        </motion.h3>
        {/* Desktop AI Apps Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                app.status === 'active' 
                  ? 'border-robot-green/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl shadow-robot-green/20 hover:shadow-2xl hover:shadow-robot-green/30' 
                  : 'border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30'
              }`}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Hover Effect Overlay */}
              {app.status === 'active' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-robot-green/5 to-robot-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredApp === app.id ? 1 : 0 }}
                />
              )}

              <div className="relative z-10 p-6">
                {/* App Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <motion.img
                      src={app.avatar}
                      alt={`${app.name} Avatar`}
                      className="w-16 h-16 rounded-xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    {app.status === 'active' && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-robot-green rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                </div>
                <div className="flex-1">
                    <h5 className="text-xl font-bold text-white mb-2">{app.name}</h5>
                    <p className="text-gray-300 mb-3">{app.description}</p>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.status === 'active' 
                          ? 'bg-robot-green/20 text-robot-green border border-robot-green/30' 
                          : 'bg-gray-600/50 text-gray-400 border border-gray-600/50'
                      }`}>
                        {app.status === 'active' ? 'Active' : 'Coming Soon'}
                      </span>
                      {app.status === 'active' && (
                        <span className="text-robot-blue text-sm font-medium flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {app.usage} Usage
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* App Features */}
                {app.status === 'active' && (
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h6 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h6>
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-robot-green rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Action Button */}
                {app.status === 'active' ? (
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLaunchApp(app.id)}
                    className="w-full group/btn relative overflow-hidden py-4 px-6 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-robot-green/25"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Launch {app.name}
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </span>
                    {/* Button Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-robot-blue to-robot-green opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                ) : (
                  <div className="w-full py-4 px-6 bg-gray-700/50 text-gray-400 rounded-xl font-semibold border border-gray-600/50 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile AI Apps Section - Mobile Only */}
        <div className="md:hidden">
          
          {/* Mobile AI Apps - Clean Card Design */}
          <div className="space-y-4 pb-8">
            {aiApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  app.status === 'active' 
                    ? 'border-robot-green/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-lg shadow-robot-green/20' 
                    : 'border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/30'
                }`}
              >
                <div className="p-5">
                  {/* App Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <motion.img
                        src={app.avatar}
                        alt={`${app.name} Avatar`}
                        className="w-16 h-16 rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      {app.status === 'active' && (
                        <motion.div
                          className="absolute -top-2 -right-2 w-6 h-6 bg-robot-green rounded-full flex items-center justify-center shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-white mb-2">{app.name}</h5>
                      <p className="text-gray-300 text-base mb-3">{app.description}</p>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          app.status === 'active' 
                            ? 'bg-robot-green/20 text-robot-green border border-robot-green/30' 
                            : 'bg-gray-600/50 text-gray-400 border border-gray-600/50'
                        }`}>
                          {app.status === 'active' ? 'Active' : 'Coming Soon'}
                        </span>
                        {app.status === 'active' && (
                          <span className="text-robot-blue text-sm font-medium flex items-center gap-1">
                            <Zap className="w-4 h-4" />
                            {app.usage} Usage
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* App Features - Clean List */}
                  {app.status === 'active' && (
                    <motion.div
                      className="mb-5"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <h6 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h6>
                      <div className="grid grid-cols-2 gap-2">
                        {app.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-robot-green rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Action Button - Clean Design */}
                  {app.status === 'active' ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleLaunchApp(app.id)}
                      className="w-full group/btn relative overflow-hidden py-4 px-6 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-robot-green/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Launch {app.name}
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </motion.button>
                  ) : (
                    <div className="w-full py-4 px-6 bg-gray-700/50 text-gray-400 rounded-xl font-semibold border border-gray-600/50 flex items-center justify-center gap-2 text-base">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions - Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden md:block bg-gradient-to-br from-robot-purple/10 via-robot-pink/10 to-robot-orange/10 rounded-2xl p-8 border border-robot-purple/20 shadow-xl shadow-robot-purple/10"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Zap className="w-6 h-6 text-robot-purple" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden p-6 bg-gradient-to-br from-robot-blue/20 to-robot-blue/10 rounded-xl border border-robot-blue/30 text-white hover:bg-robot-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-robot-blue/20"
          >
            <div className="relative z-10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <div className="font-semibold text-lg">Settings</div>
              <div className="text-sm text-gray-300 mt-1">Customize your experience</div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-robot-blue/20 to-robot-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden p-6 bg-gradient-to-br from-robot-green/20 to-robot-green/10 rounded-xl border border-robot-green/30 text-white hover:bg-robot-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-robot-green/20"
          >
            <div className="relative z-10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
              <div className="font-semibold text-lg">Analytics</div>
              <div className="text-sm text-gray-300 mt-1">View your progress</div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-robot-green/20 to-robot-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden p-6 bg-gradient-to-br from-robot-orange/20 to-robot-orange/10 rounded-xl border border-robot-orange/30 text-white hover:bg-robot-orange/30 transition-all duration-300 hover:shadow-lg hover:shadow-robot-orange/20"
          >
            <div className="relative z-10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🔔</div>
              <div className="font-semibold text-lg">Notifications</div>
              <div className="text-sm text-gray-300 mt-1">Stay updated</div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-robot-orange/20 to-robot-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </div>
      </motion.div>



      {/* Enhanced Current Plan - Desktop */}
      <motion.div 
        className="hidden md:block bg-gradient-to-br from-robot-blue/10 via-robot-purple/10 to-robot-cyan/10 rounded-2xl p-8 border border-robot-blue/20 shadow-xl shadow-robot-blue/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Crown className="w-6 h-6 text-robot-blue" />
          Your Current Plan: {selectedPlan}
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-robot-green" />
              Plan Features
            </h4>
            <ul className="space-y-3">
              {getPlanFeatures().map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-robot-green rounded-full"></div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-robot-purple" />
              Your Goals
            </h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <span className="text-gray-300 font-medium">Primary Goal:</span>
                <span className="text-white font-semibold capitalize">{selectedGoal}</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <span className="text-gray-300 font-medium">Use Case:</span>
                <span className="text-white font-semibold">{isBusiness ? 'Business' : 'Personal'}</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <span className="text-gray-300 font-medium">Focus Areas:</span>
                <span className="text-white font-semibold">{userGoals.join(', ')}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>


    </div>
  )

  const renderAIApps = () => (
    <div className="space-y-6">
      {/* Desktop AI Apps Header */}
      <motion.h3 
        className="hidden md:flex text-2xl font-bold text-white mb-6 items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="w-6 h-6 text-robot-blue" />
        AI Applications
      </motion.h3>

      {/* Mobile AI Apps Header */}
      <motion.h3 
        className="md:hidden text-xl font-bold text-white mb-4 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="w-5 h-5 text-robot-blue" />
        AI Apps
      </motion.h3>
      
      {/* Enhanced Search Bar - Desktop */}
      <motion.div 
        className="hidden md:block relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search AI applications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all duration-200"
        />
      </motion.div>

      {/* Mobile Search Bar - Mobile Only */}
      <motion.div 
        className="md:hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search apps..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all duration-200 text-sm"
        />
            </motion.div>

      {/* Desktop Apps List - Desktop Only */}
      <div className="hidden md:block space-y-4">
        {aiApps
          .filter(app => 
            app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                app.status === 'active' 
                  ? 'border-robot-green/30 bg-gray-800/50 shadow-lg shadow-robot-green/10 hover:shadow-xl hover:shadow-robot-green/20' 
                  : 'border-gray-700/30 bg-gray-800/30'
              }`}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Hover Effect Overlay */}
              {app.status === 'active' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-robot-green/5 to-robot-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredApp === app.id ? 1 : 0 }}
                />
              )}

              <div className="relative z-10 p-5">
                <div className="flex items-center gap-5">
                  {/* Pal Avatar */}
                  <div className="relative flex-shrink-0">
                    <motion.img
                      src={app.avatar}
                      alt={`${app.name} Avatar`}
                      className="w-16 h-16 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                    {app.status === 'active' && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-robot-green rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* App Info - Compact */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-white truncate">{app.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        app.status === 'active' 
                          ? 'bg-robot-green/20 text-robot-green' 
                          : 'bg-gray-600/50 text-gray-400'
                      }`}>
                        {app.status === 'active' ? 'Active' : 'Soon'}
                      </span>
                    </div>
                    
                    {/* Full Description for Desktop */}
                    <p className="text-gray-300 text-base mb-3 line-clamp-2">{app.description}</p>
                    
                    {/* Compact Details Row */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      {app.status === 'active' && (
                        <>
                          <span className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-robot-purple" />
                            {app.usage}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            {app.lastUsed}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Launch Button */}
                  <div className="flex-shrink-0">
                    {app.status === 'active' ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLaunchApp(app.id)}
                        className="px-6 py-3 bg-gradient-to-r from-robot-purple to-robot-pink text-white font-medium rounded-xl hover:from-robot-purple/90 hover:to-robot-pink/90 transition-all duration-300 shadow-lg"
                      >
                        Launch
                      </motion.button>
                    ) : (
                      <div className="px-6 py-3 bg-gray-700/50 text-gray-400 rounded-xl font-medium border border-gray-600/50">
                        Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Mobile AI Apps List - Mobile Only */}
      <div className="md:hidden space-y-3 pb-8">
        {aiApps
          .filter(app => 
            app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                app.status === 'active' 
                  ? 'border-robot-green/30 bg-gray-800/50 shadow-lg shadow-robot-green/10' 
                  : 'border-gray-700/30 bg-gray-800/30'
              }`}
            >
              <div className="relative z-10 p-4">
                <div className="flex items-center gap-4">
                  {/* Pal Avatar */}
                  <div className="relative flex-shrink-0">
                    <motion.img
                      src={app.avatar}
                      alt={`${app.name} Avatar`}
                      className="w-14 h-14 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                    {app.status === 'active' && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-5 h-5 bg-robot-green rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* App Info - Compact */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white truncate">{app.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        app.status === 'active' 
                          ? 'bg-robot-green/20 text-robot-green' 
                          : 'bg-gray-600/50 text-gray-400'
                      }`}>
                        {app.status === 'active' ? 'Active' : 'Soon'}
                      </span>
                    </div>
                    
                    {/* Concise Bullet Points */}
                    <div className="mb-2">
                      <div className="flex items-center gap-3 text-xs text-gray-300">
                        <span className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-robot-purple rounded-full"></div>
                          {app.name === 'MoneyPal' ? 'Finance' : 
                           app.name === 'SellerPal' ? 'eCommerce' : 
                           app.name === 'CookingPal' ? 'Recipes' : 'AI'}
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-robot-pink rounded-full"></div>
                          {app.name === 'MoneyPal' ? 'Budgets' : 
                           app.name === 'SellerPal' ? 'Analytics' : 
                           app.name === 'CookingPal' ? 'Planning' : 'Assistant'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Compact Details Row */}
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      {app.status === 'active' && (
                        <>
                          <span className="flex items-center gap-1">
                            <Zap className="w-3 h-3 text-robot-purple" />
                            {app.usage}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gray-500" />
                            {app.lastUsed}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Launch Button */}
                  <div className="flex-shrink-0">
                    {app.status === 'active' ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLaunchApp(app.id)}
                        className="px-4 py-2.5 bg-gradient-to-r from-robot-purple to-robot-pink text-white font-medium rounded-xl hover:from-robot-purple/90 hover:to-robot-pink/90 transition-all duration-300 shadow-lg"
                      >
                        Launch
                      </motion.button>
                    ) : (
                      <div className="px-4 py-2.5 bg-gray-700/50 text-gray-400 rounded-xl font-medium border border-gray-600/50">
                        Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Desktop Settings Header */}
      <motion.h3 
        className="hidden md:flex text-2xl font-bold text-white mb-6 items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Settings className="w-6 h-6 text-robot-blue" />
        Settings & Preferences
      </motion.h3>

      {/* Mobile Settings Header */}
      <motion.h3 
        className="md:hidden text-xl font-bold text-white mb-4 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Settings className="w-5 h-5 text-robot-blue" />
        Settings
      </motion.h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Profile Settings */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-robot-blue" />
            Profile Settings
          </h4>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name</label>
              <input
                type="text"
                defaultValue={user?.user_metadata?.full_name || ''}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-xl text-gray-400 cursor-not-allowed"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-robot-blue/25 transition-all duration-200"
            >
              Update Profile
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Preferences */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Settings className="w-6 h-6 text-robot-purple" />
            Preferences
          </h4>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Primary Goal</label>
              <div className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white font-medium">
                {selectedGoal.charAt(0).toUpperCase() + selectedGoal.slice(1)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Use Case</label>
              <div className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white font-medium">
                {isBusiness ? 'Business' : 'Personal'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">Plan</label>
              <div className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white font-medium">
                {selectedPlan}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Settings - Mobile Only */}
      <div className="md:hidden space-y-4 pb-8">
        {/* Mobile Profile Settings */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-robot-blue" />
            Profile
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={user?.user_metadata?.full_name || ''}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-500/50 rounded-lg text-gray-400 text-sm cursor-not-allowed"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-robot-blue/25 transition-all duration-200"
            >
              Update Profile
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Preferences */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-700/50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-robot-purple" />
            Your Goals
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Primary Goal</label>
              <div className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm font-medium">
                {selectedGoal.charAt(0).toUpperCase() + selectedGoal.slice(1)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Use Case</label>
              <div className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white text-sm font-medium">
                {isBusiness ? 'Business' : 'Personal'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Plan Features */}
        <motion.div 
          className="bg-gradient-to-br from-robot-blue/20 via-robot-purple/20 to-robot-cyan/20 rounded-xl p-6 border border-robot-blue/30 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-robot-blue" />
            Plan Features
          </h4>
          <div className="space-y-3">
            <ul className="space-y-2">
              {getPlanFeatures().map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-robot-green rounded-full"></div>
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            {/* Upgrade CTA for Free Users */}
            {selectedPlan === 'FREE' && (
              <motion.div 
                className="mt-4 p-4 bg-gradient-to-r from-robot-orange/20 to-robot-pink/20 border border-robot-orange/30 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-center">
                  <div className="text-robot-orange text-lg mb-2">🚀</div>
                  <h5 className="text-white font-semibold mb-2">Unlock Your Full Potential</h5>
                  <p className="text-white text-sm mb-3">Upgrade to PRO to access all AI pals and advanced features</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-robot-orange to-robot-pink text-white rounded-lg font-semibold text-sm"
                  >
                    Upgrade Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'apps', label: 'AI Apps', icon: Sparkles },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  // Mobile-optimized tabs with better mobile labels
  const mobileTabs = [
    { id: 'overview', label: 'Home', icon: Target, shortLabel: 'Home' },
    { id: 'apps', label: 'Apps', icon: Sparkles, shortLabel: 'Apps' },
    { id: 'settings', label: 'Settings', icon: Settings, shortLabel: 'Settings' }
  ]

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Enhanced Header - Desktop Only */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block sticky top-0 z-50 mb-8 p-8 bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-gray-900/90 backdrop-blur-xl border-b border-robot-blue/20 rounded-b-3xl shadow-2xl shadow-robot-blue/10"
      >
        {/* AI Mode Status */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <motion.img 
              src="/moneypal/robotavatar.PNG" 
              alt="AI Mode Active" 
              className="h-10 w-10 rounded-xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border border-robot-blue rounded-xl"
            />
          </div>
          <motion.div 
            className="text-robot-blue font-mono text-sm tracking-widest"
            animate={{ 
              textShadow: [
                "0 0 0 rgba(59, 130, 246, 0)",
                "0 0 10px rgba(59, 130, 246, 0.6)",
                "0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AI MODE: OPERATIONAL
          </motion.div>
        </div>

        {/* User Info and Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <motion.h1 
              className="text-3xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {user?.user_metadata?.full_name || 'User'}
            </motion.h1>
            
            {/* Enhanced Navigation Tabs */}
            <div className="flex gap-3">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-robot-purple to-robot-pink text-white shadow-lg shadow-robot-purple/25' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 15px rgba(59, 130, 246, 0.8)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ],
                opacity: 1,
                scale: 1
              }}
              transition={{ 
                textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.5 },
                scale: { duration: 0.6, delay: 0.5 }
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              className="px-6 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold text-sm shadow-lg shadow-robot-blue/25"
            >
              AI ASSISTANT READY
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignOut}
              className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl font-semibold text-sm hover:from-gray-700 hover:to-gray-600 transition-all duration-200 flex items-center gap-3 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <LogOut className="w-4 h-4" />
              Exit AI Mode
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Header - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:hidden sticky top-0 z-50 mb-6 p-6 bg-gray-900/95 backdrop-blur-xl"
      >
        {/* User Info and Plan Status Row */}
        <div className="flex items-center justify-between mb-4">
          <motion.h1 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {user?.user_metadata?.full_name || 'Friend'}
          </motion.h1>
          
          {/* Plan Status Badge */}
          <motion.div 
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-robot-purple/20 to-robot-pink/20 border border-robot-purple/30 rounded-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Crown className="w-4 h-4 text-robot-purple" />
            <span className="text-robot-purple text-sm font-medium">{selectedPlan}</span>
          </motion.div>
        </div>
        
        {/* AI Mode with Cute Robot */}
        <motion.div 
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Floating Robot Avatar */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative"
          >
            <motion.img 
              src="/moneypal/robotavatar.PNG" 
              alt="AI Mode Active" 
              className="w-8 h-8 rounded-xl shadow-lg"
            />
            {/* Glowing Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-robot-blue rounded-xl"
            />
          </motion.div>
          
          {/* AI Mode Text */}
          <div className="text-center">
            <motion.div 
              className="text-robot-blue font-mono text-sm tracking-widest mb-1"
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 8px rgba(59, 130, 246, 0.6)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              AI MODE: OPERATIONAL
            </motion.div>
            
            {/* Upgrade Prompt for Free Users */}
            {selectedPlan === 'FREE' && (
              <motion.div 
                className="text-xs text-robot-orange"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                ✨ Upgrade to unlock all AI pals!
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 md:pb-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'apps' && renderAIApps()}
        {activeTab === 'settings' && renderSettings()}
      </main>

      {/* YourPal AI Manager */}
      <YourPalAvatar onOpenChat={() => setShowYourPalChat(true)} />
      
      {/* YourPal Chat Modal */}
      <YourPalChatModal 
        isOpen={showYourPalChat} 
        onClose={() => setShowYourPalChat(false)} 
      />

      {/* Mobile Bottom Navigation - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
      >
        <div className="flex items-center justify-around p-4">
          {mobileTabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-2 px-3 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-robot-purple bg-robot-purple/20' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div className={`w-6 h-6 flex items-center justify-center ${
                activeTab === tab.id ? 'text-robot-purple' : 'text-gray-400'
              }`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">{tab.shortLabel}</span>
            </motion.button>
          ))}
          
          {/* Exit AI Button */}
          <motion.button
            onClick={handleSignOut}
            className="flex flex-col items-center gap-2 px-3 py-3 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Exit AI</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
