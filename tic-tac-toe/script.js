const tiles = document.querySelectorAll('.gameTile');
var flag = true;
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
      if (flag) {
        alert('X player won!')
      } else {
        alert('O player won!')
      }
    }
  })
})

