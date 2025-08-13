# 🔐 OAuth Quick Reference Card

## 📍 **Critical URLs to Configure**

### **Supabase Callback URL (Required in ALL OAuth Providers)**
```
https://your-project-ref.supabase.co/auth/v1/callback
```
> **Replace `your-project-ref` with your actual Supabase project reference**

### **Your App Callback URLs (Add to Supabase Redirect URLs)**
```
https://yourpals.app/auth/callback
https://moneypal.yourpals.app/auth/callback
http://localhost:3000/auth/callback
http://localhost:3001/auth/callback
```

### **Supabase Site URL**
```
https://yourpals.app
```

## 🔑 **OAuth Provider Settings**

### **Google OAuth**
- **API to Enable**: Google+ API, Google Identity
- **Application Type**: Web application
- **Redirect URIs**: Include Supabase callback + your app callbacks

### **Apple OAuth**
- **App ID**: `com.yourcompany.yourapp`
- **Services ID**: `com.yourcompany.yourapp.web`
- **Capability**: Sign In with Apple
- **Domains**: `yourpals.app`, `moneypal.yourpals.app`

### **Azure OAuth**
- **Application Type**: Web
- **Redirect URI**: Supabase callback URL only
- **Supported Accounts**: Choose based on your needs

## ⚠️ **Common Mistakes to Avoid**

1. **Missing Supabase callback URL** in OAuth provider settings
2. **Mismatched redirect URLs** between Supabase and OAuth providers
3. **Wrong application type** (should be "Web" for all)
4. **Missing domain verification** in Apple Developer Console
5. **Expired client secrets** in Azure

## 🧪 **Testing Checklist**

- [ ] OAuth button redirects to provider login
- [ ] Login successful on provider side
- [ ] Redirected back to `/auth/callback`
- [ ] No console errors
- [ ] User session created in Supabase

## 📞 **Quick Troubleshooting**

| Error | Likely Cause | Quick Fix |
|-------|--------------|-----------|
| "Invalid redirect_uri" | URL mismatch | Check all URLs match exactly |
| "Client ID not found" | Wrong credentials | Verify Client ID/Secret |
| "Redirect URI not allowed" | Missing URL in provider | Add Supabase callback URL |
| OAuth works but no user | Database not integrated | Expected for now |

## 🚀 **Next Steps After OAuth Works**

1. ✅ Test all providers
2. 🔄 Remove OAuthTest component
3. 🗄️ Set up database integration
4. 👥 Configure user roles
5. ✉️ Add email verification
6. 🔒 Set up password reset
