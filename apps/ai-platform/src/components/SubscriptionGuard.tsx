'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Lock, Crown, Zap, Star } from 'lucide-react';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { SUBSCRIPTION_PLANS } from '@/lib/stripe';

interface SubscriptionGuardProps {
  children: ReactNode;
  requiredPlan: keyof typeof SUBSCRIPTION_PLANS;
  fallback?: ReactNode;
  showUpgradePrompt?: boolean;
  className?: string;
}

export const SubscriptionGuard: React.FC<SubscriptionGuardProps> = ({
  children,
  requiredPlan,
  fallback,
  showUpgradePrompt = true,
  className = '',
}) => {
  const { subscription, hasAccess, isLoading } = useSubscription();

  // Show loading state
  if (isLoading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-white/5 rounded-lg h-32 flex items-center justify-center">
          <div className="text-white/40">Loading...</div>
        </div>
      </div>
    );
  }

  // If user has access, show the content
  if (subscription && hasAccess(requiredPlan)) {
    return <>{children}</>;
  }

  // If custom fallback is provided, use it
  if (fallback) {
    return <>{fallback}</>;
  }

  // Show upgrade prompt
  if (showUpgradePrompt) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative overflow-hidden rounded-2xl ${className}`}
      >
        {/* Blurred background content */}
        <div className="blur-sm pointer-events-none">
          {children}
        </div>
        
        {/* Upgrade overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center p-6 max-w-sm">
            {/* Plan Icon */}
            <div className="flex justify-center mb-4">
              {requiredPlan === 'FREE' && <Star className="w-12 h-12 text-gray-400" />}
              {requiredPlan === 'PRO' && <Zap className="w-12 h-12 text-blue-500" />}
              {requiredPlan === 'ALL_ACCESS' && <Crown className="w-12 h-12 text-purple-500" />}
            </div>
            
            {/* Lock Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 rounded-full p-3">
                <Lock className="w-6 h-6 text-white/60" />
              </div>
            </div>
            
            {/* Message */}
            <h3 className="text-xl font-bold text-white mb-2">
              {requiredPlan === 'FREE' ? 'Basic Access' : `${SUBSCRIPTION_PLANS[requiredPlan].name} Feature`}
            </h3>
            
            <p className="text-white/70 text-sm mb-4">
              {requiredPlan === 'FREE' 
                ? 'This feature is available to all users.'
                : `Upgrade to ${SUBSCRIPTION_PLANS[requiredPlan].name} to unlock this feature and more.`
              }
            </p>
            
            {/* Upgrade Button */}
            {requiredPlan !== 'FREE' && (
              <button
                onClick={() => {
                  // TODO: Navigate to upgrade page or open upgrade modal
                  console.log('Navigate to upgrade page');
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Upgrade Now
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // If no upgrade prompt and no access, show nothing
  return null;
};

// Convenience components for specific subscription levels
export const ProFeature: React.FC<Omit<SubscriptionGuardProps, 'requiredPlan'>> = (props) => (
  <SubscriptionGuard requiredPlan="PRO" {...props} />
);

export const AllAccessFeature: React.FC<Omit<SubscriptionGuardProps, 'requiredPlan'>> = (props) => (
  <SubscriptionGuard requiredPlan="ALL_ACCESS" {...props} />
);

// Component to show different content based on subscription level
interface ConditionalContentProps {
  children: ReactNode;
  freeContent?: ReactNode;
  proContent?: ReactNode;
  allAccessContent?: ReactNode;
  className?: string;
}

export const ConditionalContent: React.FC<ConditionalContentProps> = ({
  children,
  freeContent,
  proContent,
  allAccessContent,
  className = '',
}) => {
  const { subscription, hasAccess } = useSubscription();

  if (!subscription) return null;

  // Show content based on highest accessible plan
  if (hasAccess('ALL_ACCESS') && allAccessContent) {
    return <div className={className}>{allAccessContent}</div>;
  }
  
  if (hasAccess('PRO') && proContent) {
    return <div className={className}>{proContent}</div>;
  }
  
  if (freeContent) {
    return <div className={className}>{freeContent}</div>;
  }

  // Default fallback
  return <div className={className}>{children}</div>;
};
