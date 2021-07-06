export interface WordStatisticsForTable {
  id: string;
  category: string;
  word: string;
  translation: string;
  trainClicks: number;
  wasGuessed: number;
  errors: number;
  rightAnswers: number;
}
