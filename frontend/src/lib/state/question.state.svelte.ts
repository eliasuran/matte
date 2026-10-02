import type { Question } from "../types"

let currentQuestion = $state<Question | null>(null)

export function getCurrentQuestion() {
  return currentQuestion
}

export function setCurrentQuestion(question: Question) {
  currentQuestion = question
}
