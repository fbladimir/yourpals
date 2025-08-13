# Supabase Setup Guide for YourPals

This guide will help you set up Supabase authentication for your YourPals monorepo, replacing Clerk with a free, self-hosted solution that supports cross-domain authentication.

## Prerequisites

- A Supabase account (free tier available)
- Your YourPals monorepo set up
- Node.js 20+ and pnpm installed

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - **Name**: `yourpals`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for the project to be created (usually 2-3 minutes)

## Step 2: Get Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://abcdefghijklmnop.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

## Step 3: Configure Environment Variables

### Landing App (`apps/landing/.env.local`)
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Database
DATABASE_URL=your_database_url_here

# App Configuration
NEXT_PUBLIC_APP_URL=https://yourpals.app
```

### MoneyPal App (`apps/moneypal/.env.local`)
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Database
DATABASE_URL=your_database_url_here

# App Configuration
NEXT_PUBLIC_APP_URL=https://moneypal.yourpals.app
```

## Step 4: Configure Supabase Authentication

### 4.1 Enable Email Authentication
1. Go to **Authentication** → **Providers**
2. Ensure **Email** is enabled
3. Configure email templates if desired

### 4.2 Enable Phone Authentication
1. In **Authentication** → **Providers**
2. Enable **Phone**
3. Configure SMS provider (Twilio recommended for production)

### 4.3 Configure Two-Factor Authentication
1. Go to **Authentication** → **Settings**
2. Enable **Two-factor authentication**
3. Choose authentication methods (TOTP, SMS, etc.)

### 4.4 Set up Cross-Domain Authentication
1. Go to **Authentication** → **URL Configuration**
2. Add your domains:
   - `https://yourpals.app`
   - `https://moneypal.yourpals.app`
3. Set redirect URLs:
   - `https://yourpals.app/auth/callback`
   - `https://moneypal.yourpals.app/auth/callback`

## Step 5: Update Database Schema

Run the following commands to update your database:

```bash
# From the root of your monorepo
pnpm db:generate
pnpm db:push
```

This will:
- Update the User table to use `supabaseUserId` instead of `clerkUserId`
- Add phone, email verification, and 2FA fields
- Maintain all existing relationships

## Step 6: Test the Setup

### 6.1 Test Landing App
```bash
pnpm dev:landing
```
Visit `http://localhost:3000` and test:
- Sign up with email
- Sign in with email
- Phone number addition (if enabled)

### 6.2 Test MoneyPal App
```bash
pnpm dev:moneypal
```
Visit `http://localhost:3001` and test:
- Cross-domain authentication
- Dashboard access
- Subscription management

## Step 7: Deploy to Production

### 7.1 Update Production Environment Variables
- Set the same Supabase credentials in your production environment
- Ensure database URLs point to production databases

### 7.2 Configure Production Domains
In Supabase dashboard:
- Add production domains to allowed list
- Update redirect URLs for production

### 7.3 Deploy Apps
```bash
pnpm build
# Deploy to your hosting platform (Vercel, etc.)
```

## Cross-Domain Authentication Features

### How It Works
1. **Shared Supabase Project**: Both apps use the same Supabase project
2. **JWT Tokens**: Authentication tokens are stored in cookies
3. **Middleware**: Each app validates tokens and redirects as needed
4. **Database Sync**: User data is automatically synced between apps

### Benefits
- ✅ **Free**: No monthly costs like Clerk
- ✅ **Self-hosted**: Full control over your auth system
- ✅ **Cross-domain**: Seamless auth between yourpals.app and moneypal.yourpals.app
- ✅ **Phone + 2FA**: Built-in support for advanced security
- ✅ **Scalable**: Grows with your needs

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check that `.env.local` files exist in both app directories
   - Verify environment variable names match exactly

2. **"Invalid redirect URL"**
   - Ensure your domains are added to Supabase allowed list
   - Check redirect URL configuration

3. **"Database connection failed"**
   - Verify `DATABASE_URL` is correct
   - Check database permissions and network access

4. **Cross-domain auth not working**
   - Ensure both apps use the same Supabase project
   - Check cookie domain settings
   - Verify middleware configuration

### Getting Help

- Check Supabase logs in the dashboard
- Review browser console for client-side errors
- Check server logs for middleware issues
- Verify environment variables are loaded correctly

## Next Steps

After completing this setup:

1. **Customize Auth UI**: Modify the `AuthForm` component to match your branding
2. **Add Social Auth**: Enable Google, GitHub, or other OAuth providers
3. **Implement User Management**: Add user profile and settings pages
4. **Set up Webhooks**: Configure Supabase webhooks for user events
5. **Monitor Usage**: Set up monitoring and analytics for your auth system

## Security Considerations

- Keep your Supabase keys secure
- Use environment variables for all sensitive data
- Regularly rotate API keys
- Monitor authentication logs for suspicious activity
- Consider implementing rate limiting
- Set up proper CORS policies for your domains

---

Your Supabase authentication is now set up! Both apps will share the same authentication system, allowing users to seamlessly move between yourpals.app and moneypal.yourpals.app.
