'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  Home, 
  TrendingUp, 
  CreditCard, 
  PiggyBank, 
  Target, 
  Settings,
  Plus,
  Search,
  Bell,
  User,
  ChevronRight,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function MoneyPalPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleBackToDashboard = () => {
    router.push('/dashboard')
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  // Mock data for demonstration
  const mockData = {
    currentBalance: 2847.63,
    monthlyIncome: 5200,
    monthlyExpenses: 3200,
    savingsGoal: 15000,
    currentSavings: 8750,
    creditScore: 742,
    upcomingBills: [
      { name: 'Netflix', amount: 15.99, dueDate: '2024-01-15', status: 'pending' },
      { name: 'Electric Bill', amount: 89.50, dueDate: '2024-01-18', status: 'pending' },
      { name: 'Rent', amount: 1200, dueDate: '2024-01-25', status: 'pending' }
    ],
    recentTransactions: [
      { name: 'Grocery Store', amount: -67.89, category: 'Food', date: '2024-01-12' },
      { name: 'Gas Station', amount: -45.00, category: 'Transport', date: '2024-01-11' },
      { name: 'Salary Deposit', amount: 2600, category: 'Income', date: '2024-01-10' }
    ]
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-robot-green via-robot-blue to-robot-purple flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">💰</div>
          <div className="text-white text-2xl font-bold mb-2">MoneyPal</div>
          <div className="text-white/60">Loading your financial dashboard...</div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToDashboard}
                className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-robot-green to-robot-blue rounded-lg flex items-center justify-center text-2xl">
                  💰
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">MoneyPal</h1>
                  <div className="text-robot-green font-mono text-xs tracking-wider">AI FINANCIAL CO-PILOT</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-24">
        {/* Navigation Tabs */}
        <div className="flex gap-1 mt-6 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: Home },
            { id: 'accounts', label: 'Accounts', icon: CreditCard },
            { id: 'budget', label: 'Budget', icon: Target },
            { id: 'goals', label: 'Goals', icon: PiggyBank },
            { id: 'insights', label: 'Insights', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl p-6 ring-1 ring-robot-green/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Current Balance</h3>
                  <DollarSign className="w-5 h-5 text-robot-green" />
                </div>
                <div className="text-3xl font-bold text-white">${mockData.currentBalance.toLocaleString()}</div>
                <div className="text-robot-green text-sm mt-2">+$247.63 this month</div>
              </div>

              <div className="bg-gradient-to-br from-robot-purple/20 to-robot-pink/20 rounded-2xl p-6 ring-1 ring-robot-purple/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Monthly Savings</h3>
                  <PiggyBank className="w-5 h-5 text-robot-purple" />
                </div>
                <div className="text-3xl font-bold text-white">${(mockData.monthlyIncome - mockData.monthlyExpenses).toLocaleString()}</div>
                <div className="text-robot-purple text-sm mt-2">38% of income</div>
              </div>

              <div className="bg-gradient-to-br from-robot-orange/20 to-robot-red/20 rounded-2xl p-6 ring-1 ring-robot-orange/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Credit Score</h3>
                  <TrendingUp className="w-5 h-5 text-robot-orange" />
                </div>
                <div className="text-3xl font-bold text-white">{mockData.creditScore}</div>
                <div className="text-robot-orange text-sm mt-2">+12 this month</div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-gradient-to-br from-robot-blue/20 to-robot-cyan/20 rounded-2xl p-6 ring-1 ring-robot-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-robot-blue to-robot-cyan rounded-lg flex items-center justify-center">
                  🤖
                </div>
                <h3 className="text-white font-semibold text-lg">AI Recommendations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-robot-green mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Move $350 to High-Yield Savings</div>
                    <div className="text-gray-300 text-sm">You can safely move this amount without affecting upcoming bills</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-robot-orange mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Pay Citi Card Early</div>
                    <div className="text-gray-300 text-sm">Pay $200 now to save $30 in interest this month</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <Clock className="w-5 h-5 text-robot-blue mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Netflix Due in 3 Days</div>
                    <div className="text-gray-300 text-sm">Still want to keep this subscription?</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {mockData.recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        transaction.amount > 0 ? 'bg-robot-green/20' : 'bg-robot-red/20'
                      }`}>
                        {transaction.amount > 0 ? <TrendingUp className="w-4 h-4 text-robot-green" /> : <DollarSign className="w-4 h-4 text-robot-red" />}
                      </div>
                      <div>
                        <div className="text-white font-medium">{transaction.name}</div>
                        <div className="text-gray-400 text-sm">{transaction.category} • {transaction.date}</div>
                      </div>
                    </div>
                    <div className={`font-semibold ${transaction.amount > 0 ? 'text-robot-green' : 'text-white'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Accounts Tab */}
        {activeTab === 'accounts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Connect Your Accounts</h2>
              <p className="text-gray-400">Link your bank accounts, credit cards, and investment accounts</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Bank Integration</h3>
              <p className="text-gray-400 mb-6">Connect via Plaid, Teller, or SaltEdge for real-time financial data</p>
              <button className="bg-gradient-to-r from-robot-green to-robot-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Connect Accounts
              </button>
            </div>
          </motion.div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Smart Budget Management</h2>
              <p className="text-gray-400">AI-powered budget tracking and optimization</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Budget Setup Required</h3>
              <p className="text-gray-400 mb-6">Connect your accounts first to start tracking your budget</p>
              <button className="bg-gradient-to-r from-robot-green to-robot-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Set Up Budget
              </button>
            </div>
          </motion.div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Financial Goals</h2>
              <p className="text-gray-400">Track your progress toward financial milestones</p>
            </div>
            
            <div className="bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-2xl p-6 ring-1 ring-robot-green/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">House Down Payment</h3>
                <div className="text-robot-green font-semibold">$8,750 / $15,000</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-robot-green to-robot-blue h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(mockData.currentSavings / mockData.savingsGoal) * 100}%` }}
                ></div>
              </div>
              <div className="text-gray-400 text-sm">58% complete • Target: July 2026</div>
            </div>
          </motion.div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">AI Insights</h2>
              <p className="text-gray-400">Personalized financial analysis and predictions</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-2">Insights Coming Soon</h3>
              <p className="text-gray-400 mb-6">Connect your accounts to unlock AI-powered financial insights</p>
              <button className="bg-gradient-to-r from-robot-green to-robot-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
