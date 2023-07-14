const tiles = document.querySelectorAll('.gameTile');
var flag = true;
const btn = document.querySelector(".submit");
const restart = document.querySelector(".restart");

function checkRows() {
  if (tiles[0].innerHTML == tiles[1].innerHTML && tiles[0].innerHTML == tiles[2].innerHTML && tiles[0].innerHTML != '') {
    return true;
  }
  else if (tiles[3].innerHTML == tiles[4].innerHTML && tiles[3].innerHTML == tiles[5].innerHTML && tiles[3].innerHTML != '') {
    return true;
  }
  else if (tiles[6].innerHTML == tiles[7].innerHTML && tiles[6].innerHTML == tiles[8].innerHTML && tiles[6].innerHTML != '') {
    return true;
  } else {
    return false;
  }
}
function checkColumns() {
  if (tiles[0].innerHTML == tiles[3].innerHTML && tiles[0].innerHTML == tiles[6].innerHTML && tiles[0].innerHTML != '') {
    return true;
  }
  else if (tiles[1].innerHTML == tiles[4].innerHTML && tiles[1].innerHTML == tiles[7].innerHTML && tiles[1].innerHTML != '') {
    return true;
  }
  else if (tiles[2].innerHTML == tiles[5].innerHTML && tiles[2].innerHTML == tiles[8].innerHTML && tiles[2].innerHTML != '') {
    return true;
  } else {
    return false;
  }
}
function checkDiags() {
  if (tiles[0].innerHTML == tiles[4].innerHTML && tiles[0].innerHTML == tiles[8].innerHTML && tiles[0].innerHTML != '') {
    return true;
  }
  else if (tiles[2].innerHTML == tiles[4].innerHTML && tiles[2].innerHTML == tiles[6].innerHTML && tiles[2].innerHTML != '') {
    return true;
  } else {
    return false;
  }
}
function checkTie() {
  for (const tile of tiles) {
    if (tile.innerHTML == '') {
      return false;
    } else {
      //pass
    }
  }
  return true;
}
let p1name = '';
let p2name = '';

btn.addEventListener("click", (event) => {
  event.preventDefault();
  p1name = document.getElementById("player1").value;
  p2name = document.getElementById("player2").value;
  document.querySelector("#gameContainer").classList.toggle("hidden");
  document.querySelector("#nameForm").classList.toggle("hidden");
  document.querySelector(".restart").classList.toggle("hidden");
})

restart.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.reload();
})

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (tile.innerHTML != '') {
      //pass;
    }
    else if (flag == true) {
      tile.innerHTML = 'O';
      flag = false;
    } else {
      tile.innerHTML = 'X';
      flag = true;
    }
    if (checkRows() || checkColumns() || checkDiags()) {
      if (!flag) {
        alert(p1name + ' won!')
      } else {
        alert(p2name + ' won!')
      }
    } else if (checkTie()) {
      alert("Tie!");
    }
  })
})

