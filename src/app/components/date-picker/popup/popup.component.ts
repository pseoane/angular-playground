import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbAlertModule, NgbDate, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'ngbd-datepicker-popup',
	standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
	templateUrl: 'popup.component.html',
})
export class PopupComponent implements OnChanges {
  model: NgbDateStruct = new NgbDate(1990, 1, 1)

  constructor() {}

  @Output() onDateSelected = new EventEmitter<string>()
  @Input() date = new Date()

  ngOnChanges(changes: SimpleChanges): void {
    console.log("dd")
    if (changes["date"] && changes["date"].currentValue != changes["date"].previousValue) {
      this.model = new NgbDate(
        changes["date"].currentValue.getFullYear(),
        changes["date"].currentValue.getMonth() + 1,
        changes["date"].currentValue.getDate()
      )
    }
  }

  dateSelect() {
    this.onDateSelected.emit(`${this.model.year}-${this.model.month}-${this.model.day}`)
  }

  today() {
    let todayDate = new Date()
    return {
      "year": todayDate.getFullYear(),
      "month": todayDate.getMonth() + 1, // 0 = January
      "day": todayDate.getDate()
    }
  }
}