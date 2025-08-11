# Prisma + Vercel Setup

This repository uses a pre-generated Prisma client to avoid build-time generation issues on Vercel.

## How It Works

1. **Local Generation**: Prisma client is generated locally using `pnpm db:generate`
2. **Committed Client**: The generated client is committed to the repository
3. **Import Paths**: All imports use the committed client instead of `@prisma/client`
4. **Vercel Deployment**: Vercel uses the pre-generated client without needing to run Prisma generate

## File Structure

```
packages/core/
├── generated/prisma-client/     # Committed Prisma client
├── src/db/
│   ├── client.ts               # Uses ../../generated/prisma-client
│   └── types.ts                # Re-exports from generated client
└── package.json                 # No @prisma/client dependency
```

## Benefits

- ✅ **Vercel Compatible**: No build-time Prisma generation needed
- ✅ **Free Tier Friendly**: Works within Vercel's build constraints
- ✅ **Type Safe**: Full TypeScript support with generated types
- ✅ **Reliable**: No dependency on external database during build

## Maintenance

### When Schema Changes

1. Update `packages/core/prisma/schema.prisma`
2. Run `pnpm db:generate` locally
3. Commit the updated generated client
4. Deploy to Vercel

### Adding New Models

1. Add model to schema
2. Generate client locally
3. Commit changes
4. Update any new imports in your code

## Commands

```bash
# Generate Prisma client locally
pnpm db:generate

# Build core package
pnpm --filter @yourpals/core build

# Build all apps
pnpm build
```

## Why This Approach

Vercel's build environment has limitations that make it difficult to generate Prisma clients during build time. By committing the generated client, we:

- Avoid build-time database connections
- Ensure consistent client versions
- Maintain type safety
- Enable reliable deployments

This approach is recommended by the Prisma team for serverless deployments.
