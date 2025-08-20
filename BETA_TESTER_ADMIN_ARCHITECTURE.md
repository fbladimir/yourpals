# Beta Tester Admin Dashboard Architecture

## Overview
This document outlines the architecture for managing beta testers, from registration through approval and access control.

## Current Beta Testers
1. **Dylan** - Eos Gym Member & Accounting Professional
   - **Interests**: MoneyPal, FitnessPal
   - **Specialty**: Personal Finance & Fitness
   - **Use Case**: Personal finance management and workout optimization

2. **Jorge Betancourt** - AI Research & Data Science
   - **Interests**: All AI Pals (MoneyPal, SellerPal, CookingPal, YourPal)
   - **Specialty**: AI Research & Data Science
   - **Use Case**: Comprehensive AI capabilities testing and research workflow enhancement

## Current Beta Flow
1. **User registers** → Goes to `ai.yourpals.app` and creates account
2. **User completes onboarding** → Fills out forms, preferences, etc.
3. **System blocks dashboard access** → Shows "Wait for approval" message
4. **Admin gets notified** → Email/dashboard notification of new applicant
5. **Admin reviews & approves** → Manual approval process
6. **User gets email** → Approval notification sent
7. **User gets access** → Can now access dashboard and all AI Pal apps

## Database Schema Extensions

### New Tables Needed

```sql
-- Beta Tester Management
CREATE TABLE beta_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  application_data JSONB, -- Onboarding responses
  applied_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP,
  reviewed_by UUID REFERENCES users(id), -- Admin who reviewed
  notes TEXT, -- Admin notes
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Admin Users (for approval permissions)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role ENUM('super_admin', 'beta_admin') DEFAULT 'beta_admin',
  permissions JSONB DEFAULT '{"can_approve_beta": true, "can_reject_beta": true}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Beta Tester Status (extends existing users)
ALTER TABLE users ADD COLUMN beta_status ENUM('not_applied', 'pending', 'approved', 'rejected') DEFAULT 'not_applied';
ALTER TABLE users ADD COLUMN beta_approved_at TIMESTAMP;
```

## Implementation Plan

### Phase 1: Block Dashboard Access ⏳
**Location**: `apps/ai-platform/src/app/dashboard/`

#### Files to Create/Modify:
```
apps/ai-platform/src/
├── middleware.ts (update)
├── components/
│   ├── BetaGuard.tsx (new)
│   └── BetaWaitingScreen.tsx (new)
├── lib/
│   ├── beta-service.ts (new)
│   └── auth.ts (update)
└── app/
    ├── dashboard/
    │   ├── layout.tsx (update)
    │   └── page.tsx (update)
    └── beta-waiting/
        └── page.tsx (new)
```

#### Key Components:

**BetaGuard.tsx** - Wrapper component that checks beta status
```tsx
export function BetaGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  
  if (user?.beta_status === 'pending') {
    return <BetaWaitingScreen />;
  }
  
  if (user?.beta_status === 'rejected') {
    return <BetaRejectedScreen />;
  }
  
  if (user?.beta_status !== 'approved') {
    return <BetaNotAppliedScreen />;
  }
  
  return <>{children}</>;
}
```

**BetaWaitingScreen.tsx** - Friendly waiting screen
```tsx
export function BetaWaitingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Onboarding Complete! 🎉</h1>
        <p>Wait until you get approved to test the applications before accessing the dashboard.</p>
        <p>We'll send you an email once approved (usually 1-2 business days).</p>
      </div>
    </div>
  );
}
```

### Phase 2: Admin Dashboard ⏳
**Location**: `apps/ai-platform/src/app/admin/`

#### Admin Dashboard Structure:
```
apps/ai-platform/src/app/admin/
├── layout.tsx
├── page.tsx (overview)
├── beta-testers/
│   ├── page.tsx (list all applications)
│   ├── [id]/
│   │   └── page.tsx (individual application review)
│   └── components/
│       ├── ApplicationCard.tsx
│       ├── ApplicationDetail.tsx
│       └── ApprovalActions.tsx
└── components/
    ├── AdminGuard.tsx
    ├── AdminSidebar.tsx
    └── StatsCards.tsx
```

#### Key Features:

**Beta Testers List** (`/admin/beta-testers`)
- Table of all applications (pending, approved, rejected)
- Filter by status, date, interests
- Quick approve/reject actions
- Search by name/email

**Application Detail** (`/admin/beta-testers/[id]`)
- Full onboarding responses
- User profile information
- Approval/rejection with notes
- Email notification triggers

**Admin Dashboard** (`/admin`)
- Stats: Total applications, pending, approved, rejected
- Recent applications
- Quick actions

### Phase 3: Notification System ⏳

#### Email Notifications:
1. **Admin Notification** - New beta application submitted
2. **User Approval** - Beta access approved
3. **User Rejection** - Beta access rejected (with feedback)

#### Implementation:
```typescript
// apps/ai-platform/src/lib/beta-notifications.ts
export async function notifyAdminNewApplication(applicationId: string) {
  // Send email to admin(s)
  // Could use Resend, SendGrid, etc.
}

export async function notifyUserApproval(userId: string) {
  // Send approval email to user
  // Include instructions to sign in
}

export async function notifyUserRejection(userId: string, reason?: string) {
  // Send rejection email with optional feedback
}
```

### Phase 4: Access Control Updates ⏳

#### Middleware Updates:
```typescript
// apps/ai-platform/src/middleware.ts
export async function middleware(request: NextRequest) {
  // ... existing auth checks ...
  
  // Check beta status for dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const user = await getCurrentUser();
    
    if (user?.beta_status !== 'approved') {
      return NextResponse.redirect(new URL('/beta-waiting', request.url));
    }
  }
  
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const isAdmin = await checkAdminPermissions(user);
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
}
```

## API Endpoints Needed

### Beta Management APIs:
```
POST /api/beta/apply - Submit beta application
GET  /api/beta/status - Check current beta status
PUT  /api/beta/approve/:id - Approve application (admin only)
PUT  /api/beta/reject/:id - Reject application (admin only)
GET  /api/admin/beta-applications - List all applications (admin only)
GET  /api/admin/beta-applications/:id - Get specific application (admin only)
```

## Security Considerations

1. **Admin Route Protection** - Only designated admins can access approval system
2. **Beta Status Verification** - Server-side checks on all dashboard routes
3. **Audit Trail** - Log all approval/rejection actions
4. **Rate Limiting** - Prevent spam applications
5. **Data Privacy** - Secure handling of application data

## Deployment Strategy

1. **Database Migration** - Add new tables and columns
2. **Beta Guard Implementation** - Block existing dashboard access
3. **Admin Dashboard** - Deploy admin interface
4. **Notification System** - Set up email notifications
5. **Testing** - Test full flow with test accounts
6. **Go Live** - Enable beta application process

## Benefits of This Architecture

✅ **Complete Control** - Manual approval of all beta testers
✅ **Professional UX** - Clear messaging at each step
✅ **Admin Efficiency** - Easy-to-use admin dashboard
✅ **Scalable** - Can handle growing number of applications
✅ **Audit Trail** - Track all decisions and communications
✅ **Flexible** - Easy to add new criteria or automation later

## Implementation Phases

### Phase 1: Core Beta Infrastructure (Current Priority)
- **Dashboard Access Blocking** - Implement beta status checks
- **Database Schema Setup** - Add beta management tables
- **Admin Dashboard Creation** - Build approval interface
- **Email Notification System** - Set up approval notifications
- **Beta Application Flow** - Deploy end-to-end process

### Phase 2: Beta Testing Launch
- **MoneyPal Only Access** - Open beta for single app testing
- **First Batch Onboarding** - Process initial applications
- **Feedback Collection** - Gather user insights and bug reports
- **App Refinement** - Iterate based on beta feedback

### Phase 3: App Development & Beta Expansion
- **SellerPal Development** - Build e-commerce automation features
- **CookingPal Development** - Create culinary AI assistant
- **Gradual App Unlocking** - Release apps to beta users as ready
- **Beta Dashboard Evolution** - Maintain separate dev vs. beta experiences

### Phase 4: Production Transition
- **Beta System Removal** - Clean up beta-specific code
- **Production Dashboard** - Full access for all users
- **Marketing Launch** - Public release and user acquisition

## Next Steps

1. **Implement Phase 1** - Block dashboard access for non-approved users
2. **Set up database schema** - Add beta management tables
3. **Build admin dashboard** - Create approval interface
4. **Set up notifications** - Email system for approvals
5. **Test end-to-end** - Full beta tester journey
6. **Launch beta program** - Start accepting applications

---

**This architecture provides a professional, scalable beta testing program that gives you complete control while providing an excellent user experience!** 🚀
