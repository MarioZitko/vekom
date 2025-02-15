import { notFound } from 'next/navigation';
import Image from 'next/image';
import { parseData } from '@/lib/parseData';
import { Product } from '@/types/product';

export default async function ProductPage({
  params: rawParams,
}: {
  params: { slug?: string; product?: string };
}) {
  // ✅ Ensure params are awaited correctly
  const params = await Promise.resolve(rawParams);

  if (!params.slug || !params.product) {
    return notFound();
  }

  // ✅ Load product data asynchronously
  const products: Product[] = await parseData('products.json');

  // ✅ Proper slug and product slug decoding
  const categorySlug = decodeURIComponent(params.slug);
  const productSlug = decodeURIComponent(params.product);

  // ✅ Improved product lookup logic
  const product = products.find(
    (p) => p.category === categorySlug && p.href.endsWith(`/${productSlug}`),
  );

  if (!product) return notFound(); // If product doesn't exist, return 404

  return (
    <main className="container mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image Section (Left) */}
        <div className="w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            <Image src={product.image} alt={product.title} fill className="object-cover" priority />
          </div>
        </div>

        {/* Content Section (Right) */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">{product.title}</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
}
