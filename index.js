
 document.getElementById("rock").addEventListener("click", playRound);
 document.getElementById("paper").addEventListener("click", playRound);
 document.getElementById("scissors").addEventListener("click", playRound);


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

playerScore = 0;
computerScore = 0;

//play one round
function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = this.id;

    document.getElementById('playerChose').textContent = "you chose " + this.id;
    document.getElementById('computerChose').textContent = "computer chose " + computerSelection;

    //if player chooses rock
    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
        } else if (computerSelection == "paper"){
            computerScore++;
        } 
    //player chooses paper
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            computerScore++;
        } else if (computerSelection == "rock"){
            playerScore++;
        } 
    //player chooses scissors
    } else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            playerScore++;
        } else if (computerSelection == "rock"){
            computerScore++;
        } }
        
        document.getElementById('compScore').textContent = "computer score: " + computerScore;
        document.getElementById('playerScore').textContent = "your score: " + playerScore;
        
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



