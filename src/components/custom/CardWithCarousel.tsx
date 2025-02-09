'use client';

import Image from 'next/image';
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
import { Send } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  images: string[];
}

export function CardWithCarousel({ cards }: { cards: CardProps[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} className="w-[420px]">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center w-md h-md">
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
                      <Image
                        src={image}
                        alt={`${card.title} - Image ${imgIndex + 1}`}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-2" />
              <CarouselNext className="mr-2" />
            </Carousel>
          </CardContent>
          <CardFooter className="grid grid-cols-12">
            <Button className=" col-span-4 col-start-9">
              <Send />
              Pošalji upit!
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
