const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";  //ternary operators
      }
    }
  });
});

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  return winningCombos.some((combo) => {
    return combo.every((index) => cells[index].textContent === currentPlayer);
  });
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
}
