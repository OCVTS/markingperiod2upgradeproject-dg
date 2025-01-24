/*setting all variables to 0 so it starts off as a fresh game. The playerRoll and computerRoll are to indicate whos rolling what. The playerTotal and computerTotal are the combined scores of the numbers they rolled. 
The playerScore and computerScore are to keep track of who won how many rounds.  */
let playerRoll1 = 0;
let computerRoll1 = 0;
let playerRoll2 = 0;
let computerRoll2 = 0;
let playerTotal = 0;
let computerTotal = 0;
let playerScore = 0;
let computerScore = 0;

//by clicking the button it triggers the button to "roll" the dice.//
document.getElementById('rollButton').addEventListener('click', rollDice);



/*********** function to generate random dice rolls ***************/
function rollDice() {
    playerRoll1 = Math.floor(Math.random() * 6) + 1;
    playerRoll2 = Math.floor(Math.random() * 6) + 1;
    computerRoll1 = Math.floor(Math.random() * 6) +1;
    computerRoll2 = Math.floor(Math.random() * 6) +1;
    calculateScore();
}


/*********** function to calculate the result, determine winner, and update the score ***************/
function calculateScore() {
playerTotal = playerRoll1 + playerRoll2;
computerTotal = computerRoll1 + computerRoll2;

// This is how we will determine the winner of the game//
if (playerTotal > computerTotal) {
    document.getElementById("winner").innerHTML = 'Player wins!';
    playerScore += 1;

}else if(playerTotal < computerTotal) {
    document.getElementById("winner").innerHTML = 'Computer wins!';
    computerScore += 1;

}else if(playerTotal === computerTotal) {
    document.getElementById("winner").innerHTML = `It's a tie!`;

}else {
    document.getElementById("winner").innerHTML = 'There is an error!';
}

displayResults()
}



/*********** function to display the current roll and scores ***************/
function displayResults() {
    document.getElementById("playerDice").innerHTML = `Player rolled a ${playerRoll1} and a ${playerRoll2}`;
    document.getElementById("computerDice").innerHTML = `Computer rolled a ${computerRoll1} and a ${computerRoll2}`;
    document.getElementById("playerTotal").innerHTML = `Player total roll: ${playerTotal}`;
    document.getElementById("computerTotal").innerHTML = `Computer total roll: ${computerTotal}`;
    document.getElementById("playerScore").innerHTML = `Player score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer score: ${computerScore}`;

}


