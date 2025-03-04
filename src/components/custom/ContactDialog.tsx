'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { ContactDialogProps } from './types';

export function ContactDialog({ productName }: ContactDialogProps) {
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
          subject: `${productName} - Upit s web stranice`,
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs sm:text-sm px-4 py-2">
          <Send className="mr-2 w-4 h-4" />
          Pošalji upit!
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xs sm:max-w-sm p-4 sm:p-5">
        <DialogTitle className="text-base sm:text-lg font-semibold">
          {productName} - Upit s web stranice
        </DialogTitle>

        <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-4">
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
              className="h-9 text-sm"
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
              className="h-9 text-sm"
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
              className="h-9 text-sm"
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
              className="h-24 text-sm"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="text-sm h-10">
            {isLoading ? 'Slanje...' : 'Pošalji'}
          </Button>

          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
