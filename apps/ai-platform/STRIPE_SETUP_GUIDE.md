# 🚀 Stripe Subscription Infrastructure Setup Guide

## 📋 **Overview**
This guide will walk you through setting up the complete Stripe subscription infrastructure for YourPals AI Platform, including the 7-day trial system and feature gating.

## 🎯 **What We've Built**

### ✅ **Completed Components:**
1. **Stripe Configuration** (`src/lib/stripe.ts`)
   - Server and client-side Stripe instances
   - Subscription plan definitions
   - Helper functions for plan access

2. **API Routes**
   - `/api/webhooks/stripe` - Webhook handler for subscription events
   - `/api/stripe/create-checkout-session` - Creates Stripe checkout sessions
   - `/api/stripe/create-portal-session` - Creates customer portal sessions

3. **React Components**
   - `SubscriptionContext` - Manages subscription state throughout the app
   - `SubscriptionUpgrade` - Plan selection and upgrade interface
   - `SubscriptionGuard` - Controls access to features based on subscription
   - `SubscriptionsPage` - Complete subscription management page

4. **Subscription Plans**
   - **FREE**: 7-day trial with full access, then limited features
   - **PRO**: $19.99/month with advanced features
   - **ALL_ACCESS**: $49.99/month with enterprise features

## 🔧 **Setup Steps**

### **Step 1: Stripe Account Setup**
1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com) and create an account
   - Complete account verification and enable payments

2. **Get API Keys**
   - Navigate to Developers → API Keys
   - Copy your **Publishable Key** and **Secret Key**
   - Note: Use test keys for development, live keys for production

### **Step 2: Create Products & Prices in Stripe**
1. **Create Products**
   - Go to Products → Add Product
   - Create three products:
     - **Free Tier** (ID: `prod_free_tier`)
     - **Pro Tier** (ID: `prod_pro_tier`)
     - **All Access Tier** (ID: `prod_all_access_tier`)

2. **Create Prices**
   - For each product, create pricing:
     - **Pro Monthly**: $19.99/month (ID: `price_pro_monthly`)
     - **Pro Yearly**: $199.99/year (ID: `price_pro_yearly`)
     - **All Access Monthly**: $49.99/month (ID: `price_all_access_monthly`)
     - **All Access Yearly**: $499.99/year (ID: `price_all_access_yearly`)

3. **Configure Trial Period**
   - Set trial period to 7 days for all subscription prices
   - Enable trial_end behavior

### **Step 3: Environment Variables**
1. **Copy Environment Template**
   ```bash
   cp env.stripe.example .env.local
   ```

2. **Fill in Your Keys**
   ```env
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   NEXT_PUBLIC_APP_URL=http://localhost:4000
   ```

### **Step 4: Webhook Configuration**
1. **Create Webhook Endpoint**
   - Go to Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - For local development: Use Stripe CLI or ngrok

2. **Select Events**
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `customer.subscription.trial_will_end`

3. **Get Webhook Secret**
   - Copy the webhook signing secret
   - Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

### **Step 5: Database Integration**
1. **Update Database Schema**
   - The Prisma schema already includes subscription models
   - Run migrations if needed:
   ```bash
   cd packages/core
   npx prisma migrate dev
   ```

2. **Connect Webhook Handlers**
   - Update the webhook handlers in `/api/webhooks/stripe/route.ts`
   - Implement database updates for subscription events

### **Step 6: Test the Integration**
1. **Test Checkout Flow**
   - Navigate to `/subscriptions` page
   - Try upgrading to Pro plan
   - Verify Stripe checkout opens

2. **Test Webhooks**
   - Use Stripe CLI to test webhook events
   - Verify subscription status updates

## 🧪 **Testing with Stripe CLI**

### **Install Stripe CLI**
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows
# Download from https://github.com/stripe/stripe-cli/releases

# Linux
# Download from https://github.com/stripe/stripe-cli/releases
```

### **Login to Stripe**
```bash
stripe login
```

### **Forward Webhooks to Local**
```bash
stripe listen --forward-to localhost:4000/api/webhooks/stripe
```

### **Test Events**
```bash
stripe trigger customer.subscription.created
stripe trigger invoice.payment_succeeded
```

## 🔒 **Feature Gating Implementation**

### **Using SubscriptionGuard Component**
```tsx
import { SubscriptionGuard, ProFeature, AllAccessFeature } from '@/components/SubscriptionGuard';

// Basic usage
<SubscriptionGuard requiredPlan="PRO">
  <AdvancedFeature />
</SubscriptionGuard>

// Convenience components
<ProFeature>
  <ProOnlyFeature />
</ProFeature>

<AllAccessFeature>
  <EnterpriseFeature />
</AllAccessFeature>
```

### **Using ConditionalContent Component**
```tsx
import { ConditionalContent } from '@/components/SubscriptionGuard';

<ConditionalContent
  freeContent={<BasicFeature />}
  proContent={<AdvancedFeature />}
  allAccessContent={<EnterpriseFeature />}
>
  <DefaultFeature />
</ConditionalContent>
```

## 📱 **User Experience Flow**

### **New User Journey:**
1. **Sign Up** → Automatically gets FREE plan with 7-day trial
2. **Trial Period** → Full access to all features
3. **Trial Ending** → Notification and upgrade prompts
4. **Post-Trial** → Limited access, upgrade prompts throughout app

### **Upgrade Flow:**
1. **Select Plan** → Choose Pro or All Access
2. **Stripe Checkout** → Secure payment processing
3. **Immediate Access** → Features unlocked instantly
4. **Billing Management** → Customer portal access

## 🚨 **Security Considerations**

### **Webhook Security**
- Always verify webhook signatures
- Use HTTPS in production
- Keep webhook secrets secure

### **API Security**
- Server-side Stripe operations only
- Never expose secret keys to client
- Validate all input data

### **User Data**
- Encrypt sensitive subscription data
- Implement proper access controls
- Regular security audits

## 🔄 **Next Steps After Setup**

### **Phase 2.5 Completion:**
1. **Connect Database** - Update webhook handlers to persist subscription data
2. **Real-time Updates** - Implement subscription status synchronization
3. **Email Notifications** - Send trial ending and payment failure emails
4. **Analytics** - Track conversion rates and subscription metrics

### **Phase 3 Preparation:**
1. **Feature Gating** - Implement subscription-based access control
2. **App Integration** - Connect subscription status to app features
3. **User Onboarding** - Optimize trial-to-paid conversion

## 📞 **Support & Troubleshooting**

### **Common Issues:**
1. **Webhook Not Receiving Events**
   - Check endpoint URL and webhook secret
   - Verify Stripe CLI forwarding

2. **Checkout Not Opening**
   - Verify publishable key
   - Check browser console for errors

3. **Subscription Status Not Updating**
   - Verify webhook handlers
   - Check database connections

### **Useful Resources:**
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Checkout Integration](https://stripe.com/docs/checkout)

---

## 🎉 **You're Ready!**

Once you complete this setup, you'll have a fully functional subscription system with:
- ✅ 7-day free trial for new users
- ✅ Secure payment processing
- ✅ Feature gating based on subscription level
- ✅ Professional billing management
- ✅ Webhook-driven real-time updates

**Next:** Test the integration and move to Phase 3: App Integration! 🚀
