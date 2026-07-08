'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Upit s kontakt stranice`,
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccess('Vaša poruka je poslana!');
        setFormData({ name: '', email: '', contact: '', message: '' });
      } else {
        setError('Došlo je do pogreške. Pokušajte ponovo.');
      }
    } catch {
      setError('Nešto je pošlo po zlu. Pokušajte ponovo.');
    }

    setIsLoading(false);
  };

  return (
    <>
      <main
        className="flex flex-col items-center justify-center p-6 md:px-12 w-full max-w-6xl mx-auto"
        style={{ paddingTop: 'calc(var(--header-h) + 1.5rem)' }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12">
          Kontakt | Kako do nas
        </h1>

        {/* Two Column Layout: Form (Left) + Info (Right) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT: Contact Form */}
          <div className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-secondary-foreground text-center mb-4">
              Pošaljite nam poruku
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <Label htmlFor="name">Ime i prezime</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Unesite vaše ime"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-border bg-background text-foreground focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Unesite vaš email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-border bg-background text-foreground focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="contact">Kontakt broj</Label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="Unesite broj telefona"
                  value={formData.contact}
                  onChange={handleChange}
                  className="border border-border bg-background text-foreground focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="message">Poruka</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Napišite svoju poruku..."
                  value={formData.message}
                  onChange={handleChange}
                  className="h-32 border border-border bg-background text-foreground focus:ring-primary focus:border-primary"
                />
              </div>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  'Slanje...'
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Pošalji poruku
                  </>
                )}
              </Button>

              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>

          {/* RIGHT: Location Description & Contact Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground">
                <strong>Vekom</strong> poduzeće možete pronaći u <strong>Klinča Selima</strong>,
                točnije na križanju Stare Karlovačke ceste sa Kolodvorskom ulicom. Udaljeni smo
                20-ak kilometara od Zagreba. <strong>Posjetite nas na našoj lokaciji!</strong>
              </p>
              <p className="mt-4 text-lg text-secondary-foreground font-semibold">
                &quot;Vekom&quot; Proizvodnja građevinskih elemenata
                <br />
                Kolodvorska 1, Klinča Sela
                <br />
                10450 Jastrebarsko
              </p>
            </div>

            <div>
              <p className="text-lg text-secondary-foreground font-semibold mb-2">Kontakt:</p>
              <p className="text-lg text-muted-foreground">
                📞{' '}
                <a href="tel:+3850915687329" className="hover:text-primary">
                  +385 (0) 91 5687 329
                </a>
              </p>
              <p className="text-lg text-muted-foreground">
                📞{' '}
                <a href="tel:+385016289196" className="hover:text-primary">
                  +385 (0) 1 6289 196
                </a>
              </p>
              <p className="text-lg text-muted-foreground">
                📧{' '}
                <a href="mailto:info@vekom-elementi.hr" className="hover:text-primary">
                  info@vekom-elementi.hr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Google Maps */}
        <div className="w-full max-w-5xl">
          <iframe
            className="w-full h-96 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.96406178292!2d15.742476612199464!3d45.69169321811011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47643385e094fd83%3A0x39a2648d50ac925f!2sVekom%20elementi!5e0!3m2!1sen!2shr!4v1740918422803!5m2!1sen!2shr"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </>
  );
}
