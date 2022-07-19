// Wait for the DOM to complete loading before running game
// Add event listeners to buttons and get their data type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            console.log(this);
            let dataType = this.getAttribute("data-type");
            
            if (dataType === "start-game") {
                openGame();
                console.log('openGame');
            } else if (dataType !== "start-game") {
                runGame(dataType);
                console.log(dataType);
            }
        });
    }
});

/* Display game content in game area when start game button is clicked */
function openGame() {
    let gameScreen = document.getElementById("game-screen");
    let introScreen = document.getElementById("intro-screen");
    gameScreen.classList.remove("hide-div");
    gameScreen.classList.add("show-div");
    introScreen.classList.remove("show-div");
    introScreen.classList.add("hide-div");
}

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
        result.textContent = "YOU WON!";
        rule.textContent = "Rock beats scissors";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "YOU LOST";
        rule.textContent = "Paper beats rock";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "IT'S A DRAW";
        rule.textContent = "Try again";
        incrementDraw();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "YOU WON!";
        rule.textContent = "Paper beats rock";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "YOU LOST";
        rule.textContent = "Scissors beats paper";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "IT'S A DRAW";
        rule.textContent = "Try again";
        incrementDraw();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "YOU WON!";
        rule.textContent = "Scissors beats paper";
        incrementWon();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "rock") {
        result = "YOU LOST";
        rule = "Rock beats scissors";
        incrementLost();
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "IT'S A DRAW";
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