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

function runGame(dataType) {
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (num === 1) {
        computerChoice = "rock";
    } else if (num === 2) {
        computerChoice = "paper";
    } else if (num === 3) {
        computerChoice = "scissors";
    } else {
        alert(`Unknown num: ${num}`)
    }
}