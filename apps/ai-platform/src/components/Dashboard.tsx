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
  ShoppingCart
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
  const { user } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const [showYourPalChat, setShowYourPalChat] = useState(false)

  const aiApps = [
    {
      id: 'moneypal',
      name: 'MoneyPal',
      description: 'Personal finance management with AI insights',
      icon: DollarSign,
      avatar: '/moneypal/robotavatar.PNG',
      features: ['Smart budgeting', 'Goal tracking', 'AI insights', 'Account linking'],
      lastUsed: '2 hours ago',
      usage: 'High Usage',
      status: 'active',
      href: '/moneypal'
    },
    {
      id: 'sellerpal',
      name: 'SellerPal',
      description: 'AI eCommerce co-pilot for business growth',
      icon: ShoppingCart,
      avatar: '/sellerpal/robotavatar.PNG',
      features: ['Inventory management', 'Sales analytics', 'Competitive insights', 'AI automation'],
      lastUsed: 'Never used',
      usage: 'New',
      status: 'active',
      href: '/sellerpal'
    },
    {
      id: 'fitnesspal',
      name: 'FitnessPal',
      description: 'Your AI workout buddy and health coach',
      icon: Heart,
      avatar: '/moneypal/robotavatar.PNG',
      features: ['Workout planning', 'Nutrition guidance', 'Progress tracking', 'Health insights'],
      lastUsed: 'Never used',
      usage: 'Coming Soon',
      status: 'coming-soon',
      href: '#'
    },
    {
      id: 'productivitypal',
      name: 'ProductivityPal',
      description: 'AI-powered productivity and time management',
      icon: Brain,
      avatar: '/moneypal/robotavatar.PNG',
      features: ['Task automation', 'Time tracking', 'Focus optimization', 'Performance analytics'],
      lastUsed: 'Never used',
      usage: 'Coming Soon',
      status: 'coming-soon',
      href: '#'
    },
    {
      id: 'businesspal',
      name: 'BusinessPal',
      description: 'AI business strategist and growth advisor',
      icon: Rocket,
      avatar: '/moneypal/robotavatar.PNG',
      features: ['Market analysis', 'Strategy development', 'Growth optimization', 'Competitive intelligence'],
      lastUsed: 'Never used',
      usage: 'Coming Soon',
      status: 'coming-soon',
      href: '#'
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
      {/* Enhanced Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-robot-blue/10 via-robot-purple/10 to-robot-pink/10 rounded-3xl p-8 border border-robot-blue/20 shadow-2xl shadow-robot-blue/10"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      </div>

      {/* Enhanced Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-robot-purple/10 via-robot-pink/10 to-robot-orange/10 rounded-2xl p-8 border border-robot-purple/20 shadow-xl shadow-robot-purple/10"
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

      {/* Enhanced Current Plan */}
      <motion.div 
        className="bg-gradient-to-br from-robot-blue/10 via-robot-purple/10 to-robot-cyan/10 rounded-2xl p-8 border border-robot-blue/20 shadow-xl shadow-robot-blue/10"
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
      <motion.h3 
        className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="w-6 h-6 text-robot-blue" />
        AI Applications
      </motion.h3>
      
      {/* Enhanced Search Bar */}
      <motion.div 
        className="relative"
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

      {/* Enhanced Apps List */}
      <div className="space-y-6">
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
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <motion.img
                      src={app.avatar}
                      alt={`${app.name} Avatar`}
                      className="w-20 h-20 rounded-2xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                    {app.status === 'active' && (
                      <motion.div
                        className="absolute -top-2 -right-2 w-7 h-7 bg-robot-green rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">{app.name}</h4>
                    <p className="text-gray-300 mb-4 text-lg">{app.description}</p>
                    
                    {/* Enhanced Status and Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        app.status === 'active' 
                          ? 'bg-robot-green/20 text-robot-green border border-robot-green/30' 
                          : 'bg-gray-600/50 text-gray-400 border border-gray-600/50'
                      }`}>
                        {app.status === 'active' ? 'Active' : 'Coming Soon'}
                      </span>
                      {app.status === 'active' && (
                        <>
                          <span className="text-robot-blue text-sm font-medium flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            {app.usage} Usage
                          </span>
                          <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {app.lastUsed}
                          </span>
                        </>
                      )}
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
                        <div className="grid grid-cols-2 gap-3">
                          {app.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-2 h-2 bg-robot-green rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    {app.status === 'active' ? (
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLaunchApp(app.id)}
                        className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-robot-green/25"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Launch
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </span>
                        {/* Button Hover Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-robot-blue to-robot-green opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.button>
                    ) : (
                      <div className="px-8 py-4 bg-gray-700/50 text-gray-400 rounded-xl font-semibold border border-gray-600/50 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Coming Soon
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
      <motion.h3 
        className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Settings className="w-6 h-6 text-robot-blue" />
        Settings & Preferences
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
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'apps', label: 'AI Apps', icon: Sparkles },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 mb-8 p-8 bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-gray-900/90 backdrop-blur-xl border-b border-robot-blue/20 rounded-b-3xl shadow-2xl shadow-robot-blue/10"
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </div>
  )
}
