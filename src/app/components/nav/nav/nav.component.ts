import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent  } from '@app/components/heroes/heroes/heroes.component';
import { ApodComponent } from '@app/components/apod/apod/apod.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, HeroesComponent, ApodComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  active = 1
}
