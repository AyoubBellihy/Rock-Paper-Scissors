function computerPLay() {
    const myCollection = ['rock', 'paper', 'scissors'];
    return myCollection[Math.floor(Math.random()*myCollection.length)];
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return `You lose! Paper beats Rock. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return `You win! Rock beats Scissors. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You win! Paper beats Rock. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return `You lose! Scissors beats Paper. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return `You lose! Rock beats Scissors. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! Scissors beats Paper. Score : You[${playerScore}] - Computer[${computerScore}]`;
    } else return `Draw! Try again. Score : You[${playerScore}] - Computer[${computerScore}]`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type Rock, Paper or Scissors');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPLay();
        //console.log(playRound(playerSelection, computerSelection));
        alert(playRound(playerSelection, computerSelection))
    }

    if (playerScore > computerScore) {
        //console.log(`You are the winner! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
        alert(`You are the winner! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
    } else if (playerScore < computerScore) {
        //console.log(`You are the loser! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
        alert(`You are the loser! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
    } else //console.log(`Equal result! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
    alert(`Equal result! Total Score : You[${playerScore}] - Computer[${computerScore}]`);
}

game();

