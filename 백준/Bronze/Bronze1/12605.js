const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [T, ...Case] = input;
function solution(T, Case) {
  Case.map((C, i) => {
    let result = C.split(" ").reverse();
    console.log(`Case #${i + 1}: ${result.join(" ")}`);
  });
}
solution(T, Case);
