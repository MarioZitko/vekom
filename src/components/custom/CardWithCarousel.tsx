'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
import { ImageDialog } from './ImageDialog';
import { CardWithCarouselProps } from './types';
import { ContactDialog } from './ContactDialog';

export function CardWithCarousel({ cards }: CardWithCarouselProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className={`grid gap-4 ${
        windowWidth < 640 ? 'grid-cols-1' : windowWidth < 1024 ? 'grid-cols-2' : 'grid-cols-3'
      } place-items-center`}
    >
      {cards.map((card, index) => (
        <Card key={index} className="w-full max-w-[320px] sm:max-w-[360px] flex flex-col">
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
                          <div className="relative w-full h-full flex items-center justify-center">
                            <ImageDialog
                              image={image}
                              alt={`${card.title} - Slika ${imgIndex + 1}`}
                            />
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
              <div className="flex items-center justify-center h-[200px] sm:h-[250px] md:h-[280px] text-gray-500 text-sm italic">
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
      ))}
    </div>
  );
}
