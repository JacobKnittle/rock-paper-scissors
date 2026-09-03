// goal is to play rock paper scissors against computer

 // score counters
    let humanScore = 0;
    let computerScore = 0;

// selecting the choice buttons for player
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.target.innerText)
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

// getting the humans choice
function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors");
  return userInput;
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
    
    // whoever had more points at the end of 5 round they are declared the winner
    if (humanScore > computerScore) {
        console.log('Human wins the Game!')
    } else if (computerScore > humanScore) {
        console.log('Computer wins the match!')
    } else {
        console.log('It is a Tie!')
    }


