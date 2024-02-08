import { Injectable } from '@angular/core';
import { Hero } from "@app/models/hero";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _heroes: Hero[] = []
  heroes$ = new BehaviorSubject<Hero[]>(this._heroes)

  get heroes(): Hero[] {
    return this.heroes$.getValue()
  }

  constructor() { }

  addHero(hero: Hero) {
    if (hero.isValid) {
      this._heroes.push(hero)
      this.heroes$.next([...this._heroes])
    }
  }

  deleteHero(i: number) {
    if (i > 0 && i < this._heroes.length) {
      this._heroes.splice(i, 1)
      this.heroes$.next([...this._heroes])
    }
  }
}
