'use client';

import { useUser, SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <SignedIn>
        <h1 className="text-3xl font-bold">Welcome, {user?.firstName || 'User'}!</h1>
        <p className="mt-2 text-gray-600">Your email: {user?.emailAddresses[0].emailAddress}</p>
        <SignOutButton>
          <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded">Sign out</button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <p className="text-lg">Please sign in to access your dashboard.</p>
        <SignInButton>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
