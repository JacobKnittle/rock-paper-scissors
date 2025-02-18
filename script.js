const container = document.querySelector(".container");
const playerChoiceSelect = document.querySelector(".playerChoice");
const computerChoiceSelect = document.querySelector(".computerChoice");
const roundWinner = document.querySelector(".roundWinner");
const playerShowScore = document.querySelector(".playerScore");
const computerShowScore = document.querySelector(".computerScore");
const gameWinner = document.querySelector(".gameWinner");

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
    playerChoiceSelect.textContent = `Player Choice: ${humanChoice}`;

    computerChoice = getComputerChoice();
    computerChoiceSelect.textContent = `Computer Choice: ${computerChoice}`;

    playRound(humanChoice, computerChoice);
  });

  let humanScore = 0;
  let computerScore = 0;

  // determines who wins a round of rock paper scissors and updates score
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundWinner.textContent = "Tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundWinner.textContent = "Human wins round!";
      humanScore++;
    } else {
      roundWinner.textContent = "Computer wins round!";
      computerScore++;
    }
    playerShowScore.textContent = `Player Score: ${humanScore}`;
    computerShowScore.textContent = `Computer Score: ${computerScore}`;

    checkWinner(humanScore, computerScore);
  }
}

// checks for the winner of the 5 rounds
function checkWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    gameWinner.textContent = "Player Wins the Game!";
  } else if (computerScore === 5) {
    gameWinner.textContent = "Computer Wins the Game!";
  }
}

playGame();
