# Authentication Setup Guide

This guide explains how to set up authentication consistently across both the landing page (`apps/landing`) and the MoneyPal app (`apps/moneypal`).

## Overview

Both apps now use **Supabase Authentication** with a consistent setup that includes:
- OAuth providers (Google, Apple, Azure)
- Email/password authentication
- Shared auth context and utilities
- Consistent session handling

## Environment Variables

### Landing App (`apps/landing`)
Create a `.env.local` file in `apps/landing/`:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://yourpals.app
```

### MoneyPal App (`apps/moneypal`)
Create a `.env.local` file in `apps/moneypal/`:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://moneypal.yourpals.app
```

## Supabase Project Setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Enable Authentication** in your project settings
3. **Configure OAuth providers**:
   - Google OAuth
   - Apple OAuth
   - Azure OAuth
4. **Set up redirect URLs**:
   - `https://yourpals.app/auth/callback`
   - `https://moneypal.yourpals.app/auth/callback`
   - `http://localhost:3000/auth/callback` (for development)
   - `http://localhost:3001/auth/callback` (for MoneyPal development)

## How It Works

### 1. Auth Provider
Both apps use the same `AuthProvider` component that:
- Manages authentication state
- Listens for auth changes
- Provides user session data
- Handles sign-out functionality

### 2. Auth Utilities
Shared auth functions for consistent behavior:
- `signInWithEmail()` - Email/password sign-in
- `signUpWithEmail()` - Email/password sign-up
- `signInWithOAuth()` - OAuth provider sign-in
- `signOut()` - Sign out user
- `resetPassword()` - Password reset
- `updatePassword()` - Password update

### 3. Session Management
- Sessions are automatically managed by Supabase
- Auth state is shared across the entire app
- Automatic token refresh and session persistence

## Usage Examples

### Using Auth Context
```tsx
import { useAuth } from '../components/AuthProvider'

function MyComponent() {
  const { user, session, loading, signOut } = useAuth()
  
  if (loading) return <div>Loading...</div>
  
  if (user) {
    return (
      <div>
        <p>Welcome, {user.email}!</p>
        <button onClick={signOut}>Sign Out</button>
      </div>
    )
  }
  
  return <div>Please sign in</div>
}
```

### Using Auth Utilities
```tsx
import { signInWithOAuth } from '../lib/auth-utils'

async function handleGoogleSignIn() {
  try {
    await signInWithOAuth('google')
  } catch (error) {
    console.error('Sign-in failed:', error)
  }
}
```

## Cross-Domain Authentication

Both apps can share authentication state when:
- They use the same Supabase project
- They're configured with the same environment variables
- They're deployed to subdomains of the same domain

## Development vs Production

### Development
- Use `http://localhost:3000` for landing app
- Use `http://localhost:3001` for MoneyPal app
- Set up local Supabase project or use production project

### Production
- Use your actual domain URLs
- Ensure Supabase redirect URLs are configured correctly
- Use production Supabase project

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Check that `.env.local` files exist and contain the correct values
   - Ensure environment variables are loaded before the app starts

2. **OAuth redirect errors**
   - Verify redirect URLs in Supabase project settings
   - Check that URLs match exactly (including protocol and port)

3. **Session not persisting**
   - Ensure cookies are enabled
   - Check browser storage settings
   - Verify Supabase project configuration

4. **Cross-domain auth issues**
   - Ensure both apps use the same Supabase project
   - Check that environment variables are identical
   - Verify domain configuration in Supabase

### Debug Mode
Enable debug logging by adding to your environment:
```bash
NEXT_PUBLIC_SUPABASE_DEBUG=true
```

## Next Steps

1. **Set up your Supabase project** with the configuration above
2. **Create environment files** for both apps
3. **Test authentication** in development
4. **Deploy and test** in production
5. **Customize auth flows** as needed for your specific use case

## Security Notes

- Never expose your Supabase service role key in client-side code
- Use Row Level Security (RLS) policies in Supabase
- Implement proper user role management
- Consider adding 2FA for sensitive operations
- Regularly audit authentication logs
