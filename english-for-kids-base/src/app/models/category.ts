import { CardData } from './card-data';

export interface Category {
  id: number;
  name: string;
  cards: CardData[];
}
