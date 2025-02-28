const scoreElements = document.querySelectorAll(".score");

let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

function updateScores() {
    const scores = [playerScore, cpuScore, drawScore];

    scoreElements.forEach((element, index) => {
        if (index === 0) {
            element.textContent = `Your score: ${scores[index]}`;
        } else if (index === 1) {
            element.textContent = `Computer score: ${scores[index]}`;
        } else {
            element.textContent = `Draws: ${scores[index]}`;
        }
    });
}

function displayChoices(playerChoice, computerChoice, result) {
    document.getElementById("player-choice").textContent = `You chose ${playerChoice}`;
    document.getElementById("cpu-choice").textContent = `Computer chose ${computerChoice}`;
    document.getElementById("winner").textContent = result;
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(computerChoice, playerChoice);

    if (result === "Player wins!") {
        playerScore++;
    } else if (result === "Computer wins!") {
        cpuScore++;
    } else {
        drawScore++;
    }

    updateScores();
    displayChoices(playerChoice, computerChoice, result);
}

function playRound(playerChoice) {
    playGame(playerChoice);
}

document.getElementById('rock-btn').addEventListener('click', function() {
    playRound('rock');
});

document.getElementById('paper-btn').addEventListener('click', function() {
    playRound('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playRound('scissors');
});
