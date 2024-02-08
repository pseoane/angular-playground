import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionType, TriviaQuestion } from '@app/models/trivia';
import { TriviaService } from '@app/services/trivia.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  questions: TriviaQuestion[] = []

  constructor(private service: TriviaService) {}

  ngOnInit(): void {
    this.service.questions$.subscribe(questions => this.questions = questions)
    this.service.getQuestions(10)
  }


}
