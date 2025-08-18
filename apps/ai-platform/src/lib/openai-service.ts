// OpenAI Service for MoneyPal - Real AI Integration
import { AIResponse, AIContext } from './ai-service'

export interface OpenAIResponse {
  message: string
  insights: any[]
  actions: string[]
  confidence: number
  nextQuestion?: string
  reasoning?: string
}

export class OpenAIService {
  private apiKey: string
  private model: string
  private baseURL: string

  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || ''
    this.model = process.env.OPENAI_MODEL || 'gpt-3.5-turbo' // Default to more accessible model
    this.baseURL = 'https://api.openai.com/v1'
  }

  // Check if OpenAI is configured
  isConfigured(): boolean {
    return !!this.apiKey
  }

  // Get model information
  getModelInfo(): { model: string; configured: boolean } {
    return {
      model: this.model,
      configured: this.isConfigured()
    }
  }

  // Main AI conversation handler
  async chat(userMessage: string, context: AIContext): Promise<AIResponse> {
    console.log(`[OpenAI Service] Starting chat with model: ${this.model}`)
    console.log(`[OpenAI Service] API Key configured: ${this.isConfigured()}`)
    
    if (!this.isConfigured()) {
      console.log(`[OpenAI Service] No API key, using fallback`)
      return this.fallbackResponse(userMessage, context)
    }

    try {
      console.log(`[OpenAI Service] Calling OpenAI API...`)
      const response = await this.callOpenAI(userMessage, context)
      console.log(`[OpenAI Service] OpenAI response received:`, response)
      return this.transformOpenAIResponse(response)
    } catch (error) {
      console.error('OpenAI API Error:', error)
      console.log(`[OpenAI Service] Falling back to rule engine due to error`)
      return this.fallbackResponse(userMessage, context)
    }
  }

  // Call OpenAI API
  private async callOpenAI(userMessage: string, context: AIContext): Promise<any> {
    const systemPrompt = this.buildSystemPrompt(context)
    const userPrompt = this.buildUserPrompt(userMessage, context)

    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
        response_format: { type: 'json_object' }
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error(`[OpenAI Service] API Error Response:`, errorData)
      throw new Error(`OpenAI API Error: ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }

  // Build system prompt for OpenAI
  private buildSystemPrompt(context: AIContext): string {
    const { userFinancialData } = context
    
    return `You are MoneyPal, an AI financial co-pilot. You help users understand their finances and make smart decisions.

**Your Personality:**
- Friendly, approachable, and encouraging
- Proactive in identifying opportunities and risks
- Educational - explain financial concepts clearly
- Action-oriented - always suggest next steps

**User's Financial Profile:**
- Total Balance: $${userFinancialData.totalBalance.toLocaleString()}
- Monthly Income: $${userFinancialData.monthlyIncome.toLocaleString()}
- Monthly Expenses: $${userFinancialData.monthlyExpenses.toLocaleString()}
- Accounts: ${userFinancialData.accounts.length} linked accounts
- Recent Transactions: ${userFinancialData.transactions.length} transactions

**Response Format (JSON):**
{
  "message": "Your main response to the user",
  "insights": [
    {
      "title": "Insight title",
      "message": "Detailed insight message",
      "type": "spending_pattern|savings_opportunity|risk_alert|goal_progress|budget_alert|recommendation",
      "severity": "info|warning|critical",
      "actionRequired": true/false
    }
  ],
  "actions": ["Action 1", "Action 2", "Action 3"],
  "confidence": 0.95,
  "nextQuestion": "Follow-up question to engage user",
  "reasoning": "Brief explanation of your analysis"
}

**Key Principles:**
1. Always base advice on the user's actual financial data
2. Be specific with numbers and percentages
3. Identify both opportunities and potential risks
4. Suggest actionable next steps
5. Ask follow-up questions to keep the conversation going`
  }

  // Build user prompt with context
  private buildUserPrompt(userMessage: string, context: AIContext): string {
    const { userFinancialData, conversationHistory } = context
    
    let prompt = `User Question: "${userMessage}"

**Current Financial Context:**
- Total Balance: $${userFinancialData.totalBalance.toLocaleString()}
- Monthly Income: $${userFinancialData.monthlyIncome.toLocaleString()}
- Monthly Expenses: $${userFinancialData.monthlyExpenses.toLocaleString()}
- Monthly Savings: $${(userFinancialData.monthlyIncome - userFinancialData.monthlyExpenses).toLocaleString()}

**Account Details:**
${userFinancialData.accounts.map(acc => 
  `- ${acc.name}: $${acc.balance.toLocaleString()} (${acc.type})`
).join('\n')}

**Recent Spending Patterns:**
${this.analyzeRecentSpending(userFinancialData.transactions)}

**Conversation History (Last 3 messages):**
${conversationHistory.slice(-3).map(msg => 
  `${msg.messageType === 'user' ? 'User' : 'MoneyPal'}: ${msg.message}`
).join('\n')}

Please provide a helpful, personalized financial response based on this data.`
    
    return prompt
  }

  // Analyze recent spending for context
  private analyzeRecentSpending(transactions: any[]): string {
    if (transactions.length === 0) return "No recent transactions available."
    
    const recentTransactions = transactions.slice(0, 5)
    const totalSpending = recentTransactions
      .filter(tx => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0)
    
    const topCategories = this.getTopSpendingCategories(recentTransactions)
    
    return `- Total Recent Spending: $${totalSpending.toFixed(2)}
- Top Categories: ${topCategories.join(', ')}
- Transaction Count: ${recentTransactions.length}`
  }

  // Get top spending categories
  private getTopSpendingCategories(transactions: any[]): string[] {
    const categorySpending: Record<string, number> = {}
    
    transactions.forEach(tx => {
      if (tx.amount < 0) {
        const category = tx.category || 'Uncategorized'
        categorySpending[category] = (categorySpending[category] || 0) + Math.abs(tx.amount)
      }
    })
    
    return Object.entries(categorySpending)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([category]) => category)
  }

  // Transform OpenAI response to our format
  private transformOpenAIResponse(openAIResponse: string): AIResponse {
    try {
      const parsed = JSON.parse(openAIResponse)
      
      return {
        message: parsed.message || "I'm here to help with your finances!",
        insights: parsed.insights || [],
        actions: parsed.actions || [],
        confidence: parsed.confidence || 0.8,
        nextQuestion: parsed.nextQuestion
      }
    } catch (error) {
      console.error('Error parsing OpenAI response:', error)
      return this.fallbackResponse("", { 
        userFinancialData: { 
          accounts: [], 
          transactions: [], 
          totalBalance: 0, 
          monthlyIncome: 0, 
          monthlyExpenses: 0,
          monthlySavings: 0,
          creditScore: 750,
          emergencyFund: 0,
          goals: [],
          debtAccounts: []
        }, 
        conversationHistory: [], 
        userPreferences: { 
          riskTolerance: 'MODERATE', 
          automationLevel: 'BASIC', 
          financialGoals: [] 
        } 
      })
    }
  }

  // Fallback response when OpenAI is not available
  private fallbackResponse(userMessage: string, context: AIContext): AIResponse {
    return {
      message: "I'm currently using my smart rule engine while we set up advanced AI. I can still help with balance inquiries, spending analysis, and savings advice!",
      insights: [],
      actions: ['Check Balance', 'Analyze Spending', 'Get Savings Advice'],
      confidence: 0.6
    }
  }
}

// Export singleton instance
export const openAIService = new OpenAIService()
