import { redirect } from 'next/navigation'
import { getCurrentUser } from '../../lib/auth'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const user = await getCurrentUser()
    
    if (!user) {
      redirect('/sign-in')
    }

    return (
      <div className="min-h-screen bg-gray-900">
        {children}
      </div>
    )
  } catch (error) {
    console.error('Error in protected layout:', error)
    redirect('/sign-in')
  }
}
