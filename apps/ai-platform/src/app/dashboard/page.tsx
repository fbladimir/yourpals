'use client'

import Dashboard from '@/components/Dashboard'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const authData = useAuth()
  const router = useRouter()

  // Add safety check for auth hook
  if (!authData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-400">Loading authentication...</p>
        </div>
      </div>
    )
  }

  const { user, signOut } = authData

  // Provide default props for the Dashboard component
  const defaultProps = {
    userGoals: ['finance', 'fitness', 'productivity', 'business'],
    isBusiness: false,
    selectedGoal: 'finance',
    selectedPlan: 'PRO',
    onSignOut: async () => {
      await signOut()
      router.push('/')
    }
  }

  return <Dashboard {...defaultProps} />
}
