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
  Check
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import FinanceBot from '@/components/robots/FinanceBot'
import FitnessBot from '@/components/robots/FitnessBot'
import BusinessBot from '@/components/robots/BusinessBot'
import GeneralBot from '@/components/robots/GeneralBot'

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

  const aiApps = [
    { 
      id: 'moneypal', 
      name: 'MoneyPal', 
      icon: '💰', 
      color: 'from-robot-green to-robot-blue', 
      description: 'Personal finance management', 
      status: 'active',
      bot: 'finance'
    },
    { 
      id: 'fitnesspal', 
      name: 'FitnessPal', 
      icon: '💪', 
      color: 'from-robot-orange to-robot-red', 
      description: 'Health and fitness tracking', 
      status: 'coming-soon',
      bot: 'fitness'
    },
    { 
      id: 'productivitypal', 
      name: 'ProductivityPal', 
      icon: '⚡', 
      color: 'from-robot-purple to-robot-pink', 
      description: 'Time management tools', 
      status: 'coming-soon',
      bot: 'productivity'
    },
    { 
      id: 'businesspal', 
      name: 'BusinessPal', 
      icon: '🏢', 
      color: 'from-robot-blue to-robot-cyan', 
      description: 'Business optimization', 
      status: 'coming-soon',
      bot: 'business'
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
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-2xl p-8 border border-robot-blue/20"
      >
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
              className="h-16 mx-auto"
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
          className="text-robot-blue font-mono text-sm tracking-widest mb-3 text-center"
        >
          AI MODE: OPERATIONAL
        </motion.div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            {getPersonalizedWelcome()}
          </h2>
          <p className="text-gray-300">
            You're all set up with your personalized AI team. Here's what's available to you:
          </p>
        </div>
      </motion.div>

      {/* AI Apps Grid */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Your AI Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${
                app.status === 'active' 
                  ? 'border-robot-green shadow-lg shadow-robot-green/20' 
                  : 'border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {app.icon}
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-semibold text-white">{app.name}</h5>
                  <p className="text-sm text-gray-400">{app.description}</p>
                </div>
                {app.status === 'active' ? (
                  <span className="bg-robot-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Active
                  </span>
                ) : (
                  <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs">
                    Coming Soon
                  </span>
                )}
              </div>
              
              {app.status === 'active' ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLaunchApp(app.id)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Launch {app.name}
                </motion.button>
              ) : (
                <button className="w-full py-3 px-4 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-robot-purple/10 to-robot-pink/10 rounded-xl p-6 border border-robot-purple/20"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-robot-blue/20 rounded-lg border border-robot-blue/30 text-white hover:bg-robot-blue/30 transition-all duration-200"
          >
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-semibold">Settings</div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-robot-green/20 rounded-lg border border-robot-green/30 text-white hover:bg-robot-green/30 transition-all duration-200"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold">Analytics</div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-robot-orange/20 rounded-lg border border-robot-orange/30 text-white hover:bg-robot-orange/30 transition-all duration-200"
          >
            <div className="text-2xl mb-2">🔔</div>
            <div className="font-semibold">Notifications</div>
          </motion.button>
        </div>
      </motion.div>

      {/* Current Plan */}
      <div className="bg-gradient-to-br from-robot-blue/10 to-robot-purple/10 rounded-xl p-6 border border-robot-blue/20">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5 text-robot-blue" />
          Your Current Plan: {selectedPlan}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-white mb-2">Plan Features:</h4>
            <ul className="space-y-2">
              {getPlanFeatures().map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-robot-green" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-2">Your Goals:</h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Primary:</span> {selectedGoal}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-medium">Use Case:</span> {isBusiness ? 'Business' : 'Personal'}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-medium">Focus Areas:</span> {userGoals.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAIApps = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">AI Applications</h3>
      
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search AI applications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue"
        />
      </div>

      {/* Apps List */}
      <div className="space-y-4">
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
              className={`p-6 rounded-xl border-2 ${
                app.status === 'active' 
                  ? 'border-robot-green shadow-lg shadow-robot-green/20' 
                  : 'border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center text-3xl`}>
                  {app.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">{app.name}</h4>
                  <p className="text-gray-300 mb-3">{app.description}</p>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      app.status === 'active' 
                        ? 'bg-robot-green text-white' 
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {app.status === 'active' ? 'Active' : 'Coming Soon'}
                    </span>
                    {app.status === 'active' && (
                      <span className="text-robot-blue text-sm">Primary: {getBotName(app.bot)}</span>
                    )}
                  </div>
                </div>
                {app.status === 'active' ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLaunchApp(app.id)}
                    className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Launch
                  </motion.button>
                ) : (
                  <button className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Settings & Preferences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Settings
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue={user?.user_metadata?.full_name || ''}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-robot-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-gray-400 cursor-not-allowed"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-robot-blue text-white rounded-lg font-semibold hover:bg-robot-blue/80 transition-colors duration-200"
            >
              Update Profile
            </motion.button>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Preferences
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Primary Goal</label>
              <div className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                {selectedGoal.charAt(0).toUpperCase() + selectedGoal.slice(1)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Use Case</label>
              <div className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                {isBusiness ? 'Business' : 'Personal'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Plan</label>
              <div className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                {selectedPlan}
              </div>
            </div>
          </div>
        </div>
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 mb-8 p-6 bg-gray-900/80 backdrop-blur-xl border-b border-robot-blue/20 rounded-b-2xl"
      >
        {/* AI Mode Status */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img 
              src="/yourpalsRobot.png" 
              alt="AI Mode Active" 
              className="h-8 w-8"
            />
            {/* AI Mode Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border border-robot-blue rounded-full"
            />
          </div>
          <div className="text-robot-blue font-mono text-sm tracking-widest">
            AI MODE: OPERATIONAL
          </div>
        </div>

        {/* User Info and Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-white">
              {user?.user_metadata?.full_name || 'User'}
            </h1>
            
            {/* Navigation Tabs */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-robot-purple to-robot-pink text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 15px rgba(59, 130, 246, 0.6)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-2 bg-robot-blue text-white rounded-lg font-medium text-sm"
            >
              AI ASSISTANT READY
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignOut}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
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
    </div>
  )
}
