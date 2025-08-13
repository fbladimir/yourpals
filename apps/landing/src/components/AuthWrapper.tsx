'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthWrapperProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export default function AuthWrapper({ 
  children, 
  requireAuth = false, 
  redirectTo 
}: AuthWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Mock auth state for now - will be replaced with Supabase auth
    setIsLoaded(true);
    // For demo purposes, always show as not authenticated
    setUser(null);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (requireAuth && !user) {
      // User needs to be authenticated but isn't
      setIsRedirecting(true);
      router.replace('/sign-in');
      return;
    }

    if (!requireAuth && user && redirectTo) {
      // User is authenticated but shouldn't be on this page
      setIsRedirecting(true);
      router.replace(redirectTo);
      return;
    }
  }, [isLoaded, user, requireAuth, redirectTo, router]);

  // Show loading while checking auth state
  if (!isLoaded || isRedirecting) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          <p className="text-gray-300">
            {!isLoaded ? 'Loading...' : 'Redirecting...'}
          </p>
        </div>
      </div>
    );
  }

  // Don't render children if redirecting
  if (isRedirecting) {
    return null;
  }

  return <>{children}</>;
}
