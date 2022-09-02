const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let arr = [];
for (let i = 0; i <= input.length; ++i) {
  arr.push(+input[i]);
}

const A = arr[0];
const B = arr[1];

console.log(A + B);
