const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const nums = [];
const dict = {};
for (let i = 1; i <= T; i++) {
  nums.push(Number(input[i]));
  dict[Number(input[i])] = 0;
}

let MIN = Infinity;
for (let i of nums) {
  for (let j = -4; j <= 4; j++) {
    let tmp = 0;
    for (let k = j; k < j + 5; k++) {
      if (dict[i + k] === 0) tmp += 1;
    }
    if (MIN > 5 - tmp) MIN = 5 - tmp;
  }
}
console.log(MIN);
