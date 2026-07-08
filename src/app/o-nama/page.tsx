import Image from 'next/image';
import Link from 'next/link';
import { Hammer, ShieldCheck, Handshake } from 'lucide-react';
import { Hero } from '@/components/custom/Hero';
import { Reveal } from '@/components/custom/Reveal';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Hammer,
    title: 'Kvaliteta',
    description:
      'Svaki element prolazi pažljivu kontrolu izrade, od odabira materijala do finalne obrade.',
  },
  {
    icon: ShieldCheck,
    title: 'Preciznost',
    description:
      'Radimo po strogim mjerama i standardima kako bi svaki proizvod savršeno pasao svojoj namjeni.',
  },
  {
    icon: Handshake,
    title: 'Partnerstvo',
    description:
      'Gradimo dugoročne odnose s klijentima, arhitektima i investitorima kroz povjerenje i dosljednost.',
  },
];

export default async function AboutPage() {
  return (
    <>
      <Hero
        imageSrc="/images/about/cvjetnjak.jpeg"
        imageAlt="Proizvodnja Vekom"
        heading="30 godina preciznosti u svakom elementu"
        subheading="Obiteljska tvrtka posvećena kvaliteti, a ne masovnoj proizvodnji — upoznajte priču iza svakog betonskog elementa koji izradimo."
        ctas={[{ href: '/proizvodi', label: 'Pogledaj proizvode', variant: 'primary' }]}
        heightClass="min-h-[60vh]"
        offsetForHeader
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
                  className="rounded-lg object-cover shadow-soft-lg"
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
        <section className="w-full py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-12">
                Zašto Vekom
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 100}>
                  <Card className="h-full shadow-soft hover:shadow-soft-lg transition-shadow border-border">
                    <CardContent className="pt-6 text-center">
                      <value.icon className="w-8 h-8 mx-auto text-primary mb-4" />
                      <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
