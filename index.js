
 playerScore = 0;
 computerScore = 0;


//computers play
function computerPlay() {
   let randomNum = Math.floor(Math.random() * 3) + 1;
   if (randomNum == 1){
       return "rock"
   } else if (randomNum == 2){
       return "paper"
   } else {
       return "scissors"
   }
}


//play one round
function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    //if player chooses rock
    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
            return "win";
        } else if (computerSelection == "paper"){
            computerScore++;
            return "lose";
        } else {
            return "tie";
        }
    //player chooses paper
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            computerScore++;
            return "lose"
        } else if (computerSelection == "rock"){
            playerScore++;
            return "win";
        }  else {
            return "tie";
        }
    //player chooses scissors
    } else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            playerScore++;
            return "win";
        } else if (computerSelection == "rock"){
            computerScore++;
            return "lose";
        } else {
            return "tie";
        }
    //if player doesn't choose a valid option
    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        alert("Please choose either Rock, Paper or Scissors");
    
        
    }
           
    }



    function game(){
        for (let i = 0; i < 3; i++){
            playRound();
            console.log(playerScore);
            console.log(computerScore);
        }

         if (playerScore > computerScore) {
            console.log("You won!");
        } else if (computerScore > playerScore){
            console.log("You lose!");
        } else {
            console.log("It's a tie");
        }
        
    }
game();
