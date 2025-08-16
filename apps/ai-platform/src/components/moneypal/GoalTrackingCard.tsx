import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  DollarSign,
  Lightbulb,
  Edit,
  Plus,
  CheckCircle,
  Clock,
  AlertTriangle,
  Zap,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

interface FinancialGoal {
  id: string
  name: string
  description: string
  targetAmount: number
  currentAmount: number
  targetDate: string
  category: 'savings' | 'debt' | 'investment' | 'purchase' | 'emergency' | 'custom'
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'on-track' | 'behind' | 'ahead' | 'completed'
  monthlyContribution: number
  progress: number
  aiInsights: string[]
  milestones: Milestone[]
  createdAt: string
  updatedAt: string
}

interface Milestone {
  id: string
  name: string
  targetAmount: number
  targetDate: string
  isCompleted: boolean
  completedAt?: string
}

interface GoalTrackingCardProps {
  goal: FinancialGoal
  onEditGoal: (goalId: string) => void
  onUpdateProgress: (goalId: string, newAmount: number) => void
  onAddMilestone: (goalId: string, milestone: Omit<Milestone, 'id'>) => void
  onCompleteMilestone: (goalId: string, milestoneId: string) => void
  showAmounts: boolean
  onToggleAmounts: () => void
}

export default function GoalTrackingCard({
  goal,
  onEditGoal,
  onUpdateProgress,
  onAddMilestone,
  onCompleteMilestone,
  showAmounts,
  onToggleAmounts
}: GoalTrackingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showMilestones, setShowMilestones] = useState(false)

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
    const now = new Date()
    const diffMs = date.getTime() - now.getTime()
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Due today'
    if (diffDays === 1) return 'Due tomorrow'
    if (diffDays < 7) return `Due in ${diffDays} days`
    if (diffDays < 30) return `Due in ${Math.ceil(diffDays / 7)} weeks`
    return date.toLocaleDateString()
  }

  const getDaysRemaining = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = date.getTime() - now.getTime()
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'savings': return TrendingUp
      case 'debt': return TrendingDown
      case 'investment': return TrendingUp
      case 'purchase': return Target
      case 'emergency': return AlertTriangle
      default: return Target
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'savings': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'debt': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'investment': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'purchase': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'emergency': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-400'
      case 'high': return 'bg-orange-500/20 text-orange-400'
      case 'medium': return 'bg-blue-500/20 text-blue-400'
      case 'low': return 'bg-green-500/20 text-green-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'bg-green-500/20 text-green-400'
      case 'behind': return 'bg-red-500/20 text-red-400'
      case 'ahead': return 'bg-blue-500/20 text-blue-400'
      case 'completed': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return 'from-purple-500 to-purple-600'
    if (progress >= 75) return 'from-green-500 to-green-600'
    if (progress >= 50) return 'from-blue-500 to-blue-600'
    if (progress >= 25) return 'from-yellow-500 to-yellow-600'
    return 'from-red-500 to-red-600'
  }

  const calculateStatus = (): 'on-track' | 'behind' | 'ahead' | 'completed' => {
    if (goal.progress >= 100) return 'completed'
    
    const daysRemaining = getDaysRemaining(goal.targetDate)
    const expectedProgress = Math.max(0, 100 - (daysRemaining / 365) * 100)
    
    if (goal.progress >= expectedProgress + 10) return 'ahead'
    if (goal.progress >= expectedProgress - 10) return 'on-track'
    return 'behind'
  }

  const IconComponent = getCategoryIcon(goal.category)
  const currentStatus = calculateStatus()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group"
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
                <h3 className="font-semibold text-white text-lg">{goal.name}</h3>
                <p className="text-gray-400 text-sm">{goal.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Priority Badge */}
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                {goal.priority}
              </span>
              
              {/* Status Badge */}
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(currentStatus)}`}>
                {currentStatus.replace('-', ' ')}
              </span>
              
              {/* Amount Toggle */}
              <button
                onClick={onToggleAmounts}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                title={showAmounts ? 'Hide Amounts' : 'Show Amounts'}
              >
                {showAmounts ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              
              {/* Edit Button */}
              <button
                onClick={() => onEditGoal(goal.id)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                title="Edit Goal"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Progress Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm font-medium text-white">{goal.progress.toFixed(1)}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
              <motion.div 
                className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(goal.progress)}`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(goal.progress, 100)}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            
            {/* Amount Display */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">
                {showAmounts ? formatCurrency(goal.currentAmount) : '••••••'}
              </span>
              <span className="text-gray-400">
                of {showAmounts ? formatCurrency(goal.targetAmount) : '••••••'}
              </span>
            </div>
          </div>
          
          {/* Goal Details */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">{formatDate(goal.targetDate)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">
                {showAmounts ? `${formatCurrency(goal.monthlyContribution)}/month` : '••••••/month'}
              </span>
            </div>
          </div>
          
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(goal.category)}`}>
              {goal.category.charAt(0).toUpperCase() + goal.category.slice(1)}
            </span>
          </div>
          
          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-2"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          
          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-700/50"
              >
                {/* AI Insights */}
                {goal.aiInsights && goal.aiInsights.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-robot-green mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      AI Insights
                    </h5>
                    <ul className="space-y-1">
                      {goal.aiInsights.map((insight, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                          <Zap className="w-3 h-3 text-robot-green mt-0.5 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Milestones */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-medium text-gray-300">Milestones</h5>
                    <button
                      onClick={() => setShowMilestones(!showMilestones)}
                      className="text-xs text-robot-green hover:text-robot-blue transition-colors"
                    >
                      {showMilestones ? 'Hide' : 'Show'} Milestones
                    </button>
                  </div>
                  
                  {showMilestones && (
                    <div className="space-y-2">
                      {goal.milestones.map((milestone) => (
                        <div
                          key={milestone.id}
                          className={`p-2 rounded-lg text-xs ${
                            milestone.isCompleted 
                              ? 'bg-green-500/20 border border-green-500/30' 
                              : 'bg-gray-700/30 border border-gray-600/30'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={milestone.isCompleted ? 'text-green-400' : 'text-gray-300'}>
                              {milestone.name}
                            </span>
                            {milestone.isCompleted ? (
                              <CheckCircle className="w-3 h-3 text-green-400" />
                            ) : (
                              <Clock className="w-3 h-3 text-gray-400" />
                            )}
                          </div>
                          <div className="text-gray-500 mt-1">
                            {showAmounts ? formatCurrency(milestone.targetAmount) : '••••••'} • {formatDate(milestone.targetDate)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:border-robot-green/30 transition-all duration-300"></div>
      </div>
    </motion.div>
  )
}
