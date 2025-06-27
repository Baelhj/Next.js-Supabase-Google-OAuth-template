'use client'

import Image from "next/image";
import LoginButton from "@/components/LoginButton";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to PromptVault</h1>
          <p className="text-gray-600 mb-8">Sign in to get started</p>
        </div>
        
        <LoginButton />
        
        {user && (
          <div className="text-center">
            <Link
              href="/dashboard"
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        )}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This app uses Supabase for authentication and database</p>
        </div>
      </div>
    </div>
  );
}
