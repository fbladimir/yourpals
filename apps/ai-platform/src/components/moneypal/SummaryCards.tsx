import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, PiggyBank, CreditCard, BarChart3 } from 'lucide-react'

interface SummaryCardsProps {
  totalBalance: number
  monthlySavings: number
  creditScore: number
  cashFlow: number
  monthlyIncome: number
  monthlyChange: number
}

export default function SummaryCards({
  totalBalance,
  monthlySavings,
  creditScore,
  cashFlow,
  monthlyIncome,
  monthlyChange
}: SummaryCardsProps) {
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

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    return null
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-400'
    if (change < 0) return 'text-red-400'
    return 'text-gray-400'
  }

  const getChangeText = (change: number) => {
    if (change > 0) return `+${formatCurrency(change)}`
    if (change < 0) return `${formatCurrency(change)}`
    return 'No change'
  }

  const cards = [
    {
      title: 'Total Balance',
      value: formatCurrency(totalBalance),
      subtitle: monthlyChange !== 0 ? `${getChangeText(monthlyChange)} this month` : 'No change this month',
      icon: DollarSign,
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-500/20 to-blue-500/20',
      borderGradient: 'from-teal-500/30 to-blue-500/30'
    },
    {
      title: 'Monthly Savings',
      value: formatCurrency(monthlySavings),
      subtitle: monthlyIncome > 0 ? `${formatPercentage(monthlySavings, monthlyIncome)} of income` : 'No income data',
      icon: PiggyBank,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      borderGradient: 'from-purple-500/30 to-pink-500/30'
    },
    {
      title: 'Credit Score',
      value: creditScore.toString(),
      subtitle: monthlyChange !== 0 ? `${getChangeText(monthlyChange)} this month` : 'No change this month',
      icon: CreditCard,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      borderGradient: 'from-orange-500/30 to-red-500/30'
    },
    {
      title: 'Cash Flow',
      value: formatCurrency(cashFlow),
      subtitle: 'Monthly net',
      icon: BarChart3,
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-500/20 to-indigo-500/20',
      borderGradient: 'from-blue-500/30 to-indigo-500/30'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-8"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Financial Summary</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-robot-green rounded-full animate-pulse"></div>
          <span>Live data from your accounts</span>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className={`relative overflow-hidden rounded-xl border transition-all duration-200 hover:scale-105 hover:shadow-lg group`}
            style={{
              background: `linear-gradient(135deg, ${card.bgGradient})`,
              borderColor: `hsl(var(--${card.gradient.split('-')[1]}-500) / 0.3)`
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-300">{card.title}</h3>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center`}>
                  <card.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Value */}
              <div className="mb-2">
                <div className="text-2xl font-bold text-white">{card.value}</div>
              </div>
              
              {/* Subtitle */}
              <div className="flex items-center gap-2">
                <span className={`text-xs ${getChangeColor(monthlyChange)}`}>
                  {card.subtitle}
                </span>
                {card.title === 'Total Balance' && monthlyChange !== 0 && getChangeIcon(monthlyChange)}
              </div>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
