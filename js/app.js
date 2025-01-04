/* Game Board Grid
0 1 2
3 4 5
6 7 8
*/

const gameBoard = [
  'X','O','X',
  'O','X','O',
  'X','O','X'
];

function createPlayer(name, marker) {

  let score = 0;
  const getScore = () => score;
  const addScore = () => score++;
  return { name, marker, getScore, addScore }
}

const playerOne = createPlayer("One", 'X');
const playerTwo = createPlayer("Two", 'O');

let currentPlayer = playerOne;

function checkMatchThree(player) {

  // check row
  for (let i = 0; i < gameBoard.length; i+=3) {
    if ( (gameBoard[i] == player.marker) && (gameBoard[i + 1] == player.marker ) && (gameBoard[i + 2] == player.marker
    ) ) {
      return playerWin(player);
    }
  }

  // check column
  for (let i = 0; i < 3; i++) {
    if ( (gameBoard[i] == player.marker) && (gameBoard[i + 3] == player.marker ) && (gameBoard[i + 6] ==
    player.marker )) {
      return playerWin(player);
    }
  }

  // check diagonal
  if ( ( (gameBoard[0] == player.marker) && (gameBoard[4] == player.marker) && (gameBoard[8] == player.marker) ) ||
  ( (gameBoard[2] == player.marker) && (gameBoard[4] == player.marker) && (gameBoard[6] == player.marker) )
  ) {
    return playerWin(player);
  }

  return false;
}

function checkWin(player) {

  console.log ( checkMatchThree(player) );
}

function playerWin(player) {
  player.addScore();
  return `Player ${player.name} wins!`
}