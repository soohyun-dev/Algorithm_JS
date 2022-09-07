const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let A = 1;
for (let i = 0; i < T; i++) {
  let N = Number(input[A]);
  list = [];
  for (let j = 1; j < N + 1; j++) {
    const [a, b] = input[A + j].split(" ").map(Number);
    list.push([a, b]);
  }
  list.sort((a, b) => a[0] - b[0]);
  let S = list[0][1];
  let cnt = 1;
  for (let i = 1; i < N; i++) {
    if (S > list[i][1]) {
      cnt += 1;
      S = list[i][1];
    }
  }
  console.log(cnt);
  A += N + 1;
}
