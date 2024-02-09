export class TriviaResponse {

}

export class TriviaQuestion {
    questionType: QuestionType
    difficulty: Difficulty
    category: string
    question: string
    correctAnswer: string
    incorrectAnswers: string[]
    userAnswer: string | undefined = ""
    allAnswers: string[]
    isCorrect: boolean | undefined
    
    constructor(data: any) {
        this.questionType = data["type"]
        this.difficulty = data["difficulty"]
        this.question = decodeURIComponent(data["question"])
        this.correctAnswer = decodeURIComponent(data["correct_answer"])
        this.category = data["category"]
        this.incorrectAnswers = data["incorrect_answers"].map((e: string) => decodeURIComponent(e))
        this.allAnswers = [this.correctAnswer, ...this.incorrectAnswers].sort()
    }
}

export enum Difficulty {
    Difficult = "difficult",
    Medium = "medium",
    Easy = "easy"
}

export enum QuestionType {
    Multiple = "multiple",
    Boolean = "boolean"
}