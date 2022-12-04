const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
input.shift();
const input_codes = input[0].split(" ").map(Number);
function solution(N, K, codes) {
  let sum = 0;
  codes.forEach((v) => {
    if (v % 2 == 0) {
      sum += ~~(v / 2);
    } else {
      sum += ~~(v / 2) + 1;
    }
  });

  return sum >= N ? "YES" : "NO";
}

console.log(solution(input_N, input_K, input_codes));
