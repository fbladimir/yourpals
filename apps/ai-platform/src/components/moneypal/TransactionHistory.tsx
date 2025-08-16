import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { 
  Search,
  Filter,
  Calendar,
  DollarSign,
  Tag,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Clock,
  Building2,
  CreditCard,
  ShoppingBag,
  Utensils,
  Car,
  Home,
  Heart,
  Gamepad2,
  BookOpen,
  Zap
} from 'lucide-react'

interface Transaction {
  id: string
  date: string
  amount: number
  description: string
  category: string
  accountId: string
  accountName: string
  merchant?: string
  type: 'income' | 'expense' | 'transfer'
  status: 'completed' | 'pending' | 'failed'
  aiInsights?: string[]
  tags?: string[]
}

interface TransactionHistoryProps {
  transactions: Transaction[]
  onTransactionClick: (transaction: Transaction) => void
  onCategoryChange: (transactionId: string, newCategory: string) => void
  onAddTag: (transactionId: string, tag: string) => void
  showAmounts: boolean
  onToggleAmounts: () => void
}

export default function TransactionHistory({
  transactions,
  onTransactionClick,
  onCategoryChange,
  onAddTag,
  showAmounts,
  onToggleAmounts
}: TransactionHistoryProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'category'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null)

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const categoryMap = new Map<string, boolean>()
    transactions.forEach(t => categoryMap.set(t.category, true))
    const uniqueCategories = Array.from(categoryMap.keys())
    return ['all', ...uniqueCategories.sort()]
  }, [transactions])

  // Filter and sort transactions
  const filteredTransactions = useMemo(() => {
    let filtered = transactions.filter(transaction => {
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           transaction.merchant?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || transaction.category === selectedCategory
      const matchesStatus = selectedStatus === 'all' || transaction.status === selectedStatus
      
      return matchesSearch && matchesCategory && matchesStatus
    })

    // Sort transactions
    filtered.sort((a, b) => {
      let aValue: any, bValue: any
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
          break
        case 'amount':
          aValue = Math.abs(a.amount)
          bValue = Math.abs(b.amount)
          break
        case 'category':
          aValue = a.category
          bValue = b.category
          break
        default:
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [transactions, searchTerm, selectedCategory, selectedStatus, sortBy, sortOrder])

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) return '$0.00'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes('food') || categoryLower.includes('restaurant')) return Utensils
    if (categoryLower.includes('shopping') || categoryLower.includes('retail')) return ShoppingBag
    if (categoryLower.includes('transport') || categoryLower.includes('gas')) return Car
    if (categoryLower.includes('home') || categoryLower.includes('rent')) return Home
    if (categoryLower.includes('entertainment') || categoryLower.includes('movie')) return Gamepad2
    if (categoryLower.includes('health') || categoryLower.includes('medical')) return Heart
    if (categoryLower.includes('education') || categoryLower.includes('book')) return BookOpen
    if (categoryLower.includes('banking') || categoryLower.includes('transfer')) return Building2
    if (categoryLower.includes('credit') || categoryLower.includes('payment')) return CreditCard
    return Tag
  }

  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes('food')) return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    if (categoryLower.includes('shopping')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    if (categoryLower.includes('transport')) return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    if (categoryLower.includes('home')) return 'bg-green-500/20 text-green-400 border-green-500/30'
    if (categoryLower.includes('entertainment')) return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    if (categoryLower.includes('health')) return 'bg-red-500/20 text-red-400 border-red-500/30'
    if (categoryLower.includes('education')) return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    if (categoryLower.includes('income')) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400'
      case 'pending': return 'bg-yellow-500/20 text-yellow-400'
      case 'failed': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getAmountColor = (amount: number) => {
    if (amount > 0) return 'text-green-400'
    if (amount < 0) return 'text-red-400'
    return 'text-gray-300'
  }

  const getAmountIcon = (amount: number) => {
    if (amount > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (amount < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    return null
  }

  const toggleSort = (field: 'date' | 'amount' | 'category') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('desc')
    }
  }

  const SortButton = ({ field, label }: { field: 'date' | 'amount' | 'category', label: string }) => (
    <button
      onClick={() => toggleSort(field)}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-700/50"
    >
      {label}
      {sortBy === field && (
        sortOrder === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
      )}
    </button>
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
        <h3 className="text-xl font-semibold text-white">Transaction History</h3>
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

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-robot-green focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-robot-green focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-robot-green focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>

        {/* Sort Options */}
        <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg p-1">
          <SortButton field="date" label="Date" />
          <SortButton field="amount" label="Amount" />
          <SortButton field="category" label="Category" />
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer group"
              onClick={() => onTransactionClick(transaction)}
            >
              <div className="flex items-center gap-4">
                {/* Category Icon */}
                <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const IconComponent = getCategoryIcon(transaction.category)
                    return <IconComponent className="w-5 h-5 text-gray-400" />
                  })()}
                </div>

                {/* Transaction Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-white truncate">{transaction.description}</h4>
                    {transaction.merchant && (
                      <span className="text-sm text-gray-400">@ {transaction.merchant}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(transaction.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {transaction.accountName}
                    </span>
                  </div>
                </div>

                {/* Amount and Status */}
                <div className="flex items-center gap-3">
                  {/* Category Badge */}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(transaction.category)}`}>
                    {transaction.category}
                  </span>
                  
                  {/* Status Badge */}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                  
                  {/* Amount */}
                  <div className="text-right">
                    <div className={`text-lg font-semibold ${getAmountColor(transaction.amount)} flex items-center gap-1`}>
                      {showAmounts ? formatCurrency(transaction.amount) : '••••••'}
                      {getAmountIcon(transaction.amount)}
                    </div>
                  </div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setExpandedTransaction(expandedTransaction === transaction.id ? null : transaction.id)
                  }}
                  className="p-1 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  {expandedTransaction === transaction.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedTransaction === transaction.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-700/50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* AI Insights */}
                      {transaction.aiInsights && transaction.aiInsights.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-robot-green mb-2 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" />
                            AI Insights
                          </h5>
                          <ul className="space-y-1">
                            {transaction.aiInsights.map((insight, idx) => (
                              <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                                <Zap className="w-3 h-3 text-robot-green mt-0.5 flex-shrink-0" />
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Tags</h5>
                        <div className="flex flex-wrap gap-2">
                          {transaction.tags?.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                          <button className="px-2 py-1 bg-robot-green/20 text-robot-green text-xs rounded-full hover:bg-robot-green/30 transition-colors">
                            + Add Tag
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">No Transactions Found</h4>
            <p className="text-gray-400">Try adjusting your search or filters to see more results.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
