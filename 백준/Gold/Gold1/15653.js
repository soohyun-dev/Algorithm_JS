const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const [...input_board] = input.map((v) => v.split(""));

function solution(N, M, board) {
  const bfs = (rx, ry, bx, by) => {
    let dq = [[rx, ry, bx, by, 1]];
    while (dq.length !== 0) {
      const [rX, rY, bX, bY, C] = dq[0];
      dq = dq.splice(1);
      for (let i = 0; i < 4; i++) {
        let [mrx, mry, rc] = move(rX, rY, dr_x[i], dr_y[i]);
        let [mbx, mby, rb] = move(bX, bY, dr_x[i], dr_y[i]);
        if (board[mbx][mby] === "O") continue;
        if (board[mrx][mry] === "O") return C;
        if (mrx === mbx && mry === mby) {
          if (rc > rb) {
            [mrx, mry] = mediate(mrx, mry, dr_x[i], dr_y[i]);
          } else if (rc < rb) {
            [mbx, mby] = mediate(mbx, mby, dr_x[i], dr_y[i]);
          }
        }
        const key = `${mrx}${mry}${mbx}${mby}`;
        if (visited[key] === undefined) {
          visited[key] = true;
          dq.push([mrx, mry, mbx, mby, C + 1]);
        }
      }
    }
    return -1;
  };

  const move = (x, y, drX, drY) => {
    let cnt = 0;
    while (board[x + drX][y + drY] !== "#" && board[x][y] !== "O") {
      [x, y, cnt] = [x + drX, y + drY, cnt + 1];
    }

    return [x, y, cnt];
  };

  const mediate = (x, y, drX, drY) => {
    return [x - drX, y - drY];
  };

  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  const visited = {};
  let [redBall, blueBall] = [[], []];
  board.forEach((line, i) => {
    line.forEach((v, j) => {
      if (v === "B") blueBall = [i, j];
      if (v === "R") redBall = [i, j];
    });
  });
  visited[`${redBall[0]}${redBall[1]}${blueBall[0]}${blueBall[1]}`] = true;

  return bfs(...[...redBall, ...blueBall]);
}

console.log(solution(input_N, input_M, input_board));
