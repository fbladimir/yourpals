import { NextRequest, NextResponse } from 'next/server'
import { getAccounts, getTransactions } from '@/lib/plaid'
import { plaidDataStore } from '@/lib/plaid-data-store'

export async function POST(request: NextRequest) {
  try {
    const { userId, accessToken, plaidItemId } = await request.json()

    if (!userId || !accessToken || !plaidItemId) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, accessToken, plaidItemId' },
        { status: 400 }
      )
    }

    console.log(`Starting account sync for user ${userId}`)
    console.log(`Access token: ${accessToken.substring(0, 10)}...`)
    console.log(`Plaid item ID: ${plaidItemId}`)

    // Step 1: Get REAL accounts from Plaid
    console.log('Fetching real accounts from Plaid...')
    const plaidAccounts = await getAccounts(accessToken)
    console.log(`Found ${plaidAccounts.length} real Plaid accounts:`, plaidAccounts)

    // Step 2: Get REAL transactions from Plaid (last 30 days)
    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    
    console.log(`Fetching real transactions from ${startDate} to ${endDate}...`)
    const plaidTransactions = await getTransactions(accessToken, startDate, endDate)
    console.log(`Found ${plaidTransactions.length} real Plaid transactions:`, plaidTransactions)

    // Step 3: Transform Plaid data to our format
    const realAccounts = plaidAccounts.map(account => ({
      id: account.account_id,
      name: account.name || 'Unknown Account',
      type: account.type,
      subtype: account.subtype || 'unknown',
      balance: account.balances.current || 0,
      currency: account.balances.iso_currency_code || 'USD',
      accountNumber: account.mask ? `****${account.mask}` : '****',
      officialName: account.official_name || undefined,
      institutionName: 'Plaid Institution' // We'll get this from item info later
    }))

    const realTransactions = plaidTransactions.map(tx => ({
      id: tx.transaction_id,
      amount: tx.amount,
      date: tx.date,
      description: tx.name,
      category: tx.category?.[0] || 'Uncategorized',
      subcategory: tx.category?.[1] || undefined,
      accountId: tx.account_id,
      merchant: tx.merchant_name || tx.name,
      isPending: tx.pending,
      location: tx.location?.city ? `${tx.location.city}, ${tx.location.region}` : undefined,
      paymentChannel: tx.payment_channel,
      transactionType: tx.transaction_type
    }))

    // Step 4: Calculate real financial summary
    const totalBalance = realAccounts.reduce((sum, acc) => sum + (acc.balance || 0), 0)
    const totalSavings = realAccounts
      .filter(acc => acc.subtype === 'savings')
      .reduce((sum, acc) => sum + (acc.balance || 0), 0)
    
    const monthlyExpenses = realTransactions
      .filter(tx => tx.amount < 0 && new Date(tx.date) >= new Date(startDate))
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0)

    const realSummary = {
      totalBalance,
      totalSavings,
      monthlyIncome: 0, // TODO: Calculate from income transactions
      monthlyExpenses,
      creditScore: 785 // Mock for now
    }

    // Step 5: Create the complete data structure
    const completeData = {
      accounts: realAccounts,
      transactions: realTransactions,
      summary: realSummary,
      insights: [
        {
          id: '1',
          type: 'spending',
          title: 'Real Plaid Data Loaded',
          message: `Successfully loaded ${realAccounts.length} accounts and ${realTransactions.length} transactions from Plaid.`,
          priority: 'high'
        }
      ],
      goals: [
        {
          id: '1',
          name: 'Emergency Fund',
          targetAmount: totalBalance * 3, // 3 months of expenses
          currentAmount: totalBalance,
          targetDate: '2024-06-01'
        }
      ]
    }

    // Step 6: Store the data in our shared store
    console.log(`[Sync API] About to store data for user ${userId}`)
    console.log(`[Sync API] Data to store:`, completeData)
    
    plaidDataStore.storeData(userId, completeData)
    
    console.log(`[Sync API] Data stored. All users in store:`, plaidDataStore.getAllUsers())
    console.log(`[Sync API] Verifying stored data:`, plaidDataStore.getData(userId))
    
    // Test: Immediately try to retrieve the data to verify storage
    const testRetrieval = plaidDataStore.getData(userId)
    if (testRetrieval) {
      console.log(`[Sync API] ✅ Data storage verification SUCCESSFUL`)
    } else {
      console.log(`[Sync API] ❌ Data storage verification FAILED - data not found after storage`)
    }

    console.log('Real financial summary:', realSummary)
    console.log('Stored complete data for user:', userId)

    return NextResponse.json({
      success: true,
      data: {
        accounts: realAccounts.length,
        transactions: realTransactions.length,
        summary: realSummary,
        insights: 1
      },
      message: 'Real Plaid data synced successfully!',
      // Include the actual data for debugging
      debug: {
        accounts: realAccounts,
        transactions: realTransactions.slice(0, 5), // First 5 transactions
        summary: realSummary
      }
    })

  } catch (error: any) {
    console.error('Error in account sync:', error)
    return NextResponse.json(
      { 
        error: 'Failed to sync accounts',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
