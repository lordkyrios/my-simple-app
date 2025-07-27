import '../globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'My Simple App',
  description: 'Professional layout with Clerk and Stripe',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
