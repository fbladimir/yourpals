import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  PiggyBank,
  CreditCard,
  BarChart3,
  Lightbulb,
  Zap
} from 'lucide-react'

interface ProgressMetricsProps {
  totalBalance: number
  monthlySavings: number
  monthlyIncome: number
  monthlyExpenses: number
  creditScore: number
  emergencyFund: number
  debtAmount: number
  investmentAmount: number
  showAmounts: boolean
}

export default function ProgressMetrics({
  totalBalance,
  monthlySavings,
  monthlyIncome,
  monthlyExpenses,
  creditScore,
  emergencyFund,
  debtAmount,
  investmentAmount,
  showAmounts
}: ProgressMetricsProps) {
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

  // Define Shield component before useMemo
  const Shield = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )

  // Calculate financial health metrics
  const metrics = useMemo(() => {
    const savingsRate = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0
    const spendingRatio = monthlyIncome > 0 ? (monthlyExpenses / monthlyIncome) * 100 : 0
    const emergencyFundMonths = monthlyExpenses > 0 ? emergencyFund / monthlyExpenses : 0
    const debtToIncomeRatio = monthlyIncome > 0 ? (debtAmount / monthlyIncome) * 100 : 0
    const investmentRatio = totalBalance > 0 ? (investmentAmount / totalBalance) * 100 : 0

    return [
      {
        id: 'savings-rate',
        title: 'Savings Rate',
        value: `${savingsRate.toFixed(1)}%`,
        subtitle: 'Monthly savings as % of income',
        icon: PiggyBank,
        color: savingsRate >= 20 ? 'text-green-400' : savingsRate >= 10 ? 'text-yellow-400' : 'text-red-400',
        bgColor: savingsRate >= 20 ? 'bg-green-500/20' : savingsRate >= 10 ? 'bg-yellow-500/20' : 'bg-red-500/20',
        borderColor: savingsRate >= 20 ? 'border-green-500/30' : savingsRate >= 10 ? 'border-yellow-500/30' : 'border-red-500/30',
        status: savingsRate >= 20 ? 'excellent' : savingsRate >= 10 ? 'good' : 'needs-improvement',
        trend: savingsRate > 0 ? 'up' : 'down',
        insight: savingsRate >= 20 
          ? 'Excellent savings rate! You\'re building wealth effectively.'
          : savingsRate >= 10 
          ? 'Good savings rate. Consider increasing to 20% for faster wealth building.'
          : 'Focus on increasing your savings rate. Aim for at least 10% of income.'
      },
      {
        id: 'emergency-fund',
        title: 'Emergency Fund',
        value: `${emergencyFundMonths.toFixed(1)} months`,
        subtitle: 'Months of expenses covered',
        icon: Shield,
        color: emergencyFundMonths >= 6 ? 'text-green-400' : emergencyFundMonths >= 3 ? 'text-yellow-400' : 'text-red-400',
        bgColor: emergencyFundMonths >= 6 ? 'bg-green-500/20' : emergencyFundMonths >= 3 ? 'bg-yellow-500/20' : 'bg-red-500/20',
        borderColor: emergencyFundMonths >= 6 ? 'border-green-500/30' : emergencyFundMonths >= 3 ? 'border-yellow-500/30' : 'border-red-500/30',
        status: emergencyFundMonths >= 6 ? 'excellent' : emergencyFundMonths >= 3 ? 'good' : 'needs-improvement',
        trend: emergencyFundMonths >= 6 ? 'up' : 'stable',
        insight: emergencyFundMonths >= 6 
          ? 'Strong emergency fund! You\'re well-protected against financial shocks.'
          : emergencyFundMonths >= 3 
          ? 'Good emergency fund. Consider building to 6 months for better security.'
          : 'Build your emergency fund to cover 3-6 months of expenses.'
      },
      {
        id: 'debt-ratio',
        title: 'Debt-to-Income',
        value: `${debtToIncomeRatio.toFixed(1)}%`,
        subtitle: 'Monthly debt payments vs income',
        icon: CreditCard,
        color: debtToIncomeRatio <= 20 ? 'text-green-400' : debtToIncomeRatio <= 36 ? 'text-yellow-400' : 'text-red-400',
        bgColor: debtToIncomeRatio <= 20 ? 'bg-green-500/20' : debtToIncomeRatio <= 36 ? 'bg-yellow-500/20' : 'bg-red-500/20',
        borderColor: debtToIncomeRatio <= 20 ? 'border-green-500/30' : debtToIncomeRatio <= 36 ? 'border-yellow-500/30' : 'border-red-500/30',
        status: debtToIncomeRatio <= 20 ? 'excellent' : debtToIncomeRatio <= 36 ? 'good' : 'needs-improvement',
        trend: debtToIncomeRatio <= 20 ? 'down' : 'up',
        insight: debtToIncomeRatio <= 20 
          ? 'Excellent debt management! Your debt is well under control.'
          : debtToIncomeRatio <= 36 
          ? 'Manageable debt level. Focus on paying down high-interest debt first.'
          : 'High debt ratio. Consider debt consolidation or repayment strategies.'
      },
      {
        id: 'investment-ratio',
        title: 'Investment Ratio',
        value: `${investmentRatio.toFixed(1)}%`,
        subtitle: 'Investments as % of total assets',
        icon: TrendingUp,
        color: investmentRatio >= 30 ? 'text-green-400' : investmentRatio >= 15 ? 'text-yellow-400' : 'text-blue-400',
        bgColor: investmentRatio >= 30 ? 'bg-green-500/20' : investmentRatio >= 15 ? 'bg-yellow-500/20' : 'bg-blue-500/20',
        borderColor: investmentRatio >= 30 ? 'border-green-500/30' : investmentRatio >= 15 ? 'border-yellow-500/30' : 'border-blue-500/30',
        status: investmentRatio >= 30 ? 'excellent' : investmentRatio >= 15 ? 'good' : 'developing',
        trend: investmentRatio > 0 ? 'up' : 'stable',
        insight: investmentRatio >= 30 
          ? 'Strong investment portfolio! You\'re building long-term wealth.'
          : investmentRatio >= 15 
          ? 'Good investment start. Consider increasing to 30% for better growth.'
          : 'Start investing! Even small amounts compound over time.'
      }
    ]
  }, [monthlySavings, monthlyIncome, monthlyExpenses, emergencyFund, debtAmount, investmentAmount, totalBalance])

  // Calculate overall financial health score
  const financialHealthScore = useMemo(() => {
    const scores = metrics.map(metric => {
      switch (metric.status) {
        case 'excellent': return 100
        case 'good': return 75
        case 'developing': return 50
        case 'needs-improvement': return 25
        default: return 0
      }
    })
    
    return Math.round(scores.reduce((sum: number, score: number) => sum + score, 0) / scores.length)
  }, [metrics])

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const getHealthScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Fair'
    return 'Needs Improvement'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Financial Health Metrics</h3>
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-robot-green" />
          <span className="text-sm text-gray-400">AI-Powered Analysis</span>
        </div>
      </div>

      {/* Overall Financial Health Score */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Overall Financial Health</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold text-white">{financialHealthScore}</div>
            <div className="text-right">
              <div className={`text-lg font-semibold ${getHealthScoreColor(financialHealthScore)}`}>
                {getHealthScoreLabel(financialHealthScore)}
              </div>
              <div className="text-sm text-gray-400">out of 100</div>
            </div>
          </div>
        </div>
        
        {/* Health Score Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <motion.div 
            className={`h-3 rounded-full bg-gradient-to-r ${
              financialHealthScore >= 80 ? 'from-green-500 to-green-600' :
              financialHealthScore >= 60 ? 'from-yellow-500 to-yellow-600' :
              financialHealthScore >= 40 ? 'from-orange-500 to-orange-600' :
              'from-red-500 to-red-600'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${financialHealthScore}%` }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </div>
        
        <div className="text-center text-sm text-gray-400">
          {financialHealthScore >= 80 
            ? '🎉 Outstanding financial health! Keep up the great work!'
            : financialHealthScore >= 60 
            ? '👍 Good financial foundation. Focus on areas for improvement.'
            : financialHealthScore >= 40 
            ? '📈 Building financial health. Small improvements add up!'
            : '🚀 Start your financial journey! Every step counts.'}
        </div>
      </div>

      {/* Individual Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            className={`p-6 rounded-xl border transition-all duration-200 hover:scale-105 ${
              metric.bgColor
            } ${metric.borderColor}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${metric.bgColor} rounded-full flex items-center justify-center`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <h5 className="font-semibold text-white">{metric.title}</h5>
                  <p className="text-gray-300 text-sm">{metric.subtitle}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : metric.trend === 'down' ? (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                ) : (
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                )}
              </div>
            </div>
            
            {/* Value */}
            <div className="mb-4">
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                metric.status === 'excellent' ? 'bg-green-500/20 text-green-400' :
                metric.status === 'good' ? 'bg-blue-500/20 text-blue-400' :
                metric.status === 'developing' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
              </span>
            </div>
            
            {/* AI Insight */}
            <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-robot-green mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{metric.insight}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 bg-robot-green/20 border border-robot-green/30 rounded-lg hover:bg-robot-green/30 transition-colors group">
            <Target className="w-5 h-5 text-robot-green group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-medium text-white">Set Goals</div>
              <div className="text-sm text-gray-400">Create financial targets</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-robot-blue/20 border border-robot-blue/30 rounded-lg hover:bg-robot-blue/30 transition-colors group">
            <BarChart3 className="w-5 h-5 text-robot-blue group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-medium text-white">Review Budget</div>
              <div className="text-sm text-gray-400">Optimize spending</div>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 bg-robot-purple/20 border border-robot-purple/30 rounded-lg hover:bg-robot-purple/30 transition-colors group">
            <TrendingUp className="w-5 h-5 text-robot-purple group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-medium text-white">Invest More</div>
              <div className="text-sm text-gray-400">Grow your wealth</div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
