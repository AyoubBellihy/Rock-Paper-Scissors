var scoreInfo = document.getElementById('scoreInfo');
var scoreMessage = document.getElementById('scoreMessage');

var playDisplay = document.getElementById('playerChoice');
var compDisplay = document.getElementById('computerChoice');

var playScore = document.getElementById('playerScore');
var compScore = document.getElementById('computerScore');

var modal = document.getElementById('modalBox');
var finalResult = document.getElementById('finalResult');

var tryAgain = document.querySelector('.tryAgainBtn');
tryAgain.addEventListener('click', refreshPage);

// Function to refresh Page
function refreshPage() {
    window.location.reload();
}

// Fucntion to open modal
function openModal() {
    modal.style.display = 'block';
}


document.addEventListener('click', clickHandler);

function clickHandler(e) {
    var clicked = e.target;
    if (clicked.className === 'click') {
        firedButton = clicked.dataset.value;
        console.log(firedButton);
        playRound();
    }
}

function computerPLay() {
    const myCollection = ['✊', '🖐️', '✌'];
    return myCollection[Math.floor(Math.random()*myCollection.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = firedButton;
    playDisplay.textContent = playerSelection;
    computerSelection = computerPLay();
    compDisplay.textContent = computerSelection;
    if (playerSelection === '✊' && computerSelection === '🖐️') {
        computerScore++;
        scoreInfo.textContent = 'You lost!';
        scoreMessage.textContent = 'Rock is beaten by Paper.';
    } else if (playerSelection === '✊' && computerSelection === '✌') {
        playerScore++;
        scoreInfo.textContent = 'You won!';
        scoreMessage.textContent = 'Rock beats Scissors.';
    } else if (playerSelection === '🖐️' && computerSelection === '✊') {
        playerScore++;
        scoreInfo.textContent = 'You won!';
        scoreMessage.textContent = 'Paper beats Rock.';
    } else if (playerSelection === '🖐️' && computerSelection === '✌') {
        computerScore++;
        scoreInfo.textContent = 'You lost!';
        scoreMessage.textContent = 'Paper is beaten by Scissors.';
    } else if (playerSelection === '✌' && computerSelection === '✊') {
        computerScore++;
        scoreInfo.textContent = 'You lost!';
        scoreMessage.textContent = 'Scissors is beaten by Rock.';
    } else if (playerSelection === '✌' && computerSelection === '🖐️') {
        playerScore++;
        scoreInfo.textContent = 'You won!';
        scoreMessage.textContent = 'Scissors beats Paper.';
    } else {
        scoreInfo.textContent = 'Draw!';
        scoreMessage.textContent = 'Try again.';
    }
    playScore.textContent = playerScore;
    compScore.textContent = computerScore;

    if (playerScore === 5) {
        finalResult.textContent = 'Congratulations! You won.'
        openModal();
    }
    if (computerScore === 5) {
        finalResult.textContent = 'Unfortunately! You lost.'
        openModal();
    }
}




