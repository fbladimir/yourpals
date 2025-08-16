'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  Target,
  Save,
  X
} from 'lucide-react'

interface ManualDataEntryProps {
  onDataEntered: (data: any) => void
  onClose: () => void
}

export default function ManualDataEntry({ onDataEntered, onClose }: ManualDataEntryProps) {
  const [formData, setFormData] = useState({
    accounts: [
      {
        id: '1',
        name: 'Main Checking',
        type: 'checking',
        balance: '',
        currency: 'USD'
      }
    ],
    monthlyIncome: '',
    monthlyExpenses: '',
    financialGoals: [
      {
        id: '1',
        name: 'Emergency Fund',
        target: '',
        current: '',
        deadline: ''
      }
    ]
  })

  const [showAddAccount, setShowAddAccount] = useState(false)
  const [showAddGoal, setShowAddGoal] = useState(false)

  const handleAccountChange = (index: number, field: string, value: string) => {
    const newAccounts = [...formData.accounts]
    newAccounts[index] = { ...newAccounts[index], [field]: value }
    setFormData({ ...formData, accounts: newAccounts })
  }

  const handleGoalChange = (index: number, field: string, value: string) => {
    const newGoals = [...formData.financialGoals]
    newGoals[index] = { ...newGoals[index], [field]: value }
    setFormData({ ...formData, financialGoals: newGoals })
  }

  const addAccount = () => {
    const newAccount = {
      id: Date.now().toString(),
      name: '',
      type: 'checking',
      balance: '',
      currency: 'USD'
    }
    setFormData({
      ...formData,
      accounts: [...formData.accounts, newAccount]
    })
  }

  const addGoal = () => {
    const newGoal = {
      id: Date.now().toString(),
      name: '',
      target: '',
      current: '',
      deadline: ''
    }
    setFormData({
      ...formData,
      financialGoals: [...formData.financialGoals, newGoal]
    })
  }

  const removeAccount = (index: number) => {
    const newAccounts = formData.accounts.filter((_, i) => i !== index)
    setFormData({ ...formData, accounts: newAccounts })
  }

  const removeGoal = (index: number) => {
    const newGoals = formData.financialGoals.filter((_, i) => i !== index)
    setFormData({ ...formData, financialGoals: newGoals })
  }

  const handleSubmit = () => {
    // Transform the data to match our expected format
    const transformedData = {
      accounts: formData.accounts
        .filter(acc => acc.name && acc.balance)
        .map(acc => ({
          id: acc.id,
          name: acc.name,
          type: acc.type,
          balance: parseFloat(acc.balance) || 0,
          currency: acc.currency,
          lastSync: new Date().toISOString(),
          institution: 'Manual Entry',
          status: 'active'
        })),
      summary: {
        totalBalance: formData.accounts
          .filter(acc => acc.balance)
          .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0),
        monthlyIncome: parseFloat(formData.monthlyIncome) || 0,
        monthlyExpenses: parseFloat(formData.monthlyExpenses) || 0,
        monthlySavings: (parseFloat(formData.monthlyIncome) || 0) - (parseFloat(formData.monthlyExpenses) || 0),
        creditScore: 750, // Default value
        emergencyFund: 0,
        totalDebt: 0,
        investmentAmount: 0,
        monthlyChange: 0
      },
      goals: formData.financialGoals
        .filter(goal => goal.name && goal.target)
        .map(goal => ({
          id: goal.id,
          name: goal.name,
          target: parseFloat(goal.target) || 0,
          current: parseFloat(goal.current) || 0,
          deadline: goal.deadline,
          type: 'savings',
          status: 'active'
        }))
    }

    onDataEntered(transformedData)
  }

  const totalBalance = formData.accounts
    .filter(acc => acc.balance)
    .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">📝 Manual Data Entry</h3>
        <p className="text-gray-300">
          Enter your financial information manually to get started with MoneyPal's AI insights
        </p>
      </div>

      {/* Accounts Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-robot-green" />
            Your Accounts
          </h4>
          <button
            onClick={addAccount}
            className="flex items-center gap-2 px-3 py-2 bg-robot-green text-white rounded-lg hover:bg-robot-green/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Account
          </button>
        </div>

        {formData.accounts.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Account Name"
                value={account.name}
                onChange={(e) => handleAccountChange(index, 'name', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
              
              <select
                value={account.type}
                onChange={(e) => handleAccountChange(index, 'type', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
              >
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
                <option value="credit">Credit Card</option>
                <option value="investment">Investment</option>
              </select>
              
              <input
                type="number"
                placeholder="Balance"
                value={account.balance}
                onChange={(e) => handleAccountChange(index, 'balance', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
              
              <div className="flex items-center gap-2">
                <select
                  value={account.currency}
                  onChange={(e) => handleAccountChange(index, 'currency', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                
                {formData.accounts.length > 1 && (
                  <button
                    onClick={() => removeAccount(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Monthly Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Monthly Income</label>
          <input
            type="number"
            placeholder="0.00"
            value={formData.monthlyIncome}
            onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Monthly Expenses</label>
          <input
            type="number"
            placeholder="0.00"
            value={formData.monthlyExpenses}
            onChange={(e) => setFormData({ ...formData, monthlyExpenses: e.target.value })}
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
          />
        </div>
      </div>

      {/* Financial Goals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-robot-orange" />
            Financial Goals
          </h4>
          <button
            onClick={addGoal}
            className="flex items-center gap-2 px-3 py-2 bg-robot-orange text-white rounded-lg hover:bg-robot-orange/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Goal
          </button>
        </div>

        {formData.financialGoals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Goal Name"
                value={goal.name}
                onChange={(e) => handleGoalChange(index, 'name', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
              
              <input
                type="number"
                placeholder="Target Amount"
                value={goal.target}
                onChange={(e) => handleGoalChange(index, 'target', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
              
              <input
                type="number"
                placeholder="Current Amount"
                value={goal.current}
                onChange={(e) => handleGoalChange(index, 'current', e.target.value)}
                className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
              
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={goal.deadline}
                  onChange={(e) => handleGoalChange(index, 'deadline', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                />
                
                {formData.financialGoals.length > 1 && (
                  <button
                    onClick={() => removeGoal(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-robot-green/10 border border-robot-green/30 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-white">Total Balance</h4>
          <span className="text-2xl font-bold text-robot-green">
            ${totalBalance.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-300">
          Based on your manual entries. The AI will learn from this data to provide personalized insights.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSubmit}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-robot-green text-white rounded-lg font-semibold hover:bg-robot-green/90 transition-colors"
        >
          <Save className="w-5 h-5" />
          Save & Continue
        </button>
        
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
