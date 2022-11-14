const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_X, input_Y] = input.map((v) => v.trim());
function solution(X, Y) {
  const lenX = X.length;
  const lenY = Y.length;
  let [mx, my] = [lenX, lenY];
  let board = Array.from(Array(lenX + 1), () => Array(lenY + 1).fill(0));
  let result = [];

  for (let i = 1; i <= lenX; i++) {
    for (let j = 1; j <= lenY; j++) {
      if (X[i - 1] === Y[j - 1]) board[i][j] = board[i - 1][j - 1] + 1;
      else board[i][j] = Math.max(board[i - 1][j], board[i][j - 1]);
    }
  }

  while (board[mx][my] !== 0) {
    const now = board[mx][my];
    const [up, left] = [board[mx - 1][my], board[mx][my - 1]];
    if (now === up && now === left) {
      mx -= 1;
    } else if (now === up) mx -= 1;
    else if (now === left) my -= 1;
    else {
      result.push(X[mx - 1]);
      mx -= 1;
      my -= 1;
    }
  }

  console.log(board[lenX][lenY]);
  if (board[lenX][lenY] !== 0) console.log(result.reverse().join(""));
}

solution(input_X, input_Y);
