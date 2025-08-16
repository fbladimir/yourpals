import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Lightbulb, 
  Target, 
  DollarSign,
  Calendar,
  BarChart3,
  PiggyBank,
  CreditCard,
  Zap,
  Eye,
  EyeOff,
  RefreshCw,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'

interface AIInsightsEngineProps {
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  onOpenChat: () => void
}

interface FinancialInsight {
  id: string
  type: 'spending_pattern' | 'savings_opportunity' | 'budget_alert' | 'investment_opportunity' | 'risk_alert' | 'goal_progress' | 'trend_analysis'
  title: string
  message: string
  impact: 'positive' | 'negative' | 'neutral' | 'opportunity'
  confidence: number
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: string
  actionable: boolean
  action?: string
  data?: any
  trend?: 'up' | 'down' | 'stable'
  icon: any
  color: string
}

export default function AIInsightsEngine({ 
  accounts, 
  transactions, 
  summary, 
  insights, 
  goals, 
  onOpenChat 
}: AIInsightsEngineProps) {
  const [generatedInsights, setGeneratedInsights] = useState<FinancialInsight[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showInsights, setShowInsights] = useState(true)
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')

  // Analyze financial data and generate insights
  const analyzeFinancialData = useMemo(() => {
    if (!transactions.length || !summary) return []

    const insights: FinancialInsight[] = []
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    // Get current month transactions
    const currentMonthTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.date)
      return txDate.getMonth() === currentMonth && txDate.getFullYear() === currentYear
    })

    // Get previous month transactions for comparison
    const previousMonthTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.date)
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear
      return txDate.getMonth() === prevMonth && txDate.getFullYear() === prevYear
    })

    // 1. Spending Pattern Analysis
    const currentSpending = currentMonthTransactions
      .filter(tx => Number(tx.amount) < 0)
      .reduce((sum, tx) => sum + Math.abs(Number(tx.amount)), 0)
    
    const previousSpending = previousMonthTransactions
      .filter(tx => Number(tx.amount) < 0)
      .reduce((sum, tx) => sum + Math.abs(Number(tx.amount)), 0)

    const spendingChange = previousSpending > 0 ? ((currentSpending - previousSpending) / previousSpending) * 100 : 0

    if (spendingChange > 20) {
      insights.push({
        id: 'spending-increase',
        type: 'spending_pattern',
        title: 'Spending Increase Detected',
        message: `Your spending is ${Math.abs(spendingChange).toFixed(1)}% higher than last month. This could impact your savings goals.`,
        impact: 'negative',
        confidence: 0.85,
        priority: 'high',
        category: 'spending',
        actionable: true,
        action: 'Review Budget',
        trend: 'up',
        icon: TrendingUp,
        color: 'red'
      })
    } else if (spendingChange < -10) {
      insights.push({
        id: 'spending-decrease',
        type: 'spending_pattern',
        title: 'Great Spending Control!',
        message: `You've reduced spending by ${Math.abs(spendingChange).toFixed(1)}% compared to last month. Keep it up!`,
        impact: 'positive',
        confidence: 0.90,
        priority: 'medium',
        category: 'spending',
        actionable: false,
        trend: 'down',
        icon: TrendingDown,
        color: 'green'
      })
    }

    // 2. Savings Analysis
    if (summary.monthlySavings !== undefined) {
      const savingsRate = summary.monthlyIncome > 0 ? (summary.monthlySavings / summary.monthlyIncome) * 100 : 0
      
      if (savingsRate < 10) {
        insights.push({
          id: 'low-savings-rate',
          type: 'savings_opportunity',
          title: 'Low Savings Rate',
          message: `You're saving only ${savingsRate.toFixed(1)}% of your income. Aim for 20%+ for financial security.`,
          impact: 'opportunity',
          confidence: 0.80,
          priority: 'high',
          category: 'savings',
          actionable: true,
          action: 'Optimize Budget',
          trend: 'down',
          icon: PiggyBank,
          color: 'orange'
        })
      } else if (savingsRate > 25) {
        insights.push({
          id: 'excellent-savings',
          type: 'savings_opportunity',
          title: 'Excellent Savings Rate!',
          message: `You're saving ${savingsRate.toFixed(1)}% of your income. Consider investment opportunities.`,
          impact: 'positive',
          confidence: 0.95,
          priority: 'medium',
          category: 'savings',
          actionable: true,
          action: 'Investment Advice',
          trend: 'up',
          icon: TrendingUp,
          color: 'green'
        })
      }
    }

    // 3. Account Balance Analysis
    if (accounts.length > 0) {
      const totalBalance = accounts.reduce((sum, acc) => sum + (acc.balance || 0), 0)
      const emergencyFund = summary.monthlyExpenses * 6 // 6 months of expenses
      
      if (totalBalance < emergencyFund) {
        insights.push({
          id: 'emergency-fund',
          type: 'risk_alert',
          title: 'Emergency Fund Alert',
          message: `Your current balance covers ${Math.ceil(totalBalance / summary.monthlyExpenses)} months of expenses. Aim for 6+ months.`,
          impact: 'negative',
          confidence: 0.90,
          priority: 'high',
          category: 'safety',
          actionable: true,
          action: 'Build Emergency Fund',
          trend: 'down',
          icon: AlertTriangle,
          color: 'red'
        })
      }

      // High balance opportunity
      if (totalBalance > emergencyFund * 2) {
        insights.push({
          id: 'investment-opportunity',
          type: 'investment_opportunity',
          title: 'Investment Opportunity',
          message: `You have excess funds beyond emergency needs. Consider investing for long-term growth.`,
          impact: 'opportunity',
          confidence: 0.75,
          priority: 'medium',
          category: 'investment',
          actionable: true,
          action: 'Investment Strategy',
          trend: 'up',
          icon: TrendingUp,
          color: 'blue'
        })
      }
    }

    // 4. Category Spending Analysis
    const categorySpending = currentMonthTransactions
      .filter(tx => Number(tx.amount) < 0)
      .reduce((acc, tx) => {
        const category = tx.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + Math.abs(Number(tx.amount))
        return acc
      }, {} as Record<string, number>)

    const topCategory = Object.entries(categorySpending)
      .sort(([,a], [,b]) => (b as number) - (a as number))[0]

    if (topCategory && (topCategory[1] as number) > summary.monthlyIncome * 0.3) {
      insights.push({
        id: 'high-category-spending',
        type: 'budget_alert',
        title: 'High Category Spending',
        message: `${topCategory[0]} accounts for ${(((topCategory[1] as number) / summary.monthlyIncome) * 100).toFixed(1)}% of your income.`,
        impact: 'negative',
        confidence: 0.85,
        priority: 'medium',
        category: 'budget',
        actionable: true,
        action: 'Review Category',
        trend: 'up',
        icon: BarChart3,
        color: 'orange'
      })
    }

    // 5. Goal Progress Analysis
    if (goals.length > 0) {
      const activeGoals = goals.filter(goal => goal.status === 'active')
      const onTrackGoals = activeGoals.filter(goal => {
        // Simple goal progress check (you can enhance this)
        return goal.progress && goal.progress > 50
      })

      if (onTrackGoals.length > 0) {
        insights.push({
          id: 'goals-on-track',
          type: 'goal_progress',
          title: 'Goals On Track!',
          message: `${onTrackGoals.length} of your ${activeGoals.length} goals are progressing well.`,
          impact: 'positive',
          confidence: 0.80,
          priority: 'low',
          category: 'goals',
          actionable: false,
          trend: 'up',
          icon: Target,
          color: 'green'
        })
      }
    }

    // 6. Income vs Expenses Trend
    if (summary.monthlyIncome && summary.monthlyExpenses) {
      const incomeExpenseRatio = summary.monthlyExpenses / summary.monthlyIncome
      
      if (incomeExpenseRatio > 0.9) {
        insights.push({
          id: 'tight-budget',
          type: 'budget_alert',
          title: 'Tight Budget Alert',
          message: `Your expenses are ${(incomeExpenseRatio * 100).toFixed(1)}% of income. Consider reducing expenses.`,
          impact: 'negative',
          confidence: 0.90,
          priority: 'high',
          category: 'budget',
          actionable: true,
          action: 'Budget Review',
          trend: 'up',
          icon: AlertTriangle,
          color: 'red'
        })
      }
    }

    return insights.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
      return priorityOrder[b.priority] - priorityOrder[a.priority]
    })
  }, [transactions, summary, accounts, goals])

  // Update insights when analysis changes
  useEffect(() => {
    setGeneratedInsights(analyzeFinancialData)
  }, [analyzeFinancialData])

  const handleRefreshInsights = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      // Force re-analysis
      setGeneratedInsights([...analyzeFinancialData])
    }, 1000)
  }

  const filteredInsights = generatedInsights.filter(insight => 
    filter === 'all' || insight.priority === filter
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'high': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'medium': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'low': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-400'
      case 'negative': return 'text-red-400'
      case 'opportunity': return 'text-blue-400'
      case 'neutral': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  if (!showInsights) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-robot-orange" />
            <span className="text-sm text-gray-400">Intelligent analysis of your financial patterns</span>
          </div>
        </div>
        
        <button
          onClick={handleRefreshInsights}
          disabled={isAnalyzing}
          className="flex items-center gap-2 px-3 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors disabled:opacity-50 text-sm"
        >
          <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {(['all', 'high', 'medium', 'low'] as const).map((priority) => (
          <button
            key={priority}
            onClick={() => setFilter(priority)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-200 text-sm ${
              filter === priority
                ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {priority === 'all' ? 'All' : priority.charAt(0).toUpperCase() + priority.slice(1)}
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      {filteredInsights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredInsights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`p-4 rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
                insight.priority === 'critical' 
                  ? 'bg-red-500/10 border-red-500/30 hover:border-red-500/50' 
                  : insight.priority === 'high'
                  ? 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50'
                  : insight.priority === 'medium'
                  ? 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
                  : 'bg-gray-500/10 border-gray-500/30 hover:border-gray-500/50'
              }`}
              onClick={() => onOpenChat()}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getPriorityColor(insight.priority)}`}>
                  <insight.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-white text-sm">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                      {insight.priority.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {insight.message}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium ${getImpactColor(insight.impact)}`}>
                      {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)} Impact
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {insight.confidence * 100}% confidence
                      </span>
                      {insight.trend && (
                        insight.trend === 'up' ? (
                          <TrendingUp className={`w-4 h-4 ${
                            insight.impact === 'positive' ? 'text-green-400' : 'text-red-400'
                          }`} />
                        ) : (
                          <TrendingDown className={`w-4 h-4 ${
                            insight.impact === 'positive' ? 'text-green-400' : 'text-red-400'
                          }`} />
                        )
                      )}
                    </div>
                  </div>
                  
                  {insight.actionable && insight.action && (
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-sm font-medium text-robot-green hover:text-robot-blue transition-colors">
                        {insight.action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <span className="text-xs text-gray-500 capitalize">
                        {insight.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-12 h-12 text-robot-green" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">No Insights Available</h4>
          <p className="text-gray-400 mb-4">Link your accounts and add transactions to get personalized AI insights</p>
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
