
const scoreElements = document.querySelectorAll(".score")

let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function getResult(computerChoice, playerChoice) {
    
}


function updateScores() {
    const scores = [playerScore, cpuScore, drawScore];

    scoreElements.forEach((element, index) => {
        if (index === 0) {
            element.textContent = `Your score: ${scores[index]}`;
        } else if (index === 1) {
            element.textContent = `Computer score: ${scores[index]}`;
        } else {
            element.textContent = `Draws: ${scores[index]}`
        }
    });
}






document.getElementById('rock-btn').addEventListener('click', function() {
    playRound('rock')
});

document.getElementById('paper-btn').addEventListener('click', function() {
    playRound('paper')
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playGame('scissors')
});