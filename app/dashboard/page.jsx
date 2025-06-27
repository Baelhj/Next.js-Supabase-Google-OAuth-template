'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">PromptVault Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {user.email}</span>
              <button
                onClick={signOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to your Dashboard!
              </h2>
              <p className="text-gray-600">
                You're successfully signed in with Google OAuth through Supabase.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>User ID:</strong> {user.id}
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Provider:</strong> {user.app_metadata?.provider}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}