// Wait for the DOM to complete loading before running game
// Add event listeners to buttons and get their data type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let dataType = this.getAttribute("data-type");
            
            if (dataType === "start-game") {
                openGame();
            } else {
                runGame(dataType);
            }
        })
    }

})

/* Display game content in game area when clicked on start game button */
function openGame() {
    let gameArea = document.getElementsByClassName("game-area");
    gameArea.innerHTML = `<div class="results">
    <p id="result-header">YOU LOST</p>
    <p id="result-rule">Paper beats rock</p>
</div>
<div class="hands-area">
    <div id="user-hand-outer">
        <h3 class="hand-header">YOU</h3>
        <div id="user-hand-inner">
            <img class="hands rock-imgs" id="user-hand" src="assets/images/rock-left.svg" alt="rock" data-type="rock">
        </div>
    </div>
    <div id="computer-hand-outer">
        <h3 class="hand-header">COMPUTER</h3>
        <div id="computer-hand-inner">
            <img class="hands paper-imgs" id="computer-hand" src="assets/images/paper-right.svg" alt="rock" data-type="rock">
        </div>
    </div>
</div>
<div class="controls">
    <h3 id="controls-header">CHOOSE YOUR WEAPON:</h2>
    <button data-type="rock">ROCK</button>
    <button data-type="paper">PAPER</button>
    <button data-type="scissors">SCISSORS</button>
</div>`;
}

/* 
<div class="results">
            <p id="result-header">YOU LOST</p>
            <p id="result-rule">Paper beats rock</p>
        </div>
        <div class="hands-area">
            <div id="user-hand-outer">
                <h3 class="hand-header">YOU</h3>
                <div id="user-hand-inner">
                    <img class="hands rock-imgs" id="user-hand" src="assets/images/rock-left.svg" alt="rock" data-type="rock">
                </div>
            </div>
            <div id="computer-hand-outer">
                <h3 class="hand-header">COMPUTER</h3>
                <div id="computer-hand-inner">
                    <img class="hands paper-imgs" id="computer-hand" src="assets/images/paper-right.svg" alt="rock" data-type="rock">
                </div>
            </div>
        </div>
        <div class="controls">
            <h3 id="controls-header">CHOOSE YOUR WEAPON:</h2>
            <button data-type="rock">ROCK</button>
            <button data-type="paper">PAPER</button>
            <button data-type="scissors">SCISSORS</button>
        </div>
*/

/**
 * Main game function, called when content is loaded and user has made a choice.
 * Generates random computer choice and changes the user and computer hands based on choices 
 */
function runGame(dataType) {
    
    //Generate random computer choice
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (num === 1) {
        computerChoice = "rock";
    } else if (num === 2) {
        computerChoice = "paper";
    } else if (num === 3) {
        computerChoice = "scissors";
    } else {
        alert(`Unknown num: ${num}`);
    }

    let userHand = document.getElementById("user-hand-inner");
    let computerHand = document.getElementById("computer-hand-inner");

    //Change user hand image based on button clicked
    if (dataType === "rock") {
        userHand.innerHTML = '<img class="hands rock-imgs" id="user-hand" src="assets/images/rock-left.svg" alt="Rock" data-type="rock">';
    } else if (dataType === "paper") {
        userHand.innerHTML = '<img class="hands paper-imgs" id="user-hand" src="assets/images/paper-left.svg" alt="Paper" data-type="paper">';
    } else if (dataType === "scissors") {
        userHand.innerHTML = '<img class="hands scissors-imgs" id="user-hand" src="assets/images/scissors-left.svg" alt="Scissors" data-type="scissors">';
    }    

    //Change computer hand image based on random computer choice
    if (computerChoice === "rock") {
        computerHand.innerHTML = '<img class="hands rock-imgs" id="computer-hand" src="assets/images/rock-right.svg" alt="Rock" data-type="rock">';
    } else if (computerChoice === "paper") {
        computerHand.innerHTML = '<img class="hands paper-imgs" id="computer-hand" src="assets/images/paper-right.svg" alt="Paper" data-type="paper">';
    } else if (computerChoice === "scissors") {
        computerHand.innerHTML = '<img class="hands scissors-imgs" id="computer-hand" src="assets/images/scissors-right.svg" alt="Scissors" data-type="scissors">';
    } else {
        alert(`Unknown choice: ${computerChoice}`);
    }

    checkWinner();
}

function checkWinner() {
    let userImage = document.getElementById("user-hand");
    let computerImage = document.getElementById("computer-hand");
    let result = document.getElementById("result-header");
    let rule = document.getElementById("result-rule");

    if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "You won!";
        rule.textContent = "Rock beats scissors";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "You lost!";
        rule.textContent = "Paper beats rock";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
        incrementDraw();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "You won!";
        rule.textContent = "Paper beats rock";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "You lost!";
        rule.textContent = "Scissors beats paper";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
        incrementDraw();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "You won!";
        rule.textContent = "Scissors beats paper";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "rock") {
        result = "You lost!";
        rule = "Rock beats scissors";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
        incrementDraw();
    }
}

function incrementWon() {
    let score = parseInt(document.getElementById("won").textContent);
    document.getElementById("won").textContent = ++score;
}

function incrementLost() {
    let score = parseInt(document.getElementById("lost").textContent);
    document.getElementById("lost").textContent = ++score;
}

function incrementDraw() {
    let score = parseInt(document.getElementById("draw").textContent);
    document.getElementById("draw").textContent = ++score;
}