const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let order = input[1].trim().split(" ").map(Number).reverse();
let store = [];
for (let i = 0; i < T; i++) {
  if (order[i] === 1) {
    store.unshift(i + 1);
  } else if (order[i] === 2) {
    store.splice(1, 0, i + 1);
  } else if (order[i] === 3) {
    store.push(i + 1);
  }
}

console.log(store.join(" "));
