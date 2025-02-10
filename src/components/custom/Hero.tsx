import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full h-[65vh] flex items-center bg-background text-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/kva-glavna.jpg" // Updated image path
          alt="Kvarner Opatija"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Darker Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>
      </div>

      {/* Content Overlay - Fully Aligned to the Right */}
      <div className="relative z-10 w-full max-w-5xl ml-auto px-6 md:px-20 lg:px-40 text-right">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
          Vrhunska kvaliteta s 30 godina tradicije
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-200">
          Naša obiteljska tvrtka već više od 30 godina proizvodi kvalitetne betonske elemente koji
          su prepoznati po svojoj izdržljivosti i preciznoj izradi. Ponosimo se brojnim zadovoljnim
          kupcima i projektima diljem Hrvatske.
        </p>
        <div className="mt-8 flex justify-end gap-6">
          <Link
            href="/proizvodi"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg text-lg"
          >
            Pogledaj proizvode
          </Link>
          <Link
            href="/kontakt"
            className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition shadow-lg text-lg"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </section>
  );
}
