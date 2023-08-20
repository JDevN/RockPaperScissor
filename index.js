
const computer_choice = ['Rock', 'Paper', 'Scissor'];
let i = 0;
let player_point = 0;
let computer_point = 0;

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

function game(){
    do{
        const playerSelection = window.prompt("Select Rock, Paper, or Scissor: ");
        const computerSelection = getComputerChoice(computer_choice);

        console.log(playerSelection);
        console.log(computerSelection);

        function play_one_round(playerSelection, computerSelection){
            if(playerSelection==="rock"){
                if(playerSelection==="rock" && computerSelection==="scissor"){
                    player_point++;
                    return "You Won! Rock beats Scissor";
                }
                else if(playerSelection==="rock" && computerSelection==="paper"){
                    computer_point++;
                    return "You Lose! Paper beats Rocks";
                }
                else{
                    i--;
                    return "Tie!";
                }
            }
            else if(playerSelection==="paper"){
                if(playerSelection==="paper" && computerSelection==="scissor"){
                    computer_point++;
                    return "You Lose! Scissor beats Paper";
                }
                else if(playerSelection==="paper" && computerSelection==="rock"){
                    player_point++;
                    return "You Win! Paper beats Rock";
                }
                else{
                    i--;
                    return "Tie!";
                }
            }
            else if(playerSelection==="scissor"){
                if(playerSelection==="scissor" && computerSelection==="paper"){
                    player_point++;
                    return "You Win! Scissor beats Paper";
                }
                else if(playerSelection==="scissor" && computerSelection==="rock"){
                    computer_point++;
                    return "You Lose! Rock beats Paper";
                }
                else{
                    i--;
                    return "Tie!";
                }
            }
            else {
                console.log("Wrong Input Try Again");
                i--;
            }
        }
        console.log(play_one_round(playerSelection.toLowerCase(), computerSelection.toLowerCase()));
        i++;
    }while(i < 5);
    console.log("Game Ended");
    console.log("Player has: " + player_point + " points");
    console.log("Computer has: " + computer_point + " points");
}

console.log(game());
