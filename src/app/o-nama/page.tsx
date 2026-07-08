import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/custom/Hero';
import { Reveal } from '@/components/custom/Reveal';
import { AboutValues } from '@/components/custom/AboutValues';

export default async function AboutPage() {
  return (
    <>
      <Hero
        imageSrc="/images/about/heroAbout.jpeg"
        imageAlt="Proizvodnja Vekom"
        heading="30 godina preciznosti u svakom elementu"
        subheading="Obiteljska tvrtka posvećena kvaliteti, a ne masovnoj proizvodnji — upoznajte priču iza svakog betonskog elementa koji izradimo."
        ctas={[{ href: '/proizvodi', label: 'Pogledaj proizvode', variant: 'primary' }]}
        heightClass="min-h-[60vh]"
        objectPosition="center 80%"
      />

      <main className="flex flex-col items-center">
        {/* History Section */}
        <section className="w-full py-16 md:py-24">
          <Reveal className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
                  Povijest naše tvrtke
                </h2>
                <p className="text-lg text-muted-foreground">
                  Već više od 30 godina, naša mala obiteljska tvrtka posvećena je proizvodnji
                  kvalitetnih betonskih elemenata. Želimo se posvetiti svakom klijentu, stoga naš
                  cilj nije masovna proizvodnja već osiguravanje konstantne kvalitete proizvoda.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/about/oskar.png"
                  alt="Povijest tvrtke"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover "
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Happy Clients Section */}
        <section className="w-full py-16 md:py-24 bg-brand-wash">
          <Reveal className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
                  Mnogi zadovoljni klijenti
                </h2>
                <p className="text-lg text-muted-foreground">
                  Naša posvećenost kvaliteti i preciznosti omogućila nam je suradnju s brojnim
                  zadovoljnim klijentima. Kroz desetljeća rada, stekli smo povjerenje građevinskih
                  tvrtki, arhitekata i privatnih investitora koji cijene dugotrajnost i vrhunsku
                  izradu naših proizvoda.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/about/vrtna-pipa.jpeg"
                  alt="Zadovoljni klijenti"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-soft-lg"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Values Section */}
        <AboutValues />

        {/* Closing CTA */}
        <section className="w-full py-16 md:py-20 bg-secondary text-secondary-foreground">
          <Reveal className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Spremni za suradnju s nama?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Pogledajte naš asortiman proizvoda ili nas kontaktirajte za upit prilagođen vašem
              projektu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/proizvodi"
                className="px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg"
              >
                Pogledaj proizvode
              </Link>
              <Link
                href="/kontakt"
                className="px-5 py-3 rounded-lg bg-background text-foreground hover:bg-background/90 transition shadow-lg"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
