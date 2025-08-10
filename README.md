# YourPals Monorepo

Smart little helpers for your everyday life.

## 🚀 Quick Start

### Run Marketing App
```bash
pnpm dev:marketing
```
Opens [http://localhost:3000](http://localhost:3000)

### Run MoneyPal App (future)
```bash
pnpm dev:moneypal
```

## 📁 Structure

- **`apps/*`** - Next.js applications (marketing, moneypal, etc.)
- **`packages/ui`** - Shared UI components and design tokens
- **`services/*`** - Backend services (future)

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## 🎨 Shared UI

Reusable components live in `packages/ui/`:
- Button variants (primary, ghost)
- Brand color tokens
- Consistent design system
