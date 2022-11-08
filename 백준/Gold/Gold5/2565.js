/*
## 요구사항

남아있는 전깃줄이 교차하지 않기 위해서 없애야할 최소한의 전깃줄 개수를 구하시오.


# 해결전략

이분탐색

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_N = input.shift();
const [...input_codes] = input.map((v) => v.split(" ").map(Number));

function solution(N, codes) {
  const record = Array.from({ length: N }).fill(0);
  codes = codes.sort((a, b) => a[0] - b[0]);
  codes.forEach((_, idx) => {
    for (let j = 0; j < idx; j++) {
      if (codes[j][1] < codes[idx][1] && record[idx] < record[j]) {
        record[idx] = record[j];
      }
    }
    record[idx] += 1;
  });
  return N - Math.max(...record);
}

console.log(solution(Number(input_N), input_codes));
