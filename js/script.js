const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion () {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "Strings are commonly used in coding.",
    answers: [
      { text:"False" , correct: false },
      { text: "True", correct: true },
    ]
  },
  {
    question: "Commonly used data types do NOT use:",
    answers: [
      { text: "Strings", correct: false },
      { text: "Booleans", correct: false },
      { text: "Alerts", correct: true },
      { text: "Numbers", correct: false }
    ]
  },
  {
    question: "We use inspect to make dev tools appear in the browser.",
    answers: [
      { text: "false", correct: false },
      { text: "true", correct: true },
    ]
  },
  {
    question: "String values must be enclosed in ______ when being assigned to variables.",
    answers: [
      { text: "Quotes", correct: true },
      { text: "Parenthesis", correct: false },
      { text: "Brackets", correct: true },
      { text: "Colons", correct: false }
    ]
  }
]