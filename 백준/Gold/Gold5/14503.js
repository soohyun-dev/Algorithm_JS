const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [r, c, d] = input.shift().split(" ").map(Number);
const MAP = [];
input.map((v) => {
  MAP.push(v.trim().split(" ").map(Number));
});

function solution(N, M, r, c, d, MAP) {
  let dq = [[r, c, d]];
  let cnt = 1;
  MAP[r][c] = 2;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  while (dq.length !== 0) {
    let [X, Y, dr] = dq[0];
    let origin_dr = dq[0][2];
    dq = dq.splice(1);
    let check = false;
    for (let i = 0; i < 4; i++) {
      let next_dr = (dr + 3) % 4;
      dr = next_dr;
      let [mx, my] = [X + dx[next_dr], Y + dy[next_dr]];
      if (MAP[mx][my] === 1) continue;
      if (MAP[mx][my] === 0) {
        MAP[mx][my] = 2;
        cnt += 1;
        dq.push([mx, my, next_dr]);
        check = true;
        break;
      }
    }
    if (check === false) {
      if (origin_dr === 0) X += 1;
      else if (origin_dr === 1) Y -= 1;
      else if (origin_dr === 2) X -= 1;
      else if (origin_dr === 3) Y += 1;
      if (MAP[X][Y] == 1) return cnt;
      dq.push([X, Y, origin_dr]);
    }
  }
  return cnt;
}
console.log(solution(N, M, r, c, d, MAP));

// 0   0,-1  1,0  0,1  -1,0
// 1   -1,0  0,-1  1,0  0,1
// 2   0,1  -1,0   0,-1   1,0
// 3   1,0  0,1   -1,0  0,-1
