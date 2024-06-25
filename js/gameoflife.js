const MAP_WIDTH = 8;
const MAP_HEIGHT = 8;
const MAP_SIZE = MAP_WIDTH * MAP_HEIGHT;

const gameBoard = document.getElementById("game-board");

let cellsMap = {};
let lastTime = 0;
let updateSpeed = 10;

fillMap();

window.requestAnimationFrame(main);

function main(currentTime) {
  window.requestAnimationFrame(main);
  const deltaTime = (currentTime - lastTime) / 1000;
  if(deltaTime < 1 / updateSpeed) {
    return;
  }
  draw();
}

function draw() {
  gameBoard.innerHTML = '';
  for(let i = 0; i < MAP_SIZE; i++) {
    if(cellsMap[i] == 1){
      let x = i % MAP_HEIGHT;
      let y = i / MAP_HEIGHT;
      const cellElement = document.createElement("div");
      cellElement.style.gridRowStart = x;
      cellElement.style.gridColumnStart = y;
      cellElement.classList.add("white-cell");
      gameBoard.appendChild(cellElement);
    }
  }
}

function fillMap() {
  for(let i = 0; i < MAP_SIZE; i++) {
    let x = i % MAP_HEIGHT;
    let y = i / MAP_HEIGHT;
    if(Math.floor(Math.random() * 2) == 1) {
      cellsMap[i] = 1;
    }
  }
  console.log(cellsMap);
}
