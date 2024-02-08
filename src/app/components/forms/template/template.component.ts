import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryFormService } from '@app/services/country-form.service';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbTypeaheadModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent implements OnInit {
  powers = ["Really Smart", "Extra Strong", "Can Fly", "Invisible"]
  model = {id: 0, name: "", power: "", alterEgo: "", country: ""}
  countryNames: string[] = []
  submitted = false

  constructor(private countryService: CountryFormService) {}

  onSubmit() {
    this.submitted = true
  }

  ngOnInit(): void {
    this.countryService.countries$.subscribe({
      next: countries => this.countryNames = countries.map(country => country.commonName),
      error: err => console.log("An error ocurred while getting countries :/ " + err)
    })
    this.countryService.getCountries()
  }

  newHero() {
    this.model = {id: 0, name: "", power: this.powers[0], alterEgo: "", country: ""}
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term) =>
      term.length < 2 ? [] : this.countryNames.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
    ),
  );
}
