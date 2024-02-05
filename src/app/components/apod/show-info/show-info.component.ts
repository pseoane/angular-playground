import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { PopupComponent } from '@app/components/date-picker/popup/popup.component';
import { Apod } from '@app/models/apod';

@Component({
  selector: 'app-show-info',
  standalone: true,
  imports: [JsonPipe, PopupComponent],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.scss'
})
export class ShowInfoComponent {
  @Input() apod: Apod = new Apod()

  constructor() {}
}