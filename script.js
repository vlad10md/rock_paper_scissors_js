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
      }
  else if (computerSelection == playerSelection) {
    console.log(`player played ${playerSelection}, computer played ${computerSelection}. it's a tie`);
  } else {
    console.log(`player played ${playerSelection}, computer played ${computerSelection}. computer wins`);
  }
  
}
    

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(playRound(playerSelection,computerSelection));
