import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Hero } from '@/components/custom/Hero';
import { parseData } from '@/lib/parseData';

export default async function Home() {
  const cards = await parseData('cards.json'); // Fetch data at build/runtime

  return (
    <>
      <Hero />
      <main className="flex flex-col items-center justify-center p-6 md:px-12">
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
