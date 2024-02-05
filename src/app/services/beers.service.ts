import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '@app/models/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  beers$ = new BehaviorSubject<Beer[]>([])
  constructor(private http: HttpClient) { }

  getBeers() {
    this.http.get<any[]>("https://api.punkapi.com/v2/beers").subscribe(
      value => this.beers$.next(value.map(e => new Beer(e)))
    )
  }
}
