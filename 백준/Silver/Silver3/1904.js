const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let dp = [...new Array(N + 1)];
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
for (let i = 4; i < N + 1; i++) {
  if (i % 2 === 0) dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  else dp[i] = (dp[i - 2] + (i - 1)) % 15746;
}
console.log(dp[N]);
