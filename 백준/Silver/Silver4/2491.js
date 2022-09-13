const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let up_arr = [...new Array(T)].fill(1);
let down_arr = [...new Array(T)].fill(1);
for (let i = 1; i < T; i++) {
  if (arr[i - 1] <= arr[i]) up_arr[i] = Math.max(up_arr[i], up_arr[i - 1] + 1);
  if (arr[i - 1] >= arr[i])
    down_arr[i] = Math.max(down_arr[i], down_arr[i - 1] + 1);
}
console.log(Math.max(Math.max(...up_arr), Math.max(...down_arr)));
