/* 
# 요구사항

돌을 1개 혹은 3개만 가져갈 수 있다.
마지막 돌을 가져간 사람이 이김.

# 해결전략

dp 문제
1,3 번 인덱스에 상근 배정
1 이면 상근, 0 이면 창영
for 문 으로 4번 인덱스부터 돌면서 
해당 인덱스에서 +1 +3 한 배열에 이전에 배정된 사람과 반대 사람 배정
다 돌고 dp[N] 출력
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(N) {
  return N % 2 ? "SK" : "CY";
}

console.log(solution(Number(input)));
