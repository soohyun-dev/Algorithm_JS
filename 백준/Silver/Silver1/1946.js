const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const T = input.shift().map(Number);
for (let i = 0; i < T; i++) {
  const N = input.shift().map(Number);
  list = [];
  for (let j = 0; j < N; j++) {
    const [a, b] = input.shift().split(" ").map(Number);
    list.push([a, b]);
  }
}
