import Link from 'next/link';
import Image from 'next/image';
import { ProductCardProps } from './types';

export function ProductCard({ title, href, image }: ProductCardProps) {
  return (
    <Link href={href} passHref>
      <div className="w-[280px] sm:w-[300px] h-[350px] flex flex-col items-center justify-between bg-white shadow-md rounded-lg overflow-hidden transition-transform transform group hover:scale-105 cursor-pointer">
        {/* Image Container */}
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-primary text-center px-4 py-12">
          {title}
        </h2>
      </div>
    </Link>
  );
}
