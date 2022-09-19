const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ");
let check = [...new Array(Number(K) + 1)].fill(0);
let arr = [];
input.map((v) => {
  let [w, g] = v.trim().split(" ").map(Number);
  arr.push([w, g]);
});

arr.map((v) => {
  let [a, b] = v;
  for (let i = Number(K); i > a - 1; i--)
    check[i] = Math.max(check[i], check[i - a] + b);
});

console.log(check[check.length - 1]);
