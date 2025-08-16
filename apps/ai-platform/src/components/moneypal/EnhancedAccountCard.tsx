import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CreditCard, 
  Building2, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  EyeOff,
  MoreVertical,
  ExternalLink,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'
import Image from 'next/image'

interface Account {
  id: string
  name: string
  type: string
  balance: number
  currency: string
  lastSync?: string
  institution?: string
  accountNumber?: string
  status: 'active' | 'pending' | 'error'
}

interface EnhancedAccountCardProps {
  account: Account
  onRefresh: (accountId: string) => void
  onUnlink: (accountId: string) => void
  onViewDetails: (accountId: string) => void
  showBalance: boolean
  onToggleBalance: () => void
}

export default function EnhancedAccountCard({
  account,
  onRefresh,
  onUnlink,
  onViewDetails,
  showBalance,
  onToggleBalance
}: EnhancedAccountCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const formatCurrency = (amount: number) => {
    if (isNaN(amount) || amount === null || amount === undefined) return '$0'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  const formatLastSync = (lastSync?: string) => {
    if (!lastSync) return 'Never synced'
    const date = new Date(lastSync)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  const getAccountIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'credit':
        return CreditCard
      case 'checking':
      case 'savings':
      case 'investment':
        return Building2
      default:
        return Building2
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return CheckCircle
      case 'pending': return Clock
      case 'error': return AlertTriangle
      default: return Clock
    }
  }

  const getBalanceColor = (balance: number) => {
    if (balance > 0) return 'text-green-400'
    if (balance < 0) return 'text-red-400'
    return 'text-gray-300'
  }

  const getBalanceTrend = (balance: number) => {
    if (balance > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (balance < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    return null
  }

  const IconComponent = getAccountIcon(account.type)
  const StatusIcon = getStatusIcon(account.status)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-gray-600/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative p-5">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-robot-green" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">{account.name}</h3>
                <p className="text-gray-400 text-sm capitalize">{account.type}</p>
                {account.institution && (
                  <p className="text-gray-500 text-xs">{account.institution}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Status Badge */}
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(account.status)}`}>
                <StatusIcon className="w-3 h-3 inline mr-1" />
                {account.status}
              </span>
              
              {/* Balance Toggle */}
              <button
                onClick={onToggleBalance}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                title={showBalance ? 'Hide Balance' : 'Show Balance'}
              >
                {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              
              {/* Menu Button */}
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                  title="More options"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => onViewDetails(account.id)}
                        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                      <button
                        onClick={() => onRefresh(account.id)}
                        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 flex items-center gap-2"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                      </button>
                      <div className="border-t border-gray-700 my-1"></div>
                      <button
                        onClick={() => onUnlink(account.id)}
                        className="w-full px-4 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 flex items-center gap-2"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        Unlink Account
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          
          {/* Balance Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Current Balance</span>
              {getBalanceTrend(account.balance)}
            </div>
            <div className={`text-2xl font-bold ${getBalanceColor(account.balance)}`}>
              {showBalance ? formatCurrency(account.balance) : '••••••'}
            </div>
            {account.accountNumber && (
              <p className="text-xs text-gray-500 mt-1">
                ****{account.accountNumber.slice(-4)}
              </p>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Last sync: {formatLastSync(account.lastSync)}</span>
            <span className="uppercase">{account.currency}</span>
          </div>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-robot-green/30 transition-all duration-300"></div>
      </div>
      
      {/* Click outside to close menu */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowMenu(false)}
        />
      )}
    </motion.div>
  )
}
