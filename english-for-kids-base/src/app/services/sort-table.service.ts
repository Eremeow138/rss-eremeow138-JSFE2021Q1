// https://blog.devgenius.io/sorting-tables-in-angularjs-with-rxjs-87f9b1674c60
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { StatisticsDataService } from '.';
import {
  Category,
  KeyOfWordStatisticsForTable,
  WordStatisticsForTable,
} from '../models';
import { CardDataService } from './card-data.service';

function sort(
  data: WordStatisticsForTable[] = [],
  column: SortConfig['column'],
  direction: SortConfig['direction'] = 'desc',
): WordStatisticsForTable[] {
  const dataClone = data.slice();
  return dataClone.sort(
    (rowOne: WordStatisticsForTable, rowTwo: WordStatisticsForTable) => {
      const firstValue = rowOne[column];
      const secondValue = rowTwo[column];
      const isDescending = direction === 'desc';
      // values are equal so return 0 -- don't need to sort
      if (firstValue === secondValue) return 0;

      const answer = firstValue > secondValue ? -1 : 1;

      return isDescending ? answer * -1 : answer;
    },
  );
}
interface SortConfig {
  column: KeyOfWordStatisticsForTable;
  direction: 'asc' | 'desc';
}
@Injectable({
  providedIn: 'root',
})
export class SortTableService {
  private table$: Observable<WordStatisticsForTable[]>;

  private sortableColumn$ = new BehaviorSubject<KeyOfWordStatisticsForTable>(
    'category',
  );

  private sortConfig = {} as SortConfig;

  private sortDirection$ = this.sortableColumn$.pipe(
    scan<KeyOfWordStatisticsForTable, SortConfig>(
      (config, column) => {
        return config.column === column
          ? { column, direction: config.direction === 'desc' ? 'asc' : 'desc' }
          : { column, direction: 'desc' };
      },
      { column: 'category', direction: 'asc' },
    ),
  );

  constructor(
    private readonly statisticsDataService: StatisticsDataService,
    private readonly cardDataService: CardDataService,
  ) {
    this.table$ = this.statisticsDataService.calculateStatistisForTable();

    this.table$ = combineLatest([this.table$, this.sortDirection$]).pipe(
      map(([data, sortConfig]) => {
        return sortConfig.column
          ? sort(data, sortConfig.column, sortConfig.direction)
          : data;
      }),
    );

    this.sortDirection$.subscribe(config => {
      this.sortConfig = config;
    });
  }

  setSortColumn(column: KeyOfWordStatisticsForTable): void {
    this.sortableColumn$.next(column);
  }

  getTable(): Observable<WordStatisticsForTable[]> {
    return this.table$;
  }

  getSortConfig(): SortConfig {
    return this.sortConfig;
  }

  getDifficultWords(): Observable<Category> {
    return combineLatest([
      this.table$,
      this.cardDataService.getCategories(),
    ]).pipe(
      map(([tableWords, categories]) => {
        const difficultWordsStatistics = sort(tableWords, 'rightAnswers', 'asc')
          .filter(item => item.rightAnswers !== 0 && item.rightAnswers !== 100)
          .slice(0, 8);

        const allCards = categories
          .map(category => category.cards)
          .reduce((cards, card) => cards.concat(card), []);

        const neededCards = allCards.filter(card =>
          difficultWordsStatistics.some(
            wordStatistic => card.id === wordStatistic.id,
          ),
        );
        return {
          id: 0,
          name: 'Difficult words',
          cards: neededCards,
        };
      }),
    );
  }
}
