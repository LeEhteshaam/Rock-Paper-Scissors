const playerText = document.getElementById('player-score');
const computerText = document.getElementById('computer-score');
const resultText = document.getElementById('result');
const playerNum = document.getElementById('playerNum'); 
const computerNum = document.getElementById('computerNum'); // 
const gameButtons = document.querySelectorAll('.buttons');

let playerScore = 0;
let computerScore = 0;
let player;
let computer;
let result;

gameButtons.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = player; 
    computerText.textContent = computer; 
    checkWinner();
    resultText.textContent = result; 
    playerNum.textContent = playerScore;
    computerNum.textContent = computerScore;

    firstToFive(); 
}));

function computerTurn() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: 
            computer = "ROCK";
            break;
        case 2:
            computer = "SCISSORS";
            break;
        case 3: 
            computer = "PAPER";
            break;
    }
}

function checkWinner() {
    if (player === computer) {
        result = "Tie";
        return;
    }
    if (player === "SCISSORS" && computer === "PAPER") {
        result = "You win";
        playerScore += 1;
        return;
    }
    if (player === "SCISSORS" && computer === "ROCK") {
        result = "You lose";
        computerScore += 1;
        return;
    }
    if (player === "ROCK" && computer === "PAPER") {
        result = "You lose";
        computerScore += 1;
        return;
    }
    if (player === "ROCK" && computer === "SCISSORS") {
        result = "You win";
        playerScore += 1;
        return;
    }
    if (player === "PAPER" && computer === "ROCK") {
        result = "You win";
        playerScore += 1;
        return;
    }
    if (player === "PAPER" && computer === "SCISSORS") {
        result = "You lose";
        computerScore += 1;
        return;
    }
}

function firstToFive() { 
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        alert(winner + " wins!");
        reset();
    }
}

function reset() { 
    playerScore = 0;
    computerScore = 0;
    player = "-";
    computer = "-";
    result = "-";
    resultText.textContent = result; 
    playerNum.textContent = playerScore;
    computerNum.textContent = computerScore;
    playerText.textContent = player; 
    computerText.textContent = computer; 
}