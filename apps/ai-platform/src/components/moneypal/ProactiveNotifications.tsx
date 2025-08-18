'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target,
  CreditCard,
  PiggyBank,
  Calendar,
  X,
  Zap,
  Lightbulb,
  ArrowRight
} from 'lucide-react'

interface FinancialNotification {
  id: string
  type: 'success' | 'warning' | 'info' | 'alert'
  title: string
  message: string
  priority: 'low' | 'medium' | 'high'
  category: 'bill' | 'goal' | 'spending' | 'savings' | 'credit' | 'insight'
  timestamp: Date
  isRead: boolean
  actionRequired: boolean
  actionText?: string
  actionUrl?: string
  data?: any
}

interface ProactiveNotificationsProps {
  financialData: {
    accounts: any[]
    transactions: any[]
    summary: {
      totalAssets?: number
      totalDebt?: number
      netWorth?: number
      monthlyIncome: number
      monthlyExpenses: number
      monthlySavings: number
      creditScore: number
      emergencyFund: number
      monthlyChange?: number
      debtToIncomeRatio?: number
      savingsRate?: number
    }
    goals: any[]
  }
  onAction?: (notification: FinancialNotification) => void
}

export default function ProactiveNotifications({ 
  financialData, 
  onAction 
}: ProactiveNotificationsProps) {
  const [notifications, setNotifications] = useState<FinancialNotification[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  // Generate proactive notifications based on financial data
  const generateNotifications = useCallback(() => {
    const newNotifications: FinancialNotification[] = []
    const now = new Date()

    // 1. Emergency Fund Analysis
    const monthlyExpenses = financialData.summary.monthlyExpenses
    const emergencyFund = financialData.summary.emergencyFund
    const emergencyFundMonths = monthlyExpenses > 0 ? emergencyFund / monthlyExpenses : 0

    if (emergencyFundMonths < 3) {
      newNotifications.push({
        id: `emergency-fund-${Date.now()}`,
        type: 'warning',
        title: 'Emergency Fund Alert',
        message: `Your emergency fund covers ${emergencyFundMonths.toFixed(1)} months of expenses. Consider building it to 3-6 months for better financial security.`,
        priority: 'high',
        category: 'savings',
        timestamp: now,
        isRead: false,
        actionRequired: true,
        actionText: 'Set Savings Goal',
        actionUrl: '#goals'
      })
    } else if (emergencyFundMonths >= 6) {
      newNotifications.push({
        id: `emergency-fund-success-${Date.now()}`,
        type: 'success',
        title: 'Emergency Fund Goal Achieved! 🎉',
        message: `Congratulations! Your emergency fund covers ${emergencyFundMonths.toFixed(1)} months of expenses. You're in great financial shape!`,
        priority: 'low',
        category: 'savings',
        timestamp: now,
        isRead: false,
        actionRequired: false
      })
    }

    // 2. Savings Rate Analysis
    const monthlyIncome = financialData.summary.monthlyIncome
    const monthlySavings = financialData.summary.monthlySavings
    const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0

    if (savingsRate < 20) {
      newNotifications.push({
        id: `savings-rate-${Date.now()}`,
        type: 'info',
        title: 'Savings Rate Insight',
        message: `You're saving ${savingsRate.toFixed(1)}% of your income. The recommended rate is 20% for financial independence.`,
        priority: 'medium',
        category: 'savings',
        timestamp: now,
        isRead: false,
        actionRequired: false,
        actionText: 'Optimize Savings',
        actionUrl: '#overview'
      })
    } else if (savingsRate >= 30) {
      newNotifications.push({
        id: `savings-rate-excellent-${Date.now()}`,
        type: 'success',
        title: 'Excellent Savings Rate! 🌟',
        message: `You're saving ${savingsRate.toFixed(1)}% of your income - that's exceptional! You're on track for early financial independence.`,
        priority: 'low',
        category: 'savings',
        timestamp: now,
        isRead: false,
        actionRequired: false
      })
    }

    // 3. Credit Score Insights
    const creditScore = financialData.summary.creditScore
    if (creditScore < 700) {
      newNotifications.push({
        id: `credit-score-${Date.now()}`,
        type: 'warning',
        title: 'Credit Score Improvement Opportunity',
        message: `Your credit score is ${creditScore}. Focus on paying bills on time and reducing credit utilization to improve it.`,
        priority: 'medium',
        category: 'credit',
        timestamp: now,
        isRead: false,
        actionRequired: false,
        actionText: 'Credit Tips',
        actionUrl: '#overview'
      })
    } else if (creditScore >= 750) {
      newNotifications.push({
        id: `credit-score-excellent-${Date.now()}`,
        type: 'success',
        title: 'Excellent Credit Score! 🏆',
        message: `Your credit score of ${creditScore} is excellent! You'll get the best rates on loans and credit cards.`,
        priority: 'low',
        category: 'credit',
        timestamp: now,
        isRead: false,
        actionRequired: false
      })
    }

    // 4. Goal Progress Analysis
    financialData.goals.forEach((goal: any) => {
      if (goal.targetAmount && goal.currentAmount) {
        const progress = (goal.currentAmount / goal.targetAmount) * 100
        const monthsRemaining = goal.targetDate ? 
          Math.ceil((new Date(goal.targetDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)) : 0

        if (progress >= 100) {
          newNotifications.push({
            id: `goal-completed-${goal.id}`,
            type: 'success',
            title: `Goal Achieved: ${goal.name}! 🎯`,
            message: `Congratulations! You've reached your ${goal.name} goal. Time to set a new one!`,
            priority: 'medium',
            category: 'goal',
            timestamp: now,
            isRead: false,
            actionRequired: false,
            actionText: 'Set New Goal',
            actionUrl: '#goals'
          })
        } else if (progress >= 75 && monthsRemaining <= 3) {
          newNotifications.push({
            id: `goal-close-${goal.id}`,
            type: 'info',
            title: `Goal Almost Complete: ${goal.name}`,
            message: `You're ${progress.toFixed(1)}% to your ${goal.name} goal! Keep up the great work!`,
            priority: 'medium',
            category: 'goal',
            timestamp: now,
            isRead: false,
            actionRequired: false,
            actionText: 'View Goal',
            actionUrl: '#goals'
          })
        }
      }
    })

    // 5. Spending Pattern Insights
    if (financialData.transactions.length > 0) {
      const recentTransactions = financialData.transactions
        .filter((tx: any) => {
          const txDate = new Date(tx.date)
          const daysDiff = (now.getTime() - txDate.getTime()) / (1000 * 60 * 60 * 24)
          return daysDiff <= 30
        })

      const totalSpending = recentTransactions.reduce((sum: number, tx: any) => sum + Math.abs(tx.amount), 0)
      const avgDailySpending = totalSpending / 30

      if (avgDailySpending > (monthlyIncome / 30) * 0.8) {
        newNotifications.push({
          id: `spending-pattern-${Date.now()}`,
          type: 'warning',
          title: 'High Spending Alert',
          message: `Your daily spending average is $${avgDailySpending.toFixed(2)}. Consider reviewing your expenses to maintain your savings goals.`,
          priority: 'medium',
          category: 'spending',
          timestamp: now,
          isRead: false,
          actionRequired: false,
          actionText: 'Review Spending',
          actionUrl: '#overview'
        })
      }
    }

    // 6. AI Insights
    if (financialData.summary.totalAssets && financialData.summary.totalAssets > 0) {
      const netWorth = financialData.summary.totalAssets
      const monthlyChange = financialData.summary.monthlySavings

      if (monthlyChange > 0) {
        newNotifications.push({
          id: `net-worth-positive-${Date.now()}`,
          type: 'success',
          title: 'Net Worth Growing! 📈',
          message: `Your net worth increased by $${monthlyChange.toFixed(2)} this month. You're building wealth!`,
          priority: 'low',
          category: 'insight',
          timestamp: now,
          isRead: false,
          actionRequired: false
        })
      }
    }

    setNotifications(prev => {
      // Merge new notifications, avoiding duplicates
      const existingIds = new Set(prev.map(n => n.id.split('-')[0]))
      const uniqueNewNotifications = newNotifications.filter(n => 
        !existingIds.has(n.id.split('-')[0])
      )
      return [...uniqueNewNotifications, ...prev]
    })
  }, [financialData])

  // Generate notifications when financial data changes
  useEffect(() => {
    if (financialData.summary.totalAssets && financialData.summary.totalAssets > 0 || financialData.accounts.length > 0) {
      generateNotifications()
    }
  }, [financialData, generateNotifications])

  // Update unread count
  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.isRead).length)
  }, [notifications])

  // Mark notification as read
  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, isRead: true } : n
      )
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, isRead: true }))
    )
  }

  // Handle notification action
  const handleAction = (notification: FinancialNotification) => {
    markAsRead(notification.id)
    if (onAction) {
      onAction(notification)
    }
  }

  // Get notification icon
  const getNotificationIcon = (type: string, category: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-400" />
      default:
        switch (category) {
          case 'bill':
            return <Calendar className="w-5 h-5 text-blue-400" />
          case 'goal':
            return <Target className="w-5 h-5 text-purple-400" />
          case 'spending':
            return <TrendingDown className="w-5 h-5 text-orange-400" />
          case 'savings':
            return <PiggyBank className="w-5 h-5 text-green-400" />
          case 'credit':
            return <CreditCard className="w-5 h-5 text-indigo-400" />
          case 'insight':
            return <Lightbulb className="w-5 h-5 text-yellow-400" />
          default:
            return <Bell className="w-5 h-5 text-gray-400" />
        }
    }
  }

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-500/10'
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-500/10'
      case 'low':
        return 'border-l-green-500 bg-green-500/10'
      default:
        return 'border-l-blue-500 bg-blue-500/10'
    }
  }

  return (
    <>
      {/* Notification Bell */}
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Bell className="w-6 h-6" />
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </motion.div>
          )}
        </button>

        {/* Notifications Panel */}
        <AnimatePresence>
          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 w-96 max-h-96 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-750">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-robot-green" />
                  Smart Notifications
                </h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-robot-green hover:text-robot-blue transition-colors duration-200"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-gray-400">
                    <Bell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No notifications yet</p>
                    <p className="text-sm">MoneyPal will alert you to important financial insights</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-700">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-4 hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer ${
                          !notification.isRead ? 'bg-gray-700/30' : ''
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className={`border-l-4 pl-3 ${getPriorityColor(notification.priority)}`}>
                          <div className="flex items-start gap-3">
                            {getNotificationIcon(notification.type, notification.category)}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-sm font-medium text-white">
                                  {notification.title}
                                </h4>
                                <span className="text-xs text-gray-400">
                                  {notification.timestamp.toLocaleTimeString([], { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </span>
                              </div>
                              <p className="text-sm text-gray-300 mt-1">
                                {notification.message}
                              </p>
                              {notification.actionRequired && notification.actionText && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleAction(notification)
                                  }}
                                  className="mt-2 inline-flex items-center gap-1 text-xs text-robot-green hover:text-robot-blue transition-colors duration-200"
                                >
                                  {notification.actionText}
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="p-3 border-t border-gray-700 bg-gray-750 text-center">
                  <p className="text-xs text-gray-400">
                    MoneyPal is actively monitoring your finances
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
