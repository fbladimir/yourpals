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
  Lightbulb,
  Zap,
  Target,
  Clock,
  AlertTriangle,
  CheckCircle,
  Rocket
} from 'lucide-react'

interface ForecastData {
  date: string
  projectedIncome: number
  projectedExpenses: number
  projectedSavings: number
  confidence: number
}

interface ForecastingChartProps {
  historicalData: any[]
  showAmounts: boolean
  onToggleAmounts: () => void
}

export default function ForecastingChart({
  historicalData,
  showAmounts,
  onToggleAmounts
}: ForecastingChartProps) {
  const [selectedForecast, setSelectedForecast] = useState<'3m' | '6m' | '1y'>('6m')
  const [selectedView, setSelectedView] = useState<'forecast' | 'goals' | 'insights'>('forecast')

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
      year: 'numeric' 
    })
  }

  // Generate forecast data based on historical patterns
  const forecastData = useMemo(() => {
    const now = new Date()
    const months = selectedForecast === '3m' ? 3 : selectedForecast === '6m' ? 6 : 12
    
    const forecast: ForecastData[] = []
    
    for (let i = 1; i <= months; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() + i, 1)
      
      // Simple forecasting based on historical averages (in real app, this would use ML)
      const baseIncome = 5000 // Example base income
      const baseExpenses = 3500 // Example base expenses
      
      // Add some variation and growth - use deterministic values to avoid hydration issues
      const growthFactor = 1 + (i * 0.02) // 2% monthly growth
      const variation = 0.9 + ((i * 0.1) % 0.2) // Deterministic variation based on index
      
      const projectedIncome = baseIncome * growthFactor * variation
      const projectedExpenses = baseExpenses * (1 + (i * 0.01)) * variation
      const projectedSavings = projectedIncome - projectedExpenses
      
      forecast.push({
        date: date.toISOString(),
        projectedIncome,
        projectedExpenses,
        projectedSavings,
        confidence: Math.max(0.7, 1 - (i * 0.05)) // Confidence decreases over time
      })
    }
    
    return forecast
  }, [selectedForecast])

  // Calculate insights based on forecast
  const insights = useMemo(() => {
    if (forecastData.length === 0) return []
    
    const insights = []
    
    // Check savings trajectory
    const avgSavings = forecastData.reduce((sum, point) => sum + point.projectedSavings, 0) / forecastData.length
    if (avgSavings < 0) {
      insights.push({
        type: 'warning',
        message: 'Projected expenses exceed income. Consider reducing spending or increasing income.',
        icon: AlertTriangle,
        color: 'text-red-400'
      })
    } else if (avgSavings > 1000) {
      insights.push({
        type: 'positive',
        message: 'Excellent savings potential! You could save over $1,000 monthly.',
        icon: CheckCircle,
        color: 'text-green-400'
      })
    }
    
    // Check growth potential
    const incomeGrowth = (forecastData[forecastData.length - 1]?.projectedIncome || 0) / (forecastData[0]?.projectedIncome || 1)
    if (incomeGrowth > 1.2) {
      insights.push({
        type: 'positive',
        message: 'Strong income growth projected. Great financial momentum!',
        icon: TrendingUp,
        color: 'text-green-400'
      })
    }
    
    // Check expense trends
    const expenseGrowth = (forecastData[forecastData.length - 1]?.projectedExpenses || 0) / (forecastData[0]?.projectedExpenses || 1)
    if (expenseGrowth > 1.15) {
      insights.push({
        type: 'warning',
        message: 'Expenses growing faster than income. Monitor spending carefully.',
        icon: TrendingUp,
        color: 'text-yellow-400'
      })
    }
    
    return insights
  }, [forecastData])

  const forecasts = [
    { id: '3m', label: '3 Months', icon: Calendar },
    { id: '6m', label: '6 Months', icon: BarChart3 },
    { id: '1y', label: '1 Year', icon: TrendingUp }
  ]

  const views = [
    { id: 'forecast', label: 'Forecast', icon: TrendingUp },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'insights', label: 'Insights', icon: Lightbulb }
  ]

  // Calculate chart dimensions
  const maxAmount = Math.max(
    ...forecastData.map(point => Math.max(point.projectedIncome, point.projectedExpenses)),
    1
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Financial Forecasting</h3>
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

      {/* Forecast Period Selector */}
      <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg p-1">
        {forecasts.map((forecast) => {
          const IconComponent = forecast.icon
          return (
            <button
              key={forecast.id}
              onClick={() => setSelectedForecast(forecast.id as any)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedForecast === forecast.id
                  ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {forecast.label}
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
        {selectedView === 'forecast' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Projected Financial Outlook</h4>
            
            {/* Forecast Chart */}
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
                
                {/* Income line */}
                {forecastData.length > 0 && (
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d={forecastData.map((point, index) => {
                        const x = (index / (forecastData.length - 1)) * 100
                        const y = 100 - (point.projectedIncome / maxAmount) * 100
                        return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`
                      }).join(' ')}
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="5,5"
                    />
                    
                    {/* Expenses line */}
                    <path
                      d={forecastData.map((point, index) => {
                        const x = (index / (forecastData.length - 1)) * 100
                        const y = 100 - (point.projectedExpenses / maxAmount) * 100
                        return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`
                      }).join(' ')}
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="5,5"
                    />
                  </svg>
                )}
                
                {/* Data points */}
                {forecastData.map((point, index) => {
                  const x = (index / (forecastData.length - 1)) * 100
                  const incomeY = 100 - (point.projectedIncome / maxAmount) * 100
                  const expenseY = 100 - (point.projectedExpenses / maxAmount) * 100
                  
                  return (
                    <div key={index} className="absolute" style={{ left: `${x}%` }}>
                      {/* Income point */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"
                        style={{ top: `${incomeY}%`, transform: 'translate(-50%, -50%)' }}
                        title={`Income: ${showAmounts ? formatCurrency(point.projectedIncome) : '••••••'}`}
                      />
                      
                      {/* Expense point */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
                        className="absolute w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"
                        style={{ top: `${expenseY}%`, transform: 'translate(-50%, -50%)' }}
                        title={`Expenses: ${showAmounts ? formatCurrency(point.projectedExpenses) : '••••••'}`}
                      />
                    </div>
                  )
                })}
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-400">
                {forecastData.length > 0 && (
                  <>
                    <span>{formatDate(forecastData[0]?.date)}</span>
                    <span>{formatDate(forecastData[Math.floor(forecastData.length / 2)]?.date)}</span>
                    <span>{formatDate(forecastData[forecastData.length - 1]?.date)}</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">Projected Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-400">Projected Expenses</span>
              </div>
            </div>
            
            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">
                  {showAmounts ? formatCurrency(forecastData.reduce((sum, point) => sum + point.projectedIncome, 0) / forecastData.length) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Avg Monthly Income</div>
              </div>
              
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-red-400">
                  {showAmounts ? formatCurrency(forecastData.reduce((sum, point) => sum + point.projectedExpenses, 0) / forecastData.length) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Avg Monthly Expenses</div>
              </div>
              
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400">
                  {showAmounts ? formatCurrency(forecastData.reduce((sum, point) => sum + point.projectedSavings, 0) / forecastData.length) : '••••••'}
                </div>
                <div className="text-sm text-gray-400">Avg Monthly Savings</div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'goals' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">Forecast-Based Goals</h4>
            
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-12 h-12 text-robot-green" />
              </div>
              <h5 className="text-xl font-semibold text-white mb-2">Smart Goals Coming Soon</h5>
              <p className="text-gray-400">AI-powered goal setting based on your forecast will be available in the next phase</p>
            </div>
          </div>
        )}

        {selectedView === 'insights' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white text-center">AI-Powered Forecast Insights</h4>
            
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
                <h5 className="text-lg font-semibold text-white mb-2">Positive Outlook!</h5>
                <p className="text-gray-400">Your financial forecast looks healthy. Keep up the good work!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
