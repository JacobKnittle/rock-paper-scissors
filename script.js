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






// write function playGame that calls playRound 5 times and determines winner
function playGame() {
     // score counters
    let humanScore = 0;
    let computerScore = 0;

    // play a single round and increment winners core, console.log the winner of the round
function playRound(computerChoice, humanChoice) {
    

    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)
    console.log(computerChoice)
  

  // scenarios where computer wins
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    console.log('The computer wins this round!')
  }
  // where the human would win
  else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    console.log('The human wins this round!')
    // if theres a tie
    } else {
        console.log('It is a Tie!')
    }
}
    // plays the game 5 times
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    // whoever had more points at the end of 5 round they are declared the winner
    if (humanScore > computerScore) {
        console.log('Human wins the Game!')
    } else if (computerScore > humanScore) {
        console.log('Computer wins the match!')
    } else {
        console.log('It is a Tie!')
    }
}

playGame()