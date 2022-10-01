const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, K, B] = input.shift();
const nums = input.map((v) => Number(v));

function solution(N, K, B, nums) {
  let answer = Infinity;
  const arr = Array.from({ length: N + 1 }).fill(0);
  nums.map((v) => (arr[v] = 1));
  let result = 0;
  for (let i = 0; i < K; i++) result += arr[i] ?? 0;
  for (let j = 1; j <= N - K + 1; j++) {
    result = result - (arr[j - 1] ?? 0) + (arr[j + K - 1] ?? 0);
    answer = Math.min(answer, result);
  }
  return answer;
}

console.log(solution(N, K, B, nums));
