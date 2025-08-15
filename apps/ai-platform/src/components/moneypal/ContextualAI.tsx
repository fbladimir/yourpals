import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Lightbulb, 
  TrendingUp, 
  AlertCircle, 
  Target, 
  Settings, 
  CreditCard, 
  PiggyBank,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'

interface ContextualAIProps {
  activeTab: string
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  onOpenChat: () => void
}

interface AISuggestion {
  id: string
  title: string
  message: string
  action: string
  priority: 'low' | 'medium' | 'high'
  category: string
  icon: any
}

export default function ContextualAI({ 
  activeTab, 
  accounts, 
  transactions, 
  summary, 
  insights, 
  goals, 
  onOpenChat 
}: ContextualAIProps) {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(true)

  // Generate contextual suggestions based on active tab
  useEffect(() => {
    const newSuggestions: AISuggestion[] = []
    
    switch (activeTab) {
      case 'overview':
        // Overview tab suggestions
        if (accounts.length === 0) {
          newSuggestions.push({
            id: 'link-accounts',
            title: 'Link Your Accounts',
            message: 'Connect your bank accounts to get started with MoneyPal',
            action: 'Link Accounts',
            priority: 'high',
            category: 'setup',
            icon: CreditCard
          })
        }
        
        if (insights.length === 0) {
          newSuggestions.push({
            id: 'get-insights',
            title: 'Get AI Insights',
            message: 'Link accounts to receive personalized financial insights',
            action: 'Learn More',
            priority: 'medium',
            category: 'ai',
            icon: Lightbulb
          })
        }
        
        if (summary?.monthlySavings && summary.monthlySavings < 0) {
          newSuggestions.push({
            id: 'spending-alert',
            title: 'Spending Alert',
            message: 'You\'re spending more than you\'re earning this month',
            action: 'Review Budget',
            priority: 'high',
            category: 'alert',
            icon: AlertCircle
          })
        }
        break
        
      case 'accounts':
        // Accounts tab suggestions
        if (accounts.length === 0) {
          newSuggestions.push({
            id: 'no-accounts',
            title: 'No Accounts Linked',
            message: 'Start by linking your first financial account',
            action: 'Link Account',
            priority: 'high',
            category: 'setup',
            icon: CreditCard
          })
        } else {
          // Check for account-specific insights
          const highBalanceAccounts = accounts.filter(acc => (acc.balance || 0) > 10000)
          if (highBalanceAccounts.length > 0) {
            newSuggestions.push({
              id: 'high-balance',
              title: 'High Balance Detected',
              message: `You have ${highBalanceAccounts.length} account(s) with over $10k - consider investment opportunities`,
              action: 'Get Advice',
              priority: 'medium',
              category: 'opportunity',
              icon: TrendingUp
            })
          }
          
          const lowBalanceAccounts = accounts.filter(acc => (acc.balance || 0) < 100)
          if (lowBalanceAccounts.length > 0) {
            newSuggestions.push({
              id: 'low-balance',
              title: 'Low Balance Alert',
              message: `${lowBalanceAccounts.length} account(s) have low balances - consider transfers`,
              action: 'Review',
              priority: 'medium',
              category: 'alert',
              icon: AlertCircle
            })
          }
        }
        break
        
      case 'goals':
        // Goals tab suggestions
        if (goals.length === 0) {
          newSuggestions.push({
            id: 'set-goals',
            title: 'Set Financial Goals',
            message: 'Create your first financial goal to start building wealth',
            action: 'Create Goal',
            priority: 'high',
            category: 'setup',
            icon: Target
          })
        } else {
          const activeGoals = goals.filter(goal => goal.status === 'active')
          if (activeGoals.length > 0) {
            newSuggestions.push({
              id: 'goal-progress',
              title: 'Track Your Progress',
              message: `You have ${activeGoals.length} active goal(s) - let's check your progress`,
              action: 'View Progress',
              priority: 'medium',
              category: 'motivation',
              icon: TrendingUp
            })
          }
        }
        break
        
      case 'settings':
        // Settings tab suggestions
        newSuggestions.push({
          id: 'customize',
          title: 'Customize MoneyPal',
          message: 'Set your preferences and automation levels',
          action: 'Configure',
          priority: 'low',
          category: 'setup',
          icon: Settings
        })
        break
    }
    
    setSuggestions(newSuggestions)
  }, [activeTab, accounts, transactions, summary, insights, goals])

  if (suggestions.length === 0) return null

  return (
    <AnimatePresence>
      {showSuggestions && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="MoneyPal AI"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-robot-orange" />
                  AI Suggestions for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h3>
                <p className="text-sm text-gray-400">Personalized recommendations based on your current view</p>
              </div>
            </div>
            
            <button
              onClick={() => setShowSuggestions(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Suggestions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`p-4 rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
                  suggestion.priority === 'high' 
                    ? 'bg-red-500/10 border-red-500/30 hover:border-red-500/50' 
                    : suggestion.priority === 'medium'
                    ? 'bg-orange-500/10 border-orange-500/30 hover:border-orange-500/50'
                    : 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
                }`}
                onClick={() => onOpenChat()}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    suggestion.priority === 'high' 
                      ? 'bg-red-500/20 text-red-400' 
                      : suggestion.priority === 'medium'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    <suggestion.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white text-sm">{suggestion.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        suggestion.priority === 'high' 
                          ? 'bg-red-500/20 text-red-400' 
                          : suggestion.priority === 'medium'
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {suggestion.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {suggestion.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-sm font-medium text-robot-green hover:text-robot-blue transition-colors">
                        {suggestion.action}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <span className="text-xs text-gray-500 capitalize">
                        {suggestion.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Chat CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-6 p-4 bg-gradient-to-r from-robot-green/10 to-robot-blue/10 border border-robot-green/20 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-robot-green" />
                </div>
                <div>
                  <p className="text-white font-medium">Need more specific help?</p>
                  <p className="text-gray-400 text-sm">Chat with MoneyPal for personalized advice</p>
                </div>
              </div>
              
              <button
                onClick={onOpenChat}
                className="px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Chat Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
