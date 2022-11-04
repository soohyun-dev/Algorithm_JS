/*
# 요구사항

1. N개의 문제는 모두 풀어야 한다.
2. 먼저 푸는 것이 좋은 문제가 있는 문제는, 
   먼저 푸는 것이 좋은 문제를 반드시 먼저 풀어야 한다.
3. 가능하면 쉬운 문제부터 풀어야 한다.

풀어야하는 순서대로 한 줄에 출력.

# 해결전략

위상정렬 문제.
우선순위를 부여하고, 우선순위대로 차례로 출력하자.

*/

let input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [input_N, input_M] = input[0];
input.shift();

function solution(N, M, info) {
  let rank = Array.from({ length: N + 1 }, () => 0).fill(-1, 0, 1);
  let nextProblem = Array.from({ length: N + 1 }, () => []);
  info.forEach((order) => {
    let [front, back] = order;
    nextProblem[front].push(back);
    rank[back] += 1;
  });
  let result = [];
  let queue = [];
  rank.forEach((ranking, idx) => {
    if (ranking === 0) queue.push(idx);
  });
  while (queue.length !== 0) {
    let nowProblem = queue.shift();
    result.push(nowProblem);
    nextProblem[nowProblem].forEach((num) => {
      rank[num] -= 1;
      if (rank[num] === 0) {
        queue.push(num);
      }
    });
  }
  console.log(result);
  return result.join(" ");
}
console.log(solution(input_N, input_M, input));
