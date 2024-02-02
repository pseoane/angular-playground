import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apod } from '@app/models/apod';
import { ApodService } from '@app/services/apod.service';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit {
  apod: Apod = new Apod()

  constructor(private service: ApodService) {}

  ngOnInit(): void {
    this.service.apod$.subscribe(value => {this.apod = value})
    this.service.getApod()
  }
}
