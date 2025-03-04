import type { Metadata } from 'next';
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

// ✅ Ensure params is properly awaited
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params; // ✅ Await params before accessing it

  const products: Product[] = await parseData('products.json');

  // ✅ Ensure awaitedParams.product is always a valid string
  const productSlug = decodeURIComponent(awaitedParams.product);

  const product = products.find((p) => p.href.endsWith(`/${productSlug}`));

  if (!product) return notFound();

  return {
    title: `${product.title} - Vekom Građevinski Elementi`,
    description: product.description.split(';')[0],
    openGraph: {
      title: product.title,
      description: product.description.split(';')[0],
      images: product.images.map((img) => ({ url: img, width: 800, height: 600 })),
    },
  };
}

// ✅ Ensure params is properly awaited
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; product: string }>;
}) {
  const awaitedParams = await params; // ✅ Await params before using it

  if (!awaitedParams?.slug || !awaitedParams?.product) {
    return notFound();
  }

  const products: Product[] = await parseData('products.json');

  // ✅ Ensure awaitedParams.product is always a valid string
  const productSlug = decodeURIComponent(awaitedParams.product);

  const product = products.find((p) => p.href.endsWith(`/${productSlug}`));

  if (!product) return notFound();

  const descriptionPoints = product.description.split(';').map((point) => point.trim());

  return (
    <main className="container mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image Carousel Section */}
        <div className="w-full">
          <Carousel className="w-full max-w-lg mx-auto" opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-100">
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

            {/* Show navigation arrows if more than one image */}
            {product.images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10" />
              </>
            )}
          </Carousel>
        </div>

        {/* Product Details Section */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">{product.title}</h1>

          {/* Render description as bullet points */}
          <ul className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed list-disc list-inside">
            {descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
