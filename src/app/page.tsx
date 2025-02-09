import { CardWithCarousel } from '@/components/custom/CardWithCarousel';
import { Header } from '@/components/custom/Header';
import { getCards } from '@/lib/getCards';

export default async function Home() {
  const cards = await getCards(); // Fetch data at build/runtime

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Image Cards with Carousel</h1>
        <CardWithCarousel cards={cards} />
      </main>
    </>
  );
}
