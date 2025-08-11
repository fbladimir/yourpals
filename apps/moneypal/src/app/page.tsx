import { redirect } from 'next/navigation'
import { getCurrentUser } from '../lib/auth'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  console.log('🏠 HomePage: Starting...')
  
  console.log('🏠 HomePage: Calling getCurrentUser...')
  const user = await getCurrentUser()
  console.log('🏠 HomePage: getCurrentUser result:', user ? `User ID: ${user.id}` : 'null')
  
  if (user) {
    console.log('🏠 HomePage: User authenticated, redirecting to dashboard')
    // User is authenticated, redirect to dashboard
    redirect('/dashboard')
  }
  
  console.log('🏠 HomePage: No user, redirecting to welcome')
  // User is not authenticated, redirect to welcome
  redirect('/welcome')
}
