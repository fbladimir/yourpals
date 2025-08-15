"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Link, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Building2,
  CreditCard,
  PiggyBank
} from 'lucide-react'
import Image from 'next/image'

interface AccountLinkingProps {
  userId: string
  onAccountsLinked: () => void
}

export default function AccountLinking({ userId, onAccountsLinked }: AccountLinkingProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [linkToken, setLinkToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Initialize Plaid Link
  useEffect(() => {
    if (userId && !linkToken) {
      createLinkToken()
    }
  }, [userId, linkToken])

  const createLinkToken = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/api/plaid/create-link-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })

      if (!response.ok) {
        throw new Error('Failed to create link token')
      }

      const data = await response.json()
      setLinkToken(data.link_token)
    } catch (err) {
      setError('Failed to initialize account linking. Please try again.')
      console.error('Error creating link token:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePlaidSuccess = async (publicToken: string, metadata: any) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch('/api/plaid/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicToken }),
      })

      if (!response.ok) {
        throw new Error('Failed to link accounts')
      }

      const data = await response.json()
      
      // Store access token securely (in production, this should be encrypted)
      localStorage.setItem('moneypal-access-token', data.access_token)
      localStorage.setItem('moneypal-item-id', data.item_id)
      
      setSuccess(true)
      
      // Notify parent component
      setTimeout(() => {
        onAccountsLinked()
      }, 2000)
    } catch (err) {
      setError('Failed to link accounts. Please try again.')
      console.error('Error exchanging token:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePlaidExit = (err: any, metadata: any) => {
    if (err) {
      setError('Account linking was cancelled or failed. Please try again.')
      console.error('Plaid exit error:', err)
    }
  }

  // Load Plaid Link script
  useEffect(() => {
    if (linkToken) {
      const script = document.createElement('script')
      script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js'
      script.async = true
      script.onload = () => {
        // @ts-ignore - Plaid types
        if (window.Plaid) {
          // @ts-ignore - Plaid types
          const handler = window.Plaid.create({
            token: linkToken,
            onSuccess: handlePlaidSuccess,
            onExit: handlePlaidExit,
          })
          
          // Store handler for later use
          // @ts-ignore - Plaid types
          window.plaidHandler = handler
        }
      }
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [linkToken])

  const openPlaidLink = () => {
    // @ts-ignore - Plaid types
    if (window.plaidHandler) {
      // @ts-ignore - Plaid types
      window.plaidHandler.open()
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="mx-auto w-16 h-16 bg-robot-green rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Accounts Linked Successfully! 🎉
        </h3>
        <p className="text-gray-600 mb-4">
          Your financial accounts are now connected to MoneyPal. We're analyzing your data to provide personalized insights.
        </p>
        <div className="flex items-center justify-center space-x-2 text-robot-green">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">Setting up your financial dashboard...</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6"
    >
      <div className="text-center mb-8">
        <div className="mx-auto w-20 h-20 bg-robot-blue/10 rounded-full flex items-center justify-center mb-4">
          <Image
            src="/moneypal/robotavatar.PNG"
            alt="MoneyPal Robot"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Connect Your Financial Accounts
        </h2>
        <p className="text-gray-600">
          Link your bank accounts, credit cards, and investment accounts to get started with MoneyPal's AI-powered financial insights.
        </p>
      </div>

      {/* Security Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Bank-Level Security</h4>
            <p className="text-sm text-blue-700">
              Your financial data is encrypted and secure. We use Plaid, the same technology trusted by thousands of financial institutions.
            </p>
          </div>
        </div>
      </div>

      {/* Account Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <Building2 className="w-8 h-8 text-robot-blue mx-auto mb-2" />
          <h4 className="text-gray-900">Bank Accounts</h4>
          <p className="text-sm text-gray-600">Checking & Savings</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <CreditCard className="w-8 h-8 text-robot-green mx-auto mb-2" />
          <h4 className="font-medium text-gray-900">Credit Cards</h4>
          <p className="text-sm text-gray-600">All major providers</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <PiggyBank className="w-8 h-8 text-robot-purple mx-auto mb-2" />
          <h4 className="font-medium text-gray-900">Investments</h4>
          <p className="text-sm text-gray-600">Portfolios & 401(k)s</p>
        </div>
      </div>

      {/* Error Display */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800">{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={openPlaidLink}
          disabled={isLoading || !linkToken}
          className={`
            inline-flex items-center space-x-2 px-8 py-3 rounded-lg font-medium text-white
            ${isLoading || !linkToken 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-robot-blue hover:bg-robot-blue/90 transform hover:scale-105 transition-all'
            }
          `}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Setting up...</span>
            </>
          ) : (
            <>
              <Link className="w-5 h-5" />
              <span>Connect Accounts</span>
            </>
          )}
        </button>
        
        {!linkToken && !isLoading && (
          <p className="text-sm text-gray-500 mt-2">
            Initializing secure connection...
          </p>
        )}
      </div>

      {/* Benefits */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-robot-green/5 rounded-lg">
          <h4 className="font-medium text-robot-green mb-2">Real-time Sync</h4>
          <p className="text-sm text-gray-600">
            Your financial data stays up-to-date automatically
          </p>
        </div>
        <div className="p-4 bg-robot-purple/5 rounded-lg">
          <h4 className="font-medium text-robot-purple mb-2">AI Insights</h4>
          <p className="text-sm text-gray-600">
            Get personalized financial advice and spending analysis
          </p>
        </div>
      </div>
    </motion.div>
  )
}
