let humanScore = 0, computerScore = 0;
const resultContainer = document.querySelector("div");
const humComChoice = document.createElement("p");
const totalScore = document.createElement("p");
const finalResult = document.createElement("p");
resultContainer.appendChild(humComChoice)
resultContainer.appendChild(totalScore);
resultContainer.appendChild(finalResult);

//add button listener event
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playGame(button.id);
        })
    });

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

    humComChoice.textContent = "Human: " + humanChoice + " Computer: " + computerChoice;
    
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

function playGame(humanChoice){
    
    playRound(humanChoice, getComputerChoice());

    totalScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    
    if (humanScore + computerScore == 5){

        finalResult.hidden = false;

        if (humanScore > computerScore){
            finalResult.textContent = "You Win!";
            
        }
        else if (computerScore > humanScore){
            finalResult.textContent = "You Lose!";
        }
        else{
            finalResult.textContent = "Draw!";
        }

        humanScore = 0;
        computerScore = 0;
    }else{
        finalResult.hidden = true;
    }


}
