// https://blog.devgenius.io/sorting-tables-in-angularjs-with-rxjs-87f9b1674c60
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import {
  KeyOfWordStatisticsForTable,
  WordStatisticsForTable,
} from 'src/app/models';
import { StatisticsDataService } from 'src/app/services';

function sort(
  data: WordStatisticsForTable[] = [],
  column: SortConfig['column'],
  direction: SortConfig['direction'] = 'desc',
): WordStatisticsForTable[] {
  return data.sort(
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
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  table$: Observable<WordStatisticsForTable[]>;

  sortableColumn$ = new BehaviorSubject<KeyOfWordStatisticsForTable>(
    'category',
  );

  sortConfig = {} as SortConfig;

  sortDirection$ = this.sortableColumn$.pipe(
    scan<KeyOfWordStatisticsForTable, SortConfig>((config, column) => {
      return config.column === column
        ? { column, direction: config.direction === 'desc' ? 'asc' : 'desc' }
        : { column, direction: 'desc' };
    }),
  );

  constructor(private readonly statisticsDataService: StatisticsDataService) {
    this.table$ = this.statisticsDataService.calculateStatistisForTable();
  }

  ngOnInit(): void {
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

  clickForSort(event: Event): void {
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;
    const column = target.dataset.field as KeyOfWordStatisticsForTable;

    const columnCollection = currentTarget.childNodes;

    const colums = Array.prototype.slice.call(
      columnCollection,
    ) as HTMLElement[];
    colums.forEach(elem => elem.classList.remove('desc', 'asc'));

    if (
      this.sortConfig.column === column &&
      this.sortConfig.direction === 'desc'
    ) {
      target.classList.add('asc');
    } else {
      target.classList.add('desc');
    }

    this.setSortColumn(column);
  }
}
