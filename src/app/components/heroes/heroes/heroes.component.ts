import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '@app/components/heroes/form/form.component';
import { Hero } from '@app/models/hero';
import { HeroService } from '@app/services/hero.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent, ListComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.heroes$.subscribe(value => this.heroes = value)
  }

  addHero(hero: Hero) {
    this.heroService.addHero(hero)
  }

  deleteHero(index: number) {
    console.log(index)
    this.heroService.deleteHero(index)
  }
}
