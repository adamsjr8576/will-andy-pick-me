var answerButton = document.getElementById('answer-button');
var questionInput = document.getElementById('question-input');
var clearButton = document.getElementById('clear-button');
var eightBall = document.getElementById('eight-ball-img');
var questionReveal = document.getElementById('question-reveal');
var answerReveal = document.getElementById('answer-reveal');
var clearButton = document.getElementById('clear-button');
var form = document.getElementById('magic-form');

function clickGetAnswer() {
  enableAnswerButton();
};

answerButton.addEventListener('click', clickGetAnswer);
questionInput.addEventListener('click', clearInput);

function removeEightBall() {
  eightBall.classList.remove('magic-eight-img');
  eightBall.classList.add('magic-eight-img-hidden');
};

function addAnswer(text, input) {
  questionReveal.classList.remove('question-hidden');
  questionReveal.classList.add('question-reveal');
  questionReveal.innerText = questionInput.value;
};

function addRandomAnswer() {
  answerReveal.classList.remove('question-hidden');
  answerReveal.classList.add('question-reveal');
  answerReveal.innerText = answers[randomNum];
};

function clearInput() {
  if (questionInput.value === "Ask your questions here!") {
    questionInput.value = "";
  }
};

var randomNum = Math.ceil(Math.random() * 20);
var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

function enableClearButton() {
  clearButton.disabled = false;
  clearButton.classList.remove('clear-button-style');
  clearButton.classList.add('clear-button-style-enabled');
};

function clearContentButton() {
  clearContent();
};

clearButton.addEventListener('click', clearContentButton);

  function clearContent() {
    answerReveal.classList.add('question-hidden');
    answerReveal.classList.remove('question-reveal');
    questionReveal.classList.add('question-hidden');
    questionReveal.classList.remove('question-reveal');
    eightBall.classList.add('magic-eight-img');
    eightBall.classList.remove('magic-eight-img-hidden');
  }

function enableAnswerButton() {
  if (questionInput.value.length > 0) {
    removeEightBall();
    addAnswer();
    addRandomAnswer();
    enableClearButton();
  }
}
