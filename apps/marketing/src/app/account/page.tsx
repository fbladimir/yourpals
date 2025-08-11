"use client";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface SubscriptionInfo {
  plan: 'FREE' | 'MONEYPAL_PRO' | 'ALL_ACCESS';
  status: string;
  currentPeriodEnd?: string;
}

export default function AccountPage() {
  const { user, isLoaded } = useUser();
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // Fetch subscription info from our API
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkUserId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
        }),
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // For now, show FREE plan (we'll integrate with real subscription data later)
          setSubscription({
            plan: 'FREE',
            status: 'ACTIVE',
          });
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback to FREE plan
        setSubscription({
          plan: 'FREE',
          status: 'ACTIVE',
        });
        setLoading(false);
      });
    }
  }, [user]);

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <Image
              src="/yourpalsRobot.png"
              alt="YourPals Robot"
              width={64}
              height={64}
              className="object-contain animate-pulse"
            />
          </div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Not signed in</h1>
          <Link 
            href="/"
            className="inline-block rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const getPlanDisplayName = (plan: string) => {
    switch (plan) {
      case 'FREE': return 'Free Plan';
      case 'MONEYPAL_PRO': return 'MoneyPal Pro';
      case 'ALL_ACCESS': return 'All-Access';
      default: return 'Free Plan';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'FREE': return 'from-gray-400 to-gray-600';
      case 'MONEYPAL_PRO': return 'from-blue-400 to-purple-500';
      case 'ALL_ACCESS': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-24 h-24 mx-auto">
              <Image
                src="/yourpalsRobot.png"
                alt="YourPals Robot"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome back!</h1>
          <p className="text-lg text-white/80">Manage your YourPals account</p>
        </div>

        {/* Account Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Account Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {user.firstName?.charAt(0) || user.emailAddresses[0]?.emailAddress.charAt(0) || 'U'}
              </div>
              <div>
                <p className="text-white font-medium">
                  {user.fullName || 'Your Name'}
                </p>
                <p className="text-white/60 text-sm">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/80 text-sm">
                Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subscription Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Current Plan</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getPlanColor(subscription?.plan || 'FREE')} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {subscription?.plan === 'FREE' ? 'F' : subscription?.plan === 'MONEYPAL_PRO' ? 'P' : 'A'}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-lg">
                    {getPlanDisplayName(subscription?.plan || 'FREE')}
                  </p>
                  <p className="text-white/60 text-sm">
                    Status: {subscription?.status || 'Active'}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                subscription?.plan === 'FREE' ? 'bg-gray-600 text-gray-200' :
                subscription?.plan === 'MONEYPAL_PRO' ? 'bg-blue-600 text-white' :
                'bg-purple-600 text-white'
              }`}>
                {subscription?.plan || 'FREE'}
              </span>
            </div>
            
            {subscription?.currentPeriodEnd && (
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/80 text-sm">
                  Next billing: {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Plan Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 mb-8"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Plan Management</h2>
          
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
              Upgrade to MoneyPal Pro
            </button>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200">
              Get All-Access
            </button>
            
            <button className="w-full bg-white/10 text-white font-medium py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-200">
              Manage Billing (Coming Soon)
            </button>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="flex-1 sm:flex-none text-center rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200"
          >
            ← Back to Home
          </Link>
          
          <SignOutButton>
            <button className="flex-1 sm:flex-none rounded-xl bg-red-500/20 px-6 py-3 text-red-300 ring-1 ring-red-500/30 hover:bg-red-500/30 transition-all duration-200">
              Sign Out
            </button>
          </SignOutButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
