import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models';

function handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: better job of transforming error for user consumption
    console.error(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private categoryUrl = 'api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.categoryUrl)
      .pipe(catchError(handleError<Category[]>('getCategories', [])));
  }

  getCategory(id: number): Observable<Category | undefined> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http
      .get<Category>(url)
      .pipe(catchError(handleError<Category>(`getCategory id=${id}`)));
  }
}
