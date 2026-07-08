'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Factory, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getMotionVariants } from '@/lib/motion';

const items = [
  {
    icon: Factory,
    title: 'Vlastita proizvodnja',
    description:
      'Svaki element izrađujemo u vlastitom pogonu, bez posrednika, što nam omogućuje potpunu kontrolu nad kvalitetom.',
  },
  {
    icon: Clock,
    title: '30 godina tradicije',
    description:
      'Iskustvo koje se prenosi kroz generacije zanatskog znanja ugrađeno je u svaki proizvod koji izradimo.',
  },
  {
    icon: MapPin,
    title: 'Zadovoljni klijenti diljem Hrvatske',
    description:
      'Naši betonski elementi ugrađeni su u brojne domove i projekte diljem zemlje, uz povjerenje koje traje godinama.',
  },
];

export function TrustStrip() {
  const prefersReducedMotion = useReducedMotion();
  const { container, item } = getMotionVariants(prefersReducedMotion);

  return (
    <section className="w-full py-16 md:py-20 bg-brand-wash bg-dot-grid">
      <motion.div
        className="container mx-auto px-6 lg:px-12 max-w-6xl grid gap-6 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((value) => (
          <motion.div key={value.title} variants={item}>
            <Card className="h-full border-border shadow-soft">
              <CardContent className="pt-6 text-center">
                <value.icon className="w-8 h-8 mx-auto text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
