import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/custom/Footer';
import { Header } from '@/components/custom/Header';
import { parseData } from '@/lib/parseData';
import { Category } from '@/types/category';
import { CookieBanner } from '@/components/custom/CookieBanner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vekom - Proizvodnja građevinskih elemenata',
  description: 'Vekom proizvodi visokokvalitetne građevinske elemente za sve potrebe.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://www.vekom.com'), // ✅ Fix metadataBase warning
  openGraph: {
    type: 'website',
    url: 'https://www.vekom.com',
    title: 'Vekom - Građevinski Elementi',
    description: 'Najbolji betonski elementi za sve vaše projekte.',
    images: [
      {
        url: '/public/favicon.png', // ✅ This will now resolve to "https://www.vekom.com/static/banner.jpg"
        width: 1200,
        height: 630,
        alt: 'Vekom - Građevinski Elementi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vekom - Građevinski Elementi',
    description: 'Najbolji betonski elementi za sve vaše projekte.',
    images: ['/static/banner.jpg'],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const categories = await parseData('categories.json');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Vekom',
    'url': 'https://www.vekom.com',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.vekom.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': categories.map((category: Category, index: number) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': category.name, // Proper category name
        'url': `https://www.vekom.com/category/${category.slug}`, // Use slug instead of toLowerCase()
      })),
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <Header categories={categories} />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
