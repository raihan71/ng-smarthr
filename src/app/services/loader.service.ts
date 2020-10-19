import { Loader } from './../models/loader.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<Loader>();
  loader = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next({show: true} as Loader);
  }

  hide() {
    this.loaderSubject.next({show: false} as Loader);
  }
}
