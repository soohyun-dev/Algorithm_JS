const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [S, bomb] = input;

function solution(S, bomb) {
  let arr = [];
  let len = bomb.length;
  S.split("").map((v) => {
    if (arr.slice(arr.length - len + 1, arr.length).join("") + v === bomb) {
      for (let i = 0; i < len - 1; i++) arr.pop();
    } else arr.push(v);
  });
  return arr.length === 0 ? "FRULA" : arr.join("");
}

console.log(solution(S, bomb));
