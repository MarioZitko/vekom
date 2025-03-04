import { notFound } from 'next/navigation';
import Image from 'next/image';
import { parseData } from '@/lib/parseData';
import { Product } from '@/types/product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
        {/* Image Carousel Section (Left) */}
        <div className="w-full">
          <Carousel className="w-full max-w-lg mx-auto" opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={img}
                      alt={`${product.title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Hide arrows if only one image */}
            {product.images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10" />
              </>
            )}
          </Carousel>
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
