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

function game() {
  const numberOfRounds = 5;
  let playerCounter = 0;
  let computerCounter = 0;

  for (let i = 0; i < numberOfRounds; i++) {
    let playerSelection = prompt("Your choice: ");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    // Format the string so only the first letter is capitalized.
    playerSelection =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    computerSelection =
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    console.log(playerSelection);

    switch (result) {
      case "tie":
        console.log("Tied Game!");
        break;

      case "win":
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        playerCounter++;
        break;

      case "lose":
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerCounter++;
        break;
    }
  }

  if (playerCounter === computerCounter)
    console.log(
      `The game has tied. Player Wins ${playerCounter}, Computer Wins ${computerCounter}.`
    );
  else if (playerCounter > computerCounter)
    console.log(
      `Player wins with ${playerCounter} wins vs ${computerCounter} wins from the computer.`
    );
  else
    console.log(
      `Computer wins with ${computerCounter} wins vs ${playerCounter} wins from the player.`
    );
}

game();
