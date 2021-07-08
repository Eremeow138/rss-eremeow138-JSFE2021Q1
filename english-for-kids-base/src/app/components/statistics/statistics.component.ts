import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  KeyOfWordStatisticsForTable,
  MethodAndField,
  WordStatisticsForTable,
} from 'src/app/models';
import { StatisticsDataService } from 'src/app/services';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  statisticsOfAllWords$!: Observable<WordStatisticsForTable[]>;

  private methodAndField = new BehaviorSubject<MethodAndField>({
    method: 'asс',
    field: 'category',
  });

  constructor(private readonly statisticsDataService: StatisticsDataService) {}

  clickForSort(event: Event): void {
    const target = event.target as HTMLElement;
    const field = target.dataset.field as KeyOfWordStatisticsForTable;
    const method =
      this.methodAndField.getValue().method === 'asc' ? 'desc' : 'asc';
    this.methodAndField.next({ method, field });
  }

  ngOnInit(): void {
    this.statisticsOfAllWords$ = this.methodAndField.pipe(
      switchMap((methodAndField: MethodAndField) =>
        this.sortTable(methodAndField),
      ),
    );
  }

  sortTable(
    methodAndField: MethodAndField,
  ): Observable<WordStatisticsForTable[]> {
    return this.statisticsDataService.calculateStatistisForTable().pipe(
      map(arr =>
        arr.sort((a, b) => {
          return a[methodAndField.field] > b[methodAndField.field] ? 1 : -1;
        }),
      ),
    );
  }
}
