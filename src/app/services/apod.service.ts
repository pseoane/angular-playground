import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apod } from '@app/models/apod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private apod = new Apod()
  apod$ = new BehaviorSubject<Apod>(this.apod)
  date$ = new BehaviorSubject<Date>(new Date())

  constructor(private http: HttpClient) { }

  getApod(date?: string) {
    let key = "RvdRtFZmv9tCPbAJxchcbZbGGgrQ0Opl9aUYwALw"
    let url = "https://api.nasa.gov/planetary/apod"
    url = `${url}?api_key=${key}`
    if (date) {
      url = url + `&date=${date}`
    }
    let observer = {
      next: (data: any) => {
        this.apod = new Apod(data)
        this.apod$.next(this.apod)
      },
      error: (err: any) => {
        console.log(err)
      },
      complete: () => {
        console.log("Completed")
      }
    }
    this.http.get(url)
      .subscribe(observer)
  }
}
