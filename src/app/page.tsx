import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Hero } from '@/components/custom/Hero';
import { parseData } from '@/lib/parseData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vekom - Kvalitetni građevinski elementi',
  description: 'Vekom nudi vrhunske građevinske elemente, otporne i dugotrajne.',
};

export default async function Home() {
  const cards = await parseData('cards.json');

  return (
    <>
      <Hero />
      <main className="flex flex-col items-center justify-center p-6 md:px-12">
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
