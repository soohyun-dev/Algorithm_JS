const { exit } = require("process");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);
let cnt = Number(input[3]);

for (let i = 0; i < 101; i++) {
  for (let j = 0; j < 101; j++) {
    for (let k = 0; k < 101; k++) {
      if (A * i + B * j + C * k === cnt) {
        console.log(1);
        exit(0);
      }
    }
  }
}
console.log(0);
