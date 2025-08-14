# YourPals AI Platform Architecture

## 🎯 **Single Domain, Multiple Routes Architecture**

**Base URL:** `ai.yourpals.app` (or `localhost:4000` for development)

### **Route Structure:**
```
ai.yourpals.app/
├── /auth          → Authentication (sign in/sign up)
├── /auth/verify-email → Email verification callback
├── /onboarding    → Survey & setup (one-time)
├── /dashboard     → Main hub (all AI apps)
├── /subscriptions → Subscription management & billing
├── /moneypal      → MoneyPal app
├── /fitnesspal    → Future fitness app
└── /profile       → User settings
```

### **User Flow:**
1. **Landing Page** (yourpals.app) → Sign In button
2. **Authentication** (ai.yourpals.app/auth) → Sign up/Sign in
3. **Email Verification** (ai.yourpals.app/auth/verify-email) → Automatic verification
4. **Onboarding** (ai.yourpals.app/onboarding) → One-time setup
5. **Dashboard** (ai.yourpals.app/dashboard) → Main hub
6. **App Routes** (ai.yourpals.app/moneypal, etc.) → Individual AI apps

### **Personalized Dashboard Concept:**
- **Primary Apps**: Based on onboarding answers (e.g., Finance focus → MoneyPal prominent)
- **Secondary Apps**: Other available apps with "Coming Soon" status
- **View All Apps**: UX option to see complete app catalog
- **Dynamic Layout**: Dashboard adapts to user's primary goals
- **App Recommendations**: AI suggests apps based on user behavior

### **Implementation Phases:**

#### **Phase 1: Foundation ✅ COMPLETE**
- [x] Set up ai.yourpals.app domain and hosting
- [x] Create unified authentication system
- [x] Build onboarding flow with GeneralBot
- [x] Implement dynamic personality switching

#### **Phase 2: Core Experience ✅ COMPLETE**
- [x] Complete onboarding with all robot personalities
- [x] Build unified dashboard with tabs (Overview, AI Apps, Settings)
- [x] Fix email verification flow with dedicated verification page
- [x] Implement proper session management and error handling
- [x] Add retry mechanisms and loading timeouts
- [x] Create error boundaries for chunk loading issues
- [x] Mobile-first responsive design across all components
- [x] Dashboard header redesign with clean, mobile-optimized layout
- [x] AI System Status cards converted to horizontal pills
- [x] Loading screen optimization with 2x2 grid layout
- [x] Text cleanup and streamlined messaging
- [x] Mobile button positioning and touch-friendly interactions
- [x] Cross-platform compatibility for website and mobile
- [x] Landing page integration with AI platform
- [x] Careers page creation with modern AI-themed design

#### **Phase 2.5: Subscription Infrastructure ✅ COMPLETE**
- [x] **Stripe Integration**: Complete billing system with API routes
- [x] **Subscription Plans**: Free (7-day trial) + Pro + All Access tiers
- [x] **Trial System**: 7-day full access for new users
- [x] **User Tiers**: Different dashboard experiences for free vs. pro users
- [x] **Feature Gating**: Restrict advanced features to subscribers
- [x] **Billing Management**: Subscription upgrades, downgrades, cancellations
- [x] **Payment Processing**: Secure payment handling and webhooks
- [x] **Usage Tracking**: Monitor user activity and feature usage
- [x] **Subscription Database**: Store subscription status and billing info
- [x] **React Components**: SubscriptionContext, SubscriptionGuard, SubscriptionUpgrade
- [x] **Subscription Page**: Complete subscription management interface
- [x] **Webhook Handlers**: Process Stripe events for real-time updates

#### **Phase 3: App Integration (Ready to Start)**
- [ ] Migrate MoneyPal to the new platform
- [ ] Implement app launch functionality
- [ ] Create app-specific dashboards
- [ ] Add subscription-gated features

#### **Phase 4: Expansion (Future)**
- [ ] Add new apps (FitnessPal, etc.)
- [ ] Cross-app AI bot collaboration
- [ ] Advanced business features
- [ ] Mobile app development

### **Current Status - Phase 2.5 Complete:**

#### **✅ Authentication System:**
- **Supabase Integration**: Full authentication with email verification
- **Email Verification Flow**: Dedicated `/auth/verify-email` page
- **Session Management**: Proper token handling and session creation
- **Error Handling**: Comprehensive error boundaries and retry mechanisms

#### **✅ Onboarding Flow:**
- **6-Step Process**: Welcome → Goal Selection → Use Case → Specialized Bot → Plan Selection → Completion
- **Robot Personalities**: GeneralBot, FinanceBot, FitnessBot, BusinessBot
- **Personalization**: Adapts to user goals and business/personal use cases
- **Smooth Transitions**: Beautiful animations and progress indicators

#### **✅ Dashboard System:**
- **Tabbed Interface**: Overview, AI Apps, Settings
- **Personalized Content**: Adapts to user's selected goals
- **AI Apps Grid**: Shows available applications with status
- **User Profile**: Settings and preferences management

#### **✅ Subscription Infrastructure:**
- **Stripe Integration**: Complete billing system with secure payment processing
- **Trial System**: 7-day free trial with full feature access
- **Feature Gating**: Subscription-based access control throughout the app
- **Billing Management**: Professional subscription management interface
- **Webhook System**: Real-time subscription status updates
- **Plan Tiers**: FREE (trial), PRO ($19.99/month), ALL_ACCESS ($49.99/month)

#### **✅ Technical Improvements:**
- **Error Boundaries**: Handle chunk loading and verification errors
- **Loading Timeouts**: Prevent infinite loading states
- **Retry Mechanisms**: Auto-retry failed operations
- **Better UX**: Clear status indicators and error messages
- **Mobile-First Design**: Responsive layouts for all screen sizes
- **Touch-Friendly UI**: Optimized for mobile interactions
- **Performance**: Optimized loading and smooth animations

### **Subscription Architecture Design:**

#### **Free Tier (7-Day Trial):**
- **Duration**: 7 days from signup
- **Access**: Full Pro features during trial
- **Limitations**: None during trial period
- **Conversion**: Must subscribe to continue after trial

#### **Pro Tier (Subscription):**
- **Pricing**: $19.99/month or $199.99/year
- **Access**: All features and AI pals
- **Benefits**: Priority support, advanced features
- **Dashboard**: Enhanced pro dashboard experience

#### **All Access Tier (Subscription):**
- **Pricing**: $49.99/month or $499.99/year
- **Access**: Everything in Pro + enterprise features
- **Benefits**: Dedicated support, custom integrations
- **Dashboard**: Enterprise-grade dashboard experience

#### **Feature Gating Strategy:**
- **Trial Users**: Full access to all features
- **Free Users**: Limited access after trial expires
- **Pro Users**: Full access to all features and future AI pals
- **All Access Users**: Everything + enterprise features
- **Upgrade Path**: Seamless upgrade from trial to subscription

#### **Technical Implementation:**
- **Stripe Integration**: Complete billing system with webhooks
- **Database Schema**: User subscriptions, billing history, usage tracking
- **Webhook Handling**: Subscription status updates in real-time
- **Feature Flags**: Dynamic feature access based on subscription
- **Dashboard Logic**: Different experiences for different user tiers
- **React Context**: Subscription state management throughout the app

### **Key Points:**
- ✅ **Single domain** with multiple routes
- ✅ **Shared authentication** across all routes
- ✅ **Seamless navigation** between routes
- ✅ **Centralized user management**
- ✅ **Personalized dashboard** based on onboarding
- ✅ **Dynamic app recommendations**
- ✅ **Robust error handling** and user experience
- ✅ **Mobile-first responsive design**
- ✅ **Complete subscription infrastructure** with Stripe
- ❌ **NOT multiple subdomains** (no moneypal.yourpals.app)

### **Development URLs:**
- Landing: `localhost:3000`
- AI Platform: `localhost:4000`
- All routes: `localhost:4000/auth`, `localhost:4000/dashboard`, `localhost:4000/subscriptions`, etc.

### **Next Steps - Phase 3 (App Integration):**
1. **MoneyPal Integration**: Migrate existing MoneyPal functionality to the platform
2. **App Launch System**: Implement app launching from dashboard
3. **Subscription-Gated Features**: Connect subscription status to app functionality
4. **App-Specific Dashboards**: Create specialized dashboards for each app
5. **Feature Implementation**: Build subscription-based feature variations

---
**Remember:** Everything is under `ai.yourpals.app` with different routes, not separate subdomains!

**Current Status:** Phase 2.5 COMPLETE - Subscription infrastructure is fully implemented and ready! 🚀

**Ready for Phase 3:** App Integration with subscription-based feature gating! 💳✨
