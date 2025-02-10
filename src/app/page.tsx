import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Header } from '@/components/custom/Header';
import { Hero } from '@/components/custom/Hero';
import { parseData } from '@/lib/parseData';

export default async function Home() {
  const cards = await parseData('public/data/cards.json'); // Fetch data at build/runtime
  const products = await parseData('public/data/products.json'); // Fetch data at build/runtime

  return (
    <>
      <Header products={products} />
      <Hero />
      <main className="flex flex-col items-center justify-center p-6 md:px-12">
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
