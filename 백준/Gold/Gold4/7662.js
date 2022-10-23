/* 
요구사항

I 숫자 : deque에 삽입
D 1 : deque 최댓값 삭제
D -1 : deque 최솟값 삭제

최종 deque 비어있으면 EMPTY 출력
값이 있다면, 최댓값 최솟값 출력

*/

const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
for (let i = 0; i < Number(T); i++) {
  const N = input.shift();
  let deque = [];
  for (let j = 0; j < Number(N); j++) {
    const [order, num] = input.shift();
    if (order === "I") deque.push(Number(num));
    else if (order === "D") {
      if (num === 1) {
      }
    }
  }
}
