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


const playerSelection = window.prompt("Select Rock, Paper, or Scissor: ");
const computerSelection = getComputerChoice(computer_choice);

console.log(playerSelection);
console.log(computerSelection);


function play_one_round(playerSelection, computerSelection){
    if(playerSelection==="rock"){
        if(playerSelection==="rock" && computerSelection==="scissor"){
            return "You Won! Rock beats Scissor";
        }
        else if(playerSelection==="rock" && computerSelection==="paper"){
            return "You Lose! Paper beats Rocks";
        }
        else{
            return "Tie!";
        }
    }
    else if(playerSelection==="paper"){
        if(playerSelection==="paper" && computerSelection==="scissor"){
            return "You Lose! Scissor beats Paper";
        }
        else if(playerSelection==="paper" && computerSelection==="rock"){
            return "You Win! Paper beats Rock";
        }
        else{
            return "Tie!";
        }
    }
    else if(playerSelection==="scissor"){
        if(playerSelection==="scissor" && computerSelection==="paper"){
            return "You Win! Scissor beats Paper";
        }
        else if(playerSelection==="scissor" && computerSelection==="rock"){
            return "You Lose! Rock beats Paper";
        }
        else{
            return "Tie!";
        }
    }
    else{

    }
}

console.log(play_one_round(playerSelection.toLowerCase(), computerSelection.toLowerCase()));

/*
-Create a new function called game()
    -5 round game
    -Keep score
    -report a winner or loser at the end
*/

