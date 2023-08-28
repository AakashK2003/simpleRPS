const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

const emojiChoices = {
  rock: '✊',
  paper: '🖐️',
  scissors: '✌️'
};

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.getAttribute('data-choice');
  userChoiceDisplay.innerHTML = emojiChoices[userChoice];
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const choices = Object.keys(emojiChoices);
  const randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = emojiChoices[computerChoice];
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper')
  ) {
    result = 'You lose!';
  } else {
    result = 'You win!';
  }
  resultDisplay.innerHTML = result;
}
