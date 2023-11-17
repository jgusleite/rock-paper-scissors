const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerPara = document.querySelector(".player-points");
const computerPara = document.querySelector(".computer-points");
const winnerPara = document.querySelector(".winner");

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "rock") return ["tie", "Rock", "Rock"];
    if (computerSelection === "paper") return ["lose", "Rock", "Paper"];
    if (computerSelection === "scissors") return ["win", "Rock", "Scissors"];
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") return ["win", "Paper", "Rock"];
    if (computerSelection === "paper") return ["tie", "Paper", "Paper"];
    if (computerSelection === "scissors") return ["lose", "Paper", "Scissors"];
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") return ["lose", "Scissors", "Rock"];
    if (computerSelection === "paper") return ["lose", "Scissors", "Rock"];
    if (computerSelection === "scissors") return ["lose", "Scissors", "Rock"];
  }
}

// for (let i = 0; i < numberOfRounds; i++) {
//   let playerSelection = prompt("Your choice: ");
//   let computerSelection = getComputerChoice();
//   let result = playRound(playerSelection, computerSelection);

// playerSelection =
//   playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

// computerSelection =
//   computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

//   console.log(playerSelection);

//   switch (result) {
//     case "tie":
//       console.log("Tied Game!");
//       break;

//     case "win":
//       console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//       playerPoints++;
//computerPoints       break;

//     case "lose":
//       console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//       computerCounter++;
//       break;
//   }
// }
