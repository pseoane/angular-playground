import { Component, EventEmitter, Output } from '@angular/core';
import { AbvPipe } from '@app/pipes/abv.pipe';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [AbvPipe, FormsModule, MatSliderModule ],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.scss'
})
export class CustomSliderComponent {
  lowerBound: number = 0
  higherBound: number = 96
  @Output() onRangeChanged = new EventEmitter<number[]>()

  formatLabel(value: number): string {
    return `${value}%`
  }

  onValueChanged() {
    console.log("Hola")
    this.onRangeChanged.emit([this.lowerBound, this.higherBound])
  }
}
