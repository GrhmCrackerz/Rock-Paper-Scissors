const whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

const computerChoices = Object.keys(whatBeatsWhat)

function computerPicks(){
    let randomChoice = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[randomChoice]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }

    if(whatBeatsWhat[playerSelection] === computerSelection){
        return "You win this game!"
    }

    return "The computer wins!"
}

/*
const playerSelection = prompt("Choose rock, paper, or scissors:")

const computerSelection = computerPicks()
const result = playRound(playerSelection, computerSelection)
console.log(`${result} (${playerSelection} beats ${computerSelection})`)
*/

function game(){
    // This function is going to reflect a game of best of 5
    let playerScore = 0;
    let computerScore = 0;
    let roundResult, playerSelection, computerSelection;
  
    for(let round = 1; round <= 5; round++){
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