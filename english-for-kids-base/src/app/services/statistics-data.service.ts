import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MethodAndField, WordStatisticsForTable } from '../models';
import { WordStatistics } from '../models/word-statistics';
import { CardDataService } from './card-data.service';

function handleError<T>(operation = 'operation', result?: T) {
  return (error: Response): Observable<T> => {
    // TODO: better job of transforming error for user consumption
    console.error(`${operation} failed: ${error.status}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
@Injectable({
  providedIn: 'root',
})
export class StatisticsDataService {
  private readonly statisticUrl = 'api/statistics';

  private readonly statistics: BehaviorSubject<WordStatistics[]>;

  private readonly statisticsForTable: BehaviorSubject<
    WordStatisticsForTable[]
  >;

  private readonly keyForLocalStorage = 'statistics';

  constructor(
    private readonly http: HttpClient,
    private readonly cardDataService: CardDataService,
  ) {
    this.statistics = new BehaviorSubject<WordStatistics[]>([]);

    this.statisticsForTable = new BehaviorSubject<WordStatisticsForTable[]>([]);

    const statisticsFromLocalStorage = localStorage.getItem(
      this.keyForLocalStorage,
    );

    if (!statisticsFromLocalStorage) {
      this.getStatisticsFromServer().subscribe(statistics => {
        this.statistics.next(statistics);
        this.updateLocalStorage(statistics);
      });
    } else {
      this.statistics.next(JSON.parse(statisticsFromLocalStorage));
    }

    this.statistics.subscribe(statistics => {
      this.updateLocalStorage(statistics);
    });
  }

  getStatistics(): Observable<WordStatistics[]> {
    return this.statistics.asObservable();
  }

  private getStatisticsFromServer(): Observable<WordStatistics[]> {
    return this.http
      .get<WordStatistics[]>(this.statisticUrl)
      .pipe(catchError(handleError<WordStatistics[]>('getStatistics', [])));
  }

  calculateStatistisForTable(): Observable<WordStatisticsForTable[]> {
    // const statistics = this.getStatistics();
    const statistics = of(this.statistics.getValue());
    const categories = this.cardDataService.getCategories();
    const statisticToTable: WordStatisticsForTable[] = [];

    forkJoin([categories, statistics]).subscribe(results => {
      results[0].forEach(category => {
        category.cards.forEach(card => {
          const stat = results[1].find(item => item.id === card.id);

          if (stat) {
            const { wasGuessed, errors } = stat;
            const rightAnswers =
              wasGuessed !== 0
                ? +((wasGuessed / (wasGuessed + errors)) * 100).toFixed(2)
                : 0;
            statisticToTable.push({
              id: card.id,
              category: category.name,
              word: card.word,
              translation: card.translation,
              trainClicks: stat.trainClicks,
              wasGuessed,
              errors,
              rightAnswers,
            });
          }
        });
      });
    });
    return of(statisticToTable);
    // this.statisticsForTable.next(statisticToTable);
  }

  sortTable(
    sortMethodAndField: MethodAndField,
  ): Observable<WordStatisticsForTable[]> {
    return this.calculateStatistisForTable().pipe(
      map(arr =>
        arr.sort((a, b) => {
          return a[sortMethodAndField.field] > b[sortMethodAndField.field]
            ? -1
            : 1;
        }),
      ),
    );
  }

  getStatisticForTable(): Observable<WordStatisticsForTable[]> {
    return this.statisticsForTable.asObservable();
  }

  updateTrainClickById(targetId: string): void {
    const currentStatistics = this.statistics.getValue();
    const freshStatistcs = currentStatistics.map(item => {
      const { id, trainClicks, wasGuessed, errors } = item;
      const updatedTrainClicks = trainClicks + 1;
      return id === targetId
        ? { id, trainClicks: updatedTrainClicks, wasGuessed, errors }
        : item;
    });
    this.statistics.next(freshStatistcs);
  }

  private updateLocalStorage(freshStatistics: WordStatistics[]): void {
    localStorage.setItem(
      this.keyForLocalStorage,
      JSON.stringify(freshStatistics),
    );
  }

  updateStatisticAfterGame(freshStatisticData: WordStatistics[]): void {
    const statistics = this.statistics.getValue().slice(0);

    freshStatisticData.forEach(wordStatistics => {
      const index = statistics.findIndex(item => item.id === wordStatistics.id);
      statistics[index].errors += wordStatistics.errors;
      statistics[index].wasGuessed += wordStatistics.wasGuessed;
    });
    this.statistics.next(statistics);
  }
}
