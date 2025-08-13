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
├── /moneypal      → MoneyPal app
├── /fitnesspal    → Future fitness app
├── /profile       → User settings
└── /subscriptions → Billing
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

#### **Phase 3: App Integration 🚧 IN PROGRESS**
- [ ] Migrate MoneyPal to the new platform
- [ ] Implement subscription management
- [ ] Add app launch functionality
- [ ] Create app-specific dashboards

#### **Phase 4: Expansion (Future)**
- [ ] Add new apps (FitnessPal, etc.)
- [ ] Cross-app AI bot collaboration
- [ ] Advanced business features
- [ ] Mobile app development

### **Current Status - Phase 2 Complete:**

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

#### **✅ Technical Improvements:**
- **Error Boundaries**: Handle chunk loading and verification errors
- **Loading Timeouts**: Prevent infinite loading states
- **Retry Mechanisms**: Auto-retry failed operations
- **Better UX**: Clear status indicators and error messages

### **Key Points:**
- ✅ **Single domain** with multiple routes
- ✅ **Shared authentication** across all routes
- ✅ **Seamless navigation** between routes
- ✅ **Centralized user management**
- ✅ **Personalized dashboard** based on onboarding
- ✅ **Dynamic app recommendations**
- ✅ **Robust error handling** and user experience
- ❌ **NOT multiple subdomains** (no moneypal.yourpals.app)

### **Development URLs:**
- Landing: `localhost:3000`
- AI Platform: `localhost:4000`
- All routes: `localhost:4000/auth`, `localhost:4000/dashboard`, etc.

### **Next Steps - Phase 3:**
1. **MoneyPal Integration**: Migrate existing MoneyPal functionality
2. **App Launch System**: Implement app launching from dashboard
3. **Subscription Management**: Add billing and plan management
4. **App-Specific Features**: Create specialized dashboards for each app

---
**Remember:** Everything is under `ai.yourpals.app` with different routes, not separate subdomains!

**Current Status:** Phase 2 complete, ready for app integration in Phase 3! 🚀
