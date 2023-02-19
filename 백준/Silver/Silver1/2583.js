const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const inputMNK = input[0].split(' ').map(Number);
const inputArea = input.slice(1).map((v) => {
  return v.trim().split(' ').map(Number);
});
const log = console.log;

function solution(M, N, K, area) {
  const drX = [-1, 0, 1, 0];
  const drY = [0, 1, 0, -1];
  const bfs = () => {
    while (dq.length !== 0) {
      const [x, y, mark] = dq[0];
      dq = dq.splice(1);
      for (let i = 0; i < 4; i++) {
        const [mx, my] = [x + drX[i], y + drY[i]];
        if (mx < 0 || mx >= M || my < 0 || my >= N) continue;
        if (visited[mx][my] === -1) {
          visited[mx][my] = mark;
          dq.push([mx, my, mark]);
          cnt += 1;
        }
      }
    }
  };

  const visited = Array.from(Array(M), () => Array(N).fill(-1));

  area.forEach((v) => {
    for (let i = v[1]; i < v[3]; i++) {
      for (let j = v[0]; j < v[2]; j++) {
        visited[i][j] = 0;
      }
    }
  });

  const result = [];
  let dq = [];
  let markV = 1;
  let cnt = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === -1) {
        visited[i][j] = markV;
        dq.push([i, j, markV]);
        bfs();
        cnt += 1;
        markV += 1;
        result.push(cnt);
        cnt = 0;
      }
    }
  }

  log(markV - 1);
  log(...result.sort((a, b) => a - b));
}

solution(...inputMNK, inputArea);
