import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Lightbulb,
  Eye,
  EyeOff,
  Calendar,
  DollarSign,
  Target,
  Zap,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

interface BudgetCategory {
  id: string
  name: string
  budgeted: number
  spent: number
  remaining: number
  color: string
  icon: string
  trend: 'up' | 'down' | 'stable'
  status: 'under' | 'over' | 'warning' | 'on-track'
}

interface BudgetVisualizationProps {
  categories: BudgetCategory[]
  monthlyIncome: number
  monthlyExpenses: number
  monthlySavings: number
  showAmounts: boolean
  onToggleAmounts: () => void
  onCategoryClick: (categoryId: string) => void
}

export default function BudgetVisualization({
  categories,
  monthlyIncome,
  monthlyExpenses,
  monthlySavings,
  showAmounts,
  onToggleAmounts,
  onCategoryClick
}: BudgetVisualizationProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'current' | 'previous' | 'next'>('current')
  const [selectedView, setSelectedView] = useState<'overview' | 'categories' | 'trends'>('overview')

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) return '$0'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatPercentage = (amount: number, total: number) => {
    if (isNaN(amount) || isNaN(total) || total === 0) return '0%'
    return `${Math.round((amount / total) * 100)}%`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'under': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'over': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'on-track': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-400" />
      case 'down': return <TrendingDown className="w-4 h-4 text-green-400" />
      case 'stable': return <BarChart3 className="w-4 h-4 text-blue-400" />
      default: return <BarChart3 className="w-4 h-4 text-gray-400" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-red-400'
      case 'down': return 'text-green-400'
      case 'stable': return 'text-blue-400'
      default: return 'text-gray-400'
    }
  }

  // Calculate budget insights
  const budgetInsights = useMemo(() => {
    const insights = []
    
    // Spending vs Income ratio
    const spendingRatio = monthlyExpenses / monthlyIncome
    if (spendingRatio > 0.8) {
      insights.push({
        type: 'warning',
        message: 'Your spending is over 80% of income. Consider reducing expenses.',
        icon: AlertTriangle,
        color: 'text-yellow-400'
      })
    } else if (spendingRatio < 0.5) {
      insights.push({
        type: 'positive',
        message: 'Excellent! You\'re spending less than 50% of your income.',
        icon: TrendingUp,
        color: 'text-green-400'
      })
    }

    // Savings rate
    const savingsRate = monthlySavings / monthlyIncome
    if (savingsRate < 0.1) {
      insights.push({
        type: 'warning',
        message: 'Aim to save at least 10% of your income for financial security.',
        icon: Target,
        color: 'text-orange-400'
      })
    } else if (savingsRate > 0.3) {
      insights.push({
        type: 'positive',
        message: 'Outstanding! You\'re saving over 30% of your income.',
        icon: TrendingUp,
        color: 'text-green-400'
      })
    }

    // Over-budget categories
    const overBudgetCategories = categories.filter(cat => cat.status === 'over')
    if (overBudgetCategories.length > 0) {
      insights.push({
        type: 'warning',
        message: `${overBudgetCategories.length} category(ies) are over budget.`,
        icon: AlertTriangle,
        color: 'text-red-400'
      })
    }

    return insights
  }, [categories, monthlyIncome, monthlyExpenses, monthlySavings])

  // Calculate category percentages for pie chart
  const categoryPercentages = useMemo(() => {
    const total = categories.reduce((sum, cat) => sum + cat.spent, 0)
    return categories.map(cat => ({
      ...cat,
      percentage: total > 0 ? (cat.spent / total) * 100 : 0
    }))
  }, [categories])

  const periods = [
    { id: 'previous', label: 'Previous Month', icon: ChevronLeft },
    { id: 'current', label: 'Current Month', icon: BarChart3 },
    { id: 'next', label: 'Next Month', icon: ChevronRight }
  ]

  const views = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'categories', label: 'Categories', icon: PieChart },
    { id: 'trends', label: 'Trends', icon: TrendingUp }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Budget Visualization</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleAmounts}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
            title={showAmounts ? 'Hide Amounts' : 'Show Amounts'}
          >
            {showAmounts ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg p-1">
        {periods.map((period) => {
          const IconComponent = period.icon
          return (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id as any)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedPeriod === period.id
                  ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {period.label}
            </button>
          )
        })}
      </div>

      {/* View Selector */}
      <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg p-1">
        {views.map((view) => {
          const IconComponent = view.icon
          return (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id as any)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedView === view.id
                  ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {view.label}
            </button>
          )
        })}
      </div>

      {/* Overview View */}
      {selectedView === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Income Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Monthly Income</h4>
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {showAmounts ? formatCurrency(monthlyIncome) : '••••••'}
            </div>
            <div className="text-green-400 text-sm">Primary source of funds</div>
          </motion.div>

          {/* Expenses Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Monthly Expenses</h4>
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {showAmounts ? formatCurrency(monthlyExpenses) : '••••••'}
            </div>
            <div className="text-red-400 text-sm">
              {formatPercentage(monthlyExpenses, monthlyIncome)} of income
            </div>
          </motion.div>

          {/* Savings Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Monthly Savings</h4>
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {showAmounts ? formatCurrency(monthlySavings) : '••••••'}
            </div>
            <div className="text-blue-400 text-sm">
              {formatPercentage(monthlySavings, monthlyIncome)} of income
            </div>
          </motion.div>
        </div>
      )}

      {/* Categories View */}
      {selectedView === 'categories' && (
        <div className="space-y-6">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer group"
                onClick={() => onCategoryClick(category.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: category.color }}>
                      {category.icon}
                    </div>
                    <h5 className="font-medium text-white">{category.name}</h5>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(category.status)}`}>
                    {category.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Budgeted:</span>
                    <span className="text-white">
                      {showAmounts ? formatCurrency(category.budgeted) : '••••••'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Spent:</span>
                    <span className="text-white">
                      {showAmounts ? formatCurrency(category.spent) : '••••••'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Remaining:</span>
                    <span className={`font-medium ${
                      category.remaining >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {showAmounts ? formatCurrency(category.remaining) : '••••••'}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className="h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((category.spent / category.budgeted) * 100, 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span>{formatPercentage(category.spent, category.budgeted)}</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(category.trend)}
                      <span className={getTrendColor(category.trend)}>
                        {category.trend === 'up' ? 'Increasing' : category.trend === 'down' ? 'Decreasing' : 'Stable'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Trends View */}
      {selectedView === 'trends' && (
        <div className="space-y-6">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-4">Spending Trends</h4>
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-12 h-12 text-robot-green" />
              </div>
              <h5 className="text-xl font-semibold text-white mb-2">Trends Coming Soon</h5>
              <p className="text-gray-400">Advanced trend analysis and forecasting will be available in the next phase</p>
            </div>
          </div>
        </div>
      )}

      {/* AI Budget Insights */}
      {budgetInsights.length > 0 && (
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-robot-green" />
            AI Budget Insights
          </h4>
          
          <div className="space-y-3">
            {budgetInsights.map((insight, index) => {
              const IconComponent = insight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30"
                >
                  <IconComponent className={`w-5 h-5 ${insight.color} mt-0.5 flex-shrink-0`} />
                  <p className="text-gray-300 text-sm">{insight.message}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </motion.div>
  )
}
