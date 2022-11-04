/*
# 요구사항

1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
2. X가 2로 나누어 떨어지면, 2로 나눈다.
3. 1을 뺀다.

연산을 하는 횟수의 최솟값을 출력
그 과정을 출력

# 해결전략

1부터 +=1, *=2, *=3 을 해나아가면서 (bfs)
도착 지점까지 이동.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = Number(input);

function solution(N) {
  function divide(num, idx) {
    track[idx][0] = Math.min(track[parseInt(idx / num)][0] + 1, track[idx][0]);
    if (track[idx][0] === track[parseInt(idx / num)][0] + 1) {
      track[idx][1] = parseInt(idx / num);
    }
  }

  let track = Array.from({ length: N + 1 }, () => [Infinity, 0]);
  track[1] = [1, 0];
  for (let i = 2; i <= N; i++) {
    track[i][0] = Math.min(track[i - 1][0] + 1, track[i][0]);
    if (track[i][0] === track[i - 1][0] + 1) {
      track[i][1] = i - 1;
    }
    if (i % 3 === 0) divide(3, i);
    if (i % 2 === 0) divide(2, i);
  }
  let result = [N];
  let beforePlace = track[N][1];
  while (beforePlace !== 0) {
    result.push(beforePlace);
    beforePlace = track[beforePlace][1];
  }
  console.log(track[N][0] - 1);
  console.log(result.join(" "));
}

solution(input_N);
