# 🚀 Onboarding Stripe Integration Setup Guide

## 📋 **Overview**
This guide covers the complete Stripe integration in the onboarding flow, allowing users to select and pay for plans during signup.

## 🎯 **What We've Implemented**

### ✅ **Enhanced Onboarding Flow:**
1. **Step 4**: Plan selection with real Stripe integration
2. **Payment Processing**: Stripe checkout for paid plans
3. **Success Page**: Beautiful payment success confirmation
4. **Seamless Flow**: No interruption to user experience

### ✅ **Updated Components:**
- **PlanSelection**: Now integrates with Stripe for real payments
- **Payment Success Page**: Confirms successful payments
- **Stripe Configuration**: Updated with new plan structure
- **Error Handling**: Comprehensive error handling and loading states

### ✅ **New Plan Structure:**
- **FREE**: $0 (7-day trial of Pro features)
- **STARTER**: $9.99/month (2 AI Pals, unlimited queries)
- **PRO**: $19.99/month (All AI Pals, advanced features)
- **ALL_ACCESS**: $49.99/month (Enterprise features)

## 🔧 **Setup Steps**

### **Step 1: Create Stripe Products & Prices**

#### **1.1 Create Products in Stripe Dashboard:**
- Go to [Stripe Dashboard](https://dashboard.stripe.com/products)
- Create these products:

**Free Tier:**
- Name: `Free Tier`
- ID: `prod_free_tier`
- Description: `Basic access with 7-day trial`

**Starter Tier:**
- Name: `Starter Plan`
- ID: `prod_starter_tier`
- Description: `Great for personal use`

**Pro Tier:**
- Name: `Pro Plan`
- ID: `prod_pro_tier`
- Description: `For power users & professionals`

**All Access Tier:**
- Name: `All Access Plan`
- ID: `prod_all_access_tier`
- Description: `Enterprise features`

#### **1.2 Create Prices for Each Product:**

**Starter Plan:**
- Product: `prod_starter_tier`
- Price: $9.99/month
- ID: `price_starter_monthly`
- Billing: Recurring monthly
- Trial: 7 days

**Pro Plan:**
- Product: `prod_pro_tier`
- Price: $19.99/month
- ID: `price_pro_monthly`
- Billing: Recurring monthly
- Trial: 7 days

**All Access Plan:**
- Product: `prod_all_access_tier`
- Price: $49.99/month
- ID: `price_all_access_monthly`
- Billing: Recurring monthly
- Trial: 7 days

### **Step 2: Update Environment Variables**

Make sure your `.env.local` has all required Stripe keys:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:4000
```

### **Step 3: Configure Webhooks**

#### **3.1 Create Webhook Endpoint:**
- Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
- Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
- For local testing: Use Stripe CLI

#### **3.2 Select Events:**
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`
- `customer.subscription.trial_will_end`

#### **3.3 Get Webhook Secret:**
- Copy the webhook signing secret
- Add to `.env.local` as `STRIPE_WEBHOOK_SECRET`

### **Step 4: Test the Integration**

#### **4.1 Test Plan Selection:**
1. **Start onboarding** at `/onboarding`
2. **Navigate to Step 4** (Plan Selection)
3. **Select a paid plan** (Starter or Pro)
4. **Verify Stripe checkout** opens

#### **4.2 Test Payment Flow:**
1. **Use test card**: `4242 4242 4242 4242`
2. **Complete payment** in Stripe
3. **Verify redirect** to payment success page
4. **Check auto-redirect** to dashboard

#### **4.3 Test Error Handling:**
1. **Cancel payment** in Stripe
2. **Verify return** to plan selection
3. **Test invalid cards** for error handling

## 🧪 **Testing with Stripe CLI**

### **Install Stripe CLI:**
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows/Linux
# Download from https://github.com/stripe/stripe-cli/releases
```

### **Login and Test:**
```bash
# Login to Stripe
stripe login

# Forward webhooks to local
stripe listen --forward-to localhost:4000/api/webhooks/stripe

# Test events
stripe trigger customer.subscription.created
stripe trigger invoice.payment_succeeded
```

## 🔄 **User Flow**

### **Complete Onboarding Journey:**

1. **User Signup** → Authentication
2. **Goal Selection** → Choose primary goal
3. **AI Personality** → Select specialized bot
4. **Use Case** → Personal vs Business
5. **Plan Selection** → Choose plan with Stripe integration
6. **Payment Processing** → Stripe checkout (if paid plan)
7. **Success Confirmation** → Payment success page
8. **Dashboard Access** → Full platform access

### **Plan Selection Logic:**

- **FREE Plan**: Immediate selection, no payment
- **Paid Plans**: Stripe checkout with 7-day trial
- **Payment Success**: Redirect to success page
- **Payment Failure**: Return to plan selection
- **Trial Period**: Full access for 7 days

## 🎨 **UI/UX Features**

### **Enhanced Plan Selection:**
- **Loading States**: Show processing during payment initiation
- **Error Handling**: Display payment errors clearly
- **Disabled States**: Prevent multiple selections
- **Visual Feedback**: Loading spinners and status indicators

### **Payment Success Page:**
- **Success Animation**: Celebratory checkmark with pulse
- **Plan Confirmation**: Show selected plan and features
- **Next Steps**: Clear guidance on what to do next
- **Auto-redirect**: Automatic navigation to dashboard
- **Action Buttons**: Direct access to dashboard and subscription management

## 🔒 **Security Features**

### **Payment Security:**
- **Server-side Stripe**: All sensitive operations on server
- **Webhook Verification**: Secure webhook signature validation
- **User Authentication**: Verify user before payment
- **Input Validation**: Validate all payment parameters

### **Error Handling:**
- **Graceful Failures**: Handle payment errors without crashing
- **User Feedback**: Clear error messages for users
- **Retry Mechanisms**: Allow users to retry failed payments
- **Fallback Options**: Provide alternative paths for errors

## 📱 **Mobile Optimization**

### **Responsive Design:**
- **Mobile-first**: Optimized for mobile devices
- **Touch-friendly**: Large buttons and touch targets
- **Horizontal Scrolling**: Mobile-optimized plan selection
- **Loading States**: Clear feedback on mobile devices

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **Stripe Checkout Not Opening:**
   - Check publishable key in environment
   - Verify API endpoint is working
   - Check browser console for errors

2. **Webhook Not Receiving Events:**
   - Verify webhook endpoint URL
   - Check webhook secret in environment
   - Use Stripe CLI for local testing

3. **Payment Success Page Not Loading:**
   - Check success URL configuration
   - Verify route exists (`/onboarding/payment-success`)
   - Check for JavaScript errors

4. **Plan Selection Errors:**
   - Verify Stripe price IDs are correct
   - Check plan configuration in code
   - Ensure user is authenticated

### **Debug Steps:**
1. **Check Browser Console** for JavaScript errors
2. **Verify Network Requests** in browser dev tools
3. **Check Stripe Dashboard** for webhook events
4. **Review Server Logs** for API errors
5. **Test with Stripe CLI** for local development

## 🔄 **Next Steps After Setup**

### **Phase 2.5 Completion:**
1. **Test Complete Flow** from signup to payment
2. **Verify Webhook Processing** for subscription events
3. **Test Error Scenarios** and edge cases
4. **Optimize Conversion** based on user behavior

### **Phase 3 Preparation:**
1. **Connect Subscription Status** to app features
2. **Implement Feature Gating** based on plans
3. **Add Subscription Management** in dashboard
4. **Create Plan Upgrade/Downgrade** flows

## 📞 **Support Resources**

### **Useful Links:**
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Integration](https://stripe.com/docs/checkout)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Testing Guide](https://stripe.com/docs/testing)

### **Testing Cards:**
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

---

## 🎉 **You're Ready!**

Once you complete this setup, you'll have:

✅ **Complete onboarding flow** with Stripe integration  
✅ **Real payment processing** during signup  
✅ **7-day trial system** for all paid plans  
✅ **Seamless user experience** from signup to payment  
✅ **Professional billing** with Stripe  
✅ **Mobile-optimized** payment flow  

**Next:** Test the complete flow and move to Phase 3: App Integration! 🚀
