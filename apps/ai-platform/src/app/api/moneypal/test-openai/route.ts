import { NextRequest, NextResponse } from 'next/server'
import { openAIService } from '@/lib/openai-service'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const modelInfo = openAIService.getModelInfo()
    const isConfigured = openAIService.isConfigured()
    
    // Test a simple OpenAI call if configured
    let testResult = null
    if (isConfigured) {
      try {
        const testResponse = await openAIService.chat(
          "Hello, can you say 'MoneyPal AI is working!' in a friendly way?",
          {
            userFinancialData: {
              accounts: [],
              transactions: [],
              totalBalance: 1000,
              monthlyIncome: 5000,
              monthlyExpenses: 3000
            },
            conversationHistory: [],
            userPreferences: {
              riskTolerance: 'MODERATE',
              automationLevel: 'BASIC',
              financialGoals: []
            }
          }
        )
        testResult = {
          success: true,
          response: testResponse,
          message: "OpenAI API test successful!"
        }
      } catch (error: any) {
        testResult = {
          success: false,
          error: error.message,
          message: "OpenAI API test failed"
        }
      }
    }

    return NextResponse.json({
      success: true,
      configuration: {
        isConfigured,
        model: modelInfo.model,
        apiKeyPresent: !!process.env.OPENAI_API_KEY,
        apiKeyLength: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0
      },
      testResult,
      environment: {
        nodeEnv: process.env.NODE_ENV,
        openaiKey: process.env.OPENAI_API_KEY ? `${process.env.OPENAI_API_KEY.substring(0, 10)}...` : 'Not set'
      }
    })

  } catch (error: any) {
    console.error('Error testing OpenAI:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: 'Failed to test OpenAI configuration'
      },
      { status: 500 }
    )
  }
}
