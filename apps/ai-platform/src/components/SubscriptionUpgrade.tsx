'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react';
import { SUBSCRIPTION_PLANS, hasPlanAccess } from '@/lib/stripe';
import { useSubscription } from '@/contexts/SubscriptionContext';

interface SubscriptionUpgradeProps {
  className?: string;
}

export const SubscriptionUpgrade: React.FC<SubscriptionUpgradeProps> = ({ className = '' }) => {
  const { subscription, hasAccess } = useSubscription();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof SUBSCRIPTION_PLANS | null>(null);

  const handleUpgrade = async (planId: keyof typeof SUBSCRIPTION_PLANS) => {
    if (planId === 'FREE') return;
    
    setSelectedPlan(planId);
    setIsLoading(true);

    try {
      // TODO: Implement actual Stripe checkout
      // For now, we'll just simulate the process
      console.log('Upgrading to plan:', planId);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Redirect to Stripe checkout
      alert(`Redirecting to checkout for ${SUBSCRIPTION_PLANS[planId].name} plan...`);
      
    } catch (error) {
      console.error('Error upgrading subscription:', error);
      alert('Failed to upgrade subscription. Please try again.');
    } finally {
      setIsLoading(false);
      setSelectedPlan(null);
    }
  };

  const getPlanIcon = (planId: keyof typeof SUBSCRIPTION_PLANS) => {
    switch (planId) {
      case 'FREE':
        return <Star className="w-6 h-6 text-gray-400" />;
      case 'PRO':
        return <Zap className="w-6 h-6 text-blue-500" />;
      case 'ALL_ACCESS':
        return <Crown className="w-6 h-6 text-purple-500" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getPlanColor = (planId: keyof typeof SUBSCRIPTION_PLANS) => {
    switch (planId) {
      case 'FREE':
        return 'from-gray-500 to-gray-600';
      case 'PRO':
        return 'from-blue-500 to-blue-600';
      case 'ALL_ACCESS':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (!subscription) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Choose Your Plan
        </h2>
        <p className="text-white/60 text-lg">
          Unlock the full potential of YourPals AI Platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(SUBSCRIPTION_PLANS).map(([planId, plan]) => {
          const isCurrentPlan = subscription.plan === planId;
          const isUpgradeable = !hasAccess(planId as keyof typeof SUBSCRIPTION_PLANS);
          const isSelected = selectedPlan === planId;

          return (
            <motion.div
              key={planId}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-2xl p-6 ring-1 transition-all duration-300 ${
                isCurrentPlan
                  ? 'bg-gradient-to-br from-white/10 to-white/20 ring-white/30'
                  : 'bg-gradient-to-br from-white/5 to-white/10 ring-white/20 hover:ring-white/30'
              }`}
            >
              {/* Current Plan Badge */}
              {isCurrentPlan && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Current Plan
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {getPlanIcon(planId as keyof typeof SUBSCRIPTION_PLANS)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  ${plan.price}
                  {'interval' in plan && plan.interval && (
                    <span className="text-lg text-white/60">/{plan.interval}</span>
                  )}
                </div>
                {planId === 'FREE' && (
                  <p className="text-sm text-white/60">7-day trial included</p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleUpgrade(planId as keyof typeof SUBSCRIPTION_PLANS)}
                disabled={isLoading || isCurrentPlan}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isCurrentPlan
                    ? 'bg-white/20 text-white/60 cursor-not-allowed'
                    : isUpgradeable
                    ? `bg-gradient-to-r ${getPlanColor(planId as keyof typeof SUBSCRIPTION_PLANS)} text-white hover:shadow-lg hover:shadow-blue-500/25`
                    : 'bg-white/10 text-white/60 cursor-not-allowed'
                }`}
              >
                {isLoading && isSelected ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : isCurrentPlan ? (
                  'Current Plan'
                ) : isUpgradeable ? (
                  <>
                    {planId === 'FREE' ? 'Get Started' : 'Upgrade Now'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  'Plan Unavailable'
                )}
              </button>

              {/* Limitations for Free Plan */}
              {planId === 'FREE' && 'limitations' in plan && plan.limitations && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50 text-center">
                    {plan.limitations.join(' • ')}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Trial Status */}
      {subscription.status === 'trialing' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 ring-1 ring-blue-500/20 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            🎉 You're on a Free Trial!
          </h3>
          <p className="text-white/70 mb-4">
            Experience all Pro features for free. Upgrade anytime to continue enjoying the full experience.
          </p>
          <div className="text-sm text-white/60">
            Trial ends in {Math.ceil((subscription.trialEnd?.getTime() || 0 - Date.now()) / (1000 * 60 * 60 * 24))} days
          </div>
        </motion.div>
      )}
    </div>
  );
};
