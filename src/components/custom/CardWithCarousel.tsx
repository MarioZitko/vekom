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

  // Prevent layout breaking after modal interactions
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // Run initially
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className={`grid gap-4 ${windowWidth < 640 ? 'grid-cols-1' : windowWidth < 1024 ? 'grid-cols-2' : windowWidth < 1280 ? 'grid-cols-3' : 'grid-cols-4'} place-items-center`}
    >
      {cards.map((card, index) => (
        <Card key={index} className="w-full max-w-[320px] sm:max-w-[360px]">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{card.title}</CardTitle>
            <CardDescription className="text-sm sm:text-base">{card.description}</CardDescription>
          </CardHeader>

          {/* Ensure consistent height */}
          <CardContent className="flex flex-col items-center lg:min-h-[260px]">
            {card.images.length > 0 ? ( // Only render carousel if images exist
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
                        <div className="p-1">
                          <ImageDialog
                            image={image}
                            alt={`${card.title} - Image ${imgIndex + 1}`}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Adjusted Arrow Positions */}
                  <CarouselPrevious className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10" />
                  <CarouselNext className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10" />
                </Carousel>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm italic">
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
