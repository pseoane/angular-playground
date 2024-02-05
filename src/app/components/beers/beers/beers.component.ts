import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Beer } from '@app/models/beer';
import { BeersService } from '@app/services/beers.service';

@Component({
  selector: 'app-beers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './beers.component.html',
  styleUrl: './beers.component.scss'
})
export class BeersComponent implements OnInit {
  beers: Beer[] = []

  constructor(private service: BeersService) {}

  ngOnInit(): void {
    this.service.beers$.subscribe(value => this.beers = value)
    this.service.getBeers()
  }
}
