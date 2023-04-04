const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.split(' ').map(Number));
const log = console.log;

function solution(N, L, R, country) {
  const bfs = (x, y) => {
    let store = [[x, y]];
    let total = copyCountry[x][y];
    let deque = [[x, y]];
    visited[x][y] = true;

    while (deque.length !== 0) {
      const [X, Y] = deque[0];
      deque.shift();
      for (let i = 0; i < 4; i++) {
        const [mx, my] = [X + dr_x[i], Y + dr_y[i]];
        if (mx < 0 || mx >= N || my < 0 || my >= N) continue;
        if (!visited[mx][my]) {
          const diff = Math.abs(copyCountry[mx][my] - copyCountry[X][Y]);
          if (diff >= L && diff <= R) {
            total += copyCountry[mx][my];
            store.push([mx, my]);
            visited[mx][my] = true;
            deque.push([mx, my]);
          }
        }
      }
    }

    const changeValue = Math.floor(total / store.length);
    store.forEach((v) => {
      copyCountry[v[0]][v[1]] = changeValue;
    });

    return store.length === 1 ? false : true;
  };

  const dr_x = [-1, 0, 1, -0];
  const dr_y = [0, 1, 0, -1];

  let answer = 0;
  let copyCountry = JSON.parse(JSON.stringify(country));
  let visited = Array.from(Array(N), () => Array(N).fill(false));

  while (true) {
    const result = [];
    let isEnd = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          result.push(bfs(i, j));
        }
      }
    }

    result.forEach((v) => {
      if (v) isEnd += 1;
    });

    if (!isEnd) break;

    answer += 1;
    visited = Array.from(Array(N), () => Array(N).fill(false));
  }

  return answer;
}

log(solution(...input[0], input.slice(1)));
