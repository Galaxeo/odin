function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  /*1 = rock, 2 = paper, 3 = scissors*/
  return choice;
}
console.log(getComputerChoice());
function rps(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == 'rock') {
    if (computerSelection == 1) {
      return "Tie"
    }
    else if (computerSelection == 2) {
      return "You lost"
    }
    else if (computerSelection == 3) {
      return "You won"
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 2) {
      return "Tie"
    }
    else if (computerSelection == 3) {
      return "You lost"
    }
    else if (computerSelection == 1) {
      return "You won"
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 3) {
      return "Tie"
    }
    else if (computerSelection == 1) {
      return "You lost"
    }
    else if (computerSelection == 2) {
      return "You won"
    }
  } else {
    return "Here"
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(rps(prompt('enter prompt \n'), getComputerChoice()))
  }
}
game()
