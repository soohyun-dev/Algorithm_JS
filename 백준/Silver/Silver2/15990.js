const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
let dp = [...new Array(100001)].map(() => [0, 0, 0]);
dp[1] = [1, 0, 0];
dp[2] = [0, 1, 0];
dp[3] = [1, 1, 1];
for (let i = 4; i < 100001; i++) {
  dp[i][0] = (dp[i - 1][1] % 1000000009) + (dp[i - 1][2] % 1000000009);
  dp[i][1] = (dp[i - 2][0] % 1000000009) + (dp[i - 2][2] % 1000000009);
  dp[i][2] = (dp[i - 3][0] % 1000000009) + (dp[i - 3][1] % 1000000009);
}

input.map((v) => {
  let N = Number(v);
  const result = dp[N].reduce(function add(sum, curV) {
    return sum + curV;
  }, 0);
  console.log(result % 1000000009);
});
