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

const playerScoreBox = document.querySelector('.player-score');
const computerScoreBox = document.querySelector('.computer-score');
const resultGameBox = document.querySelector('.game-result');

const playerBox = document.querySelector('.player-box');
const computerBox = document.querySelector('.computer-box');

function createMessageRound(e) {


    const messageBox = document.querySelector('.message-box');
    const messageResRound = document.querySelector('.round-number');
    let resRound = singleRoundOfGame(this.dataset.weapon);
    let messageRound = getMessageRound(resRound);
    messageResRound.textContent = messageRound[0];
    messageBox.textContent = messageRound[1];

    gameUI(resRound,playerScoreBox,computerScoreBox,resultGameBox);

    // while(playerScore < 5 && computerScore < 5) {
        

        

    //     if(resRound[0] === 1) playerScore++;
    //     if(resRound[0] === -1) computerScore++;

    //     playerScoreBox.textContent = "Player Score: "+ playerScore;
    //     computerScoreBox.textContent = "Computer Score: "+ computerScore;
    // }

    // if(playerScore===5) resultGameBox = "Player WIN THE GAME!";
    
}



function gameUI(resRound,playerScoreBox, computerScoreBox, resultGameBox) {
    let playerScore = +playerScoreBox.dataset.playerScore;
    let computerScore = +computerScoreBox.dataset.computerScore;
    if(playerScore === 5 || computerScore === 5) {
        resetGame();
        computerScore = 0;
        playerScore = 0;
    }

    playerBox.textContent = textToEmoji(resRound[1]);
    computerBox.textContent = textToEmoji(resRound[2]);

    if(resRound[0] === 1) {
        
        playerScoreBox.dataset.playerScore = ++playerScore;

        playerScoreBox.textContent = "Player: " + playerScore;
    }
    if(resRound[0] === -1){
        computerScoreBox.dataset.computerScore = ++computerScore;
        computerScoreBox.textContent = "Computer: " + computerScore;
    }

    if(playerScore === 5) {
        resultGameBox.textContent = "Player WIN THE GAME!";

    }
    if(computerScore === 5) {
        resultGameBox.textContent = "Computer WIN THE GAME!";

    }
    

}

function resetGame() {
    resultGameBox.textContent = "";
    computerScoreBox.dataset.computerScore = 0;
    playerScoreBox.dataset.playerScore = 0;
    playerScoreBox.textContent = "Player: 0";
    playerBox.textContent = '❔';
    computerBox.textContent = '❔';
    computerScoreBox.textContent = "Computer: 0";
}

const weapons = document.querySelectorAll('.weapon');

weapons.forEach((weapon) => weapon.addEventListener('click',createMessageRound));
weapons.forEach((weapon) => weapon.addEventListener('click',startGame,{once: true}));
function startGame(e){
    computerScoreBox.textContent = "Computer: " + computerScoreBox.dataset.computerScore;
    playerScoreBox.textContent = "Player: " + playerScoreBox.dataset.playerScore;

}

function textToEmoji(text){
    text = text.toLowerCase();
    if(text === "paper") return '✋';
    if(text === "rock") return '✊';
    if(text === "scissors") return '✌';
    return;
}

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }


function getMessageRound(resultRound) {


    let messageWin = ["You Won!",ucFirst(resultRound[1] + " beats " + resultRound[2] + " :)")];
    let messageLose =["You lost!", ucFirst(resultRound[2] + " beats " + resultRound[1] + " :(")];

    if(resultRound[0] === 0) return ["It's tie!", ucFirst(resultRound[1] + " ties with " + resultRound[2])];

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

