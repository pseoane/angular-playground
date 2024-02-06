import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomSliderComponent } from '@app/components/custom-slider/custom-slider.component';
import { Beer } from '@app/models/beer';
import { AbvPipe } from '@app/pipes/abv.pipe';
import { BeersService } from '@app/services/beers.service';

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [NgFor, AbvPipe, CustomSliderComponent],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit {
  beers: Beer[] = []

  constructor(private service: BeersService) {}

  filterBeers(event: number[]) {
    console.log("Beers component")
    this.service.filterBeers(event)
  }

  ngOnInit(): void {
    this.service.beers$.subscribe(value => this.beers = value)
    this.service.getBeers()
  }
}
