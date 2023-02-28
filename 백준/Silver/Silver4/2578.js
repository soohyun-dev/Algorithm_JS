const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const log = console.log;
const input_board = [];
const input_nums = [];

for (let i = 0; i < 10; i++) {
  if (i < 5) input_board.push(input[i].trim().split(' ').map(Number));
  else input_nums.push(input[i].trim().split(' ').map(Number));
}

function solution(board, nums) {
  const bingoCheck = (target) => {
    let cnt = 0;
    // 행,열 체크
    for (let i = 0; i < 5; i++) {
      let row = 0;
      let column = 0;
      for (let j = 0; j < 5; j++) {
        if (target[i][j]) row += 1;
        if (target[j][i]) column += 1;
      }
      if (row === 5) cnt += 1;
      if (column === 5) cnt += 1;
    }

    // 대각선 체크
    let left = 0;
    let right = 0;
    for (let i = 0; i < 5; i++) {
      if (target[i][i]) left += 1;
      if (target[i][4 - i]) right += 1;
    }
    if (left === 5) cnt += 1;
    if (right === 5) cnt += 1;

    return cnt >= 3;
  };
  const dict = {};
  board.map((line, i) => {
    line.map((v, j) => {
      dict[v] = [i, j];
    });
  });

  const visited = Array.from(Array(5), () => Array(5).fill(false));

  let stage = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      stage += 1;
      visited[dict[nums[i][j]][0]][dict[nums[i][j]][1]] = true;
      if (stage >= 12) {
        if (bingoCheck(visited)) {
          return stage;
        }
      }
    }
  }
}

log(solution(input_board, input_nums));
