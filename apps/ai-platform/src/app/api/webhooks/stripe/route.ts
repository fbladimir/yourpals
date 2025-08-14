import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

export async function POST(req: NextRequest) {
  // Create Stripe instance inside the API route
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-07-30.basil',
    typescript: true,
  });

  const body = await req.text();
  const signature = headers().get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe signature' },
      { status: 400 }
    );
  }

  let event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object);
        break;
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object);
        break;
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object);
        break;
      
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object);
        break;
      
      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object);
        break;
      
      case 'customer.subscription.trial_will_end':
        await handleTrialEnding(event.data.object);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleSubscriptionCreated(subscription: any) {
  console.log('Subscription created:', subscription.id);
  
  // TODO: Update user subscription in database
  // This will be implemented when we connect to the database
  
  // For now, just log the event
  console.log('New subscription for customer:', subscription.customer);
  console.log('Plan:', subscription.items.data[0]?.price.id);
  console.log('Status:', subscription.status);
}

async function handleSubscriptionUpdated(subscription: any) {
  console.log('Subscription updated:', subscription.id);
  
  // TODO: Update user subscription in database
  console.log('Updated subscription for customer:', subscription.customer);
  console.log('New status:', subscription.status);
  console.log('Current period end:', subscription.current_period_end);
}

async function handleSubscriptionDeleted(subscription: any) {
  console.log('Subscription deleted:', subscription.id);
  
  // TODO: Update user subscription in database to cancelled
  console.log('Cancelled subscription for customer:', subscription.customer);
}

async function handlePaymentSucceeded(invoice: any) {
  console.log('Payment succeeded for invoice:', invoice.id);
  
  // TODO: Update user subscription status in database
  console.log('Payment succeeded for customer:', invoice.customer);
  console.log('Amount:', invoice.amount_paid);
}

async function handlePaymentFailed(invoice: any) {
  console.log('Payment failed for invoice:', invoice.id);
  
  // TODO: Update user subscription status in database
  console.log('Payment failed for customer:', invoice.customer);
  console.log('Amount due:', invoice.amount_due);
}

async function handleTrialEnding(subscription: any) {
  console.log('Trial ending for subscription:', subscription.id);
  
  // TODO: Send notification to user about trial ending
  console.log('Trial ending for customer:', subscription.customer);
  console.log('Trial end date:', subscription.trial_end);
}
