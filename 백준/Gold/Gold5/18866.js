const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');
const log = console.log;
const inputN = +input[0];
input.shift();
const inputList = input.map((v) => v.trim().split(' ').map(Number));

/*
1, 2, …, K년은 욱제의 젊은 날
K + 1, K + 2, …, N년은 욱제의 늙은 날

임의의 젊은 날의 행복도는 임의의 늙은 날의 행복도보다 높다.
임의의 젊은 날의 피로도는 임의의 늙은 날의 피로도보다 낮다.
*/

function solution(N, list) {
  const info = Array.from({ length: N + 1 }, () => []);
}

log(solution(inputN, inputList));
