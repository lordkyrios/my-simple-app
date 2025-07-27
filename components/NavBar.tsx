import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 shadow">
      <h1 className="text-xl font-bold">My Simple App</h1>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">Login</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
