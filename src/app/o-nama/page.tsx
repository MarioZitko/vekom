import Image from 'next/image';

export default async function AboutPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center p-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12">
          O Nama
        </h1>

        {/* History Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 max-w-6xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
              Povijest naše tvrtke
            </h2>
            <p className="text-lg text-muted-foreground">
              Već više od 30 godina, naša obiteljska tvrtka proizvodi kvalitetne betonske elemente
              prepoznate po izdržljivosti i preciznoj izradi. Počeli smo kao mala radionica, ali smo
              se tijekom godina razvili u vodećeg proizvođača betonskih elemenata u regiji.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about/oskar.png"
              alt="Povijest tvrtke"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Happy Clients Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 mb-16 max-w-6xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
              Mnogi zadovoljni klijenti
            </h2>
            <p className="text-lg text-muted-foreground">
              Naša posvećenost kvaliteti i preciznosti omogućila nam je suradnju s brojnim
              zadovoljnim klijentima. Kroz desetljeća rada, stekli smo povjerenje građevinskih
              tvrtki, arhitekata i privatnih investitora koji cijene dugotrajnost i vrhunsku izradu
              naših proizvoda.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about/vrtna-pipa.jpeg"
              alt="Zadovoljni klijenti"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-secondary-foreground mb-4">Jamstvo kvalitete</h2>
            <p className="text-lg text-muted-foreground">
              Kvaliteta nam je na prvom mjestu. Naši proizvodi izrađeni su od najkvalitetnijih
              materijala i prolaze stroge kontrole kako bi zadovoljili najviše standarde. Koristimo
              modernu tehnologiju proizvodnje kako bismo osigurali dugotrajnost i otpornost svakog
              betonskog elementa.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about/cvjetnjak.jpeg"
              alt="Jamstvo kvalitete"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}
