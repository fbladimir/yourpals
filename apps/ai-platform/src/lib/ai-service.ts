// AI Service for MoneyPal - Handles conversations, analysis, and recommendations
import { AIInsight, ChatMessage } from './financial-types'

export interface AIResponse {
  message: string
  insights: SimpleAIInsight[]
  actions: string[]
  confidence: number
  nextQuestion?: string
}

export interface SimpleAIInsight {
  type: 'spending_pattern' | 'savings_opportunity' | 'risk_alert' | 'goal_progress' | 'budget_alert' | 'recommendation'
  title: string
  message: string
}

export interface AIContext {
  userFinancialData: {
    accounts: {
      id: string
      name: string
      type: string
      balance: number
      currency: string
      accountNumber: string
    }[]
    transactions: {
      id: string
      amount: number
      date: string
      description: string
      category: string
      accountId: string
    }[]
    totalBalance: number
    monthlyIncome: number
    monthlyExpenses: number
    monthlySavings: number
    creditScore: number
    emergencyFund: number
    goals: any[]
    debtAccounts: any[]
  }
  conversationHistory: ChatMessage[]
  userPreferences: {
    riskTolerance: 'LOW' | 'MODERATE' | 'HIGH'
    automationLevel: 'BASIC' | 'ADVANCED' | 'EXPERT'
    financialGoals: string[]
  }
}

export class AIService {
  private apiKey: string
  private model: string
  private useOpenAI: boolean

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || ''
    this.model = 'gpt-4' // or 'gpt-3.5-turbo' for cost optimization
    this.useOpenAI = !!this.apiKey
  }

  // Main conversation handler - HYBRID APPROACH
  async chat(userMessage: string, context: AIContext): Promise<AIResponse> {
    try {
      console.log(`[Hybrid AI Service] Processing with ${this.useOpenAI ? 'OpenAI + Local' : 'Local Only'}`)
      
      if (this.useOpenAI) {
        // HYBRID: Use OpenAI for reasoning + Local for data analysis
        return this.hybridAIResponse(userMessage, context)
      } else {
        // FALLBACK: Use local rule-based system
        console.log(`[Hybrid AI Service] OpenAI not configured, using local AI`)
        return this.processFinancialQuery(userMessage, context)
      }
    } catch (error) {
      console.error('AI Service Error:', error)
      // Fallback to local AI if OpenAI fails
      console.log(`[Hybrid AI Service] Falling back to local AI due to error`)
      return this.processFinancialQuery(userMessage, context)
    }
  }

  // HYBRID AI: Combines OpenAI reasoning with local financial expertise
  private async hybridAIResponse(userMessage: string, context: AIContext): Promise<AIResponse> {
    try {
      // Step 1: Local AI analyzes the financial data
      const localAnalysis = this.analyzeFinancialData(context.userFinancialData)
      
      // Step 2: Prepare context for OpenAI
      const openAIContext = this.prepareOpenAIContext(userMessage, context, localAnalysis)
      
      // Step 3: Get OpenAI reasoning
      const openAIResponse = await this.callOpenAI(openAIContext)
      
      // Step 4: Combine local analysis with OpenAI insights
      return this.combineResponses(localAnalysis, openAIResponse, context)
      
    } catch (error) {
      console.error('Hybrid AI Error:', error)
      // Fallback to local AI
      return this.processFinancialQuery(userMessage, context)
    }
  }

  // Local AI: Analyze financial data and provide insights
  private analyzeFinancialData(userFinancialData: AIContext['userFinancialData']) {
    const analysis = {
      creditScore: userFinancialData.creditScore,
      debtToIncomeRatio: userFinancialData.debtAccounts.length > 0 ? 
        (userFinancialData.debtAccounts.reduce((sum, acc) => sum + (acc.balance || 0), 0) / userFinancialData.monthlyIncome) * 100 : 0,
      savingsRate: (userFinancialData.monthlySavings / userFinancialData.monthlyIncome) * 100,
      emergencyFundMonths: userFinancialData.monthlyExpenses > 0 ? 
        Math.ceil(userFinancialData.emergencyFund / userFinancialData.monthlyExpenses) : 0,
      goalProgress: userFinancialData.goals.map(goal => ({
        name: goal.name,
        progress: goal.current ? ((goal.current / goal.target) * 100) : 0,
        remaining: goal.target - (goal.current || 0)
      })),
      financialHealth: this.calculateFinancialHealth(userFinancialData),
      insights: this.generateLocalInsights(userFinancialData)
    }
    
    console.log(`[Hybrid AI Service] Local analysis completed:`, analysis)
    return analysis
  }

  // Calculate overall financial health score
  private calculateFinancialHealth(userFinancialData: AIContext['userFinancialData']): number {
    let score = 0
    
    // Emergency fund (25 points)
    const emergencyFundMonths = userFinancialData.monthlyExpenses > 0 ? 
      Math.ceil(userFinancialData.emergencyFund / userFinancialData.monthlyExpenses) : 0
    if (emergencyFundMonths >= 6) score += 25
    else if (emergencyFundMonths >= 3) score += 15
    else if (emergencyFundMonths >= 1) score += 5
    
    // Savings rate (25 points)
    const savingsRate = (userFinancialData.monthlySavings / userFinancialData.monthlyIncome) * 100
    if (savingsRate >= 20) score += 25
    else if (savingsRate >= 10) score += 15
    else if (savingsRate >= 0) score += 10
    
    // Credit score (25 points)
    if (userFinancialData.creditScore >= 750) score += 25
    else if (userFinancialData.creditScore >= 700) score += 20
    else if (userFinancialData.creditScore >= 650) score += 15
    else score += 5
    
    // Goals (25 points)
    if (userFinancialData.goals.length >= 3) score += 25
    else if (userFinancialData.goals.length >= 1) score += 15
    
    return score
  }

  // Generate local insights based on data
  private generateLocalInsights(userFinancialData: AIContext['userFinancialData']) {
    const insights = []
    
    // Emergency fund insight
    if (userFinancialData.emergencyFund < userFinancialData.monthlyExpenses * 3) {
      insights.push({
        type: 'risk_alert' as const,
        title: 'Emergency Fund Alert',
        message: `Your emergency fund covers ${Math.ceil(userFinancialData.emergencyFund / userFinancialData.monthlyExpenses)} months. Aim for 6 months.`
      })
    }
    
    // Savings rate insight
    const savingsRate = (userFinancialData.monthlySavings / userFinancialData.monthlyIncome) * 100
    if (savingsRate < 20) {
      insights.push({
        type: 'savings_opportunity' as const,
        title: 'Savings Opportunity',
        message: `You're saving ${savingsRate.toFixed(1)}% of income. Aim for 20% for financial security.`
      })
    }
    
    // Debt insight
    if (userFinancialData.debtAccounts.length > 0) {
      const totalDebt = userFinancialData.debtAccounts.reduce((sum, acc) => sum + (acc.balance || 0), 0)
      const debtToIncomeRatio = (totalDebt / userFinancialData.monthlyIncome) * 100
      if (debtToIncomeRatio > 43) {
        insights.push({
          type: 'risk_alert' as const,
          title: 'High Debt Load',
          message: `Your debt is ${debtToIncomeRatio.toFixed(1)}% of income. Consider debt reduction strategies.`
        })
      }
    }
    
    return insights
  }

  // Prepare context for OpenAI
  private prepareOpenAIContext(userMessage: string, context: AIContext, localAnalysis: any) {
    const financialSummary = {
      creditScore: localAnalysis.creditScore,
      debtToIncomeRatio: localAnalysis.debtToIncomeRatio.toFixed(1),
      savingsRate: localAnalysis.savingsRate.toFixed(1),
      emergencyFundMonths: localAnalysis.emergencyFundMonths,
      financialHealthScore: localAnalysis.financialHealth,
      goals: localAnalysis.goalProgress,
      monthlyIncome: context.userFinancialData.monthlyIncome,
      monthlyExpenses: context.userFinancialData.monthlyExpenses,
      monthlySavings: context.userFinancialData.monthlySavings
    }
    
    return {
      userMessage,
      financialSummary,
      conversationHistory: context.conversationHistory.slice(-5), // Last 5 messages
      localInsights: localAnalysis.insights
    }
  }

  // Call OpenAI API
  private async callOpenAI(context: any): Promise<any> {
    const systemPrompt = `You are MoneyPal, a friendly and knowledgeable AI financial advisor. You have access to the user's financial data and should provide personalized, actionable advice.

IMPORTANT: Always use the user's actual financial data to provide specific, personalized insights. Don't make generic statements.

Financial Data Available:
- Credit Score: ${context.financialSummary.creditScore}
- Debt-to-Income Ratio: ${context.financialSummary.debtToIncomeRatio}%
- Savings Rate: ${context.financialSummary.savingsRate}%
- Emergency Fund: ${context.financialSummary.emergencyFundMonths} months covered
- Financial Health Score: ${context.financialSummary.financialHealth}/100
- Monthly Income: $${context.financialSummary.monthlyIncome.toLocaleString()}
- Monthly Expenses: $${context.financialSummary.monthlyExpenses.toLocaleString()}
- Monthly Savings: $${context.financialSummary.monthlySavings.toLocaleString()}

Goals: ${context.financialSummary.goals.map((g: any) => `${g.name}: ${g.progress.toFixed(1)}% complete`).join(', ')}

Local Insights: ${context.localInsights.map((i: any) => `${i.title}: ${i.message}`).join('; ')}

Respond in a friendly, encouraging tone. Use the user's actual data to provide specific advice. Ask follow-up questions to help them improve their financial situation.`

    const userPrompt = `User Question: "${context.userMessage}"

Please provide a helpful, personalized response based on their financial data. Include specific insights and actionable next steps.`

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          max_tokens: 800,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error(`OpenAI API Error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.choices[0].message.content
      
    } catch (error) {
      console.error('OpenAI API call failed:', error)
      throw error
    }
  }

  // Combine local analysis with OpenAI response
  private combineResponses(localAnalysis: any, openAIResponse: string, context: AIContext): AIResponse {
    // Use OpenAI's response as the main message
    const message = openAIResponse
    
    // Combine local insights with any new insights from OpenAI
    const insights = [...localAnalysis.insights]
    
    // Generate actions based on the response
    const actions = this.generateActionsFromResponse(openAIResponse, localAnalysis)
    
    // Generate follow-up question
    const nextQuestion = this.generateFollowUpQuestion(openAIResponse, localAnalysis)
    
    return {
      message,
      insights,
      actions,
      confidence: 0.9, // High confidence with hybrid approach
      nextQuestion
    }
  }

  // Generate actions from AI response
  private generateActionsFromResponse(response: string, localAnalysis: any): string[] {
    const actions = []
    
    // Analyze response for suggested actions
    if (response.toLowerCase().includes('emergency fund')) {
      actions.push('Build Emergency Fund')
    }
    if (response.toLowerCase().includes('debt')) {
      actions.push('Create Debt Payoff Plan')
    }
    if (response.toLowerCase().includes('savings') || response.toLowerCase().includes('invest')) {
      actions.push('Increase Savings Rate')
    }
    if (response.toLowerCase().includes('credit score')) {
      actions.push('Improve Credit Score')
    }
    if (response.toLowerCase().includes('goal')) {
      actions.push('Set Financial Goals')
    }
    
    // Add default actions if none found
    if (actions.length === 0) {
      actions.push('Review Financial Health', 'Set Savings Goals', 'Create Budget Plan')
    }
    
    return actions.slice(0, 4) // Limit to 4 actions
  }

  // Generate follow-up question
  private generateFollowUpQuestion(response: string, localAnalysis: any): string {
    const questions = [
      "Would you like me to help you create a specific action plan?",
      "Which area of your finances would you like to focus on improving?",
      "Do you have any questions about the recommendations I provided?",
      "Would you like me to analyze another aspect of your financial situation?"
    ]
    
    // Return a relevant question based on the response content
    return questions[Math.floor(Math.random() * questions.length)]
  }

  // Smart financial query processing
  private processFinancialQuery(userMessage: string, context: AIContext): AIResponse {
    const message = userMessage.toLowerCase()
    const { userFinancialData } = context

    // Debug: Log what data the AI service receives
    console.log(`[AI Service] Processing query: "${message}"`)
    console.log(`[AI Service] Available data:`, {
      totalBalance: userFinancialData.totalBalance,
      monthlyIncome: userFinancialData.monthlyIncome,
      monthlyExpenses: userFinancialData.monthlyExpenses,
      monthlySavings: userFinancialData.monthlySavings,
      creditScore: userFinancialData.creditScore,
      emergencyFund: userFinancialData.emergencyFund,
      goalsCount: userFinancialData.goals?.length || 0,
      debtAccountsCount: userFinancialData.debtAccounts?.length || 0,
      accountsCount: userFinancialData.accounts?.length || 0,
      transactionsCount: userFinancialData.transactions?.length || 0
    })

    // Balance inquiries
    if (message.includes('balance') || message.includes('how much') || message.includes('total')) {
      return this.handleBalanceInquiry(userFinancialData)
    }

    // Spending analysis
    if (message.includes('spend') || message.includes('expense') || message.includes('budget') || message.includes('cost')) {
      return this.handleSpendingAnalysis(userFinancialData, context)
    }

    // Savings recommendations
    if (message.includes('save') || message.includes('savings') || message.includes('invest') || message.includes('emergency fund')) {
      return this.handleSavingsRecommendation(userFinancialData, context)
    }

    // Goal tracking
    if (message.includes('goal') || message.includes('target') || message.includes('progress')) {
      return this.handleGoalTracking(userFinancialData, context)
    }

    // Credit score and debt
    if (message.includes('credit') || message.includes('debt') || message.includes('loan') || message.includes('credit score')) {
      return this.handleCreditAndDebt(userFinancialData, context)
    }

    // General financial advice
    if (message.includes('advice') || message.includes('help') || message.includes('recommend') || message.includes('suggestion')) {
      return this.handleGeneralAdvice(userFinancialData, context)
    }

    // Personal financial health
    if (message.includes('how am i doing') || message.includes('financial health') || message.includes('am i on track')) {
      return this.handleFinancialHealthCheck(userFinancialData, context)
    }

    // Default response
    return {
      message: "Hi! I'm your MoneyPal AI companion! 👋 I'd love to help you with your finances! You can ask me about:\n\n• Your balance and accounts\n• Spending patterns and budgeting\n• Savings goals and progress\n• Credit score and debt management\n• General financial advice\n• Your overall financial health\n\nWhat would you like to know about your finances?",
      insights: [],
      actions: ['Check Balance', 'Analyze Spending', 'Track Goals', 'Get Financial Advice'],
      confidence: 0.8,
      nextQuestion: "What would you like to know about your finances?"
    }
  }

  // Enhanced balance inquiry with insights
  private handleBalanceInquiry(userFinancialData: AIContext['userFinancialData']): AIResponse {
    const totalBalance = userFinancialData.totalBalance
    const accountCount = userFinancialData.accounts.length
    const monthlySavings = userFinancialData.monthlySavings

    let message = `Your total balance across ${accountCount} account${accountCount !== 1 ? 's' : ''} is **$${totalBalance.toLocaleString()}** 💰\n\n`

    if (accountCount > 0) {
      message += `**Account Breakdown:**\n`
      userFinancialData.accounts.forEach(account => {
        message += `• ${account.name}: $${account.balance.toLocaleString()}\n`
      })
    }

    if (monthlySavings > 0) {
      message += `\n🎉 **Great news!** You're saving $${monthlySavings.toLocaleString()} per month!`
    } else if (monthlySavings < 0) {
      message += `\n⚠️ **Attention:** You're spending $${Math.abs(monthlySavings).toLocaleString()} more than you earn each month.`
    }

    return {
      message,
      insights: [
        {
          type: 'recommendation',
          title: 'Account Overview',
          message: `You have ${accountCount} account${accountCount !== 1 ? 's' : ''} with a total balance of $${totalBalance.toLocaleString()}`
        }
      ],
      actions: ['View Detailed Accounts', 'Set Savings Goals', 'Analyze Spending'],
      confidence: 0.9,
      nextQuestion: "Would you like me to analyze your spending patterns or help you set savings goals?"
    }
  }

  // Enhanced spending analysis with patterns
  private handleSpendingAnalysis(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const monthlyExpenses = userFinancialData.monthlyExpenses
    const monthlyIncome = userFinancialData.monthlyIncome
    const transactions = userFinancialData.transactions

    let message = `**Spending Analysis** 📊\n\n`
    message += `• Monthly Income: $${monthlyIncome.toLocaleString()}\n`
    message += `• Monthly Expenses: $${monthlyExpenses.toLocaleString()}\n`
    message += `• Monthly Savings: $${(monthlyIncome - monthlyExpenses).toLocaleString()}\n\n`

    if (transactions.length > 0) {
      // Analyze recent spending patterns
      const recentTransactions = transactions.slice(-5)
      message += `**Recent Transactions:**\n`
      recentTransactions.forEach(tx => {
        const emoji = tx.amount < 0 ? '💸' : '💰'
        message += `${emoji} ${tx.description}: $${Math.abs(tx.amount).toLocaleString()}\n`
      })
    }

    // Provide insights based on spending patterns
    if (monthlyExpenses > monthlyIncome * 0.8) {
      message += `\n⚠️ **Budget Alert:** Your expenses are ${((monthlyExpenses / monthlyIncome) * 100).toFixed(1)}% of your income. Consider reviewing your spending.`
    } else if (monthlyExpenses < monthlyIncome * 0.5) {
      message += `\n🎉 **Excellent Budgeting:** You're spending only ${((monthlyExpenses / monthlyIncome) * 100).toFixed(1)}% of your income!`
    }

    return {
      message,
      insights: [
        {
          type: 'budget_alert',
          title: 'Monthly Spending Overview',
          message: `You're spending $${monthlyExpenses.toLocaleString()} out of $${monthlyIncome.toLocaleString()} monthly income`
        }
      ],
      actions: ['Create Budget Plan', 'Set Spending Limits', 'Track Categories'],
      confidence: 0.85,
      nextQuestion: "Would you like me to help you create a budget plan or set spending goals?"
    }
  }

  // Enhanced savings recommendations
  private handleSavingsRecommendation(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const monthlySavings = userFinancialData.monthlySavings
    const emergencyFund = userFinancialData.emergencyFund
    const monthlyExpenses = userFinancialData.monthlyExpenses
    const goals = userFinancialData.goals

    let message = `**Savings & Investment Recommendations** 🎯\n\n`

    // Emergency fund analysis
    const recommendedEmergencyFund = monthlyExpenses * 6
    if (emergencyFund < recommendedEmergencyFund) {
      message += `🛡️ **Emergency Fund:** You have $${emergencyFund.toLocaleString()} saved. I recommend building this to $${recommendedEmergencyFund.toLocaleString()} (6 months of expenses).\n\n`
    } else {
      message += `✅ **Emergency Fund:** Great job! You have $${emergencyFund.toLocaleString()} saved, which covers ${Math.ceil(emergencyFund / monthlyExpenses)} months of expenses.\n\n`
    }

    // Monthly savings analysis
    if (monthlySavings > 0) {
      message += `💰 **Monthly Savings:** You're saving $${monthlySavings.toLocaleString()} per month. This is ${((monthlySavings / userFinancialData.monthlyIncome) * 100).toFixed(1)}% of your income.\n\n`
    } else {
      message += `⚠️ **Monthly Savings:** You're currently spending more than you earn. Let's work on creating a savings plan.\n\n`
    }

    // Goal tracking
    if (goals.length > 0) {
      message += `**Your Savings Goals:**\n`
      goals.forEach(goal => {
        const progress = goal.current ? ((goal.current / goal.target) * 100).toFixed(1) : '0'
        message += `• ${goal.name}: ${progress}% complete ($${goal.current || 0} / $${goal.target})\n`
      })
    }

    return {
      message,
      insights: [
        {
          type: 'savings_opportunity',
          title: 'Savings Overview',
          message: `Monthly savings: $${monthlySavings.toLocaleString()}, Emergency fund: $${emergencyFund.toLocaleString()}`
        }
      ],
      actions: ['Set Savings Goals', 'Create Budget Plan', 'Investment Advice'],
      confidence: 0.9,
      nextQuestion: "Would you like me to help you set specific savings goals or create an investment plan?"
    }
  }

  // New: Goal tracking
  private handleGoalTracking(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const goals = userFinancialData.goals
    const monthlySavings = userFinancialData.monthlySavings

    if (goals.length === 0) {
      return {
        message: "You don't have any savings goals set yet! 🎯\n\nSetting financial goals is a great way to stay motivated and track your progress. Would you like me to help you create some goals?\n\nSome popular goals include:\n• Emergency Fund (3-6 months of expenses)\n• Vacation Fund\n• Down Payment for Home\n• Retirement Savings\n• Debt Payoff",
        insights: [],
        actions: ['Create Emergency Fund Goal', 'Set Vacation Goal', 'Plan for Home Purchase'],
        confidence: 0.8,
        nextQuestion: "What type of financial goal would you like to set?"
      }
    }

    let message = `**Your Financial Goals** 🎯\n\n`
    let totalProgress = 0

    goals.forEach(goal => {
      const progress = goal.current ? (goal.current / goal.target) * 100 : 0
      totalProgress += progress
      const emoji = progress >= 100 ? '🎉' : progress >= 75 ? '🚀' : progress >= 50 ? '📈' : progress >= 25 ? '💪' : '🌱'
      
      message += `${emoji} **${goal.name}**\n`
      message += `   Progress: ${progress.toFixed(1)}% ($${goal.current || 0} / $${goal.target})\n`
      message += `   Remaining: $${goal.target - (goal.current || 0)}\n\n`
    })

    const averageProgress = totalProgress / goals.length
    if (averageProgress >= 75) {
      message += `🎉 **Amazing progress!** You're ${averageProgress.toFixed(1)}% to your goals on average!`
    } else if (averageProgress >= 50) {
      message += `📈 **Great work!** You're making solid progress toward your goals.`
    } else {
      message += `💪 **Keep going!** Every step counts toward your financial goals.`
    }

    return {
      message,
      insights: [
        {
          type: 'goal_progress',
          title: 'Goal Progress',
          message: `Average progress: ${averageProgress.toFixed(1)}% across ${goals.length} goal${goals.length !== 1 ? 's' : ''}`
        }
      ],
      actions: ['Update Goal Progress', 'Add New Goals', 'Celebrate Achievements'],
      confidence: 0.9,
      nextQuestion: "Would you like to update your goal progress or set new financial goals?"
    }
  }

  // New: Credit and debt management
  private handleCreditAndDebt(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const creditScore = userFinancialData.creditScore
    const debtAccounts = userFinancialData.debtAccounts
    const monthlyIncome = userFinancialData.monthlyIncome

    // Debug: Log credit and debt data
    console.log(`[AI Service] Credit & Debt Handler - Data received:`, {
      creditScore,
      debtAccounts,
      monthlyIncome,
      debtAccountsType: typeof debtAccounts,
      debtAccountsLength: debtAccounts?.length || 0
    })

    let message = `**Credit & Debt Overview** 💳\n\n`
    message += `• Credit Score: ${creditScore}\n`

    // Credit score analysis
    if (creditScore >= 800) {
      message += `🎉 **Excellent credit!** You're in the top tier of credit scores.\n\n`
    } else if (creditScore >= 700) {
      message += `✅ **Good credit!** You're in a solid position for loans and credit cards.\n\n`
    } else if (creditScore >= 600) {
      message += `⚠️ **Fair credit.** There's room for improvement to get better rates.\n\n`
    } else {
      message += `🚨 **Poor credit.** Let's work on improving your credit score.\n\n`
    }

    // Debt analysis
    if (debtAccounts.length > 0) {
      const totalDebt = debtAccounts.reduce((sum, account) => sum + (account.balance || 0), 0)
      const debtToIncomeRatio = (totalDebt / monthlyIncome) * 100
      
      message += `**Debt Summary:**\n`
      message += `• Total Debt: $${totalDebt.toLocaleString()}\n`
      message += `• Debt-to-Income Ratio: ${debtToIncomeRatio.toFixed(1)}%\n\n`

      if (debtToIncomeRatio > 43) {
        message += `⚠️ **High debt load.** Your debt is ${debtToIncomeRatio.toFixed(1)}% of your income, which may affect loan approvals.\n\n`
      } else if (debtToIncomeRatio > 28) {
        message += `📊 **Moderate debt.** Consider paying down debt to improve your financial position.\n\n`
      } else {
        message += `✅ **Low debt load.** You're in a good position with manageable debt.\n\n`
      }
    } else {
      message += `✅ **No debt accounts found.** You're debt-free! 🎉\n\n`
    }

    return {
      message,
      insights: [
        {
          type: 'risk_alert',
          title: 'Credit Health',
          message: `Credit score: ${creditScore}, Debt accounts: ${debtAccounts.length}`
        }
      ],
      actions: ['Improve Credit Score', 'Debt Payoff Plan', 'Credit Monitoring'],
      confidence: 0.85,
      nextQuestion: "Would you like help improving your credit score or creating a debt payoff plan?"
    }
  }

  // New: Financial health check
  private handleFinancialHealthCheck(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const monthlySavings = userFinancialData.monthlySavings
    const monthlyIncome = userFinancialData.monthlyIncome
    const emergencyFund = userFinancialData.emergencyFund
    const monthlyExpenses = userFinancialData.monthlyExpenses
    const creditScore = userFinancialData.creditScore
    const goals = userFinancialData.goals

    let message = `**Financial Health Check** 🏥\n\n`
    let healthScore = 0
    let insights = []

    // Emergency fund check (25 points)
    const recommendedEmergencyFund = monthlyExpenses * 6
    if (emergencyFund >= recommendedEmergencyFund) {
      message += `✅ **Emergency Fund:** Excellent! You have ${Math.ceil(emergencyFund / monthlyExpenses)} months covered.\n`
      healthScore += 25
    } else if (emergencyFund >= monthlyExpenses * 3) {
      message += `✅ **Emergency Fund:** Good start! You have ${Math.ceil(emergencyFund / monthlyExpenses)} months covered. Aim for 6 months.\n`
      healthScore += 15
    } else {
      message += `🚨 **Emergency Fund:** Critical! You only have ${Math.ceil(emergencyFund / monthlyExpenses)} month${Math.ceil(emergencyFund / monthlyExpenses) !== 1 ? 's' : ''} covered. Build this up!\n`
      healthScore += 5
    }

    // Savings rate check (25 points)
    const savingsRate = (monthlySavings / monthlyIncome) * 100
    if (savingsRate >= 20) {
      message += `✅ **Savings Rate:** Outstanding! You're saving ${savingsRate.toFixed(1)}% of your income.\n`
      healthScore += 25
    } else if (savingsRate >= 10) {
      message += `✅ **Savings Rate:** Good! You're saving ${savingsRate.toFixed(1)}% of your income. Aim for 20%.\n`
      healthScore += 15
    } else if (savingsRate >= 0) {
      message += `⚠️ **Savings Rate:** Low. You're saving ${savingsRate.toFixed(1)}% of your income. Try to increase this.\n`
      healthScore += 10
    } else {
      message += `🚨 **Savings Rate:** Critical! You're spending more than you earn. This needs immediate attention.\n`
      healthScore += 0
    }

    // Credit score check (25 points)
    if (creditScore >= 750) {
      message += `✅ **Credit Score:** Excellent! ${creditScore} is in the top tier.\n`
      healthScore += 25
    } else if (creditScore >= 700) {
      message += `⚠️ **Credit Score:** Good! ${creditScore} is solid but could improve.\n`
      healthScore += 20
    } else if (creditScore >= 650) {
      message += `⚠️ **Credit Score:** Fair. ${creditScore} has room for improvement.\n`
      healthScore += 15
    } else {
      message += `🚨 **Credit Score:** Poor. ${creditScore} needs work to improve.\n`
      healthScore += 5
    }

    // Goals check (25 points)
    if (goals.length >= 3) {
      message += `✅ **Financial Goals:** Excellent! You have ${goals.length} active goals.\n`
      healthScore += 25
    } else if (goals.length >= 1) {
      message += `⚠️ **Financial Goals:** Good start! You have ${goals.length} goal${goals.length !== 1 ? 's' : ''}. Consider adding more.\n`
      healthScore += 15
    } else {
      message += `🚨 **Financial Goals:** Missing! Setting goals is crucial for financial success.\n`
      healthScore += 0
    }

    message += `\n**Overall Financial Health Score: ${healthScore}/100**\n\n`

    // Overall assessment
    if (healthScore >= 80) {
      message += `🎉 **Excellent Financial Health!** You're doing amazing! Keep up the great work!`
    } else if (healthScore >= 60) {
      message += `📈 **Good Financial Health!** You're on the right track with room for improvement.`
    } else if (healthScore >= 40) {
      message += `⚠️ **Fair Financial Health.** There are several areas we can work on together.`
    } else {
      message += `🚨 **Poor Financial Health.** Don't worry, we can turn this around together!`
    }

    return {
      message,
      insights: [
        {
          type: 'goal_progress',
          title: 'Financial Health Score',
          message: `Your overall financial health score is ${healthScore}/100`
        }
      ],
      actions: ['Improve Emergency Fund', 'Increase Savings Rate', 'Boost Credit Score', 'Set Financial Goals'],
      confidence: 0.95,
      nextQuestion: "Which area of your financial health would you like to improve first?"
    }
  }

  // Handle general financial advice
  private handleGeneralAdvice(userFinancialData: AIContext['userFinancialData'], context: AIContext): AIResponse {
    const monthlySavings = userFinancialData.monthlySavings
    const monthlyIncome = userFinancialData.monthlyIncome
    const emergencyFund = userFinancialData.emergencyFund
    const monthlyExpenses = userFinancialData.monthlyExpenses
    const creditScore = userFinancialData.creditScore

    let message = `**Personalized Financial Advice** 💡\n\n`

    // Emergency fund advice
    const recommendedEmergencyFund = monthlyExpenses * 6
    if (emergencyFund < recommendedEmergencyFund) {
      message += `🛡️ **Priority 1: Build Emergency Fund**\n`
      message += `You need $${(recommendedEmergencyFund - emergencyFund).toLocaleString()} more to reach 6 months of expenses.\n`
      message += `Save $${Math.ceil((recommendedEmergencyFund - emergencyFund) / 12).toLocaleString()} monthly to reach this goal in a year.\n\n`
    } else {
      message += `✅ **Emergency Fund:** Excellent! You're well-protected.\n\n`
    }

    // Savings rate advice
    const savingsRate = (monthlySavings / monthlyIncome) * 100
    if (savingsRate < 20) {
      message += `💰 **Priority 2: Increase Savings Rate**\n`
      message += `Aim to save 20% of your income ($${Math.ceil(monthlyIncome * 0.2).toLocaleString()}/month).\n`
      message += `Current rate: ${savingsRate.toFixed(1)}% ($${monthlySavings.toLocaleString()}/month)\n\n`
    } else {
      message += `🎉 **Savings Rate:** Outstanding! You're saving ${savingsRate.toFixed(1)}% of your income.\n\n`
    }

    // Credit score advice
    if (creditScore < 700) {
      message += `💳 **Priority 3: Improve Credit Score**\n`
      message += `Your score of ${creditScore} can be improved by:\n`
      message += `• Paying bills on time\n`
      message += `• Reducing credit utilization\n`
      message += `• Keeping old accounts open\n\n`
    } else {
      message += `✅ **Credit Score:** Great! ${creditScore} is in a good range.\n\n`
    }

    // Investment advice
    if (monthlySavings > 0 && emergencyFund >= recommendedEmergencyFund) {
      message += `🚀 **Next Step: Start Investing**\n`
      message += `Consider investing your extra savings in:\n`
      message += `• 401(k) or IRA for retirement\n`
      message += `• Index funds for long-term growth\n`
      message += `• Real estate or other assets\n\n`
    }

    return {
      message,
      insights: [
        {
          type: 'recommendation',
          title: 'Financial Health Assessment',
          message: monthlySavings > 0 ? 'Strong financial position with room for growth' : 'Focus on building savings foundation'
        }
      ],
      actions: ['Set Emergency Fund Goal', 'Create Budget Plan', 'Improve Credit Score', 'Start Investing'],
      confidence: 0.9,
      nextQuestion: "Which financial area would you like to focus on improving?"
    }
  }

  // Analyze spending patterns from transactions
  private analyzeSpendingPatterns(transactions: any[]): any[] {
    const insights: any[] = []
    
    // Group by category
    const categorySpending = transactions.reduce((acc: any, tx: any) => {
      if (tx.amount < 0) { // Only expenses
        const category = tx.category || 'Uncategorized'
        acc[category] = (acc[category] || 0) + Math.abs(tx.amount)
      }
      return acc
    }, {} as Record<string, number>)

    // Find highest spending category
    const topCategory = Object.entries(categorySpending)
      .sort(([,a], [,b]) => (b as number) - (a as number))[0]

    if (topCategory) {
      insights.push({
        id: 'spending-pattern',
        userId: 'temp',
        type: 'spending_pattern',
        title: 'Top Spending Category',
        message: `${topCategory[0]}: $${(topCategory[1] as number).toFixed(2)}`,
        severity: 'info',
        actionRequired: false,
        confidence: 0.8,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return insights
  }

  // Generate spending insights
  async generateSpendingInsights(transactions: any[]): Promise<any[]> {
    // This will be enhanced with ML in Phase 2C
    const insights: any[] = []
    
    const totalSpending = transactions
      .filter((tx: any) => tx.amount < 0)
      .reduce((sum: number, tx: any) => sum + Math.abs(tx.amount), 0)

    if (totalSpending > 1000) {
      insights.push({
        id: 'high-spending-alert',
        userId: 'temp',
        type: 'budget_alert',
        title: 'High Monthly Spending',
        message: `Your monthly spending is $${totalSpending.toFixed(2)}. Consider reviewing your budget.`,
        severity: 'warning',
        actionRequired: true,
        confidence: 0.9,
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return insights
  }

  // Check if AI service is properly configured
  isConfigured(): boolean {
    return !!this.apiKey
  }

  // Get AI model information
  getModelInfo(): { model: string; configured: boolean } {
    return {
      model: this.model,
      configured: this.isConfigured()
    }
  }
}

// Export singleton instance
export const aiService = new AIService()
