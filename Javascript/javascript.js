let humanScore = 0, computerScore = 0;

function getComputerChoice()
{
    let choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let input = prompt("Enter \"Rock\", \"Paper\", or \"Scissor\"");
    return input;

}

function playRound(humanChoice, computerChoice){
    
    switch(humanChoice.toLowerCase()){
        case "rock":
            if(computerChoice == "paper"){
                computerScore++;
            }
            else if(computerChoice == "scissor"){
                humanScore++;
            }
            break;

        
        case "paper":
            if(computerChoice == "scissor"){
                computerScore++;
            }
            else if(computerChoice == "rock"){
                humanScore++;
            }
            break;

        
        case "scissor":
            if(computerChoice == "rock"){
                computerScore++;
            }
            else if(computerChoice == "paper"){
                humanScore++;
            }
            break;

        
    }

}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Human: " + humanScore, "Computer: " + computerScore);

    if (humanScore > computerScore){
        console.log("You Win!");
    }
    else if (computerScore > humanScore){
        console.log("You Lose!");
    }
    else{
        console.log("Draw");
    }
}

playGame();