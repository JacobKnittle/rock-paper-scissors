// What inputs will your program have? Will the user enter data or will you get input from somewhere else?

// user enters a string of rock paper or scissors

// What’s the desired output?

// the winner will be determined and outputted in the console after 5 rounds of rock paper scissors

// Given your inputs, what are the steps necessary to return the desired output?

// getComputerChoice will randomly return either “rock”, “paper” or “scissors”
function getComputerChoice() {
  // use math.random to get a random number between 0 - 1 divided into three parts
  let randomNumber = Math.random();

  // depending on the number a certain choice will be selected and returned
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

// getHumanChoice will prompt the use for a choice and return that choice cap insensitive
function getHumanChoice() {
  return prompt("Rock Paper or Scissors? ").toLowerCase();
}

let humanChoice = getHumanChoice();
console.log(humanChoice);

// create a humanScore and a computerScore in the global scope set to 0
let humanScore = 0;
let computerScore = 0;

// create a function playRound with two parameters humanChoice and computerChoice that plays one round
function playRound(humanChoice, computerChoice) {
  // console.log the winner of the match based on having conditionals for all outcomes while also incrementing the human or computer score

  // human chooses rock outcomes
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human wins!");
    humanScore++;
  }

  // human chooses paper outcomes
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human Wins!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Tie!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer Wins!");
    computerScore++;
  }
  console.log(humanScore, computerScore);
}

playRound(humanChoice, computerChoice);

// create a function playGame that calls playRound 5 times and move the score variables within the playGame function
