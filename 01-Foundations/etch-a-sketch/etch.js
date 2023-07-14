let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

let btn = document.createElement('button');
btn.innerHTML = 'Number of squares!';
btn.style = 'margin-left: auto; margin-right: auto;';
container.appendChild(btn);

function regenGrid() {
  let numSquares = prompt('Number of squares?');
  genDivs(numSquares);
}

btn.addEventListener('click', function() {
  const tiles = Array.from(document.querySelectorAll('.gridSquare'));
  tiles.forEach(tile => tile.remove());
  const rows = Array.from(document.querySelectorAll('.row'));
  rows.forEach(row => row.remove());
  regenGrid();
});

function genDivs(num) {
  if (num > 50) {
    alert('YOUR NUMBER IS TOO HIGH! RESTRICTED TO 50.')
    num = 50;
  }
  let e = document.body;
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < num; j++) {
      let cell = document.createElement('div');
      cell.className = 'gridSquare';
      row.appendChild(cell);
    }
    e.appendChild(row);
  }
  const tiles = Array.from(document.querySelectorAll('.gridSquare'));
  tiles.forEach(tile => tile.addEventListener('mouseover', function() { tile.style.background = "black"; }));
}
genDivs(16);
