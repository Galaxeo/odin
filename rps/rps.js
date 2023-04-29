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
      return 0;
    }
    else if (computerSelection == 2) {
      return -1;
    }
    else if (computerSelection == 3) {
      return 1;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 2) {
      return 0;
    }
    else if (computerSelection == 3) {
      return -1;
    }
    else if (computerSelection == 1) {
      return 1;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 3) {
      return 0;
    }
    else if (computerSelection == 1) {
      return -1;
    }
    else if (computerSelection == 2) {
      return 1;
    }
  } else {
    return "Error"
  }
}
function game() {
  const rock = document.createElement('button');
  rock.innerHTML = 'rock';
  rock.id = 'rock';
  const paper = document.createElement('button');
  paper.innerHTML = 'paper';
  paper.id = 'paper';
  const scissors = document.createElement('button');
  scissors.innerHTML = 'scissors';
  scissors.id = 'scissors';

  document.body.appendChild(rock);
  document.body.appendChild(scissors);
  document.body.appendChild(paper);

  const myScore = document.querySelector('#myScore');
  let myVal = 0;
  const compScore = document.querySelector('#compScore');
  let compVal = 0;
  const mRes = document.querySelector('#mRes')

  const btnListener = document.querySelectorAll('button');
  btnListener.forEach((button) => {
    button.addEventListener('click', () => {
      let res = rps(button.id, getComputerChoice());
      if (res == 1) {
        myVal += 1;
        myScore.innerHTML = myVal;
        mRes.innerHTML = '+1 to you!';
      } else if (res == -1) {
        compVal += 1;
        compScore.innerHTML = compVal;
        mRes.innerHtml = '+1 to comp!';
      } else {
        mRes.innerHTML = 'Tie!'
      }
      if (myVal == 5) {
        mRes.innerHTML = 'You win!';
      } else if (compVal == 5) {
        mRes.innerHTML = 'Comp wins!';
      }
    })
  })
}
game()
