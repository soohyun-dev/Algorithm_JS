const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const MAP = input.map((v) => v.trim().split(" ").map(Number));
let MaxDp = [MAP[0][0], MAP[0][1], MAP[0][2]];
let MinDp = [MAP[0][0], MAP[0][1], MAP[0][2]];
function solution(T, MAP) {
  for (let i = 1; i < T; i++) {
    let [X, Y, Z] = [MaxDp[0], MaxDp[1], MaxDp[2]];
    MaxDp[0] = Math.max(X, Y) + MAP[i][0];
    MaxDp[1] = Math.max(X, Y, Z) + MAP[i][1];
    MaxDp[2] = Math.max(Y, Z) + MAP[i][2];
    [X, Y, Z] = [MinDp[0], MinDp[1], MinDp[2]];
    MinDp[0] = Math.min(X, Y) + MAP[i][0];
    MinDp[1] = Math.min(X, Y, Z) + MAP[i][1];
    MinDp[2] = Math.min(Y, Z) + MAP[i][2];
  }

  return [Math.max(...MaxDp), Math.min(...MinDp)].join(" ");
}

console.log(solution(Number(T), MAP));
