# 🔐 Shared Authentication Setup Guide

## 🎯 **Goal**
Enable seamless authentication across both apps so users don't have to log in twice when switching between the landing page and MoneyPal.

## 🏗️ **Architecture Overview**

### **Current Setup:**
- **Landing Page**: `yourpals.app` (or `localhost:3000` in dev)
- **MoneyPal App**: `moneypal.yourpals.app` (or `localhost:3001` in dev)
- **Shared Auth Domain**: `yourpals.app` (or `localhost:3000` in dev)

### **How It Works:**
1. **Both apps** use the **same Supabase project**
2. **OAuth redirects** go to the **shared auth domain** (landing page)
3. **Auth callback** detects which app the user came from
4. **User is redirected** back to their original app with an active session

## 🔧 **Implementation Details**

### **1. Supabase Configuration**

#### **URL Configuration:**
- **Site URL**: Add both domains
  - `https://yourpals.app`
  - `https://moneypal.yourpals.app`

#### **Redirect URLs:**
- `https://yourpals.app/auth/callback`
- `https://moneypal.yourpals.app/auth/callback`

### **2. Environment Variables**

#### **Landing App (.env.local):**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://yourpals.app
```

#### **MoneyPal App (.env.local):**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://moneypal.yourpals.app
```

### **3. Code Changes Made**

#### **Auth Utils:**
- Both apps now redirect OAuth to the **shared auth domain**
- Uses config-based approach for environment-specific URLs

#### **Auth Callbacks:**
- **Landing page callback**: Redirects to MoneyPal if user came from there
- **MoneyPal callback**: Redirects to landing page if user came from there
- **Direct access**: Users go to the appropriate default page

#### **Configuration:**
- **Development**: Uses `localhost:3000` for shared auth
- **Production**: Uses `yourpals.app` for shared auth

## 🚀 **User Experience Flow**

### **Scenario 1: Landing → MoneyPal**
1. User logs in on landing page
2. User clicks "Go to MoneyPal"
3. User arrives at MoneyPal **already logged in**
4. User sees dashboard immediately

### **Scenario 2: MoneyPal → Landing**
1. User logs in on MoneyPal
2. User clicks "Back to YourPals"
3. User arrives at landing page **already logged in**
4. User sees personalized content

### **Scenario 3: Direct Access**
1. User goes directly to MoneyPal without being logged in
2. User is redirected to welcome page
3. User logs in and goes to dashboard
4. Session is shared across both apps

## 🔍 **Technical Implementation**

### **OAuth Flow:**
```
User clicks "Sign in with Google"
↓
Redirects to Google OAuth
↓
Google redirects to shared auth domain
↓
Auth callback processes session
↓
Redirects to original app with active session
```

### **Session Sharing:**
- **Same Supabase project** = Same authentication domain
- **Cookies are shared** when using subdomains
- **No additional setup** required for session persistence

## 🧪 **Testing**

### **Development Testing:**
1. Start both dev servers:
   ```bash
   # Terminal 1 - Landing
   cd apps/landing && pnpm dev
   
   # Terminal 2 - MoneyPal
   cd apps/moneypal && pnpm dev
   ```

2. **Test OAuth flow**:
   - Sign in on landing page
   - Navigate to MoneyPal
   - Should be automatically logged in

3. **Test reverse flow**:
   - Sign in on MoneyPal
   - Go back to landing page
   - Should be automatically logged in

### **Production Testing:**
1. **Deploy both apps** to their respective domains
2. **Update Supabase settings** with production URLs
3. **Test OAuth flow** in production environment

## 🚨 **Common Issues & Solutions**

### **Issue: Still getting logged out**
- **Check**: Supabase URL configuration includes both domains
- **Check**: Both apps use the same Supabase project
- **Check**: Environment variables are correctly set

### **Issue: OAuth redirects not working**
- **Check**: Redirect URLs in Supabase include both callback URLs
- **Check**: Auth callback pages are properly configured
- **Check**: Network requests in browser dev tools

### **Issue: Session not persisting**
- **Check**: Both apps are on the same domain or subdomains
- **Check**: Supabase client configuration is identical
- **Check**: Browser cookie settings

## 🔮 **Future Enhancements**

### **Single Sign-On (SSO):**
- Implement JWT token sharing between apps
- Add session validation endpoints
- Enable cross-app user state synchronization

### **Centralized Auth Service:**
- Create dedicated auth microservice
- Implement token refresh across apps
- Add user profile synchronization

### **Advanced Session Management:**
- Implement session timeout handling
- Add "Remember Me" functionality
- Enable multi-device session management

## 📚 **Resources**

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Authentication](https://nextjs.org/docs/authentication)
- [OAuth 2.0 Flow](https://oauth.net/2/)
- [Cross-Domain Authentication](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

## ✅ **Status**

- [x] **Code implementation** complete
- [x] **Configuration** updated
- [x] **Build testing** passed
- [ ] **Supabase settings** need to be updated
- [ ] **Production deployment** pending
- [ ] **End-to-end testing** pending

## 🎉 **Next Steps**

1. **Update Supabase project settings** with the new URLs
2. **Test the flow** in development environment
3. **Deploy to production** when ready
4. **Monitor authentication flows** for any issues
5. **Gather user feedback** on the seamless experience
