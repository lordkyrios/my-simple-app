import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Simple App</title>
        <meta name="description" content="Professional SaaS landing page" />
      </Head>

      <NavBar />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Simple App</h1>
        <p className="text-lg text-gray-600 mb-10">A clean and professional layout with auth + billing</p>

        <a
          href="https://my-simple-app-w6ft-116hjg8ir-lordkyrios.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            Launch App
          </button>
        </a>
      </main>

      <Footer />
    </>
  );
}
