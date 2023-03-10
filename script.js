let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computer_choice = Math.floor(Math.random() * choices.length);
  return choices[computer_choice];
}

function getPlayerChoice() {
  let player_Choice = prompt('Choose between rock, paper or scissors');
  return player_Choice;
}


function playRound(playerSelection, computerSelection) {

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")) {
      console.log(`player played ${playerSelection}, computer player ${computerSelection}. player wins`);
      playerScore++
      console.log('player score is ' + playerScore + 'computer score is ' + computerScore);
      }
  else if (computerSelection == playerSelection) {
    console.log(`player played ${playerSelection}, computer played ${computerSelection}. it's a tie`);
    console.log('player score is ' + playerScore + 'computer score is ' + computerScore);
  } else {
    console.log(`player played ${playerSelection}, computer played ${computerSelection}. computer wins`);
    computerScore ++
    console.log('player score is ' + playerScore + 'computer score is ' + computerScore);
  }
  
}
 
let computerSelection;
let playerSelection;

function game() {
 for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  playRound(playerSelection,computerSelection);
 }
 if (playerScore > computerScore){
    console.log('Player wins');
  } else if (computerScore > playerScore) {
    console.log('Computer wins');
  } else{ 
    console.log('Game over, it ends in a draw');
  }
}



game();