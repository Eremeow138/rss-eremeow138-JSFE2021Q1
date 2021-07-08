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
export type KeyOfWordStatisticsForTable = keyof WordStatisticsForTable;

export interface MethodAndField {
  method: string;
  field: KeyOfWordStatisticsForTable;
}
