const whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

let playerScore = 0;
let computerScore = 0;


function computerPicks(){
    const computerChoices = Object.keys(whatBeatsWhat)
    let randomChoice = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[randomChoice]
}

function updateScoreboard() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function declareWinner(){
    const resultsDiv = document.getElementById('results');
    if (playerScore === 5){
        resultsDiv.textContent = "Congratulations! You won the game!";
    } else if (computerScore === 5){
        resultsDiv.textContent = "Game over! The computer won the game!";
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPicks();
    let result;

    if(playerSelection === computerSelection){
        result = "It's a tie!";
    } else if(whatBeatsWhat[playerSelection] === computerSelection){
        result = "You win this game!";
        playerScore++;
    } else {
        result = "The computer wins!";
        computerScore++;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `${result} (Player chose ${playerSelection}, Computer chose ${computerSelection})`;

    updateScoreboard();
    if(playerScore === 5 || computerScore === 5){
        declareWinner();
    }
    //console.log(`${result} (Player chose ${playerSelection}, Computer chose ${computerSelection})`);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));



/* My Original game function, this will probably be deleted
function game(){
    // This function is going to reflect a game of best of 5
    let playerScore = 0;
    let computerScore = 0;
    let roundResult, playerSelection, computerSelection;
  
    for(let round = 1; round <= 1; round++){
        playerSelection = prompt("Choose rock, paper, or scissors:");
        computerSelection = computerPicks();
        roundResult = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${roundResult} (Player chose ${playerSelection}, Computer chose ${computerSelection})`);

        if (roundResult.includes("You win")){
            playerScore++;
        } else if (roundResult.includes("The computer wins")){
            computerScore++;
        } else{
            //If its a tie, we reduce the round to still meet the best out of 5 condition
            round--;
        }
        
    }

    if(playerScore > computerScore){
        console.log(`You won the game! Final score: Player ${playerScore}, Computer ${computerScore}`);
    } else if(computerScore > playerScore){
        console.log(`Computer won the game! Final score: Player ${playerScore}, Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! Replay the round! Final score: Player ${playerScore}, Computer ${computerScore}`);
    }
}

game();

*/