'use client';

import Link from 'next/link';
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
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} className="w-[420px]">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-center">
            <Carousel
              className="w-full max-w-xs"
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
                    <div className="p-1 w-md">
                      <ImageDialog image={image} alt={`${card.title} - Image ${imgIndex + 1}`} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-2" />
              <CarouselNext className="mr-2" />
            </Carousel>
          </CardContent>

          <CardFooter className="flex justify-between items-center">
            {/* Details Button (Article Link) */}
            <Link href={card.articleLink} passHref>
              <Button variant="outline">
                <ExternalLink className="mr-2 w-4 h-4" />
                Detalji
              </Button>
            </Link>

            {/* Inquiry Button with ContactDialog */}
            <ContactDialog productName={card.title} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
