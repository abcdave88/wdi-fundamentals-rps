////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    return move = move || getInput();
    
}

function getComputerMove(move) {
   return move = move || randomPlay();
    
    
}
 
function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove == computerMove){
        winner = "Tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "scissors") {winner = "player";}
        else {winner = "computer";}
    }
    
    else if (playerMove === "scissors"){
        if (computerMove === "paper") {winner = "player";}
        else {winner = "computer";}
    }
    
    else if (playerMove === "paper"){
        if (computerMove === "rock") {winner = "player";}
        else {winner = "computer";}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
  
    
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove) ;
        
        if (winner == "player") {
            playerWins +=1;
            
        }
        else if (winner == "computer") { 
            computerWins +=1;
            
        }
    
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is player ' + playerWins + ' computer ' + computerWins);
    }
}
