'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  Target,
  Save,
  X,
  Calendar,
  Receipt,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Edit3,
  Trash2,
  AlertTriangle,
  HelpCircle
} from 'lucide-react'

interface Account {
  id: string
  name: string
  type: 'checking' | 'savings' | 'investment'
  balance: string
  currency: string
  institution: string
}

interface DebtAccount {
  id: string
  name: string
  type: 'credit-card' | 'student-loan' | 'car-loan' | 'mortgage' | 'personal-loan' | 'other'
  balance: string
  currency: string
  institution: string
  interestRate: string
  minimumPayment: string
  dueDate: string
}

interface Transaction {
  id: string
  date: string
  description: string
  amount: string
  category: string
  accountId: string
  type: 'income' | 'expense'
  recurring?: boolean
  recurringFrequency?: 'weekly' | 'monthly' | 'yearly'
}

interface FinancialGoal {
  id: string
  name: string
  target: string
  current: string
  deadline: string
  type: 'savings' | 'debt' | 'investment' | 'emergency'
  priority: 'low' | 'medium' | 'high'
}

interface ManualDataEntryProps {
  onDataEntered: (data: any) => void
  onClose: () => void
  initialData?: any
}

const CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Healthcare',
  'Utilities',
  'Housing',
  'Insurance',
  'Education',
  'Travel',
  'Business',
  'Investment',
  'Income',
  'Other'
]

export default function ManualDataEntry({ onDataEntered, onClose, initialData }: ManualDataEntryProps) {
  const [formData, setFormData] = useState({
    accounts: [
      {
        id: '1',
        name: 'Main Checking',
        type: 'checking' as const,
        balance: '',
        currency: 'USD',
        institution: 'Manual Entry'
      }
    ] as Array<{
      id: string
      name: string
      type: 'checking' | 'savings' | 'investment'
      balance: string
      currency: string
      institution: string
    }>,
    debtAccounts: [] as Array<{
      id: string
      name: string
      type: 'credit-card' | 'student-loan' | 'car-loan' | 'mortgage' | 'personal-loan' | 'other'
      balance: string
      currency: string
      institution: string
      interestRate: string
      minimumPayment: string
      dueDate: string
    }>,
    transactions: [] as Transaction[],
    monthlyIncome: '',
    monthlyExpenses: '',
    creditScore: '',
    emergencyFund: '',
    totalDebt: '',
    investmentAmount: '',
    financialGoals: [
      {
        id: '1',
        name: 'Emergency Fund',
        target: '',
        current: '',
        deadline: '',
        type: 'emergency' as const,
        priority: 'high' as const
      }
    ] as Array<{
      id: string
      name: string
      target: string
      current: string
      deadline: string
      type: 'savings' | 'debt' | 'investment' | 'emergency'
      priority: 'low' | 'medium' | 'high'
    }>
  })

  const [showAddAccount, setShowAddAccount] = useState(false)
  const [showAddTransaction, setShowAddTransaction] = useState(false)
  const [showAddGoal, setShowAddGoal] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)
  const [activeTab, setActiveTab] = useState<'accounts' | 'debt' | 'transactions' | 'overview' | 'goals'>('accounts')
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  // Clear validation errors when switching tabs
  const handleTabChange = (newTab: 'accounts' | 'debt' | 'transactions' | 'overview' | 'goals') => {
    setActiveTab(newTab)
    setValidationErrors([]) // Clear any existing errors
  }

  // Load initial data if provided
  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData,
        accounts: initialData.accounts || prev.accounts,
        transactions: initialData.transactions || prev.transactions,
        financialGoals: initialData.financialGoals || prev.financialGoals
      }))
    }
  }, [initialData])

  // Validation function
  const validateData = () => {
    const errors: string[] = []
    
    // Only validate the currently active tab
    switch (activeTab) {
      case 'accounts':
        if (formData.accounts.length === 0) {
          errors.push('At least one account is required')
        }
        
        formData.accounts.forEach((account, index) => {
          if (!account.name.trim()) {
            errors.push(`Account ${index + 1} name is required`)
          }
          if (!account.balance || parseFloat(account.balance) < 0) {
            errors.push(`Account ${index + 1} balance must be a positive number`)
          }
          if (!account.institution) {
            errors.push(`Account ${index + 1} institution is required`)
          }
        })
        break

      case 'debt':
        // Debt accounts are optional, but if added, validate them
        formData.debtAccounts.forEach((debtAccount, index) => {
          if (!debtAccount.name.trim()) {
            errors.push(`Debt Account ${index + 1} name is required`)
          }
          if (!debtAccount.balance || parseFloat(debtAccount.balance) < 0) {
            errors.push(`Debt Account ${index + 1} balance must be a positive number`)
          }
          if (!debtAccount.institution) {
            errors.push(`Debt Account ${index + 1} institution is required`)
          }
        })
        break

      case 'transactions':
        if (formData.transactions.length === 0) {
          errors.push('At least one transaction is required for AI insights')
        }
        
        formData.transactions.forEach((transaction, index) => {
          if (!transaction.description.trim()) {
            errors.push(`Transaction ${index + 1} description is required`)
          }
          if (!transaction.amount || parseFloat(transaction.amount) === 0) {
            errors.push(`Transaction ${index + 1} amount cannot be zero`)
          }
          if (!transaction.date) {
            errors.push(`Transaction ${index + 1} date is required`)
          }
        })
        break

      case 'overview':
        // Overview tab doesn't require validation - it's just for viewing
        break

      case 'goals':
        // Goals are optional, but if added, validate them
        formData.financialGoals.forEach((goal, index) => {
          if (goal.name.trim() && goal.target) {
            if (!goal.target || parseFloat(goal.target) <= 0) {
              errors.push(`Goal ${index + 1} target amount must be a positive number`)
            }
            if (goal.current && parseFloat(goal.current) < 0) {
              errors.push(`Goal ${index + 1} current amount cannot be negative`)
            }
          }
        })
        break
    }
    
    setValidationErrors(errors)
    return errors.length === 0
  }

  const handleAccountChange = (index: number, field: string, value: string) => {
    const newAccounts = [...formData.accounts]
    newAccounts[index] = { ...newAccounts[index], [field]: value }
    setFormData({ ...formData, accounts: newAccounts })
  }

  const handleDebtAccountChange = (index: number, field: string, value: string) => {
    const newDebtAccounts = [...formData.debtAccounts]
    newDebtAccounts[index] = { ...newDebtAccounts[index], [field]: value }
    setFormData({ ...formData, debtAccounts: newDebtAccounts })
  }

  const handleTransactionChange = (index: number, field: string, value: string) => {
    const newTransactions = [...formData.transactions]
    newTransactions[index] = { ...newTransactions[index], [field]: value }
    setFormData({ ...formData, transactions: newTransactions })
  }

  const handleGoalChange = (index: number, field: string, value: string) => {
    const newGoals = [...formData.financialGoals]
    newGoals[index] = { ...newGoals[index], [field]: value }
    setFormData({ ...formData, financialGoals: newGoals })
  }

  const addAccount = () => {
    const newAccount: Account = {
      id: Date.now().toString(),
      name: '',
      type: 'checking',
      balance: '',
      currency: 'USD',
      institution: 'Manual Entry'
    }
    setFormData({
      ...formData,
      accounts: [...formData.accounts, newAccount]
    })
  }

  const addDebtAccount = () => {
    const newDebtAccount = {
      id: Date.now().toString(),
      name: '',
      type: 'credit-card' as const,
      balance: '',
      currency: 'USD',
      institution: 'Manual Entry',
      interestRate: '',
      minimumPayment: '',
      dueDate: ''
    }
    setFormData({
      ...formData,
      debtAccounts: [...formData.debtAccounts, newDebtAccount]
    })
  }

  const addTransaction = () => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      description: '',
      amount: '',
      category: 'Other',
      accountId: formData.accounts[0]?.id || '',
      type: 'expense'
    }
    setFormData({
      ...formData,
      transactions: [...formData.transactions, newTransaction]
    })
  }

  const addGoal = () => {
    const newGoal: FinancialGoal = {
      id: Date.now().toString(),
      name: '',
      target: '',
      current: '',
      deadline: '',
      type: 'savings',
      priority: 'medium'
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

  const removeDebtAccount = (index: number) => {
    const newDebtAccounts = formData.debtAccounts.filter((_, i) => i !== index)
    setFormData({ ...formData, debtAccounts: newDebtAccounts })
  }

  const removeTransaction = (index: number) => {
    const newTransactions = formData.transactions.filter((_, i) => i !== index)
    setFormData({ ...formData, transactions: newTransactions })
  }

  const removeGoal = (index: number) => {
    const newGoals = formData.financialGoals.filter((_, i) => i !== index)
    setFormData({ ...formData, financialGoals: newGoals })
  }

  const handleSubmit = () => {
    if (!validateData()) {
      return
    }

    // Transform the data to match our expected format
    const transformedData = {
      accounts: formData.accounts
        .filter(acc => acc.name && acc.balance && acc.institution)
        .map(acc => ({
          id: acc.id,
          name: acc.name,
          type: acc.type,
          balance: parseFloat(acc.balance) || 0,
          currency: acc.currency,
          lastSync: new Date().toISOString(),
          institution: acc.institution,
          status: 'active'
        })),
      debtAccounts: formData.debtAccounts
        .filter(acc => acc.name && acc.balance && acc.institution)
        .map(acc => ({
          id: acc.id,
          name: acc.name,
          type: acc.type,
          balance: parseFloat(acc.balance) || 0,
          currency: acc.currency,
          institution: acc.institution,
          interestRate: parseFloat(acc.interestRate) || 0,
          minimumPayment: parseFloat(acc.minimumPayment) || 0,
          dueDate: acc.dueDate,
          status: 'active'
        })),
      transactions: formData.transactions
        .filter(tx => tx.description && tx.amount && tx.date)
        .map(tx => ({
          id: tx.id,
          date: tx.date,
          description: tx.description,
          amount: parseFloat(tx.amount) || 0,
          category: tx.category,
          accountId: tx.accountId,
          merchant: tx.description,
          recurring: tx.recurring || false,
          recurringFrequency: tx.recurringFrequency
        })),
      summary: {
        totalBalance: formData.accounts
          .filter(acc => acc.balance)
          .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0),
        totalDebt: formData.debtAccounts
          .filter(acc => acc.balance)
          .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0),
        netWorth: formData.accounts
          .filter(acc => acc.balance)
          .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0) - 
          formData.debtAccounts
            .filter(acc => acc.balance)
            .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0),
        monthlyIncome: parseFloat(formData.monthlyIncome) || 0,
        monthlyExpenses: parseFloat(formData.monthlyExpenses) || 0,
        monthlySavings: (parseFloat(formData.monthlyIncome) || 0) - (parseFloat(formData.monthlyExpenses) || 0),
        creditScore: parseFloat(formData.creditScore) || 750,
        emergencyFund: parseFloat(formData.emergencyFund) || 0,
        investmentAmount: parseFloat(formData.investmentAmount) || 0,
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
          type: goal.type,
          priority: goal.priority,
          status: 'active'
        }))
    }

    onDataEntered(transformedData)
  }

  const totalBalance = formData.accounts
    .filter(acc => acc.balance)
    .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0)

  const totalDebt = formData.debtAccounts
    .filter(acc => acc.balance)
    .reduce((sum, acc) => sum + (parseFloat(acc.balance) || 0), 0)

  const netWorth = totalBalance - totalDebt

  const totalIncome = formData.transactions
    .filter(tx => tx.type === 'income' && tx.amount)
    .reduce((sum, tx) => sum + (parseFloat(tx.amount) || 0), 0)

  const totalExpenses = formData.transactions
    .filter(tx => tx.type === 'expense' && tx.amount)
    .reduce((sum, tx) => sum + (parseFloat(tx.amount) || 0), 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">📝 Manual Data Entry</h3>
        <p className="text-gray-300">
          Enter your financial information manually to get started with MoneyPal's AI insights
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
        {[
          { id: 'accounts', label: 'Accounts', icon: CreditCard },
          { id: 'debt', label: 'Debt & Liabilities', icon: AlertTriangle },
          { id: 'transactions', label: 'Transactions', icon: Receipt },
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'goals', label: 'Goals', icon: Target }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleTabChange(id as any)}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-robot-green text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Validation Errors */}
      {validationErrors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <h4 className="font-semibold text-red-400">
              {activeTab === 'accounts' && 'Please fix the following account errors:'}
              {activeTab === 'debt' && 'Please fix the following debt account errors:'}
              {activeTab === 'transactions' && 'Please fix the following transaction errors:'}
              {activeTab === 'goals' && 'Please fix the following goal errors:'}
              {activeTab === 'overview' && 'Please fix the following errors:'}
            </h4>
          </div>
          <ul className="text-sm text-red-300 space-y-1">
            {validationErrors.map((error, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                {error}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Helpful Guidance */}
      {validationErrors.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <h4 className="font-semibold text-blue-400">
              {activeTab === 'accounts' && 'Account Setup Guide:'}
              {activeTab === 'debt' && 'Debt Management Guide:'}
              {activeTab === 'transactions' && 'Transaction Entry Guide:'}
              {activeTab === 'goals' && 'Financial Goals Guide:'}
              {activeTab === 'overview' && 'Financial Overview Guide:'}
            </h4>
          </div>
          <p className="text-sm text-blue-300">
            {activeTab === 'accounts' && 'Add your checking, savings, and investment accounts. These represent your assets and contribute to your net worth.'}
            {activeTab === 'debt' && 'Add credit cards, loans, and other liabilities. These reduce your net worth and help calculate your true financial position.'}
            {activeTab === 'transactions' && 'Add your income and expenses to track spending patterns and cash flow. The AI will analyze this data for insights.'}
            {activeTab === 'goals' && 'Set financial goals like emergency funds, debt payoff, or savings targets. Track your progress over time.'}
            {activeTab === 'overview' && 'Review your complete financial picture including net worth, monthly income/expenses, and overall financial health.'}
          </p>
        </motion.div>
      )}

      {/* Accounts Tab */}
      {activeTab === 'accounts' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
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
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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
                  <option value="investment">Investment</option>
                </select>
                
                <input
                  type="number"
                  placeholder="Balance"
                  value={account.balance}
                  onChange={(e) => handleAccountChange(index, 'balance', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
                />
                
                <select
                  value={account.currency}
                  onChange={(e) => handleAccountChange(index, 'currency', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                
                <input
                  type="text"
                  placeholder="Institution"
                  value={account.institution}
                  onChange={(e) => handleAccountChange(index, 'institution', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
                />
                
                <div className="flex items-center gap-2">
                  {formData.accounts.length > 1 && (
                    <button
                      onClick={() => removeAccount(index)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Debt & Liabilities Tab */}
      {activeTab === 'debt' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              Debt & Liabilities
            </h4>
            <button
              onClick={addDebtAccount}
              className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Debt Account
            </button>
          </div>

          {formData.debtAccounts.map((debtAccount, index) => (
            <motion.div
              key={debtAccount.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                <input
                  type="text"
                  placeholder="Account Name"
                  value={debtAccount.name}
                  onChange={(e) => handleDebtAccountChange(index, 'name', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />
                
                <select
                  value={debtAccount.type}
                  onChange={(e) => handleDebtAccountChange(index, 'type', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-red-400 focus:outline-none"
                >
                  <option value="credit-card">Credit Card</option>
                  <option value="student-loan">Student Loan</option>
                  <option value="car-loan">Car Loan</option>
                  <option value="mortgage">Mortgage</option>
                  <option value="personal-loan">Personal Loan</option>
                  <option value="other">Other</option>
                </select>
                
                <input
                  type="number"
                  placeholder="Balance Owed"
                  value={debtAccount.balance}
                  onChange={(e) => handleDebtAccountChange(index, 'balance', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />
                
                <select
                  value={debtAccount.currency}
                  onChange={(e) => handleDebtAccountChange(index, 'currency', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-red-400 focus:outline-none"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>

                <input
                  type="number"
                  placeholder="Interest Rate %"
                  value={debtAccount.interestRate}
                  onChange={(e) => handleDebtAccountChange(index, 'interestRate', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />

                <input
                  type="number"
                  placeholder="Min Payment"
                  value={debtAccount.minimumPayment}
                  onChange={(e) => handleDebtAccountChange(index, 'minimumPayment', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />
                
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={debtAccount.dueDate}
                    onChange={(e) => handleDebtAccountChange(index, 'dueDate', e.target.value)}
                    className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-red-400 focus:outline-none"
                  />
                  
                  <button
                    onClick={() => removeDebtAccount(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {formData.debtAccounts.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p>No debt accounts added yet.</p>
              <p className="text-sm">Add credit cards, loans, and other liabilities to get a complete financial picture.</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Receipt className="w-5 h-5 text-robot-orange" />
              Your Transactions
            </h4>
            <button
              onClick={addTransaction}
              className="flex items-center gap-2 px-3 py-2 bg-robot-orange text-white rounded-lg hover:bg-robot-orange/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Transaction
            </button>
          </div>

          {formData.transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <input
                  type="date"
                  value={transaction.date}
                  onChange={(e) => handleTransactionChange(index, 'date', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                />
                
                <input
                  type="text"
                  placeholder="Description"
                  value={transaction.description}
                  onChange={(e) => handleTransactionChange(index, 'description', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
                />
                
                <input
                  type="number"
                  placeholder="Amount"
                  value={transaction.amount}
                  onChange={(e) => handleTransactionChange(index, 'amount', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
                />
                
                <select
                  value={transaction.category}
                  onChange={(e) => handleTransactionChange(index, 'category', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={transaction.type}
                  onChange={(e) => handleTransactionChange(index, 'type', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeTransaction(index)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-robot-green" />
            Financial Overview
          </h4>

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

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Credit Score</label>
              <input
                type="number"
                placeholder="750"
                value={formData.creditScore}
                onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Emergency Fund</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.emergencyFund}
                onChange={(e) => setFormData({ ...formData, emergencyFund: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Total Debt</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.totalDebt}
                onChange={(e) => setFormData({ ...formData, totalDebt: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Investment Amount</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.investmentAmount}
                onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-robot-green focus:outline-none"
              />
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-robot-green/10 border border-robot-green/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-white">Total Assets</h5>
                <span className="text-xl font-bold text-robot-green">
                  ${totalBalance.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-300">From {formData.accounts.length} accounts</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-white">Total Debt</h5>
                <span className="text-xl font-bold text-red-400">
                  ${totalDebt.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-300">From {formData.debtAccounts.length} debt accounts</p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-white">Net Worth</h5>
                <span className={`text-xl font-bold ${netWorth >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
                  ${netWorth.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-300">{netWorth >= 0 ? 'Positive' : 'Negative'} net worth</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-white">Monthly Cash Flow</h5>
                <span className={`text-xl font-bold ${(totalIncome - totalExpenses) >= 0 ? 'text-purple-400' : 'text-red-400'}`}>
                  ${(totalIncome - totalExpenses).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-300">Income - Expenses</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Goals Tab */}
      {activeTab === 'goals' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
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
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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
                
                <select
                  value={goal.type}
                  onChange={(e) => handleGoalChange(index, 'type', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  <option value="savings">Savings</option>
                  <option value="debt">Debt Payoff</option>
                  <option value="investment">Investment</option>
                  <option value="emergency">Emergency Fund</option>
                </select>

                <select
                  value={goal.priority}
                  onChange={(e) => handleGoalChange(index, 'priority', e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-robot-green focus:outline-none"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                
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
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
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
