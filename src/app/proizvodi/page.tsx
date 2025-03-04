import { parseData } from '@/lib/parseData';
import { Category } from '@/types/category';
import { ProductCard } from '@/components/custom/ProductCard';

export default async function Proizvodi() {
  const categories: Category[] = await parseData('categories.json');

  return (
    <>
      <header className="w-full bg-secondary text-secondary-foreground shadow-md py-4">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">Kategorije Proizvoda</h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Pregledajte naše proizvode po kategorijama.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {categories.map((category) => (
            <ProductCard
              key={category.slug}
              title={category.name}
              href={`/proizvodi/${category.slug}`}
              image={category.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
