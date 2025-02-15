import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/components/custom/Footer';
import { Header } from '@/components/custom/Header';
import { parseData } from '@/lib/parseData';

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
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const categories = await parseData('categories.json');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <Header categories={categories} />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
