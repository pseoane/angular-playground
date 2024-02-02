import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '@app/services/hero.service';
import { Hero } from '@app/models/hero';
import { FormService } from '@app/services/form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  name = ""
  description = ""

  @Output() onAddHero = new EventEmitter<Hero>()

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formService.name$.subscribe(value => this.name = value)
    this.formService.description$.subscribe(value => this.description = value)
  }

  addHero() {
    if (this.name != "" && this.description != "") {
      this.onAddHero.emit(new Hero(this.name, this.description))
      this.formService.onFormChanged("", "")
    }
  }

  isDisabledButton(): boolean {
    return this.name == "" || this.description == ""
  }

  valueChanged() {
    this.formService.onFormChanged(this.name, this.description)
  }
}
