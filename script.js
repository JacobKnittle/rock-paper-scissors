// goal is to play rock paper scissors against computer

// gets a random choice from computer
function getComputerChoice() {
    
    let randomNumber = Math.random()
    console.log(randomNumber)
    
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
    // prompt the user for a choice of the three (assume valid choice)
    // console.log to test for valid choice is being  
    // return the choice as a string

// create a variable humanScore for keeping track of their score starting at 0

// create a variable for computerScore for keep track of their score starting at 0

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