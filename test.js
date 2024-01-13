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

console.log(computerPicks)

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }

    if(whatBeatsWhat[playerSelection] === computerSelection){
        return "You win this game!"
    }

    return "The computer wins!"
}

const playerSelection = "scissors"
const computerSelection = computerPicks()
const result = playRound(playerSelection, computerSelection)
console.log(`${result} (${playerSelection} vs ${computerSelection})`)