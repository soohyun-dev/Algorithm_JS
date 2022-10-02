const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, K] = input.shift();
const dolls = input[0];

function solution(N, K, dolls) {
  const lion = [];
  dolls.map((v, idx) => (v === 1 ? lion.push(idx) : ""));
  // 초기 라이언 인형 숫자가 K보다 적을 시 바로 종료.
  if (lion.length < K) return -1;

  let result = Infinity;
  let [left, right, cnt] = [0, K - 1, 0];
  while (true) {
    cnt = lion[right] - lion[left] + 1;
    result = Math.min(result, cnt);
    [left, right] = [left + 1, right + 1];
    if (right === lion.length) break;
  }
  return result;
}

console.log(solution(N, K, dolls));
