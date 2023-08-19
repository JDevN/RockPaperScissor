/*
-Begin with a function called getComputerChoice
-getComputerChoice randomly select Rock, Paper, or Scissor
*/
const computer_choice = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice(computer_choice));
/*
-Create a function the plays a single round of Rock Paper Scissors
-Function should take in two parameters (playerSelection, computerSelection)
-Return a string that declares the winner of the round
*/



/*
-Create a new function called game()
    -5 round game
    -Keep score
    -report a winner or loser at the end
*/
