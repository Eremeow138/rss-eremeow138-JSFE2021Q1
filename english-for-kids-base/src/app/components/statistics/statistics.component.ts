import { Component } from '@angular/core';
import {
  KeyOfWordStatisticsForTable,
  WordStatisticsForTable,
} from 'src/app/models';
import { SortTableService, StatisticsDataService } from 'src/app/services';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  public table: WordStatisticsForTable[] = [];

  constructor(
    private readonly sortTableService: SortTableService,
    private readonly statisticsDataService: StatisticsDataService,
  ) {
    this.sortTableService.setSortColumn('category');

    this.sortTableService.getTable().subscribe(data => {
      this.table = data;
    });
  }

  clickForSort(event: Event): void {
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;
    const column = target.dataset.field as KeyOfWordStatisticsForTable;

    const columnCollection = currentTarget.childNodes;
    const sortConfig = this.sortTableService.getSortConfig();
    const colums = Array.prototype.slice.call(
      columnCollection,
    ) as HTMLElement[];
    colums.forEach(elem => elem.classList.remove('desc', 'asc'));

    if (sortConfig.column === column && sortConfig.direction === 'desc') {
      target.classList.add('asc');
    } else {
      target.classList.add('desc');
    }

    this.sortTableService.setSortColumn(column);
  }

  resetStatistics(): void {
    this.statisticsDataService.resetStatistic();
  }
}
