const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

const cntMember = (A, B, C) => {
  let result = Math.min(A + C, B + C, parseInt((A + B + C) / 2));
  return result * 2;
};

console.log(cntMember(a, b, c));
