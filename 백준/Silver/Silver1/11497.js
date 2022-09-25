const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
for (let i = 1; i < T + 1; i++) {
  const N = Number(input[2 * i - 1]);
  let arr = input[2 * i].split(" ").map(Number);
  arr.sort((a, b) => b - a);
  let check = [];
  for (let i of arr) {
    check.push(i);
    check.reverse();
  }
  let MAX = 0;
  check.map((a, b) => {
    if (Math.abs(a - check[b + 1]) > MAX) MAX = Math.abs(a - check[b + 1]);
  });
  //   for (let j = 1; j < N; j++) {
  //     let tmp = Math.abs(check[j] - check[j - 1]);
  //     if (tmp > MAX) MAX = tmp;
  //   }
  console.log(MAX);
}
