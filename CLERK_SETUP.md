# Clerk Authentication Setup

This monorepo now includes Clerk authentication for both the marketing and MoneyPal apps.

## Environment Variables

Create `.env.local` files in each app with your Clerk credentials:

### Root `.env.local` (or copy from `env.example`)
```bash
CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
```

### Marketing App (apps/marketing/.env.local)
Copy from `apps/marketing/env.example`:
```bash
CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
CLERK_SIGN_IN_URL=/sign-in
CLERK_SIGN_UP_URL=/sign-up
CLERK_AFTER_SIGN_IN_URL=/
CLERK_AFTER_SIGN_UP_URL=/
```

### MoneyPal App (apps/moneypal/.env.local)
Copy from `apps/moneypal/env.example`:
```bash
CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
CLERK_SIGN_IN_URL=/sign-in
CLERK_SIGN_UP_URL=/sign-up
CLERK_AFTER_SIGN_IN_URL=/
CLERK_AFTER_SIGN_UP_URL=/
```

## Features Implemented

### Marketing App
- ✅ Clerk provider integration
- ✅ Header shows auth state (Sign in / Account dropdown)
- ✅ `/account` page for signed-in users
- ✅ Modal sign-in/sign-up

### MoneyPal App
- ✅ Clerk provider integration
- ✅ Middleware protection for all routes
- ✅ Public `/welcome` page
- ✅ Protected dashboard at `/`
- ✅ `/sign-in` and `/sign-up` pages
- ✅ Uses `@yourpals/core` package for utilities

## Development Commands

```bash
# Run both apps simultaneously
pnpm dev:all

# Run individual apps
pnpm dev:marketing    # Port 3000
pnpm dev:moneypal     # Port 3001

# Build packages first, then apps
pnpm build:packages
pnpm build
```

## Troubleshooting

### Tailwind CSS Build Errors
If you encounter Tailwind CSS build errors, ensure you have the correct dependencies:
```bash
# For Tailwind CSS v4 (recommended)
pnpm add -D @tailwindcss/postcss tailwindcss

# For Tailwind CSS v3 (legacy)
pnpm add -D tailwindcss postcss autoprefixer
```

### Clerk Build Errors
If you get "Missing publishableKey" errors during build:
1. Create `.env.local` files in each app directory
2. Copy the environment variables from the `env.example` files
3. Replace the placeholder values with your actual Clerk API keys
4. Restart your development server

### Environment File Setup
```bash
# Copy example files to create your .env.local
cp apps/marketing/env.example apps/marketing/.env.local
cp apps/moneypal/env.example apps/moneypal/.env.local

# Edit the files with your actual Clerk keys
# CLERK_PUBLISHABLE_KEY=pk_test_actual_key_here
# CLERK_SECRET_KEY=sk_test_actual_key_here
```

## Testing Checklist

### Marketing App (http://localhost:3000)
- [ ] Visit homepage - should show "Sign in" button when logged out
- [ ] Click "Sign in" - should open Clerk modal
- [ ] After signing in - should show avatar + "Account" link
- [ ] Visit `/account` - should show user info and sign out option
- [ ] Sign out - should return to logged out state

### MoneyPal App (http://localhost:3001)
- [ ] Visit `/welcome` - should show public splash page
- [ ] Visit `/` (dashboard) - should redirect to sign-in if not authenticated
- [ ] Visit `/sign-in` - should show Clerk sign-in form
- [ ] After signing in - should access protected dashboard
- [ ] Dashboard should show user info and financial overview
- [ ] Sign out should work from dashboard header
