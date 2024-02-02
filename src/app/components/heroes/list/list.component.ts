import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '@app/models/hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() heroesList: Hero[] = []
  @Output() onDeleteHero = new EventEmitter<number>()

  constructor() {}

  deleteHero(i: number) {
    this.onDeleteHero.emit(i)
  }
}
