const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = input.shift();

const cntNumber = input.map((value) => {
  let [a, b] = value.split(" ");

  let tmp = 1;
  for (let i = 0; i < b; i++) {
    tmp = (tmp * a) % 10;
  }
  return tmp === 0 ? 10 : tmp;
});

console.log(cntNumber.join("\n"));
