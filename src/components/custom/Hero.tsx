import Image from 'next/image';
import Link from 'next/link';

interface HeroCta {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  subheading?: string;
  ctas?: HeroCta[];
  heightClass?: string;
  offsetForHeader?: boolean;
}

const defaultCtas: HeroCta[] = [
  { href: '/proizvodi', label: 'Pogledaj proizvode', variant: 'primary' },
  { href: '/kontakt', label: 'Kontaktirajte nas', variant: 'secondary' },
];

export function Hero({
  imageSrc = '/images/hero/kva-glavna.jpg',
  imageAlt = 'Kvarner Opatija',
  heading = 'Prepoznata kvaliteta s 30 godina tradicije',
  subheading = 'Naša obiteljska tvrtka već više od 30 godina proizvodi kvalitetne betonske elemente koji su prepoznati po svojoj izdržljivosti i preciznoj izradi. Ponosimo se brojnim zadovoljnim kupcima i projektima diljem Hrvatske.',
  ctas = defaultCtas,
  heightClass = 'h-[75vh]',
  offsetForHeader = false,
}: HeroProps) {
  return (
    <section
      className={`relative w-full ${heightClass} flex items-center justify-center md:justify-end bg-background text-foreground`}
      style={offsetForHeader ? { paddingTop: 'var(--header-h)' } : undefined}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-top" priority />
        {/* Warm Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,20%,8%)]/90 via-[hsl(20,25%,10%)]/75 to-[hsl(15,30%,15%)]/50 md:bg-gradient-to-r md:from-[hsl(25,20%,8%)]/85 md:via-[hsl(20,25%,10%)]/60 md:to-[hsl(15,30%,15%)]/30"></div>
        {/* Bottom fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative w-full max-w-[90%] md:max-w-5xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-center md:text-right">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          {heading}
        </h1>
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-stone-200 max-w-full md:max-w-lg md:mr-0 ml-auto">
          {subheading}
        </p>

        {/* Button Wrapper - Properly Sized for Mobile */}
        {ctas.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`px-4 py-2 sm:px-5 sm:py-3 rounded-lg transition shadow-lg text-sm sm:text-lg text-center ${
                  cta.variant === 'secondary'
                    ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
