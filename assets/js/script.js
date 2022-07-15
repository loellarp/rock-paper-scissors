// Wait for the DOM to complete loading before running game
// Add event listeners to buttons and get their data type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let dataType = this.getAttribute("data-type");
            runGame(dataType);
        })
    }

})
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
        userHand.innerHTML = '<img id="user-hand" src="assets/images/rock_left.png" alt="Rock" data-type="rock">';
    } else if (dataType === "paper") {
        userHand.innerHTML = '<img id="user-hand" src="assets/images/paper_left.png" alt="Paper" data-type="paper">';
    } else if (dataType === "scissors") {
        userHand.innerHTML = '<img id="user-hand" src="assets/images/scissors_left.png" alt="Scissors" data-type="scissors">';
    } else {
        alert(`Unknown choice: ${dataType}`);
    }    

    //Change computer hand image based on random computer choice
    if (computerChoice === "rock") {
        computerHand.innerHTML = '<img id="computer-hand" src="assets/images/rock_right.png" alt="Rock" data-type="rock">';
    } else if (computerChoice === "paper") {
        computerHand.innerHTML = '<img id="computer-hand" src="assets/images/paper_right.png" alt="Paper" data-type="paper">';
    } else if (computerChoice === "scissors") {
        computerHand.innerHTML = '<img id="computer-hand" src="assets/images/scissors_right.png" alt="Scissors" data-type="scissors">';
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
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "You lost!";
        rule.textContent = "Paper beats rock";
    } else if (userImage.getAttribute("data-type") === "rock" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "rock") {
        result.textContent = "You won!";
        rule.textContent = "Paper beats rock";
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "You lost!";
        rule.textContent = "Scissors beats paper";
    } else if (userImage.getAttribute("data-type") === "paper" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "paper") {
        result.textContent = "You won!";
        rule.textContent = "Scissors beats paper";
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "rock") {
        result = "You lost!";
        rule = "Rock beats scissors";
    } else if (userImage.getAttribute("data-type") === "scissors" && computerImage.getAttribute("data-type") === "scissors") {
        result.textContent = "It's a draw!";
        rule.textContent = "Try again";
    }
}