'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Hammer, ShieldCheck, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getMotionVariants } from '@/lib/motion';

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

export function AboutValues() {
  const prefersReducedMotion = useReducedMotion();
  const { container, item } = getMotionVariants(prefersReducedMotion);

  return (
    <section className="w-full py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-12">
          Zašto Vekom
        </h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={item}>
              <Card className="h-full shadow-soft hover:shadow-soft-lg transition-shadow border-border">
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
      </div>
    </section>
  );
}
