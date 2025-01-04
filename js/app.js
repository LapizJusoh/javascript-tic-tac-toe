/*
- Game Board Grid
0 1 2
3 4 5
6 7 8
*/

const gameBoard = ['','','','','','','','',''];
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

console.log( gameBoardThree.every((grid) => grid == 'X') );

