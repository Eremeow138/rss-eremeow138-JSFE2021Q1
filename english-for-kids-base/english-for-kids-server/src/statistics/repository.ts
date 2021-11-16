import { WordStatistics } from './staistics';

const statistics: WordStatistics[] = [
  { id: 1, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 2, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 3, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 4, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 5, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 6, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 7, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 8, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 9, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 10, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 11, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 12, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 13, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 14, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 15, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 16, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 17, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 18, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 19, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 20, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 21, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 22, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 23, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 24, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 25, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 26, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 27, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 28, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 29, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 30, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 31, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 32, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 33, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 34, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 35, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 36, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 37, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 38, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 39, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 40, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 41, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 42, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 43, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 44, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 45, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 46, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 47, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 48, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 49, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 50, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 51, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 52, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 53, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 54, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 55, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 56, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 57, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 58, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 59, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 60, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 61, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 62, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 63, trainClicks: 0, wasGuessed: 0, errors: 0 },
  { id: 64, trainClicks: 0, wasGuessed: 0, errors: 0 },
];

export function getStatistics(): Promise<WordStatistics[]> {
  return Promise.resolve<WordStatistics[]>(statistics);
}

export function updateStatistic(
  freshWordsStatistics: WordStatistics[],
): Promise<WordStatistics[]> {
  const undefindedWordsStatistics: WordStatistics[] = [];
  freshWordsStatistics.forEach(freshWordStatistic => {
    const wordStatisticIndex = statistics.findIndex(
      wordStatistics => wordStatistics.id === freshWordStatistic.id,
    );
    if (wordStatisticIndex < 0) {
      undefindedWordsStatistics.push(freshWordStatistic);
    } else {
      const currentWordStatistics = statistics[wordStatisticIndex];
      currentWordStatistics.trainClicks += freshWordStatistic.trainClicks;
      currentWordStatistics.wasGuessed += freshWordStatistic.wasGuessed;
      currentWordStatistics.errors += freshWordStatistic.errors;
      statistics[wordStatisticIndex] = currentWordStatistics;
    }
  });
  if (undefindedWordsStatistics.length > 0) {
    const undefindedWordsId = undefindedWordsStatistics.map(item => item.id);
    return Promise.reject(
      new Error(`Words with id: ${undefindedWordsId.join(', ')} not found`),
    );
  }
  return Promise.resolve(statistics);
}

export function resetStatistic(): Promise<WordStatistics[]> {
  statistics.forEach(wordStatistics => {
    wordStatistics.errors = 0;
    wordStatistics.trainClicks = 0;
    wordStatistics.wasGuessed = 0;
  });
  return Promise.resolve(statistics);
}
