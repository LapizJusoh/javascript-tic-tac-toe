// Gameboard, Players, Gameflow

function createGameboard() {
  const gameBoard = {};
  const gameBoardDisplay = document.querySelector('#game-board')

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.setAttribute("class", "grid");
    gameBoardDisplay.appendChild(div);
    gameBoard[`grid${i}`] = "null";

    div.addEventListener("click", (e) => {

      if (gameBoard[`grid${i}`] == "null") {
        e.target.innerHTML = currentPlayer.marker;
        currentPlayer = (currentPlayer == playerOne ? playerTwo : playerOne);
        gameBoard[`grid${i}`] = currentPlayer.marker;
        div.style = "cursor: default;"
        
        checkWin(gameBoard);
      }

    })
  }

  return gameBoard;
}

function createPlayer(name, marker, score) {
  const addScore = () => score++;

  return { name, marker, score, addScore };
}

function displayController() {
  createGameboard();
}

function checkWin(gameBoard) {
  
  playerStatus();
}

function playerStatus() {
  if (currentPlayer == playerOne) {
    const playerHUD = document.querySelector(`#player1-hud`);
    const playerHUDRevert = document.querySelector(`#player2-hud`);
    playerHUD.setAttribute("style", "background-color:blue;color:white;");
    playerHUDRevert.setAttribute("style", "background-color:white;color:black;");

    playerHUD.setAttribute("style", "background-color:blue;color:white;");
  } else if (currentPlayer == playerTwo) {
    const playerHUD = document.querySelector(`#player2-hud`);
    const playerHUDRevert = document.querySelector(`#player1-hud`);
    playerHUD.setAttribute("style", "background-color:red;color:white;");
    playerHUDRevert.setAttribute("style", "background-color:white;color:black;");
  }
}

function gameStart() {
  displayController();
  playerStatus();
}

const playerOne = createPlayer("Player One", "X", 0);
const playerTwo = createPlayer("Player Two", "O", 0);
let currentPlayer = playerOne;

gameStart(); 