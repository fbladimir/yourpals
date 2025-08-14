'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Calendar, Crown, Zap, Star, Settings, Download } from 'lucide-react';
import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { SubscriptionUpgrade } from '@/components/SubscriptionUpgrade'

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Subscription Management</h1>
          <p className="text-gray-300">Manage your subscription and billing preferences</p>
        </div>
        <SubscriptionUpgrade />
      </div>
    </div>
  )
}
