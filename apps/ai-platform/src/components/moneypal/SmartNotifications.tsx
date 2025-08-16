import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { 
  Bell, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Calendar,
  Target,
  CreditCard,
  PiggyBank,
  Zap,
  X,
  CheckCircle,
  Clock,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react'
import Image from 'next/image'

interface SmartNotificationsProps {
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  onOpenChat: () => void
}

interface FinancialNotification {
  id: string
  type: 'alert' | 'insight' | 'reminder' | 'opportunity' | 'achievement'
  title: string
  message: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: 'spending' | 'savings' | 'budget' | 'goals' | 'accounts' | 'general'
  actionable: boolean
  action?: string
  actionData?: any
  timestamp: Date
  isRead: boolean
  expiresAt?: Date
  icon: any
  color: string
  trend?: 'up' | 'down' | 'stable'
}

export default function SmartNotifications({ 
  accounts, 
  transactions, 
  summary, 
  insights, 
  goals, 
  onOpenChat 
}: SmartNotificationsProps) {
  const [notifications, setNotifications] = useState<FinancialNotification[]>([])
  const [showNotifications, setShowNotifications] = useState(true)
  const [filter, setFilter] = useState<'all' | 'unread' | 'high' | 'medium' | 'low'>('all')
  const [showSettings, setShowSettings] = useState(false)
  const [notificationPreferences, setNotificationPreferences] = useState({
    spendingAlerts: true,
    savingsReminders: true,
    billReminders: true,
    goalUpdates: true,
    aiInsights: true,
    accountAlerts: true
  })

  // Generate smart notifications based on financial data
  const generateNotifications = useMemo(() => {
    if (!transactions.length || !summary) return []

    const newNotifications: FinancialNotification[] = []
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    // Get current month transactions
    const currentMonthTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.date)
      return txDate.getMonth() === currentMonth && txDate.getFullYear() === currentYear
    })

    // 1. Spending Threshold Alerts
    if (notificationPreferences.spendingAlerts) {
      const currentSpending = currentMonthTransactions
        .filter(tx => Number(tx.amount) < 0)
        .reduce((sum, tx) => sum + Math.abs(Number(tx.amount)), 0)
      
      const spendingThreshold = summary.monthlyIncome * 0.8 // 80% of income
      
      if (currentSpending > spendingThreshold) {
        newNotifications.push({
          id: 'spending-threshold',
          type: 'alert',
          title: 'Spending Threshold Alert',
          message: `You've spent ${((currentSpending / summary.monthlyIncome) * 100).toFixed(1)}% of your income this month. Consider reviewing your budget.`,
          priority: 'high',
          category: 'spending',
          actionable: true,
          action: 'Review Budget',
          actionData: { type: 'budget_review' },
          timestamp: now,
          isRead: false,
          icon: AlertTriangle,
          color: 'red',
          trend: 'up'
        })
      }
    }

    // 2. Bill Due Reminders
    if (notificationPreferences.billReminders) {
      // Simulate upcoming bills (in real app, this would come from bill tracking)
      const upcomingBills = [
        { name: 'Credit Card', amount: 150, dueDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000) },
        { name: 'Rent', amount: 1200, dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000) }
      ]

      upcomingBills.forEach(bill => {
        const daysUntilDue = Math.ceil((bill.dueDate.getTime() - now.getTime()) / (24 * 60 * 60 * 1000))
        
        if (daysUntilDue <= 3) {
          newNotifications.push({
            id: `bill-${bill.name.toLowerCase()}`,
            type: 'reminder',
            title: `Bill Due: ${bill.name}`,
            message: `Your ${bill.name} payment of $${bill.amount} is due in ${daysUntilDue} day${daysUntilDue === 1 ? '' : 's'}.`,
            priority: daysUntilDue === 1 ? 'critical' : 'high',
            category: 'budget',
            actionable: true,
            action: 'Pay Now',
            actionData: { type: 'bill_payment', bill },
            timestamp: now,
            isRead: false,
            expiresAt: bill.dueDate,
            icon: Calendar,
            color: daysUntilDue === 1 ? 'red' : 'orange',
            trend: 'down'
          })
        }
      })
    }

    // 3. Savings Goal Reminders
    if (notificationPreferences.savingsReminders) {
      if (summary.monthlySavings && summary.monthlySavings < 0) {
        newNotifications.push({
          id: 'negative-savings',
          type: 'alert',
          title: 'Negative Savings Alert',
          message: 'You\'re spending more than you\'re earning this month. Consider reducing expenses or increasing income.',
          priority: 'high',
          category: 'savings',
          actionable: true,
          action: 'Get Advice',
          actionData: { type: 'savings_advice' },
          timestamp: now,
          isRead: false,
          icon: PiggyBank,
          color: 'red',
          trend: 'down'
        })
      } else if (summary.monthlySavings && summary.monthlySavings > summary.monthlyIncome * 0.2) {
        newNotifications.push({
          id: 'excellent-savings',
          type: 'achievement',
          title: 'Excellent Savings!',
          message: `You're saving ${((summary.monthlySavings / summary.monthlyIncome) * 100).toFixed(1)}% of your income. Keep up the great work!`,
          priority: 'low',
          category: 'savings',
          actionable: false,
          timestamp: now,
          isRead: false,
          icon: TrendingUp,
          color: 'green',
          trend: 'up'
        })
      }
    }

    // 4. Account Balance Alerts
    if (notificationPreferences.accountAlerts) {
      accounts.forEach(account => {
        if (account.balance && account.balance < 100) {
          newNotifications.push({
            id: `low-balance-${account.id}`,
            type: 'alert',
            title: 'Low Balance Alert',
            message: `Your ${account.name} account has a low balance of $${account.balance.toFixed(2)}. Consider transferring funds.`,
            priority: 'medium',
            category: 'accounts',
            actionable: true,
            action: 'Transfer Funds',
            actionData: { type: 'transfer_funds', account },
            timestamp: now,
            isRead: false,
            icon: CreditCard,
            color: 'orange',
            trend: 'down'
          })
        }
      })
    }

    // 5. AI-Generated Insights Notifications
    if (notificationPreferences.aiInsights) {
      // Generate notifications based on AI insights
      if (insights.length > 0) {
        const highPriorityInsights = insights.filter(insight => insight.priority === 'high' || insight.priority === 'critical')
        
        highPriorityInsights.forEach(insight => {
          newNotifications.push({
            id: `ai-insight-${insight.id}`,
            type: 'insight',
            title: `AI Insight: ${insight.title}`,
            message: insight.message,
            priority: insight.priority === 'critical' ? 'critical' : 'high',
            category: insight.category as any,
            actionable: insight.actionable,
            action: insight.action,
            actionData: { type: 'ai_insight', insight },
            timestamp: now,
            isRead: false,
            icon: Lightbulb,
            color: insight.priority === 'critical' ? 'red' : 'blue',
            trend: insight.trend
          })
        })
      }
    }

    // 6. Goal Progress Updates
    if (notificationPreferences.goalUpdates && goals.length > 0) {
      goals.forEach(goal => {
        if (goal.progress && goal.progress > 75) {
          newNotifications.push({
            id: `goal-progress-${goal.id}`,
            type: 'achievement',
            title: 'Goal Progress Update',
            message: `You're ${goal.progress}% to your ${goal.name} goal! Keep going!`,
            priority: 'low',
            category: 'goals',
            actionable: false,
            timestamp: now,
            isRead: false,
            icon: Target,
            color: 'green',
            trend: 'up'
          })
        }
      })
    }

    return newNotifications.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    })
  }, [transactions, summary, accounts, insights, goals, notificationPreferences])

  // Update notifications when analysis changes
  useEffect(() => {
    setNotifications(generateNotifications)
  }, [generateNotifications])

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.isRead
    if (filter === 'high') return notification.priority === 'high' || notification.priority === 'critical'
    if (filter === 'medium') return notification.priority === 'medium'
    if (filter === 'low') return notification.priority === 'low'
    return true
  })

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, isRead: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
  }

  const handleNotificationAction = (notification: FinancialNotification) => {
    if (notification.actionable && notification.action) {
      // Mark as read
      markAsRead(notification.id)
      
      // Open AI chat for action guidance
      onOpenChat()
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'medium': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'low': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alert': return AlertTriangle
      case 'insight': return Lightbulb
      case 'reminder': return Clock
      case 'opportunity': return TrendingUp
      case 'achievement': return CheckCircle
      default: return Bell
    }
  }

  if (!showNotifications) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-robot-orange" />
            <div>
              <h3 className="text-xl font-semibold text-white">Smart Notifications</h3>
              <p className="text-gray-400">Proactive alerts and insights from your AI financial co-pilot</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-3 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors text-sm"
            >
              Mark All Read
            </button>
          )}
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Notification Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setShowNotifications(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
          >
            <h4 className="text-white font-semibold mb-3">Notification Preferences</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(notificationPreferences).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotificationPreferences(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))}
                    className="w-4 h-4 text-robot-green bg-gray-700 border-gray-600 rounded focus:ring-robot-green focus:ring-2"
                  />
                  <span className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(['all', 'unread', 'high', 'medium', 'low'] as const).map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              filter === filterType
                ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {filterType === 'all' ? 'All' : 
             filterType === 'unread' ? `Unread (${unreadCount})` :
             filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      {/* Notifications Grid */}
      {filteredNotifications.length > 0 ? (
        <div className="space-y-3">
          {filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`p-4 rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
                notification.isRead ? 'opacity-70' : ''
              } ${
                notification.priority === 'critical' 
                  ? 'bg-red-500/10 border-red-500/30 hover:border-red-500/50' 
                  : notification.priority === 'high'
                  ? 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50'
                  : notification.priority === 'medium'
                  ? 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
                  : 'bg-gray-500/10 border-gray-500/30 hover:border-gray-500/50'
              }`}
              onClick={() => handleNotificationAction(notification)}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getPriorityColor(notification.priority)}`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-white text-sm">{notification.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                      {notification.priority.toUpperCase()}
                    </span>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-robot-green rounded-full"></div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 capitalize">
                        {notification.category}
                      </span>
                      
                      <span className="text-xs text-gray-500">
                        {notification.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      
                      {notification.trend && (
                        notification.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )
                      )}
                    </div>
                    
                    {notification.actionable && notification.action && (
                      <button className="flex items-center gap-2 text-sm font-medium text-robot-green hover:text-robot-blue transition-colors">
                        {notification.action}
                        <Zap className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    markAsRead(notification.id)
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-12 h-12 text-robot-green" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">All Caught Up!</h4>
          <p className="text-gray-400 mb-4">No new notifications at the moment. MoneyPal is monitoring your finances!</p>
          <button
            onClick={onOpenChat}
            className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
          >
            Chat with MoneyPal
          </button>
        </div>
      )}
    </motion.div>
  )
}
