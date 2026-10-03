let userAnswer = $state("")

export function getUserAnswer() {
  return userAnswer
}

export function setUserAnswer(input: ((prev: string) => string) | string) {
  if (typeof input === "string") {
    userAnswer = input
  } else {
    userAnswer = input(userAnswer)
  }
}
