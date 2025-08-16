import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Calendar,
  DollarSign,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  Zap,
  Lightbulb,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

interface SpendingData {
  date: string
  amount: number
  category: string
  type: 'income' | 'expense' | 'transfer'
}

interface SpendingTrendsChartProps {
  data: SpendingData[]
  showAmounts: boolean
  onToggleAmounts: () => void
  onCategoryClick: (category: string) => void
}

export default function SpendingTrendsChart({
  data,
  showAmounts,
  onToggleAmounts,
  onCategoryClick
}: SpendingTrendsChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [selectedView, setSelectedView] = useState<'trends' | 'patterns' | 'insights'>('trends')

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) return '$0'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }

  // Calculate spending trends and insights
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return []
    
    const now = new Date()
    const periods = {
      '7d': 7,
      '30d': 30,
      '90d': 90,
      '1y': 365
    }
    
    const daysBack = periods[selectedPeriod]
    const cutoffDate = new Date(now.getTime() - (daysBack * 24 * 60 * 60 * 1000))
    
    // Filter data by selected period
    const filteredData = data.filter(item => new Date(item.date) >= cutoffDate)
    
    // Group by date and calculate daily totals
    const dailyTotals = new Map<string, number>()
    filteredData.forEach(item => {
      const date = item.date.split('T')[0] // Get just the date part
      dailyTotals.set(date, (dailyTotals.get(date) || 0) + item.amount)
    })
    
    // Sort by date and create chart data
    const sortedDates = Array.from(dailyTotals.keys()).sort()
    const chartPoints = sortedDates.map(date => ({
      date,
      amount: dailyTotals.get(date) || 0,
      formattedDate: formatDate(date)
    }))
    
    return chartPoints
  }, [data, selectedPeriod])

  // Calculate insights
  const insights = useMemo(() => {
    if (chartData.length === 0) return []
    
    const totalSpending = chartData.reduce((sum, point) => sum + Math.abs(Math.min(point.amount, 0)), 0)
    const totalIncome = chartData.reduce((sum, point) => sum + Math.max(point.amount, 0), 0)
    const avgDailySpending = totalSpending / chartData.length
    const avgDailyIncome = totalIncome / chartData.length
    
    const insights = []
    
    // Spending patterns
    if (avgDailySpending > avgDailyIncome * 0.8) {
      insights.push({
        type: 'warning',
        message: 'Daily spending is high relative to income. Consider reducing expenses.',
        icon: AlertTriangle,
        color: 'text-yellow-400'
      })
    } else if (avgDailySpending < avgDailyIncome * 0.5) {
      insights.push({
        type: 'positive',
        message: 'Excellent spending control! You\'re well below your income.',
        icon: CheckCircle,
        color: 'text-green-400'
      })
    }
    
    // Trend analysis
    if (chartData.length >= 2) {
      const recent = chartData.slice(-7)
      const earlier = chartData.slice(-14, -7)
      
      if (recent.length > 0 && earlier.length > 0) {
        const recentAvg = recent.reduce((sum, point) => sum + Math.abs(Math.min(point.amount, 0)), 0) / recent.length
        const earlierAvg = earlier.reduce((sum, point) => sum + Math.abs(Math.min(point.amount, 0)), 0) / earlier.length
        
        if (recentAvg > earlierAvg * 1.2) {
          insights.push({
            type: 'warning',
            message: 'Spending has increased recently. Monitor your budget closely.',
            icon: TrendingUp,
            color: 'text-red-400'
          })
        } else if (recentAvg < earlierAvg * 0.8) {
          insights.push({
            type: 'positive',
            message: 'Great job! Your spending has decreased recently.',
            icon: TrendingDown,
            color: 'text-green-400'
          })
        }
      }
    }
    
    return insights
  }, [chartData])

  const periods = [
    { id: '7d', label: '7 Days', icon: Calendar },
    { id: '30d', label: '30 Days', icon: BarChart3 },
    { id: '90d', label: '90 Days', icon: TrendingUp },
    { id: '1y', label: '1 Year', icon: Calendar }
  ]

  const views = [
    { id: 'trends', label: 'Trends', icon: TrendingUp },
    { id: 'patterns', label: 'Patterns', icon: BarChart3 },
    { id: 'insights', icon: Lightbulb }
  ]

  // Calculate chart dimensions and scaling
  const maxAmount = Math.max(...chartData.map(point => Math.abs(point.amount)), 1)
  const minAmount = Math.min(...chartData.map(point => Math.abs(point.amount)), 0)
  const range = maxAmount - minAmount

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Spending Trends</h3>
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
              {view.id === 'insights' ? (
                <>
                  <IconComponent className="w-4 h-4" />
                  Insights
                </>
              ) : (
                <>
                  <IconComponent className="w-4 h-4" />
                  {view.label}
                </>
              )}
            </button>
          )
        })}
      </div>

      {/* Chart Container */}
      <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        {selectedView === 'trends' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Spending Trends Over Time</h4>
            
            {/* Chart */}
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
                {showAmounts ? (
                  <>
                    <span>{formatCurrency(maxAmount)}</span>
                    <span>{formatCurrency(maxAmount * 0.75)}</span>
                    <span>{formatCurrency(maxAmount * 0.5)}</span>
                    <span>{formatCurrency(maxAmount * 0.25)}</span>
                    <span>{formatCurrency(0)}</span>
                  </>
                ) : (
                  <>
                    <span>••••••</span>
                    <span>••••••</span>
                    <span>••••••</span>
                    <span>••••••</span>
                    <span>••••••</span>
                  </>
                )}
              </div>
              
              {/* Chart area */}
              <div className="ml-12 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-t border-gray-700/30" />
                  ))}
                </div>
                
                {/* Data line */}
                {chartData.length > 0 && (
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d={chartData.map((point, index) => {
                        const x = (index / (chartData.length - 1)) * 100
                        const y = 100 - ((Math.abs(point.amount) - minAmount) / range) * 100
                        return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`
                      }).join(' ')}
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
                
                {/* Data points */}
                {chartData.map((point, index) => {
                  const x = (index / (chartData.length - 1)) * 100
                  const y = 100 - ((Math.abs(point.amount) - minAmount) / range) * 100
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="absolute w-3 h-3 bg-robot-green rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"
                      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                      title={`${point.formattedDate}: ${showAmounts ? formatCurrency(point.amount) : '••••••'}`}
                    />
                  )
                })}
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-400">
                {chartData.length > 0 && (
                  <>
                    <span>{chartData[0]?.formattedDate}</span>
                    <span>{chartData[Math.floor(chartData.length / 2)]?.formattedDate}</span>
                    <span>{chartData[chartData.length - 1]?.formattedDate}</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-robot-green">
                  {showAmounts ? formatCurrency(chartData.reduce((sum, point) => sum + Math.abs(Math.min(point.amount, 0)), 0)) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Total Spending</div>
              </div>
              
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-robot-blue">
                  {showAmounts ? formatCurrency(chartData.reduce((sum, point) => sum + Math.max(point.amount, 0), 0)) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Total Income</div>
              </div>
              
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-robot-purple">
                  {showAmounts ? formatCurrency(chartData.reduce((sum, point) => sum + point.amount, 0)) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Net Flow</div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'patterns' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Spending Patterns</h4>
            
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-12 h-12 text-robot-green" />
              </div>
              <h5 className="text-xl font-semibold text-white mb-2">Patterns Coming Soon</h5>
              <p className="text-gray-400">Advanced pattern analysis will be available in the next phase</p>
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
                <h5 className="text-lg font-semibold text-white mb-2">Great Job!</h5>
                <p className="text-gray-400">No concerning patterns detected. Keep up the good work!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
