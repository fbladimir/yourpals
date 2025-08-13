'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Button } from './Button'

interface AuthFormProps {
  mode: 'signin' | 'signup'
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function AuthForm({ mode, onSuccess, onError }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState('')
  const [message, setMessage] = useState('')

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          phone: showPhone ? phone : undefined,
          password,
          options: {
            data: {
              email_confirm: true,
              phone_confirm: showPhone,
            },
          },
        })

        if (error) throw error

        setMessage('Check your email for a confirmation link!')
        onSuccess?.()
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error

        onSuccess?.()
      }
    } catch (error: any) {
      const errorMessage = error.message || 'An error occurred'
      setMessage(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleTwoFactorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: twoFactorCode,
        type: 'sms',
      })

      if (error) throw error

      setMessage('Two-factor authentication successful!')
      onSuccess?.()
    } catch (error: any) {
      const errorMessage = error.message || 'Invalid two-factor code'
      setMessage(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (showTwoFactor) {
    return (
      <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
        <div>
          <label htmlFor="twoFactorCode" className="block text-sm font-medium text-gray-700">
            Two-Factor Code
          </label>
          <input
            id="twoFactorCode"
            type="text"
            value={twoFactorCode}
            onChange={(e) => setTwoFactorCode(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter 6-digit code"
            required
          />
        </div>
        
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Verifying...' : 'Verify Code'}
        </Button>
        
        <button
          type="button"
          onClick={() => setShowTwoFactor(false)}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          Back to sign in
        </button>
        
        {message && (
          <p className={`text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {showPhone && (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      )}

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowPhone(!showPhone)}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          {showPhone ? 'Hide phone' : 'Add phone number'}
        </button>
        
        {mode === 'signin' && (
          <button
            type="button"
            onClick={() => setShowTwoFactor(true)}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Use 2FA
          </button>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Processing...' : mode === 'signup' ? 'Sign Up' : 'Sign In'}
      </Button>

      {message && (
        <p className={`text-sm ${message.includes('confirmation') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
