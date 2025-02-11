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
          width={280}
          height={180}
          className="rounded-lg object-cover w-full cursor-pointer"
        />
      </DialogTrigger>

      <DialogContent className="max-w-xs sm:max-w-md flex flex-col items-center">
        <DialogTitle className="text-lg font-semibold">{alt}</DialogTitle>
        <Image src={image} alt={alt} width={400} height={300} className="rounded-lg object-cover" />
      </DialogContent>
    </Dialog>
  );
}
