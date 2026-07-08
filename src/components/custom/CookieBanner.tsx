'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const COOKIE_PREFERENCES_KEY = 'cookiePreferences';

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytical: false,
    advertising: false,
  });

  // Load preferences from localStorage
  useEffect(() => {
    const storedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  // Save preferences to localStorage
  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
    setOpen(false);
  };

  return (
    <>
      {/* Floating Cookie Settings Button */}
      <button
        className="fixed bottom-6 left-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/80 transition"
        onClick={() => setOpen(true)}
      >
        🍪
      </button>

      {/* Cookie Consent Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Pregled privatnosti</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Ova web stranica koristi kolačiće za poboljšanje vašeg iskustva tijekom navigacije.
            Možete prilagoditi postavke kolačića u nastavku.
          </p>

          {/* Toggle Buttons for Cookie Preferences */}
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Funkcionalni kolačići</span>
              <Switch checked={preferences.functional} disabled />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Analitički kolačići</span>
              <Switch
                checked={preferences.analytical}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytical: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Oglasni kolačići</span>
              <Switch
                checked={preferences.advertising}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, advertising: checked })
                }
              />
            </div>
          </div>

          {/* Accordion for Full Cookie Policy */}
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="privacy">
              <AccordionTrigger>Pregled privatnosti</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Ova web stranica koristi kolačiće za poboljšanje vašeg iskustva tijekom navigacije
                  po web mjestu. Iz tih kolačića, kolačići koji se prema potrebi kategoriziraju
                  pohranjuju se na vaš preglednik jer su bitni za rad osnovnih funkcionalnosti web
                  stranice. Koristimo i kolačiće treće strane koji nam pomažu u analiziranju i
                  razumijevanju načina na koji koristite ovu web stranicu. Ti će se kolačići
                  pohraniti u vaš preglednik samo uz vaš pristanak. Također imate mogućnost
                  isključivanja ovih kolačića. Ali isključivanje nekih od ovih kolačića može imati
                  utjecaja na vaše iskustvo pregledavanja.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="necessary">
              <AccordionTrigger>Nužni kolačići</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Nužni kolačići apsolutno su bitni za pravilno funkcioniranje web stranice. Ovi
                  kolačići anonimno osiguravaju osnovne funkcionalnosti i sigurnosne značajke web
                  stranice.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="functional">
              <AccordionTrigger>Funkcionalni kolačići</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Funkcionalni kolačići pomažu u izvršavanju određenih funkcija poput dijeljenja
                  sadržaja web stranice na platformama društvenih medija, prikupljanja povratnih
                  informacija i drugih značajki trećih strana.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analytics">
              <AccordionTrigger>Analitički kolačići</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Analitički kolačići koriste se za razumijevanje interakcije posjetitelja s web
                  lokacijom. Ovi kolačići pomažu pružiti informacije o mjernim podacima, broju
                  posjetitelja, stopi napuštanja početne stranice, izvoru prometa itd.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="advertising">
              <AccordionTrigger>Oglasni kolačići</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  Oglasni kolačići koriste se za pružanje posjetiteljima relevantnih oglasa i
                  marketinških kampanja. Ovi kolačići prate posjetitelje na web stranicama i
                  prikupljaju podatke za pružanje prilagođenih oglasa.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Zatvori
            </Button>
            <Button onClick={handleSavePreferences}>Spremi postavke</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
