const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = input.shift();

const lineNum = input.map((value) => {
  let arr = value.split(" ");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.splice(Number(arr[i]), 0, i + 1);
  }
  answer.reverse();
  console.log(answer.join(" "));
});
