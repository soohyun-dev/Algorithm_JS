const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, d, k, c] = input.shift();
const sushi = input.map((v) => Number(v));
function solution(N, d, k, c, sushi) {
  let MAX = 0;
  let tmp = 0;
  for (let i = 0; i < N; i++) {
    if (i + k >= sushi.length) {
      tmp = [...sushi.slice(i), ...sushi.slice(0, i + k - sushi.length), c];
    } else tmp = [...sushi.slice(i, i + k), c];
    let s_tmp = new Set(tmp);
    let result = [...s_tmp];
    if (result.length > MAX) MAX = result.length;
  }
  return MAX;
}

console.log(solution(N, d, k, c, sushi));
