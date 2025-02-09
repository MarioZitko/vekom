import { CardItem } from '@/types/cardItem';
import { Product } from '../../types/product';

export interface HeaderProps {
  products: Product[];
}

export interface ImageDialogProps {
  image: string;
  alt: string;
}

export interface CardWithCarouselProps {
  cards: CardItem[];
}

export interface ContactDialogProps {
  productName: string;
}
