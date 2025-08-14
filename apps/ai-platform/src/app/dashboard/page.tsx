'use client'

import Dashboard from '@/components/Dashboard'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()

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
