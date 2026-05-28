import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-canela', // using cormorant as a fallback for canela
  display: 'swap',
});

export const metadata = {
  title: 'Effission | The Operating System for Modern Jewelry Commerce',
  description: 'One unified ecosystem for ERP, AI Rendering, CRM, B2B Commerce, POS, Shopify, and Automation. Built for retailers, wholesalers, and manufacturers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
