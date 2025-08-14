"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
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
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function MoneyPalPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [chatMessage, setChatMessage] = useState('')
  const [isLinkingAccounts, setIsLinkingAccounts] = useState(false)

  // Mock data for development - will be replaced with real data
  const mockData = {
    totalBalance: 39847.63,
    monthlyIncome: 5200,
    monthlyExpenses: 3200,
    monthlySavings: 1200,
    creditScore: 745,
    accounts: [
      { id: 1, name: 'Chase Checking', balance: 1247.63, type: 'checking', lastSync: '2 min ago' },
      { id: 2, name: 'Citi Credit Card', balance: -450.00, type: 'credit', lastSync: '5 min ago' },
      { id: 3, name: 'Ally Savings', balance: 2050.00, type: 'savings', lastSync: '1 min ago' }
    ],
    upcomingBills: [
      { name: 'Netflix', amount: 15.99, dueDate: '2024-01-15', status: 'pending' },
      { name: 'Electric Bill', amount: 89.50, dueDate: '2024-01-18', status: 'pending' },
      { name: 'Rent', amount: 1200, dueDate: '2024-01-25', status: 'pending' }
    ],
    aiInsights: [
      { 
        type: 'recommendation', 
        message: 'You can safely move $1000 to your high-yield savings this week without affecting upcoming bills.',
        action: 'Move to Savings',
        priority: 'high'
      },
      { 
        type: 'alert', 
        message: 'Pay $200 to your Citi card now to save $30 in interest this month.',
        action: 'Pay Now',
        priority: 'medium'
      },
      { 
        type: 'insight', 
        message: 'Your grocery spending is 15% below budget this week. Great job!',
        action: null,
        priority: 'low'
      }
    ]
  }

  const handleLinkAccounts = () => {
    setIsLinkingAccounts(true)
    // TODO: Implement Plaid integration
    setTimeout(() => setIsLinkingAccounts(false), 2000)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatMessage.trim()) return
    
    // TODO: Implement AI chat functionality
    console.log('Sending message:', chatMessage)
    setChatMessage('')
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl p-6 ring-1 ring-robot-green/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Total Balance</h3>
            <Wallet className="w-5 h-5 text-robot-green" />
          </div>
          <div className="text-3xl font-bold text-white">${mockData.totalBalance.toLocaleString()}</div>
          <div className="text-robot-green text-sm mt-2">+$247.63 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-robot-purple/20 to-robot-pink/20 rounded-2xl p-6 ring-1 ring-robot-purple/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Monthly Savings</h3>
            <PiggyBank className="w-5 h-5 text-robot-purple" />
          </div>
          <div className="text-3xl font-bold text-white">${mockData.monthlySavings.toLocaleString()}</div>
          <div className="text-robot-purple text-sm mt-2">23% of income</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-robot-orange/20 to-robot-red/20 rounded-2xl p-6 ring-1 ring-robot-orange/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Credit Score</h3>
            <TrendingUp className="w-5 h-5 text-robot-orange" />
          </div>
          <div className="text-3xl font-bold text-white">{mockData.creditScore}</div>
          <div className="text-robot-orange text-sm mt-2">+12 this month</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-robot-blue/20 to-robot-cyan/20 rounded-2xl p-6 ring-1 ring-robot-blue/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Cash Flow</h3>
            <BarChart3 className="w-5 h-5 text-robot-blue" />
          </div>
          <div className="text-3xl font-bold text-white">+${(mockData.monthlyIncome - mockData.monthlyExpenses).toLocaleString()}</div>
          <div className="text-robot-blue text-sm mt-2">Monthly net</div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-robot-blue/20 to-robot-cyan/20 rounded-2xl p-6 ring-1 ring-robot-blue/30"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-robot-blue to-robot-cyan rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-white font-semibold text-lg">AI Insights & Recommendations</h3>
        </div>
        <div className="space-y-4">
          {mockData.aiInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`flex items-start gap-3 p-4 rounded-lg ${
                insight.priority === 'high' ? 'bg-robot-green/10 border border-robot-green/20' :
                insight.priority === 'medium' ? 'bg-robot-orange/10 border border-robot-orange/20' :
                'bg-white/5'
              }`}
            >
              {insight.type === 'recommendation' ? (
                <CheckCircle className="w-5 h-5 text-robot-green mt-0.5" />
              ) : insight.type === 'alert' ? (
                <AlertCircle className="w-5 h-5 text-robot-orange mt-0.5" />
              ) : (
                <Clock className="w-5 h-5 text-robot-blue mt-0.5" />
              )}
              <div className="flex-1">
                <div className="text-white font-medium">{insight.message}</div>
                {insight.action && (
                  <button className="mt-2 text-sm bg-robot-green text-white px-3 py-1 rounded-lg hover:bg-robot-green/80 transition-colors">
                    {insight.action}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-br from-robot-purple/10 to-robot-pink/10 rounded-2xl p-6 ring-1 ring-robot-purple/20"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleLinkAccounts}
            disabled={isLinkingAccounts}
            className="p-4 bg-robot-blue/20 rounded-lg border border-robot-blue/30 text-white hover:bg-robot-blue/30 transition-all duration-200 disabled:opacity-50"
          >
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-semibold">
              {isLinkingAccounts ? 'Linking...' : 'Link Accounts'}
            </div>
          </button>
          
          <button className="p-4 bg-robot-green/20 rounded-lg border border-robot-green/30 text-white hover:bg-robot-green/30 transition-all duration-200">
            <div className="text-2xl mb-2">💰</div>
            <div className="font-semibold">Transfer Money</div>
          </button>
          
          <button className="p-4 bg-robot-orange/20 rounded-lg border border-robot-orange/30 text-white hover:bg-robot-orange/30 transition-all duration-200">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">Set Goals</div>
          </button>
        </div>
      </motion.div>
    </div>
  )

  const renderAccounts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Your Accounts</h3>
        <button
          onClick={handleLinkAccounts}
          className="flex items-center gap-2 px-4 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/80 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Link Account
        </button>
      </div>

      <div className="space-y-4">
        {mockData.accounts.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                  account.type === 'checking' ? 'bg-robot-blue/20' :
                  account.type === 'credit' ? 'bg-robot-red/20' :
                  'bg-robot-green/20'
                }`}>
                  {account.type === 'checking' ? '🏦' :
                   account.type === 'credit' ? '💳' : '💰'}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{account.name}</h4>
                  <p className="text-gray-400 text-sm">Last sync: {account.lastSync}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${
                  account.balance >= 0 ? 'text-robot-green' : 'text-robot-red'
                }`}>
                  {account.balance >= 0 ? '+' : ''}${Math.abs(account.balance).toFixed(2)}
                </div>
                <div className="text-gray-400 text-sm capitalize">{account.type}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderAI = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Chat with MoneyPal AI</h3>
      
      {/* Chat Interface */}
      <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-robot-green to-robot-blue rounded-lg flex items-center justify-center">
              🤖
            </div>
            <div>
              <h4 className="text-white font-semibold">MoneyPal AI</h4>
              <p className="text-gray-400 text-sm">Your financial co-pilot is ready to help!</p>
            </div>
          </div>
          
          {/* Sample AI Messages */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div className="bg-robot-green/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Hi! I'm MoneyPal, your AI financial co-pilot. I can help you with budgeting, saving, debt management, and more. What would you like to know?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-robot-blue/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">What's my safe grocery budget for this week?</p>
              </div>
              <div className="w-8 h-8 bg-robot-blue/20 rounded-full flex items-center justify-center">
                👤
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div className="bg-robot-green/20 rounded-lg p-3 max-w-xs">
                <p className="text-white text-sm">Based on your current spending patterns and upcoming bills, your safe grocery budget this week is $120. You're currently at $67, so you have $53 remaining. Want me to adjust your budget?</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="flex gap-3">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Ask MoneyPal anything about your finances..."
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'accounts', label: 'Accounts', icon: CreditCard },
    { id: 'ai', label: 'AI Chat', icon: MessageCircle },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 mb-8 p-6 bg-gray-900/80 backdrop-blur-xl border-b border-robot-green/20 rounded-b-2xl"
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
            <div className="text-2xl">💰</div>
            <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
            <div className="text-robot-green font-mono text-xs tracking-wider">AI FINANCIAL CO-PILOT</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-6">
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'accounts' && renderAccounts()}
        {activeTab === 'ai' && renderAI()}
        {activeTab === 'goals' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Goals Coming Soon</h3>
            <p className="text-gray-400">Goal setting and tracking will be available in the next phase</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Settings Coming Soon</h3>
            <p className="text-gray-400">Account settings and preferences will be available in the next phase</p>
          </div>
        )}
      </main>
    </div>
  )
}
