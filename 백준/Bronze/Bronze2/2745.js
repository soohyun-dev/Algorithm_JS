const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let number = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const calNum = (str, N) => {
  let answer = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let tmp = number.indexOf(str[i]) * N ** i;
    answer += tmp;
  }
  return answer;
};

let B = input[0].split("").reverse().join("");
let ten = Number(input[1]);

console.log(calNum(B, ten));
