import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Hero } from '@/components/custom/Hero';
import { TrustStrip } from '@/components/custom/TrustStrip';
import { Reveal } from '@/components/custom/Reveal';
import { parseData } from '@/lib/parseData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vekom - Kvalitetni betonski elementi',
  description: 'Vekom nudi vrhunske, otporne i dugotrajne građevinske elemente.',
};

export default async function Home() {
  const cards = await parseData('cards.json');

  return (
    <>
      <Hero />
      <TrustStrip />
      <main className="flex flex-col items-center justify-center p-6 md:px-12">
        <Reveal className="text-center max-w-2xl mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-3">
            Naš asortiman proizvoda
          </h2>
          <p className="text-muted-foreground">
            Pregledajte betonske elemente izrađene s pažnjom i preciznošću, spremne za vaš
            sljedeći projekt.
          </p>
        </Reveal>
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
