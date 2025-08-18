'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  Clock,
  Zap,
  Lightbulb,
  BarChart3,
  PieChart,
  ArrowRight,
  X
} from 'lucide-react'

interface FinancialPrediction {
  id: string
  type: 'forecast' | 'trend' | 'alert' | 'insight'
  title: string
  description: string
  confidence: number
  timeframe: string
  impact: 'positive' | 'negative' | 'neutral'
  actionRequired: boolean
  actionText?: string
  data: any
}

interface PredictiveAnalyticsProps {
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
  onAction?: (prediction: FinancialPrediction) => void
}

export default function PredictiveAnalytics({ 
  financialData, 
  onAction 
}: PredictiveAnalyticsProps) {
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [predictions, setPredictions] = useState<FinancialPrediction[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedTimeframe, setSelectedTimeframe] = useState<'30days' | '3months' | '6months' | '1year'>('3months')

  // Generate AI-powered predictions
  const generatePredictions = async () => {
    setIsAnalyzing(true)
    
    // Simulate AI analysis time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const monthlyIncome = financialData.summary.monthlyIncome
    const monthlyExpenses = financialData.summary.monthlyExpenses
    const monthlySavings = financialData.summary.monthlySavings
    const emergencyFund = financialData.summary.emergencyFund
    const creditScore = financialData.summary.creditScore
    
    const newPredictions: FinancialPrediction[] = []
    
    // 1. Cash Flow Forecasting
    if (monthlyExpenses > 0 && monthlySavings > 0) {
      const currentBalance = financialData.summary.totalAssets
      const monthlyNet = monthlyIncome - monthlyExpenses
      
      if (monthlyNet < 0) {
        // Negative cash flow - calculate when money runs out
        const monthsUntilEmpty = currentBalance / Math.abs(monthlyNet)
        newPredictions.push({
          id: 'cash-flow-negative',
          type: 'alert',
          title: 'Cash Flow Warning',
          description: `At current spending rates, your funds will last approximately ${monthsUntilEmpty.toFixed(1)} months. Consider reducing expenses or increasing income.`,
          confidence: 0.85,
          timeframe: `${monthsUntilEmpty.toFixed(1)} months`,
          impact: 'negative',
          actionRequired: true,
          actionText: 'Review Spending',
          data: { monthsUntilEmpty, monthlyNet, currentBalance }
        })
      } else {
        // Positive cash flow - project growth
        const monthsToDouble = Math.log(2) / Math.log(1 + (monthlyNet / currentBalance))
        if (monthsToDouble < 60) { // Less than 5 years
          newPredictions.push({
            id: 'cash-flow-positive',
            type: 'forecast',
            title: 'Wealth Building Forecast',
            description: `At current savings rate, your net worth could double in approximately ${monthsToDouble.toFixed(1)} months!`,
            confidence: 0.80,
            timeframe: `${monthsToDouble.toFixed(1)} months`,
            impact: 'positive',
            actionRequired: false,
            data: { monthsToDouble, monthlyNet, currentBalance }
          })
        }
      }
    }
    
    // 2. Emergency Fund Analysis
    const emergencyFundMonths = monthlyExpenses > 0 ? emergencyFund / monthlyExpenses : 0
    if (emergencyFundMonths < 3) {
      const monthsToTarget = 3 - emergencyFundMonths
      const monthlyContribution = monthlyExpenses * 0.1 // 10% of expenses
      const monthsToBuild = emergencyFundMonths < 1 ? 
        (3 * monthlyExpenses - emergencyFund) / monthlyContribution :
        monthsToTarget / 0.1
        
      newPredictions.push({
        id: 'emergency-fund-timeline',
        type: 'forecast',
        title: 'Emergency Fund Timeline',
        description: `You can build a 3-month emergency fund in approximately ${monthsToBuild.toFixed(1)} months by saving $${monthlyContribution.toFixed(0)} monthly.`,
        confidence: 0.90,
        timeframe: `${monthsToBuild.toFixed(1)} months`,
        impact: 'positive',
        actionRequired: true,
        actionText: 'Set Emergency Fund Goal',
        data: { monthsToBuild, monthlyContribution, targetAmount: 3 * monthlyExpenses }
      })
    }
    
    // 3. Credit Score Projection
    if (creditScore < 750) {
      const pointsToExcellent = 750 - creditScore
      const monthsToImprove = pointsToExcellent / 15 // Assume 15 points improvement per month with good habits
      
      newPredictions.push({
        id: 'credit-score-projection',
        type: 'forecast',
        title: 'Credit Score Improvement Timeline',
        description: `With consistent good habits, you could reach an excellent credit score (750+) in approximately ${monthsToImprove.toFixed(1)} months.`,
        confidence: 0.75,
        timeframe: `${monthsToImprove.toFixed(1)} months`,
        impact: 'positive',
        actionRequired: false,
        actionText: 'Credit Improvement Tips',
        data: { pointsToImprove: pointsToExcellent, monthsToImprove, targetScore: 750 }
      })
    }
    
    // 4. Goal Achievement Predictions
    financialData.goals.forEach((goal: any) => {
      if (goal.targetAmount && goal.currentAmount && goal.targetDate) {
        const remainingAmount = goal.targetAmount - goal.currentAmount
        const targetDate = new Date(goal.targetDate)
        const now = new Date()
        const monthsRemaining = (targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)
        
        if (monthsRemaining > 0) {
          const requiredMonthlySavings = remainingAmount / monthsRemaining
          const currentSavingsRate = monthlySavings / monthlyIncome
          const requiredSavingsRate = requiredMonthlySavings / monthlyIncome
          
          if (requiredSavingsRate > currentSavingsRate) {
            newPredictions.push({
              id: `goal-${goal.id}-adjustment`,
              type: 'alert',
              title: `Goal Adjustment Needed: ${goal.name}`,
              description: `To reach your ${goal.name} goal on time, you need to save $${requiredMonthlySavings.toFixed(0)} monthly (${(requiredSavingsRate * 100).toFixed(1)}% of income).`,
              confidence: 0.85,
              timeframe: `${monthsRemaining.toFixed(1)} months`,
              impact: 'neutral',
              actionRequired: true,
              actionText: 'Adjust Goal Timeline',
              data: { requiredMonthlySavings, requiredSavingsRate, monthsRemaining, goal }
            })
          } else {
            newPredictions.push({
              id: `goal-${goal.id}-on-track`,
              type: 'forecast',
              title: `Goal On Track: ${goal.name}`,
              description: `Great news! You're on track to reach your ${goal.name} goal on time with your current savings rate.`,
              confidence: 0.90,
              timeframe: `${monthsRemaining.toFixed(1)} months`,
              impact: 'positive',
              actionRequired: false,
              data: { monthsRemaining, goal }
            })
          }
        }
      }
    })
    
    // 5. Seasonal Spending Patterns
    if (financialData.transactions.length > 0) {
      const monthlySpending = new Array(12).fill(0)
      const monthlyCounts = new Array(12).fill(0)
      
      financialData.transactions.forEach((tx: any) => {
        const month = new Date(tx.date).getMonth()
        monthlySpending[month] += Math.abs(tx.amount)
        monthlyCounts[month]++
      })
      
      const avgMonthlySpending = monthlySpending.reduce((a, b) => a + b, 0) / 12
      const highSpendingMonths = monthlySpending
        .map((spending, month) => ({ month, spending }))
        .filter(({ spending }) => spending > avgMonthlySpending * 1.2)
        .sort((a, b) => b.spending - a.spending)
      
      if (highSpendingMonths.length > 0) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December']
        
        newPredictions.push({
          id: 'seasonal-spending',
          type: 'trend',
          title: 'Seasonal Spending Pattern Detected',
          description: `You typically spend more in ${highSpendingMonths.map(({ month }) => monthNames[month]).join(', ')}. Plan ahead for these higher-expense months.`,
          confidence: 0.80,
          timeframe: 'Yearly pattern',
          impact: 'neutral',
          actionRequired: false,
          actionText: 'View Spending Analysis',
          data: { highSpendingMonths, avgMonthlySpending, monthNames }
        })
      }
    }
    
    // 6. Investment Opportunity Analysis
    if (monthlySavings > 0 && emergencyFundMonths >= 6) {
      const potentialInvestment = monthlySavings * 0.5 // 50% of savings
      const annualReturn = 0.07 // 7% average return
      const yearsTo100k = Math.log(100000 / potentialInvestment) / Math.log(1 + annualReturn)
      
      if (yearsTo100k < 20) {
        newPredictions.push({
          id: 'investment-opportunity',
          type: 'insight',
          title: 'Investment Opportunity',
          description: `With your current savings rate, you could reach $100k in investments in approximately ${yearsTo100k.toFixed(1)} years, assuming 7% annual returns.`,
          confidence: 0.70,
          timeframe: `${yearsTo100k.toFixed(1)} years`,
          impact: 'positive',
          actionRequired: false,
          actionText: 'Investment Planning',
          data: { potentialInvestment, annualReturn, yearsTo100k }
        })
      }
    }
    
    setPredictions(newPredictions)
    setIsAnalyzing(false)
  }
  
  // Generate predictions when component mounts or data changes
  useEffect(() => {
    if (financialData.summary.totalAssets > 0 || financialData.accounts.length > 0) {
      generatePredictions()
    }
  }, [financialData])
  
  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'text-green-400 border-green-500/20 bg-green-500/10'
      case 'negative':
        return 'text-red-400 border-red-500/20 bg-red-500/10'
      case 'neutral':
        return 'text-blue-400 border-blue-500/20 bg-blue-500/10'
      default:
        return 'text-gray-400 border-gray-500/20 bg-gray-500/10'
    }
  }
  
  // Get confidence color
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-400'
    if (confidence >= 0.6) return 'text-yellow-400'
    return 'text-red-400'
  }
  
  // Get type icon
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'forecast':
        return <TrendingUp className="w-5 h-5" />
      case 'trend':
        return <BarChart3 className="w-5 h-5" />
      case 'alert':
        return <AlertTriangle className="w-5 h-5" />
      case 'insight':
        return <Lightbulb className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }
  
  // Filter predictions by timeframe
  const filteredPredictions = useMemo(() => {
    if (selectedTimeframe === '30days') {
      return predictions.filter(p => p.timeframe.includes('month') && parseFloat(p.timeframe) <= 1)
    } else if (selectedTimeframe === '3months') {
      return predictions.filter(p => p.timeframe.includes('month') && parseFloat(p.timeframe) <= 3)
    } else if (selectedTimeframe === '6months') {
      return predictions.filter(p => p.timeframe.includes('month') && parseFloat(p.timeframe) <= 6)
    } else {
      return predictions
    }
  }, [predictions, selectedTimeframe])

  return (
    <>
      {/* Analytics Button */}
      <button
        onClick={() => setShowAnalytics(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
      >
        <TrendingUp className="w-5 h-5" />
        Predictive Analytics
      </button>

      {/* Analytics Modal */}
      <AnimatePresence>
        {showAnalytics && (
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
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700 bg-gray-750">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Predictive Analytics</h2>
                      <p className="text-gray-400">AI-powered financial forecasting and insights</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAnalytics(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {predictions.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Analyzing Your Financial Future</h3>
                    <p className="text-gray-400 mb-6">
                      {isAnalyzing ? 'AI is analyzing your financial patterns...' : 'Click analyze to get AI-powered predictions'}
                    </p>
                    
                    {!isAnalyzing && (
                      <button
                        onClick={generatePredictions}
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          Analyze Financial Future
                        </div>
                      </button>
                    )}
                    
                    {isAnalyzing && (
                      <div className="flex items-center gap-3 justify-center">
                        <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                        <span className="text-purple-400">AI Analysis in Progress...</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Timeframe Filter */}
                    <div className="flex items-center gap-4">
                      <span className="text-white font-medium">Timeframe:</span>
                      {[
                        { value: '30days', label: '30 Days' },
                        { value: '3months', label: '3 Months' },
                        { value: '6months', label: '6 Months' },
                        { value: '1year', label: '1 Year' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSelectedTimeframe(option.value as any)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedTimeframe === option.value
                              ? 'bg-purple-500 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {/* Predictions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {filteredPredictions.map((prediction) => (
                        <motion.div
                          key={prediction.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`border rounded-xl p-4 ${getImpactColor(prediction.impact)}`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            {getTypeIcon(prediction.type)}
                            <div className="flex-1">
                              <h4 className="font-semibold text-white mb-1">{prediction.title}</h4>
                              <p className="text-sm text-gray-300">{prediction.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="text-gray-400">
                                <Clock className="w-4 h-4 inline mr-1" />
                                {prediction.timeframe}
                              </span>
                              <span className={`${getConfidenceColor(prediction.confidence)}`}>
                                <Target className="w-4 h-4 inline mr-1" />
                                {(prediction.confidence * 100).toFixed(0)}% confidence
                              </span>
                            </div>
                            
                            {prediction.actionRequired && prediction.actionText && (
                              <button
                                onClick={() => onAction?.(prediction)}
                                className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1"
                              >
                                {prediction.actionText}
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4 pt-6">
                      <button
                        onClick={() => setPredictions([])}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-xl font-medium transition-colors duration-200"
                      >
                        Clear Analysis
                      </button>
                      <button
                        onClick={generatePredictions}
                        disabled={isAnalyzing}
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                      >
                        {isAnalyzing ? 'Analyzing...' : 'Refresh Analysis'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
