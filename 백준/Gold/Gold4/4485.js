const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;
const dr_x = [-1, 0, 1, 0];
const dr_y = [0, 1, 0, -1];
let idx = 0;
let stage = 1;

while (true) {
  const N = +input[idx];
  if (N === 0) break;
  const nums = [];
  const cost = Array.from(Array(N), () => Array(N).fill(Infinity));
  let deque = [[0, 0]];
  idx += 1;
  for (let i = 0; i < N; i++) {
    nums.push(input[idx].split(' ').map(Number));
    idx += 1;
  }
  cost[0][0] = nums[0][0];

  while (deque.length) {
    const [X, Y] = deque[0];
    deque = deque.splice(1);
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [X + dr_x[i], Y + dr_y[i]];
      if (mx < 0 || mx >= N || my < 0 || my >= N) continue;
      const nextValue = cost[X][Y] + nums[mx][my];
      if (cost[mx][my] > nextValue && cost[N - 1][N - 1] > nextValue) {
        cost[mx][my] = nextValue;
        deque.push([mx, my]);
      }
    }
  }

  log(`Problem ${stage}: ${cost[N - 1][N - 1]}`);
  stage += 1;
}
