import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_CONFIG } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    // Create Stripe instance inside the API route to ensure environment variables are loaded
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-07-30.basil',
      typescript: true,
    });

    // Debug: Check if Stripe is available
    if (!stripe) {
      console.error('Stripe is null in API route');
      return NextResponse.json(
        { error: 'Stripe not available' },
        { status: 500 }
      );
    }

    // Debug: Check environment variables
    console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('STRIPE_SECRET_KEY length:', process.env.STRIPE_SECRET_KEY?.length);

    const { priceId, successUrl, cancelUrl, customerEmail } = await req.json();

    if (!priceId || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    console.log('Creating checkout session with priceId:', priceId);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerEmail,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      subscription_data: {
        trial_period_days: STRIPE_CONFIG.TRIAL_DAYS,
        metadata: {
          // Add any custom metadata you want to track
          source: 'ai_platform',
        },
      },
      metadata: {
        // Add any custom metadata you want to track
        source: 'ai_platform',
      },
    });

    console.log('Checkout session created successfully:', session.id);
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
