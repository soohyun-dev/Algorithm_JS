/*
요구사항

1개 or 3개 or 4개 의 돌을 가져갈 수 있다.
마지막 돌을 가져가는 사람이 이긴다.
이기는 사람을 구하시오.

# 해결 전략
dp 사용

완벽하게 게임을 했을 때? => 가져갈 수 있는 개수 중 가장 큰 값 가져가기

6일 때,
4 1 1    <= 완벽하게 게임 한 경우
3 1 1 1
3 3
1 1 1 1 1 1

뺄 수 있는 가장 큰 값으로 빼주기
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(stones) {
  const FOUR_STONES = 4;
  const THREE_STONES = 3;
  const ONE_STONES = 1;

  const DP = Array.from({ length: stones + 1 }).fill(0);
  [DP[1], DP[3], DP[4]] = [1, 1, 1];

  for (let i = 5; i < stones + 1; i++) {
    if (!DP[i - ONE_STONES]) DP[i] = 1;
    if (!DP[i - THREE_STONES]) DP[i] = 1;
    if (!DP[i - FOUR_STONES]) DP[i] = 1;
  }

  return DP[stones] ? "SK" : "CY";
}

console.log(solution(Number(input)));
