/* Game Board Grid
0 1 2
3 4 5
6 7 8
*/

const gameBoard = [];
const playerOne = createPlayer("One", 'X');
const playerTwo = createPlayer("Two", 'O');

let currentPlayer = playerOne;
let roundEnd = false;
let gameEnd = false;

function createPlayer(name, marker) {

  let score = 0;
  const getScore = () => score;
  const addScore = () => score++;
  return { name, marker, getScore, addScore }
}

function checkMatchThree(player) {

  // check row
  for (let i = 0; i < gameBoard.length; i += 3) {
    if ((gameBoard[i] == player.marker) && (gameBoard[i + 1] == player.marker) && (gameBoard[i + 2] == player.marker
    )) {
      return checkWin(player);
    }
  }

  // check column
  for (let i = 0; i < 3; i++) {
    if ((gameBoard[i] == player.marker) && (gameBoard[i + 3] == player.marker) && (gameBoard[i + 6] ==
      player.marker)) {
      return checkWin(player);
    }
  }

  // check diagonal
  if (((gameBoard[0] == player.marker) && (gameBoard[4] == player.marker) && (gameBoard[8] == player.marker)) ||
    ((gameBoard[2] == player.marker) && (gameBoard[4] == player.marker) && (gameBoard[6] == player.marker))
  ) {
    return checkWin(player);
  }

  return false;
}


function checkWin(player) {
  player.addScore();
  alert(`Player ${player.name} wins!`);
  roundEnd = true;
}

function clickGrid(index) {

  if ( (gameBoard[index] == '') && ( !roundEnd ) ) {

    this.innerHTML = currentPlayer.marker;
    this.style.cursor = 'default';
    gameBoard[index] = currentPlayer.marker;

    checkMatchThree(currentPlayer);
    if (gameBoard.every((grid) => grid !== '')) {
      return console.log('All grids are filled- Match end!');
    }

    if (!roundEnd) {
      currentPlayer = (currentPlayer == playerOne ? playerTwo : playerOne);
      turnOrderText.innerHTML = `It is Player ${currentPlayer.name}'s turn!`
    }
  }
}

function createGameBoard() {

  const turnOrderText = document.querySelector('#player-turn-text');

  document.querySelector('#player1-hud').setAttribute("style","color:white;background-color:red");
  document.querySelector('#player2-hud').setAttribute("style","color:black;background-color:white");
  turnOrderText.innerHTML = `It is Player ${currentPlayer.name}'s turn!`

  for (let i = 0; i < 9; i++) {
    const gameBoardArea = document.querySelector('#game-board');
    const div = document.createElement('div');
    div.setAttribute("class", "grid");
    div.addEventListener("click", clickGrid.bind(div, i));
    gameBoardArea.appendChild(div);
    gameBoard.push('');
  }
}

createGameBoard();

const test = () => {

}