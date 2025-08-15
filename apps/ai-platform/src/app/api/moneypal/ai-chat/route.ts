import { NextRequest, NextResponse } from 'next/server'
import { AIContext } from '@/lib/ai-service'
import { openAIService } from '@/lib/openai-service'
import { plaidDataStore } from '@/lib/plaid-data-store'

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

    // Get user's financial data from our store
    const userData = plaidDataStore.getData(userId)
    
    if (!userData) {
      return NextResponse.json(
        { error: 'No financial data found for user. Please link your accounts first.' },
        { status: 404 }
      )
    }

    // Transform Plaid data to match AI service expectations
    const transformedAccounts = userData.accounts.map(account => ({
      id: account.id,
      name: account.name,
      type: account.type,
      balance: account.balance,
      currency: account.currency,
      accountNumber: account.accountNumber,
      userId: userId,
      plaidAccountId: account.id,
      plaidItemId: '', // We'll get this from Plaid item info later
      mask: account.accountNumber.replace('****', ''),
      officialName: account.officialName,
      institutionName: account.institutionName,
      lastSyncAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    const transformedTransactions = userData.transactions.map(tx => ({
      id: tx.id,
      amount: tx.amount,
      date: tx.date,
      description: tx.description,
      category: tx.category,
      subcategory: tx.subcategory,
      accountId: tx.accountId,
      userId: userId,
      plaidTransactionId: tx.id,
      merchant: tx.merchant,
      isPending: tx.isPending,
      location: tx.location,
      paymentChannel: tx.paymentChannel,
      transactionType: tx.transactionType,
      aiCategorized: false,
      aiCategory: tx.category,
      aiConfidence: 1.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    // Prepare AI context
    const aiContext: AIContext = {
      userFinancialData: {
        accounts: transformedAccounts,
        transactions: transformedTransactions,
        totalBalance: userData.summary.totalBalance,
        monthlyIncome: userData.summary.monthlyIncome,
        monthlyExpenses: userData.summary.monthlyExpenses
      },
      conversationHistory: conversationHistory,
      userPreferences: {
        riskTolerance: 'MODERATE', // Default - will be configurable in Phase 3
        automationLevel: 'BASIC',  // Default - will be configurable in Phase 3
        financialGoals: ['Emergency Fund', 'Retirement Savings'] // Default goals
      }
    }

    console.log(`[AI Chat API] AI Context prepared:`, {
      accountCount: aiContext.userFinancialData.accounts.length,
      transactionCount: aiContext.userFinancialData.transactions.length,
      totalBalance: aiContext.userFinancialData.totalBalance,
      conversationHistoryLength: conversationHistory.length
    })

    // Process the message with OpenAI service
    const aiResponse = await openAIService.chat(message, aiContext)

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
        transactionCount: aiContext.userFinancialData.transactions.length
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
