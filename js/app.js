/* Game Board Grid
0 1 2
3 4 5
6 7 8
*/

const gameBoard = [
  '','','',
  '','','',
  '','',''
];
// Initialize gameboard, from index 0 -> 8

const winningCombo = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,8]
];
// Array for storing match three rows(horizontal, vertical and diagonal)

function checkWin() {

}


// testing area
const gameBoardThree = ['X','X','X'];

if ( gameBoard.every((grid) => grid !== '') ) console.log('draw!');




// IF WE BRUTE FORCE IT:-

if (
  ( (gameBoard[0] == 'X') && (gameBoard[1] == 'X') && (gameBoard[2] == 'X') ) ||
  ( (gameBoard[3] == 'X') && (gameBoard[4] == 'X') && (gameBoard[5] == 'X') ) ||
  ( (gameBoard[6] == 'X') && (gameBoard[7] == 'X') && (gameBoard[8] == 'X') ) ||
  ( (gameBoard[0] == 'X') && (gameBoard[3] == 'X') && (gameBoard[6] == 'X') ) ||
  ( (gameBoard[1] == 'X') && (gameBoard[4] == 'X') && (gameBoard[7] == 'X') ) ||
  ( (gameBoard[2] == 'X') && (gameBoard[5] == 'X') && (gameBoard[8] == 'X') ) ||
  ( (gameBoard[0] == 'X') && (gameBoard[4] == 'X') && (gameBoard[8] == 'X') ) ||
  ( (gameBoard[2] == 'X') && (gameBoard[4] == 'X') && (gameBoard[8] == 'X') )
) {

}