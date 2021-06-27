import { Word } from './word';

export interface Category {
  id: number;
  name: string;
  words: Word[];
}
