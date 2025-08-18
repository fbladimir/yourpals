'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  PiggyBank,
  CreditCard,
  Home,
  Car,
  Utensils,
  ShoppingBag,
  Heart,
  BookOpen,
  Zap,
  X
} from 'lucide-react'

interface BudgetCategory {
  id: string
  name: string
  icon: React.ReactNode
  currentAmount: number
  recommendedAmount: number
  percentage: number
  priority: 'high' | 'medium' | 'low'
  tips: string[]
  color: string
}

interface AIBudgetCreatorProps {
  financialData: {
    summary: {
      monthlyIncome: number
      monthlyExpenses: number
      monthlySavings: number
      creditScore: number
      emergencyFund: number
    }
    transactions: any[]
  }
  onBudgetCreated?: (budget: BudgetCategory[]) => void
}

export default function AIBudgetCreator({ 
  financialData, 
  onBudgetCreated 
}: AIBudgetCreatorProps) {
  const [showCreator, setShowCreator] = useState(false)
  const [budget, setBudget] = useState<BudgetCategory[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced')

  // Generate AI-powered budget recommendations
  const generateBudget = async () => {
    setIsGenerating(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const monthlyIncome = financialData.summary.monthlyIncome
    const monthlyExpenses = financialData.summary.monthlyExpenses
    const creditScore = financialData.summary.creditScore
    
    // AI Budget Strategy based on financial situation
    let savingsTarget = 0.20 // Default 20%
    let debtTarget = 0.10   // Default 10%
    
    if (creditScore < 650) {
      // Poor credit - focus on debt reduction
      savingsTarget = 0.15
      debtTarget = 0.25
    } else if (creditScore >= 750) {
      // Excellent credit - can save more
      savingsTarget = 0.25
      debtTarget = 0.05
    }
    
    // Adjust based on current savings rate
    const currentSavingsRate = monthlyIncome > 0 ? monthlyExpenses / monthlyIncome : 0
    if (currentSavingsRate > 0.8) {
      savingsTarget = Math.min(savingsTarget + 0.05, 0.30)
    }
    
    // Priority-based adjustments
    if (selectedPriority === 'conservative') {
      savingsTarget += 0.05
      debtTarget += 0.05
    } else if (selectedPriority === 'aggressive') {
      savingsTarget -= 0.05
      debtTarget -= 0.05
    }
    
    const newBudget: BudgetCategory[] = [
      {
        id: 'housing',
        name: 'Housing',
        icon: <Home className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.3,
        recommendedAmount: monthlyIncome * 0.30,
        percentage: 30,
        priority: 'high',
        tips: [
          'Keep housing costs under 30% of income',
          'Consider refinancing if rates are lower',
          'Look for ways to reduce utilities'
        ],
        color: 'from-blue-500 to-blue-600'
      },
      {
        id: 'transportation',
        name: 'Transportation',
        icon: <Car className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.15,
        recommendedAmount: monthlyIncome * 0.15,
        percentage: 15,
        priority: 'high',
        tips: [
          'Consider carpooling or public transit',
          'Maintain your vehicle to avoid repairs',
          'Shop around for better insurance rates'
        ],
        color: 'from-green-500 to-green-600'
      },
      {
        id: 'food',
        name: 'Food & Dining',
        icon: <Utensils className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.12,
        recommendedAmount: monthlyIncome * 0.12,
        percentage: 12,
        priority: 'medium',
        tips: [
          'Meal prep to reduce eating out',
          'Use grocery store loyalty programs',
          'Buy in bulk for non-perishables'
        ],
        color: 'from-orange-500 to-orange-600'
      },
      {
        id: 'utilities',
        name: 'Utilities & Bills',
        icon: <Zap className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.08,
        recommendedAmount: monthlyIncome * 0.08,
        percentage: 8,
        priority: 'high',
        tips: [
          'Switch to energy-efficient appliances',
          'Negotiate better rates with providers',
          'Consider bundling services'
        ],
        color: 'from-yellow-500 to-yellow-600'
      },
      {
        id: 'healthcare',
        name: 'Healthcare',
        icon: <Heart className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.08,
        recommendedAmount: monthlyIncome * 0.08,
        percentage: 8,
        priority: 'high',
        tips: [
          'Use HSA or FSA accounts if available',
          'Shop around for prescription prices',
          'Preventive care saves money long-term'
        ],
        color: 'from-red-500 to-red-600'
      },
      {
        id: 'entertainment',
        name: 'Entertainment',
        icon: <ShoppingBag className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.07,
        recommendedAmount: monthlyIncome * 0.07,
        percentage: 7,
        priority: 'low',
        tips: [
          'Look for free community events',
          'Use library resources',
          'Find budget-friendly hobbies'
        ],
        color: 'from-purple-500 to-purple-600'
      },
      {
        id: 'education',
        name: 'Education & Personal',
        icon: <BookOpen className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.05,
        recommendedAmount: monthlyIncome * 0.05,
        percentage: 5,
        priority: 'medium',
        tips: [
          'Use free online learning resources',
          'Invest in skills that increase income',
          'Consider employer education benefits'
        ],
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        id: 'debt',
        name: 'Debt Payments',
        icon: <CreditCard className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.10,
        recommendedAmount: monthlyIncome * debtTarget,
        percentage: debtTarget * 100,
        priority: 'high',
        tips: [
          'Pay off high-interest debt first',
          'Consider debt consolidation',
          'Negotiate lower interest rates'
        ],
        color: 'from-gray-500 to-gray-600'
      },
      {
        id: 'savings',
        name: 'Savings & Investments',
        icon: <PiggyBank className="w-5 h-5" />,
        currentAmount: monthlyExpenses * 0.05,
        recommendedAmount: monthlyIncome * savingsTarget,
        percentage: savingsTarget * 100,
        priority: 'high',
        tips: [
          'Automate your savings',
          'Start with emergency fund',
          'Consider retirement accounts'
        ],
        color: 'from-emerald-500 to-emerald-600'
      }
    ]
    
    setBudget(newBudget)
    setIsGenerating(false)
    
    if (onBudgetCreated) {
      onBudgetCreated(newBudget)
    }
  }

  // Get budget status
  const getBudgetStatus = (category: BudgetCategory) => {
    const ratio = category.currentAmount / category.recommendedAmount
    
    if (ratio <= 0.9) {
      return { status: 'under', color: 'text-green-400', icon: <CheckCircle className="w-4 h-4" /> }
    } else if (ratio <= 1.1) {
      return { status: 'on-track', color: 'text-blue-400', icon: <Target className="w-4 h-4" /> }
    } else {
      return { status: 'over', color: 'text-red-400', icon: <AlertTriangle className="w-4 h-4" /> }
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

  return (
    <>
      {/* Budget Creator Button */}
      <button
        onClick={() => setShowCreator(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
      >
        <Calculator className="w-5 h-5" />
        AI Budget Creator
      </button>

      {/* Budget Creator Modal */}
      <AnimatePresence>
        {showCreator && (
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
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700 bg-gray-750">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-robot-green to-robot-blue rounded-xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">AI Budget Creator</h2>
                      <p className="text-gray-400">Get personalized budget recommendations based on your financial data</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCreator(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {budget.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Ready to Create Your Budget?</h3>
                    <p className="text-gray-400 mb-6">
                      Choose your financial priority and let AI create a personalized budget plan
                    </p>
                    
                    {/* Priority Selection */}
                    <div className="flex flex-wrap gap-4 justify-center mb-8">
                      {[
                        { value: 'conservative', label: 'Conservative', desc: 'Focus on savings & debt reduction' },
                        { value: 'balanced', label: 'Balanced', desc: 'Standard 50/30/20 approach' },
                        { value: 'aggressive', label: 'Aggressive', desc: 'Maximize investments & growth' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSelectedPriority(option.value as any)}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedPriority === option.value
                              ? 'border-robot-green bg-robot-green/10 text-robot-green'
                              : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm opacity-80">{option.desc}</div>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={generateBudget}
                      disabled={isGenerating}
                      className="px-8 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Creating Budget...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Calculator className="w-5 h-5" />
                          Create AI Budget
                        </div>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Budget Summary */}
                    <div className="bg-gray-700/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Your AI-Generated Budget</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-robot-green">
                            ${financialData.summary.monthlyIncome.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">Monthly Income</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-robot-blue">
                            ${financialData.summary.monthlyExpenses.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">Current Expenses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            ${financialData.summary.monthlySavings.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">Monthly Savings</div>
                        </div>
                      </div>
                    </div>

                    {/* Budget Categories */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {budget.map((category) => {
                        const status = getBudgetStatus(category)
                        return (
                          <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-700/30 border border-gray-600 rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                  {category.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white">{category.name}</h4>
                                  <div className="flex items-center gap-2">
                                    <span className={`text-xs ${getPriorityColor(category.priority)}`}>
                                      {category.priority} priority
                                    </span>
                                    {status.icon}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-white">
                                  ${category.recommendedAmount.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {category.percentage}% of income
                                </div>
                              </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-3">
                              <div className="flex justify-between text-sm text-gray-400 mb-1">
                                <span>Current: ${category.currentAmount.toLocaleString()}</span>
                                <span>Target: ${category.recommendedAmount.toLocaleString()}</span>
                              </div>
                              <div className="w-full bg-gray-600 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full transition-all duration-500 ${
                                    status.status === 'under' ? 'bg-green-500' :
                                    status.status === 'on-track' ? 'bg-blue-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${Math.min((category.currentAmount / category.recommendedAmount) * 100, 100)}%` }}
                                />
                              </div>
                            </div>

                            {/* Tips */}
                            <div className="space-y-2">
                              <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">AI Tips:</div>
                              {category.tips.map((tip, index) => (
                                <div key={index} className="text-sm text-gray-300 flex items-start gap-2">
                                  <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span>{tip}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4 pt-6">
                      <button
                        onClick={() => setBudget([])}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-xl font-medium transition-colors duration-200"
                      >
                        Create New Budget
                      </button>
                      <button
                        onClick={() => setShowCreator(false)}
                        className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                      >
                        Apply Budget
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
