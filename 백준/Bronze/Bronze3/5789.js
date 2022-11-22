const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = Number(input[0]);
input.shift();
const [...input_case] = input;

function solution(N, Case) {
  Case.forEach((v) => {
    const center = ~~(v.length / 2);
    console.log(v[center - 1] === v[center] ? "Do-it" : "Do-it-Not");
  });
}

solution(input_N, input_case);
