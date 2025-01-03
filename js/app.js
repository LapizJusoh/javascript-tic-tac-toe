// Gameboard, Players, Gameflow

const gameBoard = {}

function createPlayer(name, marker, score) {
  const addScore = () => score++;

  return { name, marker, score, addScore };
}

function displayController() {

}

function gamePlay() {

}

function checkWin() {

}

function gameStart() {
  const playerOne = createPlayer("Player One", "X", 0);
  const playerTwo = createPlayer("Player Two", "O", 0);

  const gameBoardDisplay = document.querySelector('#game-board')

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.setAttribute("class","grid");
    gameBoardDisplay.appendChild(div);

    gameBoard[`grid${i}`] = "null";
  }
}

gameStart();  