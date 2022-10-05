const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, m] = input.shift();
const dayPay = input[0];

function solution(n, m, dayPay) {
  let total = 0;
  for (let i = 0; i < m; i++) total += dayPay[i];
  let MAX = total;
  for (let j = 1; j < n - m; j++) {
    total = total - dayPay[j - 1] + dayPay[j + m - 1];
    MAX = Math.max(total, MAX);
  }
  return MAX;
}

console.log(solution(n, m, dayPay));
