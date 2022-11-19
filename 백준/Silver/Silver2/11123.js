const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dr_x = [-1, 0, 1, 0];
const dr_y = [0, 1, 0, -1];
const T = Number(input[0]);
let N = 1;

for (let i = 0; i < T; i++) {
  const dfs = (x, y) => {
    for (let k = 0; k < 4; k++) {
      const [mx, my] = [x + dr_x[k], y + dr_y[k]];
      if (mx < 0 || mx >= H || my < 0 || my >= W) continue;
      if (!visited[mx][my] && ground[mx][my] === "#") {
        visited[mx][my] = true;
        dfs(mx, my);
      }
    }
  };

  const [H, W] = input[N].split(" ").map(Number);
  const visited = Array.from(Array(H), () => Array(W).fill(false));
  const ground = [];
  let cnt = 0;
  N += 1;
  for (let j = N; j < N + H; j++) ground.push(input[j].split(""));
  N += H;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (ground[i][j] === "#" && !visited[i][j]) {
        cnt += 1;
        dfs(i, j);
      }
    }
  }
  console.log(cnt);
}
