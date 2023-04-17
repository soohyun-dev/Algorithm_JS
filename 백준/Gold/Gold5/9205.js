const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const T = +input[0];
let idx = 1;

/**
 * 편의점을 꼭 지날 필요 X, 바로 목적지로 갈 수 도 있음.
 * 편의점이 꼭 있다는 보장 X
 */

for (let i = 0; i < T; i++) {
  const bfs = (X, Y) => {
    const deque = [[X, Y]];
    while (deque.length) {
      const [x, y] = deque[0];
      deque.shift();

      // 목적지 바로 이동 가능
      if (Math.abs(x - festival[0]) + Math.abs(y - festival[1]) <= 1000) {
        check = true;
        return;
      }

      for (let k = 0; k < N; k++) {
        if (!visited[k]) {
          if (Math.abs(x - place[k][0]) + Math.abs(y - place[k][1]) <= 1000) {
            visited[k] = true;
            deque.push([place[k][0], place[k][1]]);
          }
        }
      }
    }
    return;
  };

  const N = +input[idx];
  idx += 1;
  const visited = Array.from({ length: N }).fill(false);
  const start = input[idx].split(' ').map(Number);
  let place = [];
  let check = false;
  for (let j = 1; j <= N; j++) {
    place.push(input[idx + j].split(' ').map(Number));
  }
  idx += N + 1;
  const festival = input[idx].split(' ').map(Number);
  idx += 1;

  bfs(...start);

  log(check ? 'happy' : 'sad');
}
