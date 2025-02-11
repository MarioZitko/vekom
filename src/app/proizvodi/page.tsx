import Link from 'next/link';
import Image from 'next/image';
import { parseData } from '@/lib/parseData'; // ✅ Using old implementation
import { Product } from '@/types/product';

export default async function Proizvodi() {
  const products: Product[] = await parseData('public/data/products.json');

  return (
    <>
      <header className="w-full bg-background text-secondary-foreground shadow-md py-4">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">Naši Proizvodi</h1>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Pregledajte našu široku ponudu betonskih elemenata
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-8">
        {/* Center products even if odd/even number */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
          {products.map((product, index) => (
            <Link key={product.title} href={product.href} passHref>
              <div className="w-full max-w-[280px] sm:max-w-[300px] flex flex-col items-center gap-2 cursor-pointer group">
                {/* Product Image (Fix Aspect Ratio & Scaling) */}
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={product.image} // ✅ Now using image directly from products.json
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform transform group-hover:scale-105"
                    priority={index === 0} // ✅ Prioritizes first image for better performance
                  />
                </div>

                {/* Product Name */}
                <h2 className="text-lg sm:text-xl font-semibold text-primary text-center group-hover:text-primary-foreground transition">
                  {product.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
