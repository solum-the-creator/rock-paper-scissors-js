"use strict"

function getComputerChoice() {

    let randomNum = random(3);
    if(randomNum === 1) return "Rock";
    if(randomNum === 2) return "Paper";
    if(randomNum === 3) return "Scissors";
}


function random(number) {
    return Math.floor(Math.random()*number+1);
}

function singleRoundOfGame(playerChoice){
    playerChoice = playerChoice.toLowerCase();
    let  computerChoice = getComputerChoice().toLowerCase();
    let result = [0,playerChoice,computerChoice];

    if(playerChoice === computerChoice) return result;

    if(playerChoice === "rock") {
        if(computerChoice === "paper"){
            result[0] = -1;
            return result;
        }
        if(computerChoice === "scissors") {
            result[0] = 1;
            return result;
        }
    }

    if(playerChoice === "paper") {
        if(computerChoice === "rock"){
            result[0] = 1;
            return result;
        }
        if(computerChoice === "scissors") {
            result[0] = -1;
            return result;
        }
    }

    if(playerChoice === "scissors") {
        if(computerChoice === "rock"){
            result[0] = -1;
            return result;
        }
        if(computerChoice === "paper") {
            result[0] = 1;
            return result;
        }
    }
}

function getMessageRound(resultRound) {

    let messageWin = "You Win! " + resultRound[1] + " beats " + resultRound[2] + " :)";
    let messageLose = "You Lose! " + resultRound[2] + " beats " + resultRound[1] + " :(";

    if(resultRound[0] === 0) return "Tie! No one get score.";

    if(resultRound[0] === 1) return messageWin;
    if(resultRound[0] === -1) return messageLose;

}



// for(let i =0; i<5; i++) {
//     let resultRound = singleRoundOfGame("paper");
//     console.log(resultRound);
//     console.log(getMessageRound(resultRound));
// }


function game() {

    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        
        let playerWeapon = prompt("Select your weapon","Scissors")||"scissors";
        
        let resultRound = singleRoundOfGame(playerWeapon);
        console.log(getMessageRound(resultRound));
        if(resultRound[0] === 1) playerScore++;
        if(resultRound[0] === -1) computerScore++;

        console.log("Player Score: "+ playerScore);
        console.log("Computer Score: "+ computerScore);

    }

    if(playerScore===5) return "Player WIN THE GAME";
    
    return "Computer WIN THE GAME";


}

console.log(game());