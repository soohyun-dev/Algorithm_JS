const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const inputNMR = input[0].split(' ').map(Number);
input.shift();
const inputBoard = input.map((v) => v.split(' ').map(Number));

function solution(N, M, R, board) {
  const dfs = (x, y, dr) => {
    if (dr >= 4) {
      moved.push(tmp);
      tmp = [];
      return;
    }
    const [mx, my] = [x + drX[dr], y + drY[dr]];
    if (mx < 0 || mx >= N || my < 0 || my >= M) {
      dfs(x, y, dr + 1);
    } else if (!visited[mx][my]) {
      tmp.push([mx, my]);
      visited[mx][my] = true;
      dfs(mx, my, dr);
    } else if (dr < 4) {
      dfs(x, y, dr + 1);
    }
  };

  const drX = [0, 1, 0, -1];
  const drY = [1, 0, -1, 0];
  const newBoard = Array.from(Array(N), () => Array(M).fill(0));
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const moved = [];
  let tmp = [];

  board.forEach((line, i) => {
    line.forEach((v, j) => {
      if (!visited[i][j]) {
        visited[i][j] = true;
        tmp.push([i, j]);
        dfs(i, j, 0);
      }
    });
  });

  const copy = JSON.parse(JSON.stringify(moved));

  moved.forEach((block, i) => {
    const cut = R % block.length;
    const movedLine = [...moved[i].slice(cut), ...moved[i].slice(0, cut)];
    movedLine.forEach((v, j) => {
      const [beforeX, beforeY] = copy[i][j];
      const [afterX, afterY] = v;
      newBoard[beforeX][beforeY] = board[afterX][afterY];
    });
  });

  newBoard.forEach((line) => {
    log(...line);
  });
}

solution(...inputNMR, inputBoard);

/*

0,0  0,1  0,2  0,3
1,0  1,1  1,2  1,3
2,0  2,1  2,2  2,3
3,0  3,1  3,2  3,3

*/
