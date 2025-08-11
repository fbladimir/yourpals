import { prisma } from './client'
import { SubscriptionPlan, SubscriptionStatus, ConnectionType, ConnectionStatus, GoalType } from './types'

async function main() {
  console.log('🌱 Starting database seed...')

  // Clean up existing data
  await prisma.insightCache.deleteMany()
  await prisma.goal.deleteMany()
  await prisma.budgetRule.deleteMany()
  await prisma.transaction.deleteMany()
  await prisma.connection.deleteMany()
  await prisma.subscription.deleteMany()
  await prisma.user.deleteMany()

  console.log('🧹 Cleaned up existing data')

  // Create test user
  const testUser = await prisma.user.create({
    data: {
      clerkUserId: 'test_clerk_user_123',
      email: 'test@yourpals.com',
    },
  })

  console.log('👤 Created test user:', testUser.email)

  // Create subscription
  const subscription = await prisma.subscription.create({
    data: {
      userId: testUser.id,
      plan: SubscriptionPlan.MONEYPAL_PRO,
      status: SubscriptionStatus.ACTIVE,
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
  })

  console.log('💳 Created subscription:', subscription.plan)

  // Create connection
  const connection = await prisma.connection.create({
    data: {
      userId: testUser.id,
      type: ConnectionType.MANUAL,
      status: ConnectionStatus.CONNECTED,
      metadata: {
        bankName: 'Test Bank',
        accountType: 'checking',
      },
    },
  })

  console.log('🔗 Created connection:', connection.type)

  // Create budget rules
  const budgetRules = await Promise.all([
    prisma.budgetRule.create({
      data: {
        userId: testUser.id,
        category: 'Food & Dining',
        monthlyCap: 500.00,
      },
    }),
    prisma.budgetRule.create({
      data: {
        userId: testUser.id,
        category: 'Transportation',
        monthlyCap: 200.00,
      },
    }),
    prisma.budgetRule.create({
      data: {
        userId: testUser.id,
        category: 'Entertainment',
        monthlyCap: 150.00,
      },
    }),
  ])

  console.log('💰 Created budget rules:', budgetRules.length)

  // Create goals
  const goals = await Promise.all([
    prisma.goal.create({
      data: {
        userId: testUser.id,
        type: GoalType.SAVINGS,
        targetAmount: 10000.00,
        targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
        progressAmount: 2500.00,
      },
    }),
    prisma.goal.create({
      data: {
        userId: testUser.id,
        type: GoalType.DEBT,
        targetAmount: 5000.00,
        targetDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 6 months from now
        progressAmount: 3000.00,
      },
    }),
  ])

  console.log('🎯 Created goals:', goals.length)

  // Create transactions over the last 60 days
  const categories = ['Food & Dining', 'Transportation', 'Entertainment', 'Shopping', 'Bills & Utilities', 'Health & Fitness']
  const merchants = [
    'Starbucks', 'McDonald\'s', 'Uber', 'Lyft', 'Netflix', 'Amazon', 'Target', 'Walmart',
    'Shell', 'Exxon', 'CVS', 'Walgreens', 'Spotify', 'Apple', 'Google', 'Microsoft'
  ]
  
  const transactions = []
  const now = new Date()
  
  for (let i = 0; i < 50; i++) {
    const daysAgo = Math.floor(Math.random() * 60)
    const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000)
    const category = categories[Math.floor(Math.random() * categories.length)]
    const merchant = merchants[Math.floor(Math.random() * merchants.length)]
    const amount = Math.round((Math.random() * 200 + 5) * 100) / 100 // $5-$205
    
    transactions.push({
      userId: testUser.id,
      date,
      amount,
      merchant,
      category,
      source: 'manual',
      isRecurring: Math.random() > 0.8, // 20% chance of being recurring
      notes: Math.random() > 0.7 ? `Transaction on ${date.toLocaleDateString()}` : null,
    })
  }

  const createdTransactions = await prisma.transaction.createMany({
    data: transactions,
  })

  console.log('💸 Created transactions:', createdTransactions.count)

  // Create insight cache
  const insightCache = await prisma.insightCache.create({
    data: {
      userId: testUser.id,
      kind: 'WEEKLY',
      payload: {
        spendingByCategory: {
          'Food & Dining': 1250.50,
          'Transportation': 450.25,
          'Entertainment': 320.75,
          'Shopping': 890.00,
          'Bills & Utilities': 1800.00,
          'Health & Fitness': 280.50,
        },
        totalSpending: 4791.00,
        averageDailySpending: 79.85,
      },
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
  })

  console.log('📊 Created insight cache')

  console.log('✅ Database seeding completed successfully!')
  console.log(`📈 Created ${createdTransactions.count} transactions for user ${testUser.email}`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
