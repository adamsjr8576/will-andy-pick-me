var answerButton = document.getElementById('answer-button');
var questionInput = document.getElementById('question-input');
var clearButton = document.getElementById('clear-button');
var eightBall = document.getElementById('eight-ball-img');
var questionReveal = document.getElementById('question-reveal');
var answerReveal = document.getElementById('answer-reveal');

function clickGetAnswer() {
  removeEightBall();
  addAnswer(questionReveal, questionInput);
  addRandomAnswer();
}

answerButton.addEventListener('click', clickGetAnswer);
questionInput.addEventListener('click', clearInput);

function removeEightBall() {
  eightBall.classList.remove('magic-eight-img');
  eightBall.classList.add('magic-eight-img-hidden');
}

function addAnswer(text, input) {
  text.classList.remove('question-hidden');
  text.classList.add('question-reveal');
  text.innerText = input.value;
}

function clearInput() {
  if (questionInput.value === "Ask your questions here!") {
    questionInput.value = "";
  }
}

function addRandomAnswer() {
  answerReveal.classList.remove('question-hidden');
  answerReveal.classList.add('question-reveal');
  answerReveal.innerText = answers[randomNum];
}

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








// function addText(text) {
//   var newPar = document.createElement('p');
//   var inputQuestion = document.createTextNode(text);
//   newPar.appendChild(inputQuestion);
//
//   document.body.section.insertBefore(newPar, eightBall);
// }
