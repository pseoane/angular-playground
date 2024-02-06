import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '@app/models/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  beers$ = new BehaviorSubject<Beer[]>([])
  private beers: Beer[] = []

  constructor(private http: HttpClient) { }

  getBeers() {
    this.http.get<any[]>("https://api.punkapi.com/v2/beers").subscribe(
      value => this.updateBeers(value)
    )
  }

  private updateBeers(data: any[]) {
    this.beers = data.map(e => new Beer(e))
    this.beers$.next(this.beers)
  }

  filterBeers(range: number[]) {
    console.log(range)
    this.beers$.next(this.beers.filter(beer => beer.abv >= range[0] && beer.abv <= range[1]))
  }
}
