import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { 
  PieChart, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Eye,
  EyeOff,
  Lightbulb,
  Zap,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Target
} from 'lucide-react'

interface CategoryData {
  id: string
  name: string
  amount: number
  color: string
  icon: string
  trend: 'up' | 'down' | 'stable'
  percentage: number
}

interface CategoryBreakdownChartProps {
  categories: CategoryData[]
  showAmounts: boolean
  onToggleAmounts: () => void
  onCategoryClick: (category: string) => void
}

export default function CategoryBreakdownChart({
  categories,
  showAmounts,
  onToggleAmounts,
  onCategoryClick
}: CategoryBreakdownChartProps) {
  const [selectedView, setSelectedView] = useState<'pie' | 'bar' | 'insights'>('pie')
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'quarter' | 'year'>('month')

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

  // Calculate insights based on category data
  const insights = useMemo(() => {
    if (categories.length === 0) return []
    
    const insights = []
    
    // Find highest spending category
    const highestSpending = categories.reduce((max, cat) => 
      cat.amount > max.amount ? cat : max, categories[0])
    
    if (highestSpending && highestSpending.percentage > 40) {
      insights.push({
        type: 'warning',
        message: `${highestSpending.name} accounts for ${highestSpending.percentage}% of your spending. Consider diversifying.`,
        icon: AlertTriangle,
        color: 'text-yellow-400'
      })
    }
    
    // Check for balanced spending
    const balancedCategories = categories.filter(cat => cat.percentage >= 10 && cat.percentage <= 30)
    if (balancedCategories.length >= 5) {
      insights.push({
        type: 'positive',
        message: 'Excellent! Your spending is well-balanced across multiple categories.',
        icon: CheckCircle,
        color: 'text-green-400'
      })
    }
    
    // Check for increasing trends
    const increasingCategories = categories.filter(cat => cat.trend === 'up')
    if (increasingCategories.length > categories.length * 0.6) {
      insights.push({
        type: 'warning',
        message: 'Most categories show increasing spending. Monitor your budget closely.',
        icon: TrendingUp,
        color: 'text-red-400'
      })
    }
    
    return insights
  }, [categories])

  // Define Calendar component before use
  const Calendar = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )

  const views = [
    { id: 'pie', label: 'Pie Chart', icon: PieChart },
    { id: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { id: 'insights', label: 'Insights', icon: Lightbulb }
  ]

  const periods = [
    { id: 'month', label: 'This Month', icon: Calendar },
    { id: 'quarter', label: 'This Quarter', icon: BarChart3 },
    { id: 'year', label: 'This Year', icon: TrendingUp }
  ]

  // Calculate SVG path for pie chart segments
  const createPieSegment = (startAngle: number, endAngle: number, radius: number) => {
    const startX = radius * Math.cos(startAngle)
    const startY = radius * Math.sin(startAngle)
    const endX = radius * Math.cos(endAngle)
    const endY = radius * Math.sin(endAngle)
    
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0
    
    return [
      `M ${startX} ${startY}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      'L 0 0'
    ].join(' ')
  }

  const totalAmount = categories.reduce((sum, cat) => sum + cat.amount, 0)
  const radius = 80

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Category Breakdown</h3>
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

      {/* Chart Container */}
      <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        {selectedView === 'pie' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Spending by Category</h4>
            
            {/* Pie Chart */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg width="200" height="200" viewBox="-100 -100 200 200">
                  {categories.map((category, index) => {
                    const startAngle = categories
                      .slice(0, index)
                      .reduce((sum, cat) => sum + (cat.amount / totalAmount) * 2 * Math.PI, 0)
                    const endAngle = startAngle + (category.amount / totalAmount) * 2 * Math.PI
                    
                    return (
                      <motion.path
                        key={category.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        d={createPieSegment(startAngle, endAngle, radius)}
                        fill={category.color}
                        stroke="#1f2937"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => onCategoryClick(category.id)}
                      />
                    )
                  })}
                  
                  {/* Center circle for donut effect */}
                  <circle cx="0" cy="0" r="40" fill="#1f2937" />
                  
                  {/* Center text */}
                  <text x="0" y="0" textAnchor="middle" dy=".3em" className="text-white text-sm font-medium">
                    {showAmounts ? formatCurrency(totalAmount) : '••••••'}
                  </text>
                  <text x="0" y="20" textAnchor="middle" className="text-gray-400 text-xs">
                    Total
                  </text>
                </svg>
              </div>
            </div>
            
            {/* Category Legend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 cursor-pointer hover:bg-gray-700/50 transition-colors"
                  onClick={() => onCategoryClick(category.id)}
                >
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-white"
                    style={{ backgroundColor: category.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{category.name}</span>
                      <span className="text-gray-400 text-sm">{category.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {showAmounts ? formatCurrency(category.amount) : '••••••'}
                      </span>
                      <div className="flex items-center gap-1">
                        {category.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 text-red-400" />
                        ) : category.trend === 'down' ? (
                          <TrendingDown className="w-3 h-3 text-green-400" />
                        ) : (
                          <BarChart3 className="w-3 h-3 text-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'bar' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Category Comparison</h4>
            
            {/* Bar Chart */}
            <div className="space-y-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white font-medium">{category.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">
                        {showAmounts ? formatCurrency(category.amount) : '••••••'}
                      </span>
                      <span className="text-gray-500">{category.percentage.toFixed(1)}%</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div 
                      className="h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'insights' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">AI-Powered Insights</h4>
            
            {insights.length > 0 ? (
              <div className="space-y-3">
                {insights.map((insight, index) => {
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
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-robot-green" />
                </div>
                <h5 className="text-lg font-semibold text-white mb-2">Well Balanced!</h5>
                <p className="text-gray-400">Your spending across categories looks healthy and balanced.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
