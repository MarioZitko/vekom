'use client';

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import { ImageDialogProps } from './types';

export function ImageDialog({ image, alt }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center">
        {/* Accessible Dialog Title */}
        <DialogTitle>{alt}</DialogTitle>
        <Image src={image} alt={alt} width={600} height={400} className="rounded-lg object-cover" />
      </DialogContent>
    </Dialog>
  );
}
