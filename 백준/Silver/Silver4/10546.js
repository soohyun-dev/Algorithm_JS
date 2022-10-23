/*
완주하지 못한 참가자 이름 출력
N개의 참가자 입력이 주어지고,
N-1개의 완주자 입력이 주어짐.
나머지 한명의 이름을 찾으시오.

주의. 동명이인 있을 수 있음.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [T, ...LIST] = input;
function solution(T, LIST) {
  let dict = {};
  for (let i = 0; i < T; i++) {
    if (dict[LIST[i]]) dict[LIST[i]] += 1;
    else dict[LIST[i]] = 1;
  }
  LIST = LIST.splice(T);
  LIST.map((v) => (dict[v] -= 1));
  for (let key in dict) if (dict[key] === 1) return key;
}
console.log(solution(Number(T), LIST));
