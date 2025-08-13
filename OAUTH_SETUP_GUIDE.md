# 🔐 Complete OAuth Provider Setup Guide

This guide walks you through setting up OAuth providers (Google, Apple, Azure) in Supabase step-by-step, with troubleshooting tips and verification methods.

## 📋 **Prerequisites**

- ✅ Supabase project created
- ✅ Authentication enabled in Supabase
- ✅ Both apps building successfully
- ✅ Environment variables configured

## 🚀 **Step 1: Access Supabase Authentication**

1. **Go to your Supabase project dashboard**
2. **Click "Authentication" in the left sidebar**
3. **Click "Providers" tab**
4. **You'll see a list of available OAuth providers**

## 🔑 **Step 2: Google OAuth Setup**

### **2.1 Get Google OAuth Credentials**

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project or select existing one**
3. **Enable APIs:**
   - Go to **"APIs & Services"** → **"Library"**
   - Search for **"Google+ API"** and enable it
   - Search for **"Google Identity"** and enable it

4. **Create OAuth 2.0 Credentials:**
   - Go to **"APIs & Services"** → **"Credentials"**
   - Click **"Create Credentials"** → **"OAuth 2.0 Client IDs"**
   - Choose **"Web application"**
   - Give it a name (e.g., "YourPals OAuth")

5. **Add Authorized Redirect URIs:**
   ```
   https://your-project-ref.supabase.co/auth/v1/callback
   http://localhost:3000/auth/callback
   http://localhost:3001/auth/callback
   ```
   > **Note:** Replace `your-project-ref` with your actual Supabase project reference

6. **Copy your credentials:**
   - **Client ID** (looks like: `123456789-abcdef.apps.googleusercontent.com`)
   - **Client Secret** (click "Download" to get the JSON file)

### **2.2 Configure in Supabase**

1. **In Supabase, find "Google" and click "Configure"**
2. **Toggle "Enable Google OAuth" to ON**
3. **Enter your credentials:**
   - **Client ID**: Paste your Google OAuth client ID
   - **Client Secret**: Paste your Google OAuth client secret
4. **Click "Save"**

## 🍎 **Step 3: Apple OAuth Setup**

### **3.1 Get Apple OAuth Credentials**

1. **Go to [Apple Developer Console](https://developer.apple.com/)**
2. **Sign in with your Apple Developer account**
3. **Navigate to "Certificates, Identifiers & Profiles"**
4. **Create App ID:**
   - Click **"Identifiers"** → **"+"** → **"App IDs"**
   - Choose **"App"** → **"Continue"**
   - Fill in:
     - **Description**: "YourPals App"
     - **Bundle ID**: `com.yourcompany.yourapp`
     - **Capabilities**: Check **"Sign In with Apple"**
   - Click **"Continue"** → **"Register"**

5. **Create Services ID:**
   - Click **"Identifiers"** → **"+"** → **"Services IDs"**
   - Choose **"Services IDs"** → **"Continue"**
   - Fill in:
     - **Description**: "YourPals Web Auth"
     - **Identifier**: `com.yourcompany.yourapp.web`
     - **Capabilities**: Check **"Sign In with Apple"**
   - Click **"Continue"** → **"Register"**

6. **Configure Sign In with Apple:**
   - Click on your Services ID
   - Click **"Edit"** next to "Sign In with Apple"
   - Add **Primary App ID**: Select your App ID
   - Add **Domains and Subdomains**:
     ```
     yourpals.app
     moneypal.yourpals.app
     ```
   - Add **Return URLs**:
     ```
     https://your-project-ref.supabase.co/auth/v1/callback
     http://localhost:3000/auth/callback
     http://localhost:3001/auth/callback
     ```

7. **Generate Private Key:**
   - Go to **"Keys"** → **"+"** → **"Keys"**
   - Give it a name (e.g., "YourPals Web Auth Key")
   - Check **"Sign In with Apple"**
   - Click **"Configure"** → Select your Services ID
   - Click **"Continue"** → **"Register"**
   - **Download the .p8 file** (this is your private key)

8. **Get your Team ID:**
   - Click on your name in the top right
   - Note your **Team ID** (10-character string)

### **3.2 Configure in Supabase**

1. **In Supabase, find "Apple" and click "Configure"**
2. **Toggle "Enable Apple OAuth" to ON**
3. **Enter your credentials:**
   - **Client ID**: Your Services ID (e.g., `com.yourcompany.yourapp.web`)
   - **Client Secret**: Your private key content (the .p8 file content)
   - **Team ID**: Your Apple Developer Team ID
4. **Click "Save"**

## 🔵 **Step 4: Azure OAuth Setup**

### **4.1 Get Azure OAuth Credentials**

1. **Go to [Azure Portal](https://portal.azure.com/)**
2. **Navigate to "Azure Active Directory"**
3. **Click "App registrations"**
4. **Click "New registration"**
5. **Fill in the form:**
   - **Name**: "YourPals App"
   - **Supported account types**: Choose based on your needs
   - **Redirect URI**: 
     - Type: **Web**
     - URI: `https://your-project-ref.supabase.co/auth/v1/callback`
6. **Click "Register"**

7. **Get your credentials:**
   - **Application (client) ID**: Copy this value
   - **Directory (tenant) ID**: Copy this value

8. **Create Client Secret:**
   - Click **"Certificates & secrets"** in the left menu
   - Click **"New client secret"**
   - Add a description and choose expiration
   - **Copy the secret value** (you won't see it again!)

### **4.2 Configure in Supabase**

1. **In Supabase, find "Azure" and click "Configure"**
2. **Toggle "Enable Azure OAuth" to ON**
3. **Enter your credentials:**
   - **Client ID**: Your Azure application (client) ID
   - **Client Secret**: Your Azure client secret
   - **Tenant ID**: Your Azure tenant ID
4. **Click "Save"**

## 🔗 **Step 5: Configure Supabase Redirect URLs**

This is **CRITICAL** - OAuth won't work without this!

1. **In Supabase Dashboard**, go to **"Authentication"** → **"URL Configuration"**
2. **Set Site URL** to your main domain:
   ```
   https://yourpals.app
   ```
3. **Add these Redirect URLs**:
   ```
   https://yourpals.app/auth/callback
   https://moneypal.yourpals.app/auth/callback
   http://localhost:3000/auth/callback
   http://localhost:3001/auth/callback
   ```
4. **Click "Save"**

## 🧪 **Step 6: Test OAuth Configuration**

### **6.1 Add Test Component to Your App**

I've created an `OAuthTest` component for both apps. You can temporarily add it to test OAuth:

**Landing App:**
```tsx
// In any page, temporarily add:
import OAuthTest from '../components/OAuthTest'

// Then in your JSX:
<OAuthTest />
```

**MoneyPal App:**
```tsx
// In any page, temporarily add:
import OAuthTest from '../components/OAuthTest'

// Then in your JSX:
<OAuthTest />
```

### **6.2 Test Each Provider**

1. **Click each OAuth button**
2. **You should be redirected to the provider's login page**
3. **After login, you'll be redirected back to `/auth/callback`**
4. **Check the browser console for any error messages**

## 🚨 **Common Issues & Solutions**

### **Issue 1: "Invalid redirect_uri" Error**

**Cause**: Redirect URL mismatch between Supabase and OAuth provider

**Solution**:
- Double-check all redirect URLs match exactly
- Include both development and production URLs
- Ensure no trailing slashes or typos

### **Issue 2: "Client ID not found" Error**

**Cause**: OAuth provider credentials not configured correctly

**Solution**:
- Verify Client ID and Secret are copied correctly
- Check that the OAuth app is enabled in the provider's console
- Ensure the OAuth app is configured for web applications

### **Issue 3: "Redirect URI not allowed" Error**

**Cause**: Redirect URI not added to OAuth provider's allowed list

**Solution**:
- Add the Supabase callback URL to your OAuth provider
- Include both `https://your-project-ref.supabase.co/auth/v1/callback`
- And your app's callback URLs

### **Issue 4: OAuth works but user not created in database**

**Cause**: Database integration not set up yet

**Solution**:
- This is expected for now - we're using mock data
- Will be fixed when we integrate the database

## ✅ **Verification Checklist**

- [ ] Google OAuth configured and tested
- [ ] Apple OAuth configured and tested  
- [ ] Azure OAuth configured and tested
- [ ] Supabase redirect URLs configured
- [ ] OAuth test component working
- [ ] No console errors during OAuth flow
- [ ] Users redirected back to app after OAuth

## 🔄 **Next Steps After OAuth Setup**

1. **Test all OAuth providers work**
2. **Remove the OAuthTest component** from production
3. **Set up database integration** for real user storage
4. **Configure user roles and permissions**
5. **Add email verification flows**
6. **Set up password reset functionality**

## 📞 **Need Help?**

If you encounter issues:

1. **Check the browser console** for error messages
2. **Verify all URLs match exactly** between Supabase and OAuth providers
3. **Test with one provider first** before adding others
4. **Check Supabase logs** in the dashboard for auth errors
5. **Ensure your OAuth apps are properly configured** in each provider's console

The OAuth setup is the foundation for your authentication system. Once this is working, everything else will fall into place! 🎉
