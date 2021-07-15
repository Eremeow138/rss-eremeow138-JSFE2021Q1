/* eslint-disable @typescript-eslint/indent */
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthenticationData } from '../models';

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
export class AuthenticationService {
  private readonly token: Subject<string>;

  private readonly authenticationUrl = 'http://localhost:3000/api/login';

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly tokenKeyForLocalStorage = 'adminToken';

  constructor(private http: HttpClient) {
    this.token = new Subject<string>();

    const localStorageToken = localStorage.getItem(
      this.tokenKeyForLocalStorage,
    );

    if (localStorageToken) {
      this.token.next(localStorageToken);
    }

    this.token.subscribe(token => {
      localStorage.setItem(this.tokenKeyForLocalStorage, token);
    });
  }

  getToken(): Observable<string> {
    return this.token.asObservable();
  }

  private authentication(
    username: string,
    password: string,
  ): Observable<string> {
    const usernameAndPassword = { username, password } as AuthenticationData;
    return this.http
      .post<string>(
        this.authenticationUrl,
        usernameAndPassword,
        this.httpOptions,
      )
      .pipe(catchError(handleError<string>('authentication', '')));
  }

  login(username: string, password: string): void {
    this.authentication(username, password).subscribe(token => {
      this.token.next(token);
    });
  }

  logout(): void {
    this.token.next('');
    localStorage.removeItem(this.tokenKeyForLocalStorage);
  }
}
