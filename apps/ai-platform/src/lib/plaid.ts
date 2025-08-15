import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid'

// Plaid API configuration
const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID!,
      'PLAID-SECRET': process.env.PLAID_SECRET!,
    },
  },
})

export const plaidClient = new PlaidApi(configuration)

// Types for Plaid integration - using more flexible types that match the API
export interface PlaidAccount {
  account_id: string
  balances: {
    available: number | null
    current: number | null
    iso_currency_code: string | null
    limit?: number | null
    unofficial_currency_code?: string | null
  }
  mask: string
  name: string
  official_name?: string | null
  type: 'depository' | 'credit' | 'loan' | 'investment' | 'other'
  subtype?: string | null
  verification_status?: string | null
}

export interface PlaidTransaction {
  account_id: string
  amount: number
  category: string[] | null
  category_id: string
  date: string
  iso_currency_code: string
  location: {
    address?: string | null
    city?: string | null
    region?: string | null
    postal_code?: string | null
    country?: string | null
    lat?: number | null
    lon?: number | null
    store_number?: string | null
  } | null
  merchant_name?: string | null
  name: string
  payment_channel: 'online' | 'in store' | 'other'
  pending: boolean
  pending_transaction_id?: string | null
  transaction_id: string
  transaction_type: 'special' | 'place' | 'digital' | 'resolved'
  unofficial_currency_code?: string | null
}

export interface PlaidLinkTokenResponse {
  link_token: string
  expiration: string
  request_id: string
}

export interface PlaidAccessTokenResponse {
  access_token: string
  item_id: string
  request_id: string
}

// Plaid API functions
export async function createLinkToken(userId: string): Promise<PlaidLinkTokenResponse> {
  try {
          const request = {
        user: { client_user_id: userId },
        client_name: 'MoneyPal',
        products: ['transactions', 'auth'],
        country_codes: ['US'],
        language: 'en'
      }

    const response = await plaidClient.linkTokenCreate(request as any)
    return response.data
  } catch (error: any) {
    console.error('Error creating link token:', error)
    if (error.response?.data) {
      console.error('Plaid error details:', error.response.data)
    }
    throw new Error(`Failed to create Plaid link token: ${error.response?.data?.error_message || error.message}`)
  }
}

export async function exchangePublicToken(publicToken: string): Promise<PlaidAccessTokenResponse> {
  try {
    const request = {
      public_token: publicToken
    }

    const response = await plaidClient.itemPublicTokenExchange(request)
    return response.data
  } catch (error) {
    console.error('Error exchanging public token:', error)
    throw new Error('Failed to exchange public token')
  }
}

export async function getAccounts(accessToken: string): Promise<PlaidAccount[]> {
  try {
    const request = {
      access_token: accessToken
    }

    const response = await plaidClient.accountsGet(request)
    return response.data.accounts as any
  } catch (error) {
    console.error('Error getting accounts:', error)
    throw new Error('Failed to get accounts')
  }
}

export async function getTransactions(
  accessToken: string,
  startDate: string,
  endDate: string
): Promise<PlaidTransaction[]> {
  try {
    const request = {
      access_token: accessToken,
      start_date: startDate,
      end_date: endDate,
      options: {
        include_personal_finance_category: true,
        include_original_description: true
      }
    }

    const response = await plaidClient.transactionsGet(request)
    return response.data.transactions as any
  } catch (error) {
    console.error('Error getting transactions:', error)
    throw new Error('Failed to get transactions')
  }
}

export async function getAccountBalance(accessToken: string): Promise<any> {
  try {
    const request = {
      access_token: accessToken
    }

    const response = await plaidClient.accountsBalanceGet(request)
    return response.data
  } catch (error) {
    console.error('Error getting account balance:', error)
    throw new Error('Failed to get account balance')
  }
}
