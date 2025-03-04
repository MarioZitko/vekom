import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center md:justify-end bg-background text-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/kva-glavna.jpg"
          alt="Kvarner Opatija"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Darker Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/80 md:bg-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative w-full max-w-[90%] md:max-w-5xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-center md:text-right">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Vrhunska kvaliteta s 30 godina tradicije
        </h1>
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 max-w-full md:max-w-lg md:mr-0 ml-auto">
          Naša obiteljska tvrtka već više od 30 godina proizvodi kvalitetne betonske elemente koji
          su prepoznati po svojoj izdržljivosti i preciznoj izradi. Ponosimo se brojnim zadovoljnim
          kupcima i projektima diljem Hrvatske.
        </p>

        {/* Button Wrapper - Properly Sized for Mobile */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4">
          <Link
            href="/proizvodi"
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg text-sm sm:text-lg text-center"
          >
            Pogledaj proizvode
          </Link>
          <Link
            href="/kontakt"
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition shadow-lg text-sm sm:text-lg text-center"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </section>
  );
}
