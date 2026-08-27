// goal is to play rock paper scissors against computer

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

// getting the humans choice
function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors");
  return userInput;
}

// score counters
let humanScore = 0;
let computerScore = 0;

// game will be played one round at a time
// create function playRound that takes the human and computers choices as arguments
function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)
    console.log(computerChoice)
  // play a single round and increment winners core, console.log the winner of the round

  // scenarios where computer wins
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log('The computer wins this round!')
  }
  else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    console.log('The human wins this round!')
    } else {
        console.log('It is a Tie!')
    }
}

playRound(getComputerChoice(), getHumanChoice());

// write function playGame that calls playRound 5 times
// move the playRound function within the playGame
// move the score variables inside playGame
// make a loop that runs 5 times on playGame
