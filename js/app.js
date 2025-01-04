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

function checkMatchThree(marker) {

  // check row
  for (let i = 0; i < gameBoard.length; i+=3) {
    if ( (gameBoard[i] == marker) && (gameBoard[i + 1] == marker ) && (gameBoard[i + 2] == marker ) ) {
      return `Player ${marker} wins!`;
    }
  }

  // check column
  for (let i = 0; i < 3; i++) {
    if ( (gameBoard[i] == 'X') && (gameBoard[i + 3] == 'X' ) && (gameBoard[i + 6] == 'X' ) ) {
      return `Player ${marker} wins!`;
    }
  }

  // check diagonal
  if ( ( (gameBoard[0] == marker) && (gameBoard[4] == marker) && (gameBoard[8] == marker) ) ||
  ( (gameBoard[2] == marker) && (gameBoard[4] == marker) && (gameBoard[6] == marker) )
  ) {
    return `Player ${marker} wins!`;
  }
}


function checkWin(player) {

}