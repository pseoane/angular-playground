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

  validate(questions: TriviaQuestion[]) {
    if (questions.length == this._questions.length) {
      let answers = [...questions]
      answers.forEach((question, index) => {
         question.isCorrect = this._questions[index].correctAnswer == question.userAnswer
      })
      this._questionsSubject$.next(answers)
    }
  }

  getQuestions(amount: number, force: boolean = false) {
    if (force || this._questions.length == 0) {
      this.http.get<any[]>(
        this.BASE_URL, {params: {"amount": amount, "encode": "url3986"}}
      ).pipe(
        map((response: any) => response["results"].map((q: any) => new TriviaQuestion(q)))
      ).subscribe({
        next: (questions) => {
          console.log("Received")
          this._questions = questions
          this._questionsSubject$.next([...this._questions])
        },
        error: err => console.log(`An error has ocurred: ${err}`)
      })
    }
  }
}
