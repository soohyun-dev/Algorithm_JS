const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const inputN = +input[0];
input.shift();
const inputPlace = input.map((v) => v.trim().split(' ').map(Number));

function solution(N, place) {
  const dfs = (x, y) => {
    if (!visited[x][y]) {
      visited[x][y] = 1;
      let cntMove = 0;
      for (let i = 0; i < 4; i++) {
        const [mx, my] = [x + drX[i], y + drY[i]];
        if (mx < 0 || mx >= N || my < 0 || my >= N) continue;
        if (place[x][y] > place[mx][my]) {
          cntMove = Math.max(cntMove, dfs(mx, my));
        }
      }
      visited[x][y] += cntMove;
    }
    return visited[x][y];
  };

  const drX = [-1, 0, 1, 0];
  const drY = [0, 1, 0, -1];
  const visited = Array.from(Array(N), () => Array(N).fill(0));
  let MAX = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        MAX = Math.max(MAX, dfs(i, j));
      }
    }
  }

  return MAX;
}

log(solution(inputN, inputPlace));
