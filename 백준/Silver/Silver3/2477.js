const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
let arr = [];

input.map((v) => {
  let [a, b] = v.trim().split(" ").map(Number);
  arr.push(b);
});

let MAX = 0;
let MIN = 0;
let idx = 0;
let tmp = 0;

for (let i = 0; i < 6; i++) {
  tmp = arr[i] * arr[(i + 1) % 6];
  if (MAX < tmp) {
    MAX = tmp;
    idx = i;
  }
}

MIN = arr[(idx + 3) % 6] * arr[(idx + 4) % 6];
console.log((MAX - MIN) * Number(T));
