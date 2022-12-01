const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const [...input_board] = input.map((v) => v.split(""));

function solution(N, M, board) {
  const bfs = (jihoon, fire) => {
    dq = [];
    fire.forEach((v) => {
      dq.push([...v, "F", 0]);
    });
    dq.push([...jihoon, "J", 0]);
    let isJmove = [0];
    while (dq.length !== 0) {
      const [x, y, W, C] = dq[0];
      if (W === "J") isJmove.pop();
      if (x === 0 || x === N - 1 || y === 0 || y === M - 1) {
        if (W === "J") return C + 1;
      }
      dq.shift();
      for (let i = 0; i < 4; i++) {
        const [mx, my] = [x + dr_x[i], y + dr_y[i]];
        if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
        if (W === "J") {
          if (board[mx][my] === ".") {
            board[mx][my] = "J";
            dq.push([mx, my, "J", C + 1]);
            isJmove.push(0);
          }
        } else if (W === "F") {
          if (board[mx][my] === "." || board[mx][my] === "J") {
            board[mx][my] = "F";
            dq.push([mx, my, "F", C + 1]);
          }
        }
      }
      if (isJmove.length === 0) break;
    }
    return "IMPOSSIBLE";
  };
  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  let [jihoonInfo, fireInfo] = [[], []];
  board.forEach((line, i) => {
    line.forEach((v, j) => {
      if (v === "J") jihoonInfo = [i, j];
      if (v === "F") fireInfo.push([i, j]);
    });
  });

  return bfs(jihoonInfo, fireInfo);
}

console.log(solution(input_N, input_M, input_board));
