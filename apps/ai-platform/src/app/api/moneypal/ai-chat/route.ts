import { NextRequest, NextResponse } from 'next/server'
import { AIContext, AIService } from '@/lib/ai-service'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { userId, message, conversationHistory = [] } = await request.json()

    if (!userId || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, message' },
        { status: 400 }
      )
    }

    console.log(`[AI Chat API] Processing message for user ${userId}: "${message}"`)

    // Load user's unified financial data (manual + Plaid)
    let userFinancialData = null
    
    try {
      // Try to load manual data first
      const manualResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4000'}/api/moneypal/manual-data?userId=${userId}`)
      if (manualResponse.ok) {
        const manualResult = await manualResponse.json()
        if (manualResult.success && manualResult.data) {
          userFinancialData = manualResult.data
          console.log(`[AI Chat API] Manual data loaded for user ${userId}:`, {
            summary: userFinancialData.summary,
            accounts: userFinancialData.accounts?.length || 0,
            goals: userFinancialData.goals?.length || 0,
            debtAccounts: userFinancialData.debtAccounts?.length || 0
          })
        }
      }
    } catch (error) {
      console.log(`[AI Chat API] No manual data for user ${userId}`)
    }

    // If no manual data, try to load Plaid data
    if (!userFinancialData) {
      try {
        const plaidResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4000'}/api/moneypal/financial-data?userId=${userId}`)
        if (plaidResponse.ok) {
          const plaidResult = await plaidResponse.json()
          if (plaidResult.success && plaidResult.data) {
            userFinancialData = plaidResult.data
            console.log(`[AI Chat API] Plaid data loaded for user ${userId}:`, {
              summary: userFinancialData.summary,
              accounts: userFinancialData.accounts?.length || 0,
              goals: userFinancialData.goals?.length || 0
            })
          }
        }
      } catch (error) {
        console.log(`[AI Chat API] No Plaid data for user ${userId}`)
      }
    }

    if (!userFinancialData) {
      return NextResponse.json({
        success: true,
        response: {
          message: "Hi! I'm your MoneyPal AI companion! 👋 I'd love to help you with your finances, but I don't see any financial data yet. You can either:\n\n1. **Enter your data manually** - Click 'Manual Data Entry' to get started\n2. **Link your bank accounts** - Connect through Plaid for real-time data\n3. **Try test mode** - See how I can help with sample data\n\nWhat would you like to do first?",
          insights: [],
          actions: ['Enter Manual Data', 'Link Bank Accounts', 'Try Test Mode'],
          confidence: 0.9,
          nextQuestion: "How would you like to get started with MoneyPal?"
        },
        context: {
          totalBalance: 0,
          accountCount: 0,
          transactionCount: 0,
          hasData: false
        }
      })
    }

    // Debug: Log the raw data structure
    console.log(`[AI Chat API] Raw userFinancialData structure:`, {
      summaryKeys: Object.keys(userFinancialData.summary || {}),
      summaryValues: userFinancialData.summary,
      hasGoals: !!userFinancialData.goals,
      goalsLength: userFinancialData.goals?.length || 0,
      hasDebtAccounts: !!userFinancialData.debtAccounts,
      debtAccountsLength: userFinancialData.debtAccounts?.length || 0
    })

    // Transform data to match AI service expectations
    const transformedAccounts = (userFinancialData.accounts || []).map((account: any) => ({
      id: account.id,
      name: account.name || account.officialName,
      type: account.type || account.subtype,
      balance: account.balance || 0,
      currency: account.currency || 'USD',
      accountNumber: account.accountNumber || '****',
      userId: userId,
      institutionName: account.institutionName || account.institution || 'Unknown',
      lastSync: account.lastSync || new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const transformedTransactions = (userFinancialData.transactions || []).map((tx: any) => ({
      id: tx.id,
      amount: tx.amount || 0,
      date: tx.date,
      description: tx.description,
      category: tx.category || 'Uncategorized',
      subcategory: tx.subcategory,
      accountId: tx.accountId,
      userId: userId,
      merchant: tx.merchant,
      isPending: tx.isPending || false,
      location: tx.location,
      paymentChannel: tx.paymentChannel,
      transactionType: tx.transactionType,
      aiCategorized: false,
      aiCategory: tx.category || 'Uncategorized',
      aiConfidence: 1.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    // Prepare AI context with enhanced data
    const aiContext: AIContext = {
      userFinancialData: {
        accounts: transformedAccounts,
        transactions: transformedTransactions,
        totalBalance: userFinancialData.summary?.totalBalance || userFinancialData.summary?.totalAssets || 0,
        monthlyIncome: userFinancialData.summary?.monthlyIncome || 0,
        monthlyExpenses: userFinancialData.summary?.monthlyExpenses || 0,
        // Add more financial context - ensure we're accessing the right fields
        monthlySavings: userFinancialData.summary?.monthlySavings || 0,
        creditScore: userFinancialData.summary?.creditScore || 750,
        emergencyFund: userFinancialData.summary?.emergencyFund || 0,
        goals: userFinancialData.goals || [],
        debtAccounts: userFinancialData.debtAccounts || []
      },
      conversationHistory: conversationHistory,
      userPreferences: {
        riskTolerance: 'MODERATE', // Will be configurable in Phase 3
        automationLevel: 'BASIC',  // Will be configurable in Phase 3
        financialGoals: (userFinancialData.goals || []).map((goal: any) => goal.name || goal.targetAmount?.toString() || 'Financial Goal')
      }
    }

    // Debug: Log the AI context being created
    console.log(`[AI Chat API] AI Context being created:`, {
      creditScore: aiContext.userFinancialData.creditScore,
      emergencyFund: aiContext.userFinancialData.emergencyFund,
      monthlySavings: aiContext.userFinancialData.monthlySavings,
      goalsCount: aiContext.userFinancialData.goals?.length || 0,
      debtAccountsCount: aiContext.userFinancialData.debtAccounts?.length || 0
    })

    console.log(`[AI Chat API] AI Context prepared:`, {
      accountCount: aiContext.userFinancialData.accounts.length,
      transactionCount: aiContext.userFinancialData.transactions.length,
      totalBalance: aiContext.userFinancialData.totalBalance,
      monthlySavings: aiContext.userFinancialData.monthlySavings,
      goalsCount: aiContext.userFinancialData.goals?.length || 0,
      conversationHistoryLength: conversationHistory.length
    })

    // Debug: Log the complete AI context data
    console.log(`[AI Chat API] Complete AI Context data:`, {
      summary: aiContext.userFinancialData,
      goals: aiContext.userFinancialData.goals,
      debtAccounts: aiContext.userFinancialData.debtAccounts,
      creditScore: aiContext.userFinancialData.creditScore,
      emergencyFund: aiContext.userFinancialData.emergencyFund
    })

    // Process the message with our LOCAL AI service (not OpenAI)
    const aiService = new AIService()
    const aiResponse = await aiService.chat(message, aiContext)

    console.log(`[AI Chat API] AI Response generated:`, {
      messageLength: aiResponse.message.length,
      insightsCount: aiResponse.insights.length,
      actionsCount: aiResponse.actions.length,
      confidence: aiResponse.confidence
    })

    // Return the AI response
    return NextResponse.json({
      success: true,
      response: aiResponse,
      context: {
        totalBalance: aiContext.userFinancialData.totalBalance,
        accountCount: aiContext.userFinancialData.accounts.length,
        transactionCount: aiContext.userFinancialData.transactions.length,
        monthlySavings: aiContext.userFinancialData.monthlySavings,
        hasData: true
      }
    })

  } catch (error: any) {
    console.error('Error in AI chat:', error)
    return NextResponse.json(
      {
        error: 'Failed to process AI chat request',
        details: error.message
      },
      { status: 500 }
    )
  }
}
