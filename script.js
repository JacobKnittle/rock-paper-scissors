// goal is to play rock paper scissors against computer

const div = document.querySelector('div');
const result = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#playerScore')
const computerScoreDisplay = document.querySelector('#computerScore');

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
    playerScoreDisplay.innerText = `Player Score: ${humanScore}`
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`

    checkForWinner(computerScore, humanScore);
}
    function checkForWinner(computerScore, humanScore) {
      if (computerScore === 5) {
        result.innerText = 'Computer Wins Game!'
      } else if (humanScore === 5) {
        result.innerText = 'Human Wins Game!'
      }
    }
    


