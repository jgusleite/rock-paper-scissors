const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerParaPoints = document.querySelector(".player-points");
const computerParaPoints = document.querySelector(".computer-points");
const winnerPara = document.querySelector(".winnerPara");
const roundWinner = document.querySelector(".round-winner");
const winContainer = document.querySelector(".display-winner-container");

let playerPoints = 0;
let playersChoice = "";
let computerPoints = 0;
let computersChoice = "";
let winnerFound = false;

rockBtn.addEventListener("click", (e) => {
  computersChoice = getComputerChoice();
  playersChoice = "Rock";
  updateUI(playRound(playersChoice, computersChoice));
});

paperBtn.addEventListener("click", (e) => {
  computersChoice = getComputerChoice();
  playersChoice = "Paper";
  updateUI(playRound(playersChoice, computersChoice));
});

scissorsBtn.addEventListener("click", (e) => {
  computersChoice = getComputerChoice();
  playersChoice = "Scissors";
  updateUI(playRound(playersChoice, computersChoice));
});

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "rock") return "tie";
    if (computerSelection === "paper") return "lose";
    if (computerSelection === "scissors") return "win";
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") return "win";
    if (computerSelection === "paper") return "tie";
    if (computerSelection === "scissors") return "lose";
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "lose";
    if (computerSelection === "paper") return "win";
    if (computerSelection === "scissors") return "tie";
  }
}

function updateUI(result) {
  if (!winnerFound) {
    switch (result) {
      case "win":
        playerPoints++;
        roundWinner.textContent = `Player Wins! ${playersChoice} beats ${computersChoice}`;
        playerParaPoints.textContent = `Player: ${playerPoints}`;
        break;

      case "lose":
        computerPoints++;
        roundWinner.textContent = `Player Lose! ${computersChoice} beats ${playersChoice}`;
        computerParaPoints.textContent = `Computer: ${computerPoints}`;
        break;

      case "tie":
        roundWinner.textContent = "Tie! Nobody scores";
        break;
    }

    let winner = checkWinner();

    if (winner === "PLAYER" || winner === "COMPUTER") {
      winnerPara.textContent = `Winner: ${winner}`;
      let resetBtn = document.createElement("button");
      resetBtn.textContent = "RESTART";
      resetBtn.classList.add("restart");
      winContainer.appendChild(resetBtn);
      winnerFound = true;

      resetBtn.addEventListener("click", (e) => {
        resetGame();
        resetBtn.remove();
      });
    }
  }
}

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  winnerPara.textContent = "";
  playerParaPoints.textContent = "Player: 0";
  computerParaPoints.textContent = "Computer: 0";
  roundWinner.textContent = "";
  winnerFound = false;
}

function checkWinner() {
  if (playerPoints >= 5) return "PLAYER";
  if (computerPoints >= 5) return "COMPUTER";

  return null;
}
