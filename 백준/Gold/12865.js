const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const cal = (Arr) => {
  Arr.map((v) => {
    let [a, b] = v;
    for (let i = K; i > a - 1; i--)
      check[i] = Math.max(check[i], check[i - a] + b);
  });
  return check[K];
};

const [N, K] = input.shift().split(" ").map(Number);
let check = [...new Array(K + 1)].fill(0);
let arr = [];
input.map((v) => {
  let [w, g] = v.trim().split(" ").map(Number);
  arr.push([w, g]);
});

console.log(cal(arr));
