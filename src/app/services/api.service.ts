import { config } from './../utils/config.util';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  onError(resp: Response) {
    const body = resp;
    return throwError(body);
  }

  request(path: string, body?: any, is_jwt?: boolean): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    if (is_jwt) {
      const fakerCode = JSON.parse(this.auth.getSession());
      const faker = 'Bearer ' + fakerCode.access_token;
      if (fakerCode) {
        headers = headers.set('Authorization', faker);
      }
    }

    const options = {
      headers
    };

    return this.http.post(config.apiUrl + path, body, options)
      .pipe(map(resp => resp)).pipe(catchError(err => this.onError(err.error)));

  }

  requestGet(path: string, is_jwt?: boolean): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    if (is_jwt) {
      const fakerCode = JSON.parse(this.auth.getSession());
      const faker = 'Bearer ' + fakerCode.access_token;
      if (fakerCode) {
        headers = headers.set('Authorization', faker);
      }
    }

    // const params = new HttpParams;

    const options = {
      headers
    };

    return this.http.get(config.apiUrl + path, options)
    .pipe(map(resp => resp)).pipe(catchError(err => this.onError(err.error)));
  }

}
