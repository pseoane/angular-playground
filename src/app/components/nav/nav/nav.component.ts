import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent  } from '@app/components/heroes/heroes/heroes.component';
import { ApodComponent } from '@app/components/apod/apod/apod.component';
import { BeersComponent } from '@app/components/beers/beers/beers.component';
import { TemplateComponent } from '@app/components/forms/template/template.component';
import { ReactiveComponent } from '@app/components/forms/reactive/reactive.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, HeroesComponent, ApodComponent, BeersComponent, TemplateComponent, ReactiveComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  active = 5
}
