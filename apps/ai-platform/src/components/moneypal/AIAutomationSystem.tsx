'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Bell, 
  Calendar, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  Clock,
  TrendingUp,
  TrendingDown,
  Settings,
  Play,
  Pause,
  X,
  ArrowRight,
  Lightbulb,
  Shield,
  PiggyBank,
  CreditCard
} from 'lucide-react'

interface AutomationRule {
  id: string
  name: string
  description: string
  type: 'bill_reminder' | 'goal_alert' | 'spending_limit' | 'credit_monitor' | 'savings_boost'
  status: 'active' | 'paused' | 'draft'
  priority: 'high' | 'medium' | 'low'
  conditions: {
    type: string
    value: any
    operator: string
  }[]
  actions: {
    type: string
    message: string
    action: string
  }[]
  lastTriggered?: Date
  nextTrigger?: Date
  frequency: 'daily' | 'weekly' | 'monthly' | 'on_condition'
}

interface AIAutomationSystemProps {
  financialData: {
    summary: {
      totalAssets: number
      monthlyIncome: number
      monthlyExpenses: number
      monthlySavings: number
      creditScore: number
      emergencyFund: number
    }
    transactions: any[]
    goals: any[]
    accounts: any[]
  }
  onAutomationTriggered?: (automation: AutomationRule, data: any) => void
}

export default function AIAutomationSystem({ 
  financialData, 
  onAutomationTriggered 
}: AIAutomationSystemProps) {
  const [showAutomation, setShowAutomation] = useState(false)
  const [automations, setAutomations] = useState<AutomationRule[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [selectedAutomation, setSelectedAutomation] = useState<AutomationRule | null>(null)

  // Initialize default AI automations
  useEffect(() => {
    const defaultAutomations: AutomationRule[] = [
      {
        id: 'emergency-fund-monitor',
        name: 'Emergency Fund Monitor',
        description: 'Automatically monitors your emergency fund and alerts when it needs attention',
        type: 'savings_boost',
        status: 'active',
        priority: 'high',
        conditions: [
          { type: 'emergency_fund_months', value: 3, operator: '<' }
        ],
        actions: [
          { type: 'notification', message: 'Your emergency fund is below 3 months of expenses. Consider increasing your savings.', action: 'set_savings_goal' }
        ],
        frequency: 'weekly'
      },
      {
        id: 'credit-score-alert',
        name: 'Credit Score Alert',
        description: 'Monitors credit score changes and provides improvement tips',
        type: 'credit_monitor',
        status: 'active',
        priority: 'medium',
        conditions: [
          { type: 'credit_score', value: 700, operator: '<' }
        ],
        actions: [
          { type: 'notification', message: 'Your credit score could be improved. Focus on paying bills on time and reducing credit utilization.', action: 'credit_tips' }
        ],
        frequency: 'monthly'
      },
      {
        id: 'goal-progress-celebration',
        name: 'Goal Progress Celebration',
        description: 'Celebrates when you reach milestones in your financial goals',
        type: 'goal_alert',
        status: 'active',
        priority: 'low',
        conditions: [
          { type: 'goal_progress', value: 0.25, operator: '>=' }
        ],
        actions: [
          { type: 'notification', message: '🎉 Congratulations! You\'ve made great progress on your financial goals!', action: 'view_goals' }
        ],
        frequency: 'on_condition'
      },
      {
        id: 'spending-pattern-alert',
        name: 'Spending Pattern Alert',
        description: 'Detects unusual spending patterns and provides insights',
        type: 'spending_limit',
        status: 'active',
        priority: 'medium',
        conditions: [
          { type: 'daily_spending', value: 'monthly_average', operator: '>' }
        ],
        actions: [
          { type: 'notification', message: 'Your spending is higher than usual this month. Review your expenses to stay on track.', action: 'review_spending' }
        ],
        frequency: 'weekly'
      },
      {
        id: 'bill-due-reminder',
        name: 'Bill Due Reminder',
        description: 'Reminds you of upcoming bills and suggests payment strategies',
        type: 'bill_reminder',
        status: 'active',
        priority: 'high',
        conditions: [
          { type: 'bill_due_date', value: 7, operator: '<=' }
        ],
        actions: [
          { type: 'notification', message: 'Bills are due soon! Ensure you have sufficient funds in your account.', action: 'view_accounts' }
        ],
        frequency: 'daily'
      }
    ]
    
    setAutomations(defaultAutomations)
  }, [])

  // Check automation conditions and trigger actions
  const checkAutomations = useCallback(() => {
    const now = new Date()
    
    automations.forEach(automation => {
      if (automation.status !== 'active') return
      
      let shouldTrigger = false
      let triggerData = {}
      
      // Check emergency fund condition
      if (automation.type === 'savings_boost') {
        const emergencyFundMonths = financialData.summary.monthlyExpenses > 0 ? 
          financialData.summary.emergencyFund / financialData.summary.monthlyExpenses : 0
        
        if (emergencyFundMonths < 3) {
          shouldTrigger = true
          triggerData = { 
            emergencyFundMonths, 
            targetMonths: 3,
            monthlyContribution: financialData.summary.monthlyExpenses * 0.1
          }
        }
      }
      
      // Check credit score condition
      if (automation.type === 'credit_monitor') {
        if (financialData.summary.creditScore < 700) {
          shouldTrigger = true
          triggerData = { 
            currentScore: financialData.summary.creditScore,
            targetScore: 750,
            pointsToImprove: 750 - financialData.summary.creditScore
          }
        }
      }
      
      // Check goal progress condition
      if (automation.type === 'goal_alert') {
        financialData.goals.forEach(goal => {
          if (goal.targetAmount && goal.currentAmount) {
            const progress = goal.currentAmount / goal.targetAmount
            if (progress >= 0.25) {
              shouldTrigger = true
              triggerData = { goal, progress: progress * 100 }
            }
          }
        })
      }
      
      // Check spending pattern condition
      if (automation.type === 'spending_limit') {
        if (financialData.transactions.length > 0) {
          const recentTransactions = financialData.transactions
            .filter(tx => {
              const txDate = new Date(tx.date)
              const daysDiff = (now.getTime() - txDate.getTime()) / (1000 * 60 * 60 * 24)
              return daysDiff <= 30
            })
          
          const totalSpending = recentTransactions.reduce((sum, tx) => sum + Math.abs(tx.amount), 0)
          const avgDailySpending = totalSpending / 30
          const monthlyAverage = financialData.summary.monthlyExpenses / 30
          
          if (avgDailySpending > monthlyAverage * 1.2) {
            shouldTrigger = true
            triggerData = { 
              currentSpending: avgDailySpending,
              averageSpending: monthlyAverage,
              overspending: avgDailySpending - monthlyAverage
            }
          }
        }
      }
      
      // Check bill reminder condition
      if (automation.type === 'bill_reminder') {
        // Simulate bill due dates (in real app, this would come from bill data)
        const daysUntilBills = Math.floor(Math.random() * 14) + 1
        if (daysUntilBills <= 7) {
          shouldTrigger = true
          triggerData = { 
            daysUntilBills,
            estimatedAmount: financialData.summary.monthlyExpenses * 0.3
          }
        }
      }
      
      // Trigger automation if conditions are met
      if (shouldTrigger && (!automation.lastTriggered || 
          (now.getTime() - automation.lastTriggered.getTime()) > 24 * 60 * 60 * 1000)) {
        
        // Update last triggered time
        setAutomations(prev => prev.map(a => 
          a.id === automation.id ? { ...a, lastTriggered: now } : a
        ))
        
        // Trigger automation action
        if (onAutomationTriggered) {
          onAutomationTriggered(automation, triggerData)
        }
        
        console.log(`Automation triggered: ${automation.name}`, triggerData)
      }
    })
  }, [automations, financialData, onAutomationTriggered])

  // Check automations periodically
  useEffect(() => {
    const interval = setInterval(checkAutomations, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [checkAutomations])

  // Toggle automation status
  const toggleAutomation = (automationId: string) => {
    setAutomations(prev => prev.map(a => 
      a.id === automationId ? 
        { ...a, status: a.status === 'active' ? 'paused' : 'active' } : 
        a
    ))
  }

  // Get automation icon
  const getAutomationIcon = (type: string) => {
    switch (type) {
      case 'bill_reminder':
        return <Calendar className="w-5 h-5" />
      case 'goal_alert':
        return <Target className="w-5 h-5" />
      case 'spending_limit':
        return <TrendingDown className="w-5 h-5" />
      case 'credit_monitor':
        return <CreditCard className="w-5 h-5" />
      case 'savings_boost':
        return <PiggyBank className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400'
      case 'medium':
        return 'text-yellow-400'
      case 'low':
        return 'text-green-400'
      default:
        return 'text-gray-400'
    }
  }

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400'
      case 'paused':
        return 'text-yellow-400'
      case 'draft':
        return 'text-gray-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <>
      {/* Automation System Button */}
      <button
        onClick={() => setShowAutomation(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
      >
        <Zap className="w-5 h-5" />
        AI Automation
      </button>

      {/* Automation System Modal */}
      <AnimatePresence>
        {showAutomation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700 bg-gray-750">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">AI Automation System</h2>
                      <p className="text-gray-400">Proactive financial management powered by AI</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAutomation(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Automation Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-robot-green">
                      {automations.filter(a => a.status === 'active').length}
                    </div>
                    <div className="text-sm text-gray-400">Active Automations</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-robot-blue">
                      {automations.filter(a => a.status === 'paused').length}
                    </div>
                    <div className="text-sm text-gray-400">Paused</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      {automations.filter(a => a.lastTriggered).length}
                    </div>
                    <div className="text-sm text-gray-400">Triggered Today</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      {automations.filter(a => a.priority === 'high').length}
                    </div>
                    <div className="text-sm text-gray-400">High Priority</div>
                  </div>
                </div>

                {/* Automation Rules */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Active Automation Rules</h3>
                  
                  {automations.map((automation) => (
                    <motion.div
                      key={automation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-700/30 border border-gray-600 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-robot-green to-robot-blue rounded-lg flex items-center justify-center">
                            {getAutomationIcon(automation.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-white">{automation.name}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(automation.priority)} bg-gray-700`}>
                                {automation.priority} priority
                              </span>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(automation.status)} bg-gray-700`}>
                                {automation.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400">{automation.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>Frequency: {automation.frequency}</span>
                              {automation.lastTriggered && (
                                <span>Last triggered: {automation.lastTriggered.toLocaleDateString()}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleAutomation(automation.id)}
                            className={`p-2 rounded-lg transition-colors duration-200 ${
                              automation.status === 'active' 
                                ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                                : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                            }`}
                          >
                            {automation.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => setSelectedAutomation(automation)}
                            className="p-2 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg transition-colors duration-200"
                          >
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 pt-6">
                  <button
                    onClick={() => setShowAutomation(false)}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-xl font-medium transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={checkAutomations}
                    className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Check Automations Now
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
