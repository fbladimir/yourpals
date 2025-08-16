import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Lightbulb, 
  BookOpen,
  Award,
  Calendar,
  BarChart3,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from 'lucide-react'
import Image from 'next/image'

interface PersonalizedCoachingProps {
  accounts: any[]
  transactions: any[]
  summary: any
  insights: any[]
  goals: any[]
  onOpenChat: () => void
}

interface CoachingSession {
  id: string
  type: 'goal-setting' | 'budget-review' | 'savings-strategy' | 'debt-management' | 'investment-advice' | 'spending-analysis'
  title: string
  description: string
  duration: number // minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  status: 'not-started' | 'in-progress' | 'completed'
  progress: number // 0-100
  lastAccessed?: Date
  completedAt?: Date
  aiInsights: string[]
  nextSteps: string[]
  estimatedImpact: 'low' | 'medium' | 'high'
  category: 'spending' | 'savings' | 'budget' | 'goals' | 'investments' | 'debt'
}

interface UserProfile {
  financialLiteracy: 'beginner' | 'intermediate' | 'advanced'
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'
  preferredLearningStyle: 'visual' | 'auditory' | 'hands-on' | 'reading'
  communicationStyle: 'direct' | 'encouraging' | 'detailed' | 'casual'
  financialGoals: string[]
  challenges: string[]
  strengths: string[]
  timeAvailability: 'low' | 'medium' | 'high'
  lastAssessment: Date
}

interface CoachingRecommendation {
  id: string
  type: 'session' | 'tip' | 'challenge' | 'milestone'
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  category: string
  estimatedTime: number
  aiReasoning: string
  userRelevance: number // 0-100
  lastSuggested: Date
  userFeedback?: 'helpful' | 'not-helpful' | 'skip'
}

export default function PersonalizedCoaching({ 
  accounts, 
  transactions, 
  summary, 
  insights, 
  goals, 
  onOpenChat 
}: PersonalizedCoachingProps) {
  const [coachingSessions, setCoachingSessions] = useState<CoachingSession[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [recommendations, setRecommendations] = useState<CoachingRecommendation[]>([])
  const [activeSession, setActiveSession] = useState<CoachingSession | null>(null)
  const [showProfile, setShowProfile] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Generate user profile based on financial data
  const generateUserProfile = useMemo((): UserProfile => {
    if (!transactions.length || !summary) {
      return {
        financialLiteracy: 'beginner',
        riskTolerance: 'moderate',
        preferredLearningStyle: 'hands-on',
        communicationStyle: 'encouraging',
        financialGoals: ['Build emergency fund', 'Reduce debt', 'Start saving'],
        challenges: ['Overspending', 'Lack of budget', 'No savings plan'],
        strengths: ['Regular income', 'Basic financial awareness'],
        timeAvailability: 'medium',
        lastAssessment: new Date()
      }
    }

    // Ensure summary has default values
    const safeSummary = {
      monthlySavings: summary?.monthlySavings || 0,
      monthlyIncome: summary?.monthlyIncome || 0,
      ...summary
    }

    // Analyze spending patterns
    const currentMonthTransactions = transactions.filter(tx => {
      const txDate = new Date(tx.date)
      const now = new Date()
      return txDate.getMonth() === now.getMonth() && txDate.getFullYear() === now.getFullYear()
    })

    const spending = currentMonthTransactions
      .filter(tx => Number(tx.amount) < 0)
      .reduce((sum, tx) => sum + Math.abs(Number(tx.amount)), 0)

    const income = currentMonthTransactions
      .filter(tx => Number(tx.amount) > 0)
      .reduce((sum, tx) => sum + Number(tx.amount), 0)

    // Determine financial literacy level
    let financialLiteracy: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
    if (safeSummary.monthlySavings > 0 && goals.length > 0) {
      financialLiteracy = 'intermediate'
    }
    if (safeSummary.monthlySavings > safeSummary.monthlyIncome * 0.2 && goals.length > 2) {
      financialLiteracy = 'advanced'
    }

    // Determine risk tolerance
    let riskTolerance: 'conservative' | 'moderate' | 'aggressive' = 'moderate'
    if (safeSummary.monthlySavings < 0) {
      riskTolerance = 'conservative'
    }
    if (safeSummary.monthlySavings > safeSummary.monthlyIncome * 0.3) {
      riskTolerance = 'aggressive'
    }

    // Identify challenges and strengths
    const challenges: string[] = []
    const strengths: string[] = []

    if (safeSummary.monthlySavings < 0) {
      challenges.push('Spending exceeds income')
    }
    if (spending > income * 0.8) {
      challenges.push('High spending ratio')
    }
    if (goals.length === 0) {
      challenges.push('No clear financial goals')
    }

    if (safeSummary.monthlySavings > 0) {
      strengths.push('Positive savings rate')
    }
    if (goals.length > 0) {
      strengths.push('Goal-oriented approach')
    }
    if (accounts.length > 1) {
      strengths.push('Multiple account management')
    }

    return {
      financialLiteracy,
      riskTolerance,
      preferredLearningStyle: 'hands-on',
      communicationStyle: 'encouraging',
      financialGoals: goals.map(g => g.name) || ['Build emergency fund', 'Reduce debt'],
      challenges: challenges.length > 0 ? challenges : ['Establish budget', 'Start saving'],
      strengths: strengths.length > 0 ? strengths : ['Regular income', 'Financial awareness'],
      timeAvailability: 'medium',
      lastAssessment: new Date()
    }
  }, [transactions, summary, goals, accounts])

  // Generate coaching sessions based on user profile
  const generateCoachingSessions = useMemo((): CoachingSession[] => {
    if (!userProfile) return []

    const sessions: CoachingSession[] = []

    // Goal Setting Session
    if (goals.length === 0 || goals.length < 3) {
      sessions.push({
        id: 'goal-setting-101',
        type: 'goal-setting',
        title: 'Financial Goal Setting Workshop',
        description: 'Learn how to set SMART financial goals and create a roadmap to achieve them.',
        duration: 15,
        difficulty: 'beginner',
        status: 'not-started',
        progress: 0,
        aiInsights: [
          'Setting clear goals increases success rate by 3x',
          'SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound',
          'Regular goal review improves motivation and progress'
        ],
        nextSteps: [
          'Identify your top 3 financial priorities',
          'Set specific dollar amounts and timelines',
          'Create milestone checkpoints'
        ],
        estimatedImpact: 'high',
        category: 'goals'
      })
    }

    // Budget Review Session
    if (summary?.monthlySavings && summary.monthlySavings < 0) {
      sessions.push({
        id: 'budget-review-101',
        type: 'budget-review',
        title: 'Budget Optimization Masterclass',
        description: 'Analyze your spending patterns and create a sustainable budget that works for you.',
        duration: 20,
        difficulty: 'intermediate',
        status: 'not-started',
        progress: 0,
        aiInsights: [
          '50/30/20 rule: 50% needs, 30% wants, 20% savings',
          'Track spending for 30 days to identify patterns',
          'Automate savings to make it effortless'
        ],
        nextSteps: [
          'Review last 3 months of spending',
          'Identify 3 areas to reduce expenses',
          'Set up automatic savings transfers'
        ],
        estimatedImpact: 'high',
        category: 'budget'
      })
    }

    // Savings Strategy Session
    if (summary?.monthlySavings && summary.monthlySavings > 0) {
      sessions.push({
        id: 'savings-strategy-101',
        type: 'savings-strategy',
        title: 'Advanced Savings & Investment Strategy',
        description: 'Take your savings to the next level with smart strategies and investment basics.',
        duration: 25,
        difficulty: 'advanced',
        status: 'not-started',
        progress: 0,
        aiInsights: [
          'Emergency fund should cover 3-6 months of expenses',
          'Diversification reduces investment risk',
          'Compound interest is your greatest wealth-building tool'
        ],
        nextSteps: [
          'Assess emergency fund adequacy',
          'Research investment options',
          'Create long-term wealth plan'
        ],
        estimatedImpact: 'high',
        category: 'savings'
      })
    }

    // Debt Management Session
    const hasDebt = accounts.some(acc => acc.balance && acc.balance < 0)
    if (hasDebt) {
      sessions.push({
        id: 'debt-management-101',
        type: 'debt-management',
        title: 'Debt Freedom Roadmap',
        description: 'Create a strategic plan to eliminate debt and build financial freedom.',
        duration: 20,
        difficulty: 'intermediate',
        status: 'not-started',
        progress: 0,
        aiInsights: [
          'Avalanche method: Pay highest interest first',
          'Snowball method: Pay smallest balances first for motivation',
          'Debt consolidation can reduce interest rates'
        ],
        nextSteps: [
          'List all debts with interest rates',
          'Choose payoff strategy (avalanche vs snowball)',
          'Set monthly debt payoff targets'
        ],
        estimatedImpact: 'high',
        category: 'debt'
      })
    }

    return sessions
  }, [userProfile, goals, summary, accounts])

  // Generate personalized recommendations
  const generateRecommendations = useMemo((): CoachingRecommendation[] => {
    if (!userProfile) return []

    const recs: CoachingRecommendation[] = []

    // Session recommendations
    coachingSessions.forEach(session => {
      if (session.status === 'not-started') {
        recs.push({
          id: `rec-${session.id}`,
          type: 'session',
          title: `Start: ${session.title}`,
          description: session.description,
          priority: session.estimatedImpact === 'high' ? 'high' : 'medium',
          category: session.category,
          estimatedTime: session.duration,
          aiReasoning: `Based on your ${userProfile.financialLiteracy} level and current financial situation, this session will provide the most value.`,
          userRelevance: 85,
          lastSuggested: new Date()
        })
      }
    })

    // Daily tips based on user profile
    if (userProfile.financialLiteracy === 'beginner') {
      recs.push({
        id: 'daily-tip-1',
        type: 'tip',
        title: 'Track Your Spending Today',
        description: 'Start building awareness by recording every purchase today. This simple habit can save you 10-20% on expenses.',
        priority: 'medium',
        category: 'spending',
        estimatedTime: 5,
        aiReasoning: 'As a beginner, building awareness is the foundation of financial success.',
        userRelevance: 90,
        lastSuggested: new Date()
      })
    }

    // Weekly challenges
    if (userProfile.timeAvailability === 'medium' || userProfile.timeAvailability === 'high') {
      recs.push({
        id: 'weekly-challenge-1',
        type: 'challenge',
        title: 'No-Spend Weekend Challenge',
        description: 'Challenge yourself to spend $0 on non-essential items this weekend. Save the money for your goals instead.',
        priority: 'medium',
        category: 'spending',
        estimatedTime: 0,
        aiReasoning: 'This challenge will help you identify wants vs needs and boost your savings.',
        userRelevance: 75,
        lastSuggested: new Date()
      })
    }

    // Milestone celebrations
    if (summary?.monthlySavings && summary.monthlySavings > 0) {
      recs.push({
        id: 'milestone-1',
        type: 'milestone',
        title: 'Savings Success! 🎉',
        description: 'You\'re successfully saving money! Consider increasing your savings rate by 1% this month.',
        priority: 'low',
        category: 'savings',
        estimatedTime: 2,
        aiReasoning: 'Celebrating wins builds positive financial habits and motivation.',
        userRelevance: 95,
        lastSuggested: new Date()
      })
    }

    return recs.sort((a, b) => b.userRelevance - a.userRelevance)
  }, [userProfile, coachingSessions, summary])

  // Update state when data changes
  useEffect(() => {
    setUserProfile(generateUserProfile)
  }, [generateUserProfile])

  useEffect(() => {
    setCoachingSessions(generateCoachingSessions)
  }, [generateCoachingSessions])

  useEffect(() => {
    setRecommendations(generateRecommendations)
  }, [generateRecommendations])

  const startSession = (session: CoachingSession) => {
    setActiveSession(session)
    setCoachingSessions(prev => 
      prev.map(s => s.id === session.id ? { ...s, status: 'in-progress', lastAccessed: new Date() } : s)
    )
  }

  const completeSession = (sessionId: string) => {
    setCoachingSessions(prev => 
      prev.map(s => s.id === sessionId ? { ...s, status: 'completed', progress: 100, completedAt: new Date() } : s)
    )
    setActiveSession(null)
  }

  const updateProgress = (sessionId: string, progress: number) => {
    setCoachingSessions(prev => 
      prev.map(s => s.id === sessionId ? { ...s, progress, lastAccessed: new Date() } : s)
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'intermediate': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'advanced': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'medium': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'spending': return BarChart3
      case 'savings': return TrendingUp
      case 'budget': return BookOpen
      case 'goals': return Target
      case 'investments': return TrendingUp
      case 'debt': return TrendingDown
      default: return Lightbulb
    }
  }

  if (!userProfile) return null

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
            <Brain className="w-6 h-6 text-robot-purple" />
            <div>
              <h3 className="text-xl font-semibold text-white">Personalized Financial Coaching</h3>
              <p className="text-gray-400">AI-powered coaching tailored to your financial journey</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="px-4 py-2 bg-robot-purple/20 text-robot-purple rounded-lg hover:bg-robot-purple/30 transition-colors text-sm"
          >
            {showProfile ? 'Hide Profile' : 'View Profile'}
          </button>
          
          <button
            onClick={() => setShowRecommendations(!showRecommendations)}
            className="px-4 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors text-sm"
          >
            {showRecommendations ? 'Hide Tips' : 'Show Tips'}
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50"
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Financial Profile
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-green font-medium mb-2">Financial Literacy</h5>
                <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(userProfile.financialLiteracy)}`}>
                  {userProfile.financialLiteracy.charAt(0).toUpperCase() + userProfile.financialLiteracy.slice(1)}
                </span>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-blue font-medium mb-2">Risk Tolerance</h5>
                <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(userProfile.riskTolerance)}`}>
                  {userProfile.riskTolerance.charAt(0).toUpperCase() + userProfile.riskTolerance.slice(1)}
                </span>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-orange font-medium mb-2">Learning Style</h5>
                <span className="text-gray-300 text-sm capitalize">
                  {userProfile.preferredLearningStyle.replace('-', ' ')}
                </span>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-purple font-medium mb-2">Communication</h5>
                <span className="text-gray-300 text-sm capitalize">
                  {userProfile.communicationStyle}
                </span>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-green font-medium mb-2">Time Available</h5>
                <span className="text-gray-300 text-sm capitalize">
                  {userProfile.timeAvailability}
                </span>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h5 className="text-robot-blue font-medium mb-2">Last Assessment</h5>
                <span className="text-gray-300 text-sm">
                  {userProfile.lastAssessment.toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h5 className="text-robot-green font-medium mb-2">Your Goals</h5>
                <ul className="space-y-1">
                  {userProfile.financialGoals.map((goal, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                      <Target className="w-3 h-3 text-robot-green" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-robot-orange font-medium mb-2">Challenges</h5>
                <ul className="space-y-1">
                  {userProfile.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-robot-orange" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-robot-blue font-medium mb-2">Strengths</h5>
                <ul className="space-y-1">
                  {userProfile.strengths.map((strength, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                      <Star className="w-3 h-3 text-robot-blue" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coaching Sessions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">Your Coaching Sessions</h4>
          <span className="text-sm text-gray-400">
            {coachingSessions.filter(s => s.status === 'completed').length} of {coachingSessions.length} completed
          </span>
        </div>
        
        {coachingSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coachingSessions.map((session) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-xl border transition-all duration-200 hover:scale-105 cursor-pointer ${
                  session.status === 'completed' 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : session.status === 'in-progress'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-gray-500/10 border-gray-500/30 hover:border-robot-green/50'
                }`}
                onClick={() => startSession(session)}
              >
                <div className="flex items-start justify-between mb-3">
                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                     session.status === 'completed' 
                       ? 'bg-green-500/20 text-green-400' 
                       : session.status === 'in-progress'
                       ? 'bg-blue-500/20 text-blue-400'
                       : 'bg-gray-500/20 text-gray-400'
                   }`}>
                     {(() => {
                       const IconComponent = getCategoryIcon(session.category)
                       return <IconComponent className="w-5 h-5" />
                     })()}
                   </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(session.difficulty)}`}>
                      {session.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(session.estimatedImpact)}`}>
                      {session.estimatedImpact} impact
                    </span>
                  </div>
                </div>
                
                <h5 className="font-semibold text-white mb-2">{session.title}</h5>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{session.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {session.duration} min
                  </span>
                  
                  {session.status === 'in-progress' && (
                    <span className="text-xs text-robot-blue">
                      {session.progress}% complete
                    </span>
                  )}
                </div>
                
                {session.status === 'in-progress' && (
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-robot-green to-robot-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${session.progress}%` }}
                    ></div>
                  </div>
                )}
                
                {session.status === 'completed' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Completed {session.completedAt?.toLocaleDateString()}
                  </div>
                )}
                
                {session.status === 'not-started' && (
                  <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                    Start Session
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-robot-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-12 h-12 text-robot-purple" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">No Coaching Sessions Available</h4>
            <p className="text-gray-400 mb-4">Complete your financial profile to get personalized coaching sessions.</p>
            <button
              onClick={onOpenChat}
              className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Chat with MoneyPal
            </button>
          </div>
        )}
      </div>

      {/* Personalized Recommendations */}
      <AnimatePresence>
        {showRecommendations && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">AI Recommendations</h4>
              <div className="flex gap-2">
                {['all', 'spending', 'savings', 'budget', 'goals', 'investments', 'debt'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-robot-green to-robot-blue text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {recommendations.filter(r => selectedCategory === 'all' || r.category === selectedCategory).length > 0 ? (
              <div className="space-y-3">
                {recommendations
                  .filter(r => selectedCategory === 'all' || r.category === selectedCategory)
                  .slice(0, 5)
                  .map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        rec.type === 'session' ? 'bg-robot-green/20 text-robot-green' :
                        rec.type === 'tip' ? 'bg-robot-blue/20 text-robot-blue' :
                        rec.type === 'challenge' ? 'bg-robot-orange/20 text-robot-orange' :
                        'bg-robot-purple/20 text-robot-purple'
                      }`}>
                        {rec.type === 'session' ? <BookOpen className="w-4 h-4" /> :
                         rec.type === 'tip' ? <Lightbulb className="w-4 h-4" /> :
                         rec.type === 'challenge' ? <Zap className="w-4 h-4" /> :
                         <Award className="w-4 h-4" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-semibold text-white text-sm">{rec.title}</h5>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            rec.priority === 'medium' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-2">{rec.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 capitalize">{rec.category}</span>
                            <span className="text-xs text-gray-500">{rec.estimatedTime} min</span>
                            <span className="text-xs text-robot-green">{rec.userRelevance}% relevant</span>
                          </div>
                          
                          <button
                            onClick={onOpenChat}
                            className="text-sm font-medium text-robot-green hover:text-robot-blue transition-colors"
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No recommendations for this category. Try selecting "All" or another category.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Session Modal */}
      <AnimatePresence>
        {activeSession && (
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
              className="bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{activeSession.title}</h3>
                  <button
                    onClick={() => setActiveSession(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{activeSession.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-robot-green font-medium mb-3">AI Insights</h4>
                    <ul className="space-y-2">
                      {activeSession.aiInsights.map((insight, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-robot-green mt-0.5 flex-shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-robot-blue font-medium mb-3">Next Steps</h4>
                    <ul className="space-y-2">
                      {activeSession.nextSteps.map((step, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                          <Target className="w-4 h-4 text-robot-blue mt-0.5 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">
                      Duration: {activeSession.duration} minutes
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(activeSession.difficulty)}`}>
                      {activeSession.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveSession(null)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Continue Later
                    </button>
                    
                    <button
                      onClick={() => completeSession(activeSession.id)}
                      className="px-6 py-2 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      Complete Session
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
