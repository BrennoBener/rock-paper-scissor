const userChoiceButton = document.getElementById('user-choice');
const computerChoiceButton = document.getElementById('computer-choice');
const gameResult = document.getElementById('result');
const myChoice = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let challengeResult;

myChoice.forEach(myChoice => myChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceButton.innerHTML = userChoice;
randomComputerChoice();
myChallengeResult ()
}))

function randomComputerChoice () {
  const random =  Math.floor ( Math.random() *  myChoice.length + 1 );

  if (random === 1) {
    computerChoice = 'Rock';
  };
  if (random === 2) {
    computerChoice = 'Scissor';
  }
  if (random === 3) {
    computerChoice = 'Paper'
  };

  computerChoiceButton.innerHTML = computerChoice;
};

function myChallengeResult () {
  if (computerChoice === userChoice) {
    challengeResult = 'OH! It is a draw... LETS DO IT AGAIN!'
  }
  if (computerChoice === 'rock' & userChoice === 'paper') {
    challengeResult = 'YOU WIN! Wanna try again?...NOW!'
  }
  if (computerChoice === 'rock' & userChoice === 'scissor') {
    challengeResult = 'I WIN! LETS DO IT AGAIN, I LIKE TO WIN AGAINST YOU!'
  }
  if (computerChoice === 'paper' & userChoice === 'scissor') {
    challengeResult = 'You win? What?! Yeah...You win...LETS DO IT AGAIN!!!'
  }
  if (computerChoice === 'paper' & userChoice === 'rock') {
    challengeResult = 'I win...you know, it is logic! I WIN and YOU LOSE!'
  }
  if (computerChoice === 'scissor' & userChoice === 'rock') {
    challengeResult = 'Ok, you won...LET GO AGAIN!'
  }
  if (computerChoice === 'scissor' & userChoice === 'paper') {
    challengeResult = 'Haha..hahaha...hahahahhahaha I WON! YOU LOSE! ahaha...Ok, lets go again.'
  }

}
gameResult.innerHTML = challengeResult;