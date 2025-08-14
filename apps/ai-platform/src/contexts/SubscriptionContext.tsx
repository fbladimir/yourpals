'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { SUBSCRIPTION_PLANS, hasPlanAccess } from '@/lib/stripe';

export interface Subscription {
  id: string;
  plan: keyof typeof SUBSCRIPTION_PLANS;
  status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'trialing';
  currentPeriodEnd: Date | null;
  trialEnd: Date | null;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

interface SubscriptionContextType {
  subscription: Subscription | null;
  isLoading: boolean;
  error: string | null;
  refreshSubscription: () => Promise<void>;
  hasAccess: (requiredPlan: keyof typeof SUBSCRIPTION_PLANS) => boolean;
  isTrialActive: boolean;
  isTrialExpired: boolean;
  daysUntilTrialEnd: number | null;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate trial status
  const isTrialActive = subscription?.status === 'trialing';
  const isTrialExpired = subscription?.trialEnd ? new Date() > subscription.trialEnd : false;
  
  const daysUntilTrialEnd = subscription?.trialEnd 
    ? Math.ceil((subscription.trialEnd.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null;

  const fetchSubscription = async () => {
    if (!user) {
      setSubscription(null);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // TODO: Replace with actual API call to fetch user subscription
      // For now, we'll simulate a default subscription
      const mockSubscription: Subscription = {
        id: 'mock-subscription-id',
        plan: 'FREE',
        status: 'trialing',
        currentPeriodEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        trialEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      };

      setSubscription(mockSubscription);
    } catch (err) {
      console.error('Error fetching subscription:', err);
      setError('Failed to load subscription information');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshSubscription = async () => {
    await fetchSubscription();
  };

  const hasAccess = (requiredPlan: keyof typeof SUBSCRIPTION_PLANS): boolean => {
    if (!subscription) return false;
    return hasPlanAccess(subscription.plan, requiredPlan);
  };

  useEffect(() => {
    fetchSubscription();
  }, [user]);

  const value: SubscriptionContextType = {
    subscription,
    isLoading,
    error,
    refreshSubscription,
    hasAccess,
    isTrialActive,
    isTrialExpired,
    daysUntilTrialEnd,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
