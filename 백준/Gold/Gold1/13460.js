/*
요구사항

1. 세로 N, 가로 M
2. 왼쪽, 오른쪽, 위쪽, 아래쪽으로 기울이기 동작 가능
3. 공은 동시에 움직인다.
4. 빨간 구슬이 구멍에 들어가면 성공
5. 파란 구슬이 구멍에 들어가면 실패
6. 동시에 둘다 들어가도 실패
7. 동시에 같은 칸에 같이 있을 수 는 없다.
8. 최소 몇 번 만에 빨간 구슬을 뺄 수 있는지 출력한다.
9. 만약, 10번 이하로 움직여서 빨간 구슬을 구멍을 통해 빼낼 수 없으면 -1을 출력한다.

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [input_NM, ...input_board] = input.map((v) => v.trim());
input_board = input_board.map((v) => v.split(""));
const [input_N, input_M] = input_NM.split(" ").map(Number);

function solution(N, M, board) {
  const bfs = (rx, ry, bx, by) => {
    let deque = [[rx, ry, bx, by, 1]];
    while (deque.length !== 0) {
      const [rX, rY, bX, bY, C] = deque[0];
      deque = deque.splice(1);
      if (C > 10) break;
      for (let i = 0; i < 4; i++) {
        let [mrX, mrY, rC] = move(rX, rY, dr_x[i], dr_y[i]);
        let [mbX, mbY, bC] = move(bX, bY, dr_x[i], dr_y[i]);
        if (board[mbX][mbY] === "O") continue;
        if (board[mrX][mrY] === "O") return C;
        if (mrX === mbX && mrY === mbY) {
          if (rC > bC) {
            [mrX, mrY] = mediate(mrX, mrY, dr_x[i], dr_y[i]);
          } else if (rC < bC) {
            [mbX, mbY] = mediate(mbX, mbY, dr_x[i], dr_y[i]);
          }
        }
        let key = `${mrX}${mrY}${mbX}${mbY}`;
        if (visited[key] === undefined) {
          visited[key] = true;
          deque.push([mrX, mrY, mbX, mbY, C + 1]);
        }
      }
    }
    return -1;
  };

  const move = (x, y, drX, drY) => {
    let cnt = 0;
    while (board[x + drX][y + drY] !== "#" && board[x][y] !== "O") {
      x += drX;
      y += drY;
      cnt += 1;
    }
    return [x, y, cnt];
  };

  const mediate = (x, y, drX, drY) => {
    return [x - drX, y - drY];
  };

  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  let [red, blue] = [[], []];

  board.forEach((line, i) => {
    line.forEach((v, j) => {
      if (v === "R") red = [i, j];
      if (v === "B") blue = [i, j];
    });
  });

  const visited = {};
  visited[`${red[0]}${red[1]}${blue[0]}${blue[1]}`] = true;

  return bfs(red[0], red[1], blue[0], blue[1]);
}

console.log(solution(input_N, input_M, input_board));
