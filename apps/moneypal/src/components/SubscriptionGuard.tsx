'use client'

import { motion } from 'framer-motion'
import { Crown, Lock, Sparkles } from 'lucide-react'

interface SubscriptionGuardProps {
  user: {
    subscription: {
      plan: 'FREE' | 'MONEYPAL_PRO' | 'ALL_ACCESS'
      status: string
    } | null
  } | null
  children: React.ReactNode
  requiredPlan?: 'FREE' | 'MONEYPAL_PRO' | 'ALL_ACCESS'
  showUpsell?: boolean
}

export function SubscriptionGuard({ 
  user, 
  children, 
  requiredPlan = 'FREE',
  showUpsell = true 
}: SubscriptionGuardProps) {
  const hasAccess = user?.subscription && 
    (user.subscription.plan === 'ALL_ACCESS' || 
     (user.subscription.plan === 'MONEYPAL_PRO' && requiredPlan !== 'ALL_ACCESS') ||
     requiredPlan === 'FREE')

  const isFreeUser = user?.subscription?.plan === 'FREE'
  const isProUser = user?.subscription?.plan === 'MONEYPAL_PRO'

  if (!hasAccess) {
    return (
      <div className="relative">
        {/* Blurred content for free users */}
        <div className={`${isFreeUser ? 'blur-sm' : ''} transition-all duration-300`}>
          {children}
        </div>
        
        {/* Upsell banner for free users */}
        {isFreeUser && showUpsell && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-xl"
          >
            <div className="text-center text-white p-6 max-w-md">
              <div className="flex justify-center mb-4">
                <Crown className="w-12 h-12 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unlock Pro Features</h3>
              <p className="text-blue-100 mb-6">
                Get unlimited transactions, advanced insights, and priority support with MoneyPal Pro.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start MoneyPal Pro
                </button>
                <button className="w-full bg-white/20 text-white font-medium py-2 px-4 rounded-lg hover:bg-white/30 transition-colors">
                  Learn about All-Access
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    )
  }

  return <>{children}</>
}

/**
 * Component to show a lock icon for pro-only features
 */
export function ProFeatureLock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="text-center text-white">
          <Lock className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm font-medium">Pro Feature</p>
        </div>
      </div>
    </div>
  )
}
