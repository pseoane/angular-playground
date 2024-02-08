import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from '@app/models/hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("I add a hero correctly", () => {
    const heroes = service.heroes
    const initialLength = heroes.length
    // add a hero
    service.addHero(new Hero("Spiderman", "The webnet man"))
    expect(service.heroes.length).toBe(initialLength + 1)
  })
});
