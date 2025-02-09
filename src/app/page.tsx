import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Header } from '@/components/custom/Header';
import { parseData } from '@/lib/parseData';

export default async function Home() {
  const cards = await parseData('public/data/cards.json'); // Fetch data at build/runtime
  const products = await parseData('public/data/products.json'); // Fetch data at build/runtime

  return (
    <>
      <Header products={products} />
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
