
const computer_choice = ['Rock', 'Paper', 'Scissor'];
let player_choice = "";

let i = 0;
let player_point = 0;
let computer_point = 0;



function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice(choice){
    playerSelection = choice;
    console.log(playerSelection);
    game();
}

function play_one_round(playerSelection, computerSelection){
    if(playerSelection === "Rock"){
        if(playerSelection === "Rock" && computerSelection==="Scissor"){
            player_point++;
            return "You Won! Rock beats Scissor";
        }
        else if(playerSelection ==="Rock" && computerSelection==="Paper"){
            computer_point++;
            return "You Lose! Paper beats Rocks";
        }
        else{
            return "Tie!";
        }
    }
    else if(playerSelection === "Paper"){
        if(playerSelection === "Paper" && computerSelection==="Scissor"){
            computer_point++;
            return "You Lose! Scissor beats Paper";
        }
        else if(playerSelection === "Paper" && computerSelection==="Rock"){
            player_point++;
            return "You Win! Paper beats Rock";
        }
        else{
            return "Tie!";
        }
    }
    else if(playerSelection === "Scissor"){
        if(playerSelection === "Scissor" && computerSelection==="Paper"){
            player_point++;
            return "You Win! Scissor beats Paper";
        }
        else if(playerSelection === "Scissor" && computerSelection==="Rock"){
            computer_point++;
            return "You Lose! Rock beats Scissor";
        }
        else{
            return "Tie!";
        }
    }
    else {
        console.log("Wrong Input Try Again");
    }

}

function game(){
        const computerSelection = getComputerChoice(computer_choice);
        // const playerSelection = getPlayerChoice(player_choice);

        console.log("Player Selected: " + playerSelection);
        console.log("Computer Selected: " + computerSelection);

        // console.log(play_one_round(playerSelection, computerSelection));

        document.getElementById("output").innerHTML = play_one_round(playerSelection,computerSelection);


    console.log("Player has: " + player_point + " points");
    console.log("Computer has: " + computer_point + " points");

    document.getElementById("scoreboardPlayer").innerHTML = "Player has: " + player_point + " points";
    document.getElementById("scoreboardComputer").innerHTML = "Computer has: " + computer_point + " points";

}

