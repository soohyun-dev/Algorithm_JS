const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const list = [...new Array(T)].fill(0);
for (let i = 0; i < T; i++) {
  let cnt = 0;
  let K = 0;
  for (let j = 0; j < T; j++) {
    if (list[j] === 0) {
      if (cnt === arr[i]) {
        K = j;
        break;
      }
      cnt += 1;
    }
  }
  list[K] = i + 1;
}
console.log(list.join(" "));
