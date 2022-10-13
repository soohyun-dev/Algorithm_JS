const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ");
const nums = [];
for (let i = 0; i < n; i++) nums.push(input[i].trim());
function solution(n, k, nums) {
  let dp = Array.from({ length: k + 1 }, () => 0);
  dp[0] = 1;
  for (let num of nums) for (let j = num; j < k + 1; j++) dp[j] += dp[j - num];
  return dp[k];
}

console.log(solution(+n, +k, nums));

// 10
// 8 1
// 6 2
// 4 3
// 2 4
// 0 5
// 5 0 1
// 3 1 1
// 1 2 1
// 0 0 1
