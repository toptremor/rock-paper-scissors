let choices = ['rock', 'paper', 'scissors']

// Opponent (computer) randomly generates between rock paper or scissors
const getComputerChoice = () => {
    const select = choices[Math.floor(Math.random() * choices.length)]
    return select;
}


// Check the winner
const checkWhoWins = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return 'Tie!'
    }   else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player'
    }   else return 'Computer'
}

// Simulate a round
const playRound = (playerSelection, computerSelection) => {
    const result = checkWhoWins(playerSelection, computerSelection);
    if (result == 'Tie!') {
        return "It's a draw!"
    } else if (result == 'Player') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }   else return `You lose.. ${computerSelection} beats ${playerSelection}`
}

// Make the player select their choice
const getPlayerChoice = () => {
    let inputChecker = false;
    while(inputChecker == false) {
        const selectPrompt = prompt('Rock, paper or scissors please');
        if (selectPrompt == null) {
            continue;
        }
        const choicesToLower = selectPrompt.toLowerCase();
        if (choices.includes(choicesToLower)) {
            inputChecker = true;
            return choicesToLower;
        }
    }
}

// Make the game 5 rounds and count the round winners
const game = () => {  
    let playerScore = 0
    let computerScore = 0  
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))
        if (checkWhoWins(playerSelection, computerSelection) == 'Player') {
            playerScore++
        }   else if (checkWhoWins(playerSelection, computerSelection) == 'Computer') {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log(`Player wins the game! ${playerScore} to ${computerScore}`)
    }   else if (computerScore > playerScore) {
        console.log(`Computer wins the game! ${computerScore} to ${playerScore}`)
    }   else return 'Game ends in a draw.'
}

game()