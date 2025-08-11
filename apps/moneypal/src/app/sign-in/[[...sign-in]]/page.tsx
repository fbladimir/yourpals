'use client';

import { SignIn } from "@clerk/nextjs";
import AuthWrapper from "../../../components/AuthWrapper";
import { config } from "../../../lib/config";

export default function SignInPage() {
  return (
    <AuthWrapper redirectTo="/dashboard">
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        {/* Back to YourPals Navigation */}
        <div className="absolute top-6 left-6">
          <a 
            href={config.marketingUrl} 
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700/50 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to YourPals
          </a>
        </div>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-gray-800 border border-gray-700",
            }
          }}
          redirectUrl="/dashboard"
          afterSignInUrl="/dashboard"
        />
      </div>
    </AuthWrapper>
  );
}
