/*
* 요구사항

말이 지날수 있는 최대의 칸 수 출력
한 번 지난 알파벳과 동일한 알파벳은 못지남.

* 해결 전략

DFS 탐색 & dict 로 지난 알파벳 정보 확인

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_R, input_C] = input[0].split(" ").map(Number);
input.shift();
const [...input_board] = input;

function solution(R, C, board) {
  const start = (x, y, move) => {
    isPass[board[x][y]] = true;
    if (move > MAX) MAX = move;
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [x + dr_x[i], y + dr_y[i]];
      if (mx < 0 || mx >= R || my < 0 || my >= C) continue;
      if (isPass[board[mx][my]]) continue;
      else {
        isPass[board[mx][my]] = true;
        start(mx, my, move + 1);
        isPass[board[mx][my]] = false;
      }
    }
  };

  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  const isPass = {};
  let MAX = 0;

  board = board.map((v) => v.trim().split(""));

  start(0, 0, 1);

  return MAX;
}

console.log(solution(input_R, input_C, input_board));
