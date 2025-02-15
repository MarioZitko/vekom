import Link from 'next/link';
import Image from 'next/image';
import { ProductCardProps } from './types';

export function ProductCard({ title, href, image }: ProductCardProps) {
  return (
    <Link href={href} passHref>
      <div className="w-full max-w-[280px] sm:max-w-[300px] flex flex-col items-center gap-2 cursor-pointer group">
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform transform group-hover:scale-105"
          />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-primary text-center">{title}</h2>
      </div>
    </Link>
  );
}
