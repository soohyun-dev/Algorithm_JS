const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [...input_rectangles] = input.map((v) => v.split(" ").map(Number));

function solution(rectangles) {
  const board = Array.from(Array(101), () => Array.from(101).fill(false));
  let cnt = 0;

  rectangles.forEach((v) => {
    for (let i = v[0]; i < v[2]; i++) {
      for (let j = v[1]; j < v[3]; j++) {
        board[i][j] = true;
      }
    }
  });

  for (let i = 0; i < 101; i++) {
    for (let j = 0; j < 101; j++) {
      if (board[i][j]) cnt += 1;
    }
  }

  return cnt;
}

console.log(solution(input_rectangles));
