const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const dict = {};
const arr = [];
for (let i = 1; i < T + 1; i++) {
  const [A, B] = input[i].trim().split(".");
  if (!dict[B]) {
    dict[B] = 1;
    arr.push(B);
  } else {
    dict[B] += 1;
  }
}

arr.sort();

for (i of arr) {
  console.log(i, dict[i]);
}
