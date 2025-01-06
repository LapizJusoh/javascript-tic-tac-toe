/* Game Board Grid
0 1 2
3 4 5
6 7 8
*/

const gameBoard = ['', '', '', '', '', '', '', '', ''];
function createPlayer(name, marker) {

  let score = 0;
  const getScore = () => score;
  const addScore = () => score++;
  return { name, marker, getScore, addScore }
};

const displayController = {
  playerScoreDisplay: (player) => document.querySelector(`#player${player.name}-score`),
  playerHUDDisplay: (player) => document.querySelector(`#player${player.name}-hud`),
  playerTurnText: document.querySelector(`#player-turn-text`)
};

(function () {

  const playerOne = createPlayer("One", 'X');
  const playerTwo = createPlayer("Two", 'O');
  let currentPlayer = playerOne;

  function checkWin(player) {
    player.addScore();
    displayController.playerScoreDisplay(player).innerHTML = `${player.getScore()}`;
    alert(`Congratulations! Player ${player.name} Won!`);
    roundReset();
  };


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



  function createGameBoard() {

    const gameBoardDisplay = document.querySelector(`#game-board`);
    displayController.playerScoreDisplay(playerOne).innerHTML = `${playerOne.getScore()}`;
    displayController.playerScoreDisplay(playerTwo).innerHTML = `${playerTwo.getScore()}`;
    displayController.playerTurnText.innerHTML = `It's Player ${currentPlayer.name}'s turn!`;

    for (let i = 0; i < 9; i++) {
      const div = document.createElement(`div`);
      div.classList.add(`grid`);
      gameBoardDisplay.appendChild(div);
      (() => {
        function clickGrid() {

          if (!checkMatchThree(currentPlayer)) {
            gameBoard[i] = currentPlayer.marker;
            div.innerHTML = currentPlayer.marker;

            checkMatchThree(currentPlayer);

            currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
            displayController.playerTurnText.innerHTML = `It's Player ${currentPlayer.name}'s turn!`;
            div.removeEventListener("click", clickGrid);
          }
        }
        return div.addEventListener("click", clickGrid);
      })();
    }
  }

  function roundReset() {
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i] = '';
      document.querySelector(`#game-board`).removeChild( document.querySelector(`#game-board`).lastChild );
    }

    currentPlayer = playerOne;
    createGameBoard();
  };

  createGameBoard();

})();