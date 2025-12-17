/* Processes

Generate a random number between 1 and 3
Assign each number rock, paper and scissor
Allow input from the user to take rock, paper, or scissor
Create an If else loop to compare generated result vs. input
Print message stating result of if else loop
*/

function getComputerChoice() {
    let choice = Math.random();
    if(choice < 0.33) {
        return "Rock";
    }
    else if (choice >= 0.33 && choice < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors!");
        console.log("Your score: " + ++humanScore);
    }
    else if(humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Rock loses to paper!");
        console.log("Computer Score: " + ++computerScore);
    }
    else if(humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock!");
        console.log("Your score: " + ++humanScore);
    }
    else if(humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Paper loses to scissors!");
        console.log("Computer Score: " + ++computerScore);
    }
    else if(humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper!");
        console.log("Your score: " + ++humanScore);
    }
    else if(humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Scissors loses to rock!");
        console.log("Computer Score: " + ++computerScore);
    }
    else {
        console.log("It's a tie!");
    }

    const playerPoints = document.querySelector("#pp");
    const computerPoints = document.querySelector("#cp");

    playerPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;

    if (humanScore >= 5 || computerScore >=5 ) {
        alert("Game Over!");
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let vara = e.target.id;
        let comCho = getComputerChoice();
        playRound(vara, comCho);
        console.log(vara + " " + comCho);
    });
});
