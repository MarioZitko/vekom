import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { parseData } from '@/lib/parseData';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { ProductCard } from '@/components/custom/ProductCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params; // ✅ Await params

  const categories: Category[] = await parseData('categories.json');
  const category = categories.find((cat) => cat.slug === awaitedParams.slug);

  if (!category) return notFound();

  return {
    title: `${category.name} - Vekom Građevinski Elementi`,
    description: `Pregledajte visokokvalitetne proizvode u kategoriji ${category.name}.`,
  };
}

// ✅ Ensure params is properly awaited
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params; // ✅ Await params

  if (!awaitedParams.slug) return notFound();

  const products: Product[] = await parseData('products.json');
  const categories: Category[] = await parseData('categories.json');

  const category = categories.find((cat) => cat.slug === awaitedParams.slug);
  if (!category) return notFound();

  const filteredProducts = products.filter((product) => product.category === awaitedParams.slug);

  return (
    <>
      <header className="w-full bg-secondary text-secondary-foreground shadow-md py-4">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">{category.name}</h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Pregledajte proizvode u ovoj kategoriji
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                href={product.href}
                image={product.images[0]}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Nema dostupnih proizvoda u ovoj kategoriji.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
