import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models';

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
export class CardDataService {
  private readonly categoryUrl = 'http://localhost:3000/api/categories';

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
    }),
  };

  constructor(private readonly http: HttpClient) {}

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

  updateCategoryName(
    newName: string,
    category: Category,
  ): Observable<Category> {
    const url = `${this.categoryUrl}/update`;
    category.name = newName;
    return this.http.put<Category>(url, category, this.httpOptions);
  }

  createCategory(name: string): Observable<Category> {
    const url = `${this.categoryUrl}/create`;
    return this.http.put<Category>(url, name, this.httpOptions);
  }
}
