/*
-Begin with a function called getComputerChoice
-getComputerChoice randomly select Rock, Paper, or Scissor
*/
const computer_choice = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}


/*
-Create a function the plays a single round of Rock Paper Scissors
-Function should take in two parameters (playerSelection, computerSelection)
-Return a string that declares the winner of the round
*/

const playerSelection = "Rock";
const computerSelection = getComputerChoice(computer_choice);

console.log(playerSelection);
console.log(computerSelection);


function play_one_round(playerSelection, computerSelection){
    if(playerSelection==="Rock" && computerSelection==="Scissor"){
        return "You Won! Rock beats Scissor";
    }
    else if(playerSelection==="Rock" && computerSelection==="Paper"){
        return "You Lose! Paper beats Rocks";
    }
    else{
        return "Tie!";
    }
}

console.log(play_one_round(playerSelection, computerSelection));

/*
-Create a new function called game()
    -5 round game
    -Keep score
    -report a winner or loser at the end
*/
