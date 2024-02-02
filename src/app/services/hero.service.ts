import { Injectable } from '@angular/core';
import { Hero } from "@app/models/hero";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _heroes: Hero[] = []
  heroes$ = new BehaviorSubject<Hero[]>(this._heroes)

  constructor() { }

  addHero(hero: Hero) {
    this._heroes.push(hero)
    this.heroes$.next([...this._heroes])
  }

  deleteHero(i: number) {
    this._heroes.splice(i, 1)
    this.heroes$.next([...this._heroes])
  }
}
