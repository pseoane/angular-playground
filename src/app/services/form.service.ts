import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  name$ = new BehaviorSubject<string>("")
  description$ = new BehaviorSubject<string>("")

  constructor() { }

  onFormChanged(name: string, description: string) {
    this.name$.next(name)
    this.description$.next(description)
  }
}
