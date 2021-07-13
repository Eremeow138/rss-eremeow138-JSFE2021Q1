import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WordStatisticsForTable } from '../models';
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
  private readonly statisticUrl = 'http://localhost:3000/api/statistics';

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly statistics: BehaviorSubject<WordStatistics[]>;

  constructor(
    private readonly http: HttpClient,
    private readonly cardDataService: CardDataService,
  ) {
    this.statistics = new BehaviorSubject<WordStatistics[]>([]);
    this.getStatisticsFromServer().subscribe(statistics => {
      this.statistics.next(statistics);
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

  private updateStatisticsForWords(
    statistics: WordStatistics[],
  ): Observable<WordStatistics[]> {
    return this.http
      .put<WordStatistics[]>(this.statisticUrl, statistics, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated statistics`)),
        catchError(handleError<WordStatistics[]>('updatestatistics')),
      );
  }

  calculateStatistisForTable(): Observable<WordStatisticsForTable[]> {
    const statistics$ = this.statistics;

    const categories$ = this.cardDataService.getCategories();

    return combineLatest([categories$, statistics$]).pipe(
      map(([categories, statistics]) => {
        const statisticToTable: WordStatisticsForTable[] = [];
        categories.forEach(category => {
          category.cards.forEach(card => {
            const stat = statistics.find(item => item.id === card.id);

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
        return statisticToTable;
      }),
    );
  }

  updateTrainClickById(targetId: string): void {
    const updatedTrainClicks: WordStatistics[] = [
      {
        id: targetId,
        trainClicks: 1,
        wasGuessed: 0,
        errors: 0,
      },
    ];
    this.updateStatisticsForWords(updatedTrainClicks).subscribe(statistics => {
      this.statistics.next(statistics);
    });
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

  resetStatistic(): void {
    const statistics = this.statistics.getValue().map(item => {
      return { id: item.id, trainClicks: 0, wasGuessed: 0, errors: 0 };
    });

    this.statistics.next(statistics);
  }
}
