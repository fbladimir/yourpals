'use client'

import { getCurrentUser } from '../../../lib/auth'
import { SubscriptionGuard, ProFeatureLock } from '../../../components/SubscriptionGuard'
import { formatCurrency } from '@yourpals/core'
import { motion } from 'framer-motion'
import { SignOutButton, useClerk } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { config } from '../../../lib/config'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)
  const router = useRouter()
  const { signOut } = useClerk()

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        
        // Add timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          setLoading(false)
          console.error('Request timed out')
        }, 10000) // 10 second timeout
        
        const response = await fetch('/api/test-dashboard')
        clearTimeout(timeoutId)
        
        const data = await response.json()
        if (data.success) {
          setUser(data.user)
        } else {
          console.error('Failed to fetch user data:', data.error)
        }
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  // Handle sign out with proper redirect
  const handleSignOut = async () => {
    setSigningOut(true)
    try {
      await signOut({ redirectUrl: '/welcome' })
    } catch (error) {
      console.error('Error signing out:', error)
      // Fallback redirect
      router.push('/welcome')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <p className="text-gray-300">Loading your dashboard...</p>
          <div className="mt-4 text-sm text-gray-400">
            This should only take a moment...
          </div>
        </div>
      </div>
    )
  }

  if (signingOut) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse"></div>
          <p className="text-gray-300">Signing out...</p>
        </div>
      </div>
    )
  }

  if (!user && !loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-4">Please sign in to access your dashboard.</p>
          <button 
            onClick={() => window.location.href = '/sign-in'}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">MoneyPal</h1>
              <span className="ml-3 px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                {user.plan || 'FREE'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={config.marketingUrl} 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-700/50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to YourPals
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {user.email}!</span>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                onClick={handleSignOut}
                disabled={signingOut}
              >
                {signingOut ? 'Signing Out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-gray-300">Here's your financial overview for today.</p>
          </div>

          {/* Financial Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Total Balance</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(125000)}</p>
                </div>
                <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">This Month</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(8500)}</p>
                </div>
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Savings Goal</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(250000)}</p>
                </div>
                <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Progress</p>
                  <p className="text-2xl font-bold text-white">50%</p>
                </div>
                <div className="w-12 h-12 bg-orange-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-3 p-4 border-2 border-gray-600 rounded-lg hover:border-blue-400 hover:bg-blue-900/20 transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-medium text-gray-200">Add Transaction</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 p-4 border-2 border-gray-600 rounded-lg hover:border-green-400 hover:bg-green-900/20 transition-colors">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-200">Set Goal</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 p-4 border-2 border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-900/20 transition-colors">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-200">View Reports</span>
              </button>
            </div>
          </div>

          {/* Pro Features Section */}
          <SubscriptionGuard user={{ subscription: { plan: user.plan, status: 'ACTIVE' } }} requiredPlan="MONEYPAL_PRO" showUpsell={true}>
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Advanced Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Spending Trends</h4>
                  <p className="text-gray-300 text-sm">Detailed analysis of your spending patterns over time.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Budget Forecasting</h4>
                  <p className="text-gray-300 text-sm">AI-powered predictions for your future spending.</p>
                </div>
              </div>
            </div>
          </SubscriptionGuard>

          {/* All-Access Features */}
          <SubscriptionGuard user={{ subscription: { plan: user.plan, status: 'ACTIVE' } }} requiredPlan="ALL_ACCESS" showUpsell={false}>
            <div className="bg-gradient-to-r from-purple-800 to-pink-800 rounded-xl shadow-lg p-6 border border-purple-600 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">All-Access Features</h3>
              <p className="text-purple-100 mb-4">Exclusive features for our premium subscribers.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-white text-sm">Priority Support</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-white text-sm">Custom Categories</span>
                </div>
              </div>
            </div>
          </SubscriptionGuard>
        </motion.div>
      </main>
    </div>
  )
}
