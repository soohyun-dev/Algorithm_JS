const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, K] = input.shift();
const applePie = input[0];
function solution(N, K, applePie) {
  let total = 0;
  for (let i = 0; i < K; i++) total += applePie[i];
  let MAX = total;
  for (let j = 1; j <= applePie.length - 1; j++) {
    total -= applePie[j - 1];
    let tmp = j + K - 1;
    if (j + K - 1 >= applePie.length) tmp = j + K - 1 - applePie.length;
    total += applePie[tmp];
    MAX = Math.max(MAX, total);
  }
  return MAX;
}

console.log(solution(N, K, applePie));
