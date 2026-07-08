import { parseData } from '@/lib/parseData';
import { Category } from '@/types/category';
import { ProductCard } from '@/components/custom/ProductCard';
import { CategoryPageHeader } from '@/components/custom/CategoryPageHeader';
import { Reveal } from '@/components/custom/Reveal';

export default async function Proizvodi() {
  const categories: Category[] = await parseData('categories.json');

  return (
    <>
      <CategoryPageHeader
        title="Kategorije Proizvoda"
        subtitle="Pregledajte naše proizvode po kategorijama."
      />

      <main className="container mx-auto px-6 lg:px-12 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 80}>
              <ProductCard
                title={category.name}
                href={`/proizvodi/${category.slug}`}
                image={category.image}
              />
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
