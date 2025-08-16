import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { 
  Zap, 
  Settings, 
  Play, 
  Pause, 
  Trash2, 
  Plus,
  Edit,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Target,
  CreditCard,
  PiggyBank,
  Brain,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Activity,
  BarChart3,
  Repeat,
  Smartphone,
  Mail,
  Bell,
  BookOpen
} from 'lucide-react'
import Image from 'next/image'

interface AdvancedAutomationProps {
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  onOpenChat: () => void
}

interface AutomationRule {
  id: string
  name: string
  description: string
  type: 'savings' | 'spending' | 'budget' | 'goals' | 'notifications' | 'transfers' | 'investments'
  status: 'active' | 'paused' | 'draft'
  priority: 'low' | 'medium' | 'high' | 'critical'
  trigger: 'automatic' | 'manual' | 'scheduled' | 'conditional'
  conditions: AutomationCondition[]
  actions: AutomationAction[]
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'custom'
    time?: string
    dayOfWeek?: number
    dayOfMonth?: number
  }
  lastExecuted?: Date
  nextExecution?: Date
  executionCount: number
  successRate: number
  createdAt: Date
  updatedAt: Date
  isSmart: boolean
  aiGenerated: boolean
  userCustomized: boolean
}

interface AutomationCondition {
  id: string
  field: 'balance' | 'spending' | 'income' | 'category' | 'amount' | 'frequency' | 'goal_progress'
  operator: 'equals' | 'greater_than' | 'less_than' | 'contains' | 'not_equals' | 'between'
  value: any
  secondaryValue?: any
  logicalOperator?: 'AND' | 'OR'
}

interface AutomationAction {
  id: string
  type: 'transfer' | 'notification' | 'category_change' | 'goal_update' | 'budget_adjust' | 'ai_analysis'
  description: string
  parameters: any
  status: 'pending' | 'executed' | 'failed' | 'skipped'
  executedAt?: Date
  result?: any
}

interface AutomationTemplate {
  id: string
  name: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedSavings: number
  setupTime: number
  popularity: number
  aiScore: number
}

export default function AdvancedAutomation({ 
  accounts, 
  transactions, 
  summary, 
  insights, 
  goals, 
  onOpenChat 
}: AdvancedAutomationProps) {
  const [automationRules, setAutomationRules] = useState<AutomationRule[]>([])
  const [showCreateRule, setShowCreateRule] = useState(false)
  const [showTemplates, setShowTemplates] = useState(true)
  const [selectedRule, setSelectedRule] = useState<AutomationRule | null>(null)
  const [filter, setFilter] = useState<'all' | 'active' | 'paused' | 'draft'>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Generate smart automation rules based on financial data
  const generateSmartRules = useMemo((): AutomationRule[] => {
    if (!transactions.length || !summary) return []

    const rules: AutomationRule[] = []
    const now = new Date()

    // 1. Emergency Fund Automation
    if (summary.monthlySavings && summary.monthlySavings > 0) {
      rules.push({
        id: 'emergency-fund-auto',
        name: 'Emergency Fund Builder',
        description: 'Automatically transfer 10% of income to emergency fund when balance is below 3 months of expenses',
        type: 'savings',
        status: 'active',
        priority: 'high',
        trigger: 'conditional',
        conditions: [
          {
            id: 'ef-balance',
            field: 'balance',
            operator: 'less_than',
            value: summary.monthlyIncome * 3
          }
        ],
        actions: [
          {
            id: 'ef-transfer',
            type: 'transfer',
            description: 'Transfer 10% of income to emergency fund account',
            parameters: {
              fromAccount: 'primary',
              toAccount: 'emergency_fund',
              amount: summary.monthlyIncome * 0.1,
              frequency: 'monthly'
            },
            status: 'pending'
          }
        ],
        schedule: {
          frequency: 'monthly',
          dayOfMonth: 1
        },
        lastExecuted: undefined,
        nextExecution: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        executionCount: 0,
        successRate: 100,
        createdAt: now,
        updatedAt: now,
        isSmart: true,
        aiGenerated: true,
        userCustomized: false
      })
    }

    // 2. Spending Alert Automation
    if (summary.monthlySavings && summary.monthlySavings < 0) {
      rules.push({
        id: 'spending-alert-auto',
        name: 'Smart Spending Guardian',
        description: 'Alert when daily spending exceeds 80% of daily budget allowance',
        type: 'spending',
        status: 'active',
        priority: 'high',
        trigger: 'conditional',
        conditions: [
          {
            id: 'daily-spending',
            field: 'spending',
            operator: 'greater_than',
            value: (summary.monthlyIncome * 0.8) / 30
          }
        ],
        actions: [
          {
            id: 'spending-notification',
            type: 'notification',
            description: 'Send spending alert with AI-powered suggestions',
            parameters: {
              channel: 'app',
              message: 'Daily spending limit approaching. Consider these AI suggestions:',
              aiSuggestions: true
            },
            status: 'pending'
          }
        ],
        schedule: {
          frequency: 'daily',
          time: '18:00'
        },
        lastExecuted: undefined,
        nextExecution: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0),
        executionCount: 0,
        successRate: 100,
        createdAt: now,
        updatedAt: now,
        isSmart: true,
        aiGenerated: true,
        userCustomized: false
      })
    }

    // 3. Goal Progress Automation
    if (goals.length > 0) {
      goals.forEach((goal, index) => {
        if (goal.progress && goal.progress > 50) {
          rules.push({
            id: `goal-${goal.id}-auto`,
            name: `Goal Accelerator: ${goal.name}`,
            description: `Automatically increase savings rate when ${goal.name} goal is ${goal.progress}% complete`,
            type: 'goals',
            status: 'active',
            priority: 'medium',
            trigger: 'conditional',
            conditions: [
              {
                id: `goal-${goal.id}-progress`,
                field: 'goal_progress',
                operator: 'greater_than',
                value: 50
              }
            ],
            actions: [
              {
                id: `goal-${goal.id}-action`,
                type: 'goal_update',
                description: `Increase monthly contribution to ${goal.name} by 20%`,
                parameters: {
                  goalId: goal.id,
                  increasePercentage: 20,
                  notification: true
                },
                status: 'pending'
              }
            ],
            schedule: {
              frequency: 'monthly',
              dayOfMonth: 15
            },
            lastExecuted: undefined,
            nextExecution: new Date(now.getFullYear(), now.getMonth(), 15),
            executionCount: 0,
            successRate: 100,
            createdAt: now,
            updatedAt: now,
            isSmart: true,
            aiGenerated: true,
            userCustomized: false
          })
        }
      })
    }

    // 4. Category Optimization Automation
    const highSpendingCategories = transactions
      .filter(tx => Number(tx.amount) < 0)
      .reduce((acc, tx) => {
        const category = tx.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + Math.abs(Number(tx.amount))
        return acc
      }, {} as Record<string, number>)

    Object.entries(highSpendingCategories)
      .filter(([_, amount]) => (amount as number) > summary.monthlyIncome * 0.3)
      .forEach(([category, amount]) => {
        rules.push({
          id: `category-${category.toLowerCase()}-auto`,
          name: `${category} Spending Optimizer`,
          description: `Automatically suggest budget adjustments when ${category} spending exceeds 30% of income`,
          type: 'budget',
          status: 'active',
          priority: 'medium',
          trigger: 'conditional',
          conditions: [
            {
              id: `cat-${category.toLowerCase()}`,
              field: 'category',
              operator: 'equals',
              value: category
            },
            {
              id: `cat-${category.toLowerCase()}-amount`,
              field: 'amount',
              operator: 'greater_than',
              value: summary.monthlyIncome * 0.3,
              logicalOperator: 'AND'
            }
          ],
          actions: [
            {
              id: `cat-${category.toLowerCase()}-action`,
              type: 'ai_analysis',
              description: `Generate AI-powered suggestions for ${category} spending optimization`,
              parameters: {
                category: category,
                analysisType: 'spending_optimization',
                includeAlternatives: true,
                notification: true
              },
              status: 'pending'
            }
          ],
          schedule: {
            frequency: 'weekly',
            dayOfWeek: 1
          },
          lastExecuted: undefined,
          nextExecution: new Date(now.getFullYear(), now.getMonth(), now.getDate() + (8 - now.getDay()) % 7),
          executionCount: 0,
          successRate: 100,
          createdAt: now,
          updatedAt: now,
          isSmart: true,
          aiGenerated: true,
          userCustomized: false
        })
      })

    return rules
  }, [transactions, summary, goals])

  // Pre-built automation templates
  const automationTemplates: AutomationTemplate[] = [
    {
      id: 'paycheck-splitter',
      name: 'Paycheck Splitter',
      description: 'Automatically split your paycheck into different accounts (bills, savings, fun money)',
      category: 'savings',
      difficulty: 'beginner',
      estimatedSavings: 200,
      setupTime: 5,
      popularity: 95,
      aiScore: 92
    },
    {
      id: 'bill-payment-reminder',
      name: 'Smart Bill Payment',
      description: 'Get intelligent reminders and automatically categorize bill payments',
      category: 'budget',
      difficulty: 'beginner',
      estimatedSavings: 50,
      setupTime: 3,
      popularity: 88,
      aiScore: 89
    },
    {
      id: 'debt-snowball',
      name: 'Debt Snowball Accelerator',
      description: 'Automatically prioritize debt payments and track progress',
      category: 'debt',
      difficulty: 'intermediate',
      estimatedSavings: 300,
      setupTime: 8,
      popularity: 82,
      aiScore: 87
    },
    {
      id: 'investment-dca',
      name: 'Dollar Cost Averaging',
      description: 'Automatically invest a fixed amount on a regular schedule',
      category: 'investments',
      difficulty: 'advanced',
      estimatedSavings: 500,
      setupTime: 12,
      popularity: 78,
      aiScore: 91
    },
    {
      id: 'expense-categorization',
      name: 'Smart Expense Categorization',
      description: 'AI-powered automatic categorization of all transactions',
      category: 'budget',
      difficulty: 'beginner',
      estimatedSavings: 100,
      setupTime: 2,
      popularity: 94,
      aiScore: 96
    }
  ]

  // Update state when data changes
  useEffect(() => {
    setAutomationRules(generateSmartRules)
  }, [generateSmartRules])

  const filteredRules = automationRules.filter(rule => {
    if (filter === 'all') return true
    return rule.status === filter
  })

  const toggleRuleStatus = (ruleId: string) => {
    setAutomationRules(prev => 
      prev.map(rule => 
        rule.id === ruleId 
          ? { ...rule, status: rule.status === 'active' ? 'paused' : 'active' }
          : rule
      )
    )
  }

  const deleteRule = (ruleId: string) => {
    setAutomationRules(prev => prev.filter(rule => rule.id !== ruleId))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'paused': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'draft': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'savings': return PiggyBank
      case 'spending': return BarChart3
      case 'budget': return BookOpen
      case 'goals': return Target
      case 'investments': return TrendingUp
      case 'debt': return TrendingDown
      case 'notifications': return Bell
      case 'transfers': return Repeat
      default: return Zap
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
            <Image
              src="/moneypal/robotavatar.PNG"
              alt="MoneyPal AI"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-robot-orange" />
            <div>
              <h3 className="text-xl font-semibold text-white">Advanced Automation Rules</h3>
              <p className="text-gray-400">AI-powered automation that works while you sleep</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="px-4 py-2 bg-robot-blue/20 text-robot-blue rounded-lg hover:bg-robot-blue/30 transition-colors text-sm"
          >
            {showTemplates ? 'Hide Templates' : 'Show Templates'}
          </button>
          
          <button
            onClick={() => setShowCreateRule(true)}
            className="px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
          >
            <Plus className="w-4 h-4 mr-2 inline" />
            Create Rule
          </button>
        </div>
      </div>

      {/* Automation Templates */}
      <AnimatePresence>
        {showTemplates && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">Popular Automation Templates</h4>
              <span className="text-sm text-gray-400">AI-recommended based on your financial profile</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automationTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-6 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer group"
                  onClick={() => onOpenChat()}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-robot-green/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-robot-green" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(template.difficulty === 'advanced' ? 'high' : template.difficulty === 'intermediate' ? 'medium' : 'low')}`}>
                        {template.difficulty}
                      </span>
                      <span className="text-xs text-robot-green font-medium">
                        {template.estimatedSavings}% savings
                      </span>
                    </div>
                  </div>
                  
                  <h5 className="font-semibold text-white mb-2">{template.name}</h5>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{template.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {template.setupTime} min
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {template.popularity}% popular
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs">
                      <Brain className="w-3 h-3 text-robot-green" />
                      <span className="text-robot-green font-medium">{template.aiScore}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                    Use Template
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {(['all', 'active', 'paused', 'draft'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {filterType === 'all' ? 'All Rules' : 
               filterType === 'active' ? `Active (${automationRules.filter(r => r.status === 'active').length})` :
               filterType === 'paused' ? `Paused (${automationRules.filter(r => r.status === 'paused').length})` :
               `Draft (${automationRules.filter(r => r.status === 'draft').length})`}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Sparkles className="w-4 h-4 text-robot-green" />
          <span>{automationRules.filter(r => r.isSmart).length} AI-Generated Rules</span>
        </div>
      </div>

      {/* Automation Rules */}
      {filteredRules.length > 0 ? (
        <div className="space-y-4">
          {filteredRules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`p-6 rounded-xl border transition-all duration-200 hover:scale-105 ${
                rule.status === 'active' 
                  ? 'bg-green-500/10 border-green-500/30 hover:border-green-500/50' 
                  : rule.status === 'paused'
                  ? 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50'
                  : 'bg-gray-500/10 border-gray-500/30 hover:border-gray-500/50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    rule.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : rule.status === 'paused'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {(() => {
                      const IconComponent = getTypeIcon(rule.type)
                      return <IconComponent className="w-6 h-6" />
                    })()}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-white">{rule.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rule.status)}`}>
                        {rule.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rule.priority)}`}>
                        {rule.priority}
                      </span>
                      {rule.isSmart && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-robot-green/20 text-robot-green">
                          AI Smart
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{rule.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        {rule.executionCount} executions
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {rule.successRate}% success
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {rule.trigger === 'scheduled' ? 'Scheduled' : rule.trigger === 'conditional' ? 'Conditional' : 'Manual'}
                      </span>
                    </div>
                    
                    {rule.nextExecution && (
                      <div className="text-xs text-robot-blue">
                        Next execution: {rule.nextExecution.toLocaleDateString()} at {rule.nextExecution.toLocaleTimeString()}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleRuleStatus(rule.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      rule.status === 'active' 
                        ? 'text-orange-400 hover:bg-orange-500/20' 
                        : 'text-green-400 hover:bg-green-500/20'
                    }`}
                    title={rule.status === 'active' ? 'Pause Rule' : 'Activate Rule'}
                  >
                    {rule.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => setSelectedRule(rule)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => deleteRule(rule.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"
                    title="Delete Rule"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-robot-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-12 h-12 text-robot-orange" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">No Automation Rules Yet</h4>
          <p className="text-gray-400 mb-4">Start with our AI-recommended templates or create your own custom automation rules.</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setShowTemplates(true)}
              className="px-6 py-3 bg-robot-blue/20 text-robot-blue rounded-lg font-medium hover:bg-robot-blue/30 transition-colors"
            >
              Browse Templates
            </button>
            <button
              onClick={() => setShowCreateRule(true)}
              className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Create Custom Rule
            </button>
          </div>
        </div>
      )}

      {/* Rule Details Modal */}
      <AnimatePresence>
        {selectedRule && (
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
              className="bg-gray-900 rounded-2xl border border-gray-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{selectedRule.name}</h3>
                  <button
                    onClick={() => setSelectedRule(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedRule.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-robot-green font-medium mb-3">Conditions</h4>
                    <ul className="space-y-2">
                      {selectedRule.conditions.map((condition, index) => (
                        <li key={condition.id} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-2 h-2 bg-robot-green rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            {condition.field} {condition.operator} {condition.value}
                            {condition.secondaryValue && ` and ${condition.secondaryValue}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-robot-blue font-medium mb-3">Actions</h4>
                    <ul className="space-y-2">
                      {selectedRule.actions.map((action, index) => (
                        <li key={action.id} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-2 h-2 bg-robot-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>{action.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Created: {selectedRule.createdAt.toLocaleDateString()}</span>
                    <span>Last updated: {selectedRule.updatedAt.toLocaleDateString()}</span>
                    {selectedRule.lastExecuted && (
                      <span>Last executed: {selectedRule.lastExecuted.toLocaleDateString()}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedRule(null)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                    
                    <button
                      onClick={onOpenChat}
                      className="px-6 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      Customize Rule
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
