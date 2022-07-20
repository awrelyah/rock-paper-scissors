

 let rockbtn = document.querySelector("#rock");
 rockbtn.addEventListener("click", playRound);  

 let paperbtn = document.querySelector("#paper");
 paperbtn.addEventListener("click", playRound); 

 let scissorsbtn = document.querySelector("#scissors");
 scissorsbtn.addEventListener("click", playRound); 

let compSelect = document.getElementById('compselection');
let playerSelect = document.getElementById('playerselection');
let result = document.getElementById('result');

let playerScoreBtn = document.getElementById('playerscore');
let computerScoreBtn = document.getElementById('compscore');

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
    //playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
    playerSelection = this.textContent.toLowerCase();

    
    playerSelect.textContent = playerSelection;
    compSelect.textContent = computerSelection;

    console.log(playerSelection);
    console.log(computerSelection);

    //if player chooses rock
    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
            result.textContent = 'You win';
        } else if (computerSelection == "paper"){
            computerScore++;
            result.textContent = 'You lose';
        } else {
            result.textContent = "It's a tie";
        }
    //player chooses paper
    } else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            computerScore++;
            result.textContent = 'You lose';
        } else if (computerSelection == "rock"){
            playerScore++;
            result.textContent = 'You win';
        }  else {
            result.textContent = "It's a tie";
        }
    //player chooses scissors
    } else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            playerScore++;
            result.textContent = 'You win';
        } else if (computerSelection == "rock"){
            computerScore++;
            result.textContent = 'You lose';
        } else {
            result.textContent = "It's a tie";
        }
    //if player doesn't choose a valid option NOT NEEDED ANYMORE I GUESS
    } //else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        //alert("Please choose either Rock, Paper or Scissors");
   // }   
   playerScoreBtn.textContent = playerScore;
   computerScoreBtn.textContent = computerScore;

   if (playerScore == 5){
    if(alert('YOU WON')){} 
    else   window.location.reload(); 
    
   } else if (computerScore == 5){
    if(alert('COMPUTER WON')){} 
    else   window.location.reload(); 
    
   }
    }


    //NOT NEEDED ANYMORE IG
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

