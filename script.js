const container = document.querySelector(".container");
const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const roundWinner = document.querySelector(".roundWinner");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

// return either “rock”, “paper” or “scissors” from computer
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

// calls playRound 5 times  and declares the winner
function playGame() {
  let target;
  let humanChoice;
  let computerChoice;

  // captures rock, paper, or scissors from user button press
  container.addEventListener("click", (e) => {
    target = e.target.textContent.toLowerCase();
    humanChoice = target;
    console.log(humanChoice);

    computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
  });

  let humanScore = 0;
  let computerScore = 0;

  // determines who wins a round of rock paper scissors and updates score
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Human wins round!");
      humanScore++;
    } else {
      console.log("Computer wins round!");
      computerScore++;
    }
    console.log(humanScore, computerScore);
  }
}

// checks for the winner of the 5 rounds
function checkWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log("Human wins the match!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the match!");
  } else {
    console.log("The match is a draw!");
  }
}

playGame();
