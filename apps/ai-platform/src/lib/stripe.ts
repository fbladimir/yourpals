import { loadStripe } from '@stripe/stripe-js';

// Client-side Stripe instance
export const getStripe = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error('Missing Stripe publishable key');
  }
  return loadStripe(publishableKey);
};

// Stripe configuration constants
export const STRIPE_CONFIG = {
  // Product IDs (replace with actual IDs from your Stripe dashboard)
  PRODUCTS: {
    FREE: 'prod_SrbZmo7POvNQwV', // Free Plan
    STARTER: 'prod_SrcrgkQ1Vjs5pg', // Starter Plan
    PRO: 'prod_SrcsGhFdxHtw95', // Pro Plan
    ALL_ACCESS: 'prod_SrbbmHkBdjFcWu', // All Access Plan
  },
  
  // Price IDs (replace with actual IDs from your Stripe dashboard)
  PRICES: {
    STARTER_MONTHLY: 'price_1RvtcCPB044dbGNMhsglTuZw', // Starter Plan ($9.99/month + 7-day trial)
    STARTER_YEARLY: 'price_starter_yearly', // TODO: Create yearly price for Starter Plan (optional)
    PRO_MONTHLY: 'price_1RvtdEPB044dbGNMFVPJZA8r', // Pro Plan ($19.99/month + 7-day trial)
    PRO_YEARLY: 'price_pro_yearly', // TODO: Create yearly price for Pro Plan (optional)
    ALL_ACCESS_MONTHLY: 'price_1RvsNyPB044dbGNMpogQpeD7', // All Access Plan ($49.99/month + 7-day trial)
    ALL_ACCESS_YEARLY: 'price_all_access_yearly', // TODO: Create yearly price for All Access Plan (optional)
  },
  
  // Trial period in days
  TRIAL_DAYS: 7,
  
  // Webhook endpoint
  WEBHOOK_ENDPOINT: '/api/webhooks/stripe',
} as const;

// Subscription plan mapping
export const SUBSCRIPTION_PLANS = {
  FREE: {
    id: 'FREE',
    name: 'Free',
    price: 0,
    features: [
      'Basic AI Pals access',
      'Limited features',
      'Community support',
      '7-day trial of Pro features',
    ],
    limitations: [
      '7-day trial period',
      'Basic AI capabilities',
      'Standard response times',
    ],
  },
  STARTER: {
    id: 'STARTER',
    name: 'Starter',
    price: 9.99,
    interval: 'month',
    features: [
      'All Free features',
      'Access to 2 AI Pals',
      'Unlimited queries',
      'Priority support',
      'Custom AI training',
      '7-day free trial',
    ],
    benefits: [
      'Great for personal use',
      'Affordable pricing',
      'Essential features',
      'Easy upgrade path',
    ],
  },
  PRO: {
    id: 'PRO',
    name: 'Pro',
    price: 19.99,
    interval: 'month',
    features: [
      'All Starter features',
      'Access to all AI Pals',
      'Advanced AI customization',
      'API access',
      'Dedicated support',
      'Team collaboration',
      '7-day free trial',
    ],
    benefits: [
      'Unlimited AI interactions',
      'Advanced analytics',
      'Priority customer support',
      'Early access to new features',
    ],
  },
  ALL_ACCESS: {
    id: 'ALL_ACCESS',
    name: 'All Access',
    price: 49.99,
    interval: 'month',
    features: [
      'Everything in Pro',
      'Enterprise features',
      'Dedicated support',
      'Custom integrations',
      'White-label options',
    ],
    benefits: [
      'All Pro features',
      'Enterprise-grade support',
      'Custom AI model training',
      'Dedicated account manager',
      'SLA guarantees',
    ],
  },
} as const;

// Helper function to get plan by ID
export const getPlanById = (planId: string) => {
  return Object.values(SUBSCRIPTION_PLANS).find(plan => plan.id === planId);
};

// Helper function to check if user has access to a plan
export const hasPlanAccess = (userPlan: string, requiredPlan: string) => {
  const planHierarchy = {
    'FREE': 0,
    'STARTER': 1,
    'PRO': 2,
    'ALL_ACCESS': 3,
  };
  
  return planHierarchy[userPlan as keyof typeof planHierarchy] >= 
         planHierarchy[requiredPlan as keyof typeof planHierarchy];
};

// Helper function to get Stripe price ID for a plan
export const getStripePriceId = (planId: string, interval: 'month' | 'year' = 'month') => {
  const priceMap = {
    'STARTER': {
      month: STRIPE_CONFIG.PRICES.STARTER_MONTHLY,
      year: STRIPE_CONFIG.PRICES.STARTER_YEARLY,
    },
    'PRO': {
      month: STRIPE_CONFIG.PRICES.PRO_MONTHLY,
      year: STRIPE_CONFIG.PRICES.PRO_YEARLY,
    },
    'ALL_ACCESS': {
      month: STRIPE_CONFIG.PRICES.ALL_ACCESS_MONTHLY,
      year: STRIPE_CONFIG.PRICES.ALL_ACCESS_YEARLY,
    },
  };
  
  return priceMap[planId as keyof typeof priceMap]?.[interval] || null;
};
