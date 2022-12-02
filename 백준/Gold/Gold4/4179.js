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
    let cntJMove = 1;
    dq = [];
    fire.forEach((v) => {
      dq.push([...v, "F", 0]);
    });
    dq.push([...jihoon, "J", 0]);
    while (dq.length !== 0) {
      const [x, y, mover, cnt] = dq[0];
      dq.shift();
      if (mover === "J") cntJMove -= 1;
      if (x === 0 || x === N - 1 || y === 0 || y === M - 1) {
        if (mover === "J") return cnt + 1;
      }
      for (let i = 0; i < 4; i++) {
        const [mx, my] = [x + dr_x[i], y + dr_y[i]];
        if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
        if (mover === "J") {
          if (board[mx][my] === ".") {
            board[mx][my] = "J";
            dq.push([mx, my, "J", cnt + 1]);
            cntJMove += 1;
          }
        } else if (mover === "F") {
          if (board[mx][my] === "." || board[mx][my] === "J") {
            board[mx][my] = "F";
            dq.push([mx, my, "F"]);
          }
        }
      }
      if (cntJMove <= 0) break;
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
