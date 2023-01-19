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

    if(playerChoice === computerChoice) return "Tie! No one get score.";

    if(playerChoice === "rock") {
        if(computerChoice === "paper"){
            return "You Lose! Paper beats Rock :(";
        }
        if(computerChoice === "scissors") {
            return "You Win! Rock beats Scissors :)";
        }
    }

    if(playerChoice === "paper") {
        if(computerChoice === "rock"){
            return "You Win! Paper beats Rock :)";
        }
        if(computerChoice === "scissors") {
            return "You Lose! Scissors beats Paper :(";
        }
    }

    if(playerChoice === "scissors") {
        if(computerChoice === "rock"){
            return "You Lose! Rock beats Scissors :(";
        }
        if(computerChoice === "paper") {
            return "You Win! Scissors beats Paper :)";
        }
    }
}


