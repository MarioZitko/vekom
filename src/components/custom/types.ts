import { CardItem } from '@/types/cardItem';
import { Category } from '@/types/category';

export interface HeaderProps {
  categories: Category[];
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

export interface ProductCardProps {
  title: string;
  href: string;
  image: string;
}
