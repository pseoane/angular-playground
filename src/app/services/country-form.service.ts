import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@app/models/country';
import { BehaviorSubject, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryFormService {
  private countriesSubject$ = new BehaviorSubject<Country[]>([])
  constructor(private http: HttpClient) { }

  get countries$() {
    return this.countriesSubject$.asObservable()
  }

  getCountries() {
    console.log("getCountries() invoked")
    this.http.get<any[]>("https://restcountries.com/v3.1/all")
    .pipe(
      map((response: any[]) => response.map(e => new Country(e))),
    )
    .subscribe({
      next: country => this.countriesSubject$.next(country),
      error: e => console.log("Oooops, there has been an error :(")
    })
  }
}
