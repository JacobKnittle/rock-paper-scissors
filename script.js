// goal is to play rock paper scissors against computer

const div = document.querySelector('div');
const result = document.querySelector('#result');

 // score counters
    let humanScore = 0;
    let computerScore = 0;

// selecting the choice buttons for player
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    playRound(getComputerChoice(), event.target.innerText)
  })
})




// gets a random choice from computer
function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}


    
    // play a single round and increment winners core, console.log the winner of the round
function playRound(computerChoice, humanChoice) {
  
    humanChoice = humanChoice.toLowerCase();

  // scenarios where computer wins
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    result.innerText = 'The computer wins this round!'
  }
  // where the human would win
  else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    result.innerText ='The human wins this round!'
    // if theres a tie
    } else {
        result.innerText = 'It is a Tie!'
    }
}
    
    // whoever had more points at the end of 5 round they are declared the winner
    if (humanScore > computerScore) {
        console.log('Human wins the Game!')
    } else if (computerScore > humanScore) {
        console.log('Computer wins the match!')
    } else {
        console.log('It is a Tie!')
    }


