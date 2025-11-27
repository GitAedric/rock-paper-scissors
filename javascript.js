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

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        if(humanChoice == "ROCK" && computerChoice == "Scissors") {
            console.log("You win! Rock beats scissors!");
            console.log("Your score: " + ++humanScore);
        }
        else if(humanChoice == "ROCK" && computerChoice == "Paper") {
            console.log("You lose! Rock loses to paper!");
            console.log("Computer Score: " + ++computerScore);
        }
        else if(humanChoice == "PAPER" && computerChoice == "Rock") {
            console.log("You win! Paper beats rock!");
            console.log("Your score: " + ++humanScore);
        }
        else if(humanChoice == "PAPER" && computerChoice == "Scissors") {
            console.log("You lose! Paper loses to scissors!");
            console.log("Computer Score: " + ++computerScore);
        }
        else if(humanChoice == "SCISSORS" && computerChoice == "Paper") {
            console.log("You win! Scissors beats paper!");
            console.log("Your score: " + ++humanScore);
        }
        else if(humanChoice == "SCISSORS" && computerChoice == "Rock") {
            console.log("You lose! Scissors loses to rock!");
            console.log("Computer Score: " + ++computerScore);
        }
        else {
            console.log("It's a tie!");
        }
    }

    let i = 0;

    while(i < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        i++;
    }
}

playGame();