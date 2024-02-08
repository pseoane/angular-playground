import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { TriviaQuestion } from '@app/models/trivia';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private BASE_URL = "https://opentdb.com/api.php"
  constructor(private http: HttpClient) { }

  private _questionsSubject$ = new BehaviorSubject<TriviaQuestion[]>([])
  private _questions: TriviaQuestion[] = []

  get questions$() {
    return this._questionsSubject$.asObservable()
  }

  answerQuestion(index: number, answer: string | boolean) {
    if (index > 0 && index < this._questions.length) {
      this._questions[index].userAnswer = answer
      this._questionsSubject$.next([...this._questions])
    }
  }

  getQuestions(amount: number) {
    this.http.get<any[]>(
      this.BASE_URL, {params: {"amount": amount, "encode": "url3986"}}
    ).pipe(
      map((response: any) => response["results"].map((q: any) => new TriviaQuestion(q)))
    ).subscribe({
      next: (questions) => {
        this._questions = questions
        this._questionsSubject$.next([...this._questions])
      },
      error: err => console.log(`An error has ocurred: ${err}`)
    })
  }
}
