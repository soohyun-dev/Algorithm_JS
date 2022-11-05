const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(N) {
  const FOUR_STONE = 4;
  const THREE_STONE = 3;
  const ONE_STONE = 1;

  const DP = Array.from({ length: N + 1 }).fill(false);
  DP[2] = true;

  for (let i = 4; i <= N; i++) {
    if (!DP[i - ONE_STONE]) DP[i] = true;
    if (!DP[i - THREE_STONE]) DP[i] = true;
    if (!DP[i - FOUR_STONE]) DP[i] = true;
  }

  return DP[N] ? "SK" : "CY";
}

console.log(solution(Number(input)));

/*
1 cy
2 sk
3 cy
4 sk
5 sk
6 sk
7 sk
*/
