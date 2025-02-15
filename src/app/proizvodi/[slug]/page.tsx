import { parseData } from '@/lib/parseData';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { ProductCard } from '@/components/custom/ProductCard';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products: Product[] = await parseData('products.json');
  const categories: Category[] = await parseData('categories.json');

  const category = categories.find((cat) => cat.slug === params.slug);
  if (!category) return <div className="text-center py-12 text-xl">Kategorija nije pronađena.</div>;

  const filteredProducts = products.filter((product) => product.category === params.slug);

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
                image={product.image}
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
