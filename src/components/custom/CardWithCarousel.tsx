'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { CardWithCarouselProps } from './types';
import { ContactDialog } from './ContactDialog';
import Image from 'next/image';
import { getMotionVariants } from '@/lib/motion';

export function CardWithCarousel({ cards }: CardWithCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const { container, item } = getMotionVariants(prefersReducedMotion);

  return (
    <motion.div
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {cards.map((card, index) => (
        <motion.div key={index} variants={item} className="w-full max-w-[320px] sm:max-w-[360px]">
          <Card className="relative overflow-hidden flex flex-col border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-primary/30">
            <div className="absolute inset-x-0 top-0 h-1 bg-primary/70" />
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{card.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base h-[70px] overflow-hidden">
                {card.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center">
              {card.images.length > 0 ? (
                <div className="relative w-full flex justify-center">
                  <Carousel
                    className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
                    plugins={[
                      Autoplay({
                        delay: 5000,
                      }),
                    ]}
                    opts={{
                      align: 'start',
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {card.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="p-1 flex justify-center items-center h-[200px] sm:h-[250px] md:h-[280px] overflow-hidden">
                            <div className="relative w-full h-full flex items-center justify-center rounded-lg">
                              <Link href={card.articleLink} passHref>
                                <Image
                                  src={image}
                                  fill
                                  alt={`${card.title} - Slika ${imgIndex + 1}`}
                                  className="rounded-lg object-contain"
                                />
                              </Link>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {card.images.length > 1 && (
                      <>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9" />
                      </>
                    )}
                  </Carousel>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[200px] sm:h-[250px] md:h-[280px] text-muted-foreground text-sm italic">
                  Nema dostupne slike
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2">
              {/* Details Button */}
              <Link href={card.articleLink} passHref>
                <Button variant="outline" className="text-sm px-4 py-2">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Detalji
                </Button>
              </Link>

              {/* Inquiry Button */}
              <ContactDialog productName={card.title} />
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
