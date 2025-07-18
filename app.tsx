import type { AppProps } from 'next/app';
import "@/styles/globals.css"; // You can remove this line if you're not using a global CSS file

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
