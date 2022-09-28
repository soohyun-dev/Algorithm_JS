const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const nums = [];
for (let i = 1; i <= T; i++) {
  nums.push(Number(input[i]));
}

nums.sort((a, b) => a - b);
