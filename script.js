let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    //This will return a random integer between 0 and 9
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanNum, computerNum, target) {
    let compGuess = math.abs(target - computerNum);
    let HumanGuess = math.abs(target - humanNum);

    if (humanNum > 9 || humanNum < 0)
        alert('Please return a number between 0 and 9');

    if (HumanGuess <= compGuess)
        return true;
    else
        return false;
}

function updateScore(winner) {
    if (winner === 'human')
        humanScore++;
    if (winner === 'computer')
        computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}