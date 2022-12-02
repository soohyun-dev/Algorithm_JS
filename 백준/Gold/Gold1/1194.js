const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_M] = input[0].split(" ").map(Number);
input.shift();
const [...input_board] = input.map((v) => v.split(""));

function solution(N, M, board) {
  const check = {};
  const key = ["a", "b", "c", "d", "e", "f"];
  const door = ["A", "B", "C", "D", "E", "F"];
  key.forEach((v) => (check[v] = false));
  door.forEach((v) => (check[v] = false));

  board.forEach((line) => {
    line.forEach((v) => {});
  });
}

console.log(solution(input_N, input_M, input_board));
