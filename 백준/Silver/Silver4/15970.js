const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cntDist = (arr) => {
  let cnt = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) cnt += Math.abs(arr[1] - arr[0]);
    else {
      let A = Math.abs(arr[i + 1] - arr[i]);
      let B = Math.abs(arr[i] - arr[i - 1]);
      if (A <= B) {
        cnt += A;
      }
    }
  }
  return cnt;
};

const T = Number(input[0]);
const color = [...new Array(T + 1)].map(() => []);
const check = [];
const dict = {};
for (let i = 1; i < T + 1; i++) {
  const [p, c] = input[i].split(" ").map(Number);
  if (!dict[c]) {
    dict[c] = 1;
    check.push(c);
  }
  color[c].push(p);
}

let answer = 0;
for (let i of check) {
  color[i].sort((a, b) => a - b);
  answer += cntDist(color[i]);
  color[i].sort((a, b) => b - a);
  answer += cntDist(color[i]);
}

console.log(answer);
