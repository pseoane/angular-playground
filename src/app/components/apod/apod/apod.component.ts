import { Component, OnInit } from '@angular/core';
import { Apod } from '@app/models/apod';
import { ApodService } from '@app/services/apod.service';
import { ShowInfoComponent } from '../show-info/show-info.component';
import { PopupComponent } from '@app/components/date-picker/popup/popup.component';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [ShowInfoComponent, PopupComponent],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit {
  apod: Apod = new Apod()
  date: Date = new Date()
  constructor(private service: ApodService) {}

  ngOnInit(): void {
    this.service.apod$.subscribe(value => this.apod = value)
    this.service.date$.subscribe(value => this.onDateChangedByService(value))
  }

  onDateChangedByService(date: Date) {
    this.date = date
    this.service.getApod(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  }

  onDateSelected(date: string) {
    this.service.date$.next(new Date(date))
  }
}
