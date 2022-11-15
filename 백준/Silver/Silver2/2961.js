/*
*요구사항

신맛과 쓴맛의 차이가 가장 작은 요리를 만들고 그 차이 출력

*해결전략

dfs 로 1~N가지 경우를 모두 비교해보기
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_T = input.shift();
const [...input_ingredient] = input.map((v) => v.split(" ").map(Number));

function solution(T, ingredient) {
  const check = (depth, cnt) => {
    if (store.length === cnt) {
      let sour = 1;
      let bitter = 0;
      store.forEach((v) => {
        sour *= ingredient[v][0];
        bitter += ingredient[v][1];
      });
      if (MIN > Math.abs(sour - bitter)) MIN = Math.abs(sour - bitter);

      return;
    }

    for (let i = 0; i < T; i++) {
      if (!visited[i]) {
        visited[i] = true;
        store.push(i);
        check(depth + 1, cnt);
        store.pop();
        visited[i] = false;
      }
    }
  };

  let MIN = Infinity;
  let store = [];
  let visited = new Array({ length: T }).fill(false);
  for (let j = 1; j < T + 1; j++) {
    check(0, j);
    if (MIN === 0) break;
  }

  return MIN;
}

console.log(solution(Number(input_T), input_ingredient));
