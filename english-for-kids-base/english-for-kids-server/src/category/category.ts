export interface Category {
  id: number;
  name: string;
  cards: CardData[];
}
export interface CardData {
  id: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}
