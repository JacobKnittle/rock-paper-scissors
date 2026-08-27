// goal is to play rock paper scissors against computer

// gets a random choice from computer
function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber <= .33) {
        console.log('rock')
        return 'rock'
    } else if (randomNumber <= .66) {
        console.log('paper')
        return 'paper'
    } else {
        console.log('scissors')
        return 'scissors'
    }
}
    
// write a function based on getting the humans choice
function getHumanChoice() {
    let userInput = prompt('Rock, Paper, or Scissors')
    return userInput
}

let humanScore = 0;
let computerScore = 0;

// game will be played one round at a time
// create function playRound that takes the human and computers choices as arguments
    // make humanChoice case insensitive
    // play a single round
    // increment winners score
    // console.log the winner of the round

// write function playGame that calls playRound 5 times
// move the playRound function within the playGame
// move the score variables inside playGame
// make a loop that runs 5 times on playGame